/**
 * "All Internships — Common Features" — what every intern gets vs. what
 * GuruJal expects in return, from the GuruJal_Internship_JDs working
 * document.
 */

const youGet = [
  "A real deliverable that ships during your internship",
  "Field exposure — restoration sites, schools, or communities",
  "Direct mentorship from GuruJal programme or communications leads",
  "GuruJal Certificate of Internship",
  "LinkedIn recommendation from your supervisor",
];

const weExpect = [
  "1–4 months of committed engagement",
  "Punctuality, initiative, and editorial accountability",
  "Openness to field work and community environments",
  "One substantive handover document at the end of your internship",
  "Genuine care about the work — not just the certificate",
];

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function CommonFeatures() {
  return (
    <section id="features" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Every internship, common features
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            What you will always get
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
          <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/80 sm:p-8">
            <h3 className="text-lg font-semibold text-brand-ink">
              You will always get
            </h3>
            <ul className="mt-5 space-y-3">
              {youGet.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-teal/15 text-brand-teal-dark"
                  >
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/80 sm:p-8">
            <h3 className="text-lg font-semibold text-brand-ink">
              We expect from you
            </h3>
            <ul className="mt-5 space-y-3">
              {weExpect.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange-dark"
                  >
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-brand-muted">
          Internships shorter than 2 months are unpaid. Internships of 3
          months or more become paid.
        </p>
      </div>
    </section>
  );
}
