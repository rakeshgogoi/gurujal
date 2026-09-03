import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StickyAnchorNav } from "@/components/sticky-anchor-nav";
import { SolutionClosingCta } from "@/components/solution-detail/closing-cta";
import { BeforeAfter } from "@/components/pond/before-after";
import { KeyStatsStrip } from "@/components/pond/key-stats-strip";
import { VisualVignettes, type Vignette } from "@/components/pond/visual-vignettes";

/* ============================================================
 * Visual Vignettes — two short clips imported from the ArcGIS
 * Triveni Pond StoryMap, played muted on scroll-into-view.
 * ============================================================ */
const triveniVignettes: Vignette[] = [
  {
    title: "The pond before restoration",
    poster: "/uploads/2026/08/triveni-vignette-1-aerial.jpg",
    src: "/uploads/2026/08/triveni-vignette-1-aerial.mp4",
    shortBody: <>An algae-choked pond, starved of oxygen and groundwater function.</>,
    body: (
      <p>
        An aerial survey of the Bhokarka pond before intervention — a
        thick algal bloom smothers the surface, the visible signature of
        untreated wastewater inflow, silt build-up and nutrient
        overload that had all but shut down the pond&apos;s ecological
        and hydrological function.
      </p>
    ),
  },
  {
    title: "The restored environmental park",
    poster: "/uploads/2026/08/triveni-vignette-2-park.jpg",
    src: "/uploads/2026/08/triveni-vignette-2-park.mp4",
    shortBody: <>A looped pathway and reflection circles ring the revived pond.</>,
    body: (
      <p>
        A paved loop path, log-and-stone seating circles and gateway
        markers now wrap the pond perimeter — the open expanse the
        community chose to turn into an environmental park, a place for
        solace and communion with nature rather than a wastewater sink.
      </p>
    ),
  },
];

export const metadata: Metadata = {
  title: "Triveni Pond, Bhokarka — 2025 Annual Report — GuruJal",
  description:
    "A 200 KLD nature-based wastewater treatment plant, commissioned January 2025, has turned Triveni Pond in Bhokarka village from a polluted wastewater sink into a thriving ecological water body — an 88% cut in BOD, a 1.39m rise in groundwater, and 40 species of fauna recorded in 2025.",
};

/* ============================================================
 * Key stat tiles — hero strip
 * ============================================================ */
const keyStats = [
  { value: "200", unit: "KLD", label: "Wastewater treatment capacity" },
  { value: "88", unit: "%", label: "BOD reduction since 2023" },
  { value: "1.39", unit: "m", label: "Groundwater level rise" },
  { value: "40", unit: "species", label: "Fauna recorded in 2025" },
  { value: "6.03", unit: "tons", label: "CO₂ sequestered in 2025" },
  { value: "25K+", unit: "/yr", label: "Annual community footfall" },
];

/* ============================================================
 * Sticky section anchor nav
 * ============================================================ */
function TriveniSectionNav() {
  return (
    <StickyAnchorNav
      sections={[
        { label: "Background", href: "#background" },
        { label: "The Site", href: "#site" },
        { label: "The Need", href: "#need" },
        { label: "Interventions", href: "#interventions" },
        { label: "Ecology", href: "#ecology" },
        { label: "Work Undertaken", href: "#work" },
        { label: "Vignettes", href: "#vignettes" },
        { label: "Community", href: "#community" },
        { label: "Impact", href: "#impact" },
      ]}
    />
  );
}

/* ============================================================
 * Hero
 * ============================================================ */
function TriveniHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2026/08/triveni-pond-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Mobile / tablet: top-to-bottom gradient — the text wraps wide
            here so the photo can only breathe in the middle band. */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/85 via-brand-deep/45 to-brand-deep/85 lg:hidden" />
        {/* Desktop: gradient anchored to the left text column — the
            right half of the frame reveals the photo. */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-brand-deep/90 via-brand-deep/55 to-transparent lg:block" />
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

        {/* `flex w-fit` (block-level) forces the badge onto its own line
            below the inline back-link instead of wrapping next to it. */}
        <span className="mt-6 flex w-fit rounded-full bg-brand-orange/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange ring-1 ring-brand-orange/40">
          Pond restoration story
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Triveni Pond —{" "}
          <span className="text-brand-teal-bright">Let The Pond Breathe Again</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          A 200 KLD nature-based wastewater treatment plant, commissioned
          in January 2025, has turned a wastewater-choked village pond
          into a functioning ecological water body — an 88% cut in BOD,
          a 1.39m rise in groundwater, and more than 40 species of fauna
          recorded across 2025.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-[13px]">
          <span>GuruJal Research Team</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>Annual Report 2025</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>Bhokarka · Pataudi Block · Gurugram</span>
        </div>
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
              A community pond turned into Bhokarka&apos;s biggest pollution sink
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                Triveni Pond, in Bhokarka village (Pataudi Block,
                Gurugram District), is a community-owned water body
                that historically served as a traditional pond for
                water security, livestock needs and ecological balance.
                For several years it faced acute degradation from
                continuous untreated wastewater inflow and poor local
                drainage.
              </p>
              <p>
                The pond had become a major sink for pollution,
                receiving approximately 40% of the village&apos;s
                wastewater — around 200 KLD. The untreated inflows
                included domestic sewage and other effluent loads,
                leading to accumulation of organic sludge, foul smell
                and a decline in ecological health.
              </p>
              <p>
                The village&apos;s groundwater level was also
                critically low, at roughly 118 feet below ground level.
                The polluted pond risked contaminating the water table
                further, while solid waste dumping around the edges
                weakened the pond ecosystem and degraded the public
                environment around it.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-brand-soft/70">
              <Image
                src="/uploads/2026/08/triveni-pond-background.jpg"
                alt="Aerial view of the Triveni pond bed at Bhokarka during restoration works"
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
                  Dewatered, desilted pond bed during restoration works
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
  { label: "Village", value: "Bhokarka" },
  { label: "Block", value: "Pataudi" },
  { label: "District", value: "Gurugram" },
  { label: "State", value: "Haryana" },
  { label: "Ownership", value: "Gram Panchayat" },
  { label: "Coordinates", value: "28.277031°N, 76.793343°E" },
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
              A natural pond at the heart of Bhokarka
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                The project sits in Bhokarka village, Pataudi Block,
                Gurugram District, Haryana, at 28.277031°N latitude and
                76.793343°E longitude. Triveni Pond is a natural,
                community-owned water body of roughly 1.5 acres, owned
                by the Gram Panchayat, with a catchment of residential
                and agricultural land feeding it through rainwater
                runoff and domestic wastewater.
              </p>
              <p>
                The pond is centrally positioned within the settlement,
                making it strategically important for groundwater
                recharge and community development — with the entire
                village population, plus the neighbouring villages of
                Turkapur and Bas Paddamka, counted among its
                beneficiaries.
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
 * Need + Aims & Objectives
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
            Six challenges identified at the site
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            <ul className="space-y-3">
              {[
                "Continuous inflow of untreated wastewater (~200 KLD).",
                "High risk of groundwater contamination.",
                "Poor drainage, leading to stagnation and flooding issues.",
                "Solid waste dumping around pond edges.",
                "Declining ecological value and reduced community connection.",
                "Limited ownership and governance systems for long-term protection.",
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
            <p>
              Without timely intervention, the pond risked turning into
              a stagnant wastewater storage area, causing environmental
              degradation and potential health hazards.
            </p>
          </div>

          <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Project vision
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              A nature-based treatment system, and a pond people want to visit
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-brand-ink sm:text-base">
              {[
                "Develop a wastewater treatment plant using a nature-based solution (200 KLD WWTP).",
                "Develop a community space with landscape elements to re-establish the community's relationship with the pond.",
                "Plant for healthy pond ecology — promoting flora and fauna to improve soil quality and groundwater recharge.",
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
 * Technical Interventions — the nature-based WWTP, commissioned
 * January 2025, and the components kept it running through the year.
 * ============================================================ */
const wwtpComponents = [
  {
    title: "Nature-based WWTP (200 KLD)",
    body: "Commissioned in January 2025. Continuously treats domestic wastewater and other effluent before it reaches the pond.",
  },
  {
    title: "Screen Chamber",
    body: "Cleaned regularly to remove floating and coarse solids, preventing blockages and reducing overflow risk.",
  },
  {
    title: "Constructed Wetland",
    body: "Wetland plants trimmed regularly for airflow, sunlight penetration and nutrient uptake — the biological core of the treatment system.",
  },
  {
    title: "Overflow Drain",
    body: "Built from the screen chamber to the pond to safely carry excess flow during monsoon and prevent erosion around the treatment units.",
  },
  {
    title: "Bio-dozing",
    body: "Reduces accumulated organic sludge, improves dissolved oxygen and strengthens the pond's own self-purification.",
  },
];

function InterventionsSection() {
  return (
    <section id="interventions" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Technical interventions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            A nature-based WWTP, commissioned and running since January 2025
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            The <strong>200 KLD wastewater treatment plant</strong>{" "}
            started functioning in January 2025 — treating wastewater
            continuously before it reaches the pond, and shifting
            Triveni Pond from a polluted sink to a functional
            ecological water body. Regular operation and maintenance
            through 2025 kept the system performing and the pond
            improving.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:gap-5">
          {wwtpComponents.map((s, i) => (
            <li
              key={s.title}
              className="group flex gap-5 rounded-2xl bg-white p-5 ring-1 ring-brand-soft/70 transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
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
      </div>
    </section>
  );
}

/* ============================================================
 * Ecological Profile — 2025 survey results: successional flora,
 * plantation growth, and 40 species of fauna recorded on site.
 * ============================================================ */
const successionalFlora = [
  "Acacia senegal",
  "Cordia myxa",
  "Albizia odoratissima",
  "Ficus virens",
];
const plantationGrowth = [
  "Moringa",
  "Amla",
  "Jamun",
  "Pilkhan",
  "Kadam",
  "Lesua",
  "Dhak",
  "Kachnar",
  "Alstonia",
  "Nimbu",
  "Phalsa",
  "Jasmine",
  "Hibiscus",
  "Kaner",
  "Jatropa",
  "Chandni",
];
const highlightFauna = [
  "Scaly-breasted Munia",
  "Knob-billed Duck",
  "Pied Bushchat",
  "Common Tailorbird",
  "Indian Flapshell Turtle",
  "Scarlet Skimmer",
  "Common Hoopoe",
  "Red-wattled Lapwing",
  "Lime Butterfly",
];
const faunaGroups = [
  { count: "27", label: "Bird species" },
  { count: "9", label: "Reptile species" },
  { count: "4", label: "Butterfly species" },
];
const carbonBreakdown = [
  { value: "397.46", unit: "kg CO₂", label: "Trees" },
  { value: "65.02", unit: "kg CO₂", label: "Shrubs" },
  { value: "5,569.49", unit: "kg CO₂", label: "Grass (0.5 acre)" },
];

function EcologySection() {
  return (
    <section id="ecology" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Ecological profile
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            40 species recorded in the 2025 survey
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            The Bhokarka site is in its early-to-mid successional
            stage, gradually shifting into a multi-layered habitat — a
            2025 ecological survey recorded 27 bird species, 9 reptile
            species and 4 butterfly species alongside a structured
            plantation programme now in its second growing season.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Successional flora
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              A tree canopy forming naturally
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {successionalFlora.map((p) => (
                <li
                  key={p}
                  className="inline-flex rounded-full bg-brand-green/10 px-3 py-1.5 text-sm font-semibold text-brand-green ring-1 ring-brand-green/20"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              2025 plantation growth
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {plantationGrowth.map((p) => (
                <li
                  key={p}
                  className="inline-flex rounded-full bg-brand-teal/10 px-3 py-1.5 text-sm font-semibold text-brand-teal-dark ring-1 ring-brand-teal/20"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-brand-muted">
              Highest growth this year came from Moringa (6 feet across
              30 individuals) and Amla (2 feet across 24 individuals).
              Grasses stabilising soil — Cenchrus ciliaris, Eragrostis,
              Dactyloctenium aegyptium — and regenerating herbs —
              Leucas, Trianthema, Boerhavia diffusa — round out the
              site&apos;s natural regeneration.
            </p>
          </div>

          <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              40 species recorded
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              Birds, reptiles and butterflies returning to the pond
            </h3>
            <ul className="mt-5 grid grid-cols-3 gap-3">
              {faunaGroups.map((g) => (
                <li
                  key={g.label}
                  className="rounded-2xl bg-white p-4 text-center ring-1 ring-brand-soft/70"
                >
                  <div className="text-2xl font-extrabold tracking-tight text-brand-ink">
                    {g.count}
                  </div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-muted">
                    {g.label}
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Highlight sightings
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {highlightFauna.map((p) => (
                <li
                  key={p}
                  className="inline-flex rounded-full bg-brand-orange/10 px-3 py-1.5 text-sm font-semibold text-brand-orange ring-1 ring-brand-orange/20"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-brand-muted">
              Seasonal water retention now supports wetland birds
              (lapwings, ducks, egrets), semi-aquatic reptiles
              (flapshell turtles, keelbacks) and amphibians (Indus
              Valley bullfrog, skittering frog) — micro-habitats that
              strengthen nutrient cycling and biodiversity.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-3xl bg-brand-deep p-7 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal-bright">
              Carbon sequestration, 2025
            </p>
            <p className="text-2xl font-extrabold tracking-tight text-white">
              6.03 <span className="text-sm font-bold uppercase tracking-[0.1em] text-brand-teal-bright">tons CO₂</span>
            </p>
          </div>
          <ul className="mt-5 grid grid-cols-3 gap-4">
            {carbonBreakdown.map((c) => (
              <li key={c.label} className="text-center">
                <div className="text-lg font-bold text-white sm:text-xl">
                  {c.value}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-white/60">
                  {c.unit}
                </div>
                <div className="mt-1 text-xs font-medium text-white/75">
                  {c.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Work Undertaken — 2025 project updates: O&M, infrastructure and
 * horticulture that kept the site improving through the year.
 * ============================================================ */
const workUndertaken = [
  "Stable operation of the 200 KLD WWTP through 2025, with regular O&M.",
  "Screen chamber cleaned regularly to prevent blockages.",
  "Constructed wetland plants trimmed for airflow, light and nutrient uptake.",
  "Water sampling and testing carried out through the year (latest results: 17 December 2025).",
  "Overflow drain built from the screen chamber to the pond.",
  "Bio-dozing carried out to reduce sludge and improve dissolved oxygen.",
  "Benches installed, and fencing and the cattle ramp repainted for community use.",
  "Nursery prepared, with regular watering, manuring, grass-cutting and sapling replacement.",
];

function WorkUndertakenSection() {
  return (
    <section id="work" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            2025 project updates
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Eight activities, carried through the 2025 operating year
          </h2>
        </div>

        <ul className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2">
          {workUndertaken.map((w) => (
            <li
              key={w}
              className="flex items-start gap-3 rounded-2xl bg-white p-5 ring-1 ring-brand-soft/70"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="mt-0.5 shrink-0 text-brand-green"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-sm leading-relaxed text-brand-ink sm:text-base">
                {w}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
 * Community / IEC + EVP — 2025 engagement, real activities from the
 * annual report, plus the July 2025 Suntory Global Spirits EVP day.
 * ============================================================ */
const iecActivities = [
  {
    title: "Jal Pe Charcha",
    body: "Community meetings on water conservation held with residents, including a dedicated session with the women of Bhokarka.",
  },
  {
    title: "Composting Workshop",
    body: "A hands-on session teaching households practical composting and solid-waste management.",
  },
  {
    title: "Interactive Activity with Children",
    body: "Engaging local children in play-based water and environment awareness.",
  },
  {
    title: "Plantation & De-weeding Drive",
    body: "Community members joined hands to improve green cover, ensure sapling survival and clear invasive weeds around the pond.",
  },
  {
    title: "Women's Awareness Workshop",
    body: "A behaviour-change workshop on household toxins, their impact on water and health, and practical lifestyle changes to reduce contamination.",
  },
  {
    title: "Employee Volunteer Program",
    body: "45+ Suntory Global Spirits employees and 15+ community members ran a guided pond walk, painted 3 water-conservation awareness boards, and planted 45 saplings from 150 prepared grow bags.",
  },
];

function CommunitySection() {
  return (
    <section id="community" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Community engagement & governance
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Mobilising Bhokarka around its own pond
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Our team works closely with the Panchayat, forms Amrit
            Sewa Samoohs, and holds regular engagements with youth
            clubs, sports groups and the Mahila Mandal to build
            ownership and awareness of water conservation and local
            water bodies.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {iecActivities.map((a, i) => (
            <li
              key={a.title}
              className="flex flex-col rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 transition hover:-translate-y-1 hover:shadow-md"
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
            &ldquo;We are grateful to GuruJal and Suntory Global Spirits
            for transforming our degraded land into a beautiful pond.
            It has revived the area and created a space that connects
            people with nature and community pride.&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-brand-teal-bright">
            Mr. Ajay Yadav — Amrit Sewa Samooh Member, Bhokarka
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
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-brand-deep">
          <BeforeAfter
            className="aspect-[4/3] sm:aspect-[16/10]"
            beforeSrc="/uploads/2026/08/triveni-pond-before.jpg"
            beforeAlt="Triveni Pond before completion — dewatered, desilted pond bed under construction"
            afterSrc="/uploads/2026/08/triveni-pond-after.jpg"
            afterAlt="Triveni Pond after restoration — lush, vegetated pond with a looped community pathway"
          />
          <div className="px-6 py-5 text-center text-sm font-medium text-white/80 sm:text-base">
            Drag the slider to compare — from a dewatered, desilted
            construction site to a lush, biodiverse pond ringed by a
            community walking path.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Impact — the report's 7.2 Impact Assessment categories, plus the
 * before/after water quality lab results (2023 vs 2025).
 * ============================================================ */
const impactCards = [
  {
    value: "1.39",
    unit: "m rise",
    label: "Groundwater recharge",
    body: "A 4.56 ft (1.39 m) rise in groundwater level over two years, plus 25.6 million litres recharged since January 2025 (WRI Volumetric Water Benefit Accounting).",
    tone: "bg-brand-teal text-white",
  },
  {
    value: "88",
    unit: "% BOD cut",
    label: "Water quality",
    body: "BOD reduced from 43 mg/L to 5.2 mg/L — moving the pond from a polluted to a mildly polluted category.",
    tone: "bg-brand-orange text-white",
  },
  {
    value: "40",
    unit: "species",
    label: "Enhanced biodiversity",
    body: "27 bird species, 9 reptiles and 4 butterfly species recorded across the site in 2025.",
    tone: "bg-brand-green text-white",
  },
  {
    value: "2–3",
    unit: "°C cooler",
    label: "Climate regulation",
    body: "A localised reduction in ambient temperature of 2.0°C to 3.0°C around the restored site.",
    tone: "bg-brand-teal text-white",
  },
  {
    value: "25–29K",
    unit: "visitors/yr",
    label: "Community ownership",
    body: "25,000–29,000 people visit annually from three neighbouring villages — Bhokarka, Turkapur and Bas Paddamka.",
    tone: "bg-brand-orange text-white",
  },
];

const waterQualityRows = [
  { parameter: "pH", before: "7.43", after: "8.54", note: "Slightly more alkaline, still within acceptable range" },
  { parameter: "Total Suspended Solids (TSS)", before: "103.8 mg/L", after: "6.0 mg/L", note: "Major improvement — turbidity and sediment sharply reduced" },
  { parameter: "Total Dissolved Solids (TDS)", before: "598 mg/L", after: "680 mg/L", note: "Slight increase; still moderate for pond water" },
  { parameter: "COD", before: "162 mg/L", after: "20 mg/L", note: "Very large improvement — organic pollution drastically reduced" },
  { parameter: "BOD", before: "43 mg/L", after: "5.2 mg/L", note: "Excellent improvement — polluted to mildly polluted" },
  { parameter: "Total Nitrogen / Ammoniacal N", before: "21.6 mg/L", after: "BLQ", note: "Strong reduction — nutrient pollution significantly reduced" },
  { parameter: "Total Phosphorus", before: "2.96 mg/L", after: "2.2 mg/L", note: "Slight improvement" },
  { parameter: "Hardness (as CaCO₃)", before: "205.8 mg/L", after: "165 mg/L", note: "Slight improvement" },
  { parameter: "E. coli", before: "60 MPN/100ml", after: "<5 cfu/100ml", note: "Major biological improvement" },
  { parameter: "Faecal Coliform", before: "90 MPN/100ml", after: "<5", note: "Major biological improvement" },
];

function ImpactSection() {
  return (
    <section id="impact" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Impact assessment
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Groundwater, water quality and biodiversity — measured
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            A year of operation gives Triveni Pond something most
            restoration stories don&apos;t have yet — measured,
            year-on-year results, not just projections.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-3">
          {impactCards.map((s) => (
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

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-brand-muted sm:text-base">
          Since the WWTP began operating in January 2025, GuruJal has
          treated <strong>73 million litres</strong> of wastewater and
          recharged <strong>25.6 million litres</strong> of groundwater
          at Triveni Pond — calculated using the WRI Volumetric Water
          Benefit Accounting (VWBA) framework.
        </p>

        <div className="mx-auto mt-14 max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Lab results
          </p>
          <h3 className="mt-3 text-xl font-semibold text-brand-ink sm:text-2xl">
            Water quality, 2023 vs 2025
          </h3>
          <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-brand-soft/70">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-brand-mist text-[11px] font-bold uppercase tracking-[0.1em] text-brand-muted">
                  <th className="px-4 py-3">Parameter</th>
                  <th className="px-4 py-3">2023</th>
                  <th className="px-4 py-3">2025</th>
                  <th className="px-4 py-3">Change &amp; interpretation</th>
                </tr>
              </thead>
              <tbody>
                {waterQualityRows.map((r, i) => (
                  <tr
                    key={r.parameter}
                    className={i % 2 === 0 ? "bg-white" : "bg-brand-mist/50"}
                  >
                    <td className="px-4 py-3 font-semibold text-brand-ink">
                      {r.parameter}
                    </td>
                    <td className="px-4 py-3 text-brand-muted">{r.before}</td>
                    <td className="px-4 py-3 font-semibold text-brand-teal-dark">
                      {r.after}
                    </td>
                    <td className="px-4 py-3 text-brand-muted">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-brand-muted">
            Sample dates: 23 September 2023 (before) and 17 December
            2025 (after).
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Funded by
 * ============================================================ */
function FundedBySection() {
  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
          Funded by
        </p>
        <div className="relative mx-auto mt-5 h-12 w-48">
          <Image
            src="/uploads/2026/08/triveni-pond-funder-suntory.jpg"
            alt="Suntory Global Spirits"
            fill
            sizes="192px"
            className="object-contain"
          />
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-base font-medium italic leading-relaxed text-brand-ink sm:text-lg">
          Support a Pond · Recharge the aquifers · Offset the carbon ·
          Bring biodiversity back · Enhance green jobs · Make India
          water-secure.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
 * Page
 * ============================================================ */
export default function TriveniPondPage() {
  return (
    <>
      <TriveniHero />
      <KeyStatsStrip stats={keyStats} />
      <TriveniSectionNav />
      <BackgroundSection />
      <SiteSection />
      <NeedSection />
      <InterventionsSection />
      <EcologySection />
      <WorkUndertakenSection />
      <VisualVignettes
        items={triveniVignettes}
        heading={<>See the restoration in motion</>}
        intro={
          <>
            Two aerial clips from the Bhokarka site — the algae-choked
            pond before intervention, and the restored environmental
            park that replaced it. Each clip plays automatically when
            it scrolls into view.
          </>
        }
      />
      <CommunitySection />
      <BeforeAfterSection />
      <ImpactSection />
      <FundedBySection />
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
