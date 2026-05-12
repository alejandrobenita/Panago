"use client";

import { motion, useReducedMotion } from "framer-motion";

export function FooterCTA() {
  const reduce = useReducedMotion();

  return (
    <footer className="border-t border-white/10 bg-[#3C0C66] px-6 py-20 sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.h2
          className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Let&apos;s go deeper on the roadmap
        </motion.h2>
        <motion.p
          className="mt-4 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          Full implementation plans, financial models, and channel-specific
          architectures are ready for a working session with marketing
          leadership.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#intro"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold tracking-tight text-[#3C0C66] transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
          >
            Back to overview
          </a>
          <a
            href="#integrated"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/35 px-8 py-3 text-sm font-semibold tracking-tight text-white transition hover:border-white/55 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
          >
            Integrated view
          </a>
        </motion.div>
        <p className="mt-14 text-xs leading-relaxed text-white/50">
          Strategic presentation experience · PANAGO · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
