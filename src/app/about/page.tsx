import type { Metadata } from "next";
import Link from "next/link";
import { AboutHero } from "@/components/about/hero";
import { AboutSectionNav } from "@/components/about/section-nav";
import { VisionMission } from "@/components/about/vision-mission";
import { JourneyTimeline } from "@/components/about/journey-timeline";
import { Leadership } from "@/components/about/leadership";
import { Awards } from "@/components/about/awards";
import { AboutPartners } from "@/components/about/about-partners";
import { Reveal } from "@/components/reveal";
import { liveUrl } from "@/lib/live-url";

export const metadata: Metadata = {
  title: "About GuruJal — The Bridge Between Policy and People",
  description:
    "From a Special Purpose Vehicle for Gurugram District to an autonomous force for groundwater restoration — meet the people, journey, partners and recognitions behind GuruJal.",
};

/**
 * /about — composed from the section components in /components/about.
 *
 * This explicit route takes precedence over the catch-all [slug] route, so
 * the editorial layout here is used instead of the raw MDX render of
 * content/pages/about.mdx.
 */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutSectionNav />
      <Reveal><VisionMission /></Reveal>
      <Reveal><JourneyTimeline /></Reveal>
      <Reveal><Leadership /></Reveal>
      <Reveal><Awards /></Reveal>
      <Reveal><AboutPartners /></Reveal>

      {/* Closing CTA — mirrors the homepage closer so navigation feels
          continuous across the site. */}
      <Reveal as="section" className="bg-white pb-12 lg:pb-16">
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
                  Partner with GuruJal
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Build a water-secure India with us.
                </h2>
                <p className="mt-4 max-w-xl text-base text-white/85">
                  Whether you&apos;re a corporation looking to deepen your ESG
                  impact, a government body planning a watershed program, or a
                  community ready to revive a local pond — we&apos;d love to
                  hear from you.
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
