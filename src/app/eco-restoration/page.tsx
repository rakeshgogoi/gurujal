import type { Metadata } from "next";
import { SolutionHero } from "@/components/solution-detail/hero";
import { EcoRestorationSectionNav } from "@/components/solution-detail/section-navs";
import { SolutionCrisisBlock } from "@/components/solution-detail/crisis-block";
import { SolutionApproachGrid } from "@/components/solution-detail/approach-grid";
import { SolutionImpactStats } from "@/components/solution-detail/impact-stats";
import { SolutionCaseStudy } from "@/components/solution-detail/case-study";
import { SolutionClosingCta } from "@/components/solution-detail/closing-cta";

export const metadata: Metadata = {
  title: "Eco Restoration — From Barren Lands to Thriving Ecosystems",
  description:
    "A science-led, community-rooted approach across land, water, waste, biodiversity, society and governance — turning degraded landscapes into community forests.",
};

export default function EcoRestorationPage() {
  return (
    <>
      <SolutionHero
        eyebrow="Solution · Eco Restoration"
        headlineBefore="From barren lands to"
        headlineAccent="thriving"
        headlineAfter="ecosystems"
        lead={
          <>
            A science-led, community-rooted approach across{" "}
            <strong>land, water, waste, biodiversity, society and
            governance</strong> — turning degraded landscapes into
            community forests that bring back water, jobs and
            biodiversity.
          </>
        }
        primaryCta={{ label: "Our approach", href: "#approach" }}
        secondaryCta={{ label: "See impact", href: "#impact" }}
        backdrop="/uploads/2024/08/eco-res.jpg"
        iconSrc="/uploads/2026/05/logo-eco-restoration.png"
        iconAlt="Eco Restoration"
        iconShape="wide"
      />

      <EcoRestorationSectionNav />

      <SolutionCrisisBlock
        eyebrow="The crisis"
        heading={
          <>
            India has lost <span className="text-brand-orange-dark">2.33M</span>{" "}
            hectares of tree cover since 2000
          </>
        }
        paragraphs={[
          <>
            Deforestation has eroded our soils, depleted water reserves,
            disrupted regional climates and weakened our carbon sinks.
            Communities that depend on forests have lost livelihoods.
          </>,
          <>
            As vegetation disappears, vulnerability to floods, landslides
            and heat increases — and the people closest to the land are
            hit first. Restoration is no longer optional; it&apos;s the
            keystone of climate resilience.
          </>,
        ]}
        stat={{
          label: "Tree cover lost since 2000",
          value: "2.33M ha",
          supporting: (
            <>
              We restore degraded landscapes back into community forests
              — and rebuild the relationship between people and the land
              in the process.
            </>
          ),
        }}
      />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Our approach
            </p>
            <h2
              id="approach"
              className="mt-3 scroll-mt-20 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl"
            >
              Rebuilding the bond between communities and their
              environment
            </h2>
            <div className="mt-6 space-y-4 text-left text-base leading-relaxed text-brand-muted sm:text-lg">
              <p>
                GuruJal restores landscapes using a blend of scientific
                expertise and community collaboration. Each project
                builds harmony among stakeholders — from local communities
                to national policymakers — converting barren land into
                forests while supporting India&apos;s carbon-sequestration
                commitments under the Paris Agreement.
              </p>
              <p>
                The work cuts flood risk, improves air quality, brings
                back biodiversity and creates eco-tourism livelihoods in
                the geographies we touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SolutionApproachGrid
        id="pillars"
        eyebrow="Six pillars"
        heading={<>The framework we restore across</>}
        intro={
          <>
            Eco restoration succeeds when it addresses every layer of
            the landscape — and the social systems wrapped around it.
          </>
        }
        cols={3}
        bg="bg-brand-mist"
        cards={[
          {
            title: "Land",
            body: "Soil regeneration, contouring and the physical re-shaping of degraded sites.",
            emoji: "🌍",
            tone: "orange",
          },
          {
            title: "Water",
            body: "Recharge structures, check-dams and pond revival to bring the water table back up.",
            emoji: "💧",
            tone: "teal",
          },
          {
            title: "Waste",
            body: "Removing legacy waste loads from the land and designing circular waste systems for the future.",
            emoji: "♻️",
            tone: "green",
          },
          {
            title: "Biodiversity",
            body: "Native plantation, biodiversity assessments and habitat scaffolding for return of species.",
            emoji: "🌿",
            tone: "green",
          },
          {
            title: "Society",
            body: "Community stewardship councils, livelihood pilots and eco-tourism design.",
            emoji: "👥",
            tone: "teal",
          },
          {
            title: "Governance",
            body: "Land tenure, ownership, monitoring frameworks and integration with state forestry & water policy.",
            emoji: "🏛️",
            tone: "orange",
          },
        ]}
      />

      <SolutionImpactStats
        eyebrow="Our impact"
        heading={<>Carbon, water, biodiversity — all moving together</>}
        stats={[
          { value: "100K+", label: "Trees Planted" },
          { value: "50K+", label: "Shrubs Planted" },
          { value: "3,000", unit: "ha", label: "Land Restored" },
          { value: "200+", label: "Nature Walks" },
        ]}
      />

      <SolutionCaseStudy
        eyebrow="Case study"
        title="Aravalli Eco-Restoration Project, Damdama"
        blurb={
          <>
            Launched by the Chief Minister of Haryana — a 3,000-hectare
            restoration partnership with the Haryana Water Resources
            Department, Forest Department, Tourism Department and EY
            Foundation.
          </>
        }
        paragraphs={[
          <>
            The Aravalli landscape around Damdama Lake was degraded and
            scarred. GuruJal, in partnership with multiple state
            departments and the EY Foundation, is restoring{" "}
            <strong>3,000 hectares</strong> allocated by the Chief
            Minister — combining forestry, hydrology, biodiversity and
            community stewardship.
          </>,
          <>
            The projected outcomes over 10 years are significant —{" "}
            <strong>28,000 tonnes of CO₂ sequestered</strong>,
            groundwater recharge equivalent to 150+ Olympic-sized
            swimming pools per year, and a new wave of green
            livelihoods.
          </>,
        ]}
        pillars={[
          {
            label: "Scale",
            body: "3,000 hectares of Aravalli landscape around Damdama Lake.",
          },
          {
            label: "Partners",
            body: "Haryana Water Resources, Forest & Tourism departments + EY Foundation.",
          },
          {
            label: "10-year outcome",
            body: "28,000 tCO₂ sequestered, 150+ Olympic-pool equivalent of yearly recharge, green jobs.",
          },
        ]}
        photo="/uploads/2024/08/eco-res.jpg"
        bg="bg-white"
      />

      <SolutionClosingCta
        eyebrow="Restore a landscape with us"
        heading={<>Bring eco restoration to your geography</>}
        body={
          <>
            We partner with governments, CSR teams and landowners to
            design and deliver large-scale restoration programmes. Write
            to us to scope a project for your landscape.
          </>
        }
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "Back to solutions", href: "/solutions" }}
      />
    </>
  );
}
