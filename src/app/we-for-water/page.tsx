import type { Metadata } from "next";
import { SolutionHero } from "@/components/solution-detail/hero";
import { WeForWaterSectionNav } from "@/components/solution-detail/section-navs";
import { SolutionCrisisBlock } from "@/components/solution-detail/crisis-block";
import { SolutionApproachGrid } from "@/components/solution-detail/approach-grid";
import { SolutionClosingCta } from "@/components/solution-detail/closing-cta";

export const metadata: Metadata = {
  title: "WeForWater — India's first green-jobs apprenticeship",
  description:
    "A one-year apprenticeship preparing youth to become workers, leaders, managers and enablers for sustainability — six tracks of hands-on, experiential learning.",
};

/* ============================================================
 * Programme structure — 6+6 month phases with the Heart/Head/Hand
 * skill framework.
 * ============================================================ */

function ProgrammeStructure() {
  return (
    <section id="programme" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Programme structure
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            One year, two phases, 250 training days
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Fellows develop the heart, head and hand skills of a green
            professional — first in the classroom, then on real
            community projects.
          </p>
        </div>

        {/* Two phase cards */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {[
            {
              tag: "Phase 1 · 6 months",
              title: "Attitude, Knowledge & Skill Development",
              body: "Core modules + track-specific modules. Fellows build the foundational lens of a green worker — water, ecology, design, governance.",
            },
            {
              tag: "Phase 2 · 6 months",
              title: "Learning by Doing",
              body: "Field-based exposure on live projects + a dissertation. Fellows graduate with portfolio evidence of real work shipped.",
            },
          ].map((p) => (
            <div
              key={p.tag}
              className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange-dark">
                {p.tag}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-brand-ink sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Heart / Head / Hand */}
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-3">
          {[
            {
              emoji: "❤️",
              title: "Heart",
              bullets: [
                "Articulating personal & community intention",
                "Community mobilisation & relationship building",
                "Action–reflection debriefs within teams",
              ],
              tone: "orange",
            },
            {
              emoji: "🧠",
              title: "Head",
              bullets: [
                "Proposal drafting, reporting & documentation",
                "Supporting audits, review & impact evaluation",
                "Foundational governance, finance & IT",
              ],
              tone: "teal",
            },
            {
              emoji: "🤲",
              title: "Hand",
              bullets: [
                "Supervising construction & development",
                "Reading & interpreting monitoring devices",
                "Action–reflection debriefs within teams",
              ],
              tone: "green",
            },
          ].map((h) => (
            <div
              key={h.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brand-soft/80"
            >
              <span aria-hidden className="text-3xl">
                {h.emoji}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-brand-ink">
                {h.title}
              </h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-brand-muted">
                {h.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      aria-hidden
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Placements — roles grouped by track.
 * ============================================================ */

const placementTracks: { track: string; tone: "teal" | "green" | "orange"; roles: { title: string; body: string }[] }[] = [
  {
    track: "Forestry",
    tone: "green",
    roles: [
      { title: "Forest Inventory Technician", body: "Conduct forest inventories, measuring tree growth and species mix." },
      { title: "Forest Restoration Assistant", body: "Assist in reforestation and restoration projects on the ground." },
      { title: "Timber Harvesting Supervisor", body: "Oversee timber harvesting and compliance with forest plans." },
      { title: "Wildlife Conservation Technician", body: "Monitor wildlife populations and conduct field surveys." },
    ],
  },
  {
    track: "Agriculture",
    tone: "orange",
    roles: [
      { title: "Agronomy Assistant", body: "Support agronomists in field research and crop management." },
      { title: "Farm Management Assistant", body: "Hands-on experience in day-to-day farm operations." },
      { title: "Agricultural Extension Worker", body: "Work with farmers to implement best practices." },
      { title: "Crop Research Assistant", body: "Assist in field trials, collecting and analysing data." },
    ],
  },
  {
    track: "Water Management",
    tone: "teal",
    roles: [
      { title: "Water Quality Analyst", body: "Monitor and analyse water-quality data on the ground." },
      { title: "Water Resource Technician", body: "Assist with management and conservation of water resources." },
      { title: "Hydrologist Assistant", body: "Support studies on water cycles and groundwater levels." },
      { title: "Community Outreach Coordinator", body: "Run IEC sessions on water-conservation practices." },
    ],
  },
  {
    track: "Waste Management",
    tone: "green",
    roles: [
      { title: "Waste-to-Energy Technician", body: "Operate & maintain equipment converting waste to energy." },
      { title: "Waste Compliance Officer", body: "Ensure compliance with waste-management regulations." },
      { title: "Landfill Operations Assistant", body: "Support landfill operations and gas monitoring." },
      { title: "Environmental Educator", body: "Design & deliver waste management and recycling programmes." },
    ],
  },
];

const toneTag: Record<"teal" | "green" | "orange", string> = {
  teal: "bg-brand-teal/15 text-brand-teal-dark ring-brand-teal/30",
  green: "bg-brand-green/15 text-brand-green-dark ring-brand-green/30",
  orange: "bg-brand-orange/15 text-brand-orange-dark ring-brand-orange/30",
};

function Placements() {
  return (
    <section id="placements" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Career outcomes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Placements with an average salary of{" "}
            <span className="text-brand-teal-dark">₹25,000/month</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Examples of roles fellows land across our four flagship
            tracks. Real graduates, real jobs, real paychecks.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-2">
          {placementTracks.map((t) => (
            <div
              key={t.track}
              className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-soft/80 sm:p-8"
            >
              <span
                className={`inline-flex rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ring-1 ${toneTag[t.tone]}`}
              >
                {t.track}
              </span>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-brand-muted">
                {t.roles.map((r) => (
                  <li key={r.title}>
                    <p className="text-sm font-semibold text-brand-ink">
                      {r.title}
                    </p>
                    <p className="mt-1 text-sm text-brand-muted">
                      {r.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Alumni — 3 success-story cards with salary progression.
 * ============================================================ */

function Alumni() {
  const alumni = [
    {
      name: "Jitendra",
      village: "Bhondsi, Gurugram",
      background: "ITI in Plumbing",
      role: "On-site Water Project Supervisor",
      from: "₹14k",
      to: "₹30k",
    },
    {
      name: "Aakash",
      village: "Bhokarka, Manesar",
      background: "Data entry operator",
      role: "Drone operator & GIS associate",
      from: "₹13k",
      to: "₹30k",
    },
    {
      name: "Ismail",
      village: "Devilal Colony, Gurugram",
      background: "Sales executive",
      role: "AutoCAD & forestry expert",
      from: "₹20k",
      to: "₹28k",
    },
  ];

  return (
    <section id="alumni" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Alumni stories
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Real fellows, real growth
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Three of our fellows — and the leap they made through the
            programme.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-3">
          {alumni.map((a) => (
            <li
              key={a.name}
              className="flex flex-col rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange-dark">
                {a.village}
              </span>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-brand-ink">
                {a.name}
              </h3>
              <p className="mt-1 text-sm text-brand-muted">
                Before: {a.background}
              </p>
              <p className="mt-4 text-sm font-semibold text-brand-ink">
                Now: {a.role}
              </p>
              <div className="mt-6 flex items-baseline gap-2 rounded-2xl bg-white px-4 py-3 ring-1 ring-brand-soft/70">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Income
                </span>
                <span className="ml-auto text-sm font-bold text-brand-muted line-through">
                  {a.from}
                </span>
                <span className="text-2xl font-extrabold text-brand-green-dark">
                  {a.to}
                </span>
                <span className="text-xs text-brand-muted">/mo</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
 * Page
 * ============================================================ */

export default function WeForWaterPage() {
  return (
    <>
      <SolutionHero
        eyebrow="Solution · WeForWater Fellowship"
        headlineBefore="Building India's"
        headlineAccent="green"
        headlineAfter="workforce"
        lead={
          <>
            India&apos;s first apprenticeship programme preparing youth
            to become workers, leaders, managers and enablers for
            sustainability — through one year of hands-on, experiential
            learning across six green tracks.
          </>
        }
        primaryCta={{ label: "Six tracks", href: "#tracks" }}
        secondaryCta={{ label: "Alumni stories", href: "#alumni" }}
        backdrop="/uploads/2025/06/we-for-wtr-1-1.png"
        iconSrc="/uploads/2026/05/logo-we-for-water.png"
        iconAlt="We for Water"
        iconShape="wide"
      />

      <WeForWaterSectionNav />

      <SolutionCrisisBlock
        eyebrow="Why green jobs"
        heading={
          <>
            India needs{" "}
            <span className="text-brand-orange-dark">35 million</span>{" "}
            green jobs by 2047
          </>
        }
        paragraphs={[
          <>
            India faces a dual challenge of environmental sustainability
            and rapid economic growth. With a population projected to
            exceed 1.6 billion by 2047, the demand for employment will
            be immense — especially as automation disrupts traditional
            industries.
          </>,
          <>
            Green jobs offer a way to build economic resilience with
            environmental outcomes, empowering youth, enhancing rural
            livelihoods and bridging the urban–rural development divide.
          </>,
          <>
            By definition: <em>green jobs are decent jobs that
            preserve or restore the environment</em> — either in new
            green sectors or in conventional sectors going green.
            WeForWater is built to be the on-ramp to those careers.
          </>,
        ]}
        stat={{
          label: "Green jobs needed by 2047",
          value: "35M",
          supporting: (
            <>
              We&apos;re building the apprenticeship pathway so India
              has the workforce to fill them.
            </>
          ),
        }}
      />

      <SolutionApproachGrid
        id="tracks"
        eyebrow="The fellowship"
        heading={<>One-year green apprenticeship · six tracks</>}
        intro={
          <>
            Fellows specialise in one of six tracks while sharing a
            common foundation in water, ecology and community
            engagement.
          </>
        }
        cols={3}
        bg="bg-brand-mist"
        cards={[
          { title: "Water Management", body: "Recharge, conservation, water quality and community outreach.", emoji: "💧", tone: "teal" },
          { title: "Forestry", body: "Inventory, restoration, monitoring and species management.", emoji: "🌳", tone: "green" },
          { title: "Design & Operations", body: "Project design, CAD/GIS, site supervision and operations.", emoji: "📐", tone: "orange" },
          { title: "Waste Management", body: "Compliance, waste-to-energy, landfill operations and education.", emoji: "♻️", tone: "green" },
          { title: "Agriculture", body: "Agronomy, farm management, extension and crop research.", emoji: "🌾", tone: "orange" },
          { title: "Research & Data Handling", body: "Field data collection, monitoring, analysis and documentation.", emoji: "🔬", tone: "teal" },
        ]}
      />

      <ProgrammeStructure />

      <Placements />

      <Alumni />

      <SolutionClosingCta
        eyebrow="Apply or partner"
        heading={<>Be part of WeForWater</>}
        body={
          <>
            Want to apply for the next cohort, host fellows at your
            organisation, or fund a fellow&apos;s journey? Reach out to
            us — every conversation moves a young person one step
            closer to a green career.
          </>
        }
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "Back to solutions", href: "/solutions" }}
      />
    </>
  );
}
