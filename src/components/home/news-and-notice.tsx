import Link from "next/link";
import { isLocalRoute } from "@/lib/nav";
import { liveUrl } from "@/lib/live-url";

/**
 * Resolve a news/notice href to either an internal path or the live
 * site. Same helper pattern used by the site header and home/stories.
 */
function resolveHref(href: string): string {
  return isLocalRoute(href) ? href : liveUrl(href);
}

/**
 * Two-column "Recent News" + "Notice" section.
 *
 * All items are sourced from real GuruJal pages in /content/pages:
 *   - Events with dates from /events (Apr 2026 → Dec 2025)
 *   - Job openings verbatim from /career
 *   - Publications (titles + slugs) from /reports-and-publications
 *
 * Dates use the real event/publication dates documented on those pages.
 */
const recentNews = [
  {
    date: "Apr 2026",
    title: "ALT EFF Film Club × GuruJal Gurugram — film screening & community dialogue",
    href: "/events",
  },
  {
    date: "21 Feb 2026",
    title: "Real Nature in Restored Landscapes — site visit at BSF Bhondsi, Khandewla & Bhokarka",
    href: "/real-nature-in-restored-landscapes",
  },
  {
    date: "10 Dec 2025",
    title: "HydroMingle Delhi 2025 convened innovators, policymakers & CSR partners at IHC",
    href: "/hydromingle-event",
  },
  {
    date: "9 Dec 2025",
    title: "Roots & Recharge Symposium with Wipro Foundation revives heritage water wisdom",
    href: "/roots-and-recharge-symposium",
  },
  {
    date: "3–5 Jun 2025",
    title: "Urban Adda 2025 — 3-day national conference on cities for people, not cars",
    href: "/urban-adda-25",
  },
];

const notices = [
  {
    date: "Hiring",
    title: "Sr. Civil & Structural Design Engineer — Technical · Full-time · Gurugram · 8–10 yrs",
    href: "/career",
  },
  {
    date: "Hiring",
    title: "Jr. Civil & Structural Design Engineer — Technical · Full-time · Gurugram · 2–4 yrs",
    href: "/career",
  },
  {
    date: "Hiring",
    title: "GIS and Hydrology Associate — Technical · Full-time · Gurugram · 2–4 yrs",
    href: "/career",
  },
  {
    date: "Internship",
    title: "Civil and Structural Design Engineer Intern — Diploma / B.Tech / M.Tech",
    href: "/career",
  },
  {
    date: "Internship",
    title: "Architect Intern — B.Arch / M.Arch",
    href: "/career",
  },
];

export function NewsAndNotice() {
  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Recent News */}
          <Column
            eyebrow="From the field"
            title="Recent News"
            items={recentNews}
            seeAllHref="/blog"
          />
          {/* Notice board */}
          <Column
            eyebrow="Announcements"
            title="Notice"
            items={notices}
            seeAllHref="/career"
          />
        </div>
      </div>
    </section>
  );
}

function Column({
  eyebrow,
  title,
  items,
  seeAllHref,
}: {
  eyebrow: string;
  title: string;
  items: { date: string; title: string; href: string }[];
  seeAllHref: string;
}) {
  return (
    <div className="rounded-2xl border border-brand-soft bg-white p-7 shadow-sm">
      <div className="mb-6 flex items-end justify-between gap-4 border-b border-brand-soft pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {eyebrow}
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-brand-ink">
            {title}
          </h2>
        </div>
        <Link
          href={resolveHref(seeAllHref)}
          className="shrink-0 text-sm font-semibold text-brand-primary hover:text-brand-orange"
        >
          See all →
        </Link>
      </div>
      <ul className="divide-y divide-brand-soft">
        {items.map((n) => (
          <li key={n.title}>
            <Link
              href={resolveHref(n.href)}
              className="group flex items-start gap-4 py-3.5 transition hover:bg-brand-mist/60 -mx-2 px-2 rounded-md"
            >
              <span className="mt-0.5 shrink-0 rounded-md bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand-primary">
                {n.date}
              </span>
              <span className="text-sm leading-relaxed text-brand-ink group-hover:text-brand-primary">
                {n.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
