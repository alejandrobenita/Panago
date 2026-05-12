"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { HeroBreak } from "@/components/HeroBreak";
import { InitiativeSection } from "@/components/InitiativeSection";
import { FLYWHEEL, INITIATIVES } from "@/data/strategicInitiatives";

const integratedRows = [
  {
    layer: "Momentum & network",
    projects: "RANK 5 + 4 (Projects 7, 6)",
    purpose:
      "Cultural quick wins and franchise activation to build demand and local trust.",
  },
  {
    layer: "Infrastructure & margin",
    projects: "RANK 1 + 2 (Projects 1, 2)",
    purpose:
      "Owned loyalty and direct-channel migration: data, retention, and profitability.",
  },
  {
    layer: "Competitive intelligence",
    projects: "RANK 3 (Project 4)",
    purpose:
      "AI/ML on top of a consolidated behavioral and transactional data base.",
  },
] as const;

const roadmapPhases = [
  {
    phase: 1,
    months: "Months 1–3",
    ranks: "RANK 5 + RANK 4",
    projects: "Projects 7 & 6",
    summary: "Quick wins + franchise network activation.",
  },
  {
    phase: 2,
    months: "Months 3–9",
    ranks: "RANK 1 + RANK 2",
    projects: "Projects 1 & 2",
    summary: "Loyalty infrastructure and channel economics.",
  },
  {
    phase: 3,
    months: "Months 6–12",
    ranks: "RANK 3",
    projects: "Project 4",
    summary: "Predictive engine once first-party capture is solid.",
  },
] as const;

const successBullets = [
  {
    title: "Revenue",
    text: "Incremental gains across loyalty, direct channel mix, and social-attributed orders.",
  },
  {
    title: "Efficiency",
    text: "Lower acquisition cost through creators and arbitrage; higher AOV from personalized journeys.",
  },
  {
    title: "Brand",
    text: "Stronger Canadian QSR share of voice and measurable lift on featured LTOs.",
  },
  {
    title: "Operations",
    text: "Higher direct-order share; consistent listings and faster local response.",
  },
  {
    title: "Franchisees",
    text: "Higher NPS from operators who feel equipped, not overridden.",
  },
] as const;

export function StrategicPresentation() {
  const reduce = useReducedMotion();

  return (
    <>
      <section
        id="intro"
        className="scroll-mt-20 border-t border-white/10 bg-void px-4 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            className="text-xs font-medium uppercase tracking-[0.32em] text-white/65"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45 }}
          >
            90-day strategic vision · May 12, 2026
          </motion.p>
          <motion.h1
            className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem]"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.04 }}
          >
            Five flagship projects — ordered by strategic impact
          </motion.h1>
          <motion.p
            className="mt-3 text-sm text-white/55 sm:text-base"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            A growth framework for Canada&apos;s pizza brand
          </motion.p>
          <motion.p
            className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            Prepared for: Britt Rigues, Senior Director, Marketing
          </motion.p>
        </div>

        <motion.div
          className="mx-auto mt-14 max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-5 py-8 sm:px-8 sm:py-10"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
            The opportunity
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/78 sm:text-base">
            Each project block below follows{" "}
            <strong className="text-white/95">strategic RANK</strong> (1 =
            foundational transformation, 5 = perception catalyst). The scroll
            order reflects business impact priority. The{" "}
            <a
              href="#roadmap"
              className="font-medium text-white underline decoration-white/35 underline-offset-2 hover:text-white/90"
            >
              phase roadmap
            </a>{" "}
            shows how to parallelize quick wins with data and margin foundations.
          </p>
        </motion.div>
      </section>

      <section
        id="roadmap"
        className="scroll-mt-20 border-t border-[#3C0C66]/15 bg-[#E8E8E8] px-4 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="text-center"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#3C0C66]/70">
              Implementation rule
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#3C0C66] sm:text-3xl md:text-4xl">
              Phased roadmap (parallel to strategic rank)
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#3C0C66]/75 sm:text-base">
              Phases define <em className="text-[#3C0C66]">when</em> work lands on
              the calendar; RANK defines <em className="text-[#3C0C66]">impact
              priority</em> in the narrative.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {roadmapPhases.map((p, i) => (
              <motion.article
                key={p.phase}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="flex flex-col rounded-2xl border border-[#3C0C66]/12 bg-white/85 px-5 py-6 shadow-md shadow-[#3C0C66]/10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3C0C66]">
                  Phase {p.phase}
                </p>
                <p className="mt-1 text-sm font-medium text-[#3C0C66]/90">{p.months}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#3C0C66]/55">
                  {p.ranks}
                </p>
                <p className="mt-1 text-sm font-semibold text-[#3C0C66]">{p.projects}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#3C0C66]/80">
                  {p.summary}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {INITIATIVES.map((initiative, i) => (
        <Fragment key={initiative.slug}>
          {i > 0 ? <HeroBreak slotIndex={i - 1} /> : null}
          <InitiativeSection initiative={initiative} index={i} />
        </Fragment>
      ))}

      <section
        id="integrated"
        className="scroll-mt-20 border-t border-[#3C0C66]/10 bg-[#E8E8E8] px-4 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#3C0C66]/55">
              The integrated view
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#3C0C66] sm:text-4xl">
              One operating system — five connected levers
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#3C0C66]/75 sm:text-base">
              Acquisition, retention, and local excellence reinforce each other
              when the same first-party data and creative standards run through
              every touchpoint.
            </p>
          </motion.div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-[#3C0C66]/12 bg-white shadow-sm">
            <table className="min-w-[520px] w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#3C0C66]/12 bg-[#3C0C66]/5">
                  <th className="px-4 py-3 font-semibold text-[#3C0C66] sm:px-6 sm:py-4">
                    Layer
                  </th>
                  <th className="px-4 py-3 font-semibold text-[#3C0C66] sm:px-6 sm:py-4">
                    Projects
                  </th>
                  <th className="px-4 py-3 font-semibold text-[#3C0C66] sm:px-6 sm:py-4">
                    Purpose
                  </th>
                </tr>
              </thead>
              <tbody>
                {integratedRows.map((row) => (
                  <tr
                    key={row.layer}
                    className="border-b border-[#3C0C66]/8 last:border-0"
                  >
                    <td className="px-4 py-3 font-medium text-[#3C0C66] sm:px-6 sm:py-4">
                      {row.layer}
                    </td>
                    <td className="px-4 py-3 text-[#3C0C66]/80 sm:px-6 sm:py-4">
                      {row.projects}
                    </td>
                    <td className="px-4 py-3 text-[#3C0C66]/75 sm:px-6 sm:py-4">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.p
            className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-[#3C0C66]/80 sm:text-base"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-semibold text-[#3C0C66]">The flywheel: </span>
            {FLYWHEEL}
          </motion.p>
        </div>
      </section>

      <section
        id="success-outlook"
        className="scroll-mt-20 bg-[#3C0C66] px-4 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="text-center"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              What success looks like in 12 months
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ambitious, executable, benchmark-grounded
            </h2>
          </motion.div>

          <ul className="mt-10 space-y-4">
            {successBullets.map((item, i) => (
              <motion.li
                key={item.title}
                initial={reduce ? false : { opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="flex flex-col gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-4 sm:flex-row sm:items-start sm:gap-4 sm:px-5 sm:py-5"
              >
                <span className="shrink-0 text-sm font-bold uppercase tracking-wide text-white/90 sm:min-w-[10rem]">
                  {item.title}
                </span>
                <p className="text-sm leading-relaxed text-white/80 sm:text-[15px]">
                  {item.text}
                </p>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="mt-12 rounded-2xl border border-white/12 bg-black/15 px-5 py-8 sm:px-8 sm:py-10"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              Why this matters now
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/82 sm:text-base">
              PANAGO has spent 30 years building a product and network. The next
              30 months will be decided by who wins the digital layer.
              Domino&apos;s, Papa John&apos;s, and McDonald&apos;s are already
              there. The window to close the gap is narrow — but it&apos;s still
              open. These projects are ambitious but executable, strategic but
              measurable, and innovative but grounded in proven benchmarks.
            </p>
            <p className="mt-5 text-sm italic leading-relaxed text-white/55">
              This site is a strategic preview. Full implementation roadmaps,
              financial models, and technical architectures are available for
              deep-dive discussion.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
