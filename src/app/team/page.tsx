import type { Metadata } from "next";
import Link from "next/link";
import { TeamHero } from "@/components/team/hero";
import { TeamSectionNav } from "@/components/team/section-nav";
import {
  TeamLeadership,
  TeamTrustees,
  TeamAdvisors,
  TeamExecutive,
} from "@/components/team/team-sections";
import { liveUrl } from "@/lib/live-url";

export const metadata: Metadata = {
  title: "Our Team — Leadership, Trustees, Advisors & Executive Team",
  description:
    "The full GuruJal team — co-founders, trustees, advisory board and the executive team driving water restoration across India.",
};

/**
 * /team — composed from the section components in /components/team. This
 * explicit route takes precedence over the catch-all [slug] route, so the
 * editorial layout here is used instead of the raw MDX render of
 * content/pages/team.mdx.
 */
export default function TeamPage() {
  return (
    <>
      {/*
        Team is content-heavy (~46 portraits). We intentionally do NOT
        wrap the section components in <Reveal> here: the fade-in choreography
        keeps sections at opacity:0 until JS hydrates + IntersectionObserver
        fires, which in dev mode (large JS chunks + on-demand Next.js image
        optimization) feels like the page is stuck loading. Letting sections
        paint immediately is a better experience on a long roster page.
      */}
      <TeamHero />
      <TeamSectionNav />
      <TeamLeadership />
      <TeamTrustees />
      <TeamAdvisors />
      <TeamExecutive />

      {/* Closing CTA — invites readers to join the team or get in touch. */}
      <section className="bg-white pb-12 lg:pb-16">
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
                  Join the team
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Build a career that restores water.
                </h2>
                <p className="mt-4 max-w-xl text-base text-white/85">
                  We&apos;re always looking for people who care deeply about
                  groundwater, communities and ecological restoration —
                  fellows, field associates, designers, engineers and
                  policy nerds welcome.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <Link
                  href={liveUrl("/career")}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-orange hover:text-white"
                >
                  See open roles
                </Link>
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
      </section>
    </>
  );
}
