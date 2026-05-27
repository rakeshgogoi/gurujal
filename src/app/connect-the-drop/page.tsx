import type { Metadata } from "next";
import { SolutionHero } from "@/components/solution-detail/hero";
import { ConnectTheDropSectionNav } from "@/components/solution-detail/section-navs";
import { SolutionCrisisBlock } from "@/components/solution-detail/crisis-block";
import { SolutionApproachGrid } from "@/components/solution-detail/approach-grid";
import { SolutionImpactStats } from "@/components/solution-detail/impact-stats";
import { SolutionCaseStudy } from "@/components/solution-detail/case-study";
import { SolutionClosingCta } from "@/components/solution-detail/closing-cta";

export const metadata: Metadata = {
  title: "Connect the Drops — Reconnecting People with Water",
  description:
    "Dialogues, workshops and immersive experiences that rebuild the relationship between people and water — one community at a time.",
};

function StewardshipBlock() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Our framing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Water stewardship starts not with tools, but with{" "}
            <span className="text-brand-teal-dark">trust</span>
          </h2>
          <div className="mt-6 space-y-4 text-left text-base leading-relaxed text-brand-muted sm:text-lg">
            <p>
              Water is a shared thread that weaves through every life,
              every landscape, every home. But somewhere along the way
              we&apos;ve grown detached from it. The crisis isn&apos;t
              just scarcity — it&apos;s a{" "}
              <strong>quiet erosion of our relationship with water</strong>.
            </p>
            <p>
              We create spaces — community dialogues, immersive
              workshops, storytelling and hands-on experiences — that
              meet people as companions, not facilitators. The aim is
              to make water visible in everyday decision-making, from
              employee volunteering to student initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ConnectTheDropPage() {
  return (
    <>
      <SolutionHero
        eyebrow="Solution · Connect the Drops"
        headlineBefore="Reconnecting people with"
        headlineAccent="water"
        headlineAfter=""
        lead={
          <>
            India is the world&apos;s biggest groundwater consumer — yet
            most of us never see how much we use. Through dialogues,
            workshops and immersive experiences, we rebuild the
            relationship between people and water, one community at a
            time.
          </>
        }
        primaryCta={{ label: "Our approach", href: "#approach" }}
        secondaryCta={{ label: "See impact", href: "#impact" }}
        backdrop="/uploads/2024/08/drops-scaled.jpg"
        iconSrc="/uploads/2026/05/logo-connect-the-drops.png"
        iconAlt="Connect the Drops"
        iconShape="square"
      />

      <ConnectTheDropSectionNav />

      <SolutionCrisisBlock
        eyebrow="The crisis"
        heading={
          <>
            India extracts <span className="text-brand-orange-dark">245 bcm</span>{" "}
            of groundwater every year
          </>
        }
        paragraphs={[
          <>
            India consumes more groundwater than any other country in
            the world. Nationally, that&apos;s just over{" "}
            <strong>55% of our annual recharge</strong> — a number that
            sounds reassuring on paper.
          </>,
          <>
            But that national average hides severe regional
            disparities. In many districts extraction dramatically
            exceeds recharge, water tables are falling fast, and
            community wells are going dry. Worse — most people have
            no idea what their water footprint is, or how to change it.
          </>,
          <>
            India is the world&apos;s biggest consumer of groundwater —{" "}
            <strong>124% more than China</strong>, and far more than
            the US. The numbers won&apos;t fix themselves; the
            relationship has to.
          </>,
        ]}
        stat={{
          label: "Annual groundwater extraction",
          value: "245 bcm",
          supporting: (
            <>
              The world&apos;s highest. We extract billions of cubic
              metres a year — without most people seeing where it goes.
            </>
          ),
        }}
      />

      <StewardshipBlock />

      <SolutionApproachGrid
        id="approach"
        eyebrow="Our approach"
        heading={<>Four ways we connect people with water</>}
        intro={
          <>
            Reconnection isn&apos;t a single tactic — it&apos;s a stack
            of experiences spanning learning, dialogue and action.
          </>
        }
        cards={[
          {
            eyebrow: "Experiential Learning",
            title: "Hands-on volunteering",
            body: "Immersive volunteering programs with employees, students and citizens — getting hands wet at restored ponds, wells and check-dams.",
            emoji: "🧤",
            tone: "teal",
          },
          {
            eyebrow: "Education & Training",
            title: "Water literacy at scale",
            body: "Sessions for school children, colleges, government officials, architects and builders — co-designed with think-tanks like CSE, TERI SAS and Development Alternatives.",
            emoji: "📚",
            tone: "green",
          },
          {
            eyebrow: "Awareness & Sensitisation",
            title: "Stories that travel",
            body: "From online talk series to community radio, our platforms bring together diverse voices to share lived stories and inspire action.",
            emoji: "📢",
            tone: "orange",
          },
          {
            eyebrow: "Action-Oriented Dialogues",
            title: "From conversation to plan",
            body: "Workshops with corporates, RWAs, builders, teachers and urban planners — translating dialogue into action plans for local governance bodies.",
            emoji: "💬",
            tone: "teal",
          },
        ]}
      />

      <SolutionImpactStats
        eyebrow="Our impact"
        heading={<>From talk to traction — across geographies</>}
        stats={[
          { value: "1,000+", label: "People Engaged" },
          { value: "100+", label: "Community Workshops" },
          { value: "2,000+", label: "Corporate Participants" },
          { value: "200+", label: "Interns & Volunteers" },
        ]}
      />

      <SolutionCaseStudy
        eyebrow="Case study"
        title="Jal Pe Charcha — Gurugram"
        blurb={
          <>
            A community dialogue series across 50+ villages in Haryana —
            storytelling, live demos and conservation guidance that
            translated into government action.
          </>
        }
        paragraphs={[
          <>
            <em>Jal Pe Charcha</em> is GuruJal&apos;s community
            dialogue series in Haryana — held in{" "}
            <strong>50+ villages</strong> across the state. Each
            session pairs storytelling with live demonstrations and
            practical conservation guidance grounded in the local
            context.
          </>,
          <>
            What started as conversations turned into action.
            Communities reached out to government officials to
            rejuvenate local ponds, turning a series of charchas into
            real-time change on the ground.
          </>,
        ]}
        pillars={[
          {
            label: "Format",
            body: "Open-circle community dialogues with stories, demos and Q&A.",
          },
          {
            label: "Reach",
            body: "50+ villages across Haryana, plus repeat workshops with schools and panchayats.",
          },
          {
            label: "Outcome",
            body: "Community-led requests for pond restoration — converting dialogue into governance action.",
          },
        ]}
        photo="/uploads/2025/06/charcha.jpg"
        bg="bg-brand-mist"
      />

      <SolutionClosingCta
        eyebrow="Bring Connect the Drops to your team"
        heading={<>Make water visible — in your office, school or village</>}
        body={
          <>
            We run workshops and dialogues for corporates, schools,
            RWAs and community groups across India. If you&apos;d like
            to bring a session to your geography or team, write to us.
          </>
        }
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "Back to solutions", href: "/solutions" }}
      />
    </>
  );
}
