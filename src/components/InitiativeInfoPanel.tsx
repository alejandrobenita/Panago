"use client";

import type { StrategicInitiative } from "@/data/strategicInitiatives";

const labelClass =
  "text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3C0C66]/55";
const bodyClass = "mt-1 text-sm leading-relaxed text-[#3C0C66]/90 sm:text-[15px]";

export function InitiativeInfoPanel({
  initiative,
}: {
  initiative: StrategicInitiative;
}) {
  return (
    <div
      className="aspect-square w-full max-w-full overflow-y-auto overflow-x-hidden rounded-2xl border border-[#3C0C66]/12 bg-white/95 px-4 py-5 shadow-lg shadow-[#3C0C66]/10 sm:px-6 sm:py-6"
      tabIndex={0}
      aria-label={`Full brief: ${initiative.name}`}
    >
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex rounded-full border border-[#3C0C66]/15 bg-[#3C0C66]/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#3C0C66]">
          RANK {initiative.strategicRank}
        </span>
        <span className="inline-flex rounded-full border border-[#3C0C66]/20 bg-[#3C0C66]/6 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#3C0C66]">
          {initiative.phaseLabel}
        </span>
      </div>

      <p className={`mt-4 ${labelClass}`}>
        {initiative.projectLabel}
        <span className="text-[#3C0C66]/40"> · Initiative {initiative.sourceInitiative}</span>
      </p>
      <h3 className="mt-1 text-balance text-base font-semibold uppercase leading-snug tracking-tight text-[#3C0C66] sm:text-lg">
        {initiative.name}
      </h3>
      <p className="mt-2 text-sm font-medium text-[#3C0C66]/75">{initiative.headline}</p>

      <div className="mt-5 grid gap-4 border-t border-[#3C0C66]/10 pt-5 sm:grid-cols-2">
        <div>
          <p className={labelClass}>Category</p>
          <p className={bodyClass}>{initiative.category}</p>
        </div>
        <div>
          <p className={labelClass}>Impact</p>
          <p className={bodyClass}>{initiative.impact}</p>
        </div>
        <div>
          <p className={labelClass}>Timeline</p>
          <p className={bodyClass}>{initiative.timeline}</p>
        </div>
        <div>
          <p className={labelClass}>Dependencies</p>
          <p className={bodyClass}>{initiative.dependencies}</p>
        </div>
      </div>

      <div className="mt-5 border-t border-[#3C0C66]/10 pt-5">
        <p className={labelClass}>Unlocks</p>
        <p className={bodyClass}>{initiative.enables}</p>
      </div>

      <div className="mt-5 border-t border-[#3C0C66]/10 pt-5">
        <p className={labelClass}>The problem</p>
        <p className={bodyClass}>{initiative.problem}</p>
      </div>

      <div className="mt-5 border-t border-[#3C0C66]/10 pt-5">
        <p className={labelClass}>The solution</p>
        <p className={bodyClass}>{initiative.solution}</p>
      </div>

      <div className="mt-5 border-t border-[#3C0C66]/10 pt-5">
        <p className={labelClass}>The metric</p>
        <p className="mt-1 text-sm font-semibold leading-relaxed text-[#3C0C66] sm:text-[15px]">
          {initiative.metric}
        </p>
      </div>

      {initiative.aside ? (
        <div className="mt-5 rounded-xl border border-[#3C0C66]/12 bg-[#E8E8E8]/80 px-3 py-3 sm:px-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#3C0C66]">
            {initiative.aside.label}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-[#3C0C66]/88">
            {initiative.aside.text}
          </p>
        </div>
      ) : null}
    </div>
  );
}
