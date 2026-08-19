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
  title: "Triveni Pond — Let The Pond Breathe Again — GuruJal",
  description:
    "A 1.5-acre village pond in Bhokarka, Gurugram, restored with a Decentralized Wastewater Treatment System (DEWATS) with 200 KLD capacity. From an algae-choked wastewater sink to a biodiverse environmental park for the entire village.",
};

/* ============================================================
 * Key stat tiles — hero strip
 * ============================================================ */
const keyStats = [
  { value: "1.5", unit: "acres", label: "Pond area restored" },
  { value: "200", unit: "KLD", label: "DEWATS treatment capacity" },
  { value: "7", unit: "", label: "DEWATS treatment components" },
  { value: "12", unit: "species", label: "Native flora & fauna recorded" },
  { value: "8", unit: "", label: "Restoration activities completed" },
  { value: "Apr 2026", unit: "", label: "Project documentation" },
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
          A 1.5-acre village pond in Bhokarka, choked by untreated
          wastewater and algal bloom, revived with a 200 KLD
          Decentralized Wastewater Treatment System and reborn as a
          community environmental park.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-[13px]">
          <span>GuruJal Research Team</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>9 April 2026</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>Bhokarka · Gurugram · Haryana</span>
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
              A village pond gradually losing its ecological function
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                The pond at Bhokarka village has gradually lost its
                ecological and hydrological functions due to untreated
                domestic wastewater inflow, agricultural runoff, cattle
                activity and continuous dumping of solid waste. Silt
                accumulation, nutrient enrichment and algal growth
                further reduced water quality and storage capacity.
              </p>
              <p>
                The degradation limited the pond&apos;s ability to
                recharge groundwater and serve as a healthy ecological
                space — reducing what was once a centrally positioned
                community asset to a stagnant wastewater sink.
              </p>
              <p>
                GuruJal, together with the Gram Panchayat and the
                residents of Bhokarka, undertook a restoration
                programme built around a decentralised treatment system
                and a community-driven environmental park.
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
  { label: "Type of pond", value: "Natural village pond" },
  { label: "Ownership", value: "Gram Panchayat" },
  { label: "District", value: "Gurugram" },
  { label: "State", value: "Haryana" },
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
              A 1.5-acre natural pond at the heart of Bhokarka
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                The project is located in Bhokarka village, Haryana, at
                28.277031°N latitude and 76.793343°E longitude. The
                pond is a natural village water body of roughly 1.5
                acres, owned by the Gram Panchayat, with a catchment of
                residential and agricultural land feeding it through
                rainwater runoff and domestic wastewater.
              </p>
              <p>
                The pond is centrally positioned within the settlement,
                making it strategically important for groundwater
                recharge and community development — with the entire
                village population counted among its beneficiaries.
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
            Six concerns demanding timely intervention
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            <ul className="space-y-3">
              {[
                "Continuous discharge of untreated grey water into the pond.",
                "Accumulation of silt, sludge and solid waste reducing pond depth.",
                "Eutrophication and algal bloom due to high nutrient load.",
                "Declining groundwater levels in the surrounding area.",
                "Loss of biodiversity and habitat degradation.",
                "Absence of structured community space around the pond.",
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
              Aims & objectives
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              Restore ecological integrity, water quality and utility
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-brand-ink sm:text-base">
              {[
                "Divert and treat wastewater before discharge into the pond.",
                "Desilt and increase effective water holding capacity.",
                "Improve water quality using natural treatment systems.",
                "Develop biodiversity zones using native plant species.",
                "Create a safe and aesthetically improved public space.",
                "Ensure long-term sustainability through community engagement and O&M planning.",
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
 * Technical Interventions — DEWATS treatment train, 7 stages
 * ============================================================ */
const dewatsStages = [
  {
    title: "Wastewater Diversion System",
    body: "Channelization of domestic wastewater to a treatment unit before it reaches the pond.",
  },
  {
    title: "Screening Chamber",
    body: "Removal of floating and coarse solids to prevent clogging further down the treatment train.",
  },
  {
    title: "Settler Tank (Primary Treatment)",
    body: "Reduction of suspended solids and partial BOD removal before biological treatment.",
  },
  {
    title: "Root Zone / Constructed Wetland (Secondary Treatment)",
    body: "Wetland plants and filtration media biologically degrade organic pollutants, reducing BOD, COD, nutrients and odour.",
  },
  {
    title: "Discharge of Treated Water into Pond",
    body: "Polished effluent released into the pond, ensuring compliance with environmental standards.",
  },
  {
    title: "Desilting and Dewatering",
    body: "Removal of accumulated sludge and restoration of the pond's original depth and storage capacity.",
  },
  {
    title: "Embankment Strengthening and Fencing",
    body: "Reinforced embankments and perimeter fencing prevent encroachment and further waste dumping.",
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
            A Decentralized Wastewater Treatment System, built for rural conditions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            The project proposes a <strong>Decentralized Wastewater
            Treatment System (DEWATS)</strong> with a 200 KLD capacity —
            seven components in sequence, cost-effective, environmentally
            sustainable and suited to village-level operation.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:gap-5">
          {dewatsStages.map((s, i) => (
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
 * Ecological Profile
 * ============================================================ */
const nativeFlora = ["Neem", "Bargad", "Keekar", "Peepal"];
const plantedSpecies = [
  "Moringa",
  "Amla",
  "Jamun",
  "Sehtut",
  "Tecoma",
  "Jasmine",
  "Hibiscus",
  "Anarmi",
  "Ficus",
];
const indicatorFauna = [
  "Plain Prinia",
  "Cattle Egret",
  "Rock Pigeon",
  "Common Myna",
  "Pond Heron",
  "Babbler",
  "White-throated Kingfisher",
  "Crow",
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
            A tapestry of native flora and fauna shaped the design
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            A pre-restoration survey catalogued native flora and
            resident fauna at the site — informing the decision to turn
            the open expanse encircling the pond into a working
            environmental park, not just an engineered water body.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Native flora recorded
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              Established trees at the site
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {nativeFlora.map((p) => (
                <li
                  key={p}
                  className="inline-flex rounded-full bg-brand-green/10 px-3 py-1.5 text-sm font-semibold text-brand-green ring-1 ring-brand-green/20"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Structured plantation, proposed
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {plantedSpecies.map((p) => (
                <li
                  key={p}
                  className="inline-flex rounded-full bg-brand-teal/10 px-3 py-1.5 text-sm font-semibold text-brand-teal-dark ring-1 ring-brand-teal/20"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              8 fauna species recorded
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              Indicator birds already resident at the pond
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {indicatorFauna.map((p) => (
                <li
                  key={p}
                  className="inline-flex rounded-full bg-brand-orange/10 px-3 py-1.5 text-sm font-semibold text-brand-orange ring-1 ring-brand-orange/20"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-brand-muted">
              Key measures include introducing aquatic macrophytes for
              water purification, developing green buffer zones,
              controlling invasive aquatic weeds, and creating habitat
              for birds, butterflies and small aquatic organisms —
              enhancing oxygen levels, carbon sequestration and
              micro-climatic conditions around the pond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Work Undertaken — checklist of completed activities
 * ============================================================ */
const workUndertaken = [
  "Baseline survey and water quality testing.",
  "Demarcation of pond boundary.",
  "Partial civil works for wastewater treatment infrastructure.",
  "Planning of landscaping and peripheral development.",
  "Completion of treatment plant installation.",
  "Laying of filter media and wetland plantation.",
  "Full-scale desilting and cleaning operations.",
  "Landscaping, fencing, and installation of public amenities.",
];

function WorkUndertakenSection() {
  return (
    <section id="work" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Work undertaken
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Eight activities, initiated or completed on site
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
 * Community / IEC + EVP
 * ============================================================ */
const iecActivities = [
  {
    title: "IEC Campaigns",
    body: "Information, Education and Communication campaigns on water conservation and waste management for the wider village.",
  },
  {
    title: "Jal Pe Charcha & Health Camp",
    body: "A dedicated water-conversation event paired with a community health camp, tying water quality directly to public health.",
  },
  {
    title: "Amit Sewa Samooh Meeting",
    body: "Engagement session with the local Amit Sewa Samooh — bringing an established community service group into the project.",
  },
  {
    title: "Film Screening & Art Activity",
    body: "A film screening and hands-on art activity with primary school kids — building water awareness from an early age.",
  },
  {
    title: "Monitoring Committee",
    body: "A monitoring committee comprising representatives from all stakeholder groups oversees the water resource management project.",
  },
  {
    title: "Employee Volunteer Program",
    body: "Stakeholder meetings with Panchayat representatives, awareness sessions in village schools, and cleanliness and plantation drives.",
  },
];

function CommunitySection() {
  return (
    <section id="community" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Information, education & communication
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Mobilising Bhokarka around its own pond
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            IEC campaigns and an Employee Volunteer Program ran in
            parallel — from health camps and school film screenings to
            panchayat stakeholder meetings and hands-on plantation
            drives.
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
            Upon completion, the rejuvenated pond will be formally
            inaugurated and handed over to the Gram Panchayat and
            community for long-term maintenance and management.
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
            Treatment capacity, groundwater recharge and biodiversity
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            The restored pond is projected to deliver measurable
            hydrological and ecological benefits — treating wastewater
            at source, replenishing the water table beneath Bhokarka,
            and enhancing biodiversity across the site.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-3">
          {[
            {
              value: "200",
              unit: "KLD",
              label: "Wastewater treated daily",
              body: "The DEWATS system diverts and treats domestic wastewater before it can reach the pond, protecting both the water body and the aquifer.",
              tone: "bg-brand-teal text-white",
            },
            {
              value: "1.5",
              unit: "acres",
              label: "Pond surface restored",
              body: "Full pond area desilted, dewatered and re-engineered — with strengthened embankments and fencing for long-term resilience.",
              tone: "bg-brand-orange text-white",
            },
            {
              value: "12",
              unit: "species",
              label: "Native flora & fauna supported",
              body: "Four native tree species and eight resident bird species recorded at the site, with structured plantation planned to enhance biodiversity further.",
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

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-relaxed text-brand-muted sm:text-base">
          Ground water recharge potential: treated, polished effluent
          feeds the pond rather than polluting it — supporting the
          unsaturated zone above and the unconfined aquifer below, the
          same recharge pathway every GuruJal pond restoration is built
          around.
        </p>
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
          &ldquo;We at GuruJal are committed to avert Day Zero while
          ensuring India&apos;s water security.&rdquo;
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
