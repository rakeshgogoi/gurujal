"use client";

import { useEffect, useMemo, useState } from "react";
import MiniSearch, { type SearchResult } from "minisearch";

/**
 * Floating UI tools that sit above the page content:
 *   - Language picker on the bottom-left — English / Hindi via Google
 *     Translate.
 *   - AI assistant on the bottom-right — display only.
 *
 * Both are present on every page via the root layout. They are
 * positioned with `fixed` and a high z-index so they float above
 * marquees, slides and section background blobs.
 */
export function FloatingTools() {
  return (
    <>
      <LanguagePicker />
      <AiAssistant />
    </>
  );
}

type LangCode = "EN" | "HI";

const LANGUAGES: { code: LangCode; label: string }[] = [
  { code: "EN", label: "English" },
  { code: "HI", label: "हिन्दी (Hindi)" },
];

/** Read the current Google Translate target language from the `googtrans`
 *  cookie (format: `/en/hi`). Returns "EN" when the cookie is missing
 *  or points back to source. */
function readActiveLang(): LangCode {
  if (typeof document === "undefined") return "EN";
  const m = document.cookie.match(/googtrans=\/en\/(\w+)/);
  return m && m[1].toLowerCase() === "hi" ? "HI" : "EN";
}

/** Write or clear the `googtrans` cookie on both the bare host and the
 *  apex domain (Google Translate looks at both), then full-reload so
 *  the widget picks up the new state. */
function setLanguage(target: LangCode) {
  const expire = "Thu, 01 Jan 1970 00:00:01 GMT";
  const host = window.location.hostname;
  // Apex domain helper — strips a single subdomain so e.g.
  // "www.gurujal.org" → ".gurujal.org". On bare hosts (localhost,
  // gurujal.vercel.app first segment), the dot-prefixed variant is a
  // no-op which is fine.
  const apex = "." + host.split(".").slice(-2).join(".");

  if (target === "EN") {
    document.cookie = `googtrans=; path=/; expires=${expire}`;
    document.cookie = `googtrans=; path=/; domain=${apex}; expires=${expire}`;
  } else {
    document.cookie = `googtrans=/en/hi; path=/`;
    document.cookie = `googtrans=/en/hi; path=/; domain=${apex}`;
  }
  window.location.reload();
}

function LanguagePicker() {
  const [open, setOpen] = useState(false);
  // SSR-safe initial state: assume English. On mount we read the cookie
  // and correct, avoiding hydration mismatch.
  const [active, setActive] = useState<LangCode>("EN");

  useEffect(() => {
    setActive(readActiveLang());

    // Inject the Google Translate Element script exactly once. It looks
    // for #google_translate_element below to render its (hidden) widget
    // and respects the googtrans cookie we set in setLanguage().
    if (document.getElementById("gj-google-translate")) return;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    (window as any).googleTranslateElementInit = () => {
      const g = (window as any).google;
      if (!g?.translate?.TranslateElement) return;
      new g.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "hi",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
    const s = document.createElement("script");
    s.id = "gj-google-translate";
    s.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  // Hidden on phones (below sm).
  return (
    <>
      {/* Google Translate mount point. Kept in the DOM but hidden — the
          widget's UI is replaced by our own picker, and translation is
          driven by the googtrans cookie. */}
      <div id="google_translate_element" className="hidden" aria-hidden />

      {/* `translate="no"` + `notranslate` opt the picker out of Google
          Translate. Without it Google rewrites our "HI" chip label to
          "नमस्ते" (taking it as the English greeting) once the page is
          translated, which makes the active state confusing. */}
      <div
        className="fixed bottom-6 left-6 z-40 hidden sm:block notranslate"
        translate="no"
      >
        {open && (
          <div
            role="dialog"
            aria-label="Language picker"
            className="absolute bottom-16 left-0 w-56 rounded-2xl bg-white p-2 shadow-2xl shadow-black/15 ring-1 ring-brand-soft animate-fade-up"
          >
            <div className="px-3 pb-2 pt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
              Translate page
            </div>
            <ul>
              {LANGUAGES.map((l) => {
                const selected = l.code === active;
                return (
                  <li key={l.code}>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        if (l.code !== active) setLanguage(l.code);
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition ${
                        selected
                          ? "bg-brand-mist text-brand-primary"
                          : "text-brand-ink hover:bg-brand-mist/60"
                      }`}
                    >
                      <span
                        className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[11px] font-bold ${
                          selected
                            ? "bg-brand-primary text-white"
                            : "bg-brand-mist text-brand-primary"
                        }`}
                      >
                        {l.code}
                      </span>
                      <span className="flex-1 truncate">{l.label}</span>
                      {selected && (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="border-t border-brand-soft px-3 pt-2 pb-1 text-[10px] text-brand-muted">
              Translated by Google
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Translate page"
          aria-expanded={open}
          className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-brand-ink shadow-xl shadow-black/10 ring-1 ring-brand-soft transition hover:bg-brand-primary hover:text-white"
        >
          <GlobeIcon className="h-5 w-5 text-brand-primary transition group-hover:text-white" />
          <span className="font-bold tracking-tight">{active}</span>
        </button>
      </div>
    </>
  );
}

/**
 * GuruJal Assistant — quick-nav hub + full-text site search.
 *
 *   - With an empty query: shows curated category buttons (Get involved
 *     / About GuruJal / Our work / Resources) so a first-time visitor
 *     sees the highest-intent destinations immediately.
 *   - As the visitor types: runs full-text search over the static
 *     search index in /public/search-index.json (built by
 *     `npm run search:index`) using MiniSearch. Returns ranked hits
 *     with title + snippet of the matching body text + link.
 *
 * No LLM, no API calls — the entire search happens in the browser
 * against a static JSON index built from the real rendered page HTML.
 * To refresh the index after content changes: run `npm run dev` in
 * one terminal and `npm run search:index` in another.
 */
type GuideItem = {
  label: string;
  href: string;
  category: "Get involved" | "About GuruJal" | "Our work" | "Resources";
  /** Extra terms a visitor might type that should match this item. */
  keywords?: string;
};

const GUIDE_ITEMS: GuideItem[] = [
  // Get involved — the highest-intent destinations.
  { label: "Support a pond", href: "/support-a-pond", category: "Get involved", keywords: "donate adopt fund pond restoration give" },
  { label: "Careers & jobs", href: "/career", category: "Get involved", keywords: "work hiring internship apply" },
  { label: "Volunteer with us", href: "/volunteer", category: "Get involved", keywords: "volunteership college students tracks green champion water ambassador" },
  { label: "Contact us", href: "/contact", category: "Get involved", keywords: "email phone reach get in touch partner collaborate" },
  // About — who we are, what we do.
  { label: "About GuruJal", href: "/about", category: "About GuruJal", keywords: "mission vision story" },
  { label: "Our team", href: "/team", category: "About GuruJal", keywords: "people leadership trustees" },
  { label: "The 6R Approach", href: "/#approach", category: "About GuruJal", keywords: "framework strategy reduce restore revive rethink" },
  // Programs / services.
  { label: "All solutions", href: "/solutions", category: "Our work", keywords: "services programs" },
  { label: "Eco-restoration", href: "/eco-restoration", category: "Our work", keywords: "forest aravalli landscape" },
  { label: "Water proofing", href: "/water-proofing", category: "Our work", keywords: "rainwater harvesting buildings" },
  { label: "Connect the Drop", href: "/connect-the-drop", category: "Our work", keywords: "behaviour change conservation school" },
  { label: "We for Water", href: "/we-for-water", category: "Our work", keywords: "youth training green economy" },
  { label: "ESG advisory", href: "/esg-advisory", category: "Our work", keywords: "corporate companies sustainability" },
  // Resources / proof.
  { label: "Events", href: "/events", category: "Resources", keywords: "urban adda symposium conference upcoming past" },
  { label: "Reports & publications", href: "/reports-and-publications", category: "Resources", keywords: "annual report research papers downloads" },
];

/** Shape of each doc in public/search-index.json (see
 *  scripts/build-search-index.mjs). */
type IndexedDoc = {
  route: string;
  title: string;
  headings: string[];
  body: string;
};

type IndexedDocFlat = {
  id: number;
  route: string;
  title: string;
  headings: string;
  body: string;
  /** Curated synonym terms from GUIDE_ITEMS (e.g. "donate", "volunteer")
   *  so queries that use these words still hit the right page even when
   *  the page itself never literally says them. */
  keywords: string;
};

type Hit = {
  route: string;
  title: string;
  snippet: string;
  /** Ranking score from MiniSearch — useful for debugging. */
  score: number;
};

/** Build a ~140-char snippet centred on the earliest matching term. */
function buildSnippet(body: string, terms: string[], max = 160): string {
  if (!body) return "";
  if (terms.length === 0) return body.slice(0, max) + (body.length > max ? "…" : "");
  const lower = body.toLowerCase();
  let earliest = -1;
  for (const t of terms) {
    const idx = lower.indexOf(t.toLowerCase());
    if (idx >= 0 && (earliest < 0 || idx < earliest)) earliest = idx;
  }
  if (earliest < 0) return body.slice(0, max) + (body.length > max ? "…" : "");
  const start = Math.max(0, earliest - 40);
  const end = Math.min(body.length, start + max);
  let s = body.slice(start, end);
  if (start > 0) s = "…" + s;
  if (end < body.length) s = s + "…";
  return s;
}

function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [docs, setDocs] = useState<IndexedDoc[] | null>(null);
  const [indexError, setIndexError] = useState<string | null>(null);

  // Lazy-load the static search index the first time the panel opens.
  useEffect(() => {
    if (!open || docs || indexError) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/search-index.json");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as { docs: IndexedDoc[] };
        if (!cancelled) setDocs(json.docs || []);
      } catch (e) {
        if (!cancelled) {
          setIndexError(e instanceof Error ? e.message : "fetch failed");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open, docs, indexError]);

  // Build the MiniSearch instance once docs are available. `headings`
  // collapses to a single string so MiniSearch indexes them as one
  // field with the requested boost.
  const miniSearch = useMemo(() => {
    if (!docs) return null;
    // English stopwords pulled from queries before searching so
    // conversational filler ("how can I…", "what is the…") doesn't
    // drag every page in the index up the ranking.
    // Conversational filler that should not influence ranking. Keeping
    // this list broader than a classic stopword set deliberately —
    // visitors type queries like "I am looking for…" / "tell me about…"
    // / "how do I get…", and every one of those words would otherwise
    // need to literally appear on the destination page (AND combine).
    const STOPWORDS = new Set([
      "a", "about", "after", "again", "all", "am", "an", "and", "any",
      "anyone", "are", "as", "ask", "at", "be", "been", "before",
      "being", "between", "both", "but", "by", "can", "could", "did",
      "do", "does", "doing", "done", "each", "few", "find", "for",
      "from", "get", "give", "go", "going", "got", "had", "has", "have",
      "he", "help", "her", "here", "hers", "herself", "him", "himself",
      "his", "how", "i", "id", "if", "ill", "im", "in", "info",
      "information", "interested", "into", "is", "it", "its", "itself",
      "ive", "just", "kindly", "know", "let", "like", "look", "looking",
      "make", "many", "may", "me", "might", "more", "most", "much",
      "must", "my", "myself", "need", "needed", "needs", "no", "not",
      "now", "of", "off", "on", "once", "only", "or", "other", "our",
      "ours", "ourselves", "out", "over", "own", "page", "pages",
      "please", "really", "regarding", "same", "see", "seeking", "she",
      "should", "site", "so", "some", "someone", "something", "such",
      "tell", "thank", "thanks", "that", "the", "their", "theirs",
      "them", "themselves", "then", "there", "these", "they", "this",
      "those", "through", "to", "too", "under", "until", "up", "us",
      "use", "very", "want", "was", "way", "we", "well", "were",
      "what", "when", "where", "which", "while", "who", "whom", "why",
      "will", "with", "would", "yes", "you", "your", "yours",
      "yourself", "yourselves",
    ]);
    const processTerm = (term: string) => {
      const t = term.toLowerCase();
      if (STOPWORDS.has(t)) return null;
      return t;
    };

    const ms = new MiniSearch<IndexedDocFlat>({
      fields: ["title", "keywords", "headings", "body"],
      storeFields: ["route", "title", "body"],
      processTerm,
      searchOptions: {
        // title and keywords are highest signal — boost them so a hit
        // on "donate" via keywords ranks above any incidental mention.
        boost: { title: 4, keywords: 3, headings: 2 },
        prefix: true,
        fuzzy: 0.2,
        // AND so every non-stopword term must match — gives precise
        // results once filler words are stripped.
        combineWith: "AND",
        processTerm,
      },
    });
    // Build a route → keywords lookup from the curated GUIDE_ITEMS so
    // we can graft those synonyms onto the matching indexed doc.
    const keywordsByRoute = new Map<string, string>();
    for (const it of GUIDE_ITEMS) {
      if (it.keywords) keywordsByRoute.set(it.href, it.keywords);
    }
    ms.addAll(
      docs.map((d, i) => ({
        id: i,
        route: d.route,
        title: d.title,
        headings: d.headings.join(" "),
        body: d.body,
        keywords: keywordsByRoute.get(d.route) || "",
      }))
    );
    return ms;
  }, [docs]);

  const q = query.trim();
  const hits: Hit[] = useMemo(() => {
    if (!q) return [];
    if (!miniSearch) return [];
    type Raw = SearchResult & { route: string; title: string; body: string };
    // Start strict (AND) for precise queries like "career" or
    // "annual report". If that returns nothing — common with natural-
    // language phrasing where some words simply don't appear on the
    // destination page — fall back to OR so the highest-scoring page
    // still wins on field boost (title/keywords).
    let raw = miniSearch.search(q).slice(0, 6) as Raw[];
    if (raw.length === 0) {
      raw = miniSearch.search(q, { combineWith: "OR" }).slice(0, 6) as Raw[];
    }
    return raw.map((r) => ({
      route: r.route,
      title: r.title,
      snippet: buildSnippet(r.body, r.terms || []),
      score: r.score,
    }));
  }, [q, miniSearch]);

  return (
    <>
      {/* Mobile-only blurred backdrop. Sits behind the panel so the
          page underneath softly defocuses while the Assistant is open;
          clicking it dismisses the panel. Skipped on sm+ where the
          panel is small enough that a backdrop would feel heavy. */}
      {open && (
        <div
          aria-hidden
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm animate-fade-up sm:hidden"
        />
      )}
    <div className="fixed bottom-6 right-6 z-40">
      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="GuruJal Assistant"
          className="absolute bottom-20 right-0 w-[22rem] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/20 ring-1 ring-brand-soft animate-fade-up"
        >
          <div className="relative flex items-center gap-3 bg-gradient-to-br from-brand-primary via-brand-teal to-brand-accent p-4 text-white">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 backdrop-blur">
              <GuruJalGlyph className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold">GuruJal Assistant</div>
              <div className="text-[11px] text-white/80">
                Find your way around the site.
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="rounded-full p-1 text-white/85 transition hover:bg-white/20 hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="space-y-3 p-4">
            <div className="relative">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the site (e.g. donate, ponds, careers)"
                aria-label="Search the site"
                className="w-full rounded-full border border-brand-soft bg-brand-mist/40 py-2.5 pl-9 pr-3 text-sm text-brand-ink placeholder:text-brand-muted focus:border-brand-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
              />
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            <div className="max-h-[22rem] overflow-y-auto pr-1 [scrollbar-width:thin]">
              {q ? (
                /* Search mode — full-text hits ranked by MiniSearch. */
                !miniSearch ? (
                  <p className="px-1 py-6 text-center text-sm text-brand-muted">
                    {indexError
                      ? "Search index unavailable right now."
                      : "Searching the site…"}
                  </p>
                ) : hits.length === 0 ? (
                  <p className="px-1 py-6 text-center text-sm text-brand-muted">
                    No matches for &ldquo;{q}&rdquo;. Try &ldquo;ponds&rdquo;,
                    &ldquo;donate&rdquo;, or &ldquo;careers&rdquo;.
                  </p>
                ) : (
                  <ul className="space-y-1">
                    {hits.map((h) => (
                      <SearchHit
                        key={h.route}
                        hit={h}
                        onClick={() => setOpen(false)}
                      />
                    ))}
                  </ul>
                )
              ) : (
                /* Empty-state welcome — no menu, just a prompt. */
                <p className="px-2 py-4 text-sm leading-relaxed text-brand-muted">
                  How can I help you? Type anything you would like to know
                  about GuruJal and I will help you navigate across our
                  website.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open GuruJal Assistant"
        aria-expanded={open}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary via-brand-teal to-brand-accent text-white shadow-xl shadow-brand-primary/30 transition hover:scale-105 hover:shadow-2xl"
      >
        {/* Soft pulse halo */}
        <span
          aria-hidden
          className="absolute inset-0 -z-10 animate-ping-slow rounded-full bg-brand-accent/40"
        />
        <GuruJalGlyph className="h-8 w-8 transition group-hover:rotate-12" />
        {/* Status dot */}
        <span
          aria-hidden
          className="absolute right-1 top-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-brand-green ring-2 ring-white"
        />
      </button>
    </div>
    </>
  );
}

function SearchHit({
  hit,
  onClick,
}: {
  hit: Hit;
  onClick: () => void;
}) {
  return (
    <li>
      <a
        href={hit.route}
        onClick={onClick}
        className="group block rounded-lg px-3 py-2.5 transition hover:bg-brand-mist"
      >
        <div className="flex items-center justify-between gap-3">
          <span className="truncate text-sm font-semibold text-brand-ink">
            {hit.title}
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="shrink-0 text-brand-muted transition group-hover:translate-x-0.5 group-hover:text-brand-primary"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
        {hit.snippet && (
          <p className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-brand-muted">
            {hit.snippet}
          </p>
        )}
      </a>
    </li>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

/** GuruJal hand-and-droplet emblem, rendered in pure white via a CSS
 *  filter so it reads cleanly over the dark teal trigger / header. */
function GuruJalGlyph({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- decorative UI chrome, not a content image
    <img
      src="/brand/gurujal-icon.png"
      alt=""
      aria-hidden
      className={className}
      // brightness(0) collapses every visible pixel to black; invert(1)
      // flips it to pure white. Transparent pixels stay transparent.
      style={{ filter: "brightness(0) invert(1)" }}
    />
  );
}
