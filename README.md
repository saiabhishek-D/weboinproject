# Forma Studio — Design & Technology Agency

> **“We make brands that move people.”**  
> An independent creative studio homepage crafted with **Next.js 16 (App Router)**, **Tailwind CSS v4**, and **TypeScript**. Built with Swiss editorial brutalism, strict 1px structural borders, and high-performance full-bleed imagery.

[![Next.js](https://img.shields.io/badge/Next.js-16.4.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ✦ Table of Contents

- [Overview](#-overview)
- [Design Direction & Palette](#-design-direction--palette)
- [Typography Hierarchy](#-typography-hierarchy)
- [Sections & Architecture](#-sections--architecture)
- [Folder Structure](#-folder-structure)
- [Technical Highlights](#-technical-highlights)
- [Getting Started](#-getting-started)
- [Building for Production](#-building-for-production)
- [License](#-license)

---

## ✦ Overview

**Forma Studio** is a high-end digital agency landing page designed to showcase brand identities, web platforms, and creative campaigns. It pairs editorial typography with an architectural grid, avoiding heavy UI component libraries or drop-shadows in favor of razor-sharp 1px border framing and high-resolution photography.

---

## ✦ Design Direction & Palette

The visual direction follows Swiss International Typographic style and minimalist editorial aesthetics:

| Token | Hex Value | Role |
|---|---|---|
| **Background** | `#F7F7F5` | Off-white warm canvas |
| **Foreground** | `#141414` | High-contrast near-black typography |
| **Accent Primary** | `#3B5BDB` | Electric slate blue for CTAs, active states, and focal points |
| **Accent Deep** | `#0D1A5C` | Midnight navy for gradient depths & hover fills |
| **Muted Text** | `#8C8C8C` | Secondary captions, timestamps, and metadata |
| **Structural Borders** | `#E0E0E0` | 1px border architecture (no drop shadows) |

### Atmosphere & Background
- **Atmospheric Glows**: Soft, multi-layered radial gradient auroras in slate blue and midnight.
- **Architectural Dot Matrix**: Fixed 28px geometric grid texture.
- **Analog Film Grain**: Micro-noise paper texture overlay for tactile, magazine-grade depth.
- **Structural Guide Lines**: 1px vertical container borders reflecting Bauhaus grid systems.

---

## ✦ Typography Hierarchy

Typography is imported and configured with zero layout shifts via `next/font/google`:

- **Headings (`Syne`)**: Display typeface at 700 & 800 weights with fine `-0.02em` tracking.
- **Body (`Inter`)**: Neutral, highly legible grotesque typeface across 400, 500, 600, and 700 weights.
- **Studio Metadata (`Space Mono`)**: Monospace accents for studio coordinates, index numbers (`// 01`), and timestamps.

---

## ✦ Sections & Architecture

### 1. Fixed Navigation Bar (`Hero.tsx`)
- Frosted glass backdrop blur (`backdrop-blur-md bg-[#F7F7F5]/90`).
- Studio logo with cobalt indicator dot (`Forma.`).
- Coordinates stamp (`AMS • 52.37°N`) and live availability badge (`● Available Q3/Q4`).
- Centered navigation links with smooth scrolling to sections (`#services`, `#portfolio`, `#contact`).

### 2. Hero Section (`Hero.tsx`)
- Studio kicker: `// 00 — INDEPENDENT STUDIO`.
- Large headline: *"We make brands that move people."* with punchy line breaks and cobalt emphasis.
- Primary filled CTA (*View our work*) + ghost text CTA (*Get in touch →*).
- 4:3 abstract visual card featuring 3D sculptural artwork with version badge (`v2.4 • 2026`).
- Integrated 1px border stats row: **80+** Commissions, **05** Years Active, **98%** Retention.
- Client roster marquee strip (`ARCHETYPE`, `KOVA LABS`, `VERSED`, `LUMEN`, `SHIFT AI`).

### 3. Services Grid (`Services.tsx`)
- 2×2 CSS grid separated by 1px borders (no individual card shadows).
- Four core disciplines: **UI/UX Design**, **Web Development**, **Branding**, **Digital Marketing**.
- Each card features:
  - 48×48 dark icon box with hover shift to slate blue `#3B5BDB`.
  - Monospace category indicator (`// 01` to `// 04`).
  - Animated diagonal tilt arrow (`↗`).
  - Deliverable tags in monospace border pills.

### 4. Asymmetric Portfolio Grid (`Portfolio.tsx`)
- 3-column asymmetric layout where Card 1, Card 4, and Card 6 span 2 columns.
- Full-bleed edge-to-edge photography (`object-cover` with `fill`):
  1. **Arco Finance — Brand Identity**: Dark luxury fintech branding & analytics.
  2. **Kova App — UI Design**: Clean mobile banking interface mockup.
  3. **Nore Studio — Web Build**: Modern architectural studio web platform.
  4. **Vesper Launch Campaign**: Matte-black audio product campaign.
  5. **Lumen Health — Brand**: Scandinavian biotech glass packaging.
  6. **Shift Dashboard — Product UI**: SaaS telemetry and anomaly detection console.
- Frosted glass category pills top-left + permanent readable bottom gradient.
- Interactive hover state: Image zoom (`scale-105`), card lift, and circular accent button.

### 5. Contact Section (`Contact.tsx`)
- **"use client" Isolated Component**:
  - Two-column layout with studio headquarters, direct email inquiry card, business hours, and `< 24h` response SLA.
  - Interactive discipline chips (*UI/UX*, *Web Dev*, *Branding*, *Digital Marketing*).
  - Client-side validation: empty checks, email regex format validation, red error borders, and contextual messages.
  - Success state replacing the form with a confirmation receipt and quick reset action.

### 6. Studio Footer (`page.tsx`)
- Upper call-to-action banner (*"Ready to elevate your brand?"*).
- Logo left, studio archive metadata center, back-to-top smooth-scroll button, and copyright notice right.

---

## ✦ Folder Structure

```
forma-studio/
├── app/
│   ├── favicon.ico            # Favicon asset
│   ├── globals.css            # Tailwind v4 theme, fonts, dot-grid, and noise texture
│   ├── layout.tsx             # Root layout with Syne + Inter + Space Mono and guide lines
│   └── page.tsx               # Homepage assembling Hero, Services, Portfolio, Contact, Footer
├── components/
│   ├── Hero.tsx               # Fixed navbar, display headline, 3D visual card, stats
│   ├── Services.tsx           # 2x2 grid with 1px borders, icon boxes, deliverables
│   ├── Portfolio.tsx          # 3-column asymmetric grid, 6 full-bleed case studies
│   └── Contact.tsx            # "use client" validated form, discipline selector, success state
├── public/
│   └── images/                # High-resolution portfolio & hero assets
├── next.config.ts             # Next.js configuration
├── postcss.config.mjs         # Tailwind CSS v4 PostCSS plugin
├── tsconfig.json              # TypeScript configuration with @/* alias
└── package.json               # Dependencies and scripts
```

---

## ✦ Technical Highlights

- **Server-First Architecture**: `"use client"` is strictly confined to `components/Contact.tsx` for form state management. All other sections are static React Server Components (RSC) prerendered as static HTML.
- **Pure Tailwind CSS v4**: Built entirely with Tailwind utilities and custom CSS `@theme` variables — no third-party UI component libraries (no Radix, no Chakra, no MUI).
- **Reduced Motion Support**: Complete `@media (prefers-reduced-motion: reduce)` compliance, instantly disabling transitions and animations for accessibility.
- **Clean SEO Metadata**: Preconfigured OpenGraph tags, Twitter cards, viewport, and semantic HTML5 landmarks (`<nav>`, `<main>`, `<section>`, `<footer>`).

---

## ✦ Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or higher
- **npm** / **pnpm** / **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/saiabhishek-D/weboinproject.git

# Navigate into the project folder
cd weboinproject

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✦ Building for Production

```bash
# Build static pages and optimize bundles
npm run build

# Start production server
npm run start
```

---

## ✦ License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

*Crafted by [Sai Abhishek](https://github.com/saiabhishek-D) for **Forma Studio**.*
