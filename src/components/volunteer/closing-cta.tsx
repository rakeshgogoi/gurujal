/**
 * Volunteer closing CTA — contact details from the GuruJal_Volunteers
 * document (careers@gurujal.org · +91 9311411998).
 */
export function VolunteerClosingCta() {
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
                Ready to get started?
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Skill. Act. Lead. Restore.
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/85">
                Write to us with the track you&apos;re interested in and
                your college name, and the GuruJal team will get you
                started.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <a
                href="mailto:careers@gurujal.org"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-orange hover:text-white"
              >
                careers@gurujal.org
              </a>
              <a
                href="tel:+919311411998"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-brand-primary"
              >
                +91 93114 11998
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
