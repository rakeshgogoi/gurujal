"use client";

/**
 * Sticky section-anchor nav for the About page.
 *
 * Lives as a sibling of the hero (not inside it) so `position: sticky`
 * isn't broken by the hero's overflow-hidden clip. When the user scrolls
 * past the hero, the nav pins itself just below the 80px sticky header so
 * the section anchors stay one click away as visitors move through the
 * page.
 */

const sections = [
  { label: "Vision & Mission", href: "#vision-mission" },
  { label: "Our Journey", href: "#our-journey" },
  { label: "Leadership", href: "#leadership" },
  { label: "Trustees", href: "#trustees" },
  { label: "Awards & Recognition", href: "#awards" },
  { label: "Our Partners", href: "#partners" },
];

export function AboutSectionNav() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-20 z-30 border-y border-white/10 bg-brand-deep/95 backdrop-blur shadow-lg shadow-black/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex gap-1 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-2 lg:justify-center">
          {sections.map((s) => (
            <li key={s.href} className="shrink-0">
              <a
                href={s.href}
                className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/85 transition hover:border-brand-orange hover:bg-brand-orange hover:text-white sm:text-[13px]"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
