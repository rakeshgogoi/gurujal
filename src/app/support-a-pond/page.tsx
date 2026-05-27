import type { Metadata } from "next";
import Image from "next/image";
import { SolutionHero } from "@/components/solution-detail/hero";
import { SupportAPondSectionNav } from "@/components/solution-detail/section-navs";
import { SolutionCrisisBlock } from "@/components/solution-detail/crisis-block";
import { SolutionImpactStats } from "@/components/solution-detail/impact-stats";
import { SolutionCaseStudy } from "@/components/solution-detail/case-study";
import { SolutionClosingCta } from "@/components/solution-detail/closing-cta";

export const metadata: Metadata = {
  title: "Support a Pond — GuruJal",
  description:
    "India loses 30,000 ponds every year. GuruJal restores closed water bodies in arid and semi-arid regions through an 8-step methodology that combines hydrology, ecology and community stewardship.",
};

/* ============================================================
 * Methodology — 6 numbered steps, each with a list of activities.
 * ============================================================ */

const steps: { title: string; bullets: string[]; tone: "teal" | "green" | "orange" }[] = [
  {
    title: "Baseline Assessment & Community Mapping",
    bullets: [
      "Detailed site surveys",
      "Ecological & socio-economic surveys",
      "Hydrology mapping",
      "Soil and water testing",
      "Community interviews",
    ],
    tone: "teal",
  },
  {
    title: "Designing a Restoration Plan",
    bullets: [
      "Hydrological modeling",
      "WWTP design",
      "Desilting protocol",
      "Nature-based wastewater treatment",
      "Embankment & pathway design",
      "Phytoremediation & real-time monitoring",
    ],
    tone: "green",
  },
  {
    title: "Community Mobilisation & Partnership Building",
    bullets: [
      "Local Pond Committees",
      "Gram panchayat & CSR partnerships",
      "Eco-awareness sessions",
      "School outreach campaigns",
    ],
    tone: "orange",
  },
  {
    title: "Execution & Restoration Activities",
    bullets: [
      "Cleaning, desilting & deepening",
      "Slope leveling",
      "Native flora plantation",
      "Landscaping",
      "Fencing & signage",
    ],
    tone: "teal",
  },
  {
    title: "Monitoring & Maintenance",
    bullets: [
      "Ongoing maintenance",
      "Water quality tracking",
      "Biodiversity observation",
      "Scheduled team inspections",
      "Community clean-up drives",
      "Schoolchild guardianship roles",
    ],
    tone: "green",
  },
  {
    title: "Impact Measurement & Replication",
    bullets: [
      "Volumetric water benefits",
      "Groundwater recharge measurement",
      "Species & vegetation return",
      "Improved community water access",
      "Documenting learnings for scale",
    ],
    tone: "orange",
  },
];

const toneAccent: Record<"teal" | "green" | "orange", string> = {
  teal: "bg-brand-teal text-white",
  green: "bg-brand-green text-white",
  orange: "bg-brand-orange text-white",
};

function MethodologySteps() {
  return (
    <section id="methodology" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            How We Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            An 8-step methodology for{" "}
            <span className="text-brand-teal-dark">20 years</span> of impact
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Each pond goes through six core stages — baseline to
            replication — so every project we touch keeps delivering
            community and ecological value long after we&apos;re gone.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-soft/80 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span
                className={`mb-5 inline-flex h-9 items-center self-start rounded-full px-3 text-xs font-bold uppercase tracking-[0.14em] ${toneAccent[s.tone]}`}
              >
                Step {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold leading-snug text-brand-ink">
                {s.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-brand-muted">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
 * Pond types — 3 categories with sample photos.
 * ============================================================ */

const pondTypes = [
  {
    name: "Freshwater Pond",
    body: "Traditional village ponds revived to store rainwater, recharge aquifers and host biodiversity.",
    photo: "/uploads/2025/04/freshwater-pond-1.jpg",
  },
  {
    name: "Wastewater Pond",
    body: "Reclaiming polluted ponds with nature-based wastewater treatment, restoring ecological function.",
    photo: "/uploads/2025/04/wastewater-pond-1.jpg",
  },
  {
    name: "New Pond",
    body: "Engineering new community ponds in water-stressed sites where natural water bodies have disappeared.",
    photo: "/uploads/2025/04/new-pond-1.jpg",
  },
];

function PondTypes() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            What we restore
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Three kinds of ponds, one playbook
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Whether the water body is alive, struggling or gone — we
            have a tested approach for bringing it back into the
            community fabric.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {pondTypes.map((p) => (
            <li
              key={p.name}
              className="overflow-hidden rounded-3xl bg-brand-mist ring-1 ring-brand-soft/70"
            >
              <div className="relative aspect-[4/3] bg-brand-soft/60">
                <Image
                  src={p.photo}
                  alt={p.name}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-ink sm:text-xl">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {p.body}
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
 * Placemaking blurb.
 * ============================================================ */

function PlacemakingBlock() {
  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Beyond the water
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Vibrant community hubs, not just water bodies
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            We blend green and blue spaces to turn restored ponds into
            dynamic community hubs — promoting engagement, ecological
            mindfulness, enriched biodiversity and a stronger bond with
            nature.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Page
 * ============================================================ */

export default function SupportAPondPage() {
  return (
    <>
      <SolutionHero
        eyebrow="Solution · Support a Pond"
        headlineBefore="We lose"
        headlineAccent="30,000"
        headlineAfter="ponds every year"
        lead={
          <>
            Ponds carry our irrigation, drinking water and groundwater
            recharge — and yet over <strong>6.2 million</strong> have
            disappeared since independence. We restore closed water
            bodies in arid and semi-arid regions through an integrated
            approach that combines{" "}
            <strong>pond rejuvenation with wastewater treatment</strong>.
          </>
        }
        primaryCta={{ label: "Our methodology", href: "#methodology" }}
        secondaryCta={{ label: "See impact", href: "#impact" }}
        backdrop="/uploads/2024/08/sap-scaled.jpg"
        iconSrc="/uploads/2026/05/logo-support-a-pond.png"
        iconAlt="Support a Pond"
        iconShape="wide"
      />

      <SupportAPondSectionNav />

      <SolutionCrisisBlock
        eyebrow="The crisis"
        heading={<>India is losing its ponds — fast.</>}
        paragraphs={[
          <>
            Across India, ponds have served irrigation, drinking water
            and groundwater-recharge functions for centuries. But with
            only <strong>30% of wastewater treated nationally</strong>,
            untreated effluents now pollute the very water bodies
            communities depend on.
          </>,
          <>
            Encroachment, neglect and disconnect from local stewardship
            have turned thousands of ponds into garbage sinks. The fix
            isn&apos;t engineering alone — it&apos;s a restoration model
            that puts the community back at the centre.
          </>,
        ]}
        stat={{
          label: "Ponds lost since Independence",
          value: "6.2M+",
          supporting: (
            <>
              30,000 ponds disappear every year. We&apos;re working to
              reverse this — one pond, one community at a time.
            </>
          ),
        }}
      />

      <MethodologySteps />

      <PondTypes />

      <SolutionImpactStats
        eyebrow="Our impact"
        heading={<>Each pond creates a ripple of positive change</>}
        intro={
          <>
            Restoration outcomes compound — ecology, hydrology, climate
            cooling and community access all move together.
          </>
        }
        stats={[
          { value: "100+", label: "Ponds Restored" },
          { value: "2", unit: "MLD", label: "Wastewater Treated" },
          { value: "500", unit: "ML/yr", label: "Groundwater Recharged" },
          { value: "2°C", label: "Cooling in Ambient Temp" },
          { value: "50K+", label: "People Impacted" },
        ]}
      />

      <PlacemakingBlock />

      <SolutionCaseStudy
        eyebrow="Case study"
        title="Brookfield Pond Rejuvenation"
        blurb={
          <>
            An initiative driven by the Border Security Force in
            collaboration with GuruJal — turning a polluted, choked
            water body into an ecological asset for the campus and the
            surrounding community.
          </>
        }
        paragraphs={[
          <>
            For years Brookfield Pond was choked with waste, an emblem
            of neglect rather than nourishment. The BSF stepped in and
            partnered with GuruJal to combine{" "}
            <strong>community action, wastewater treatment and
            sustainable practices</strong>.
          </>,
          <>
            The pond&apos;s revival did more than restore an ecosystem:
            it strengthened the bond between BSF personnel and the
            villages around the campus, creating a shared sense of
            ownership over water and place.
          </>,
        ]}
        pillars={[
          {
            label: "Context",
            body: "A pond filled with waste and pollution, on a BSF campus in Gurugram.",
          },
          {
            label: "Intervention",
            body: "Desilting, nature-based wastewater treatment, native plantation and community pond-committee setup.",
          },
          {
            label: "Outcome",
            body: "A restored, biodiverse pond and stronger BSF–community ties.",
          },
        ]}
        photo="/uploads/2026/03/Support-a-pond-hero.jpg"
        bg="bg-white"
      />

      <SolutionClosingCta
        eyebrow="Partner with us"
        heading={<>Restore a pond in your geography</>}
        body={
          <>
            Whether you&apos;re a corporation aligning CSR/ESG capital, a
            government body planning a watershed program, or a community
            ready to revive a local pond — we&apos;ll design the
            intervention with you, end to end.
          </>
        }
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "Back to solutions", href: "/solutions" }}
      />
    </>
  );
}
