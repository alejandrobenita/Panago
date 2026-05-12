"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <header className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,120,200,0.08),transparent)]"
        aria-hidden
      />
      <motion.p
        className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-white/50"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Introducing
      </motion.p>
      <motion.h1
        className="max-w-4xl text-5xl font-semibold tracking-tighter text-white/90 sm:text-6xl md:text-7xl"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        SonicWave Pro
      </motion.h1>
      <motion.p
        className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        Wireless precision. Scroll to deconstruct the build—every layer, every
        decision.
      </motion.p>
      <motion.div
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: reduce ? 0 : 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        aria-hidden
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/45">
          Scroll to Explore
        </span>
        <motion.span
          className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 pt-1.5"
          animate={reduce ? { y: 0 } : { y: [0, 6, 0] }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <span className="block h-1.5 w-1.5 rounded-full bg-white/50" />
        </motion.span>
      </motion.div>
    </header>
  );
}
