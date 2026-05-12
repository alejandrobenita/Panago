"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import NextImage from "next/image";
import { useRef } from "react";
import { publicUrl } from "@/lib/publicUrl";

const HERO_IMAGES = [
  {
    src: publicUrl("/heroes/hero-pizza.png"),
    alt: "Dynamic pizza with toppings in motion — brand energy",
  },
  {
    src: publicUrl("/heroes/hero-salad.png"),
    alt: "Fresh salad ingredients suspended — quality and lightness",
  },
  {
    src: publicUrl("/heroes/hero-dessert.png"),
    alt: "Layered dessert deconstructed in motion — craft and detail",
  },
] as const;

export function HeroBreak({ slotIndex }: { slotIndex: number }) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const item = HERO_IMAGES[slotIndex % HERO_IMAGES.length];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const clipReveal = useTransform(
    scrollYProgress,
    [0, 0.28, 0.62, 1],
    [
      "inset(44% 8% 44% 8%)",
      "inset(18% 3% 18% 3%)",
      "inset(0% 0% 0% 0%)",
      "inset(0% 0% 0% 0%)",
    ],
  );

  if (reduce) {
    return (
      <section
        className="relative w-full scroll-mt-20 border-y border-white/10 bg-[#1a0a2e]"
        aria-label="Brand visual interlude between projects"
      >
        <div className="relative mx-auto aspect-[21/9] min-h-[160px] w-full max-w-[1600px] max-h-[min(48vh,480px)]">
          <NextImage
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15"
            aria-hidden
          />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[210vh] w-full scroll-mt-20 border-y border-white/10 bg-[#1a0a2e]"
      aria-label="Brand visual interlude between projects"
    >
      <div className="sticky top-0 flex h-[100dvh] w-full items-center justify-center overflow-hidden px-3 sm:px-6">
        <motion.div
          className="relative aspect-[21/9] w-full max-w-[min(96vw,1400px)] overflow-hidden rounded-lg shadow-2xl shadow-black/50 ring-1 ring-white/10"
          style={{ clipPath: clipReveal }}
        >
          <NextImage
            src={item.src}
            alt={item.alt}
            fill
            priority={false}
            className="scale-105 object-cover object-center"
            sizes="100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/15"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
