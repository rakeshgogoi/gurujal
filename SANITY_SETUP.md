# Sanity CMS — first-time setup

The GuruJal site now ships with an embedded Sanity Studio at `/studio`
so you (and any other invited editor) can author **Events** without
touching code. This is a one-time setup; afterwards editing is just
"open `/studio`, log in, save".

---

## 1. Create a free Sanity account & project

1. Go to <https://www.sanity.io/manage> and sign up (Google / GitHub
   sign-in is fine). The **Free plan** covers everything we need:
   3 editors, 100k API requests/month, 5GB asset storage.
2. Click **Create new project**.
3. Pick a name (e.g. `gurujal-cms`) and leave the dataset as
   `production`.
4. On the project's **API** tab, note the **Project ID** at the top
   (looks like `abc12345`).
5. On the project's **API → CORS Origins** tab, **Add origin** with:
   - URL: `http://localhost:3000` and `https://gurujal.org` (and your
     Vercel preview domain, if any)
   - Allow credentials: yes
   Without this the Studio can't talk to the dataset from the browser.

## 2. Add the project ID to your env

Create `.env.local` at the repo root (it's already gitignored):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12345
NEXT_PUBLIC_SANITY_DATASET=production
```

On Vercel, add the same two variables under **Settings → Environment
Variables** for the Production environment (and Preview if you want
the Studio to work on preview deploys).

Restart `npm run dev` after editing `.env.local`.

## 3. Open the Studio

Go to <http://localhost:3000/studio>. Sign in with your Sanity
account (same one you used to create the project).

You should see the GuruJal CMS sidebar with **Event** as the only
document type.

## 4. Create your first event

1. Click **Event → Create**.
2. Fill in the fields — the form mirrors the existing
   `EventDetailHero` props one-for-one (eyebrow, date line,
   headline parts, lead paragraph, fact chips, primary/secondary CTAs,
   backdrop image). Optional **Body content** is a portable-text
   editor for the rest of the page (paragraphs, headings, lists, embedded
   images).
3. Hit **Publish**.

## 5. View the event on the site

Visit `/events/<your-slug>` (you set the slug in the form). The page
renders the shared GuruJal `EventDetailHero` with your Sanity data
plus a body section for any portable text you added.

The old hardcoded event pages (e.g. `/urban-adda-25`,
`/hydromingle-event`) are still in the codebase under `src/app/` —
they keep working as-is. You can either migrate them into Sanity one
at a time, or just author new events there.

---

## Day-to-day editing

- Open `/studio` (production URL once deployed) → log in → edit →
  Publish. Changes appear on the public site after the next
  rebuild (Vercel rebuilds on push automatically; you can also
  trigger a deploy from Vercel's dashboard to pick up CMS changes
  faster).
- For instant preview, we can add Sanity's draft-mode wiring later —
  shout when you want that.

## Inviting another editor

In <https://www.sanity.io/manage> → your project → **Members** → invite
by email. Up to 3 users on the free plan.

## What lives where (code map)

```
sanity/
├── env.ts              ← reads NEXT_PUBLIC_SANITY_PROJECT_ID etc.
├── lib/
│   ├── client.ts       ← public read-only Sanity client
│   ├── image.ts        ← urlFor() helper for image transforms
│   └── queries.ts      ← GROQ queries the site sends
└── schemas/
    ├── index.ts        ← master schema list
    └── event.ts        ← Event document type

sanity.config.ts        ← Studio config (basePath, plugins, schemas)

src/app/
├── studio/[[...tool]]/page.tsx   ← embedded Studio route
└── events/[slug]/page.tsx        ← Sanity-driven event detail
```

To add a new document type later (Report, Team Member, News post…),
create a new file under `sanity/schemas/`, export it from
`schemas/index.ts`, and add a matching dynamic Next.js route under
`src/app/`.
