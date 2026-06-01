"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendContactMessage } from "@/app/contact/actions";
import { initialContactState } from "@/app/contact/state";

/**
 * Contact form (left) + Google Maps embed (right) on a single section.
 *
 * The form posts to the `sendContactMessage` server action which
 * delivers the submission via Resend. UI uses `useActionState` for
 * the success / error message and `useFormStatus` for the submit
 * button's pending state.
 */

const OFFICE_EMAIL = "management@gurujal.org";

function ContactForm() {
  const [state, formAction] = useActionState(
    sendContactMessage,
    initialContactState
  );

  // After a successful send, replace the whole form with a thank-you
  // card so the user gets clear confirmation and can't accidentally
  // submit twice.
  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-brand-green/30 bg-brand-green/10 p-6 text-brand-ink">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/20 text-brand-green-dark">
          <svg
            width="20"
            height="20"
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
        </div>
        <p className="text-base leading-relaxed sm:text-lg">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      {/* Honeypot — visually hidden, off the tab order. Real users
          won't see or fill it; bots that auto-fill every input do,
          and the server action silently drops those submissions. */}
      <div
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Company (leave blank)
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
            Name
          </span>
          <input
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="mt-2 w-full rounded-xl border border-brand-soft bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
            Phone
          </span>
          <input
            type="tel"
            name="phone"
            placeholder="Optional"
            className="mt-2 w-full rounded-xl border border-brand-soft bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
          />
        </label>
      </div>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Email
        </span>
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="mt-2 w-full rounded-xl border border-brand-soft bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
        />
      </label>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help — collaboration, research, volunteering, supporting a pond…"
          className="mt-2 w-full rounded-xl border border-brand-soft bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
        />
      </label>

      {state.status === "error" && (
        <div
          role="alert"
          className="rounded-xl border border-brand-orange/40 bg-brand-orange/10 px-4 py-3 text-sm text-brand-orange-dark"
        >
          {state.message}
        </div>
      )}

      <SubmitButton />

      <p className="text-xs leading-relaxed text-brand-muted">
        Your message goes straight to{" "}
        <strong>{OFFICE_EMAIL}</strong>. Prefer to write directly? Email
        us any time.
      </p>
    </form>
  );
}

/** Submit button uses useFormStatus so it can swap to a "Sending…"
 *  label while the server action is in flight. Must be a separate
 *  component because useFormStatus only reads from a parent <form>. */
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary-dark disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Sending…" : "Send message"}
      {!pending && (
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
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      )}
    </button>
  );
}

function MapEmbed() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-brand-soft/60 ring-1 ring-brand-soft/70 lg:aspect-auto lg:h-full">
      <iframe
        title="GuruJal office on Google Maps"
        src="https://maps.google.com/maps?q=Gurujal%2C%20Sector%2026A%2C%20Gurugram%2C%20Haryana%20122002&t=m&z=14&output=embed&iwloc=near"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
      />
    </div>
  );
}

export function ContactFormAndMap() {
  return (
    <section className="bg-brand-mist">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Write to us
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Send us a message
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            We typically respond within a couple of working days.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-brand-soft/70 sm:p-8 lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
