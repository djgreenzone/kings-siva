# King's Siva Academy — Website + Giveaway

Mobile-first Next.js landing page for King's Siva Academy and the "Win a Trip to Samoa" competition giveaway. Teal / gold / cyan brand pulled from the FIAFIA 26 / Measina artwork. Fonts: Anton (display), Montserrat (body), Kaushan Script (accent).

## Quick start (local)

```bash
npm install
cp .env.local.example .env.local   # then fill in the Mailchimp values
npm run dev                         # http://localhost:3000
```

## Add your assets

Put these in `/public` (see `public/README-ASSETS.txt`):

- `logo.png` — King's Siva Academy logo
- `hero.mp4` — background video
- `hero-poster.jpg` — poster still for the video

## Wire up Mailchimp (the entry form)

The styled form on the site posts to a serverless route (`app/api/subscribe/route.ts`)
which writes each entrant **directly into your Mailchimp audience via the Marketing
API** and tags them so they show up in your workflows. On-page submit, no redirect.

Set these in `.env.local` (local) and in **Vercel → Project → Settings → Environment
Variables** (production). They are server-side — do NOT prefix with `NEXT_PUBLIC`:

| Variable | Where to find it |
|---|---|
| `MAILCHIMP_API_KEY` | Account & billing → Extras → API keys → Create a key |
| `MAILCHIMP_AUDIENCE_ID` | Audience → Settings → Audience name and campaign defaults → Audience ID |
| `MAILCHIMP_SERVER_PREFIX` | The part before `.admin.mailchimp.com` in your URL (e.g. `us21`) |
| `MAILCHIMP_STATUS_IF_NEW` | `subscribed` (direct) or `pending` (double opt-in) |
| `MAILCHIMP_TAGS` | Comma-separated tags applied to every entrant |

**How your team sees entrants:** this is API-based, so it is NOT a named "form"
in Mailchimp's Signup Forms. Entrants appear as contacts under
**Audience → Contacts → filter by tag** (`MAILCHIMP_TAGS`).

> Merge fields sent: `FNAME`, `LNAME`, `PHONE`, `POSTCODE`. If your audience uses a
> different post-code merge tag, update it in `app/api/subscribe/route.ts` (`merge_fields`).

## Push to GitHub

```bash
cd kings-siva
git init
git add .
git commit -m "Initial King's Siva Academy site + giveaway"
git branch -M main
git remote add origin https://github.com/<your-username>/kings-siva.git
git push -u origin main
```

## Deploy to Vercel

1. vercel.com → **Add New → Project** → import the `kings-siva` repo.
2. Framework preset auto-detects **Next.js** — no build config needed.
3. Add the two `NEXT_PUBLIC_MAILCHIMP_*` env vars.
4. Deploy → you get a `*.vercel.app` preview URL instantly (no domain required).
5. When the domain is ready, add it in **Vercel → Settings → Domains**.

## Edit the content

- Homepage sections: `components/Hero.tsx`, `components/Giveaway.tsx`
- Prizes: edit the two `<PrizeCard>` blocks in `components/Giveaway.tsx`
- Competition terms: `app/terms/page.tsx` — gold highlighted items still need confirming
- Brand colors/fonts: `app/globals.css` + `app/layout.tsx`

## Still to confirm (for the terms)

- Registered promoter name / ABN / address
- Entry open + close date/time, and exact draw date/time + event name
- First-prize flight origin/airline, travel date window, total prize value (AUD)
- Winner notification method + claim window
