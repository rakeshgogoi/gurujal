/**
 * "Why Intern with GuruJal" — About GuruJal narrative + "What makes a
 * GuruJal internship different" promise callout, sourced from the
 * GuruJal_Internship_JDs working document.
 */
export function WhyIntern() {
  return (
    <section id="why" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Why intern with us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Real work, not busywork
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            GuruJal (Abhipsa Foundation) is Gurugram&apos;s leading water
            conservation and eco-restoration organisation. We work across
            pond rejuvenation, native reforestation, school water
            programmes, and ESG advisory across 3 states-UT — Haryana,
            Uttar Pradesh, Rajasthan and Delhi. Our internships are built
            around real work: you will not be filing papers or watching.
            You will be in schools, restoration sites, communities, and
            content studios.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-gradient-to-br from-brand-teal via-brand-accent to-brand-primary p-8 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            What makes a GuruJal internship different
          </p>
          <p className="mt-3 text-lg font-semibold leading-relaxed text-white sm:text-xl">
            Every intern works on a project that is active and
            accountable. Your deliverables are real — a campaign that
            runs, a report that goes to a funder, a programme that
            reaches students. You leave with a portfolio, not just a
            certificate.
          </p>
        </div>
      </div>
    </section>
  );
}
