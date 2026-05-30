/**
 * "Latest from LinkedIn" — recent posts from the GuruJal company page
 * (https://www.linkedin.com/company/gurujal/) rendered via LinkedIn's
 * official per-post embed iframes.
 *
 * Each iframe renders the live post — including images, video, and
 * up-to-date like/comment counts. To refresh the feed: on a post, click
 * ⋯ → "Embed this post", copy the iframe URL, and update the EMBEDS
 * array.
 *
 * Iframe heights are uniformly clamped to CARD_H so the row of cards
 * reads as a clean grid; LinkedIn's own taller height suggestions get
 * clipped (post comment composer etc. is cut off, which is fine — the
 * "View post" link in the iframe still goes to LinkedIn).
 */
const EMBEDS: string[] = [
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7464938057067048960?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:share:7464541461041090560?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7463209985569816576?collapsed=1",
  "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7462866123257090048?collapsed=1",
];

const CARD_H = 460;

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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {EMBEDS.map((url, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl ring-1 ring-brand-soft"
              style={{ height: CARD_H }}
            >
              <iframe
                src={url}
                height={CARD_H}
                width="100%"
                frameBorder={0}
                allowFullScreen
                title={`GuruJal LinkedIn post ${i + 1}`}
                loading="lazy"
                className="block h-full w-full"
              />
            </div>
          ))}
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
