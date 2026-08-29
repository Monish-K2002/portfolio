# ⚡ Monish K — Personal Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Markdown](https://img.shields.io/badge/React_Markdown-10-black?style=for-the-badge&logo=markdown&logoColor=white)](https://github.com/remarkjs/react-markdown)

Welcome to the repository for **Monish K's Personal Developer Portfolio**, a modern, high-performance, dark-themed portfolio application built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

This site showcases professional engineering experience in NetSuite / SuiteScript 2.1, Python automation utilities, RESTful API integrations, and developer tooling.

---

## ✨ Features

- **🖥️ Tabbed Navigation Shell**: Fast, responsive client-side switching between **About**, **Experience**, and **Projects** views.
- **💼 Interactive Projects Browser**: Dedicated project sub-navigation rendering rich Markdown project deep-dives (`react-markdown` + `@tailwindcss/typography`) with direct GitHub repository links.
- **📈 Enterprise Experience Timeline**: Comprehensive breakdown of software engineering accomplishments, transaction workflows, and API integrations at ennVee Solutions.
- **🛠️ Categorized Skill Matrix**: Clean badge grid spanning Languages, Frontend, Backend, Enterprise Platforms (NetSuite, SuiteScript 2.1, SuiteQL, SDF), and Systems & APIs.
- **🔢 Animated Metric Counters**: Dynamic animated counters (`react-countup`) displaying verified years of experience and completed projects.
- **📋 One-Click Copy Actions**: Instant clipboard copy for Email and Phone with live visual confirmation feedback.
- **📄 Resume Download**: Direct download trigger for the latest resume document.
- **🎨 Restrained Dark Aesthetic**: Custom neon green (`#00ff6e`) accent theme with a subtle radial gradient backdrop, fine-tuned typography (`Geist`), and consistent border hierarchy (`neutral-800` default, `customGreen/40` on hover, `customGreen` active).
- **🗂️ Decoupled Typed Data Layer**: Centralized data configuration under `components/data/` for clean separation of content and presentation.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) | App Router, Turbopack, static page optimization |
| **UI Library** | [React 19](https://react.dev/) | Modern React components and client state |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type definitions across data and UI |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | `@tailwindcss/postcss` and `@theme` configuration |
| **Typography** | [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography) | Prose styling for Markdown rendered text |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) | FontAwesome icon family (`react-icons/fa`) |
| **Content Rendering** | [React Markdown](https://github.com/remarkjs/react-markdown) | Runtime Markdown parsing for project documentation |
| **Animations & Counters** | [React CountUp](https://github.com/glennreyes/react-countup) | Smooth animated numerical counters |
| **Fonts** | [Geist & Geist Mono](https://vercel.com/font) | Loaded via `next/font/google` |

---

## 📂 Project Structure

```text
portfolio/
├── app/
│   ├── favicon.ico             # Site favicon
│   ├── globals.css             # Tailwind v4 theme, fonts, custom scrollbars, radial glow
│   ├── layout.tsx              # Root layout with Geist font definition and metadata
│   └── page.tsx                # Main application page with sidebar navigation
├── components/
│   ├── data/                   # Centralized typed data files
│   │   ├── about.ts            # Bio, contact details, and skill matrix
│   │   ├── experience.ts       # Work experience history and achievements
│   │   ├── project.ts          # Featured projects and Markdown descriptions
│   │   └── sections.ts         # Navigation tab configurations
│   ├── section/                # Main section views
│   │   ├── About.tsx           # Bio, animated stats, resume, socials, skill cards
│   │   ├── Experience.tsx      # Career timeline and bulleted achievements
│   │   └── Project.tsx         # Interactive project browser with Markdown viewer
│   └── ui/                     # Reusable atomic UI components
│       ├── InfoCard.tsx        # Metric counter card with hover interactions
│       ├── SkillCard.tsx       # Categorized skill badges
│       └── Socials.tsx         # Accessible social media links (GitHub, LinkedIn)
├── public/
│   └── My Resume New.pdf       # Downloadable resume document
├── eslint.config.mjs           # Flat ESLint configuration with Next.js Core Web Vitals
├── next.config.ts              # Next.js configuration
├── package.json                # Dependencies and npm scripts
├── postcss.config.mjs          # PostCSS configuration for Tailwind CSS v4
├── tsconfig.json               # TypeScript compiler configuration
└── README.md                   # Project documentation
```

---

## 🌟 Featured Projects

1. **[SuiteScript Manager (VS Code Extension)](https://github.com/Monish-K2002/suitescript-manager)**
   - Integrates NetSuite SuiteScript 2.1 development workflows directly into VS Code.
   - Features real-time File Cabinet synchronization, automatic pre-overwrite backups, native side-by-side diff comparison, saved search exploration with code generation, and live execution log monitoring.

2. **Git Post-Commit Work Tracker**
   - Python-based Git post-commit hook that automatically captures commit messages and modified file lists to maintain environment-aware, project-specific Excel activity logs without manual data entry.

3. **[SDF Import Helper](https://github.com/Monish-K2002/sdf-import-helper)**
   - Python CLI tool wrapping the SuiteCloud CLI to enable bulk SDF object and file imports from text lists with automatic input normalization, path formatting, and real-time terminal feedback.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher (`v20+` recommended)
- **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`

### Installation & Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Monish-K2002/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Launches the Next.js development server with Turbopack |
| `npm run build` | Builds the optimized static production bundle |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues |

---

## 🚢 Deployment

This portfolio is optimized for zero-config deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub.
2. Import the project in Vercel.
3. Vercel automatically detects Next.js and builds the project via `npm run build`.
4. The site is instantly deployed with global edge caching.

---

## 📬 Contact & Connect

- **Monish K** — Software Engineer & Technical Consultant
- **GitHub**: [@Monish-K2002](https://github.com/Monish-K2002)
- **LinkedIn**: [monishk2002](https://www.linkedin.com/in/monishk2002)
- **Email**: [monishk2003@gmail.com](mailto:monishk2003@gmail.com)
