"use client";

import { motion, useReducedMotion } from "framer-motion";
import NextImage from "next/image";
import { InitiativeInfoPanel } from "@/components/InitiativeInfoPanel";
import type { StrategicInitiative } from "@/data/strategicInitiatives";
import { publicUrl } from "@/lib/publicUrl";

/** Alternate purple and gray only */
const PROJECT_SECTION_BG: readonly string[] = [
  "bg-[#E8E8E8]",
  "bg-[#3C0C66]",
  "bg-[#E8E8E8]",
  "bg-[#3C0C66]",
  "bg-[#E8E8E8]",
];

export function InitiativeSection({
  initiative,
  index,
}: {
  initiative: StrategicInitiative;
  index: number;
}) {
  const reduce = useReducedMotion();
  const imageOnLeft = index % 2 === 0;
  const bgClass = PROJECT_SECTION_BG[index % PROJECT_SECTION_BG.length] ?? "bg-[#E8E8E8]";
  const isPurple = bgClass.includes("3C0C66");

  const placeholderShell = isPurple
    ? "border-2 border-dashed border-white/30 bg-white/10"
    : "border-2 border-dashed border-[#3C0C66]/25 bg-white/60";

  const placeholderText = isPurple ? "text-white/50" : "text-[#3C0C66]/50";
  const placeholderMuted = isPurple ? "text-white/40" : "text-[#3C0C66]/60";

  return (
    <section
      id={initiative.slug}
      className={`scroll-mt-20 border-t border-black/10 px-4 py-10 sm:px-8 sm:py-14 ${bgClass}`}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
        <motion.div
          className={imageOnLeft ? "order-1" : "order-1 md:order-2"}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          {initiative.imageSrc ? (
            <div
              className={`relative aspect-square w-full max-w-full overflow-hidden rounded-2xl shadow-lg ${
                isPurple ? "ring-1 ring-white/20" : "ring-1 ring-[#3C0C66]/10"
              }`}
            >
              <NextImage
                src={publicUrl(initiative.imageSrc)}
                alt={initiative.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          ) : (
            <div
              className={`flex aspect-square w-full max-w-full flex-col items-center justify-center gap-2 rounded-2xl px-6 text-center ${placeholderShell}`}
              aria-hidden
            >
              <span className={`text-xs font-semibold uppercase tracking-[0.28em] ${placeholderText}`}>
                Project visual
              </span>
              <span className={`max-w-[14rem] text-sm leading-snug ${placeholderMuted}`}>
                Image placeholder
              </span>
            </div>
          )}
        </motion.div>

        <div className={imageOnLeft ? "order-2" : "order-2 md:order-1"}>
          <motion.div
            className="w-full min-w-0"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <InitiativeInfoPanel initiative={initiative} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
