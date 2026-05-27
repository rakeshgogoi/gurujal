import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StickyAnchorNav } from "@/components/sticky-anchor-nav";
import { SolutionClosingCta } from "@/components/solution-detail/closing-cta";

export const metadata: Metadata = {
  title: "Chandla Dungerwas Pond — Echoes of Renewal — GuruJal",
  description:
    "A 1.07-acre village pond in Manesar Tehsil, restored from a polluted waste sink into a community water asset. 7,200 m³ of expanded capacity, 25,567 KL of annual groundwater recharge, 700+ villagers directly benefiting.",
};

/* ============================================================
 * Key stat tiles — surfaced in the hero strip + repeated under Impact
 * ============================================================ */
const keyStats = [
  { value: "1.07", unit: "acres", label: "Pond area on satellite imagery" },
  { value: "700+", unit: "", label: "Villagers directly benefiting" },
  { value: "42.05", unit: "m", label: "Groundwater depth before intervention" },
  { value: "7,200", unit: "m³", label: "Expanded pond capacity after desilting" },
  { value: "25,567", unit: "KL/yr", label: "Annual groundwater recharge" },
  { value: "518", unit: "", label: "People sustained for a year" },
];

/* ============================================================
 * Sticky section anchor nav — same shrink-on-stick behaviour as
 * the About / Solutions / Reports pages.
 * ============================================================ */
function ChandlaSectionNav() {
  return (
    <StickyAnchorNav
      sections={[
        { label: "Background", href: "#background" },
        { label: "The Site", href: "#site" },
        { label: "The Need", href: "#need" },
        { label: "Interventions", href: "#interventions" },
        { label: "Pictorial Journey", href: "#journey" },
        { label: "Community", href: "#community" },
        { label: "Impact", href: "#impact" },
      ]}
    />
  );
}

/* ============================================================
 * Hero — full-bleed pond photo + byline + headline + key stat strip
 * ============================================================ */
function ChandlaHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2026/03/chandla-dungerwas-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/75 via-brand-deep/70 to-brand-deep/85" />
      </div>

      {/* Brand glows */}
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
          href="/events"
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
          Stories & journeys
        </Link>

        <span className="mt-6 inline-flex rounded-full bg-brand-orange/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange ring-1 ring-brand-orange/40">
          Pond restoration story
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Chandla Dungerwas Pond —{" "}
          <span className="text-brand-teal-bright">Echoes of Renewal</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Capturing the restoration journey of a 1.07-acre village pond in
          Manesar Tehsil — from waste sink to community water asset.
        </p>

        {/* Byline strip */}
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-[13px]">
          <span>By Shivansh Ghildiyal</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>10 July 2024</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>Manesar Tehsil · Gurugram · Haryana</span>
        </div>

        {/* Key stat strip — 6 tiles */}
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
 * Background — a cherished pond facing years of neglect
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
              A cherished pond facing years of neglect and pollution
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                Chandla Dungerwas Pond, once a pristine haven for local
                wildlife and a cherished spot for the community, has faced
                years of neglect and pollution.
              </p>
              <p>
                Rapid urbanization and improper waste management have led
                to severe degradation, threatening its ecological balance
                and reducing its utility for the local population.
                Improper waste management practices have left the pond
                filled with solid waste, construction debris, and sewage —
                resulting in severe pollution and eutrophication.
              </p>
              <p>
                Recognising the urgent need for intervention, the
                community, alongside environmental advocates and local
                authorities, embarked on a comprehensive restoration and
                rejuvenation project. The initiative aims to revive
                Chandla Dungerwas Pond, restoring its ecological health
                and transforming it back into a thriving natural oasis
                and a valuable resource for the community.
              </p>
            </div>
          </div>

          {/* Side image card */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-brand-soft/70">
              <Image
                src="/uploads/2024/08/DJI_0801.jpg"
                alt="Aerial view of the Chandla Dungerwas pond and the village around it"
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
                  Severely degraded state before restoration began
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
 * Site / Project Area — village details + coordinates
 * ============================================================ */
const siteFacts = [
  { label: "Village", value: "Chandla Dungerwas" },
  { label: "Tehsil", value: "Manesar" },
  { label: "Block", value: "Pataudi" },
  { label: "District", value: "Gurugram" },
  { label: "State", value: "Haryana" },
  { label: "Coordinates", value: "28°17'44.1\"N, 76°53'53.0\"E" },
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
              A vital pond at the heart of a vibrant village
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                Chandla Dungerwas, a quaint village in the Manesar Tehsil
                of Pataudi Block, Gurugram district, has been chosen for
                the restoration and rejuvenation of its central pond.
                Nestled in the heart of the village, the pond is located
                at 28°17&apos;44.1&quot;N latitude and 76°53&apos;53.0&quot;E
                longitude. Spanning approximately 1.07 acres as demarcated
                on satellite imagery, it is a vital feature of the village
                landscape.
              </p>
              <p>
                Situated 25.2 km from the district headquarters, the
                village is well-connected by the Kundli–Manesar–Palwal
                Expressway, which lies just 200 metres away. This small
                yet vibrant village — with a population of around 700+ —
                relies on the pond for both ecological balance and
                community life.
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
 * Need — pollution + groundwater crisis
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
            Severe pollution and a groundwater crisis demanding urgent action
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            <p>
              During the initial site visit, it was evident that rainwater
              and wastewater from adjacent houses flowed directly into the
              pond. Filled with solid waste, construction debris and
              sewage, the pond suffered from severe pollution and
              eutrophication. The surrounding rural area added
              agricultural runoff during the monsoon, further degrading
              water quality.
            </p>
            <p>
              With groundwater levels at <strong>42.05 metres below
              ground</strong>, the pond&apos;s condition posed significant
              environmental challenges. Aquatic weeds, high nutrient
              loads and organic waste called for immediate treatment to
              restore ecological balance.
            </p>
            <p>
              The continuous dumping of waste and encroachment around the
              pond&apos;s periphery had compounded the situation —
              steadily deteriorating both water and soil quality.
            </p>
          </div>

          {/* Aims & Objectives card */}
          <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Aims & objectives
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              Conserve, revitalise and reconnect the community with water
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-brand-ink sm:text-base">
              {[
                "Revitalise the degraded pond to recharge the local aquifers effectively.",
                "Mitigate pond pollution by managing wastewater discharge and preventing solid-waste dumping.",
                "Preserve and enhance the local biodiversity within and around the pond.",
                "Cultivate the surrounding areas with flowering plants, medicinal plants, shrubs and climbers.",
                "Enhance the natural beauty and provide a green space that enriches the spiritual, aesthetic and social life of the villagers.",
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
 * Technical Interventions — 4-step methodology grid
 * ============================================================ */
const interventions: { step: string; title: string; body: string; tone: "teal" | "green" | "orange" | "cyan" }[] = [
  {
    step: "01",
    title: "Cleaning of the Pond",
    body: "Thorough cleaning of the site and removal of all temporary encroachments — a fresh start for the restoration process.",
    tone: "teal",
  },
  {
    step: "02",
    title: "Desilting of the Pond",
    body: "Capacity expanded from approximately 4,500 to about 7,200 cubic metres through desilting — enhancing the pond's ability to manage water influx.",
    tone: "green",
  },
  {
    step: "03",
    title: "Levelling of the Pond",
    body: "Levelling the pond site and preparing a drainage system to channel runoff from the catchment area into the pond — ensuring proper water flow and retention.",
    tone: "orange",
  },
  {
    step: "04",
    title: "Sewage Treatment Plant (150 KLD)",
    body: "A 150 KLD sewage treatment plant installed near the pond to treat and divert wastewater — supporting continuous water supply and groundwater recharge.",
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
            A four-step engineering and ecological restoration plan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Addressing agricultural runoff in the monsoon and wastewater
            from the surrounding catchment — each step prepares the pond
            to hold, clean and slowly return water to the aquifer.
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
 * Pictorial Journey — 10 numbered stages with captions
 * ============================================================ */
const stages = [
  {
    title: "Demarcation",
    body: "Marking the boundary of the pond area before restoration work begins on the site.",
  },
  {
    title: "Dewatering",
    body: "Pumping out accumulated water and sewage to allow excavation and desilting work to begin.",
  },
  {
    title: "Dredging & Desilting",
    body: "Excavator clearing the pond bed to lift storage capacity from 4,500 to 7,200 cu.m.",
  },
  {
    title: "Levelling",
    body: "Grading and levelling the cleared pond bed, preparing drainage channels for proper water flow.",
  },
  {
    title: "Creating Embankment",
    body: "Constructing the reinforced boundary around the pond perimeter to prevent encroachment and retain water.",
  },
  {
    title: "WWTP Construction",
    body: "Building the 150 KLD Sewage Treatment Plant structure with rebar and formwork on site.",
  },
  {
    title: "Pathway Construction",
    body: "Laying the cobblestone embankment pathway around the pond perimeter for community access.",
  },
  {
    title: "Cattle Rampway",
    body: "Concrete steps providing safe access to the pond for cattle — reducing embankment erosion.",
  },
  {
    title: "Solar Light Installation",
    body: "Installing solar-powered street lights along the pond boundary for community use at night.",
  },
  {
    title: "Open Gym & Fencing",
    body: "Outdoor gym equipment and protective fencing transform the restored pond into a community green space.",
  },
];

function JourneySection() {
  return (
    <section id="journey" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Pictorial journey
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Ten stages, from polluted water body to community asset
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            From the first demarcation of the pond boundary to solar
            light installation and an open gym — a complete record of
            every major intervention at Chandla Dungerwas.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-5">
          {stages.map((s, i) => (
            <li
              key={s.title}
              className="group flex gap-5 rounded-2xl bg-brand-mist p-5 ring-1 ring-brand-soft/70 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-md sm:p-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-teal text-base font-extrabold tracking-tight text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-semibold text-brand-ink sm:text-lg">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-muted">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Before / After card */}
        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl bg-brand-deep">
          <div className="grid sm:grid-cols-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/uploads/2026/03/chandla-dungerwas-hero.jpg"
                alt="Before — degraded pond with stagnant water"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover [filter:grayscale(1)_brightness(0.85)]"
              />
              <span className="absolute left-4 top-4 inline-flex rounded-full bg-brand-deep/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white ring-1 ring-white/15">
                Before
              </span>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/uploads/2025/04/freshwater-pond-1.jpg"
                alt="After — restored pond with clean embankment"
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
            From a polluted, degraded water body to a restored community
            pond with a clean embankment.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Community / IEC — 6 outreach activities
 * ============================================================ */
const iecActivities = [
  {
    title: "Stone-Laying Ceremony",
    body: "Hon. Member of Parliament Rao Inderjit Singh and the Hon. Deputy Commissioner of Gurugram unveiled a commemorative stone — marking the project's official commencement.",
  },
  {
    title: "Community Meetings",
    body: "Meetings with local residents to gather their input and ensure their support for the restoration plan.",
  },
  {
    title: "Women's Engagement",
    body: "Dedicated sessions with the women of the village — building shared ownership of the pond and its surrounds.",
  },
  {
    title: "Paani Panchayat",
    body: "A water-awareness programme launched to educate the entire community on sustainable water management.",
  },
  {
    title: "Orientation Sessions",
    body: "Sessions designed to instil a sense of responsibility for maintaining the restored pond after project completion.",
  },
  {
    title: "Youth Activation",
    body: "On 8 July 2022, GuruJal organised a one-day training programme with Nehru Yuva Kendra volunteers — activating youth clubs across Gurugram district villages.",
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
            Building community ownership through awareness and participation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            A series of IEC activities embedded the principles of
            conservation and sustainability within the community —
            making the restored pond a shared asset, not just a project.
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

        {/* Quote card */}
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
            We at GuruJal are committed to avert Day Zero while ensuring
            India&apos;s water security. To support us, do visit our
            website and explore our work.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Impact — three big-number callouts
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
            What this restored pond means for the community and beyond
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            The restoration is projected to deliver measurable
            ecological, hydrological and community benefits — turning a
            degraded waste dump into a thriving community water asset.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-3">
          {[
            {
              value: "25,567",
              unit: "KL/yr",
              label: "Groundwater recharged",
              body: "Kilolitres of fresh water recharged into the aquifer each year — raising the local water table.",
              tone: "bg-brand-teal text-white",
            },
            {
              value: "518",
              unit: "",
              label: "People sustained for a year",
              body: "Equivalent annual water-supply benefit for the village — based on standard per-capita usage.",
              tone: "bg-brand-orange text-white",
            },
            {
              value: "700+",
              unit: "",
              label: "Villagers directly benefiting",
              body: "Improved water access, restored biodiversity and a usable community green space — for every household in Chandla Dungerwas.",
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
export default function ChandlaDungarwasPondPage() {
  return (
    <>
      <ChandlaHero />
      <ChandlaSectionNav />
      <BackgroundSection />
      <SiteSection />
      <NeedSection />
      <InterventionsSection />
      <JourneySection />
      <CommunitySection />
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
