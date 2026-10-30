# Mustafa Lightwala — Developer Portfolio

A production-grade, modern, and human-centric personal portfolio website for **Mustafa Lightwala**, Senior Frontend Engineer specializing in **React, TypeScript, Performance Optimization, and Accessibility (WCAG 2.1/2.2 AA)**.

Designed following the **Warm Editorial / Modern Engineering** aesthetic: clean sans-serif typography (Manrope & Inter), generous whitespace, restrained electric blue accents, editorial asymmetrical layouts, and zero generic AI bloat.

---

## 🌟 Key Highlights & Engineering Features

- **Warm Editorial / Modern Engineering Aesthetic:** Bespoke color palette (Warm off-white `#F7F6F2`, Deep slate `#202A36`, Restrained electric blue `#315EFB`, pure white cards `#FFFFFF` with subtle warm borders).
- **100% Verified Content & Real Production Impact Metrics:**
  - **40% Filter Click Reduction:** Real analytics instrumentation on flight searches and recommended-flights filter.
  - **35% UI Development Acceleration:** Standardized, WCAG 2.1-compliant reusable SCSS/React component design system.
  - **30% Latency Impact Reduction:** Selective re-rendering and memoization across enterprise support queues.
  - **30% Discovery Efficiency Improvement:** Bi-directional map pin to carousel state synchronization on Google Maps.
  - Strictly respects non-disclosure agreements (NDAs) with client confidentiality badges and clear architectural case studies.
- **WCAG 2.2 AA Accessibility:**
  - Accessible Skip-to-content landmark link (`#main-content`).
  - Strict semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Fully keyboard navigability with visible, high-contrast focus rings (`:focus-visible`).
  - Accessible dialog modals (Project Architecture & Full Resume modal) with ESC key listeners and scroll locking.
  - Full support for `prefers-reduced-motion`.
  - Accessible touch targets (minimum 44×44px for touch ergonomics).
- **Interactive Features:**
  - Sticky header with dynamic section detection (`useActiveSection`).
  - Responsive mobile drawer navigation with ESC key support.
  - Interactive company journey tabs with deep career progression.
  - Expandable **Architecture Breakdown & Case Study Modal** for each featured project.
  - Filterable **Skills & Tools** categorized by practical proficiency (Core, Advanced, Working Knowledge).
  - One-click copy email button with visual confirmation.
  - Print-ready and printable **Full Resume View** modal (`window.print()` formatted for A4).
  - Fully accessible Contact Form with client-side validation, error announcements, real endpoint integration, and truthful mailto fallback.

---

## 📁 Architecture & Project Structure

All content is decoupled from presentation components. To update content, you only need to edit files in `src/config/` and `src/data/`:

```
portfolio/
├── public/
│   ├── favicon.svg             # Bespoke monogram SVG favicon
│   └── og-image.png            # Open Graph social preview
├── src/
│   ├── assets/                 # Icons and media
│   ├── config/
│   │   └── portfolio.ts        # Central configuration (Name, title, bio, contacts, SEO metadata)
│   ├── data/
│   │   ├── experience.ts       # Verified career history & contributions
│   │   ├── projects.ts         # In-depth featured projects & NDA case studies
│   │   ├── skills.ts           # Categorized skills by proficiency tier
│   │   └── education.ts        # Degree, institution & graduation year
│   ├── types/
│   │   └── portfolio.types.ts  # Clean TypeScript definitions
│   ├── components/
│   │   ├── common/             # Reusable UI primitives (Badge, Button, Card, SectionHeading, SkipLink, SocialIcons)
│   │   ├── layout/             # Header, Footer, MobileNav
│   │   └── sections/           # Hero, About, Experience, Projects, ProjectDetailModal, Skills, Contact, ResumeModal
│   ├── hooks/
│   │   ├── useActiveSection.ts # IntersectionObserver active link tracker
│   │   ├── useClipboard.ts     # Safe clipboard copier with timeout feedback
│   │   └── usePrefersReducedMotion.ts # React useSyncExternalStore media query hook
│   ├── styles/
│   │   ├── variables.scss      # Colors, typography, spacing, breakpoints, shadows
│   │   ├── globals.scss        # Reset, typography scale, focus indicators, utility classes
│   │   └── animations.scss     # Performant, subtle animations
│   ├── App.tsx                 # Root application composition
│   └── main.tsx                # React DOM entry point
├── .env.example                # External form endpoint configuration template
├── package.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or later (v20+ recommended)
- **npm** or **pnpm**

### Installation

```bash
# Clone or navigate to the project directory
cd portfolio

# Install dependencies
npm install
```

### Development Server

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### Production Build & Linting

```bash
# Run linter
npm run lint

# Build production bundle with TypeScript checking
npm run build

# Preview production build locally
npm run preview
```

---

## ✏️ How to Update Content (Zero UI Code Modification)

### 1. Update Personal Info & Social Links
Edit [`src/config/portfolio.ts`](file:///d:/Projects/portfolio/src/config/portfolio.ts):
- Update `name`, `role`, `headline`, `location`, `email`, `phone`, `linkedin`, `github`.
- Modify `availability` status pill or `summary`.
- Adjust `verifiedMetrics` to reflect your newest accomplishments.

### 2. Update Career Experience
Edit [`src/data/experience.ts`](file:///d:/Projects/portfolio/src/data/experience.ts):
- Add or edit companies, roles, employment dates, locations.
- Add key bullet points under `highlights`.
- Update technology tags under `technologies`.

### 3. Update Projects & Case Studies
Edit [`src/data/projects.ts`](file:///d:/Projects/portfolio/src/data/projects.ts):
- Add project entries with `title`, `domain`, `problemStatement`, `solution`, `keyContributions`, and `impactMetrics`.
- Set `confidentialityNote` for client-confidential / NDA work.
- Add `liveUrl` or `githubUrl` when public links are available.

### 4. Update Technical Skills
Edit [`src/data/skills.ts`](file:///d:/Projects/portfolio/src/data/skills.ts):
- Organize skills by category (Core Frontend, Performance & A11y, State Architecture, Design Systems, Tooling).
- Assign levels: `'Core'`, `'Advanced'`, or `'Working Knowledge'`.

---

## ⚙️ Environment Variables (Contact Form)

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

| Variable | Description | Default |
| :--- | :--- | :--- |
| `VITE_CONTACT_FORM_ENDPOINT` | External form submission webhook (e.g. Formspree, Basin, Getform) | *None* |

> **Truthful Fallback Behavior:**
> When `VITE_CONTACT_FORM_ENDPOINT` is left empty, the form does not fake a successful backend submission. Instead, submitting opens your default email client with the subject and message pre-filled to `mustafa.lightwala99@gmail.com`.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)

1. Push your repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your portfolio repository.
4. Framework Preset will auto-detect as **Vite**.
5. Build and Output Settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. (Optional) Under **Environment Variables**, add `VITE_CONTACT_FORM_ENDPOINT`.
7. Click **Deploy**.

### Deploy to Netlify

1. Sign in to [Netlify](https://www.netlify.com) and click **"Add new site" > "Import an existing project"**.
2. Connect your Git provider and select the repository.
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. (Optional) Set your environment variables in Site configuration.
5. Click **Deploy site**.

---

## 📄 License & Credits

Designed & engineered by **Mustafa Lightwala**. Released for personal portfolio use.
