import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StickyAnchorNav } from "@/components/sticky-anchor-nav";
import { SolutionClosingCta } from "@/components/solution-detail/closing-cta";
import { BeforeAfter } from "@/components/pond/before-after";
import { KeyStatsStrip } from "@/components/pond/key-stats-strip";

export const metadata: Metadata = {
  title: "Green Belt, Rajiv Chowk — Eco Restoration Case Study — GuruJal",
  description:
    "A 0.49-acre traffic island at Rajiv Chowk, Sector 32, Gurugram — reclaimed from a dumping ground and turned into a landscaped green belt with 1,619 trees, a walking path and a community mural, in partnership with Pearl Global Industries and GMDA.",
};

/* ============================================================
 * Key stat tiles — hero strip
 * ============================================================ */
const keyStats = [
  { value: "0.49", unit: "acres", label: "Traffic island reclaimed" },
  { value: "1,619", unit: "", label: "Trees planted" },
  { value: "245", unit: "", label: "Shrubs planted" },
  { value: "88", unit: "species", label: "Pre-existing flora recorded" },
  { value: "2", unit: "yrs", label: "O&M handover period" },
  { value: "27 Mar 2024", unit: "", label: "Inaugurated" },
];

/* ============================================================
 * Sticky section anchor nav
 * ============================================================ */
function GreenBeltSectionNav() {
  return (
    <StickyAnchorNav
      sections={[
        { label: "Background", href: "#background" },
        { label: "The Site", href: "#site" },
        { label: "The Need", href: "#need" },
        { label: "Intervention", href: "#intervention" },
        { label: "Plantation", href: "#plantation" },
        { label: "Before & After", href: "#before-after" },
        { label: "Community", href: "#community" },
        { label: "Impact", href: "#impact" },
      ]}
    />
  );
}

/* ============================================================
 * Hero — same backdrop as the Eco Restoration solution page.
 * ============================================================ */
function GreenBeltHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2024/08/eco-res.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/85 via-brand-deep/45 to-brand-deep/85 lg:hidden" />
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
          href="/eco-restoration"
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
          Eco Restoration
        </Link>

        <span className="mt-6 flex w-fit rounded-full bg-brand-orange/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-orange ring-1 ring-brand-orange/40">
          Eco restoration case study
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Reclaiming a Roadside —{" "}
          <span className="text-brand-teal-bright">The Green Belt at Rajiv Chowk</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          A 0.49-acre triangular traffic island near Shivaji Nagar, once a
          dumping ground on a busy Gurugram highway, rebuilt into a
          landscaped green belt with 1,619 trees, a walking path and a
          community mural — one traffic island at a time.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65 sm:text-[13px]">
          <span>GuruJal, supported by Pearl Global Industries Limited</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>Inaugurated 27 March 2024</span>
          <span aria-hidden className="hidden h-1 w-1 rounded-full bg-white/40 sm:inline-block" />
          <span>Sector 32 · Gurugram · Haryana</span>
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
              A city growing faster than its green cover
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                Gurugram is one of India&apos;s fastest-growing urban
                agglomerations — a city of glass towers, highways and
                multinational headquarters expanding at a pace that
                leaves little room for its natural landscape. Forest and
                green cover in Haryana already sits at just{" "}
                <strong>3.6%</strong> of the state&apos;s geographical
                area, far below the prescribed norm of{" "}
                <strong>33%</strong>. As Gurugram&apos;s paved area
                grows, its green cover shrinks in step, driving up
                pollution, water-logging and heat stress across the
                city.
              </p>
              <p>
                It was against this backdrop that GuruJal, an
                integrated water management initiative of the Abhipsa
                Foundation, partnered with Pearl Global Industries
                Limited under its CSR programme to take on a
                triangular, 0.49-acre traffic island at Rajiv Chowk,
                near Shivaji Nagar in Sector 32 — and turn it from a
                neglected roadside patch into a functioning green belt
                for the city.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl ring-1 ring-brand-soft/70">
              <Image
                src="/uploads/2026/09/greenbelt-before-ground.jpg"
                alt="The Rajiv Chowk traffic island before restoration — used as a dumping ground"
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
                  Ground documentation, January 2024
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Solid waste and invasive weeds around the water tank base
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
  { label: "Location", value: "Rajiv Chowk, Sector 32" },
  { label: "Site type", value: "Triangular traffic island" },
  { label: "Area", value: "0.49 acres" },
  { label: "Jurisdiction", value: "GMDA" },
  { label: "CSR partner", value: "Pearl Global Industries Ltd." },
  { label: "Coordinates", value: "28.445725°N, 77.036228°E" },
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
              A green belt on paper, a dumping ground in practice
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                The site sits at a busy intersection along the National
                Highway near Rajiv Chowk, within the jurisdiction of
                the Gurugram Metropolitan Development Authority (GMDA).
                It had originally been designated a green belt,
                intended for biodiversity conservation and a cleaner
                streetscape.
              </p>
              <p>
                In practice, it had become the opposite. The area was
                used as a dumping ground for solid waste, the transient
                community living in makeshift shelters nearby
                contributed to open defecation, and the terrain itself
                was undulating and choked with invasive weeds growing
                alongside the few native trees that remained. An
                ecological profiling exercise conducted before work
                began recorded <strong>37 trees</strong>,{" "}
                <strong>21 shrub varieties</strong> and{" "}
                <strong>30 species</strong> of herbs, grasses and
                climbers on site, alongside a handful of butterfly and
                bird species — a fragile ecosystem hanging on despite
                the neglect around it.
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
const whyGreenBelts = [
  "Mitigate traffic-induced air and noise pollution along the corridor.",
  "Moderate local temperature and humidity around a paved, high-heat junction.",
  "Absorb particulates and vehicular gases from a busy National Highway stretch.",
  "Act as green lungs and rest points within dense urban infrastructure.",
  "Reclaim a public space that had fallen into misuse, for residents and commuters to take pride in.",
];

function NeedSection() {
  return (
    <section id="need" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            The need
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Not a cosmetic fix — a genuine environmental intervention
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Green belts along traffic corridors do more than beautify
            a city. For Gurugram — grappling with rising pollution,
            heat-island formation and shrinking open space — a
            well-designed green belt at a high-traffic junction like
            Rajiv Chowk mattered on several fronts at once.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {whyGreenBelts.map((b) => (
            <li
              key={b}
              className="flex gap-3 rounded-2xl bg-brand-mist p-5 text-sm leading-relaxed text-brand-ink ring-1 ring-brand-soft/70 sm:text-base"
            >
              <span
                aria-hidden
                className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
 * Intervention — the six-part build-out
 * ============================================================ */
const interventionSteps = [
  {
    title: "Site preparation",
    body: "Clearing invasive growth, levelling the undulating terrain, and preparing the base for footpaths — after first cleaning, grubbing and backfilling soil around the culverts running through the plot.",
  },
  {
    title: "Circulation and structure",
    body: "A stabilised footpath network, fencing around the perimeter, and a formal entrance gate replacing the informal, encroached access point.",
  },
  {
    title: "Softscape",
    body: "Mulching and soil preparation for plantation, followed by planting of trees, shrubs and hedges, and installation of green netting.",
  },
  {
    title: "Amenities",
    body: "Seating, dustbins, guiding signage and street lighting for the surrounding community and commuters.",
  },
  {
    title: "Civil and utility works",
    body: "Brickwork for garden beds, plastering of the adjoining boundary wall, HDD (horizontal directional drilling) work for a new water connection, and a water storage tank.",
  },
  {
    title: "Placemaking",
    body: "A brick sculpture base at the centre of the site, crowned with a sculpture jointly branded by GMDA and Pearl Global, plus an on-site branding board acknowledging all project partners.",
  },
];

function InterventionSection() {
  return (
    <section id="intervention" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Intervention
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            A full landscape build-out, six parts in sequence
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Work on the ground began with the basics — cleaning,
            grubbing and levelling a site that had been treated as a
            dumping ground for years — then moved through a complete
            landscape build-out.
          </p>
        </div>

        <ol className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-2 lg:gap-5">
          {interventionSteps.map((s, i) => (
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
          Getting this built required as much coordination as
          construction. As the site fell under GMDA&apos;s
          jurisdiction, GuruJal secured a formal MoU with GMDA (signed
          10 November 2023) after site verification with the local
          Patwari, followed by No Objection Certificates from
          GMDA&apos;s Environment and Sustainability wing. Ongoing
          coordination with the National Highways Authority of India,
          the Municipal Corporation of Gurugram, and Dakshin Haryana
          Bijli Vitran Nigam kept utility and infrastructure work —
          water and electricity connections in particular — moving
          alongside the landscaping.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
 * Plantation & Biodiversity
 * ============================================================ */
const areaBreakdown = [
  { label: "Grass / turf area", value: "1,130 sq.m." },
  { label: "Flower bed area", value: "80 sq.m." },
  { label: "Hedge area", value: "40 sq.m." },
];
const treesPlanted = [
  "Ficus reginald — 100",
  "Ficus benjamina — 50",
  "Harsingar — 10",
  "Sita Ashok — 1",
];
const shrubsPlanted = [
  "Koochia — 100",
  "Ficus starlight — 50",
  "Euphorbia milli — 30",
  "Murraya dwarf — 30",
  "Hibiscus — 10",
  "Shami — 10",
  "Morpankhi — 8",
  "Bougainvillea — 3",
];
const retainedSpecies = [
  "Common Grass Yellow",
  "Small Grass Yellow",
  "Plain Tiger",
  "Rock Pigeon",
];

function PlantationSection() {
  return (
    <section id="plantation" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Plantation & biodiversity richness
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            1,619 trees and 245 shrubs, planted by species and zone
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            The planting plan was built around native and hardy
            ornamental species suited to the site&apos;s roadside
            conditions, distributed across distinct zones. By the time
            of inauguration, the green belt carried over 200 trees and
            500 flowering plants, alongside the hedge lines, grass turf
            and ornamental beds that now frame the pathways.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
          {areaBreakdown.map((a) => (
            <div
              key={a.label}
              className="rounded-2xl bg-brand-mist p-6 text-center ring-1 ring-brand-soft/70"
            >
              <div className="text-2xl font-extrabold tracking-tight text-brand-ink sm:text-3xl">
                {a.value}
              </div>
              <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-brand-muted">
                {a.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              1,619 trees planted
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              By species
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {treesPlanted.map((p) => (
                <li
                  key={p}
                  className="inline-flex rounded-full bg-brand-green/10 px-3 py-1.5 text-sm font-semibold text-brand-green ring-1 ring-brand-green/20"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-brand-muted">
              Remaining count made up of grass-turfing and hedge-line
              plantings across the site.
            </p>
          </div>

          <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              245 shrubs planted
            </p>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink">
              By species
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {shrubsPlanted.map((p) => (
                <li
                  key={p}
                  className="inline-flex rounded-full bg-brand-teal/10 px-3 py-1.5 text-sm font-semibold text-brand-teal-dark ring-1 ring-brand-teal/20"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-3xl bg-brand-deep p-7 text-center sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal-bright">
            Habitat retained
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            Combined with the pre-existing native tree cover, the site
            retains habitat value for species already recorded there —
            adding the density and variety needed to genuinely function
            as an urban green lung rather than just a landscaped
            traffic island.
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-2">
            {retainedSpecies.map((s) => (
              <li
                key={s}
                className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-white ring-1 ring-white/20"
              >
                {s}
              </li>
            ))}
          </ul>
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
            From garbage-strewn patch to landscaped green triangle
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl bg-brand-deep">
          <BeforeAfter
            className="aspect-[4/3] sm:aspect-[16/10]"
            beforeSrc="/uploads/2026/09/greenbelt-before-aerial.jpg"
            beforeAlt="The Rajiv Chowk traffic island before restoration — an aerial view of the garbage-strewn, undulating plot"
            afterSrc="/uploads/2026/09/greenbelt-after-aerial.jpg"
            afterAlt="The Rajiv Chowk traffic island after restoration — an aerial view of the landscaped green belt with pathways"
          />
          <div className="px-6 py-5 text-center text-sm font-medium text-white/80 sm:text-base">
            Drag the slider to compare — from a garbage-strewn,
            undulating patch of land to a maintained green triangle
            with a walking path, seating and lighting.
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-3">
          {[
            {
              src: "/uploads/2026/09/greenbelt-pathway.jpg",
              alt: "Ground view of the central pathway through the green belt, lined with flowering plants",
              caption: "Ground view of the central pathway",
            },
            {
              src: "/uploads/2026/09/greenbelt-sculpture.jpg",
              alt: "A sculpture of two hands cradling a sapling, jointly branded by GMDA and Pearl Global, at the centre of the site",
              caption: "The GMDA × Pearl Global sculpture",
            },
            {
              src: "/uploads/2026/09/greenbelt-garden.jpg",
              alt: "Aerial view of the landscaped garden with circular hedge beds, a walking path and seating",
              caption: "The landscaped garden, from above",
            },
          ].map((p) => (
            <div
              key={p.src}
              className="overflow-hidden rounded-2xl ring-1 ring-brand-soft/70"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="bg-white px-4 py-3 text-sm font-medium text-brand-ink">
                {p.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Community
 * ============================================================ */
function CommunitySection() {
  return (
    <section id="community" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Community & outreach
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            A boundary wall turned into a mural, and a chowk turned into a gathering point
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl ring-1 ring-brand-soft/70">
            <div className="relative aspect-[4/3]">
              <Image
                src="/uploads/2026/09/greenbelt-mural.jpg"
                alt="Community mural painted on the boundary wall of the green belt, depicting water conservation themes"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            <p>
              The project carried a strong community and outreach
              component alongside the construction. A{" "}
              <strong>painting drive on 22 March 2024</strong>, timed
              to coincide with World Water Day, brought together local
              volunteers and the Pearl Global and GuruJal teams to turn
              the boundary wall into a mural.
            </p>
            <p>
              In-depth interviews with vendors, migrant labourers and
              the local Banjara community were conducted to understand
              how the space was actually being used, and by whom.
            </p>
            <p>
              The completed green belt was formally inaugurated on{" "}
              <strong>27 March 2024</strong>, with GMDA&apos;s
              Additional CEO, Pearl Global&apos;s leadership, and
              GuruJal&apos;s trustees and CEO in attendance.
            </p>
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
    label: "Pollution mitigation",
    body: "The plant cover along this high-traffic stretch of highway helps absorb vehicular pollutants and dampen noise from the road.",
    tone: "bg-brand-teal text-white",
  },
  {
    label: "Water & heat management",
    body: "The green cover supports rainwater catchment for groundwater recharge and helps moderate the surrounding temperature, pushing back against the urban heat-island effect.",
    tone: "bg-brand-orange text-white",
  },
  {
    label: "Biodiversity support",
    body: "The plant palette leans heavily on native species, reinforcing the local ecosystem rather than replacing it.",
    tone: "bg-brand-green text-white",
  },
  {
    label: "Public space reclaimed",
    body: "A stretch of road that had been a dumping ground and site of open defecation is now a fenced, lit and maintained green space with seating and a paved walking trail.",
    tone: "bg-brand-teal text-white",
  },
  {
    label: "A replicable governance model",
    body: "An MoU-driven partnership between a CSR funder (Pearl Global), an implementation partner (GuruJal/Abhipsa Foundation) and the civic authority (GMDA) — followed by a structured two-year O&M handover — offers a template for other neglected traffic islands across Gurugram.",
    tone: "bg-brand-orange text-white",
  },
];

function ImpactSection() {
  return (
    <section id="impact" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Impact
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Designed to work on several levels at once
          </h2>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {impactCards.map((s) => (
            <li
              key={s.label}
              className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-brand-soft/70"
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
            What began as a garbage-strewn, undulating patch of land at
            a busy chowk is now a maintained green triangle with over
            1,600 trees, a walking path, seating, lighting, and a
            functioning identity of its own — a small-scale but
            concrete answer to the question of how a rapidly
            urbanising city holds on to its green cover.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Page
 * ============================================================ */
export default function GreenBeltRajivChowkPage() {
  return (
    <>
      <GreenBeltHero />
      <KeyStatsStrip stats={keyStats} />
      <GreenBeltSectionNav />
      <BackgroundSection />
      <SiteSection />
      <NeedSection />
      <InterventionSection />
      <PlantationSection />
      <BeforeAfterSection />
      <CommunitySection />
      <ImpactSection />
      <SolutionClosingCta
        eyebrow="Restore a landscape with us"
        heading={<>Bring eco restoration to your geography</>}
        body={
          <>
            We partner with governments, CSR teams and landowners to
            design and deliver restoration projects — from a single
            traffic island to a 3,000-hectare landscape.
          </>
        }
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "Back to Eco Restoration", href: "/eco-restoration" }}
      />
    </>
  );
}
