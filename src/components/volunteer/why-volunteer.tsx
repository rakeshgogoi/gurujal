/**
 * "Why Volunteer with GuruJal" — narrative intro + "Our promise to
 * volunteers" callout, sourced from the GuruJal_Volunteers programme
 * document.
 */
export function WhyVolunteer() {
  return (
    <section id="why" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Why volunteer
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Real skills. Real impact. Real credentials.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            India&apos;s water and ecological crisis cannot be solved by
            governments and NGOs alone. It requires a generation of young
            people who understand the problem, have real skills to act
            on it, and are connected to communities where change is
            needed. GuruJal&apos;s volunteer programme is designed to
            give college students exactly that: not a certificate for
            attending a session, but real field experience, green
            skills, community leadership, and a track record of
            measurable impact.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-gradient-to-br from-brand-teal via-brand-accent to-brand-primary p-8 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            Our promise to volunteers
          </p>
          <p className="mt-3 text-lg font-semibold leading-relaxed text-white sm:text-xl">
            Every volunteer engagement at GuruJal is structured to give
            you a skill, a story, and a credential — something that is
            genuinely valuable for your career, your community, and your
            conscience.
          </p>
        </div>
      </div>
    </section>
  );
}
