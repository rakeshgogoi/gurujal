import type { Metadata } from "next";
import Link from "next/link";
import { SolutionsHero } from "@/components/solutions/hero";
import { SolutionsSectionNav } from "@/components/solutions/section-nav";
import { TheGuruJalWay } from "@/components/solutions/the-guru-jal-way";
import { PrimaryInterventions } from "@/components/solutions/primary-interventions";
import { Reveal } from "@/components/reveal";
import { liveUrl } from "@/lib/live-url";

export const metadata: Metadata = {
  title: "Our Solutions — Integrated, context-specific water restoration",
  description:
    "Water systems are connected. GuruJal's six primary interventions — Support a Pond, Connect the Drops, Water Proofing, We for Water, Eco Restoration and ESG Advisory — work in concert across communities, geographies and partners.",
};

/**
 * /solutions — overview page composed from the section components in
 * /components/solutions. The six individual solution pages still live on
 * gurujal.org for now; "Find out more" links resolve through liveUrl().
 */
export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionsSectionNav />
      <Reveal><TheGuruJalWay /></Reveal>
      <Reveal><PrimaryInterventions /></Reveal>

      {/* Closing CTA — invites partnerships and donors. */}
      <Reveal as="section" id="partner" className="bg-white pb-12 lg:pb-16 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-teal via-brand-accent to-brand-primary px-8 py-12 sm:px-12 sm:py-14 lg:px-16">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl"
            />
            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                  Partner with us
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Bring an integrated water program to your geography.
                </h2>
                <p className="mt-4 max-w-xl text-base text-white/85">
                  Whether you&apos;re a corporation aligning CSR/ESG capital,
                  a government body planning a watershed program, or a
                  community ready to revive a local pond — we&apos;ll design
                  the intervention with you, end to end.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <Link
                  href={liveUrl("/contact")}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-orange hover:text-white"
                >
                  Get in touch
                </Link>
                <Link
                  href={liveUrl("/support-a-pond")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
                >
                  Support a pond
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
