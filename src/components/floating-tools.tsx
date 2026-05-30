"use client";

import { useEffect, useState } from "react";

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

function AiAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label="GuruJal AI assistant"
          className="absolute bottom-20 right-0 w-[20rem] max-w-[calc(100vw-3rem)] overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/20 ring-1 ring-brand-soft animate-fade-up"
        >
          <div className="relative flex items-center gap-3 bg-gradient-to-br from-brand-primary via-brand-teal to-brand-accent p-4 text-white">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30 backdrop-blur">
              <SparkleIcon className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold">GuruJal Assistant</div>
              <div className="text-[11px] text-white/80">
                Coming soon · We&apos;re still teaching it about water.
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

          <div className="space-y-3 p-4 text-sm text-brand-ink/85">
            <p>
              Hi! I&apos;ll soon be able to help you with:
            </p>
            <ul className="space-y-1.5 text-[13px] text-brand-muted">
              <li className="flex items-start gap-2">
                <Pip /> Pond restoration enquiries
              </li>
              <li className="flex items-start gap-2">
                <Pip /> Rainwater harvesting questions
              </li>
              <li className="flex items-start gap-2">
                <Pip /> Volunteer & partnership info
              </li>
              <li className="flex items-start gap-2">
                <Pip /> Finding the right report or page
              </li>
            </ul>
            <div className="pt-1">
              <input
                disabled
                placeholder="Ask anything about GuruJal…"
                className="w-full cursor-not-allowed rounded-full border border-brand-soft bg-brand-mist/50 px-4 py-2.5 text-sm text-brand-muted placeholder:text-brand-muted/70"
              />
            </div>
          </div>
        </div>
      )}

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Open AI assistant"
        aria-expanded={open}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-primary via-brand-teal to-brand-accent text-white shadow-xl shadow-brand-primary/30 transition hover:scale-105 hover:shadow-2xl"
      >
        {/* Soft pulse halo */}
        <span
          aria-hidden
          className="absolute inset-0 -z-10 animate-ping-slow rounded-full bg-brand-accent/40"
        />
        <SparkleIcon className="h-6 w-6 transition group-hover:rotate-12" />
        {/* Status dot */}
        <span
          aria-hidden
          className="absolute right-1 top-1 inline-flex h-3 w-3 items-center justify-center rounded-full bg-brand-green ring-2 ring-white"
        />
      </button>
    </div>
  );
}

function Pip() {
  return (
    <span
      aria-hidden
      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent"
    />
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

function SparkleIcon({ className }: { className?: string }) {
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
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}
