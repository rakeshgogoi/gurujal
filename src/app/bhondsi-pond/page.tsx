import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StickyAnchorNav } from "@/components/sticky-anchor-nav";
import { SolutionClosingCta } from "@/components/solution-detail/closing-cta";

export const metadata: Metadata = {
  title: "BSF Bhondsi Pond — From Sewage Hazard to Community Sanctuary — GuruJal",
  description:
    "A 0.5-acre pond and 50 KLD Anaerobic Baffled Reactor wastewater treatment plant inside the 95 BSF campus at Bhondsi, Gurugram — converting a sewage-waterlogged ground into a biodiversity-rich community asset for 116 families.",
};

/* ============================================================
 * Key stat tiles — hero strip
 * ============================================================ */
const keyStats = [
  { value: "0.5", unit: "acres", label: "Pond area with protective buffer" },
  { value: "50", unit: "KLD", label: "ABR wastewater treatment plant" },
  { value: "116", unit: "", label: "Families relieved of waterlogging" },
  { value: "28", unit: "", label: "Native fauna species recorded" },
  { value: "7", unit: "", label: "Native plant species established" },
  { value: "12", unit: "stages", label: "Construction process" },
];

/* ============================================================
 * Sticky section anchor nav
 * ============================================================ */
function BhondsiSectionNav() {
  return (
    <StickyAnchorNav
      sections={[
        { label: "Background", href: "#background" },
        { label: "The Site", href: "#site" },
        { label: "The Need", href: "#need" },
        { label: "Ecology", href: "#ecology" },
        { label: "Interventions", href: "#interventions" },
        { label: "Construction", href: "#construction" },
        { label: "Community", href: "#community" },
        { label: "Impact", href: "#impact" },
      ]}
    />
  );
}

/* ============================================================
 * Hero
 * ============================================================ */
function BhondsiHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2025/06/bhonsi-ba.jpg"
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
          BSF Bhondsi Pond —{" "}
          <span className="text-brand-teal-bright">From Sewage Hazard to Community Sanctuary</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Inside the 95 BSF campus at Bhondsi, a 0.5-acre pond and a 50 KLD
          Anaerobic Baffled Reactor convert chronic sewage waterlogging into
          a thriving community oasis — for 116 families and 28 species of
          local wildlife.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-[13px]">
          <span>GuruJal Research Team</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>95 BSF Campus</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>Bhondsi · Gurugram · Haryana</span>
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
              Restoration challenges in a high-density institutional campus
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                Ponds face restoration challenges across global and Indian
                landscapes. Despite their ecological importance, ponds have
                been steadily deprioritised in urban and institutional
                planning — limited financial resources, institutional
                constraints and unchecked urbanisation have worsened
                their condition, creating both environmental degradation
                and concrete health concerns.
              </p>
              <p>
                The 95 BSF campus at Bhondsi is a working illustration of
                the problem. Across the campus, sewage pooled around a
                manhole, a 50 KLD treatment plant sat defunct, and roughly
                116 families lived with the daily consequences of
                waterlogging.
              </p>
              <p>
                GuruJal&apos;s intervention reframed the site: convert the
                environmental hazard into a community asset. Build a
                resilient pond and a working treatment system, foster
                groundwater recharge, and turn the surrounding ground into
                a recreation sanctuary residents actually want to spend
                time around.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-brand-soft/70">
              <Image
                src="/uploads/2025/06/bhonsi-ba.jpg"
                alt="BSF Bhondsi campus site — pond and surrounding buffer zone"
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
                  Site documentation
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Before and after the pond and ABR treatment intervention
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
  { label: "Site", value: "95 BSF, Bhondsi" },
  { label: "District", value: "Gurugram" },
  { label: "State", value: "Haryana" },
  { label: "Jurisdiction", value: "Municipal Corporation" },
  { label: "Guardianship", value: "Border Security Force" },
  { label: "Coordinates", value: "28.365270°N, 77.056611°E" },
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
              A 0.5-acre pond inside an active BSF campus
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                The project site sits at 28.365270°N latitude and
                77.056611°E longitude, inside the 95 BSF complex at
                Bhondsi, Gurugram. It spans 0.5 acres including a
                protective buffer, falls under Municipal Corporation
                jurisdiction and is under the guardianship of the Border
                Security Force.
              </p>
              <p>
                Working inside an active institutional campus shaped every
                design choice — from the geometry of the embankment to the
                quiet, low-maintenance operation of the treatment plant.
                The brief was to deliver a functional treatment system and
                a community space, without disrupting daily life on
                campus.
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
            Sewage pooling, a defunct plant and 116 families bearing the cost
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            <p>
              The initial site assessment revealed sewage pooling around
              the manhole and a <strong>defunct 50 KLD treatment plant</strong>
              — once intended to handle the campus load, now non-functional.
              Approximately <strong>116 families</strong> bore the daily
              consequences: waterlogging around quarters, mosquito breeding
              and a public-health risk that compounded with every monsoon.
            </p>
            <p>
              The intervention had to do two things at once — convert the
              environmental hazard into a community benefit, and improve
              the visual and aesthetic experience of the campus so that
              residents had a reason to use the restored space.
            </p>
          </div>

          <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Aims & objectives
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              Treat, recharge, transform
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-brand-ink sm:text-base">
              {[
                "Develop a resilient pond and a working treatment system to mitigate chronic sewage waterlogging at the manhole.",
                "Foster sustainable groundwater recharge through treated, polished effluent feeding the restored pond.",
                "Transform the pond and its surrounds into a community engagement and recreation sanctuary for campus families.",
                "Preserve and expand campus biodiversity — recorded 28 fauna species and 7 native plant species at the site.",
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
 * Ecology — native species recorded
 * ============================================================ */
const nativePlants = [
  "Neem",
  "Papdi",
  "Chudail Papdi",
  "Beriya",
  "Desi Keekar",
  "Khejdi",
  "Israil Babool",
];

const indicatorFauna = [
  "Red-wattled Lapwing",
  "Green Bee-eater",
  "Laughing Dove",
  "Indian Grey Hornbill",
];

function EcologySection() {
  return (
    <section id="ecology" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Ecological profile
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            A working biodiversity baseline shaped the design
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            A pre-restoration survey catalogued seven native plant species
            and twenty-eight fauna species at the site — informing the
            decision to transform the surrounding expanse into a working
            environmental park, not just an engineered pond.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              7 native plant species
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              Aravalli-region trees and hardy natives
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {nativePlants.map((p) => (
                <li
                  key={p}
                  className="inline-flex rounded-full bg-brand-green/10 px-3 py-1.5 text-sm font-semibold text-brand-green ring-1 ring-brand-green/20"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              28 fauna species recorded
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              Indicator birds returning to the site
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {indicatorFauna.map((p) => (
                <li
                  key={p}
                  className="inline-flex rounded-full bg-brand-teal/10 px-3 py-1.5 text-sm font-semibold text-brand-teal-dark ring-1 ring-brand-teal/20"
                >
                  {p}
                </li>
              ))}
              <li className="inline-flex rounded-full bg-brand-teal/5 px-3 py-1.5 text-sm font-semibold text-brand-muted ring-1 ring-brand-soft">
                + 24 more
              </li>
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
    title: "Pond Development",
    body: "Full 0.5-acre excavation, embankment construction, slope stabilisation and water-retention preparation — the engineered foundation for the restored pond.",
    tone: "teal",
  },
  {
    step: "02",
    title: "50 KLD ABR WWTP",
    body: "An Anaerobic Baffled Reactor — a nature-based wastewater treatment technology that purifies sewage before release into the pond, replacing the defunct plant on site.",
    tone: "green",
  },
  {
    step: "03",
    title: "Pathways & Fencing",
    body: "Brick-and-red-sand pathways and protective perimeter fencing, designed to minimise concrete use and integrate visually with the campus environment.",
    tone: "orange",
  },
  {
    step: "04",
    title: "Seating & Amenities",
    body: "Community seating, dustbins and lighting — the small details that make the space usable for daily campus life, not just functional infrastructure.",
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
    <section id="interventions" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Technical interventions
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Four core activities — engineered around an ABR treatment core
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            The Anaerobic Baffled Reactor anchors the system. The pond,
            paths, fencing and seating wrap around it — converting a
            single piece of treatment infrastructure into a usable
            community space.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {interventions.map((i) => (
            <li
              key={i.step}
              className="flex flex-col rounded-3xl bg-brand-mist p-7 shadow-sm ring-1 ring-brand-soft/80 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span
                className={`mb-5 inline-flex h-9 items-center self-start rounded-full px-3 text-xs font-bold uppercase tracking-[0.14em] ${toneAccent[i.tone]}`}
              >
                Activity {i.step}
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
 * Construction — 12-stage process
 * ============================================================ */
const stages = [
  {
    title: "Site Demarcation",
    body: "Marking the pond and treatment plant boundary on the campus before excavation begins.",
  },
  {
    title: "Pond Excavation",
    body: "Excavating the 0.5-acre pond to design depth, with controlled spoil management on site.",
  },
  {
    title: "WWTP Excavation",
    body: "Excavating the footprint of the 50 KLD Anaerobic Baffled Reactor adjacent to the pond.",
  },
  {
    title: "PCC for ABR",
    body: "Laying the Plain Cement Concrete foundation that supports the ABR structure.",
  },
  {
    title: "Reinforcement",
    body: "Placing the reinforcement steel for the ABR walls before formwork and casting.",
  },
  {
    title: "ABR Wall Construction",
    body: "Building the baffled reactor walls — each chamber will sequence the anaerobic treatment.",
  },
  {
    title: "ABR Slab Casting",
    body: "Casting the top slab of the ABR — sealing the reactor and enabling planted cover above.",
  },
  {
    title: "Gravel Bed",
    body: "Laying a gravel media bed inside the wetland for plant root anchorage and biofilm growth.",
  },
  {
    title: "Wetland Plantation",
    body: "Planting the constructed-wetland species that polish the effluent before it reaches the pond.",
  },
  {
    title: "Pathway Development",
    body: "Laying the brick-and-red-sand walkways that loop the pond perimeter for community access.",
  },
  {
    title: "Vegetation Plantation",
    body: "Establishing Neem, Jamun, Amla, Jasmine and Hibiscus across the buffer zone.",
  },
  {
    title: "Seat Placement",
    body: "Installing community seating around the pond — the last step that turns the asset into a space.",
  },
];

function ConstructionSection() {
  return (
    <section id="construction" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Construction journey
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Twelve stages, from demarcation to community seating
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            The construction sequence runs ABR-first — foundation, walls,
            slab, wetland — and then wraps the pond perimeter with paths,
            plantation and seating to deliver a usable community space.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-5">
          {stages.map((s, i) => (
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

        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-3xl bg-brand-deep">
          <div className="grid sm:grid-cols-2">
            <div className="relative aspect-[4/3]">
              <Image
                src="/uploads/2025/06/bhonsi-ba.jpg"
                alt="Before — sewage-waterlogged ground with defunct infrastructure"
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
                alt="After — thriving community oasis with functional treatment system"
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
            From sewage-waterlogged ground with a defunct plant — to a
            thriving community oasis with a working ABR treatment system.
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
    title: "Jawan Education Sessions",
    body: "Targeted sessions for BSF jawans on water and wastewater management — operators and stewards of the new system, not just bystanders.",
  },
  {
    title: "Rainwater Harvesting Workshops",
    body: "Building practical knowledge on rainwater harvesting and solid-waste management within the campus community.",
  },
  {
    title: "Groundwater Awareness",
    body: "Underscoring the effects of groundwater depletion — connecting daily campus water use to the larger Bhondsi aquifer story.",
  },
  {
    title: "Brookfield EVP Partnership",
    body: "Brookfield Properties' Employee Voluntary Program supported tree planting and campus beautification — a corporate-community bridge.",
  },
  {
    title: "Tree Planting Drives",
    body: "Hands-on plantation by jawans and volunteers, establishing the buffer-zone canopy of Neem, Jamun and Amla.",
  },
  {
    title: "Environmental Stewardship",
    body: "Reframing the pond not as a treatment installation but as a shared campus sanctuary — to be cared for collectively.",
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
            Building stewardship inside the campus
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            IEC activities centred on the jawans and the families on
            campus — partnering with Brookfield Properties&apos; Employee
            Voluntary Program to plant trees and reframe the restored
            pond as a shared sanctuary.
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
 * Impact
 * ============================================================ */
function ImpactSection() {
  return (
    <section id="impact" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Potential impact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            From wasteland to nature sanctuary and community asset
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            The restoration is projected to deliver measurable
            ecological, hydrological and community benefits — converting
            a degraded campus wasteland into a working sanctuary.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-3">
          {[
            {
              value: "50",
              unit: "KLD",
              label: "Sewage treated daily",
              body: "Anaerobic Baffled Reactor replaces the defunct plant — purifying campus sewage before it reaches the pond and the aquifer.",
              tone: "bg-brand-teal text-white",
            },
            {
              value: "116",
              unit: "families",
              label: "Relief from waterlogging",
              body: "The pond and ABR resolve the chronic sewage pooling that affected daily life around 116 households on the BSF campus.",
              tone: "bg-brand-orange text-white",
            },
            {
              value: "28",
              unit: "species",
              label: "Biodiversity supported",
              body: "Twenty-eight fauna species documented at the site — including Red-wattled Lapwing, Green Bee-eater, Laughing Dove and Indian Grey Hornbill.",
              tone: "bg-brand-green text-white",
            },
          ].map((s) => (
            <li
              key={s.label}
              className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-brand-soft/70"
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
export default function BhondsiPondPage() {
  return (
    <>
      <BhondsiHero />
      <BhondsiSectionNav />
      <BackgroundSection />
      <SiteSection />
      <NeedSection />
      <EcologySection />
      <InterventionsSection />
      <ConstructionSection />
      <CommunitySection />
      <ImpactSection />
      <SolutionClosingCta
        eyebrow="Help us restore the next pond"
        heading={<>Every pond restored is a community made water secure</>}
        body={
          <>
            Support GuruJal&apos;s mission to make India water neutral —
            one campus, one village, one pond at a time.
          </>
        }
        primaryCta={{ label: "Support a Pond", href: "/support-a-pond" }}
        secondaryCta={{ label: "Water Proofing", href: "/water-proofing" }}
      />
    </>
  );
}
