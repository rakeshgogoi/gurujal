/**
 * Blog posts grid — rendered via Substack's official per-post embed
 * iframes (same approach as the homepage LinkedIn feed).
 *
 * To add a new post: open it on Substack, "..." → Embed post, and add
 * its slug below. Substack's embed URL is always
 * https://gurujal.substack.com/embed/p/{slug}.
 */
const POSTS: { slug: string; title: string; excerpt: string }[] = [
  {
    slug: "how-mankrola-village-got-its-gathering",
    title: "How Mankrola Village Got Its Gathering Space Back",
    excerpt:
      "In the heart of Mankrola village, near the Shiv Mandir, stood a pond that people had slowly stopped noticing.",
  },
  {
    slug: "why-nature-based-solutions-remain",
    title:
      "Why Nature-Based Solutions Remain Peripheral in Indian Cities — And What We're Getting Wrong",
    excerpt:
      "Here's a strange little fact about Bengaluru: the city's lakes are quietly doing some of the hardest work in urban water management — and almost nobody planned it that way.",
  },
];

const SUBSTACK_URL = "https://gurujal.substack.com";

export function BlogPosts() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              <SubstackGlyph className="h-4 w-4 text-[#FF6719]" />
              Latest posts
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              From the GuruJal Substack
            </h2>
          </div>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#FF6719] px-5 py-2.5 text-sm font-semibold text-[#FF6719] transition hover:bg-[#FF6719] hover:text-white"
          >
            <SubstackGlyph className="h-4 w-4" />
            Follow on Substack
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {POSTS.map((post) => (
            <div
              key={post.slug}
              className="overflow-hidden rounded-2xl ring-1 ring-brand-soft bg-white"
            >
              <iframe
                src={`${SUBSTACK_URL}/embed/p/${post.slug}`}
                width="100%"
                height="320"
                style={{ border: "none", background: "white" }}
                frameBorder={0}
                scrolling="no"
                title={post.title}
                loading="lazy"
              />
              <p className="line-clamp-3 min-h-[4rem] border-t border-brand-soft px-5 pt-4 pb-5 text-sm leading-relaxed text-brand-muted">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SubstackGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 17.581 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  );
}
