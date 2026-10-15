import type { Metadata } from "next";
import Image from "next/image";
import { EventDetailHero } from "@/components/event-detail/hero";
import { EventOverview } from "@/components/event-detail/overview";
import { EventEngage } from "@/components/event-detail/engage";
import { EventSessions } from "@/components/event-detail/sessions";
import { EventInsights } from "@/components/event-detail/insights";
import { EventOutcomes } from "@/components/event-detail/outcomes";
import { EventPartners } from "@/components/event-detail/partners";
import { EventClosingCta } from "@/components/event-detail/closing-cta";

export const metadata: Metadata = {
  title: "Urban Adda 2026 — One Adda for Change",
  description:
    "Urban Adda 2026 (5–7 October, India Habitat Centre, New Delhi) brought together policymakers, planners, researchers and citizens to reimagine Indian cities. GuruJal led four water sessions, launched two publications and convened the Water Citizens' Council.",
};

/** Body for a session card: description, key takeaways and an optional note. */
function SessionBody({
  paragraphs,
  takeaways,
  note,
}: {
  paragraphs: React.ReactNode[];
  takeaways: string[];
  note?: React.ReactNode;
}) {
  return (
    <div className="space-y-3">
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <div className="rounded-2xl bg-brand-mist p-5 ring-1 ring-brand-soft/70">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-teal">
          Key takeaways
        </p>
        <ul className="mt-3 space-y-2 text-brand-ink">
          {takeaways.map((t) => (
            <li key={t} className="flex gap-2.5">
              <span
                aria-hidden
                className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
              />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      {note && <p className="font-medium text-brand-ink">{note}</p>}
    </div>
  );
}

const publications = [
  {
    title: "India's First Water-Neutral Campus",
    subtitle: "BSF Campus, Bhondsi, Gurugram — Case study",
    cover: "/uploads/2026/10/urban-adda-26-case-study-cover.jpg",
    coverAlt: "Cover of the case study: India's First Water Neutral Campus, BSF Campus, Bhondsi, Gurugram",
    portrait: true,
    body: [
      "This case study documents GuruJal's integrated water-management interventions at the BSF Bhondsi Campus, including wastewater treatment and reuse, rainwater harvesting, groundwater recharge and nature-based solutions.",
      "The publication presents a practical example of how large institutional campuses can work towards water neutrality through integrated planning and long-term water stewardship.",
    ],
    href: "/uploads/2026/10/GuruJal-Case-Study-Water-Neutral-Campus.pdf",
    cta: "Read the case study",
  },
  {
    title: "Reconnecting Nature, Reconnecting Lives",
    subtitle: "Seven Years of Water Restoration and Community Stewardship — Coffee-table book",
    cover: "/uploads/2026/10/urban-adda-26-coffee-table-book-cover.jpg",
    coverAlt: "Cover of GuruJal's coffee-table book: Restoring Nature, Reconnecting Lives",
    portrait: false,
    body: [
      "GuruJal's coffee-table book captures the organisation's journey of restoring degraded waterbodies, reviving ecological spaces and reconnecting communities with their natural water resources.",
      "Through project stories, photographs and documented interventions, the publication highlights the role of nature-based solutions, community participation and long-term maintenance in creating sustainable water systems.",
    ],
    href: "/uploads/2026/10/GuruJal-Coffee-Table-Book.pdf",
    cta: "Read the book",
  },
];

export default function UrbanAdda26Page() {
  return (
    <>
      <EventDetailHero
        eyebrow="Urban Adda 2026"
        dateLine="5th–7th October 2026 · India Habitat Centre, New Delhi"
        headlineBefore="One Adda for"
        headlineAccent="Change"
        headlineAfter=""
        lead="Building Sustainable, Inclusive and Resilient Cities — three days of dialogue, knowledge exchange and collective action, with GuruJal bringing water security to the heart of the urban agenda."
        primaryCta={{ label: "Read Event Report", href: "#overview" }}
        secondaryCta={{ label: "View Sessions", href: "#sessions" }}
        facts={[
          { label: "Dates", value: "5–7 Oct 2026" },
          { label: "Venue", value: "India Habitat Centre" },
          { label: "Duration", value: "3-Day Gathering" },
          { label: "Theme", value: "One Adda for Change" },
        ]}
        backdrop="/uploads/2026/10/urban-adda-26-hero.jpg"
      />

      <EventOverview
        eyebrow="About the event"
        headline={<>Urban Adda 2026 — Reimagining the Future of Indian Cities</>}
        stats={[
          { value: "3", label: "Days" },
          { value: "4", label: "GuruJal sessions" },
          { value: "2", label: "Publications launched" },
          { value: "1", label: "Water Citizens' Council convened" },
        ]}
        paragraphs={[
          <>
            Urban Adda 2026 brought together policymakers, urban
            planners, researchers, environmental practitioners, industry
            leaders, civil society organisations, young professionals and
            citizens to reimagine the future of Indian cities. Held from{" "}
            <strong>5–7 October 2026</strong> at India Habitat Centre,
            New Delhi, the three-day gathering created a collaborative
            platform for dialogue, knowledge exchange and collective
            action under the theme{" "}
            <strong>&ldquo;One Adda for Change.&rdquo;</strong> Through
            panel discussions, workshops, exhibitions, interactive
            experiences and networking, the event explored interconnected
            urban challenges — water security, climate resilience,
            sustainable mobility, air quality, inclusive infrastructure,
            ecological restoration and citizen participation.
          </>,
          <>
            Co-hosted by GuruJal, Urban Adda 2026 reinforced the
            importance of connecting policy with practice and scientific
            knowledge with community action. For GuruJal, it was a chance
            to bring water security into wider conversations on
            sustainable urban development — highlighting how
            nature-based solutions, circular water management,
            responsible infrastructure planning and citizen-led governance
            can strengthen urban resilience. Urban Adda demonstrated the
            value of collaboration: bringing diverse stakeholders
            together to share experiences, question conventional
            approaches and chart pathways towards more liveable,
            equitable and water-secure cities.
          </>,
        ]}
      />

      <EventEngage
        eyebrow="GuruJal's role"
        heading={<>From Conversations to Collective Water Action</>}
        intro={
          <>
            At Urban Adda 2026, GuruJal contributed to discussions on some
            of the most pressing challenges shaping India&apos;s water
            future. Through four focused sessions, knowledge-sharing
            initiatives and interactive engagements, GuruJal highlighted
            the need to move beyond fragmented interventions towards
            integrated, scalable and community-driven solutions.
          </>
        }
        groups={[
          {
            title: "Restoring natural water systems",
            body: "How Indian cities can bring back the lakes, wetlands and drainage that once carried their water.",
          },
          {
            title: "Circular water management",
            body: "Moving from linear use to conservation, treatment, reuse and recharge.",
          },
          {
            title: "Infrastructure meets availability",
            body: "Balancing emerging infrastructure demands, such as data centres, with the water that is actually available.",
          },
          {
            title: "Citizen participation in governance",
            body: "Strengthening the role of citizens in how water is protected and managed.",
          },
        ]}
      />

      <EventSessions
        id="sessions"
        eyebrow="Key sessions and conversations"
        heading={<>Four Sessions Led by GuruJal</>}
        sessions={[
          {
            badge: "Day 1 · 5 October 2026 · Jacaranda Hall",
            title: "Towards Water-Secure India: Walking the Talk",
            subtitle: "Theme: From Solutions to Scalable Action",
            body: (
              <SessionBody
                paragraphs={[
                  "India has no shortage of research, technologies or successful water conservation initiatives. The challenge lies in translating these solutions into widespread, long-term action.",
                  "Moderated by Dr. Fawzia Tarannum, Co-Founder and Strategic Advisor, GuruJal, the discussion brought together experts from the National Institute of Urban Affairs (NIUA), INTACH, the Council on Energy, Environment and Water (CEEW), S M Sehgal Foundation and Development Alternatives. The panel examined how natural hydrology, urban planning, community ownership and institutional collaboration can work together to strengthen water security.",
                ]}
                takeaways={[
                  "Integrate natural drainage patterns and hydrological systems into urban planning.",
                  "Recognise communities as active stakeholders rather than passive beneficiaries.",
                  "Strengthen collaboration between government institutions, researchers and local communities.",
                  "Scale proven, nature-based water solutions through better governance and implementation.",
                ]}
                note={
                  <>
                    Knowledge product launch: GuruJal launched its case
                    study, &ldquo;India&apos;s First Water-Neutral Campus
                    – BSF Campus, Bhondsi, Gurugram,&rdquo; documenting an
                    integrated approach to rainwater harvesting,
                    wastewater treatment, reuse and groundwater recharge.
                  </>
                }
              />
            ),
          },
          {
            badge: "Day 2 · 6 October 2026 · Jacaranda Hall",
            title: "Circularity for Water Security: Closing the Loop – Reuse, Recharge and Restore",
            body: (
              <SessionBody
                paragraphs={[
                  "The session explored how cities can move away from linear water consumption towards a circular approach that prioritises conservation, treatment, reuse, recharge and ecological restoration.",
                  "Moderated by Shubhi Kesarwani, Co-Founder and CEO, GuruJal, the plenary featured Dr. Satbir Singh Kadian, Dr. Ranjana Ray Chaudhuri, Savita Bhandari, Vandana Menon and Kamal Kant Sehgal. Discussions highlighted the interconnected challenges of urban water scarcity and flooding, the importance of watershed-level planning, and the need for water-sensitive urban development.",
                ]}
                takeaways={[
                  "Address urban water scarcity and flooding as interconnected challenges.",
                  "Promote rainwater harvesting, decentralised storage and groundwater recharge.",
                  "Prioritise treated wastewater reuse and circular water management.",
                  "Integrate wetlands, lakes and blue-green infrastructure into urban development.",
                  "Strengthen water accounting, regulation and long-term maintenance.",
                ]}
                note={
                  <>
                    Publication launch: the session also marked the
                    launch of GuruJal&apos;s coffee-table book,
                    &ldquo;Reconnecting Nature, Reconnecting Lives,&rdquo;
                    documenting seven years of waterbody restoration,
                    ecological transformation and community-led water
                    stewardship.
                  </>
                }
              />
            ),
          },
          {
            badge: "Day 2 · 6 October 2026 · Willow Hall",
            title: "Data Centres and Water: People, Policy and Planning",
            subtitle: "In collaboration with the All Ivy+ Network",
            body: (
              <SessionBody
                paragraphs={[
                  "As India's digital infrastructure and artificial intelligence ecosystem expand, the water requirements of data centres are becoming an increasingly important urban sustainability concern.",
                  "Moderated by Ashish Dev Kapur, Vice-Chairman, Abhipsa Foundation, and Advisory Board Member, GuruJal, the session featured Alok Lall, Anshuman, Sangeetha Raghuram, Shubhankar Chaudhry and Rupamanjari Sinha Ray. The discussion examined the direct and indirect water footprint of data centres — including cooling, electricity generation and semiconductor manufacturing — alongside responsible siting, transparent water accounting and water-efficient technologies.",
                ]}
                takeaways={[
                  "Consider local water availability and watershed carrying capacity before approving data-centre projects.",
                  "Measure, meter and audit water consumption.",
                  "Encourage transparent reporting and disclosure of water use.",
                  "Prioritise treated wastewater reuse and water-efficient cooling technologies.",
                  "Integrate community needs and ecological considerations into infrastructure planning.",
                ]}
                note="The session concluded with an interactive Mentimeter workshop, where participants contributed ideas towards the priorities of the Alliance for Responsible Data Centres, an industry coalition convened by the All Ivy+ Network to promote responsible and resilient AI infrastructure."
              />
            ),
          },
          {
            badge: "Day 3 · 7 October 2026 · NIUA Conference Hall",
            title: "Water Citizens' Council – Delhi NCR Chapter",
            subtitle: "In collaboration with NIUA · Building a Citizen-Led Platform for Collaborative Water Governance",
            body: (
              <SessionBody
                paragraphs={[
                  "On the final day of Urban Adda 2026, GuruJal and the National Institute of Urban Affairs (NIUA) convened the founding meeting of the Water Citizens' Council – Delhi NCR Chapter.",
                  "Moderated by Dr. Fawzia Tarannum, the meeting brought together researchers, environmental practitioners, civil society representatives, founders and concerned citizens to explore how citizens can play a stronger role in protecting and managing water resources. The session focused on developing a collaborative, citizen-led platform to promote water literacy, conservation, accountability and meaningful engagement with government institutions. Through facilitated group discussions, participants contributed to the Council's draft charter — its purpose, citizen authority, organisational structure, first-year priorities and safeguards for independence.",
                ]}
                takeaways={[
                  "Build a citizen-led network for water awareness and collective action.",
                  "Strengthen public participation and accountability in water governance.",
                  "Create opportunities for knowledge-sharing between citizens, researchers and institutions.",
                  "Identify practical priorities and collaborative initiatives for the Delhi-NCR region.",
                  "Develop a transparent, inclusive and evidence-based framework for long-term engagement.",
                ]}
                note="The meeting marked an important first step towards building a community of informed and engaged citizens committed to a water-secure Delhi-NCR."
              />
            ),
          },
        ]}
      />

      {/* Publications */}
      <section id="publications" className="bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Knowledge and publications launched
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Two publications, launched at Urban Adda
            </h2>
          </div>

          <ul className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
            {publications.map((p) => (
              <li
                key={p.title}
                className="flex flex-col overflow-hidden rounded-3xl bg-brand-mist ring-1 ring-brand-soft/70"
              >
                <div className="relative flex items-center justify-center bg-brand-soft/40 p-6">
                  <div
                    className={`relative w-full overflow-hidden rounded-xl shadow-lg ring-1 ring-black/5 ${
                      p.portrait ? "aspect-[745/1053] max-w-[240px]" : "aspect-[1053/745]"
                    }`}
                  >
                    <Image
                      src={p.cover}
                      alt={p.coverAlt}
                      fill
                      sizes="(min-width: 768px) 360px, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-semibold text-brand-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-brand-teal-dark">
                    {p.subtitle}
                  </p>
                  <div className="mt-3 flex-1 space-y-3 text-sm leading-relaxed text-brand-muted">
                    {p.body.map((b) => (
                      <p key={b}>{b}</p>
                    ))}
                  </div>
                  <div className="mt-5">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
                    >
                      {p.cta}
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
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Know Your Water */}
      <section id="know-your-water" className="bg-brand-mist scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Know Your Water
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Connecting citizens with water literacy
            </h2>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            <p>
              Alongside the panel discussions, GuruJal engaged visitors
              through its <strong>&ldquo;Know Your Water&rdquo;</strong>{" "}
              initiative in the exhibition area.
            </p>
            <p>
              The interactive stall encouraged visitors to understand the
              water they use, explore basic water-quality parameters and
              recognise the importance of water conservation and
              responsible water management.
            </p>
            <p>
              Through educational demonstrations and conversations, the
              initiative made water literacy accessible to a wider
              audience, particularly students, young professionals and
              citizens.
            </p>
          </div>
        </div>
      </section>

      <EventInsights
        eyebrow="Key learnings"
        heading={<>What the Conversations Taught Us</>}
        bg="bg-white"
        insights={[
          {
            title: "Work with natural hydrology",
            body: "Integrate natural drainage patterns, wetlands, lakes and blue-green infrastructure into how cities are planned and built.",
          },
          {
            title: "Close the water loop",
            body: "Treat scarcity and flooding as linked problems, and prioritise rainwater harvesting, recharge and treated-wastewater reuse.",
          },
          {
            title: "Measure and disclose water use",
            body: "Meter, audit and transparently report water consumption — and weigh local availability before approving water-intensive infrastructure such as data centres.",
          },
          {
            title: "Put citizens at the centre",
            body: "Recognise communities as active stakeholders, and build citizen-led platforms for accountability and collaboration in water governance.",
          },
        ]}
      />

      <EventOutcomes
        eyebrow="Outcomes & collaborations"
        heading={<>Beyond the Sessions: Collaboration for Sustainable Cities</>}
        outcomes={[
          {
            title: "Knowledge shared",
            body: "A case study on India's first water-neutral campus and a coffee-table book on seven years of restoration were launched.",
          },
          {
            title: "A citizen-led platform begun",
            body: "The founding meeting of the Water Citizens' Council – Delhi NCR Chapter drafted its charter with researchers, practitioners and citizens.",
          },
          {
            title: "Water in the urban agenda",
            body: "Nature-based solutions, circular water management, responsible infrastructure planning and citizen-led governance entered wider conversations on sustainable cities.",
          },
          {
            title: "Relationships built",
            body: "Organisations, researchers, policymakers, industry representatives and citizens exchanged knowledge and explored collaborative solutions.",
          },
        ]}
      />

      <EventPartners
        eyebrow="Collaboration & partnership"
        heading="Hosts & Partners"
        partners={[
          {
            name: "Raahgiri Foundation",
            role: "Host",
            src: "/uploads/2024/08/images.png",
          },
          {
            name: "GuruJal",
            role: "Co-host",
            src: "/uploads/2025/06/gurujal-logo-update.png",
          },
          {
            name: "ICCT India",
            role: "Co-host",
            src: "/uploads/2024/08/ICCT-logo-English-Primary-2024.webp",
          },
          {
            name: "Nagarro Foundation",
            role: "Co-host",
            src: "/uploads/2024/08/images-1.png",
          },
          {
            name: "National Institute of Urban Affairs",
            role: "Session partner",
            src: "/uploads/2026/10/logo-niua.png",
          },
          {
            name: "All Ivy+ Network",
            role: "Session partner",
            src: "/uploads/2026/10/logo-ivy-alumni-network.png",
          },
        ]}
      />

      <EventClosingCta
        eyebrow="What's next"
        heading={<>The event may have concluded — the conversations continue</>}
        body={
          <>
            An Adda is a place where people come together — not only to
            discuss challenges, but to collaborate, support one another
            and collectively build the cities they hope to see. GuruJal
            remains committed to integrated water management, ecological
            restoration, community stewardship and collaborative
            governance. Together, towards sustainable cities and a
            water-secure future.
          </>
        }
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "Explore more events", href: "/events" }}
      />
    </>
  );
}
