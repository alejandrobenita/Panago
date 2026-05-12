export type InitiativeAside = {
  label: string;
  text: string;
};

export type ImplementationPhase = 1 | 2 | 3;

export type StrategicInitiative = {
  slug: string;
  /** Strategic impact tier (1 = highest). Reading order on the page follows rank. */
  strategicRank: 1 | 2 | 3 | 4 | 5;
  projectLabel: string;
  sourceInitiative: string;
  name: string;
  headline: string;
  problem: string;
  solution: string;
  metric: string;
  aside?: InitiativeAside;
  category: string;
  impact: string;
  dependencies: string;
  enables: string;
  timeline: string;
  implementationPhase: ImplementationPhase;
  phaseLabel: string;
  imageSrc: string;
  imageAlt: string;
};

/** Reading order: RANK 1 → RANK 5 (Projects 1, 2, 4, 6, 7) */
export const INITIATIVES: StrategicInitiative[] = [
  {
    slug: "project-1",
    strategicRank: 1,
    projectLabel: "Project 1",
    sourceInitiative: "01",
    name: "PANAGO FIRST",
    headline: "Loyalty & gamification",
    category: "FOUNDATIONAL INFRASTRUCTURE",
    impact: "TRANSFORMATIONAL",
    dependencies: "None — the base layer for everything else.",
    enables:
      "Projects 2, 4, 6 & 7: migration incentives, behavioral data, local execution, and creator campaigns.",
    timeline: "6–12 months",
    implementationPhase: 2,
    phaseLabel: "Phase 2 · Months 3–9",
    problem:
      "Panago has no owned loyalty program. More Rewards is a coalition — Panago does not own the data, cannot personalize, and pays rent for every customer relationship.",
    solution:
      "A 3-tier gamified loyalty system (\"Dough → Sauce → Crust\") with behavioral challenges, surprise rewards, and a first-party data engine that feeds every other marketing channel.",
    metric:
      "25% active customer enrollment in 12 months; +40% purchase frequency from gamified users.",
    aside: {
      label: "Why now",
      text: "Every major competitor already owns this. Domino's, Papa John's, and Starbucks have proven the model. The gap is widening daily.",
    },
    imageSrc: "/initiatives/proyecto-1.png",
    imageAlt:
      "Panago First: app streak reward and surprise premium pickup in store",
  },
  {
    slug: "project-2",
    strategicRank: 2,
    projectLabel: "Project 2",
    sourceInitiative: "02",
    name: "DELIVERY ARBITRAGE",
    headline: "Channel migration",
    category: "URGENT FINANCIAL OPTIMIZATION",
    impact: "TRANSFORMATIONAL (NEAR TERM)",
    dependencies: "Project 1 (loyalty as the migration incentive).",
    enables:
      "Clean first-party behavioral data for the predictive engine (Project 4).",
    timeline: "12–18 months",
    implementationPhase: 2,
    phaseLabel: "Phase 2 · Months 3–9",
    problem:
      "15–30% commissions to Uber Eats, DoorDash, and Skip. Zero customer data. No retargeting. Panago is building competitors' datasets.",
    solution:
      "A 5-phase migration strategy — use third-party as acquisition funnel, capture data via QR gamification in every pizza box, then migrate customers to owned channels with app-exclusive moats.",
    metric:
      "60% direct orders in 18 months (vs. ~40% estimated current); +18–22% net margin per direct order.",
    aside: {
      label: "Benchmark",
      text: "Domino's runs 85% direct digital. Their Uber Eats partnership is strategic, not desperate.",
    },
    imageSrc: "/initiatives/proyecto-2.png",
    imageAlt:
      "Integrated direct journey from fragmented third-party data to loyalty and confirmed order",
  },
  {
    slug: "project-4",
    strategicRank: 3,
    projectLabel: "Project 4",
    sourceInitiative: "04",
    name: "PREDICTIVE PANAGO",
    headline: "AI/ML engine for personalization",
    category: "COMPETITIVE INTELLIGENCE",
    impact: "MAJOR-LEAGUE DIFFERENTIATOR",
    dependencies: "Projects 1 & 2 (behavioral data and owned channels).",
    enables:
      "Continuous optimization of retention, offers, media mix, and local execution.",
    timeline: "9–12 months",
    implementationPhase: 3,
    phaseLabel: "Phase 3 · Months 6–12",
    problem:
      "\"Segmentation\" currently means basic RFM. Competitors use machine learning to predict behavior before it happens.",
    solution:
      "Churn prediction (85%+ accuracy), next-best-action engine, dynamic pricing micro-tests, real-time sentiment analysis from reviews, and lookalike audience intelligence for paid social.",
    metric:
      "+$2.5M annual incremental revenue from next-best-action alone; -35% paid social CPA.",
    aside: {
      label: "Reality",
      text: "This is not future-tech. Domino's and Papa John's already operate here. The question is whether Panago joins them or falls further behind.",
    },
    imageSrc: "/initiatives/proyecto-4.png",
    imageAlt:
      "Concept art: data, channels, and metrics toward predictive personalization",
  },
  {
    slug: "project-6",
    strategicRank: 4,
    projectLabel: "Project 6",
    sourceInitiative: "06",
    name: "PANAGO LOCAL",
    headline: "Franchise hyperlocal marketing",
    category: "EXISTING NETWORK ACTIVATION",
    impact: "SCALE MULTIPLIER",
    dependencies: "Mostly independent (aligned with brand and operations).",
    enables:
      "Local execution of loyalty, channel migration, and creator campaigns (Projects 1, 2 & 7).",
    timeline: "3–6 months",
    implementationPhase: 1,
    phaseLabel: "Phase 1 · Months 1–3",
    problem:
      "Franchisees are frustrated. They feel corporate marketing does not understand their markets. The result is misalignment and lost local sales.",
    solution:
      "A standardized but customizable local marketing system — centralized GBP management, downloadable regional asset packs, quarterly execution playbooks, and gamified reputation reports where franchisees compete.",
    metric:
      "+30 NPS points from franchisees; zero manual listing inconsistencies.",
    aside: {
      label: "Insight",
      text: "The internal customer (franchisee) is as important as the external one. Solve their pain, and they become brand ambassadors.",
    },
    imageSrc: "/initiatives/proyecto-6.png",
    imageAlt:
      "Panago franchise interior with quarterly playbook and reputation screen",
  },
  {
    slug: "project-7",
    strategicRank: 5,
    projectLabel: "Project 7",
    sourceInitiative: "07",
    name: "PANAGO FOR IT — TIKTOK CREATOR NETWORK",
    headline: "Organic acquisition",
    category: "CULTURAL MOMENTUM & QUICK WIN",
    impact: "PERCEPTION CATALYST",
    dependencies: "Project 6 (franchisees for local activation and content).",
    enables:
      "Initial traffic and conversion into loyalty and direct orders (Projects 1 & 2).",
    timeline: "60–90 days",
    implementationPhase: 1,
    phaseLabel: "Phase 1 · Months 1–3",
    problem:
      "Invisible to Gen Z and Millennials — the demographic that orders the most delivery.",
    solution:
      "A structured program of 20–30 regional Canadian food creators (10K–100K followers), briefed around the three rebrand pillars: Canadian pride, value, quality. Monthly challenges tied to LTOs. UGC that does not look like advertising.",
    metric:
      "10M+ monthly views; +20% sales lift on featured LTOs (benchmark: Pizza Pizza's Creamy Garlic Dip challenge).",
    aside: {
      label: "Timeline",
      text: "Actionable in 60 days. Low cost. Measurable ROI. The definition of a \"first 90 days\" win.",
    },
    imageSrc: "/initiatives/proyecto-7.png",
    imageAlt:
      "TikTok creator-style frame with Panago pizza, engagement metrics, and For You UI",
  },
];

export const STRATEGIC_NAV = [
  { href: "#intro", label: "Overview" },
  { href: "#roadmap", label: "Phase roadmap" },
  { href: "#project-1", label: "RANK 1 — Panago First" },
  { href: "#project-2", label: "RANK 2 — Delivery arbitrage" },
  { href: "#project-4", label: "RANK 3 — Predictive Panago" },
  { href: "#project-6", label: "RANK 4 — Panago Local" },
  { href: "#project-7", label: "RANK 5 — TikTok creators" },
  { href: "#integrated", label: "Integrated view" },
  { href: "#success-outlook", label: "12-month outlook" },
] as const;

export const FLYWHEEL =
  "Phase 1 (creators + local) builds relevance and in-store trust → Phase 2 (loyalty + channel migration) captures data and margin → Phase 3 (predictive AI) optimizes offer, risk, and spend on top of an owned data foundation.";
