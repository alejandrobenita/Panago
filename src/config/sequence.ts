/**
 * Sequence in `public/frames/`: frame-0001.jpg … frame-000151.jpg
 */
import { publicUrl } from "@/lib/publicUrl";

export const SEQUENCE_FRAME_COUNT = 151;

/** Índice base 0 → frame-0001.jpg */
export function sequenceFrameUrl(index: number): string {
  const n = Math.max(1, Math.min(index + 1, SEQUENCE_FRAME_COUNT));
  return publicUrl(`/frames/frame-000${n}.jpg`);
}
