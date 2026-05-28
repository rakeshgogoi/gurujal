import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StickyAnchorNav } from "@/components/sticky-anchor-nav";
import { SolutionClosingCta } from "@/components/solution-detail/closing-cta";

export const metadata: Metadata = {
  title: "Maujabad Pond — A Village Reclaims Its Water — GuruJal",
  description:
    "A 1.2-acre village pond in Maujabad, Pataudi block, restored with a 100 KLD phytorid wastewater treatment plant. ₹37.33 lakhs of combined government investment and community crowdfunding bring a polluted water body back to life.",
};

/* ============================================================
 * Key stat tiles — hero strip
 * ============================================================ */
const keyStats = [
  { value: "1.2", unit: "acres", label: "Pond area restored" },
  { value: "100", unit: "KLD", label: "Phytorid WWTP capacity" },
  { value: "₹31.33", unit: "lakhs", label: "Government investment" },
  { value: "₹6", unit: "lakhs", label: "Community crowdfunding" },
  { value: "₹37.33", unit: "lakhs", label: "Total project investment" },
  { value: "May 2024", unit: "", label: "Project documentation" },
];

/* ============================================================
 * Sticky section anchor nav
 * ============================================================ */
function MojabadSectionNav() {
  return (
    <StickyAnchorNav
      sections={[
        { label: "Background", href: "#background" },
        { label: "The Site", href: "#site" },
        { label: "The Need", href: "#need" },
        { label: "Interventions", href: "#interventions" },
        { label: "Phytorid Tech", href: "#phytorid" },
        { label: "Community", href: "#community" },
        { label: "Impact", href: "#impact" },
      ]}
    />
  );
}

/* ============================================================
 * Hero
 * ============================================================ */
function MojabadHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2024/08/DJI_0793.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/75 via-brand-deep/70 to-brand-deep/85" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-brand-teal/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-32 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <Link
          href="/support-a-pond"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal-bright hover:text-white"
        >
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
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Support a Pond
        </Link>

        <span className="mt-6 inline-flex rounded-full bg-brand-orange/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange ring-1 ring-brand-orange/40">
          Pond restoration story
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Maujabad Pond —{" "}
          <span className="text-brand-teal-bright">A Village Reclaims Its Water</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          From a waste-choked water body to a community asset — a 1.2-acre
          village pond restored with a phytorid wastewater treatment plant
          and a community that put its own money on the table.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-[13px]">
          <span>GuruJal Research Team</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>14 May 2024</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>Maujabad · Pataudi · Gurugram</span>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
          {keyStats.map((s) => (
            <li
              key={s.label}
              className="rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/15 backdrop-blur"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {s.value}
                </span>
                {s.unit && (
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-brand-teal-bright">
                    {s.unit}
                  </span>
                )}
              </div>
              <div className="mt-1.5 text-[11px] font-semibold leading-snug text-white/80 sm:text-xs">
                {s.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
 * Background
 * ============================================================ */
function BackgroundSection() {
  return (
    <section id="background" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Background
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              From the vibrant centrepiece of a village to a waste-choked sink
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                Maujabad Pond was once the vibrant centrepiece of the
                village landscape — a place where generations gathered along
                its shores. Over the years, rapid urbanisation and steady
                neglect transformed it into a polluted water body, choked
                with waste, sewage and aquatic weeds.
              </p>
              <p>
                Rainwater and wastewater from adjacent villages drained
                directly into the pond. Solid waste accumulated along the
                periphery, and monsoon agricultural runoff added another
                layer of nutrient pollution — accelerating eutrophication
                and aquatic-weed proliferation.
              </p>
              <p>
                The restoration journey emerged from community
                determination to reclaim their heritage. GuruJal, together
                with the gram panchayat and the residents of Maujabad,
                embarked on a comprehensive rejuvenation programme to
                restore the pond&apos;s ecological health and turn it back
                into a thriving community water asset.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-brand-soft/70">
              <Image
                src="/uploads/2024/08/DJI_0801.jpg"
                alt="Aerial view of Maujabad pond and the village surrounding it"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-brand-deep/55 via-transparent to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-teal-bright">
                  Aerial drone view
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Pre-restoration site assessment of the pond and its catchment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Site / Project Area
 * ============================================================ */
const siteFacts = [
  { label: "Village", value: "Maujabad" },
  { label: "Gram Panchayat", value: "Maujabad" },
  { label: "Block", value: "Pataudi" },
  { label: "District", value: "Gurugram" },
  { label: "State", value: "Haryana" },
  { label: "Coordinates", value: "28.302975°N, 76.689506°E" },
];

function SiteSection() {
  return (
    <section id="site" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              The site
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              A 1.2-acre pond at the heart of Maujabad
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                Maujabad village sits in the Pataudi Block of Gurugram
                district, Haryana, with the project pond located at
                28.302975°N latitude and 76.689506°E longitude. Spanning
                approximately 1.2 acres, the pond is a vital feature of the
                village landscape and a lifeline for the surrounding rural
                community.
              </p>
              <p>
                As a key water body for the panchayat, the pond historically
                supported livestock, biodiversity and groundwater recharge
                for nearby farms. Restoring it is as much a hydrological
                intervention as it is a cultural one — reconnecting the
                community with a space its older generation grew up with.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white p-7 ring-1 ring-brand-soft/70 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
                Site at a glance
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">
                {siteFacts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-brand-ink">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Need
 * ============================================================ */
function NeedSection() {
  return (
    <section id="need" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            The need
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            An ecological collapse demanding urgent, integrated action
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            <p>
              The site assessment revealed that rainwater and wastewater
              from adjacent villages flowed directly into the pond. Solid
              waste accumulation, monsoon agricultural runoff and untreated
              sewage drove severe pollution and accelerated eutrophication.
            </p>
            <p>
              Aquatic weeds had taken over the surface, choking light and
              oxygen. The pond — once a lifeline for the surrounding rural
              community — could no longer recharge the aquifer, support
              biodiversity or serve as a usable village asset. Without
              intervention, the loss would have been permanent.
            </p>
            <p>
              The community&apos;s response was striking: alongside the
              ₹31.33 lakh government allocation, residents themselves
              raised <strong>₹6 lakhs through crowdfunding</strong> —
              putting their own money on the table to revive the pond.
            </p>
          </div>

          <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Aims & objectives
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              Mitigate, restore, engage, sustain
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-brand-ink sm:text-base">
              {[
                "Mitigate pollutant influx — wastewater discharge, agricultural runoff and solid waste dumping at the pond periphery.",
                "Restore ecological health and biodiversity through nature-based wastewater treatment and native plantation.",
                "Foster community participation through awareness campaigns, painting drives and shared ownership rituals.",
                "Establish sustainable long-term management practices anchored in panchayat-led O&M and real-time monitoring.",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Technical Interventions
 * ============================================================ */
const interventions: {
  step: string;
  title: string;
  body: string;
  tone: "teal" | "green" | "orange" | "cyan";
}[] = [
  {
    step: "01",
    title: "Dewatering, Desilting & Slope Stabilisation",
    body: "Complete water removal and silt elimination to prepare the pond bed, followed by reinforced slope stabilisation to enhance water retention and prevent erosion.",
    tone: "teal",
  },
  {
    step: "02",
    title: "100 KLD Phytorid WWTP & Pipeline",
    body: "A 100 KLD Wastewater Treatment Plant using phytorid technology, with supporting pipeline infrastructure to intercept and treat sewage before it enters the pond.",
    tone: "green",
  },
  {
    step: "03",
    title: "Landscaping & Plantation",
    body: "Comprehensive environmental design — turfing, brick trails, herbal gardens and native plantation — creating a green community space around the restored pond.",
    tone: "orange",
  },
  {
    step: "04",
    title: "Infrastructure & Amenities",
    body: "RCC retaining walls, paved areas, entrance gates, fencing, children's play areas, street lighting and an AWLR (Automatic Water Level Recorder) for monitoring.",
    tone: "cyan",
  },
];

const toneAccent: Record<"teal" | "green" | "orange" | "cyan", string> = {
  teal: "bg-brand-teal text-white",
  green: "bg-brand-green text-white",
  orange: "bg-brand-orange text-white",
  cyan: "bg-brand-accent text-brand-deep",
};

function InterventionsSection() {
  return (
    <section id="interventions" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Technical interventions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Four core activities, engineered around a phytorid treatment core
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Each intervention works in concert — divert and treat
            wastewater, restore the pond bed, stabilise the slopes, and
            wrap the restored asset in landscaping the community wants to
            spend time around.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {interventions.map((i) => (
            <li
              key={i.step}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-soft/80 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span
                className={`mb-5 inline-flex h-9 items-center self-start rounded-full px-3 text-xs font-bold uppercase tracking-[0.14em] ${toneAccent[i.tone]}`}
              >
                Step {i.step}
              </span>
              <h3 className="text-lg font-semibold leading-snug text-brand-ink">
                {i.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {i.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
 * Phytorid technology spotlight
 * ============================================================ */
function PhytoridSection() {
  return (
    <section id="phytorid" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Technology spotlight
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Phytorid treatment — wastewater, treated by plants
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                Following thorough deliberation and comprehensive
                pre-feasibility studies, Maujabad adopted phytorid treatment
                — an ecological, sustainable approach to wastewater
                management grounded in natural processes.
              </p>
              <p>
                Phytorid systems use engineered wetlands populated with
                specific aquatic and emergent plant species that absorb
                nutrients, break down organic matter, and biologically
                polish wastewater to a quality safe for groundwater
                recharge. Energy costs are minimal, mechanical parts are
                few, and the system blends visually into the landscape.
              </p>
              <p>
                At 100 KLD capacity, the Maujabad phytorid plant
                intercepts sewage before it reaches the pond — protecting
                the restored water body and converting a daily pollutant
                load into a recharge resource.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
                Why phytorid
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-brand-ink sm:text-base">
                {[
                  {
                    h: "Nature-based",
                    b: "Plants and microbial communities do the treatment work — no chemicals required.",
                  },
                  {
                    h: "Low energy",
                    b: "Gravity-fed flow with minimal mechanical components — fits a village O&M budget.",
                  },
                  {
                    h: "Landscape-friendly",
                    b: "Reads as a green wetland, not an industrial installation.",
                  },
                  {
                    h: "Recharge-ready",
                    b: "Polished effluent feeds the pond and the aquifer instead of polluting them.",
                  },
                ].map((p) => (
                  <li key={p.h}>
                    <p className="font-semibold text-brand-ink">{p.h}</p>
                    <p className="mt-1 text-brand-muted">{p.b}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Community / IEC
 * ============================================================ */
const iecActivities = [
  {
    title: "Community Crowdfunding",
    body: "Residents of Maujabad raised ₹6 lakhs themselves — putting their own money behind the pond and signalling shared ownership from day one.",
  },
  {
    title: "Mural Painting Drives",
    body: "Community members painted vibrant murals on the walls surrounding the pond — transforming the perimeter into a public art space.",
  },
  {
    title: "Plantation Drives",
    body: "Hands-on plantation activities introduced native species, herbal gardens and shade trees — a green ring around the restored pond.",
  },
  {
    title: "Awareness Campaigns",
    body: "IEC sessions on wastewater management, groundwater depletion and the pond's role as a community asset for generations to come.",
  },
  {
    title: "Pond Committee Formation",
    body: "A local pond committee, anchored by the gram panchayat, takes responsibility for long-term operations, maintenance and monthly clean-up drives.",
  },
  {
    title: "Collective Ownership Rituals",
    body: "From the stone-laying to the first plantation, the project leaned on public moments that converted spectators into stewards.",
  },
];

function CommunitySection() {
  return (
    <section id="community" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Information, education & communication
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            A community that paid in cash, time and care
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Maujabad is unusual — the village itself raised ₹6 lakhs of
            crowdfunding alongside the government grant. The IEC programme
            built on that energy with painting, plantation and
            participatory governance.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {iecActivities.map((a, i) => (
            <li
              key={a.title}
              className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-brand-soft/70 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-teal/15 text-xs font-extrabold text-brand-teal-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-base font-semibold text-brand-ink sm:text-lg">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {a.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-14 max-w-3xl rounded-3xl bg-brand-deep p-8 text-center ring-1 ring-brand-soft/40 sm:p-10">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className="mx-auto text-brand-orange/80"
          >
            <path d="M9 7H5a2 2 0 0 0-2 2v6h6V9H7a0 0 0 0 1 0 0 2 2 0 0 1 2-2zm10 0h-4a2 2 0 0 0-2 2v6h6V9h-2a0 0 0 0 1 0 0 2 2 0 0 1 2-2z" />
          </svg>
          <p className="mt-4 text-lg font-medium leading-relaxed text-white sm:text-xl">
            When a village puts ₹6 lakhs of its own money on the table for
            a pond, restoration stops being a project — it becomes a shared
            commitment to the next generation.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Before / After
 * ============================================================ */
function BeforeAfterSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-brand-deep">
          <div className="grid sm:grid-cols-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/uploads/2026/05/mojabad-pond-before.png"
                alt="Maujabad Pond before restoration — degraded water body choked with waste and aquatic weeds"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 inline-flex rounded-full bg-brand-deep/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white ring-1 ring-white/15">
                Before
              </span>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/uploads/2026/05/mojabad-pond-after.jpg"
                alt="Maujabad Pond after restoration — clean embankment, landscaping and a thriving community asset"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 inline-flex rounded-full bg-brand-green px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
                After
              </span>
            </div>
          </div>
          <div className="px-6 py-5 text-center text-sm font-medium text-white/80 sm:text-base">
            From a polluted waste sink to a thriving community asset — with
            phytorid treatment, landscaping and a community that owns the
            outcome.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Impact
 * ============================================================ */
function ImpactSection() {
  return (
    <section id="impact" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Potential impact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Ecological revival, hydrological gains and community ownership
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            The total investment of ₹37.33 lakhs represents both
            government commitment and community solidarity — converting a
            polluted water body into a thriving asset that serves
            Maujabad for generations.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-3">
          {[
            {
              value: "100",
              unit: "KLD",
              label: "Wastewater treated daily",
              body: "Phytorid plant intercepts and polishes sewage before it can reach the pond — protecting both the water body and the aquifer.",
              tone: "bg-brand-teal text-white",
            },
            {
              value: "1.2",
              unit: "acres",
              label: "Pond surface restored",
              body: "Full pond area dewatered, desilted and re-engineered — with stabilised slopes and embankments for long-term resilience.",
              tone: "bg-brand-orange text-white",
            },
            {
              value: "₹6",
              unit: "lakhs",
              label: "Community crowdfunding",
              body: "Maujabad residents raised their own contribution alongside the ₹31.33-lakh government grant — converting the pond into a shared asset.",
              tone: "bg-brand-green text-white",
            },
          ].map((s) => (
            <li
              key={s.label}
              className="flex flex-col rounded-3xl bg-brand-mist p-8 ring-1 ring-brand-soft/70"
            >
              <span
                className={`inline-flex h-8 items-center self-start rounded-full px-3 text-[11px] font-bold uppercase tracking-[0.16em] ${s.tone}`}
              >
                {s.label}
              </span>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
                  {s.value}
                </span>
                {s.unit && (
                  <span className="text-sm font-bold uppercase tracking-[0.14em] text-brand-teal-dark">
                    {s.unit}
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted sm:text-base">
                {s.body}
              </p>
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
export default function MojabadPondPage() {
  return (
    <>
      <MojabadHero />
      <MojabadSectionNav />
      <BackgroundSection />
      <SiteSection />
      <NeedSection />
      <InterventionsSection />
      <PhytoridSection />
      <CommunitySection />
      <BeforeAfterSection />
      <ImpactSection />
      <SolutionClosingCta
        eyebrow="Help us restore the next pond"
        heading={<>Every pond restored is a community made water secure</>}
        body={
          <>
            Support GuruJal&apos;s mission to make India water neutral —
            one village, one pond at a time.
          </>
        }
        primaryCta={{ label: "Support a Pond", href: "/support-a-pond" }}
        secondaryCta={{ label: "Connect the Drop", href: "/connect-the-drop" }}
      />
    </>
  );
}
