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
                  Connect with GuruJal
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Stay connected with our work.
                </h2>
                <p className="mt-4 max-w-xl text-base text-white/85">
                  Follow us on Facebook and Instagram for the latest from the
                  field — pond rejuvenations, eco-restoration progress, and
                  stories from the communities we work with.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <a
                  href="https://www.facebook.com/gurujal.gurugram/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow GuruJal on Facebook"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-orange hover:text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.77l-.44 2.91h-2.33V22c4.78-.75 8.43-4.91 8.43-9.93z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/gurujal_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow GuruJal on Instagram"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-orange hover:text-white"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
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
