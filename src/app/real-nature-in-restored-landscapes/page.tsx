import type { Metadata } from "next";
import { EventDetailHero } from "@/components/event-detail/hero";
import { EventOverview } from "@/components/event-detail/overview";
import { EventSessions } from "@/components/event-detail/sessions";
import { EventClosingCta } from "@/components/event-detail/closing-cta";

export const metadata: Metadata = {
  title:
    "Real Nature in Restored Landscapes — Field Programme · GuruJal",
  description:
    "An experiential site-visit programme giving participants hands-on exposure to pond restoration, wastewater treatment, traditional well revival and native plantation — held on 21 February 2026.",
};

/* ============================================================
 * Inline blocks unique to this page (site highlights, learning
 * themes, participant Q&A) — small enough that they live next to
 * the page rather than as shared components.
 * ============================================================ */

type Site = {
  no: string;
  title: string;
  subtitle: string;
  bullets: string[];
};

const sites: Site[] = [
  {
    no: "01",
    title: "BSF Camp — Mahila Barrack & Shaheed Ahlawat Pond",
    subtitle:
      "Wastewater Treatment Plant · Pond Restoration · Rainwater Harvesting",
    bullets: [
      "Toured the Mahila Barrack Pond with on-site briefings about the campus from the GuruJal team.",
      "Visited the Waste Water Treatment Plant — observed how wastewater is cleaned and reused.",
      "Conducted a full pond walk, observing structure, water flow and treatment stages.",
      "At Shaheed Ahlawat Pond: learned about rainwater storage, groundwater recharge and local ecology.",
      "Interactive Q&A on pond capacity, maintenance and treatment technology.",
    ],
  },
  {
    no: "02",
    title: "Khandewla Village — Restored Traditional Well",
    subtitle:
      "Heritage Water Conservation · Cultural Identity · Rainwater Channeling",
    bullets: [
      "GuruJal restored a traditional dug well, connecting heritage with water conservation.",
      "The well helps recharge rainwater and reduces local flooding in the village.",
      "Cultural significance through Kua Poojan — celebrating new births and the purity of water.",
      "A school rooftop is connected to the well, channelling rainwater directly into it.",
      "An iron-bar lid was installed to prevent waste disposal and ensure water safety.",
    ],
  },
  {
    no: "03",
    title: "Bhokarka Pond — Restoration Site",
    subtitle: "Native Plantation · Biodiversity · Community-Led Restoration",
    bullets: [
      "Shubhi Kesarwani briefed participants on how GuruJal initiated this restoration project.",
      "Aakash shared his personal field journey — inspiring participants with first-hand stories.",
      "Pond walk guided by Ismail Ahmad, who explained the native plants and shrubs around the pond.",
      "Native plants improve biodiversity, support water retention and create healthy ecosystems.",
    ],
  },
];

function SiteHighlights() {
  return (
    <section id="sites" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Site Highlights
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Explore Each Location
          </h2>
        </div>

        <ol className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
          {sites.map((s) => (
            <li
              key={s.no}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-soft/80 sm:p-8"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange-dark">
                Site {s.no}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-brand-ink sm:text-xl">
                {s.title}
              </h3>
              <p className="mt-2 text-sm font-semibold text-brand-teal-dark">
                {s.subtitle}
              </p>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-brand-muted">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
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

function LearningThemes() {
  const themes = [
    {
      emoji: "💧",
      title: "Rainwater Harvesting",
      body: "Storing rain for recharge and reducing flood risk in villages.",
    },
    {
      emoji: "♻️",
      title: "Wastewater Treatment",
      body: "Understanding how WWTP technology cleans and recycles water.",
    },
    {
      emoji: "🌿",
      title: "Native Plantation",
      body: "How local flora supports biodiversity and water retention.",
    },
    {
      emoji: "🏛",
      title: "Cultural Conservation",
      body: "Kua Poojan as a bridge between tradition and water stewardship.",
    },
  ];

  return (
    <section id="learnings" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Learning Themes
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            What Participants Took Home
          </h2>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
          {themes.map((t) => (
            <li
              key={t.title}
              className="flex gap-5 rounded-2xl bg-brand-mist p-6 ring-1 ring-brand-soft/70"
            >
              <span aria-hidden className="text-3xl">
                {t.emoji}
              </span>
              <div>
                <h3 className="text-base font-semibold text-brand-ink sm:text-lg">
                  {t.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                  {t.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ParticipantQA() {
  const qas = [
    {
      q: "What is the capacity of the WWTP?",
      a: "The team briefed participants on the Waste Water Treatment Plant's operational capacity and how it supports sustainable water management at the BSF Camp.",
    },
    {
      q: "Which technology is used in wastewater treatment?",
      a: "Participants were walked through the treatment process and the specific technology employed to clean and reuse wastewater before it re-enters the system.",
    },
    {
      q: "What was the condition of the Khandewla well before restoration?",
      a: "The traditional dug well had fallen into disuse and disrepair. GuruJal's restoration revived both its water function and its cultural significance for the community.",
    },
    {
      q: "Why is Kua Poojan culturally important?",
      a: "Kua Poojan is a ritual where families celebrate a child's birth at the well, seeking blessings and symbolising life, purity and a deep connection between people and water.",
    },
    {
      q: "What native plants were planted around Bhokarka Pond?",
      a: "Ismail Ahmad explained a variety of native shrubs and wetland plants chosen for their roles in improving biodiversity, supporting water retention and creating a healthy local ecosystem.",
    },
    {
      q: "How often are the ponds cleaned and maintained?",
      a: "The team covered routine maintenance schedules and the community involvement model that keeps the restored ponds functional and ecologically active throughout the year.",
    },
  ];

  return (
    <section id="qa" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Participant Q&A
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Questions Raised During the Visit
          </h2>
        </div>

        {/* Native details/summary so the page is keyboard-accessible and
            indexable. Each question expands on click. */}
        <div className="mx-auto mt-12 max-w-4xl space-y-3">
          {qas.map((item, i) => (
            <details
              key={i}
              className="group rounded-2xl bg-white ring-1 ring-brand-soft/70 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5">
                <span className="text-base font-semibold text-brand-ink sm:text-lg">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-mist text-brand-primary transition group-open:rotate-45"
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
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-brand-soft/70 px-5 py-4 text-sm leading-relaxed text-brand-muted sm:px-6 sm:py-5 sm:text-base">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Conclusion() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Conclusion
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            A Step Towards Sustainable Water Awareness
          </h2>
          <div className="mt-6 space-y-4 text-left text-base leading-relaxed text-brand-muted sm:text-lg">
            <p>
              The site visits helped participants understand water
              conservation in a practical way. By visiting the BSF Camp
              ponds, Khandewla&apos;s restored well and Bhokarka Pond,
              they saw how pond restoration, rainwater harvesting, sewage
              treatment and native plants support groundwater recharge.
            </p>
            <p>
              The programme also showed the importance of community
              efforts and cultural practices like Kua Poojan in protecting
              water sources. Overall, the visit increased awareness and
              motivated participants to save water and support
              environmental conservation in their daily lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * Page
 * ============================================================ */

export default function RealNatureInRestoredLandscapesPage() {
  return (
    <>
      <EventDetailHero
        eyebrow="Field Programme · GuruJal"
        dateLine="📅 21 February 2026 · 📍 BSF Camp · Khandewala · Bhokarka · 👥 21 Participants"
        headlineBefore="Water Conservation &"
        headlineAccent="Exposure"
        headlineAfter="Site Visit"
        lead="An experiential site-visit programme giving participants hands-on exposure to pond restoration, wastewater treatment, traditional well revival and native plantation — hosted by GuruJal in partnership with Prana Earth under Delhi Climate Innovation Week 2026."
        primaryCta={{ label: "Read Event Report", href: "#overview" }}
        secondaryCta={{ label: "Site Highlights", href: "#sites" }}
        facts={[
          { label: "Date", value: "21 Feb 2026" },
          { label: "Sites Visited", value: "3" },
          { label: "Participants", value: "21" },
          { label: "Water Bodies", value: "4" },
        ]}
        backdrop="/uploads/2024/08/real-nature-event.jpeg"
      />

      <EventOverview
        eyebrow="About the Programme"
        headline={<>Learning water conservation through real-world exposure</>}
        paragraphs={[
          <>
            This experiential programme gave participants hands-on
            exposure to water conservation and restoration work —
            exploring ponds, a Wastewater Treatment Plant and a restored
            traditional well. Participants learned how rainwater
            harvesting, pond restoration and native plantation are used
            to manage water sustainably, drawing from real community
            examples.
          </>,
          <>
            While travelling in the bus, Anjali Singh briefed the
            participants about the sites to be visited and explained the
            work being done there. The programme helped participants
            understand sustainable water management methods through
            direct field observation and expert-guided walkthroughs.
          </>,
        ]}
      />

      <SiteHighlights />

      <EventSessions
        id="flow"
        eyebrow="Programme Flow"
        heading={<>How the Day Unfolded</>}
        bg="bg-white"
        sessions={[
          {
            badge: "On the Way",
            title: "Briefing on the Bus",
            body: "The GuruJal team oriented participants about all three sites and the nature of work being done at each location.",
          },
          {
            badge: "First Stop",
            title: "BSF Camp — Ponds & WWTP",
            body: "Visited Mahila Barrack Pond, explored the Waste Water Treatment Plant and learned about Shaheed Ahlawat Pond's ecological role.",
          },
          {
            badge: "Second Stop",
            title: "Khandewla Village — Restored Well",
            body: "Witnessed GuruJal's restoration of a centuries-old traditional well with cultural and hydrological significance.",
          },
          {
            badge: "Final Stop",
            title: "Bhokarka Pond — Native Ecosystem Walk",
            body: "Explored native plant species, heard field stories from the team and completed a full pond walk to observe the restored site.",
          },
        ]}
      />

      <LearningThemes />
      <ParticipantQA />
      <Conclusion />

      <EventClosingCta
        eyebrow="Join the Next Programme"
        heading={<>Interested in a field exposure visit?</>}
        body={
          <>
            We host field visits, water-conservation workshops and
            partnership opportunities through the year. To learn about
            the next programme or to partner with GuruJal on restoration
            work, get in touch at{" "}
            <strong>communications@gurujal.org</strong>.
          </>
        }
        primaryCta={{
          label: "Get in touch",
          href: "mailto:communications@gurujal.org",
        }}
        secondaryCta={{ label: "Back to events", href: "/events" }}
      />

    </>
  );
}
