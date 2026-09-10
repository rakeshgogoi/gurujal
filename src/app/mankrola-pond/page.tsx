import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StickyAnchorNav } from "@/components/sticky-anchor-nav";
import { SolutionClosingCta } from "@/components/solution-detail/closing-cta";
import { BeforeAfter } from "@/components/pond/before-after";
import { KeyStatsStrip } from "@/components/pond/key-stats-strip";

export const metadata: Metadata = {
  title: "Mankrola Pond — A Freshwater Pond, Naturally Treated — GuruJal",
  description:
    "A 2.5-acre freshwater pond near Shiv Mandir in Mankrola village, Gurugram, rejuvenated with an in-situ Floating Treatment Wetland — funded by Max Healthcare's CER programme and implemented by Abhipsa Foundation.",
};

/* ============================================================
 * Key stat tiles — hero strip
 * ============================================================ */
const keyStats = [
  { value: "2.5", unit: "acres", label: "Pond area rejuvenated" },
  { value: "35.41", unit: "ML", label: "Peak holding capacity" },
  { value: "270+", unit: "", label: "Trees planted around the pond" },
  { value: "3,600", unit: "", label: "Residents & floating population served" },
  { value: "₹36.79L", unit: "", label: "CER investment, Max Healthcare" },
  { value: "Jul 2025", unit: "", label: "Project completed" },
];

/* ============================================================
 * Sticky section anchor nav
 * ============================================================ */
function MankrolaSectionNav() {
  return (
    <StickyAnchorNav
      sections={[
        { label: "Background", href: "#background" },
        { label: "The Site", href: "#site" },
        { label: "The Need", href: "#need" },
        { label: "Interventions", href: "#interventions" },
        { label: "Ecology", href: "#ecology" },
        { label: "Before & After", href: "#before-after" },
        { label: "Impact", href: "#impact" },
      ]}
    />
  );
}

/* ============================================================
 * Hero
 * ============================================================ */
function MankrolaHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2026/09/mankrola-pond-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Mobile / tablet: top-to-bottom gradient. */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/85 via-brand-deep/45 to-brand-deep/85 lg:hidden" />
        {/* Desktop: gradient anchored to the left text column. */}
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

        <span className="mt-6 flex w-fit rounded-full bg-brand-orange/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange ring-1 ring-brand-orange/40">
          Pond restoration story
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Mankrola Pond —{" "}
          <span className="text-brand-teal-bright">A Freshwater Pond, Naturally Treated</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          A 2.5-acre village pond near Shiv Mandir in Mankrola,
          rejuvenated with an in-situ Floating Treatment Wetland — no
          heavy machinery, no energy-intensive plant, just aquatic
          plants, fish and phytoremediation doing the work.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-[13px]">
          <span>GuruJal · Abhipsa Foundation</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>Completed July 2025</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>Mankrola · Gurugram · Haryana</span>
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
              A CER-funded rejuvenation, delivered by a grassroots partner
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                As a responsible healthcare provider, Max Healthcare
                Institute Limited places strong emphasis on the
                sustainable and judicious use of natural resources.
                Under its CER commitment — and with Abhipsa Foundation
                as implementing partner — Max Healthcare has undertaken
                mass tree plantation drives and the rejuvenation of
                water bodies through nature-based treatment systems.
              </p>
              <p>
                Under this programme, the Mankrola village pond near
                Shiv Mandir was successfully rejuvenated. All necessary
                approvals were obtained from the concerned departments
                prior to execution, and the completed pond has been
                acknowledged by the Gram Panchayat and the BDPO.
              </p>
              <p>
                Abhipsa Foundation, founded in 2015, works towards a
                sustainable environment through grassroots activities,
                policy advocacy, mass awareness, community action and
                field demonstrations — with GuruJal as its integrated
                water-management initiative.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-brand-soft/70">
              <Image
                src="/uploads/2026/09/mankrola-ftw-rafts.jpg"
                alt="Floating treatment wetland rafts on Mankrola Pond, planted with phytoremediation species"
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
                  In-situ treatment
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Floating treatment wetlands seeded with phytoremediation plants
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
  { label: "Village", value: "Mankrola" },
  { label: "Pond type", value: "Natural freshwater pond" },
  { label: "Area", value: "2.5 acres" },
  { label: "District", value: "Gurugram" },
  { label: "State", value: "Haryana" },
  { label: "Coordinates", value: "28.509025°N, 76.902227°E" },
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
              A 2.5-acre freshwater pond near Shiv Mandir
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                The project rejuvenated the Mankrola freshwater village
                pond near Shiv Mandir in Mankrola, Gurugram District,
                Haryana — a natural water body of 2.5 acres. Abhipsa
                Foundation was the execution agency, with a design
                period running from April 2025 to July 2025.
              </p>
              <p>
                The restored pond holds a peak capacity of roughly
                35,410 m³ — about 35.41 ML — and benefits an estimated
                2,600 village residents plus a further 1,000 floating
                population that passes through the area.
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
 * The Need
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
            Conventional treatment is priced out of the village
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            <ul className="space-y-3">
              {[
                "The installation and operating costs of existing wastewater treatment technologies are high — and hence ill-afforded by communities.",
                "The available technologies are often complex, requiring heavy machinery that is capital-intensive to build and energy-intensive to run.",
                "A large gap between sewage generation and installed treatment capacity means large volumes of wastewater keep discharging into natural water courses, polluting water reservoirs.",
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

          <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              The approach
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              Rejuvenate the water body through a natural treatment system
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-brand-ink sm:text-base">
              To mitigate the impact of wastewater on groundwater,
              GuruJal proposed to rejuvenate the Mankrola village pond
              near Shiv Mandir using an in-situ natural treatment
              system — an approach aligned with the government
              initiative to revive water bodies through nature-based
              treatment rather than energy-intensive plants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Interventions — the in-situ treatment scheme
 * ============================================================ */
const treatmentComponents = [
  {
    title: "Floating Treatment Wetland (FTW)",
    body: "Planted rafts float on the pond surface, their roots hanging directly into the water column to filter and absorb pollutants in situ — no tank, no pumping.",
  },
  {
    title: "Phytoremediation plants",
    body: "Aquatic macrophytes on the rafts take up nitrogen, phosphorus and organic load, steadily improving the pond's water quality as they grow.",
  },
  {
    title: "Fish",
    body: "Fish stocked into the pond graze algae and organic matter, supporting the wetland's treatment action and the pond's ecological balance.",
  },
  {
    title: "Stormwater screening",
    body: "Screening at the stormwater drainage inlet keeps solid waste and debris out of the pond before it can settle or pollute.",
  },
  {
    title: "Solid-waste O&M",
    body: "An ongoing operation-and-maintenance routine for solid-waste management around the pond keeps the catchment clean and the treatment effective.",
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
            An in-situ treatment system, built into the pond itself
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            The scheme combines a Floating Treatment Wetland using
            phytoremediation-based aquatic plants, fish, screening of
            the stormwater drainage, and a solid-waste O&amp;M routine —
            improving water quality where the water sits, without a
            built plant.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl bg-white ring-1 ring-brand-soft/70">
          <div className="relative aspect-[16/9]">
            <Image
              src="/uploads/2026/09/mankrola-treatment-scheme.jpg"
              alt="Treatment scheme: screening of stormwater drainage, floating wetland treatment with phytoremediation plants, and O&M for solid waste management"
              fill
              sizes="(min-width: 1024px) 56rem, 100vw"
              className="object-contain bg-white"
            />
          </div>
          <p className="border-t border-brand-soft/70 px-6 py-4 text-center text-sm font-medium text-brand-muted">
            Table&nbsp;1 treatment scheme — screening, floating wetland
            treatment, and solid-waste O&amp;M.
          </p>
        </div>

        <ol className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:gap-5">
          {treatmentComponents.map((s, i) => (
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

        <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-relaxed text-brand-muted sm:text-base">
          Water quality is tracked against a full set of design
          influent parameters — pH, dissolved oxygen, BOD, COD, TDS,
          alkalinity, nitrogen, ammoniacal nitrogen, phosphate,
          organic phosphorus, salinity and TSS.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
 * Ecology & wider benefits
 * ============================================================ */
const keyBenefits = [
  "Treatment of pond water",
  "Water quality management",
  "Landscape development",
  "Carbon sequestration",
  "Stormwater management",
  "Community development",
  "Solid waste management",
  "Groundwater recharge",
  "Groundwater level monitoring",
  "Biodiversity conservation",
];

function EcologySection() {
  return (
    <section id="ecology" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Ecology & landscape
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              270+ trees, and a monitored micro-climate
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                More than <strong>270 trees</strong> were planted around
                the pond. As they establish, they will improve the
                micro-climate of the area — cooling the surroundings,
                cutting dust, and anchoring the soil along the
                pond&apos;s edge.
              </p>
              <p>
                Groundwater levels near the pond are monitored so the
                recharge benefit of the rejuvenated water body can be
                tracked over time, alongside biodiversity conservation
                across the restored landscape.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
                Key benefits
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {keyBenefits.map((b) => (
                  <li
                    key={b}
                    className="inline-flex rounded-full bg-brand-green/10 px-3 py-1.5 text-sm font-semibold text-brand-green ring-1 ring-brand-green/20"
                  >
                    {b}
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
 * Before / After
 * ============================================================ */
function BeforeAfterSection() {
  return (
    <section id="before-after" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Before and after
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            From dumping-ground edges to a landscaped waterfront
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl bg-brand-deep">
          <BeforeAfter
            className="aspect-[4/3] sm:aspect-[16/10]"
            beforeSrc="/uploads/2026/09/mankrola-pond-before.jpg"
            beforeAlt="Aerial view of Mankrola Pond before interventions, 27 January 2025 — bare, dusty edges and murky water"
            afterSrc="/uploads/2026/09/mankrola-pond-after.jpg"
            afterAlt="Aerial view of Mankrola Pond after interventions, 23 September 2025 — landscaped waterfront with seating and floating wetlands"
          />
          <div className="px-6 py-5 text-center text-sm font-medium text-white/80 sm:text-base">
            Drag the slider to compare — aerial views from 27 January
            2025 (before) and 23 September 2025 (after).
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Impact
 * ============================================================ */
const impactCards = [
  {
    label: "Wastewater treated naturally",
    body: "The pond's own wetland treats village wastewater in situ, improving water quality so it can be used for fisheries and irrigation.",
    tone: "bg-brand-teal text-white",
  },
  {
    label: "Water conserved & recharged",
    body: "Treated water percolates naturally into the ground, conserving water and recharging the aquifer beneath Mankrola.",
    tone: "bg-brand-orange text-white",
  },
  {
    label: "Better area water quality",
    body: "Natural percolation of the treated water improves groundwater quality across the surrounding area over time.",
    tone: "bg-brand-green text-white",
  },
  {
    label: "Public health",
    body: "The rejuvenated pond mitigates waterlogging in the village and cuts down mosquito breeding around the settlement.",
    tone: "bg-brand-teal text-white",
  },
];

function ImpactSection() {
  return (
    <section id="impact" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Impact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            What the rejuvenation delivers for Mankrola
          </h2>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2">
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
 * Funded by
 * ============================================================ */
function FundedBySection() {
  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
          Funded &amp; delivered by
        </p>
        <div className="mx-auto mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-lg font-bold text-brand-ink sm:text-xl">
          <span>Max Healthcare Institute Limited</span>
          <span aria-hidden className="hidden h-1.5 w-1.5 rounded-full bg-brand-soft sm:inline-block" />
          <span>Abhipsa Foundation</span>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-brand-muted sm:text-base">
          Funded under Max Healthcare&apos;s Corporate Environmental
          Responsibility programme and implemented by Abhipsa
          Foundation, with a total project cost of ₹36,78,833.65.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
 * Page
 * ============================================================ */
export default function MankrolaPondPage() {
  return (
    <>
      <MankrolaHero />
      <KeyStatsStrip stats={keyStats} />
      <MankrolaSectionNav />
      <BackgroundSection />
      <SiteSection />
      <NeedSection />
      <InterventionsSection />
      <EcologySection />
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
