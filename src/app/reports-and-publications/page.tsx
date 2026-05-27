import type { Metadata } from "next";
import Link from "next/link";
import { ReportsHero } from "@/components/reports/hero";
import { ReportsSectionNav } from "@/components/reports/section-nav";
import { AnnualReports } from "@/components/reports/annual-reports";
import { Publications } from "@/components/reports/publications";
import { Reveal } from "@/components/reveal";
import { liveUrl } from "@/lib/live-url";

export const metadata: Metadata = {
  title:
    "Reports & Publications — Water Wisdom: Research, Reports & Resources",
  description:
    "Annual reports, research publications and standard operating procedures from GuruJal — data-backed insights and replicable models for integrated water resource management.",
};

/**
 * /reports-and-publications — composed from the section components under
 * /components/reports. Annual reports link to PDFs in /uploads/, and the
 * four publications link to their dedicated MDX pages (still rendered via
 * the [slug] catch-all).
 */
export default function ReportsAndPublicationsPage() {
  return (
    <>
      <ReportsHero />
      <ReportsSectionNav />
      <Reveal><AnnualReports /></Reveal>
      <Reveal><Publications /></Reveal>

      {/* Closing CTA — invites partnerships around new research. */}
      <Reveal as="section" className="bg-white pb-12 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
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
                  Build with us
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Working on a related study?
                </h2>
                <p className="mt-4 max-w-xl text-base text-white/85">
                  We co-author research with universities, government
                  bodies and field practitioners. If your study advances
                  the science or practice of groundwater restoration,
                  we&apos;d love to hear from you.
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
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
                >
                  About GuruJal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
}
