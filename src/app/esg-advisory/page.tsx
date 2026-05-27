import type { Metadata } from "next";
import { SolutionHero } from "@/components/solution-detail/hero";
import { EsgAdvisorySectionNav } from "@/components/solution-detail/section-navs";
import { SolutionApproachGrid } from "@/components/solution-detail/approach-grid";
import { SolutionCaseStudy } from "@/components/solution-detail/case-study";
import { SolutionClosingCta } from "@/components/solution-detail/closing-cta";

export const metadata: Metadata = {
  title:
    "ESG Advisory — Practical sustainability for Indian businesses",
  description:
    "From intent to action — GuruJal helps companies translate sustainability commitments into ground-level systems, aligned to GRI, SASB, SBTi, SEBI-BRSR, TCFD and CDP.",
};

/* ============================================================
 * 5D process — Discover / Diagnose / Design / Do / Deepen.
 * ============================================================ */

const fiveD: { letter: string; title: string; body: string; tone: "teal" | "green" | "orange" }[] = [
  {
    letter: "01",
    title: "Discover",
    body: "We listen and understand where you are and what matters most to your business.",
    tone: "teal",
  },
  {
    letter: "02",
    title: "Diagnose",
    body: "We conduct audits — carbon, water, waste, supply chain — and map your baseline.",
    tone: "green",
  },
  {
    letter: "03",
    title: "Design",
    body: "We build custom ESG roadmaps that align with GRI, SASB, SBTi and local mandates.",
    tone: "orange",
  },
  {
    letter: "04",
    title: "Do",
    body: "We help implement the work — install systems, train teams, activate suppliers, set up reporting.",
    tone: "teal",
  },
  {
    letter: "05",
    title: "Deepen",
    body: "We build your internal capacity through tools, trainings and SOPs so your teams can lead from within.",
    tone: "green",
  },
];

const toneNumber: Record<"teal" | "green" | "orange", string> = {
  teal: "text-brand-teal-dark",
  green: "text-brand-green-dark",
  orange: "text-brand-orange-dark",
};

function FiveDProcess() {
  return (
    <section id="process" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            How we work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            The GuruJal ESG process —{" "}
            <span className="text-brand-teal-dark">five Ds</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            From listening to implementation to long-term ownership —
            five repeatable stages that turn intent into measurable
            outcomes.
          </p>
        </div>

        <ol className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {fiveD.map((d) => (
            <li
              key={d.title}
              className="flex flex-col rounded-3xl bg-brand-mist p-6 ring-1 ring-brand-soft/70"
            >
              <span
                className={`text-3xl font-extrabold tracking-tight ${toneNumber[d.tone]}`}
              >
                {d.letter}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-brand-ink">
                {d.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                {d.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
 * Frameworks strip — list of the standards we align to.
 * ============================================================ */

function FrameworksStrip() {
  const frameworks = [
    { name: "GRI", full: "Global Reporting Initiative" },
    { name: "SASB", full: "Sustainability Accounting Standards Board" },
    { name: "SBTi", full: "Science Based Targets initiative" },
    { name: "SEBI-BRSR", full: "Business Responsibility & Sustainability Report (India)" },
    { name: "TCFD", full: "Task Force on Climate-related Financial Disclosures" },
    { name: "CDP", full: "Carbon Disclosure Project" },
  ];

  return (
    <section id="frameworks" className="bg-brand-deep text-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal-bright">
            Framework alignment
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Aligned with every standard that matters
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            Our roadmaps and reports map directly to the global and
            India-specific frameworks regulators and investors expect.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {frameworks.map((f) => (
            <li
              key={f.name}
              className="rounded-2xl bg-white/[0.06] px-5 py-6 text-center ring-1 ring-white/15 backdrop-blur"
            >
              <div className="text-2xl font-bold tracking-tight text-brand-teal-bright sm:text-3xl">
                {f.name}
              </div>
              <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/75 sm:text-xs">
                {f.full}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ============================================================
 * Reporting block — 4 components on the path from data to report.
 * ============================================================ */

function ReportingBlock() {
  const items = [
    {
      title: "Data Collection",
      body: "Identify and structure ESG data for compliance with reporting frameworks.",
    },
    {
      title: "Framework Alignment",
      body: "Ensure adherence to GRI, SASB, CDP, SEBI-BRSR and other regulatory requirements.",
    },
    {
      title: "Report Development",
      body: "Craft clear, compelling and accurate sustainability reports.",
    },
    {
      title: "Assurance & Verification",
      body: "Third-party verification readiness so your report stands up to scrutiny.",
    },
  ];

  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Sustainability reporting
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            From data to disclosure
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            We build the full reporting chain so your annual disclosure
            is investor-ready, regulator-ready and clear to your own
            teams.
          </p>
        </div>

        <ol className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <li
              key={it.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brand-soft/80"
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange-dark">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-brand-ink">
                {it.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {it.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
 * Page
 * ============================================================ */

export default function EsgAdvisoryPage() {
  return (
    <>
      <SolutionHero
        eyebrow="Solution · ESG Advisory"
        headlineBefore="Sustainability is a"
        headlineAccent="priority"
        headlineAfter="— and we make it doable"
        lead={
          <>
            Regulations are shifting, investors are watching and global
            brands expect transparency. We help Indian businesses move
            from intent to action — through{" "}
            <strong>practical, ground-level systems</strong> rather than
            report-only compliance.
          </>
        }
        primaryCta={{ label: "Our offerings", href: "#offerings" }}
        secondaryCta={{ label: "ESG process", href: "#process" }}
        backdrop="/uploads/2025/06/esg.jpg"
        iconSrc="/uploads/2026/05/logo-esg-advisory.jpg"
        iconAlt="ESG Advisory"
        iconShape="wide"
      />

      <EsgAdvisorySectionNav />

      <SolutionApproachGrid
        id="offerings"
        eyebrow="Carbon & climate offerings"
        heading={<>Five things we routinely take off your plate</>}
        intro={
          <>
            Stocks of sustainable companies tend to significantly
            outperform their less-sustainable counterparts. The
            following is how we help you get there — measured, audited
            and reported.
          </>
        }
        cols={3}
        bg="bg-white"
        cards={[
          {
            eyebrow: "Carbon & Climate",
            title: "Carbon Neutrality & Decarbonization Roadmaps",
            body: "Strategic plans to reduce carbon emissions and achieve carbon neutrality.",
            emoji: "♻️",
            tone: "green",
          },
          {
            eyebrow: "Water",
            title: "Water Neutrality & Restoration Projects",
            body: "Innovative solutions for restoring water ecosystems and achieving water neutrality.",
            emoji: "💧",
            tone: "teal",
          },
          {
            eyebrow: "Biodiversity",
            title: "Eco-Restoration & Biodiversity Impact",
            body: "Projects aimed at restoring ecosystems and preserving biodiversity.",
            emoji: "🌿",
            tone: "green",
          },
          {
            eyebrow: "Strategy",
            title: "Reduction Strategy Development",
            body: "Set science-based targets (SBTs) and a roadmap to net-zero.",
            emoji: "📉",
            tone: "orange",
          },
          {
            eyebrow: "Implementation",
            title: "Solution Implementation",
            body: "Renewable energy integration, carbon offsetting and energy-efficiency initiatives.",
            emoji: "⚡",
            tone: "teal",
          },
        ]}
      />

      <FiveDProcess />

      <ReportingBlock />

      <SolutionApproachGrid
        id="solutions"
        eyebrow="Solutions menu"
        heading={<>Comprehensive ESG solutions</>}
        intro={
          <>
            Pick the workstreams that match your organisation&apos;s
            stage — from a one-off carbon audit to a full multi-year
            ESG programme.
          </>
        }
        cols={3}
        bg="bg-white"
        cards={[
          {
            title: "Climate & Carbon Emission",
            body: "GHG inventories, net-zero roadmaps, energy efficiency and renewable integration — aligned to SBTi.",
            emoji: "🌫️",
            tone: "green",
          },
          {
            title: "ESG Risk & Compliance",
            body: "Operational & supply-chain risk assessments using SEBI-BRSR, GRI, SASB and CDP frameworks.",
            emoji: "🛡️",
            tone: "teal",
          },
          {
            title: "ESG Training & Capacity Building",
            body: "Leadership and team training programmes — foundational ESG concepts through toolkit implementation.",
            emoji: "🎓",
            tone: "orange",
          },
          {
            title: "Sustainable Supply Chain",
            body: "Supplier mapping, scorecards and traceability systems for compliant, circular value chains.",
            emoji: "🔗",
            tone: "green",
          },
          {
            title: "ESG Strategy & Advisory",
            body: "Co-created strategies rooted in business reality — aligned with global standards and built for implementation.",
            emoji: "🧭",
            tone: "teal",
          },
          {
            title: "Sustainability Reporting",
            body: "Data-to-report aligned with GRI, SASB and SEBI-BRSR — materiality through stakeholder disclosure.",
            emoji: "📊",
            tone: "orange",
          },
        ]}
      />

      <SolutionCaseStudy
        eyebrow="Case study"
        title="Pearl Global — net-zero & water-positive by 2045"
        blurb={
          <>
            A fashion manufacturer with 7+ factories in India — taking
            its first major step from intent to operational ESG with
            GuruJal.
          </>
        }
        paragraphs={[
          <>
            Pearl Global committed to net-zero and water-positive
            operations by 2045. We started with the data — built their
            first <strong>GRI-based sustainability report</strong> and
            mapped a carbon reduction roadmap aligned with SBTi
            targeting a <strong>40% GHG reduction by 2030</strong>.
          </>,
          <>
            Implementation followed: a <strong>1 MW renewable energy</strong>{" "}
            plan, water-offset strategy (ETP/STP upgrades, rainwater
            harvesting, source recharge) and ESG trainings across 10+
            internal teams. Within a year recycled-water usage was
            up significantly, per-garment energy efficiency improved,
            and progress dashboards were live across factory and
            leadership levels.
          </>,
        ]}
        pillars={[
          {
            label: "Client",
            body: "Pearl Global — 7+ factories in India.",
          },
          {
            label: "Targets",
            body: "Net-zero + water-positive by 2045; 40% GHG reduction by 2030.",
          },
          {
            label: "Year-1 outcome",
            body: "First GRI report, 1 MW RE plan, factory-wide dashboards, ESG capacity in 10+ teams.",
          },
        ]}
        photo="/uploads/2025/06/esg.jpg"
        bg="bg-brand-mist"
      />

      <FrameworksStrip />

      <SolutionClosingCta
        eyebrow="Start your ESG journey"
        heading={<>From intent to net-zero — together</>}
        body={
          <>
            We work across India with corporates of every size — from
            single-factory operations to multi-site groups. Get in
            touch to scope an ESG engagement for your business.
          </>
        }
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "Back to solutions", href: "/solutions" }}
      />
    </>
  );
}
