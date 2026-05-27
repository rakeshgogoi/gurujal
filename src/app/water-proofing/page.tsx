import type { Metadata } from "next";
import Image from "next/image";
import { SolutionHero } from "@/components/solution-detail/hero";
import { WaterProofingSectionNav } from "@/components/solution-detail/section-navs";
import { SolutionCrisisBlock } from "@/components/solution-detail/crisis-block";
import { SolutionApproachGrid } from "@/components/solution-detail/approach-grid";
import { SolutionImpactStats } from "@/components/solution-detail/impact-stats";
import { SolutionCaseStudy } from "@/components/solution-detail/case-study";
import { SolutionClosingCta } from "@/components/solution-detail/closing-cta";

export const metadata: Metadata = {
  title: "Water Proofing — Making Institutions Water Smart",
  description:
    "Less than 10% of Indian campuses have ever conducted a water audit. We help universities, defense complexes and government institutions reduce waste, reuse greywater and recharge the ground.",
};

/* ============================================================
 * 6R framework — same data as the home page's 6R band but a denser
 * grid layout here.
 * ============================================================ */

const sixR: { key: string; tone: "teal" | "green" | "orange"; body: string; icon: string }[] = [
  {
    key: "RESOURCE",
    tone: "teal",
    body: "Equip young adults with the skills to become experts in the green economy.",
    icon: "/uploads/2025/06/resource.png",
  },
  {
    key: "REDUCE",
    tone: "green",
    body: "Assist institutions in integrating climate-positive designs.",
    icon: "/uploads/2025/06/reduce.png",
  },
  {
    key: "RESTORE",
    tone: "orange",
    body: "Implement nature-based solutions to enhance groundwater tables.",
    icon: "/uploads/2025/06/restore.png",
  },
  {
    key: "REVIVE",
    tone: "green",
    body: "Foster the growth of natural forest covers to support local biodiversity.",
    icon: "/uploads/2025/06/revive.png",
  },
  {
    key: "RETHINK",
    tone: "teal",
    body: "Promote behaviour change to cultivate a positive attitude towards conservation.",
    icon: "/uploads/2025/06/rethink.png",
  },
  {
    key: "REALIGN",
    tone: "orange",
    body: "Guide companies in balancing profits, people and the planet.",
    icon: "/uploads/2025/06/realign.png",
  },
];

const toneRing: Record<"teal" | "green" | "orange", string> = {
  teal: "ring-brand-teal/30 bg-brand-teal/10",
  green: "ring-brand-green/30 bg-brand-green/10",
  orange: "ring-brand-orange/30 bg-brand-orange/10",
};

const toneText: Record<"teal" | "green" | "orange", string> = {
  teal: "text-brand-teal-dark",
  green: "text-brand-green-dark",
  orange: "text-brand-orange-dark",
};

function SixRFramework() {
  return (
    <section id="framework" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Framework
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            We propose a <span className="text-brand-teal-dark">6R</span>{" "}
            approach to make Gurugram water-secure
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Six interlocking levers — from skill-building to behaviour
            change to nature-based restoration.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sixR.map((r) => (
            <li
              key={r.key}
              className="flex gap-5 rounded-3xl bg-white p-6 ring-1 ring-brand-soft/80"
            >
              <span
                className={`inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ring-1 ${toneRing[r.tone]}`}
              >
                <Image
                  src={r.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain"
                />
              </span>
              <div>
                <h3
                  className={`text-lg font-bold tracking-tight ${toneText[r.tone]}`}
                >
                  {r.key}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {r.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
 * Rainwater calculator CTA block.
 * ============================================================ */

function CalculatorBlock() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-brand-teal via-brand-accent to-brand-primary p-8 text-white shadow-xl sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/85">
                Interactive tool
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                💧 Rainwater Harvesting Calculator
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                Curious how much rainwater you can harvest from your
                rooftop or property? Get a quick, reliable estimate
                based on your catchment area and local rainfall data.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <a
                href="https://calculator.gurujal.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-brand-primary transition hover:bg-brand-orange hover:text-white"
              >
                Calculate now
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M7 7h10v10" />
                  <line x1="7" y1="17" x2="17" y2="7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function WaterProofingPage() {
  return (
    <>
      <SolutionHero
        eyebrow="Solution · Water Proofing"
        headlineBefore="Making institutions"
        headlineAccent="water"
        headlineAfter="smart"
        lead={
          <>
            Less than <strong>10%</strong> of Indian campuses have ever
            conducted a water audit. We help universities, defense
            complexes and government institutions reduce waste, reuse
            greywater and recharge the ground — turning consumers into
            stewards.
          </>
        }
        primaryCta={{ label: "How we work", href: "#approach" }}
        secondaryCta={{ label: "See impact", href: "#impact" }}
        backdrop="/uploads/2024/08/water-proof-hero.jpg"
        iconSrc="/uploads/2026/05/logo-water-proofing.png"
        iconAlt="Water Proofing"
        iconShape="wide"
      />

      <WaterProofingSectionNav />

      <SolutionCrisisBlock
        eyebrow="The crisis"
        heading={<>India&apos;s campuses are built to consume, not conserve</>}
        paragraphs={[
          <>
            Most Indian institutions never imagined water would be
            scarce. <strong>Cracks in pipes, forgotten tanks,
            overflowing borewells and stagnant drains</strong> — the
            symptoms of systems designed for an era of abundance.
          </>,
          <>
            Fewer than 10% of institutions have ever conducted a water
            audit, which means most have no baseline to measure
            improvement against. Water Proofing exists to fix exactly
            that gap.
          </>,
        ]}
        stat={{
          label: "Campuses that have done a water audit",
          value: "<10%",
          supporting: (
            <>
              We start with a real audit, then design the systems —
              greywater reuse, recharge structures and behaviour change
              — that turn the campus into a steward.
            </>
          ),
        }}
      />

      <SolutionApproachGrid
        id="approach"
        eyebrow="Proposed interventions"
        heading={<>Six concrete interventions per campus</>}
        intro={
          <>
            Each campus needs a different mix — but most water-smart
            transformations include some combination of these six.
          </>
        }
        cols={3}
        bg="bg-white"
        cards={[
          {
            title: "Rainwater Harvesting",
            body: "Capture rooftop and surface runoff to reduce demand on groundwater.",
            emoji: "🌧️",
            tone: "teal",
          },
          {
            title: "Pond Rejuvenation",
            body: "Use nature-based solutions to restore and maintain on-campus water bodies.",
            emoji: "🌊",
            tone: "green",
          },
          {
            title: "Nature-Based STPs",
            body: "Build sewage treatment plants that effectively treat wastewater for reuse.",
            emoji: "♻️",
            tone: "orange",
          },
          {
            title: "Green Belts",
            body: "Create green spaces to enhance water retention and reduce surface runoff.",
            emoji: "🌳",
            tone: "green",
          },
          {
            title: "Bioswales",
            body: "Manage stormwater runoff with engineered channels that recharge groundwater.",
            emoji: "🌿",
            tone: "teal",
          },
          {
            title: "Check Dams",
            body: "Control surface runoff and prevent soil erosion at campus catchments.",
            emoji: "🪨",
            tone: "orange",
          },
        ]}
      />

      <SixRFramework />

      <CalculatorBlock />

      <SolutionImpactStats
        eyebrow="When we care for water"
        heading={<>It gives back in more ways than one</>}
        stats={[
          { value: "145", unit: "ML/yr", label: "Freshwater Reduction" },
          { value: "326", unit: "ML/yr", label: "Groundwater Recharged" },
          { value: "700+", label: "Rainwater Structures Built" },
          { value: "10+", label: "Full Campus Audits" },
          { value: "15+", label: "Stakeholder Workshops" },
        ]}
      />

      <SolutionCaseStudy
        eyebrow="Case study"
        title="BSF Campus, Bhondsi — From water crisis to climate-ready living"
        blurb={
          <>
            A 216-acre Border Security Force campus housing 5,000+
            personnel and families that swung between drying borewells
            and monsoon flooding — until a Water Proofing programme
            re-engineered its relationship with water.
          </>
        }
        paragraphs={[
          <>
            The campus was caught in both ends of the water crisis —
            drying borewells, heavy reliance on tankers, and severe
            monsoon flooding. The root cause: unmanaged runoff, leaking
            pipelines and untapped rainwater potential.
          </>,
          <>
            GuruJal proposed{" "}
            <strong>7 ponds and 15 rainwater-harvesting systems</strong>,
            constructed <strong>3 large wastewater-treatment ponds</strong>,
            and trained campus staff in pond management. Within a
            single year the groundwater table rose by{" "}
            <strong>2.5 metres</strong> and the landscape moved from
            degraded to vegetated.
          </>,
        ]}
        pillars={[
          {
            label: "Context",
            body: "216-acre BSF campus, 5,000+ residents, severe water stress and seasonal flooding.",
          },
          {
            label: "Intervention",
            body: "Audit, 7 new ponds + 15 RWH systems, 3 wastewater-treatment ponds, staff training.",
          },
          {
            label: "Outcome",
            body: "+2.5 m groundwater table within 1 year; landscape transformed from degraded to vegetated.",
          },
        ]}
        photo="/uploads/2026/03/Water-proofing-hero.jpg"
        bg="bg-white"
      />

      <SolutionClosingCta
        eyebrow="Bring Water Proofing to your campus"
        heading={<>From water-stressed to water-smart, in one cycle</>}
        body={
          <>
            We work with universities, defense complexes, government
            institutions and large corporate campuses. Get in touch to
            scope an audit and a Water Proofing roadmap for your
            geography.
          </>
        }
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "Back to solutions", href: "/solutions" }}
      />
    </>
  );
}
