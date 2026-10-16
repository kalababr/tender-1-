# TenderHub (web-b)

Marketing site for TenderHub — a tender portal for Ethiopia. Single landing page with
tender listings, a business directory, advertising plans, news, and a live-chat widget.
Ships in **English** and **Amharic**.

React 19 + Vite, plain JavaScript (JSX), no router and no state library.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint     # eslint
```

## Project layout

```
public/            static assets (favicon)
src/
  config/site.js   company details, phone/email, social URLs, hero image path
  data/            static content: tenders, news, categories, regions, plans, socials
  i18n/            en.js / am.js dictionaries + LanguageProvider & useLang()
  features/home/
    HomePage.jsx   section composition
    home.css       home page component layouts (consumes the global tokens)
    useReveal.js   IntersectionObserver scroll-reveal animations
    useScrollSpy.js  highlights the nav item for the section in view
    components/    one component per section
    components/icons.jsx  stroked line icons (mail, phone, pin, send)
  index.css        design tokens (colors, spacing) + shared/global styles
  main.jsx         entry point
```

## Design system

**Style** — modern minimal. Warm near-white canvas, near-black ink, one electric
lime accent. Dark surfaces are true black rather than navy, so the page reads light
and airy instead of heavy. Radii `--r-lg: 14px`, an 8dp spacing scale
(`--space-1…--space-9`), 1px borders instead of shadows.

**Palette — Ink & Lime**

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#fafaf7` warm paper | `#0a0a09` | page canvas |
| `--surface` | `#ffffff` | `#141413` | cards |
| `--ink` | `#0e0e0c` | `#f5f5f0` | body text (18.5:1) |
| `--muted` | `#6b6b64` | `#9a9a91` | secondary text (5.1:1) |
| `--line` | `#e6e4de` | `rgba(245,245,240,.14)` | borders |
| `--brand` | `#0e0e0c` | `#f5f5f0` | primary buttons |
| `--brand-strong` | `#0a0a09` | `#000000` | dark surfaces (hero, footer) |
| `--accent` | `#c9f24d` lime | same | **always paired with `--accent-ink`** |
| `--accent-ink` | `#0e0e0c` | `#0e0e0c` | text/icons on lime (15:1) |

> **Lime is never used for text on a light background** (it would sit at ~1.6:1).
> It only ever appears as a fill behind `--accent-ink`, or as a decorative wash.

**Where the dark blocks are** — deliberately few, so the page stays light:
hero and footer are true black, and the CTA banner is a full lime moment. The
contact zone is light with a lime wash.

**Type** — `Manrope` for display headings, `Inter` for UI/body, `Noto Sans Ethiopic`
as the Ethiopic fallback. Loaded in `index.html`.

Dark mode follows `prefers-color-scheme`; `data-theme="light"` / `data-theme="dark"`
on `<html>` can force either.

## Page structure

```
skip link
┌ utility topbar ─────────── phone · email ············· socials │ language ┐
├ sticky nav ─────────────── logo ······ links ·············· CTA          ┤
Hero ─────────────────────── headline + CTAs │ search card
Proof strip ──────────────── 4 figures, full-bleed band
Tenders ───────────────────── headline row + procurement table
About ────────────────────── headline │ body + checklist
Directory ────────────────── 8-cell category grid
News ─────────────────────── 3-up cards
Advertise ────────────────── 3 pricing plans (featured highlighted)
Contact zone ─────────────── light band with a lime wash:
                             icon method cards │ bordered form card
CTA banner ───────────────── full lime: copy left │ actions right
Footer ───────────────────── true black · brand · Explore · Company · Get in touch
floating: chat widget only (unread dot) - social links live in the topbar
```

## Conventions

- **Text lives in `src/i18n/*.js`.** Never hard-code user-facing copy in a component.
  - `t('hero.title')` — reads from the active dictionary, falls back to English,
    and warns in dev when a key is missing.
  - `tr({ en, am })` — picks the right value from a data object (used for `data/` content).
- **Company details live in `src/config/site.js`** — email, phone, social profile URLs
  and the optional hero backdrop. The social links and contact block read from there.
- **Styles** are plain CSS driven by the custom properties at the top of
  `src/index.css` (colours, type scale, spacing, radii, shadows). `home.css` holds
  only the home page's component layouts and consumes those tokens — never raw hex.
  Home-page components use the `hb-` prefix; shared/global styles are unprefixed.
- **Accessibility**: a skip link, visible focus rings, labelled form controls,
  `aria-current` on the active nav item, Escape-to-close and `aria-live` on the chat
  widget, and `prefers-reduced-motion` support for every animation.

## Before going live

These are placeholders and must be replaced:

- [ ] `src/config/site.js` — real email, phone and social profile URLs
- [ ] `public/` — add a hero image and set `site.heroImage` to `/your-image.jpg`
- [ ] `src/features/home/components/Contact.jsx` — wire the form to a backend
      (`handleSubmit` currently only flips local state)
- [ ] `src/features/home/components/ChatWidget.jsx` — `send()` posts to a canned
      reply; hook it up to your chat service
- [ ] The `#` placeholder links in `Tenders`, `News`, `Directory`, `Advertise`,
      `CtaBanner` and the pricing plans

## Notable decisions

- `site.heroImage` defaults to `null` so the page renders its CSS gradient artwork
  instead of requesting a missing image.
- Theme colours for dark mode can be forced with `data-theme="light"` or
  `data-theme="dark"` on `<html>`; no toggle UI is wired up yet.
