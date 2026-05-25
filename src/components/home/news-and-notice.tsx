import Link from "next/link";

/**
 * Two-column "Recent News" + "Notice" section matching the live homepage.
 *
 * Items here are placeholders driven by the structure visible on the live
 * site's homepage (which uses a Ditty news ticker + announcement plugin).
 * Real news items should be migrated from WP once we surface those feeds.
 */
const recentNews = [
  {
    date: "21 Apr 2026",
    title: "GuruJal launches Roots & Recharge Symposium 2025",
    href: "/roots-and-recharge-symposium",
  },
  {
    date: "12 Mar 2026",
    title: "Suntory Global Spirits partners with GuruJal on Bhokarka pond rejuvenation",
    href: "/support-a-pond",
  },
  {
    date: "06 Feb 2026",
    title: "The Green Wall of Aravalli — 5,000-acre roadmap published",
    href: "/publication-green-wall-of-aravalli",
  },
  {
    date: "18 Jan 2026",
    title: "HydroMingle 2025 brings together 200+ water professionals",
    href: "/hydromingle-event",
  },
];

const notices = [
  {
    date: "20 May 2026",
    title: "GuruJal is hiring — multiple openings in engineering, GIS, and communications",
    href: "/career",
  },
  {
    date: "08 Apr 2026",
    title: "Pond adoption program — applications open for FY 2026-27",
    href: "/support-a-pond",
  },
  {
    date: "22 Mar 2026",
    title: "WeForWater Fellowship — applications close 15th May",
    href: "/we-for-water",
  },
  {
    date: "10 Mar 2026",
    title: "Annual Report 2024-25 now available for download",
    href: "/reports-and-publications",
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
          href={seeAllHref}
          className="shrink-0 text-sm font-semibold text-brand-primary hover:text-brand-orange"
        >
          See all →
        </Link>
      </div>
      <ul className="divide-y divide-brand-soft">
        {items.map((n) => (
          <li key={n.title}>
            <Link
              href={n.href}
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
