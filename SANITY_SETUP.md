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

## Migrating the four existing hardcoded events

The Studio starts empty — the existing event pages
(`urban-adda-25`, `roots-and-recharge-symposium`, `hydromingle-event`,
`real-nature-in-restored-landscapes`) live as hardcoded TSX files
under `src/app/`, **not** in Sanity. A one-time migration script
copies their hero data into Sanity so you can edit them from the
Studio going forward.

### Steps

1. At <https://www.sanity.io/manage> → your project →
   **API → Tokens → Add API token**.
2. Name it `migration`, permission **Editor**, click **Save**.
3. Copy the token (`sk...`). Sanity only shows it once.
4. Add it to `.env.local` (alongside the project ID):
   ```
   SANITY_WRITE_TOKEN=sk...your-token...
   ```
5. Run:
   ```
   npm run sanity:migrate-events
   ```

You'll see four ✓s and the events will appear under **Event** in
the Studio.

Re-running the script is safe — it upserts by deterministic id
(`event-<slug>`), so a second run replaces instead of duplicating.

### After verifying

Once each event renders at `/events/<slug>` correctly, you can
delete the old hardcoded pages (they're replaced by Sanity):

- `src/app/urban-adda-25/`
- `src/app/roots-and-recharge-symposium/`
- `src/app/hydromingle-event/`
- `src/app/real-nature-in-restored-landscapes/`

And revoke the migration token at sanity.io/manage when done.

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
