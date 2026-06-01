# Contact form — first-time setup

The contact form at `/contact` is now backed by a Next.js server
action that delivers each submission to your inbox via **Resend**
(transactional email service). Free tier covers 100 emails/day and
3,000/month — plenty for a typical NGO contact form.

Until you complete the setup below, the form will return a friendly
"please email us directly" error instead of delivering messages.

---

## 1. Create a Resend account

1. Go to <https://resend.com> and sign up (free).
2. Click **API Keys → Create API Key**. Name it something like
   `gurujal-contact-form`, scope = **Sending access**. Copy the key
   (it starts with `re_`). You only see it once.

## 2. Verify a sender domain

Resend requires a verified domain before it'll send real email.

1. **Domains → Add Domain**. Enter `gurujal.org`.
2. Resend shows three DNS records (one MX-style + two TXT records
   for SPF and DKIM). Add all three to your GoDaddy DNS panel for
   `gurujal.org`.
3. Back on Resend, click **Verify**. DNS propagation can take a few
   minutes to an hour.

While DNS propagates, you can test the form using Resend's shared
sandbox domain — set `CONTACT_FROM_EMAIL=GuruJal <onboarding@resend.dev>`.
Switch to your own domain once verification clears.

## 3. Add env vars

Local (`.env.local`):

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_FROM_EMAIL="GuruJal Website <noreply@gurujal.org>"
CONTACT_RECIPIENT_EMAIL=communications@gurujal.org
```

Vercel — Project **Settings → Environment Variables**, same three
keys for the Production environment (and Preview if you want the
form to work on preview deploys).

Restart `npm run dev` after editing `.env.local`.

## 4. Test it

1. Open <http://localhost:3000/contact>, fill the form, click Send.
2. The submit button should show "Sending…" briefly, then the form
   replaces itself with a green thank-you card.
3. Check the inbox you used for `CONTACT_RECIPIENT_EMAIL` — the
   email arrives with the sender's name / email / phone / message.
   Hit reply and it goes back to the visitor (Reply-To is set
   automatically).

## How it works (code map)

```
src/app/contact/actions.ts                 ← server action `sendContactMessage`
src/components/contact/form-and-map.tsx    ← form, wired via useActionState
```

The server action:

- Validates name / email / message
- Drops bot submissions via a hidden honeypot field
- Calls Resend with both plain-text and HTML versions of the message
- Sets `Reply-To: <visitor's email>` so replies go back to the
  sender, not to the verified `noreply@…` address
- Falls back to a friendly "email us directly" error if any env var
  is missing or Resend returns an error

Server logs (`vercel logs` or `npm run dev` terminal) will tell you
exactly what went wrong when delivery fails.
