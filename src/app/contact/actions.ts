"use server";

/**
 * Server action backing the contact form. Receives the form data,
 * validates it, sends an email via Resend to the GuruJal team, and
 * returns a serialisable result the client renders into success /
 * error UI.
 *
 * Required env vars (set in .env.local for dev, Vercel project env
 * for production):
 *   - RESEND_API_KEY            — API key from resend.com/api-keys
 *   - CONTACT_FROM_EMAIL        — verified sender, e.g.
 *                                  "GuruJal Website <noreply@gurujal.org>"
 *   - CONTACT_RECIPIENT_EMAIL   — inbox that receives submissions,
 *                                  e.g. "communications@gurujal.org"
 *
 * If any of those are missing the action returns a soft error so the
 * site keeps building (and visitors get a clear "please email us
 * directly" message instead of a 500).
 */

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialContactState: ContactFormState = {
  status: "idle",
  message: "",
};

export async function sendContactMessage(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot — real users don't fill the hidden `company` field.
  // Bots that auto-fill every input do, so we silently "succeed"
  // without sending anything. Returning a success message keeps the
  // bot from retrying.
  const honeypot = (formData.get("company") as string | null)?.trim();
  if (honeypot) {
    return {
      status: "success",
      message: "Thanks — your message has been received.",
    };
  }

  const name = (formData.get("name") as string | null)?.trim() || "";
  const email = (formData.get("email") as string | null)?.trim() || "";
  const phone = (formData.get("phone") as string | null)?.trim() || "";
  const message = (formData.get("message") as string | null)?.trim() || "";

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Please fill in your name, email and message.",
    };
  }
  // Minimal email-shape check; Resend will do the real validation.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "That email address doesn't look right — could you check it?",
    };
  }
  if (message.length > 5000) {
    return {
      status: "error",
      message: "Message is too long — please keep it under 5000 characters.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_RECIPIENT_EMAIL;

  if (!apiKey || !from || !to) {
    // Don't expose which env var is missing — log server-side, give
    // visitors a friendly fallback.
    console.error(
      "[contact] Missing env vars (RESEND_API_KEY / CONTACT_FROM_EMAIL / CONTACT_RECIPIENT_EMAIL). Form submission not delivered."
    );
    return {
      status: "error",
      message:
        "We can't deliver your message right now. Please email us directly at management@gurujal.org and we'll get back to you.",
    };
  }

  const resend = new Resend(apiKey);
  const subject = `Website enquiry from ${name}`;

  // Plain-text body — readable in any client, no template dependency.
  const text = [
    `New enquiry from the GuruJal website contact form.`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone || "(not provided)"}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  // Light HTML version so the email also looks tidy in clients that
  // prefer HTML.
  const html = `
    <p>New enquiry from the GuruJal website contact form.</p>
    <table cellpadding="4" cellspacing="0" style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px;">
      <tr><td style="color:#666;">Name:</td><td>${escapeHtml(name)}</td></tr>
      <tr><td style="color:#666;">Email:</td><td><a href="mailto:${encodeURIComponent(email)}">${escapeHtml(email)}</a></td></tr>
      <tr><td style="color:#666;">Phone:</td><td>${escapeHtml(phone) || "(not provided)"}</td></tr>
    </table>
    <p style="margin-top:16px;font-weight:600;">Message</p>
    <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
  `;

  try {
    const result = await resend.emails.send({
      from,
      to,
      // Use the visitor's email as Reply-To so a one-click reply
      // goes straight back to them.
      replyTo: email,
      subject,
      text,
      html,
    });
    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return {
        status: "error",
        message:
          "We couldn't send your message right now. Please try again, or email us directly at management@gurujal.org.",
      };
    }
  } catch (e) {
    console.error("[contact] Unexpected error sending email:", e);
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please try again, or email us directly at management@gurujal.org.",
    };
  }

  return {
    status: "success",
    message:
      "Thank you! Your message has reached us — we'll get back to you within a couple of working days.",
  };
}

/** Tiny HTML-escape so visitor input can't break the email markup. */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
