import Link from "next/link";

/**
 * Internship closing CTA — apply form + contact, from the
 * GuruJal_Internship_JDs working document ("To Apply: Fill this form" /
 * "We accept applications year-round for Internships, selection is
 * based on availability of the role").
 */

const APPLY_FORM = "https://forms.gle/qNuTk2PFGuP1m7Eb9";

export function InternshipClosingCta() {
  return (
    <section id="apply" className="bg-white pb-12 scroll-mt-20 lg:pb-16">
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
                Build a portfolio, not just a certificate.
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/85">
                We accept applications year-round for internships;
                selection is based on availability of the role. Pick a
                track above and apply through the form — for general
                questions, write to{" "}
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
