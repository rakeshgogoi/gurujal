"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const SESSION_KEY = "gj-urban-adda-26-promo-seen";
const OPEN_DELAY_MS = 2000;

/**
 * Urban Adda '26 "save the date" popup — shown once per browser session,
 * 2 seconds after the homepage finishes loading (the standard delay for
 * this kind of promo so it doesn't interrupt the initial page render).
 */
export function UrbanAddaPromo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => setIsOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Urban Adda 2026 — save the date"
      onClick={close}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-fade-up"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-w-md"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
        >
          <svg
            width="18"
            height="18"
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

        <Image
          src="/uploads/2026/07/urban-adda-26-save-the-date.jpeg"
          alt="Save the Date — Urban Adda '26, 5th–7th October at India Habitat Centre. One Adda for Change."
          width={629}
          height={788}
          priority
          className="block h-auto max-h-[85vh] w-full object-contain"
        />
      </div>
    </div>
  );
}
