@AGENTS.md

# Widescreen Digital Solutions — wds-next

Marketing and portfolio website for **Widescreen Digital Solutions**, an AI-oriented UI/UX and product design studio based in India. Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.4 (App Router) |
| UI Library | React 19.2.4 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + PostCSS + CSS variables |
| Backend | Google Sheets API (via `googleapis`) |
| Analytics | Google Analytics 4 (GA_ID: `G-9ELMZZT521`) |
| Linting | ESLint 9 (flat config) |

No database, no ORM, no auth system, no test framework.

---

## Repository Layout

```
/
├── app/                      # Next.js App Router pages and API routes
│   ├── layout.tsx            # Root layout: metadata, fonts, GA4, JSON-LD
│   ├── page.tsx              # Home page (client component)
│   ├── globals.css           # Design tokens, utility classes, animations
│   ├── icon.svg              # Favicon
│   ├── api/
│   │   ├── contact/route.ts  # POST — contact form → Google Sheets
│   │   └── newsletter/route.ts # POST — newsletter signup → Google Sheets
│   ├── contact-us/page.tsx
│   ├── refund-and-cancellation/page.tsx
│   ├── terms-and-conditions/page.tsx
│   └── templates/            # 14 industry-specific landing page demos
│       ├── page.tsx           # Template gallery index
│       ├── accounts/          # HR / Accounts
│       ├── analytics/         # Data Analytics
│       ├── app-showcase/      # App Showcase
│       ├── consulting/        # Consulting Firm
│       ├── design/            # Design Consulting
│       ├── devops/            # DevOps Agency
│       ├── ecommerce/         # Ecommerce Landing
│       ├── fast-food/         # Fast Food
│       ├── food-court/        # Food Court
│       ├── grievance/         # Grievance App
│       ├── hospital/          # Hospital Landing
│       ├── hr/                # HR Consulting
│       ├── portfolio/         # Portfolio Landing
│       └── shopping/          # Shopping Mart
├── components/
│   ├── Cursor.tsx             # Custom animated cursor (fixed overlay)
│   ├── Modal.tsx              # Generic modal with Escape-key handling
│   ├── SidebarNav.tsx         # Legacy sidebar navigation (unused on home)
│   ├── TopNav.tsx             # Primary sticky navigation
│   ├── useReveal.ts           # IntersectionObserver hook for scroll reveals
│   └── sections/              # Home page sections (rendered in page.tsx)
│       ├── Hero.tsx           # Canvas neural-network animation + headline
│       ├── Work.tsx           # 6 featured projects with canvas visualizations
│       ├── Templates.tsx      # Template showcase grid
│       ├── Services.tsx       # 5 services + CTA card
│       ├── Process.tsx        # 4-step process section
│       ├── WhyUs.tsx          # Value proposition
│       ├── Testimonials.tsx   # Client testimonials
│       ├── CTA.tsx            # Call-to-action banner
│       ├── Contact.tsx        # Contact form with client-side validation
│       └── Newsletter.tsx     # Multi-channel newsletter signup
├── public/                    # Static assets served at root
├── next.config.ts             # Minimal Next.js config (no customisations yet)
├── tsconfig.json              # Strict TypeScript; path alias @/* → root
├── eslint.config.mjs          # ESLint flat config (core-web-vitals + typescript)
└── postcss.config.mjs         # @tailwindcss/postcss plugin
```

---

## Development Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint
```

No test runner is configured. TypeScript type-checking is implicit via `next build`.

---

## Environment Variables

The API routes require a Google Service Account with Sheets access. Set these before running locally:

```
GOOGLE_SERVICE_ACCOUNT_EMAIL=<service-account@project.iam.gserviceaccount.com>
GOOGLE_PRIVATE_KEY=<-----BEGIN RSA PRIVATE KEY-----\n...>
GOOGLE_SHEET_ID=<spreadsheet-id>
```

`GOOGLE_PRIVATE_KEY` must have literal `\n` in the env value; the route calls `.replace(/\\n/g, '\n')` to expand them.

---

## Routing Conventions (App Router)

- Every directory under `app/` with a `page.tsx` becomes a route.
- API handlers live in `app/api/<name>/route.ts` and export named HTTP verb functions (`GET`, `POST`, etc.).
- The home page (`app/page.tsx`) is a **client component** (`'use client'`). Add that directive whenever you need `useState`, `useEffect`, event handlers, or canvas APIs.
- Server components are the default for everything else (layouts, legal pages). Keep them server components unless interactivity is required.

---

## Styling System

### Design Tokens (globals.css)

All values are CSS custom properties. **Never hard-code colors or fonts — always use the tokens.**

```css
/* Backgrounds */
--bg, --bg2, --bg3

/* Accent colors (confusingly named in code) */
--blue:   #F97316   /* orange */
--purple: #FB923C   /* light orange */
--pink:   #FBBF24   /* amber */

/* Text */
--text, --text-muted, --text-dim

/* Glass morphism */
--glass, --glass-b

/* Borders */
--border, --border-b

/* Fonts */
--ff-display:  'Bricolage Grotesque'
--ff-body:     'Plus Jakarta Sans'
--ff-mono:     'Space Mono'

/* Easing */
--ease-out, --ease-in

/* Glows */
--glow-b, --glow-p
```

### Utility Classes

```css
.reveal              /* invisible by default */
.reveal.visible      /* triggered by useReveal hook — fades/slides in */
.reveal-delay-1/2/3/4  /* stagger delays */
.section-label       /* eyebrow label with divider */
.section-title       /* large responsive heading */
.btn-primary         /* gradient button */
.btn-ghost           /* outlined button */
.metric              /* stat/number display */
```

### Tailwind

Tailwind v4 is available but sparingly used. The primary styling approach is scoped `<style>{`...`}</style>` blocks inside component files + globals.css utilities.

---

## Component Conventions

### Scroll Reveal

Use the `useReveal` hook (in `components/useReveal.ts`) for scroll-triggered animations:

```tsx
import useReveal from '@/components/useReveal';

export default function MySection() {
  useReveal();
  return (
    <section>
      <h2 className="reveal">Heading</h2>
      <p className="reveal reveal-delay-1">Paragraph</p>
    </section>
  );
}
```

The hook adds `.visible` to `.reveal` elements when they cross 12% of the viewport.

### Canvas Animations

Canvas effects (Hero neural network, Work project cards) are implemented with `useRef` + `useEffect` + `requestAnimationFrame`. Always:
- Store animation frame IDs in refs and cancel on cleanup.
- Add a resize listener that re-reads `canvas.width/height`.
- Return a cleanup function from `useEffect`.

### Inline Styles

Each section component has a `<style>` block at the top for scoped CSS. Keep styles for a component inside its own file. Do not move them to globals.css unless they represent a reusable utility.

---

## API Routes

### `/api/contact` — POST

Accepts: `{ firstName, lastName, email, company, service, budget, message }`

Behaviour:
- Rate limit: 5 submissions per IP per 10 minutes (in-memory Map).
- Strips HTML tags and truncates all fields before writing.
- Validates email format with regex.
- Appends a row to the `'Contact Leads'` sheet in `GOOGLE_SHEET_ID`.

### `/api/newsletter` — POST

Accepts: `{ email?, mobile?, whatsapp?, telegram? }` (at least one required)

Behaviour:
- Same rate limiting and sanitisation pattern.
- Appends to the `'Newsletter'` sheet.

**Security invariants to preserve:**
- Always call `clean()` on every untrusted string before writing.
- Never skip rate-limit checks.
- Return `429` for rate-limit breaches, `400` for validation failures, `500` for Google API errors.

---

## SEO & Metadata

- `app/layout.tsx` defines site-wide `Metadata` with OpenGraph, Twitter card, robots, JSON-LD Organisation schema.
- Individual pages can export their own `metadata` or `generateMetadata` to override the title template (`%s | Widescreen Digital Solutions`).
- Canonical URL base: `https://widescreen.co.in`
- Google Analytics 4 is injected via `next/script` with `strategy="afterInteractive"`.

---

## Performance Patterns

- Fonts loaded from Google Fonts with `<link rel="preconnect">` in `<head>`.
- GA4 script uses `strategy="afterInteractive"` to avoid render-blocking.
- Canvas animations use `requestAnimationFrame` with `cancelAnimationFrame` cleanup.
- IntersectionObserver instances disconnect after triggering (one-shot reveals).
- Scroll/resize event listeners use `{ passive: true }` where applicable.

---

## Key Gotchas

1. **Next.js 16 / React 19 — read AGENTS.md.** APIs and file conventions differ from Next.js 13–15. Before touching routing, metadata, or server actions, check `node_modules/next/dist/docs/` if the directory exists, or look at existing working examples in the codebase.

2. **`'use client'` placement.** The directive must be the first line of a file (before imports). Forgetting it on a component that uses hooks will throw a runtime error, not a build error.

3. **Google Sheets as the only persistence layer.** There is no traditional database. Do not introduce one without explicit discussion. All form data goes to Google Sheets via the service account.

4. **No testing.** There is no test suite. Validate correctness manually or via `next build` TypeScript errors.

5. **Path alias.** `@/` maps to the repository root, not `src/`. So `@/components/Cursor` → `/home/user/wds-next/components/Cursor.tsx`.

6. **Color token naming mismatch.** `--blue` is actually orange (`#F97316`), `--purple` is light orange, `--pink` is amber. This reflects historical renaming. Use the variable names as-is, don't rename them — they are referenced throughout the CSS.

7. **Template pages are standalone.** Each template under `app/templates/` is a self-contained page with its own fonts, animations, and styles. They do not share components with the main site sections.
