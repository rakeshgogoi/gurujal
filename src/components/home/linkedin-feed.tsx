import Image from "next/image";

/**
 * "Latest from LinkedIn" — curated recent posts from the GuruJal company
 * page (https://www.linkedin.com/company/gurujal/).
 *
 * LinkedIn's API doesn't permit a live feed embed without their paid
 * widget, so we keep four hand-curated cards that mirror the look of a
 * LinkedIn post and link straight back to the page. Update the array
 * when newer posts are worth surfacing.
 */
const POSTS: {
  excerpt: string;
  posted: string;
  likes?: number;
  comments?: number;
  category: string;
  href: string;
}[] = [
  {
    category: "Story",
    excerpt:
      "A pond once forgotten by the village is now becoming a space of life, reflection, and community again. In Mankrola, floating wetlands and native plantations are bringing back biodiversity.",
    posted: "Just now",
    href: "https://www.linkedin.com/company/gurujal/",
  },
  {
    category: "Hiring",
    excerpt:
      "Are you passionate about sustainable design, ecological restoration, and creating spaces that work in harmony with nature? We&apos;re hiring an Architect Intern for water-sensitive landscape projects.",
    posted: "1 day ago",
    likes: 14,
    comments: 2,
    href: "https://www.linkedin.com/company/gurujal/",
  },
  {
    category: "Hiring",
    excerpt:
      "Passionate about water, maps, hydrology, and environmental restoration? Join our team and work on meaningful projects — GIS &amp; Hydrology Associate and Intern roles in Gurugram.",
    posted: "3 days ago",
    likes: 61,
    comments: 6,
    href: "https://www.linkedin.com/company/gurujal/",
  },
  {
    category: "Education",
    excerpt:
      "What if the waste we throw every day could become nutrition for the soil? At Tajnagar Senior Secondary School, students learned to compost everyday waste into nutrient-rich soil amendment.",
    posted: "4 days ago",
    likes: 7,
    comments: 2,
    href: "https://www.linkedin.com/company/gurujal/",
  },
];

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

        {/* Below sm: single touch-scroll row with snap. sm+: regular grid. */}
        <div className="mt-12 -mx-4 overflow-x-auto overscroll-x-contain px-4 sm:mx-0 sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex w-max gap-6 snap-x snap-mandatory sm:grid sm:w-auto sm:grid-cols-2 sm:gap-6 sm:snap-none lg:grid-cols-4">
          {POSTS.map((p, i) => (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-[280px] shrink-0 snap-start flex-col rounded-2xl bg-white ring-1 ring-brand-soft transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-brand-accent sm:w-auto sm:shrink sm:snap-none"
            >
              {/* "Author" strip — mimics a LinkedIn post header */}
              <div className="flex items-center gap-3 border-b border-brand-soft/70 p-4">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-brand-mist ring-1 ring-brand-soft">
                  <Image
                    src="/brand/gurujal-logo.png"
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-brand-ink">
                    GuruJal
                  </div>
                  <div className="truncate text-[11px] text-brand-muted">
                    {p.posted} ·{" "}
                    <span className="font-medium text-brand-teal-dark">
                      {p.category}
                    </span>
                  </div>
                </div>
                <LinkedInGlyph className="h-5 w-5 shrink-0 text-[#0a66c2]" />
              </div>

              {/* Body */}
              <p
                className="flex-1 p-4 text-sm leading-relaxed text-brand-ink/85"
                dangerouslySetInnerHTML={{ __html: p.excerpt }}
              />

              {/* Footer — engagement counts */}
              <div className="flex items-center justify-between border-t border-brand-soft/70 px-4 py-3 text-xs text-brand-muted">
                <span className="inline-flex items-center gap-3">
                  {typeof p.likes === "number" && (
                    <span className="inline-flex items-center gap-1">
                      <span aria-hidden>👍</span>
                      {p.likes}
                    </span>
                  )}
                  {typeof p.comments === "number" && (
                    <span className="inline-flex items-center gap-1">
                      <span aria-hidden>💬</span>
                      {p.comments}
                    </span>
                  )}
                </span>
                <span className="inline-flex items-center gap-1 font-semibold text-[#0a66c2] transition group-hover:gap-1.5">
                  View post
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
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
