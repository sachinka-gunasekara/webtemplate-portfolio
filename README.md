# Modern Personal Portfolio Landing Page — Refined Glassmorphism Edition

A sophisticated, minimal developer portfolio landing page built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, redesigned with a **Refined Glassmorphism** aesthetic. Tailored for software developers, UI/UX engineers, and freelancers to showcase their work, technical capabilities, service offerings, and contact information with an immersive, high-end creative identity.

---

## 🎨 Visual Identity: Refined Glassmorphism

- **Deep Midnight Navy Canvas:** Root background (`#060813` / `#0A0E1A`) with subtle, diffused ambient gradients (cyan, blue, and violet mesh illumination) without excessive or distracting glow.
- **Floating Translucent Navbar:** Backdrop-filtered glass navigation pill (`backdrop-blur-xl`, `border-white/10`, `shadow-glass-md`) with scroll-reactive elevation and mobile glass drawer.
- **Selective Frosted Glass Surfaces:** Frosted glass applied intentionally to the live availability badge, the hero developer profile card, and the selected project showcase cards.
- **High-Contrast Editorial Typography:** Crisp white text (`#FFFFFF`), muted slate secondary text (`#94A3B8`), and one restrained electric cyan accent (`#38BDF8` / `cyan-300`).
- **Realistic UI Project Mockups:** Custom-built CSS and SVG micro-interfaces demonstrating realistic digital products (Enterprise SaaS Analytics, Aura AI Writing Editor, Atelier Noir Creative Studio, Sprint Kanban Board).
- **Graceful Fallbacks & Accessibility:** Solid matte slate fallbacks for environments without backdrop-filter support, accessible focus rings, and `prefers-reduced-motion` compliance.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)

### Installation & Running Locally

1. Open your terminal in this project directory:
   ```bash
   cd D:\PersonalPortfolio
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

### Building for Production

To compile TypeScript and bundle optimized static assets:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Architecture

```
D:\PersonalPortfolio/
├── index.html                   # Entry HTML with meta tags, OpenGraph & cyan monogram SVG favicon
├── package.json                 # Dependencies (React 19, TypeScript, Lucide React, Framer Motion)
├── tsconfig.json                # Strict TypeScript configuration
├── tsconfig.node.json           # Node configuration for Vite
├── vite.config.ts               # Vite configuration with React plugin
├── tailwind.config.js           # Midnight navy palette, electric cyan accent, and glass tokens
├── postcss.config.js            # PostCSS configuration
├── README.md                    # Project documentation & design direction
├── .gitignore                   # Standard node_modules & build output ignores
└── src/
    ├── main.tsx                 # React DOM mount point
    ├── App.tsx                  # Root layout combining all sections with midnight canvas
    ├── index.css                # Glass utilities, ambient lighting gradients & reduced-motion rules
    ├── types/
    │   └── portfolio.ts         # TypeScript definitions for projects, skills, services, info
    ├── data/
    │   └── portfolioData.ts     # Centralized, editable portfolio data source
    └── components/
        ├── Navbar.tsx           # Floating translucent glass navbar with scroll spy & mobile drawer
        ├── Hero.tsx             # Two-column hero with frosted availability badge & profile card
        ├── SelectedWork.tsx     # 4 frosted-glass project cards with subtle hover lift
        ├── ProjectMockup.tsx    # Realistic midnight CSS/SVG UI illustrations (SaaS, AI, Studio, Kanban)
        ├── ProjectModal.tsx     # Translucent modal dialog with architecture notes & live demo links
        ├── About.tsx            # Editorial bio and 3 approach cards (Approach, Focus, Mindset)
        ├── Skills.tsx           # Compact skills grouped into Frontend, Backend, Tools
        ├── Services.tsx         # 3 service cards with luminous icons and deliverables
        ├── WorkProcess.tsx      # 4-step workflow timeline (Understand, Plan, Build, Refine)
        ├── Contact.tsx          # Frosted glass contact section with form validation & mailto launcher
        └── Footer.tsx           # Minimalist footer with dynamic year, social links & back-to-top
```

---

## 🛠️ How to Customize

All text, bio details, projects, skills, and links are centralized in:
👉 `src/data/portfolioData.ts`

- **Developer Name & Bio:** Edit `personalInfo.name`, `personalInfo.role`, `personalInfo.aboutBio`.
- **Contact Details:** Edit `personalInfo.email`, `personalInfo.github`, and `personalInfo.linkedin`.
- **Selected Projects:** Edit or add items in `projects`.
- **Skills & Services:** Modify categories in `skillGroups` and `services`.

---

## 📄 License

MIT &copy; Alex Morgan. Free to use as a personal portfolio or client deliverable.
