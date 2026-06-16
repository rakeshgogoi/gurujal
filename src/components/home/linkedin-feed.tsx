/**
 * "Latest from LinkedIn" — recent posts from the GuruJal company page
 * (https://www.linkedin.com/company/gurujal/) rendered via LinkedIn's
 * official per-post embed iframes.
 *
 * Each iframe renders the live post — including image, body text, and
 * the like / comment / share engagement bar. To refresh the feed:
 * on a post click ⋯ → "Embed this post" — LinkedIn gives you both an
 * iframe URL and a `height` value. Put them both in the EMBEDS array
 * below; the natural height matters because it tells us how tall the
 * post actually is (image-heavy posts are much taller than text-only
 * ones) and lets us compute a per-post scale.
 *
 * Sizing trick:
 *   We can't shrink content inside a cross-origin LinkedIn iframe, so
 *   we render each iframe at its natural full height, then apply
 *   `transform: scale(...)` to shrink it down. The scale per card is
 *   CARD_H / natH so the engagement bar always reaches exactly the
 *   bottom of the card — no clipping, no scrollbar, just slightly
 *   smaller content for taller (image-heavy) posts.
 *
 * Mobile layout is a single-row horizontal carousel with scroll-snap
 * (one card per swipe). At sm+ it becomes a 2-up grid; at xl+ a 4-up
 * grid.
 */
const EMBEDS: { url: string; natH: number }[] = [
  {
    url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7471062952943706112?collapsed=1",
    natH: 567,
  },
  {
    url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7470700140371042305?collapsed=1",
    natH: 567,
  },
  {
    url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7469865950851280896?collapsed=1",
    natH: 567,
  },
  {
    url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7468323000426151936?collapsed=1",
    natH: 567,
  },
];

const CARD_H = 380; // Uniform visible card height after scaling.

const LINKEDIN_URL = "https://www.linkedin.com/company/gurujal/";

export function LinkedInFeed() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              <LinkedInGlyph className="h-4 w-4 text-[#0a66c2]" />
              Latest from LinkedIn
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Fresh from the field, posted by GuruJal
            </h2>
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#0a66c2] px-5 py-2.5 text-sm font-semibold text-[#0a66c2] transition hover:bg-[#0a66c2] hover:text-white"
          >
            <LinkedInGlyph className="h-4 w-4" />
            Follow on LinkedIn
          </a>
        </div>

        {/* Below sm: native horizontal swipe with snap (-mx-* lets the
            row bleed to the screen edges so the first card aligns
            flush). sm+: settle into a 2/4-col grid. */}
        <div className="mt-12 -mx-4 overflow-x-auto overscroll-x-contain sm:mx-0 sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max snap-x snap-mandatory gap-4 px-4 sm:grid sm:w-auto sm:snap-none sm:grid-cols-2 sm:gap-6 sm:px-0 xl:grid-cols-4">
            {EMBEDS.map((e, i) => {
              // Per-post scale: the iframe's natural height is e.natH;
              // we shrink it so the bottom of the post (the engagement
              // bar) lands exactly at CARD_H. The matching width
              // adjustment (100/scale)% keeps the iframe filling the
              // card visually after the transform.
              const scale = CARD_H / e.natH;
              const widthPct = 100 / scale;
              return (
                <div
                  key={i}
                  className="snap-start shrink-0 w-[85vw] sm:w-auto sm:shrink overflow-hidden rounded-2xl ring-1 ring-brand-soft bg-white"
                  style={{ height: CARD_H }}
                >
                  <iframe
                    src={e.url}
                    frameBorder={0}
                    scrolling="no"
                    allowFullScreen
                    title={`GuruJal LinkedIn post ${i + 1}`}
                    loading="lazy"
                    className="block"
                    style={{
                      width: `${widthPct}%`,
                      height: `${e.natH}px`,
                      transform: `scale(${scale})`,
                      transformOrigin: "top left",
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}
