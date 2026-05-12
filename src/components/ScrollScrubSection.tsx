"use client";

import { useReducedMotion, useScroll, useTransform, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  SEQUENCE_FRAME_COUNT,
  sequenceFrameUrl,
} from "@/config/sequence";
import {
  CANVAS_BG,
  drawHeadphoneFrame,
} from "@/lib/headphoneCanvas";

const SECTION_SCROLL_VH = 260;
const FRAME_COUNT = Math.max(0, SEQUENCE_FRAME_COUNT);

function loadFrameImages(count: number): Promise<HTMLImageElement[]> {
  if (count <= 0) return Promise.resolve([]);
  const loads = Array.from({ length: count }, (_, i) => {
    const img = new Image();
    img.decoding = "async";
    img.src = sequenceFrameUrl(i);
    return new Promise<HTMLImageElement>((resolve, reject) => {
      img.onload = () => resolve(img);
      img.onerror = () =>
        reject(new Error(`Failed to load ${sequenceFrameUrl(i)}`));
    });
  });
  return Promise.all(loads);
}

function drawImageFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  images: HTMLImageElement[],
  frameIndex: number,
) {
  ctx.fillStyle = CANVAS_BG;
  ctx.fillRect(0, 0, w, h);
  const img = images[frameIndex];
  if (!img?.complete || !img.naturalWidth) return;

  const iw = img.naturalWidth;
  const ih = img.naturalHeight;
  const scale = Math.max(w / iw, h / ih);
  const dw = iw * scale;
  const dh = ih * scale;
  const dx = (w - dw) / 2;
  const dy = (h - dh) / 2;
  ctx.drawImage(img, dx, dy, dw, dh);
}

export function ScrollScrubSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const useImagesRef = useRef(false);
  const reduceMotion = useReducedMotion();
  const [bitmapReady, setBitmapReady] = useState(FRAME_COUNT <= 0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const line1Opacity = useTransform(
    scrollYProgress,
    [0.06, 0.18, 0.32],
    [0, 1, 0],
  );
  const line1Y = useTransform(scrollYProgress, [0.06, 0.22], [24, 0]);
  const line2Opacity = useTransform(
    scrollYProgress,
    [0.38, 0.52, 0.68],
    [0, 1, 0],
  );
  const line2Y = useTransform(scrollYProgress, [0.38, 0.58], [28, 0]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.72, 0.82, 0.94],
    [0, 1, 0],
  );
  const titleScale = useTransform(scrollYProgress, [0.72, 0.88], [0.96, 1]);

  useEffect(() => {
    if (FRAME_COUNT <= 0) {
      useImagesRef.current = false;
      setBitmapReady(true);
      return;
    }
    let cancelled = false;
    loadFrameImages(FRAME_COUNT)
      .then((imgs) => {
        if (cancelled) return;
        imagesRef.current = imgs;
        useImagesRef.current = true;
        setBitmapReady(true);
      })
      .catch(() => {
        if (cancelled) return;
        useImagesRef.current = false;
        imagesRef.current = [];
        setBitmapReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, []);

  useLayoutEffect(() => {
    resizeCanvas();
    const ro = new ResizeObserver(() => resizeCanvas());
    const parent = canvasRef.current?.parentElement;
    if (parent) ro.observe(parent);
    window.addEventListener("resize", resizeCanvas);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      targetProgressRef.current = v;
    });
  }, [scrollYProgress]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      const target = targetProgressRef.current;
      const useImages = useImagesRef.current && imagesRef.current.length > 0;
      if (useImages && bitmapReady) {
        progressRef.current = target;
      } else {
        progressRef.current = lerp(progressRef.current, target, 0.28);
        if (Math.abs(progressRef.current - target) < 0.0004) {
          progressRef.current = target;
        }
      }

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (w > 0 && h > 0) {
        if (useImages && bitmapReady) {
          const max = imagesRef.current.length - 1;
          const idx = Math.round(progressRef.current * max);
          drawImageFrame(ctx, w, h, imagesRef.current, idx);
        } else {
          drawHeadphoneFrame(ctx, w, h, progressRef.current);
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [bitmapReady, reduceMotion]);

  return (
    <section
      ref={sectionRef}
      id="explore"
      className="relative bg-void"
      style={{ height: `${SECTION_SCROLL_VH}vh` }}
      aria-labelledby="scrub-heading"
    >
      <h2 id="scrub-heading" className="sr-only">
        PANAGO hero animation controlled by scroll
      </h2>
      <div className="sticky top-0 flex h-[100dvh] w-full items-center justify-center overflow-hidden">
        <div className="relative h-full w-full">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 block h-full w-full"
            aria-hidden
          />

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              style={{
                opacity: reduceMotion ? 1 : line1Opacity,
                y: reduceMotion ? 0 : line1Y,
              }}
              className="absolute top-[20%] text-center sm:top-[22%]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-white/60">
                PANAGO Signature Bake
              </p>
              <p className="mt-3 text-3xl font-semibold tracking-tighter text-white/95 sm:text-4xl md:text-5xl">
                New Pan Pizza, Frame by Frame
              </p>
            </motion.div>

            <motion.div
              style={{
                opacity: reduceMotion ? 1 : line2Opacity,
                y: reduceMotion ? 0 : line2Y,
              }}
              className="absolute bottom-[28%] text-center sm:bottom-[30%]"
            >
              <p className="text-xs font-medium uppercase tracking-[0.4em] text-white/60">
                Crafted Ingredients
              </p>
              <p className="mt-3 max-w-xl px-4 text-sm leading-relaxed text-white/75 sm:text-base">
                Watch PANAGO&apos;s pizza build unfold as you scroll: crust, sauce,
                cheese, and toppings layered into the perfect slice.
              </p>
            </motion.div>

            <motion.div
              style={{
                opacity: reduceMotion ? 1 : titleOpacity,
                scale: reduceMotion ? 1 : titleScale,
              }}
              className="absolute bottom-[12%] text-center"
            >
              <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                PANAGO
              </p>
              <p className="mt-2 text-xs font-medium uppercase tracking-[0.32em] text-white/75">
                Flavor In Motion
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
