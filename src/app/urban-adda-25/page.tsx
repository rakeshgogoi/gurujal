import type { Metadata } from "next";
import { EventDetailHero } from "@/components/event-detail/hero";
import { EventOverview } from "@/components/event-detail/overview";
import { EventPartners } from "@/components/event-detail/partners";
import { EventObjectives } from "@/components/event-detail/objectives";
import { EventSessions } from "@/components/event-detail/sessions";
import { EventSpeakers } from "@/components/event-detail/speakers";
import { EventInsights } from "@/components/event-detail/insights";
import { EventGallery } from "@/components/event-detail/gallery";
import { EventOutcomes } from "@/components/event-detail/outcomes";
import { EventEngage } from "@/components/event-detail/engage";
import { EventClosingCta } from "@/components/event-detail/closing-cta";

export const metadata: Metadata = {
  title: "Urban Adda 2025 — Cities for People, Not Cars",
  description:
    "A three-day conclave co-creating sustainable, equitable and resilient cities — blending policy dialogue, creative expression and youth engagement at India Habitat Centre, New Delhi.",
};

export default function UrbanAddaPage() {
  return (
    <>
      <EventDetailHero
        eyebrow="Urban Adda 2025"
        dateLine="3rd–5th June 2025 · India Habitat Centre, New Delhi"
        headlineBefore="Cities for People, Not"
        headlineAccent="Cars"
        headlineAfter=""
        lead="A three-day conference co-creating sustainable, equitable and resilient cities — blending policy dialogue, creative expression and youth engagement, from World Bicycle Day to World Environment Day."
        primaryCta={{ label: "Read Event Report", href: "#overview" }}
        secondaryCta={{ label: "View Gallery", href: "#gallery" }}
        facts={[
          { label: "Dates", value: "3–5 Jun 2025" },
          { label: "Venue", value: "India Habitat Centre" },
          { label: "Duration", value: "3-Day Conclave" },
          { label: "Edition", value: "Inaugural Edition" },
        ]}
        backdrop="/uploads/2026/03/Book-Launch-at-Urban-Adda.jpeg"
      />

      <EventOverview
        eyebrow="Event Overview"
        headline={<>Urban Adda 2025 — Reimagining the Cities We Deserve</>}
        paragraphs={[
          <>
            Urban Adda 2025 was conceived as a{" "}
            <strong>three-day national conference</strong> bringing
            together the most interesting ideas and successful
            demonstrations of work on sustainable and equitable cities.
            Held from <strong>3rd to 5th June 2025</strong> — from World
            Bicycle Day to World Environment Day — at the India Habitat
            Centre, New Delhi.
          </>,
          <>
            The conclave was organised by the{" "}
            <strong>Raahgiri Foundation</strong>, in partnership with the{" "}
            <strong>International Council on Clean Transportation
            (ICCT)</strong> and <strong>GuruJal</strong>, with support
            from <strong>Nagarro</strong>.
          </>,
          <>
            Path-breaking in its format, Urban Adda blended{" "}
            <strong>
              rigorous policy dialogue with creative expression, youth
              engagement and cross-sectoral collaboration
            </strong>{" "}
            — uniting policymakers, activists, youth and citizens to
            imagine cities that are walkable, breathable, equitable and
            vibrant.
          </>,
          <>
            The inaugural edition was launched by{" "}
            <strong>Union Minister Dr. Mansukh Mandaviya</strong>, with
            the participation of Delhi Chief Minister Smt. Rekha Gupta and
            other senior dignitaries.
          </>,
        ]}
      />

      <EventPartners
        eyebrow="Collaboration & partnership"
        heading="Organisers & Partners"
        partners={[
          {
            name: "Raahgiri Foundation",
            role: "Host organiser",
            src: "/uploads/2024/08/images.png",
          },
          {
            name: "ICCT",
            role: "Partner",
            src: "/uploads/2024/08/ICCT-logo-English-Primary-2024.webp",
          },
          {
            name: "GuruJal",
            role: "Co-host",
            src: "/uploads/2025/06/gurujal-logo-update.png",
          },
          {
            name: "Nagarro",
            role: "Supported by",
            src: "/uploads/2024/08/images-1.png",
          },
        ]}
      />

      <EventObjectives
        eyebrow="Context & purpose"
        heading={<>Why Urban Adda Was Needed</>}
        intro={
          <>
            India stands at a critical juncture in its urban journey. As
            the population surges towards 1.7 billion by 2047 — with over
            50% living in cities — the urgency to shape sustainable,
            equitable and resilient urban spaces has never been greater.
            Urban Adda was created as a space to confront these
            challenges openly and co-create solutions.
          </>
        }
        bullets={[
          "Reclaim the urban commons and restore joy in city living",
          "Bring policymakers, activists, youth and citizens into one shared space",
          "Bridge rigorous policy dialogue with creative and grassroots expression",
          "Champion walkability, clean air, road safety and active mobility",
          "Place water security and climate resilience at the heart of urban planning",
        ]}
        objectivesEyebrow="What we set out to do"
        objectivesHeading={<>Objectives of the Event</>}
        objectives={[
          "Reframe cities around people — prioritising walkability, cycling and active mobility over car-centric design.",
          "Place water security and climate resilience at the centre of the urban planning conversation.",
          "Empower young people through Youth Adda to shape and lead urban transformation.",
          "Blend policy dialogue with creative expression — film, art and public exhibits.",
          "Foster cross-sectoral collaboration across government, civil society and citizens.",
          "Turn awareness into action — moving from conversation to tangible, equitable urban solutions.",
        ]}
      />

      <EventSessions
        id="programme"
        eyebrow="Three days, three themes"
        heading={<>Programme & Daily Themes</>}
        sessions={[
          {
            badge: "Day 1 · 3rd June · World Bicycle Day",
            title: "Gati & Grace — Mobility, Art & Access for All",
            subtitle: "Cyclothon + ministerial inaugural",
            body: 'The conclave opened on World Bicycle Day with a Cyclothon of over 100 cyclists and the inaugural address by Union Minister Dr. Mansukh Mandaviya, who called cycling the "solution to pollution." The day celebrated active mobility, public art and equitable access to city streets.',
          },
          {
            badge: "Day 2 · 4th June · Youth & Cinema",
            title: "Youth Adda & Urban Adda Film Festival",
            subtitle: "Youth Adda · UAFF-25 · Gala Night",
            body: "Day two centred young changemakers through Youth Adda — a forum empowering students and youth to shape urban transformation. The evening featured the Urban Adda Film Festival (UAFF-25), screening short films on climate resilience and urban innovation, followed by a Gala Night.",
          },
          {
            badge: "Day 3 · 5th June · World Environment Day",
            title: "Imagining Water Secure & Climate Resilient Cities",
            subtitle: "Anchored by GuruJal",
            body: 'The final day, anchored by GuruJal, placed the spotlight on India\'s urban water emergency. The panel "Imagining Water Secure Cities" and the closing session on "Ecological Solutions for Climate Resilient Cities" brought together voices from governance, community action and corporate innovation.',
          },
        ]}
      />

      <EventSpeakers
        eyebrow="Voices & dignitaries"
        heading={<>Voices at Urban Adda 2025</>}
        speakers={[
          {
            name: "Dr. Mansukh Mandaviya",
            role: "Union Minister",
            org: "Youth Affairs & Sports, GoI",
            photo: "/uploads/2024/08/thumbnail-2.jpg",
          },
          {
            name: "Smt. Rekha Gupta",
            role: "Chief Minister",
            org: "Government of Delhi",
            photo: "/uploads/2024/08/images.jpeg",
          },
          {
            name: "Dr. Pankaj Kumar Singh",
            role: "Transport Minister",
            org: "Government of Delhi",
            photo: "/uploads/2024/08/thumbnail-3.jpg",
          },
          {
            name: "Shri Rao Narbir Singh",
            role: "Cabinet Minister",
            org: "Government of Haryana",
            photo: "/uploads/2024/08/thumbnail.jpg",
          },
          {
            name: "Shri Rajyavardhan Rathore",
            role: "Minister",
            org: "Government of Rajasthan",
            photo: "/uploads/2024/08/thumbnail-2.webp",
          },
          {
            name: "Ms. Pooja Bedi",
            role: "Actor & Changemaker",
            org: "Film Festival Gala Night",
            photo: "/uploads/2024/08/thumbnail.png",
          },
        ]}
        footnote={
          <>
            Urban Adda 2025 featured over 100 speakers across 30 sessions.
            Above are the key ministerial and celebrity voices — explore
            the full lineup on the official event site.
          </>
        }
      />

      <EventInsights
        eyebrow="Learnings from the floor"
        heading={<>Key Insights & Learnings</>}
        insights={[
          {
            title: "Design Cities for People, Not Cars",
            body: (
              <>
                A fundamental question drove the dialogue: what would
                cities look like if designed for people instead of cars?
                Speakers pushed a vision of{" "}
                <strong>human-centric cities</strong> — where walkability,
                cycling and safe streets are the default, not the
                exception.
              </>
            ),
          },
          {
            title: "Water Security Is an Urban Emergency",
            body: (
              <>
                The &quot;Imagining Water Secure Cities&quot; panel made
                it clear that{" "}
                <strong>
                  a day without water is a harsh reality for millions
                </strong>
                . As cities expand, water can no longer be an afterthought
                — it must be designed into urban planning from the start.
              </>
            ),
          },
          {
            title: "Youth and Creativity Drive Change",
            body: (
              <>
                Urban Adda proved that policy alone does not move cities —{" "}
                <strong>young voices, film and public art do too</strong>.
                By blending Youth Adda, a film festival and creative
                exhibits with formal dialogue, the event turned awareness
                into shared momentum.
              </>
            ),
          },
        ]}
      />

      <EventGallery
        eyebrow="Event gallery"
        heading={<>Moments from Urban Adda 2025</>}
        photos={[
          { src: "/uploads/2024/08/ua1.jpeg", alt: "Urban Adda 2025 — image 1" },
          { src: "/uploads/2024/08/ua2.jpg", alt: "Urban Adda 2025 — image 2" },
          { src: "/uploads/2024/08/ua3.jpg", alt: "Urban Adda 2025 — image 3" },
          { src: "/uploads/2024/08/ua4.jpg", alt: "Urban Adda 2025 — image 4" },
        ]}
      />

      <EventOutcomes
        eyebrow="What the event achieved"
        heading={<>Outcomes & Next Steps</>}
        outcomes={[
          {
            title: "Active Mobility on the Agenda",
            body: "A Cyclothon of 100+ riders and a ministerial call for cycling reinforced active mobility as central to healthy, low-pollution cities.",
          },
          {
            title: "Urban Water Crisis Spotlighted",
            body: "The 'Imagining Water Secure Cities' panel placed India's urban water emergency firmly in the national urban-planning conversation.",
          },
          {
            title: "Youth Voices Amplified",
            body: "Youth Adda created a dedicated platform for young people to shape and lead conversations on the future of their cities.",
          },
          {
            title: "Cinema as a Climate Tool",
            body: "The Urban Adda Film Festival showcased short films on climate resilience, proving creative media's power to shift public mindset.",
          },
          {
            title: "Cross-Sector Dialogue Strengthened",
            body: "Government, civil society, corporates and citizens shared one platform — building momentum for continued collaboration.",
          },
          {
            title: "A Movement, Not Just an Event",
            body: "Urban Adda established itself as a recurring movement to reclaim the urban commons and restore joy in city living.",
          },
        ]}
      />

      <EventEngage
        eyebrow="Be part of the journey"
        heading={<>Who Should Engage</>}
        intro={
          <>
            Urban Adda brings together a deliberately diverse community —
            because building liveable cities demands it.
          </>
        }
        groups={[
          {
            title: "Policymakers & Government",
            body: "Officials and institutions shaping urban policy, mobility and water governance across cities.",
          },
          {
            title: "Urban Planners & Architects",
            body: "Professionals designing the streets, transit systems and public spaces of tomorrow's cities.",
          },
          {
            title: "Youth & Students",
            body: "Young changemakers ready to shape, question and lead the urban transformation agenda.",
          },
          {
            title: "Researchers & Academia",
            body: "Institutions working on mobility, climate, water and the science of liveable cities.",
          },
          {
            title: "Civil Society & Citizens",
            body: "NGOs, active citizens and community groups working to reclaim the urban commons.",
          },
          {
            title: "Artists & Storytellers",
            body: "Filmmakers, artists and creators using culture to reimagine the cities we live in.",
          },
        ]}
      />

      <EventClosingCta
        eyebrow="Continue the journey"
        heading={<>The Cities We Deserve Are Ours to Build</>}
        body={
          <>
            Urban Adda 2025 reaffirmed that sustainable cities are not a
            distant ideal — they are built through dialogue, youth energy,
            creative expression and the everyday choices of citizens.
            Write to us at <strong>management@gurujal.org</strong> to
            explore future editions.
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
