import type { Metadata } from "next";
import Link from "next/link";
import { EventDetailHero } from "@/components/event-detail/hero";
import { EventOverview } from "@/components/event-detail/overview";
import { EventInsights } from "@/components/event-detail/insights";
import { EventGallery } from "@/components/event-detail/gallery";
import { EventSpeakers } from "@/components/event-detail/speakers";
import { EventClosingCta } from "@/components/event-detail/closing-cta";

export const metadata: Metadata = {
  title:
    "Roots & Recharge Symposium — Reviving Heritage Water Systems",
  description:
    "Multistakeholder dialogue on reviving traditional water wisdom for groundwater resilience — held at Juniper Hall, India Habitat Centre on 9 December 2025.",
};

/* ============================================================
 * Inline blocks unique to this page (data, pilots, knowledge,
 * voices, media coverage) — small enough that they live next to
 * the page rather than as shared event-detail components.
 * ============================================================ */

function DugWellsData() {
  const tiles = [
    { value: "424", label: "Wells Mapped" },
    { value: "330+", label: "Inactive" },
    { value: "3%", label: "RWH-Connected" },
    { value: "200+", label: "Villages" },
  ];

  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Learning from the ground
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Gurugram&apos;s Dug Wells: Data & Discovery
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            At the heart of the symposium were findings from GuruJal&apos;s
            district-wide dug-well inventorisation — covering{" "}
            <strong>424 dug wells</strong> across more than{" "}
            <strong>200 villages</strong> in Gurugram district. The data
            revealed both neglect and opportunity.
          </p>

          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {tiles.map((t) => (
              <li
                key={t.label}
                className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-brand-soft/80"
              >
                <div className="text-3xl font-bold tracking-tight text-brand-primary sm:text-4xl">
                  {t.value}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-muted sm:text-xs">
                  {t.label}
                </div>
              </li>
            ))}
          </ul>

          <ul className="mt-10 space-y-4">
            {[
              {
                title: "Over 330 Wells Found Inactive",
                body: "More than 330 of the 424 mapped wells were found inactive — abandoned, filled with waste, or facing contamination risks.",
              },
              {
                title: "Only 3% Connected to Rainwater Harvesting",
                body: "Just 3% of mapped wells were connected to rainwater harvesting systems — a critical missed opportunity.",
              },
              {
                title: "Significant Untapped Potential",
                body: "Revived wells can function as community-centric recharge assets within district-level groundwater planning frameworks.",
              },
            ].map((f) => (
              <li
                key={f.title}
                className="rounded-2xl bg-white p-5 ring-1 ring-brand-soft/80"
              >
                <h3 className="text-base font-semibold text-brand-ink sm:text-lg">
                  {f.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                  {f.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function RevivalPilots() {
  const pilots = [
    {
      no: "Pilot 01",
      location: "Daulatabad, Gurugram",
      title: "Technical Restoration & Rainwater Integration",
      body: "Abandoned wells were technically restored and connected to rooftop rainwater harvesting systems, enabling rainwater to return directly to the aquifer.",
      tag: "Rooftop rainwater harvesting connected directly to aquifer recharge — a replicable model.",
    },
    {
      no: "Pilot 02",
      location: "Khandewla, Gurugram",
      title: "Engineering + Cultural Revival: Kuan Poojan Ceremony",
      body: "The reintroduction of a Kuan Poojan ceremony — absent for decades — transformed the well into a shared social space, reinforcing community ownership.",
      tag: "Cultural ceremonies reinstated alongside technical restoration build lasting community ownership.",
    },
  ];

  return (
    <section id="pilots" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            From diagnosis to demonstration
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Revival Pilots in Action
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            Two revival pilots in Daulatabad and Khandewla demonstrated
            what is possible when ecological restoration is paired with
            community ownership.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {pilots.map((p) => (
            <li
              key={p.no}
              className="flex flex-col rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange-dark">
                {p.no} · {p.location}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-brand-ink sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
                {p.body}
              </p>
              <p className="mt-4 rounded-xl bg-white p-4 text-sm font-medium leading-snug text-brand-ink ring-1 ring-brand-soft/70">
                {p.tag}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function KnowledgeOutputs() {
  return (
    <section id="knowledge" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Knowledge outputs
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Enabling Replication
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            GuruJal launched two key knowledge resources at the symposium —
            designed to bridge practice, policy and replication across
            India.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          <li className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange-dark">
              Standard Operating Procedure
            </span>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink sm:text-2xl">
              SOP for Community-Centric Dug Well Revival
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted sm:text-base">
              A detailed framework covering site assessment, technical
              restoration, rainwater integration and community stewardship
              — enabling any organisation to replicate the model.
            </p>
            <Link
              href="/publication-sop-of-wells"
              className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-primary-dark"
            >
              Read the SOP
              <Arrow />
            </Link>
          </li>
          <li className="flex flex-col rounded-3xl bg-white p-7 ring-1 ring-brand-soft/70 sm:p-8">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange-dark">
              Coffee Table Book
            </span>
            <h3 className="mt-3 text-xl font-semibold text-brand-ink sm:text-2xl">
              Wells of Gurugram
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted sm:text-base">
              A richly illustrated documentation of the condition, history
              and revival journeys of dug wells in Gurugram — capturing
              both data and lived community narratives.
            </p>
            <Link
              href="/publication-wells-of-gurugram"
              className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-primary-dark"
            >
              Explore the book
              <Arrow />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

function VoicesFromTheFloor() {
  const quotes = [
    {
      body: "The transition from Har Ghar Nal to Har Ghar Jal demands renewed attention to traditional recharge systems and community stewardship. Access is only the beginning — sustainability requires us to go deeper.",
      name: "Ms. Ankita Chakravarty",
      role: "Deputy Secretary, National Jal Jeevan Mission · Ministry of Jal Shakti",
    },
    {
      body: "Open wells are living portals to aquifers. Pilots are essential — but the real challenge lies in integrating such interventions into government systems at scale.",
      name: "Mr. Nakul Heble",
      role: "Program Manager · Wipro Foundation",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Reflections from the dialogue
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Voices from the Floor
          </h2>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          {quotes.map((q) => (
            <li
              key={q.name}
              className="flex flex-col rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 sm:p-8"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-brand-teal/40"
                aria-hidden
              >
                <path d="M6 17h4V8H4v9c0 4 6 5 6 5v-2s-4-1-4-3zm10 0h4V8h-6v9c0 4 6 5 6 5v-2s-4-1-4-3z" />
              </svg>
              <p className="mt-3 text-base leading-relaxed text-brand-ink sm:text-lg">
                {q.body}
              </p>
              <div className="mt-5">
                <p className="text-sm font-semibold text-brand-ink">{q.name}</p>
                <p className="mt-0.5 text-xs leading-snug text-brand-muted sm:text-sm">
                  {q.role}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-brand-muted sm:text-lg">
          Discussions reinforced that{" "}
          <strong>groundwater resilience cannot be built through infrastructure alone</strong>.
          It requires community participation, local governance and
          cultural legitimacy.
        </p>
      </div>
    </section>
  );
}

function MediaCoverage() {
  const articles = [
    {
      outlet: "Times of India",
      title:
        "HydroMingle 2025 brings together innovators to address India's water challenges",
      href: "https://timesofindia.indiatimes.com/india/hydromingle-2025-brings-together-innovators-to-address-indias-water-challenges/articleshow/125894946.cms",
    },
    {
      outlet: "Dainik Bhaskar",
      title: "Gurugram: HydroMingle 2025 — experts from across the country gather",
      href: "https://www.bhaskar.com/local/haryana/gurugram/farrukh-nagar/news/gurugram-hydromingle-2025-experts-from-across-country-gather-136640529.html",
    },
    {
      outlet: "Times of India · Gurgaon",
      title: "Experts chart roadmap to revive traditional wells in Gurugram",
      href: "https://timesofindia.indiatimes.com/city/gurgaon/experts-chart-roadmap-to-revive-traditional-wells-in-gurugram/articleshow/125869644.cms",
    },
    {
      outlet: "Amar Ujala",
      title: "Roots and Recharge Seminar organised in Gurugram",
      href: "https://www.amarujala.com/haryana/roots-and-recharge-seminar-organised-in-gurugram-2025-12-09",
    },
    {
      outlet: "Bharat Express",
      title:
        "Gurugram groundwater crisis: GuruJal & Wipro Foundation drive dug-well revival",
      href: "https://bharatexpress.com/india/gurugram-groundwater-crisis-gurujal-wipro-foundation-dugwell-revival-hydromingle-delhi-2025-water-innovation-596450",
    },
  ];

  return (
    <section id="media" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Media coverage
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            In the News
          </h2>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-4">
          {articles.map((a) => (
            <li key={a.href}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 rounded-2xl bg-white p-5 ring-1 ring-brand-soft/70 transition hover:-translate-y-0.5 hover:shadow-md hover:ring-brand-accent"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange-dark">
                    {a.outlet}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-brand-ink group-hover:text-brand-primary sm:text-base">
                    {a.title}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-brand-mist p-2.5 text-brand-primary transition group-hover:bg-brand-primary group-hover:text-white">
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
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Arrow() {
  return (
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* ============================================================
 * Page
 * ============================================================ */

export default function RootsAndRechargePage() {
  return (
    <>
      <EventDetailHero
        eyebrow="Roots & Recharge Symposium"
        dateLine="GuruJal · Wipro Foundation · 9 December 2025 · India Habitat Centre, New Delhi"
        headlineBefore="Roots &"
        headlineAccent="Recharge"
        headlineAfter="Symposium"
        lead="Reviving traditional water wisdom for groundwater resilience — a multistakeholder dialogue on heritage water structures and their role in modern water planning."
        primaryCta={{ label: "Read Event Report", href: "#overview" }}
        secondaryCta={{ label: "View Gallery", href: "#gallery" }}
        facts={[
          { label: "Date", value: "9 Dec 2025" },
          { label: "Venue", value: "Juniper Hall, IHC" },
          { label: "Timings", value: "10:00 AM – 4:00 PM" },
          { label: "Focus area", value: "Gurugram, Haryana" },
        ]}
        backdrop="/uploads/2024/08/Roots-recharge-symposium-2025.jpg"
      />

      <EventOverview
        eyebrow="Event Overview"
        headline={<>Reviving Heritage Water Systems for a Resilient Future</>}
        paragraphs={[
          <>
            The <strong>Roots & Recharge Symposium</strong> marked the
            first day of a two-day engagement on India&apos;s water
            future, anchored firmly in the country&apos;s{" "}
            <strong>traditional water wisdom</strong>. The symposium
            focused on one geography — <strong>Gurugram</strong> — as a
            lens to understand how heritage water systems, particularly
            dug wells, can play a critical role in contemporary
            groundwater resilience.
          </>,
          <>
            Once sustained by a dense network of traditional wells,
            Gurugram today reflects the pressures of rapid urbanisation
            and groundwater depletion. Roots & Recharge brought together
            policymakers, practitioners, researchers, CSR leaders and
            community representatives to examine how these traditional
            systems can be{" "}
            <strong>revived, governed and integrated into modern water
            planning</strong>.
          </>,
          <>
            Organised by <strong>GuruJal Society</strong> and supported by{" "}
            <strong>Wipro Foundation</strong>, the symposium was held on
            Tuesday, 9 December 2025, at Juniper Hall, India Habitat
            Centre, New Delhi — from 10:00 AM to 4:00 PM.
          </>,
        ]}
      />

      <DugWellsData />
      <RevivalPilots />
      <KnowledgeOutputs />

      <EventSpeakers
        eyebrow="Speaker line-up"
        heading={<>Policymakers · Innovators · Practitioners</>}
        speakers={[
          {
            name: "Ms. Ankita Chakravarty",
            role: "Deputy Secretary, National Jal Jeevan Mission",
            org: "Ministry of Jal Shakti, Government of India",
            initials: "AC",
          },
          {
            name: "Victor Shinde",
            role: "Lead – Water & Environment",
            org: "National Institute of Urban Affairs",
            initials: "VS",
          },
          {
            name: "Narinder Sarwan",
            role: "District Development & Panchayat Officer",
            org: "Gurugram",
            initials: "NS",
          },
          {
            name: "Dr. Fawzia Tarannum",
            role: "Co-Founder, GuruJal",
            org: "TERI School of Advanced Studies",
            photo: "/uploads/2024/08/fawzia.jpeg",
          },
          {
            name: "Ravi Pahuja",
            role: "CEO",
            org: "Raman Kant Munjal Foundation",
            initials: "RP",
          },
          {
            name: "Archita Khanna",
            role: "Sr. Communications Manager",
            org: "Suntory Global Spirit of Water Programme",
            initials: "AK",
          },
          {
            name: "Pooja Lahri",
            role: "Vice President",
            org: "Primus Partners India",
            initials: "PL",
          },
          {
            name: "Nakul Heble",
            role: "Program Manager",
            org: "Wipro Foundation",
            initials: "NH",
          },
          {
            name: "Pratik Korde",
            role: "Researcher",
            org: "ACWADAM",
            initials: "PK",
          },
          {
            name: "Mr. Satpal Singh",
            role: "Ward Councillor",
            org: "Daulatabad",
            initials: "SS",
          },
          {
            name: "Mr. Kuldeep Jangid",
            role: "Sarpanch",
            org: "Khandewla",
            initials: "KJ",
          },
        ]}
      />

      <VoicesFromTheFloor />

      <EventInsights
        eyebrow="Shared understanding & appreciation"
        heading={<>What the Symposium Established</>}
        insights={[
          {
            title: "Dug Wells Are Not Relics — They Are Infrastructure",
            body: (
              <>
                When revived thoughtfully, dug wells function as{" "}
                <strong>community-centric recharge assets</strong>,
                embedded within district-level groundwater planning. The
                data from 424 wells across 200 villages proved this is a
                scalable intervention.
              </>
            ),
          },
          {
            title: "Water Systems Are Also Social Systems",
            body: (
              <>
                The revival of the Kuan Poojan ceremony was not ceremonial
                — it was the mechanism through which the community
                reclaimed ownership. Groundwater resilience requires{" "}
                <strong>
                  community participation, local governance and cultural
                  legitimacy
                </strong>.
              </>
            ),
          },
          {
            title: "Pilots Must Graduate to Policy",
            body: (
              <>
                The SOP for Community-Centric Dug Well Revival and Wells of
                Gurugram were designed to close this gap — giving
                implementers, policymakers and district planners a{" "}
                <strong>shared language and a replicable model</strong>.
              </>
            ),
          },
        ]}
        bg="bg-white"
      />

      <EventGallery
        eyebrow="Event gallery"
        heading={<>Moments from Roots & Recharge</>}
        photos={[
          { src: "/uploads/2024/08/BVF_8697.jpg", alt: "Roots & Recharge photo 1" },
          { src: "/uploads/2024/08/BVF_8708.jpg", alt: "Roots & Recharge photo 2" },
          { src: "/uploads/2024/08/BVF_8726.jpg", alt: "Roots & Recharge photo 3" },
          { src: "/uploads/2024/08/BVF_8750.jpg", alt: "Roots & Recharge photo 4" },
          { src: "/uploads/2024/08/BVF_8757.jpg", alt: "Roots & Recharge photo 5" },
          { src: "/uploads/2024/08/BVF_8807.jpg", alt: "Roots & Recharge photo 6" },
          { src: "/uploads/2024/08/BVF_8840.jpg", alt: "Roots & Recharge photo 7" },
          { src: "/uploads/2024/08/BVF_8867.jpg", alt: "Roots & Recharge photo 8" },
        ]}
      />

      <MediaCoverage />

      <EventClosingCta
        eyebrow="Continue the journey"
        heading={<>Traditional Wisdom for a Water-Secure India</>}
        body={
          <>
            Traditional water structures — when supported by data,
            technical rigour, institutional alignment and community
            ownership — can play a vital role in India&apos;s groundwater
            future. The symposium laid the foundation for scaling well
            revival as a credible, community-anchored and replicable
            approach.
          </>
        }
        primaryCta={{
          label: "Connect with us",
          href: "mailto:management@gurujal.org",
        }}
        secondaryCta={{ label: "Back to events", href: "/events" }}
      />
    </>
  );
}
