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
  title: "HydroMingle Delhi 2025 — Innovating for India's Water Future",
  description:
    "A one-day live innovation lab convening policymakers, technologists, researchers, entrepreneurs and CSR partners — held at India Habitat Centre, New Delhi.",
};

export default function HydroMinglePage() {
  return (
    <>
      <EventDetailHero
        eyebrow="HydroMingle Delhi 2025"
        dateLine="10th December 2025 · India Habitat Centre, New Delhi"
        headlineBefore="Innovating for India's"
        headlineAccent="Water"
        headlineAfter="Future"
        lead="Connecting Systems, Science & Society — a one-day live innovation lab convening policymakers, technologists, researchers, entrepreneurs and CSR partners."
        primaryCta={{ label: "Read Event Report", href: "#overview" }}
        secondaryCta={{ label: "View Gallery", href: "#gallery" }}
        facts={[
          { label: "Date", value: "10 Dec 2025" },
          { label: "Venue", value: "Tamarind Hall, IHC" },
          { label: "Timings", value: "10:00 AM – 5:30 PM" },
          { label: "Edition", value: "Special Edition" },
        ]}
        backdrop="/uploads/2024/08/hydromingle2025.jpg"
      />

      <EventOverview
        eyebrow="Event Overview"
        headline={
          <>
            HydroMingle 2025 — Innovating for India&apos;s Water Future
          </>
        }
        paragraphs={[
          <>
            HydroMingle 2025 was conceived as a{" "}
            <strong>live innovation and collaboration platform</strong> to
            accelerate scalable solutions for India&apos;s growing water
            challenges. The one-day convening brought together government
            leaders, water-tech innovators, corporates, researchers and
            on-ground practitioners.
          </>,
          <>
            Jointly organised by{" "}
            <strong>GuruJal (Abhipsa Foundation)</strong> and{" "}
            <strong>FluxGen Technologies</strong>, this Special Edition —
            themed <em>&quot;Waves of Water Technology — Connecting
            Systems, Science & Society&quot;</em> — was held on 10 December
            2025 at Tamarind Hall, India Habitat Centre, New Delhi.
          </>,
          <>
            Designed as more than a conference, HydroMingle functioned as
            an <strong>open innovation lab</strong>, enabling dialogue,
            pitching and collaboration across the private sector,
            government, academia and grassroots communities.
          </>,
          <>
            The event was partnered by <strong>NITI Aayog</strong>,{" "}
            <strong>National Water Mission</strong>,{" "}
            <strong>AIC–IIT Delhi</strong>, <strong>TERI SAS</strong>,{" "}
            <strong>Water Digest</strong> and{" "}
            <strong>Global Shapers Community – Gurugram Hub</strong>.
          </>,
        ]}
      />

      <EventPartners
        partners={[
          { name: "FluxGen", src: "/uploads/2024/08/fluxgen.png" },
          { name: "NITI Aayog", src: "/uploads/2024/08/niti-aayog.png" },
          {
            name: "National Water Mission",
            src: "/uploads/2024/08/national-water-mission.png",
          },
          { name: "AIC IIT Delhi", src: "/uploads/2024/08/AIC-IITD.png" },
          { name: "TERI SAS", src: "/uploads/2024/08/TERI-SAS-logo.png" },
          { name: "Water Digest", src: "/uploads/2024/08/Water-Digest.jpg" },
          {
            name: "Global Shapers",
            src: "/uploads/2024/08/global-shapers.jpeg",
          },
        ]}
      />

      <EventObjectives
        eyebrow="Context & Purpose"
        heading={<>Why HydroMingle Was Needed</>}
        intro={
          <>
            India&apos;s water crisis is no longer a future concern — it is
            a present reality shaped by climate stress, groundwater
            depletion, rapid urbanisation and fragmented governance. While
            innovation in water technology is advancing, solutions often
            remain siloed from policy, financing and community realities.
            HydroMingle was created to bridge exactly these gaps.
          </>
        }
        bullets={[
          "Bridge gaps between innovation and implementation",
          "Enable dialogue between policymakers and solution providers",
          "Encourage collaboration beyond pilot projects",
          "Align technological innovation with governance and community needs",
          "Connect science, systems and society in one shared space",
        ]}
        objectivesEyebrow="What We Set Out To Do"
        objectivesHeading={<>Objectives of the Event</>}
        objectives={[
          "Showcase emerging water innovations and nature-based solutions from across India.",
          "Connect innovators with policymakers, CSR leaders and on-ground practitioners.",
          "Explore financing pathways — CSR, blended finance and impact investment — for scalable water solutions.",
          "Integrate data, technology and governance frameworks for informed decision-making.",
          "Foster cross-sector collaboration for long-term water resilience across urban and peri-urban India.",
          "Co-design replicable and community-aligned solutions that can scale from pilot to policy.",
        ]}
      />

      <EventSessions
        id="themes"
        eyebrow="Innovation Streams"
        heading={<>Key Themes & Sessions</>}
        sessions={[
          {
            badge: "Session 2 · 10:30–11:30 AM",
            title: "BioHydro Systems — Nature-Based Innovation",
            body: "Exploring ecological and decentralised water solutions rooted in natural systems. From ecological recharge models to nature-based urban water management, this session examined how local ecosystems can be harnessed for long-term water resilience.",
          },
          {
            badge: "Session 3 · 11:45 AM–12:45 PM",
            title: "HydroIntelligence — Tech-Driven Solutions",
            body: "Leveraging AI, data analytics and digital tools for water monitoring and management. Discussions centred on sensor-based monitoring, AI-driven recharge models and integrated data platforms supporting ground-level decision-making.",
          },
          {
            badge: "Session 4 · 1:30–2:30 PM",
            title: "HydroImpact — Financing Water Innovation",
            body: "Understanding CSR, blended finance and impact investment perspectives in advancing water solutions. Panelists explored how institutional financing can move beyond pilots toward sustained, scalable models with measurable community outcomes.",
          },
          {
            badge: "Session 5 · 2:30–3:30 PM",
            title: "HydroPolicy — Governance & Data Integration",
            body: "Aligning innovation with policy frameworks and institutional decision-making. The session explored how governance structures, district-level data systems and inter-agency coordination can be strengthened to mainstream water innovation at scale.",
          },
          {
            badge: "Session 6 · 3:45–4:45 PM",
            title: "Converging Currents — Open Collaboration Forum",
            body: "An interactive space for open dialogue between innovators, institutions and practitioners — identifying cross-cutting opportunities, shared challenges and concrete next steps for collaboration.",
          },
        ]}
      />

      <EventSpeakers
        eyebrow="Speakers & Contributors"
        heading={<>Voices at HydroMingle 2025</>}
        speakers={[
          {
            name: "Ms. Shubhi Kesarwani",
            role: "Co-founder & CEO",
            org: "GuruJal",
            photo: "/uploads/2024/08/shubhi.jpeg",
          },
          {
            name: "Shri. Rao Inderjit Singh",
            role: "Union Minister",
            org: "Ministry of Planning",
            photo: "/uploads/2024/08/inderjit.jpeg",
          },
          {
            name: "Ms. Archana Varma",
            role: "Mission Director",
            org: "National Water Mission",
            photo: "/uploads/2024/08/archana.jpeg",
          },
          {
            name: "Dr. Fawzia Tarannum",
            role: "Strategic Advisor",
            org: "GuruJal",
            photo: "/uploads/2024/08/fawzia.jpeg",
          },
          {
            name: "Mr. Ganesh Shankar",
            role: "Founder & CEO",
            org: "FluxGen",
            photo: "/uploads/2024/08/ganesh.jpeg",
          },
          {
            name: "Dr. Ranjana Ray Chaudhuri",
            role: "Professor",
            org: "TERI SAS",
            photo: "/uploads/2024/08/ranjana.jpeg",
          },
          {
            name: "Mr. Ajith Radhakrishnan",
            role: "Senior Specialist",
            org: "World Bank",
            photo: "/uploads/2024/08/ajith.jpeg",
          },
          {
            name: "Ms. Deepali Upadhayay",
            role: "Program Lead",
            org: "NITI Aayog",
            photo: "/uploads/2024/08/deepali.jpeg",
          },
          {
            name: "Ms. Anupama Madhok",
            role: "Director",
            org: "Water Digest",
            photo: "/uploads/2024/08/anupama.jpeg",
          },
          {
            name: "Ms. Shilpa Nischal",
            role: "Executive Director",
            org: "CII Water Institute",
            photo: "/uploads/2024/08/shilpa.jpeg",
          },
          {
            name: "Ms. Zeenat Niazi",
            role: "Advisor",
            org: "Climate & Circular Economy",
            photo: "/uploads/2024/08/zeenat.jpeg",
          },
          {
            name: "Ms. Susmita Sengupta",
            role: "Programme Manager",
            org: "CSE",
            photo: "/uploads/2024/08/susmita.jpeg",
          },
          {
            name: "Mr. Alok Lall",
            photo: "/uploads/2024/08/alok-lall.jpeg",
          },
          {
            name: "Mr. Alok",
            photo: "/uploads/2024/08/alok.jpeg",
          },
          {
            name: "Mr. Akash Deep",
            photo: "/uploads/2024/08/akash-deep.jpeg",
          },
        ]}
      />

      <EventInsights
        eyebrow="Learnings from the Floor"
        heading={<>Key Insights & Learnings</>}
        insights={[
          {
            title: "Innovation Scales When It Is Relevant",
            body: (
              <>
                HydroMingle showcased solutions from mobile wastewater
                treatment to AI-driven platforms. What stood out was not
                novelty alone, but{" "}
                <strong>contextual relevance</strong>. Innovation moves
                forward when placed in proximity to funding, partnerships
                and implementation pathways.
              </>
            ),
          },
          {
            title: "Water Security Is a Systems Challenge",
            body: (
              <>
                A shared understanding emerged:{" "}
                <strong>water cannot be addressed in isolation</strong>.
                It is inseparable from food systems, energy planning,
                governance capacity and financial structures.
                District-level planning and institutional readiness are
                conditions under which solutions endure.
              </>
            ),
          },
          {
            title: "Bridging Technology and Traditional Wisdom",
            body: (
              <>
                India does not need to choose between traditional water
                knowledge and modern technology — it needs to{" "}
                <strong>reconnect them</strong>. The most promising
                solutions treated community knowledge as infrastructure,
                not an afterthought.
              </>
            ),
          },
        ]}
      />

      <EventGallery
        eyebrow="Event Gallery"
        heading={<>Moments from HydroMingle 2025</>}
        photos={[
          { src: "/uploads/2024/08/DSC09433-scaled.jpg", alt: "HydroMingle Image 1" },
          { src: "/uploads/2024/08/DSC09376-scaled.jpg", alt: "HydroMingle Image 2" },
          { src: "/uploads/2024/08/DSC09245-scaled.jpg", alt: "HydroMingle Image 3" },
          { src: "/uploads/2024/08/DSC09261-scaled.jpg", alt: "HydroMingle Image 4" },
          { src: "/uploads/2024/08/DSC09144-scaled.jpg", alt: "HydroMingle Image 5" },
          { src: "/uploads/2024/08/DSC09118-scaled.jpg", alt: "HydroMingle Image 6" },
          { src: "/uploads/2024/08/DSC09095-scaled.jpg", alt: "HydroMingle Image 7" },
          { src: "/uploads/2024/08/DSC09052-scaled.jpg", alt: "HydroMingle Image 8" },
        ]}
      />

      <EventOutcomes
        eyebrow="What the Event Achieved"
        heading={<>Outcomes & Next Steps</>}
        outcomes={[
          {
            title: "Collaborative Ecosystem Strengthened",
            body: "New partnerships formed across startups, corporates, government institutions and foundations to accelerate water innovation.",
          },
          {
            title: "Scalable Solutions Identified",
            body: "Replicable water technologies and community models identified for urban and peri-urban adoption.",
          },
          {
            title: "Regional Water Innovation Cluster",
            body: "A HydroInnovation Cluster roadmap discussed — integrating research, finance and implementation pathways for Delhi-NCR.",
          },
          {
            title: "Knowledge Exchange & Documentation",
            body: "Case studies, insights and policy recommendations captured for stakeholders and government agencies.",
          },
          {
            title: "Strengthened Policy Dialogue",
            body: "Increased visibility for context-driven water innovations among senior government representatives.",
          },
          {
            title: "Multi-Stakeholder Engagement",
            body: "Reinforced the need for integrated, multi-stakeholder approaches. HydroMingle was a starting point for continued engagement.",
          },
        ]}
      />

      <EventEngage
        eyebrow="Be Part of the Journey"
        heading={<>Who Should Engage</>}
        intro={
          <>
            HydroMingle brings together a deliberately diverse community —
            because water security demands it.
          </>
        }
        groups={[
          {
            title: "Policymakers & Government",
            body: "Institutions and officials shaping national and state-level water policy and governance frameworks.",
          },
          {
            title: "CSR & Corporate Sustainability",
            body: "Corporate teams exploring CSR investment, blended finance and impact-aligned water initiatives.",
          },
          {
            title: "Water-Tech Startups",
            body: "Entrepreneurs developing scalable, community-relevant solutions for India's water challenges.",
          },
          {
            title: "Researchers & Academia",
            body: "Institutions and researchers working on water science, hydrology, ecology and policy.",
          },
          {
            title: "Civil Society & Practitioners",
            body: "NGOs and on-ground practitioners working on water restoration and community resilience.",
          },
          {
            title: "International Collaborators",
            body: "Bilateral organisations and international bodies exploring partnerships for water innovation in South Asia.",
          },
        ]}
      />

      <EventClosingCta
        eyebrow="Continue the Journey"
        heading={<>Water Security Is an Opportunity, Not Just a Crisis</>}
        body={
          <>
            HydroMingle reaffirmed that water security is not only about
            scarcity — it is an opportunity to align communities,
            institutions, innovation and implementation. To explore
            collaboration opportunities or future editions, write to us at{" "}
            <strong>management@gurujal.org</strong>.
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
