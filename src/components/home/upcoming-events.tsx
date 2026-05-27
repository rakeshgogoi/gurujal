import Image from "next/image";
import Link from "next/link";
import { liveUrl } from "@/lib/live-url";

/**
 * Real past events sourced verbatim from /content/pages/events.mdx
 * (the migrated content of gurujal.org/events). Titles, dates, venues,
 * partners, and one-line descriptions are taken from the live event pages.
 */
const events = [
  {
    title: "Real Nature in Restored Landscapes",
    blurb:
      "Site Visit & Experiential Learning Program hosted by GuruJal & Prana Earth under Delhi Climate Innovation Week 2026 — BSF Bhondsi, Khandewla Well, Triveni Pond, Bhokarka.",
    image: "/uploads/2024/08/real-nature-event.jpeg",
    href: "/experiential-learning",
    date: "21 Feb 2026",
    kind: "Site Visit",
  },
  {
    title: "HydroMingle Delhi 2025",
    blurb:
      "Water innovation platform connecting startups, policymakers, CSR partners, and researchers driving the next wave of water solutions. Tamarind Hall, IHC.",
    image: "/uploads/2024/08/hydromingle2025.jpg",
    href: "/hydromingle-event",
    date: "10 Dec 2025",
    kind: "Innovation Convening",
  },
  {
    title: "Roots & Recharge Symposium",
    blurb:
      "GuruJal × Wipro Foundation symposium reviving traditional water wisdom — heritage dug-well inventorisation, policy dialogue, and community pilots. Juniper Hall, IHC.",
    image: "/uploads/2024/08/Roots-recharge-symposium-2025.jpg",
    href: "/roots-and-recharge-symposium",
    date: "9 Dec 2025",
    kind: "Symposium",
  },
];

/**
 * "Recent Events" — three event cards (HydroMingle 2025, Roots & Recharge
 * Symposium, Real Nature in Restored Landscapes). Items are past events;
 * we keep them surfaced as recent highlights of GuruJal's calendar.
 */
export function RecentEvents() {
  return (
    <section id="events" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              From the field
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Recent Events
            </h2>
          </div>
          <Link
            href={liveUrl("/events")}
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-orange sm:inline-flex"
          >
            See all events
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <Link
              key={e.href + e.title}
              href={liveUrl(e.href)}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-brand-mist shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/55 via-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-teal backdrop-blur">
                  {e.kind}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="text-xs font-medium uppercase tracking-[0.14em] text-brand-orange">
                  {e.date}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-brand-ink group-hover:text-brand-primary">
                  {e.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                  {e.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                  Know more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-0.5" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
