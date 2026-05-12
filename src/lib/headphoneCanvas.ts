/** Matches page void; keep sequence exports on same hex for invisible edges. */
export const CANVAS_BG = "#050505";

function easeOutCubic(x: number): number {
  return 1 - (1 - x) ** 3;
}

function clamp01(v: number): number {
  return Math.min(1, Math.max(0, v));
}

/** Smoothstep for softer component motion */
function smooth(t: number): number {
  const x = clamp01(t);
  return x * x * (3 - 2 * x);
}

type PartTransform = {
  dx: number;
  dy: number;
  rot: number;
  scale: number;
  alpha: number;
};

function lerpPart(
  assembled: PartTransform,
  exploded: PartTransform,
  t: number,
): PartTransform {
  const u = smooth(t);
  return {
    dx: assembled.dx + (exploded.dx - assembled.dx) * u,
    dy: assembled.dy + (exploded.dy - assembled.dy) * u,
    rot: assembled.rot + (exploded.rot - assembled.rot) * u,
    scale: assembled.scale + (exploded.scale - assembled.scale) * u,
    alpha: assembled.alpha + (exploded.alpha - assembled.alpha) * u,
  };
}

/**
 * Procedural “exploded view” when no bitmap sequence is configured.
 * t ∈ [0, 1]: assembled → disassembled.
 */
export function drawHeadphoneFrame(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  t: number,
): void {
  const progress = clamp01(t);

  ctx.save();
  ctx.fillStyle = CANVAS_BG;
  ctx.fillRect(0, 0, width, height);

  const cx = width * 0.5;
  const cy = height * 0.46;
  const s = Math.min(width, height) * 0.00115;

  const headband = lerpPart(
    { dx: 0, dy: 0, rot: 0, scale: 1, alpha: 1 },
    { dx: 0, dy: -220 * s, rot: 0.08, scale: 0.92, alpha: 0.85 },
    easeOutCubic(progress),
  );

  const cupL = lerpPart(
    { dx: -118 * s, dy: 40 * s, rot: 0, scale: 1, alpha: 1 },
    { dx: -320 * s, dy: 120 * s, rot: -0.45, scale: 1.05, alpha: 1 },
    progress,
  );

  const cupR = lerpPart(
    { dx: 118 * s, dy: 40 * s, rot: 0, scale: 1, alpha: 1 },
    { dx: 320 * s, dy: 120 * s, rot: 0.45, scale: 1.05, alpha: 1 },
    progress,
  );

  const driverL = lerpPart(
    { dx: -118 * s, dy: 38 * s, rot: 0, scale: 1, alpha: 0.95 },
    { dx: -260 * s, dy: -30 * s, rot: -0.2, scale: 1.15, alpha: 1 },
    progress,
  );

  const driverR = lerpPart(
    { dx: 118 * s, dy: 38 * s, rot: 0, scale: 1, alpha: 0.95 },
    { dx: 260 * s, dy: -30 * s, rot: 0.2, scale: 1.15, alpha: 1 },
    progress,
  );

  const chip = lerpPart(
    { dx: 0, dy: 18 * s, rot: 0, scale: 1, alpha: 0 },
    { dx: 0, dy: 200 * s, rot: 0.6, scale: 1.2, alpha: 1 },
    Math.max(0, (progress - 0.35) / 0.65),
  );
  chip.alpha *= progress > 0.32 ? 1 : 0;

  const padL = lerpPart(
    { dx: -118 * s, dy: 52 * s, rot: 0, scale: 1, alpha: 0.55 },
    { dx: -380 * s, dy: 200 * s, rot: 0.25, scale: 0.95, alpha: 0.5 },
    progress,
  );

  const padR = lerpPart(
    { dx: 118 * s, dy: 52 * s, rot: 0, scale: 1, alpha: 0.55 },
    { dx: 380 * s, dy: 200 * s, rot: -0.25, scale: 0.95, alpha: 0.5 },
    progress,
  );

  // Subtle vignette (same hue family, invisible crop edge)
  const g = ctx.createRadialGradient(cx, cy, height * 0.15, cx, cy, height * 0.72);
  g.addColorStop(0, "rgba(255,255,255,0.02)");
  g.addColorStop(1, "rgba(0,0,0,0.45)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, width, height);

  ctx.translate(cx, cy);

  const drawHeadband = () => {
    ctx.save();
    ctx.globalAlpha = headband.alpha;
    ctx.translate(headband.dx, headband.dy);
    ctx.rotate(headband.rot);
    ctx.scale(headband.scale, headband.scale);
    ctx.strokeStyle = "rgba(245,245,250,0.14)";
    ctx.lineWidth = 26 * s;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.arc(0, -90 * s, 150 * s, Math.PI * 1.12, Math.PI * 1.88);
    ctx.stroke();
    ctx.lineWidth = 3 * s;
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.beginPath();
    ctx.arc(0, -90 * s, 150 * s, Math.PI * 1.12, Math.PI * 1.88);
    ctx.stroke();
    ctx.restore();
  };

  const drawCup = (
    part: PartTransform,
    side: 1 | -1,
    outerR: number,
    innerR: number,
  ) => {
    ctx.save();
    ctx.globalAlpha = part.alpha;
    ctx.translate(part.dx, part.dy);
    ctx.rotate(part.rot);
    ctx.scale(part.scale, part.scale);

    const grd = ctx.createRadialGradient(
      side * 12 * s,
      -8 * s,
      outerR * 0.2,
      0,
      0,
      outerR,
    );
    grd.addColorStop(0, "rgba(210,210,220,0.16)");
    grd.addColorStop(0.45, "rgba(28,28,32,0.95)");
    grd.addColorStop(1, "rgba(8,8,10,0.98)");

    ctx.beginPath();
    ctx.ellipse(0, 0, outerR, outerR * 1.05, 0, 0, Math.PI * 2);
    ctx.fillStyle = grd;
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 2 * s;
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(0, 0, innerR, innerR * 1.02, 0, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(5,5,5,0.92)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(side * 4 * s, -2 * s, innerR * 0.35, 0, Math.PI * 2);
    const glint = ctx.createRadialGradient(
      side * 8 * s,
      -10 * s,
      2,
      side * 4 * s,
      -2 * s,
      innerR * 0.5,
    );
    glint.addColorStop(0, "rgba(255,255,255,0.12)");
    glint.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = glint;
    ctx.fill();

    ctx.restore();
  };

  const drawDriverRing = (part: PartTransform, side: 1 | -1) => {
    ctx.save();
    ctx.globalAlpha = part.alpha;
    ctx.translate(part.dx, part.dy);
    ctx.rotate(part.rot);
    ctx.scale(part.scale, part.scale);
    ctx.strokeStyle = "rgba(160,175,255,0.22)";
    ctx.lineWidth = 5 * s;
    ctx.beginPath();
    ctx.arc(0, 0, 62 * s, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = "rgba(255,255,255,0.06)";
    ctx.lineWidth = 1.5 * s;
    ctx.beginPath();
    ctx.arc(0, 0, 54 * s, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  };

  const drawPad = (part: PartTransform) => {
    ctx.save();
    ctx.globalAlpha = part.alpha;
    ctx.translate(part.dx, part.dy);
    ctx.rotate(part.rot);
    ctx.scale(part.scale, part.scale);
    ctx.fillStyle = "rgba(18,18,22,0.55)";
    ctx.beginPath();
    ctx.ellipse(0, 0, 88 * s, 72 * s, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  };

  const drawChip = () => {
    if (chip.alpha <= 0.01) return;
    ctx.save();
    ctx.globalAlpha = chip.alpha;
    ctx.translate(chip.dx, chip.dy);
    ctx.rotate(chip.rot);
    ctx.scale(chip.scale, chip.scale);
    const w = 44 * s;
    const h = 28 * s;
    ctx.fillStyle = "rgba(35,38,48,0.95)";
    ctx.strokeStyle = "rgba(255,255,255,0.1)";
    ctx.lineWidth = 1 * s;
    const x = -w / 2;
    const y = -h / 2;
    const r = 6 * s;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "rgba(200,205,255,0.35)";
    ctx.font = `${10 * s}px system-ui`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("ANC", 0, 0);
    ctx.restore();
  };

  drawPad(padL);
  drawPad(padR);
  drawHeadband();
  drawCup(cupL, -1, 86 * s, 48 * s);
  drawCup(cupR, 1, 86 * s, 48 * s);
  drawDriverRing(driverL, -1);
  drawDriverRing(driverR, 1);
  drawChip();

  ctx.restore();
}
