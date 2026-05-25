import { Hero } from "@/components/home/hero";
import { WaterCrisisIntro } from "@/components/home/water-crisis";
import { SixRApproach } from "@/components/home/six-r-approach";
import { ImpactStats } from "@/components/home/impact-stats";
import { Testimonials } from "@/components/home/testimonials";
import { Partners } from "@/components/home/partners";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { NewsAndNotice } from "@/components/home/news-and-notice";
import Link from "next/link";

/**
 * Homepage — composed from section components in /components/home.
 *
 * Section order mirrors gurujal.org:
 *  1. Hero (rotating headline over hero image)
 *  2. Water crisis intro + supply/demand stat
 *  3. 6R Approach (Resource / Reduce / Restore / Revive / Rethink / Realign)
 *  4. Impact counters
 *  5. Testimonials carousel
 *  6. Partners & collaborators
 *  7. Closing LinkedIn / contact CTA
 */
export default function Home() {
  return (
    <>
      <Hero />
      <WaterCrisisIntro />
      <SixRApproach />
      <ImpactStats />
      <NewsAndNotice />
      <UpcomingEvents />
      <Testimonials />
      <Partners />

      {/* Closing CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-brand-deep px-8 py-14 sm:px-12 lg:px-16">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-accent/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
                  Follow GuruJal · 1,411 followers
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Stay connected with our work.
                </h2>
                <p className="mt-4 max-w-xl text-base text-white/80">
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
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-orange hover:text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                  </svg>
                  Follow on LinkedIn
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-deep"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
