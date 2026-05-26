"use client";

import { useState } from "react";

/**
 * Floating UI tools that sit above the page content:
 *   - Language picker on the bottom-left (display only — opens a dummy
 *     popover listing common languages).
 *   - AI assistant on the bottom-right (display only — opens a dummy
 *     panel hinting at chat support).
 *
 * Both are present on every page via the root layout. They are
 * positioned with `fixed` and a high z-index so they float above
 * marquees, slides and section background blobs. Real functionality
 * will be wired up later — for now these are visual placeholders.
 */
export function FloatingTools() {
  return (
    <>
      <LanguagePicker />
      <AiAssistant />
    </>
  );
}

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "हि", label: "हिन्दी (Hindi)" },
  { code: "বা", label: "বাংলা (Bengali)" },
  { code: "த", label: "தமிழ் (Tamil)" },
  { code: "తె", label: "తెలుగు (Telugu)" },
  { code: "मर", label: "मराठी (Marathi)" },
];

function LanguagePicker() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("EN");

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Popover */}
      {open && (
        <div
          role="dialog"
          aria-label="Language picker"
          className="absolute bottom-16 left-0 w-56 rounded-2xl bg-white p-2 shadow-2xl shadow-black/15 ring-1 ring-brand-soft animate-fade-up"
        >
          <div className="px-3 pb-2 pt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
            Translate page
          </div>
          <ul className="max-h-72 overflow-y-auto">
            {LANGUAGES.map((l) => {
              const selected = l.code === active;
              return (
                <li key={l.code}>
                  <button
                    type="button"
                    onClick={() => {
                      setActive(l.code);
                      setOpen(false);
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
            Powered by GuruJal Translate · Coming soon
          </div>
        </div>
      )}

      {/* Trigger */}
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
