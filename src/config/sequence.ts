/**
 * Secuencia en `public/frames/`: frame-0001.jpg … frame-000151.jpg
 * Nota: los archivos siguen el patrón "frame-000{n}.jpg" (sin padding fijo).
 */
export const SEQUENCE_FRAME_COUNT = 151;

/** Índice base 0 → frame-0001.jpg */
export function sequenceFrameUrl(index: number): string {
  const n = Math.max(1, Math.min(index + 1, SEQUENCE_FRAME_COUNT));
  return `/frames/frame-000${n}.jpg`;
}
