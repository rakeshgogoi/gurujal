import { Hero } from "@/components/home/hero";
import { HomeSectionNav } from "@/components/home/section-nav";
import { WaterCrisisIntro } from "@/components/home/water-crisis";
import { SixRApproach } from "@/components/home/six-r-approach";
import { ImpactStats } from "@/components/home/impact-stats";
import { SdgAlignment } from "@/components/home/sdg-alignment";
import { Testimonials } from "@/components/home/testimonials";
import { Partners } from "@/components/home/partners";
import { Stories } from "@/components/home/stories";
import { LinkedInFeed } from "@/components/home/linkedin-feed";
import { Reveal } from "@/components/reveal";
import Link from "next/link";
import { liveUrl } from "@/lib/live-url";

/**
 * Homepage — composed from section components in /components/home.
 *
 * Section order mirrors gurujal.org with the LinkedIn feed inserted right
 * before the closing CTA so the CTA's "Follow on LinkedIn" call has
 * context.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <HomeSectionNav />
      <Reveal><WaterCrisisIntro /></Reveal>
      <Reveal><SixRApproach /></Reveal>
      <Reveal><ImpactStats /></Reveal>
      <Reveal><SdgAlignment /></Reveal>
      <Reveal><Stories /></Reveal>
      {/* Hidden for now — may be re-enabled later.
          <Reveal><NewsAndNotice /></Reveal>
          <Reveal><RecentEvents /></Reveal> */}
      <Reveal><Testimonials /></Reveal>
      <Reveal><Partners /></Reveal>
      <Reveal><LinkedInFeed /></Reveal>

      {/* Closing CTA — bright teal-cyan gradient that contrasts the dark
          brand-deep footer below, with reduced padding so the page
          doesn't drag into a long empty band before the footer. */}
      <Reveal as="section" className="bg-white pb-12 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-teal via-brand-accent to-brand-primary px-8 py-12 sm:px-12 sm:py-14 lg:px-16">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" aria-hidden />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl" aria-hidden />
            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
                  Follow GuruJal · 1,411 followers
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Stay connected with our work.
                </h2>
                <p className="mt-4 max-w-xl text-base text-white/85">
                  Follow us on LinkedIn for the latest updates from the field —
                  pond rejuvenations, eco-restoration progress, and stories
                  from the communities we work with.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <a
                  href="https://www.linkedin.com/company/gurujal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-orange hover:text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                  Follow on LinkedIn
                </a>
                <Link
                  href={liveUrl("/contact")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
