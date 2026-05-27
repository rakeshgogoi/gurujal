"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { liveUrl } from "@/lib/live-url";
import { isLocalRoute } from "@/lib/nav";

/** Resolve an event-card href to internal (local app) or live WordPress. */
function resolveHref(href: string): string {
  return isLocalRoute(href) ? href : liveUrl(href);
}

/**
 * Past Events — filterable grid.
 *
 * Each card: hero photo + month/year badge + category pill + name +
 * blurb + "View Event →" link. Filter tabs above the grid let visitors
 * narrow by event type — implemented as client-side useState because
 * filtering 6 items doesn't need a router round-trip.
 */

type EventType =
  | "Symposium"
  | "Site Visit"
  | "Innovation Convening"
  | "Dialogue"
  | "Conference"
  | "Film Club";

type Tone = "teal" | "green" | "orange";

type EventItem = {
  name: string;
  month: string; // e.g. "Apr"
  year: string; // e.g. "2026"
  type: EventType;
  blurb: string;
  href: string;
  /** True when href is an off-site URL — opens in a new tab. */
  external?: boolean;
  photo: string;
  tone: Tone;
};

const events: EventItem[] = [
  {
    name: "ALT EFF Film Club × GuruJal Gurugram",
    month: "Apr",
    year: "2026",
    type: "Film Club",
    blurb:
      "A film screening and community dialogue bringing together water advocates, storytellers and change-makers — presented in collaboration with ALT EFF, India's leading environmental film festival.",
    href: "https://urbanaut.app/spot/alteff-filmclub-gurugram",
    external: true,
    photo: "/uploads/2026/05/alt-eff-film-club.webp",
    tone: "orange",
  },
  {
    name: "Real Nature in Restored Landscapes",
    month: "Feb",
    year: "2026",
    type: "Site Visit",
    blurb:
      "Site Visit & Experiential Learning Program hosted by GuruJal & Prana Earth under Delhi Climate Innovation Week 2026.",
    href: "/real-nature-in-restored-landscapes",
    photo: "/uploads/2024/08/real-nature-event.jpeg",
    tone: "green",
  },
  {
    name: "HydroMingle Delhi 2025",
    month: "Dec",
    year: "2025",
    type: "Innovation Convening",
    blurb:
      "Water innovation platform connecting startups, policymakers, CSR partners and researchers driving the next wave of water solutions.",
    href: "/hydromingle-event",
    photo: "/uploads/2024/08/hydromingle2025.jpg",
    tone: "teal",
  },
  {
    name: "Roots & Recharge Symposium",
    month: "Dec",
    year: "2025",
    type: "Symposium",
    blurb:
      "Reviving heritage water structures for groundwater resilience through policy dialogue, dug-well inventorisation data and community pilots.",
    href: "/roots-and-recharge-symposium",
    photo: "/uploads/2024/08/Roots-recharge-symposium-2025.jpg",
    tone: "teal",
  },
  {
    name: "Urban Adda 25",
    month: "Jun",
    year: "2025",
    type: "Dialogue",
    blurb:
      "Co-creating sustainable and equitable cities through dialogue, film and collaboration across urban water and climate advocates.",
    href: "/urban-adda-25",
    photo: "/uploads/2026/03/Book-Launch-at-Urban-Adda.jpeg",
    tone: "orange",
  },
  {
    name: "Jal Sangam — National Water Conference",
    month: "Mar",
    year: "2025",
    type: "Conference",
    blurb:
      "Annual national gathering of water champions, practitioners and policymakers driving systemic change in water governance across India.",
    href: "#",
    photo: "/uploads/2026/03/DJI_20250915134828_0001_V-1-scaled.jpg",
    tone: "green",
  },
];

const filters: { label: string; type: EventType | "All"; emoji: string }[] = [
  { label: "All", type: "All", emoji: "🌊" },
  { label: "Symposium", type: "Symposium", emoji: "🏛️" },
  { label: "Site Visit", type: "Site Visit", emoji: "🌿" },
  { label: "Innovation Convening", type: "Innovation Convening", emoji: "🚀" },
  { label: "Dialogue", type: "Dialogue", emoji: "💬" },
  { label: "Conference", type: "Conference", emoji: "🎯" },
  { label: "Film Club", type: "Film Club", emoji: "🎬" },
];

const toneBadge: Record<Tone, string> = {
  teal: "bg-brand-teal/15 text-brand-teal-dark ring-brand-teal/30",
  green: "bg-brand-green/15 text-brand-green-dark ring-brand-green/30",
  orange: "bg-brand-orange/15 text-brand-orange-dark ring-brand-orange/30",
};

const toneLink: Record<Tone, string> = {
  teal: "text-brand-teal-dark group-hover:text-brand-teal",
  green: "text-brand-green-dark group-hover:text-brand-green",
  orange: "text-brand-orange-dark group-hover:text-brand-orange",
};

export function PastEvents() {
  const [active, setActive] = useState<EventType | "All">("All");

  const visible =
    active === "All" ? events : events.filter((e) => e.type === active);

  return (
    <section id="past" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Past events
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Conversations that moved the work forward
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Symposia, site visits, dialogues and convenings from across
            the GuruJal calendar.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="mt-10 -mx-2 overflow-x-auto sm:overflow-x-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex w-max gap-2 px-2 sm:mx-auto sm:w-auto sm:max-w-4xl sm:flex-wrap sm:justify-center">
            {filters.map((f) => {
              const isActive = f.type === active;
              return (
                <li key={f.label} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => setActive(f.type)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "border-brand-primary bg-brand-primary text-white shadow-sm"
                        : "border-brand-soft bg-white text-brand-ink hover:border-brand-accent hover:text-brand-accent-dark"
                    }`}
                  >
                    <span aria-hidden>{f.emoji}</span>
                    {f.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Event grid */}
        {visible.length > 0 ? (
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((e) => (
              <li key={e.name}>
                <EventCard event={e} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-12 rounded-3xl bg-white p-10 text-center ring-1 ring-brand-soft/80">
            <p className="text-sm text-brand-muted">
              No past events in this category yet. Try another filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function EventCard({ event: e }: { event: EventItem }) {
  const inner = (
    <>
      <div className="relative aspect-[5/3] w-full overflow-hidden bg-brand-soft/60">
        <Image
          src={e.photo}
          alt={e.name}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Date badge */}
        <span className="absolute left-4 top-4 flex flex-col items-center rounded-xl bg-white/95 px-3 py-2 text-center shadow-sm">
          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-orange-dark">
            {e.month}
          </span>
          <span className="text-base font-bold leading-none text-brand-ink">
            {e.year}
          </span>
        </span>
        {/* Type pill */}
        <span
          className={`absolute right-4 top-4 inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ring-1 ${toneBadge[e.tone]} bg-white/90 backdrop-blur`}
        >
          {e.type}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-brand-ink sm:text-xl">
          {e.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
          {e.blurb}
        </p>
        <span
          className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${toneLink[e.tone]}`}
        >
          View event
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
      </div>
    </>
  );

  const cardCls =
    "group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-brand-soft/80 transition hover:-translate-y-1 hover:shadow-xl";

  // External link (e.g. ALT EFF on urbanaut.app)
  if (e.external) {
    return (
      <a
        href={e.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardCls}
      >
        {inner}
      </a>
    );
  }

  // Internal link — resolves to a local route when we've built one
  // (e.g. /hydromingle-event), otherwise falls through to the existing
  // gurujal.org page via liveUrl().
  return (
    <Link href={resolveHref(e.href)} className={cardCls}>
      {inner}
    </Link>
  );
}
