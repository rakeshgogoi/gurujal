import type { Metadata } from "next";
import Link from "next/link";
import { CareerHero } from "@/components/career/hero";
import { WhyGrow } from "@/components/career/why-grow";
import { OpenPositions } from "@/components/career/positions";

export const metadata: Metadata = {
  title: "Careers at GuruJal — Build a Career That Restores Water",
  description:
    "Join GuruJal to drive evidence-based change in water conservation, community engagement, nature-based solutions and technology. Current openings in Gurugram.",
};

const APPLY_FORM = "https://forms.gle/obmREQzpeTe3dirg9";

function DiversityStrip() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <span
              aria-hidden
              className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange-dark ring-1 ring-brand-orange/30"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
              </svg>
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-teal">
                Diversity & Inclusion
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-brand-ink sm:text-3xl">
                GuruJal welcomes applicants from all backgrounds.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-muted">
                We are committed to an inclusive hiring process and a
                workplace where everyone — regardless of gender, caste,
                religion or ability — is heard, supported and given the
                space to grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCta() {
  return (
    <section className="bg-white pb-12 lg:pb-16">
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
                Ready to apply?
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Build a career that restores water.
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/85">
                Pick a role above, send us your application through the
                form, and we&apos;ll be in touch. For general questions
                about working at GuruJal, write to{" "}
                <strong>communications@gurujal.org</strong>.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <a
                href={APPLY_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-orange hover:text-white"
              >
                Apply now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CareerPage() {
  return (
    <>
      <CareerHero />
      <WhyGrow />
      <OpenPositions />
      <DiversityStrip />
      <ClosingCta />
    </>
  );
}
