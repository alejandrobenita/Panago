"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import NextImage from "next/image";
import { useEffect, useId, useState } from "react";
import { STRATEGIC_NAV } from "@/data/strategicInitiatives";
import { publicUrl } from "@/lib/publicUrl";

export function SiteHeader() {
  const reduce = useReducedMotion();
  const panelId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[90] flex h-16 items-center justify-between border-b border-[#3C0C66]/10 bg-white px-4 shadow-sm shadow-[#3C0C66]/5 backdrop-blur-sm sm:h-[4.25rem] sm:px-8"
        role="banner"
      >
        <a
          href="#top"
          className="relative z-[92] flex shrink-0 items-center outline-none ring-offset-2 ring-offset-white focus-visible:ring-2 focus-visible:ring-[#3C0C66]"
          aria-label="PANAGO — back to top"
        >
          <NextImage
            src={publicUrl("/panago-logo.png")}
            alt="PANAGO"
            width={248}
            height={64}
            priority
            className="h-8 w-auto sm:h-10"
          />
        </a>

        <button
          type="button"
          className="relative z-[92] flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-[#3C0C66]/20 bg-[#3C0C66]/5 text-[#3C0C66] transition hover:bg-[#3C0C66]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3C0C66] sm:h-12 sm:w-12"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? "Close menu" : "Open strategic initiatives menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            aria-hidden
            className="block h-0.5 w-5 origin-center rounded-full bg-current"
            animate={
              open
                ? { rotate: 45, y: reduce ? 0 : 6 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: reduce ? 0 : 0.2 }}
          />
          <motion.span
            aria-hidden
            className="block h-0.5 w-5 origin-center rounded-full bg-current"
            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
          />
          <motion.span
            aria-hidden
            className="block h-0.5 w-5 origin-center rounded-full bg-current"
            animate={
              open
                ? { rotate: -45, y: reduce ? 0 : -6 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: reduce ? 0 : 0.2 }}
          />
        </button>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-[88] bg-black/55 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id={panelId}
              className="fixed right-0 top-0 z-[89] flex h-[100dvh] w-full max-w-md flex-col border-l border-white/10 bg-[#2a0848] pt-[4.25rem] shadow-2xl shadow-black/40 sm:pt-20"
              initial={reduce ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={reduce ? undefined : { x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              aria-label="Strategic initiatives"
            >
              <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-10 pt-4">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/65">
                  Navigate
                </p>
                <ul className="mt-4 space-y-1">
                  {STRATEGIC_NAV.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50"
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="border-t border-white/10 px-5 py-4 text-xs text-white/45">
                90-day strategic vision · Digital Marketing Manager
              </p>
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
