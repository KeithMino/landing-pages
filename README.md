# Mino IT — Landing Pages

Marketing landing pages for **Mino IT Managed Services**, built with Next.js and deployed on Vercel.

## Live URLs

| Page | URL | Status |
|------|-----|--------|
| Total Coverage | https://landing-pages-six-lime.vercel.app/ | Live |

**Vercel Dashboard:** https://vercel.com/mino-its-projects/landing-pages
**GitHub Repo:** https://github.com/KeithMino/landing-pages

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15.5.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Icons | lucide-react | 0.563.x |
| Font | Roboto (via `next/font/google`) | — |
| Runtime | React | 19.x |
| Deployment | Vercel (auto-deploy from `master`) | — |
| Package Manager | npm | — |

---

## Project Structure

```
landing-pages/
├── public/
│   └── images/
│       ├── logo-blue.png          # Mino IT logo (blue, for light backgrounds)
│       └── logo-white.png         # Mino IT logo (white, for dark backgrounds)
├── src/
│   ├── app/
│   │   ├── globals.css            # Tailwind directives + brand colour tokens
│   │   ├── layout.tsx             # Root layout (font, metadata, JSON-LD)
│   │   └── page.tsx               # Page assembly — imports and renders all sections
│   ├── components/
│   │   ├── Navigation.tsx         # Sticky nav bar + mobile hamburger menu
│   │   ├── Hero.tsx               # Hero section (headline, CTAs, badge)
│   │   ├── TrustBar.tsx           # 4 stat badges (94%, 100%, 99.9%, 17+)
│   │   ├── WhoIsThisFor.tsx       # 5 industry cards with icons
│   │   ├── Outcome.tsx            # Full-width blue value proposition band
│   │   ├── ServicePillars.tsx     # 6 expandable service pillar cards
│   │   ├── Bonuses.tsx            # 7 bonus cards with value badges
│   │   ├── Pricing.tsx            # Two-tier pricing cards
│   │   ├── Guarantee.tsx          # 90-day money-back guarantee
│   │   ├── Availability.tsx       # Limited availability / scarcity callout
│   │   ├── ContactCTA.tsx         # Final CTA section (booking + phone + email)
│   │   └── Footer.tsx             # Dark footer with logo, contact, ABN
│   └── lib/
│       ├── content.ts             # ALL page copy as typed constants
│       └── useInView.ts           # Intersection Observer hook for scroll animations
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md                      # This file
```

---

## Architecture Decisions

### Content separated from components

All page copy lives in **`src/lib/content.ts`** as typed data structures. Components import what they need and render it. This means:

- **To change copy** (headlines, descriptions, pricing, etc.) — edit `content.ts` only
- **To change layout or styling** — edit the relevant component in `src/components/`
- **To add a new section** — create a component, add content to `content.ts`, import in `page.tsx`

### Server Components by default

Most components render on the server (React Server Components). Only components that need interactivity have `"use client"` at the top:

| Client Component | Why |
|-------------------|-----|
| `Navigation.tsx` | Scroll detection, mobile menu toggle |
| `ServicePillars.tsx` | Expand/collapse card state |
| `WhoIsThisFor.tsx` | Scroll-triggered animation |
| `Outcome.tsx` | Scroll-triggered animation |
| `Bonuses.tsx` | Scroll-triggered animation |
| `Pricing.tsx` | Scroll-triggered animation |
| `Guarantee.tsx` | Scroll-triggered animation |
| `Availability.tsx` | Scroll-triggered animation |
| `ContactCTA.tsx` | Scroll-triggered animation |

Server-only components: `Hero.tsx`, `TrustBar.tsx`, `Footer.tsx`, `page.tsx`, `layout.tsx`

### Scroll animations via `useInView`

`src/lib/useInView.ts` is a custom Intersection Observer hook. Components use it for a "fade up" entrance animation:

```tsx
const { ref, isVisible } = useInView();
// ...
<div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
```

No animation library is used — just CSS transitions + one hook.

---

## Brand Tokens (Tailwind)

Brand colours are defined in **`src/app/globals.css`** using Tailwind v4's `@theme inline` syntax:

```css
@theme inline {
  --color-mino-blue: #0A73BA;        /* Primary — headings, buttons, links */
  --color-mino-blue-light: #E8F4FA;  /* Light tint — icon backgrounds, badges */
  --color-mino-blue-dark: #085A94;   /* Hover state for primary buttons */
  --color-mino-dark: #32373C;        /* Footer, dark UI elements */
  --color-mino-text: #333333;        /* Body text */
  --color-mino-white: #FFFFFF;       /* Backgrounds */
  --color-mino-gray-50: #F8F9FA;     /* Light section backgrounds */
  --color-mino-gray-100: #F0F2F4;    /* Subtle borders */
  --color-mino-gray-200: #E2E5E9;    /* Card borders */
}
```

Use these in Tailwind classes as `bg-mino-blue`, `text-mino-dark`, `border-mino-gray-200`, etc.

**Font:** Roboto is loaded via `next/font/google` in `layout.tsx` and set as the `--font-roboto` CSS variable. The Tailwind `font-sans` utility uses this automatically via the `@theme inline` block.

**Brand reference:** The full brand guide is at `../brand-config.md` (in the parent Claude Files directory). All colours, fonts, tone of voice, and logo rules are defined there.

---

## Current Landing Page: Total Coverage

### What it markets

**Mino IT Total Coverage™** — a managed IT services offering for Brisbane-based regulated businesses with 10–100 staff (medical, legal, accounting, manufacturing, construction).

### Page sections (top to bottom)

1. **Navigation** — Sticky nav, logo, anchor links to key sections, "Get Started" CTA
2. **Hero** — "Mino IT Total Coverage™" headline, subheadline, badge, two CTAs
3. **Trust Bar** — 94% first-touch resolution, 100% Australian help desk, 99.9% uptime, 17+ years
4. **Who Is This For** — 5 industry cards (Medical, Law, Accounting, Manufacturing, Construction)
5. **The Outcome** — Blue band with value proposition summary
6. **What's Included** — 6 service pillars (expandable cards with bullet details):
   - Compliance & Audit Readiness (SMB1001 Gold, 27 controls)
   - Cyber Threat Prevention & Containment
   - Business Data Protection & Recovery
   - Staff Access, Identity & Change Control
   - IT Service & Incident Prevention
   - Executive Oversight & Visibility
7. **Bonuses** — 7 bonus cards with dollar values, $22,000+/yr total
8. **Pricing** — $3,000/mo per business + $120/user/mo
9. **Guarantee** — 90-day money-back guarantee
10. **Availability** — One new client every 60 days (scarcity)
11. **Contact CTA** — "Book a Discovery Call" button + phone/email
12. **Footer** — White logo on dark background, full contact details, ABN

### CTA destination

All "Book a Discovery Call" / "Get Started" buttons link to:
```
https://outlook.office.com/bookwithme/user/37460057d31d4b06b4dae27e1dd39845@minoit.com.au?anonymous&ep=plink
```
This is the Microsoft Bookings page. To change it, update `siteConfig.bookingUrl` in `src/lib/content.ts`.

---

## Common Tasks

### Update copy or pricing

Edit `src/lib/content.ts`. All page text is in this single file. Key exports:

| Export | What it controls |
|--------|-----------------|
| `siteConfig` | Company name, phone, email, website, ABN, booking URL |
| `heroContent` | Hero headline, subheadline, badge, CTAs, quote |
| `trustStats` | The 4 stat badges |
| `industries` | Industry cards (name, icon, description) |
| `outcomeContent` | Blue band heading and body |
| `servicePillars` | 6 service pillar cards (title, subtitle, icon, bullets) |
| `bonuses` | 7 bonus cards (title, value, description) |
| `pricing` | Pricing tiers (name, price, features, CTA, notes) |
| `guaranteeContent` | Guarantee heading, body, tagline |
| `availabilityContent` | Scarcity heading, body, detail |
| `ctaContent` | Final CTA heading, subheading |

### Change the booking URL

Update `siteConfig.bookingUrl` in `src/lib/content.ts`.

### Change brand colours

Edit `src/app/globals.css` — the `@theme inline` block defines all colour tokens.

### Add a new section

1. Create `src/components/NewSection.tsx`
2. Add content data to `src/lib/content.ts`
3. Import and add the component in `src/app/page.tsx` in the desired position
4. If scroll animation is needed, add `"use client"` and use the `useInView` hook

### Add a new landing page

The project is named `landing-pages` (plural) to support multiple pages. To add a second landing page:

1. Create `src/app/new-page/page.tsx` (Next.js App Router file-based routing)
2. Create corresponding components in `src/components/` (or reuse existing ones)
3. Add content to `src/lib/content.ts` (or create a new content file like `src/lib/new-page-content.ts`)

### Change logos

Replace files in `public/images/`:
- `logo-blue.png` — used in Navigation (light background)
- `logo-white.png` — used in Footer (dark background)

Source logos are in `../brand-assets/` (parent Claude Files directory).

---

## SEO & Metadata

Defined in `src/app/layout.tsx`:

- **Title:** "Mino IT Total Coverage™ | Managed IT for Regulated Businesses"
- **Description:** Optimised for Brisbane managed IT services keywords
- **Open Graph:** Configured for social media sharing (title, description, locale `en_AU`)
- **JSON-LD:** `LocalBusiness` structured data (name, phone, email, address)
- **Keywords:** managed IT services Brisbane, cyber security Brisbane, IT compliance, SMB1001

### Anchor link IDs (for navigation)

| Section | ID |
|---------|-----|
| What's Included | `#whats-included` |
| Bonuses | `#bonuses` |
| Pricing | `#pricing` |
| Guarantee | `#guarantee` |
| Contact | `#contact` |
| Who It's For | `#who-its-for` |

---

## Deployment

### Automatic (CI/CD)

Every push to the `master` branch on GitHub auto-deploys to Vercel. No manual action needed.

### Manual local build

```bash
npm run build    # Production build
npm run dev      # Dev server (http://localhost:3000)
npm run start    # Serve production build locally
npm run lint     # Run ESLint
```

**Note:** Node.js is installed at `C:\Program Files\nodejs\` (v24.x). If `node`/`npm` aren't on PATH, use the full path or add it to your system PATH.

### Vercel settings

- **Team:** Mino IT's projects (`team_OdMEym0NynrPoTJ4myoPwnro`)
- **Project:** landing-pages
- **Framework preset:** Next.js (auto-detected)
- **Root directory:** `./`
- **Build command:** `next build` (default)
- **Output directory:** `.next` (default)
- **Branch:** `master`

### Custom domain

To add a custom domain (e.g. `totalcoverage.minoit.com.au`):

1. Go to Vercel Dashboard > landing-pages > Settings > Domains
2. Add the domain
3. Add a CNAME record in your DNS provider: `totalcoverage` → `cname.vercel-dns.com`

---

## Dependencies

| Package | Purpose |
|---------|---------|
| `next` | React framework (App Router, SSR, static generation) |
| `react` / `react-dom` | UI library |
| `lucide-react` | Icon library (MIT, tree-shakeable) |
| `tailwindcss` | Utility-first CSS framework |
| `typescript` | Type safety |
| `eslint` + `eslint-config-next` | Linting |

No other runtime dependencies. The project is intentionally lean.

---

## Icon Reference

Icons are from [Lucide](https://lucide.dev/icons/). Used across components:

| Icon | Component | Purpose |
|------|-----------|---------|
| `Menu`, `X` | Navigation | Hamburger menu open/close |
| `Stethoscope`, `Scale`, `Calculator`, `Factory`, `HardHat` | WhoIsThisFor | Industry icons |
| `ShieldCheck`, `Lock`, `Database`, `Users`, `Headphones`, `BarChart3` | ServicePillars | Pillar icons |
| `ChevronDown` | ServicePillars | Expand/collapse indicator |
| `Gift` | Bonuses | Bonus card icon |
| `Check` | Pricing | Feature check marks |
| `ShieldCheck` | Guarantee | Shield icon |
| `Hourglass` | Availability | Scarcity icon |
| `Phone`, `Mail` | ContactCTA | Contact icons |

---

## Related Files (outside this project)

These files live in the parent directory (`Claude Files/`) and are referenced by this project:

| File | Purpose |
|------|---------|
| `brand-config.md` | Full Mino IT brand guide (colours, fonts, tone, logos) |
| `brand-assets/logo-blue.png` | Source logo file (copied to `public/images/`) |
| `brand-assets/logo-white.png` | Source logo file (copied to `public/images/`) |
| `CLAUDE.md` | Claude Code project instructions (brand rules, HTML/CSS conventions) |

---

## Offer Source Document

The landing page content was derived from:

**File:** `Mino IT Offer 2026 v3.docx`
**Location:** `C:\Users\Keith.MINOIT\Mino IT Managed Services\Accounts and Admin - General\Business Plan 2022\Products and Services\`

This is the master offer document. If the offer changes, update `src/lib/content.ts` to match.
