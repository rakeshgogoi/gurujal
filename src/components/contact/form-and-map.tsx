"use client";

import { useState } from "react";

/**
 * Contact form (left) + Google Maps embed (right) on a single section.
 *
 * The form is a no-op for now — submits build a mailto: link to
 * management@gurujal.org with the message body so the user's email
 * client takes over. Once we have a backend / form provider we can
 * swap the submit handler.
 */

const OFFICE_EMAIL = "management@gurujal.org";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function buildMailto() {
    const subject = `Website enquiry from ${name || "a visitor"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      "Message:",
      message,
    ].join("\n");
    return `mailto:${OFFICE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      action={buildMailto()}
      method="post"
      encType="text/plain"
      className="flex flex-col gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
            Name
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-2 w-full rounded-xl border border-brand-soft bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
        />
      </label>

      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
          Message
        </span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="Tell us how we can help — collaboration, research, volunteering, supporting a pond…"
          className="mt-2 w-full rounded-xl border border-brand-soft bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted/70 focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/30"
        />
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary-dark"
      >
        Send message
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
      </button>

      <p className="text-xs leading-relaxed text-brand-muted">
        Submitting opens your email client with the message ready to send
        to <strong>{OFFICE_EMAIL}</strong>. Prefer to write directly?
        Email us any time.
      </p>
    </form>
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
