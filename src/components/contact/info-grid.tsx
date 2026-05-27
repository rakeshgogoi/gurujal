/**
 * Three contact info cards — phone / email / address.
 *
 * Click-through behaviours:
 *   • Phone: tel: link
 *   • Email: mailto: link
 *   • Address: opens Google Maps with the office pin
 */

const OFFICE_ADDRESS =
  "GuruJal Office, 6/9, F-2, Block F, DLF Phase 1, Sector 26A, Gurugram, Haryana 122002";

type Tone = "teal" | "green" | "orange";

const cards: {
  tone: Tone;
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  cta: string;
}[] = [
  {
    tone: "teal",
    label: "Phone",
    value: "(+91) 93114 11998",
    href: "tel:+919311411998",
    cta: "Call us",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    tone: "green",
    label: "Email",
    value: "management@gurujal.org",
    href: "mailto:management@gurujal.org",
    cta: "Send an email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    tone: "orange",
    label: "Address",
    value: OFFICE_ADDRESS,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`,
    cta: "Open in Maps",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
];

const toneAccent: Record<Tone, string> = {
  teal: "bg-brand-teal/15 text-brand-teal-dark ring-brand-teal/30",
  green: "bg-brand-green/15 text-brand-green-dark ring-brand-green/30",
  orange: "bg-brand-orange/15 text-brand-orange-dark ring-brand-orange/30",
};

const toneLink: Record<Tone, string> = {
  teal: "text-brand-teal-dark group-hover:text-brand-teal",
  green: "text-brand-green-dark group-hover:text-brand-green",
  orange: "text-brand-orange-dark group-hover:text-brand-orange",
};

export function ContactInfoGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <ul className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-3">
          {cards.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-full flex-col rounded-3xl bg-brand-mist p-7 ring-1 ring-brand-soft/70 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
              >
                <span
                  className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${toneAccent[c.tone]}`}
                >
                  <span className="h-6 w-6">{c.icon}</span>
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
                  {c.label}
                </p>
                <p className="mt-2 flex-1 text-base font-semibold leading-snug text-brand-ink sm:text-lg">
                  {c.value}
                </p>
                <span
                  className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${toneLink[c.tone]}`}
                >
                  {c.cta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
