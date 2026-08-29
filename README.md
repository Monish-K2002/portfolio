# ⚡ Monish K — Personal Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-black?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

Welcome to the repository for **Monish K's Personal Portfolio**, a modern, minimalist, dark-themed portfolio web application built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

This site serves as a showcase of my professional experience as a Software Engineer & Technical Consultant, highlighted projects, technical skills across enterprise and modern full-stack ecosystems, and developer tooling.

---

## ✨ Features

- **🖥️ Tabbed Split-Panel Layout**: Smooth client-side section switching between **About**, **Experience**, and **Projects**.
- **💼 Interactive Projects Showcase**: Dedicated sub-navigation with rich Markdown-rendered deep dives (`react-markdown`) and direct GitHub repository links.
- **📈 Experience Timeline**: Detailed breakdown of enterprise software engineering accomplishments, architecture designs, and integrations.
- **🛠️ Technical Skill Matrix**: Categorized skill cards spanning Languages, Frontend, Backend, Enterprise Platforms (NetSuite / SuiteScript), and Systems & APIs.
- **📋 One-Click Copy & Quick Actions**: Copy contact details (Email, Phone) directly to clipboard with visual feedback indicators.
- **📄 Resume Download**: Direct download trigger for updated resume PDF.
- **🎨 Sleek Dark Aesthetic**: Custom neon green (`#00ff6e`) accent design with fine-tuned typography, hover micro-interactions, and borders.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router) |
| **Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/postcss` |
| **Icons** | [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fa`) |
| **Content Rendering** | [React Markdown](https://github.com/remarkjs/react-markdown) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & `tailwindcss-animate` |
| **Fonts** | Next.js Google Fonts ([Geist](https://vercel.com/font)) |

---

## 📂 Project Structure

```text
portfolio/
├── app/
│   ├── favicon.ico         # Website favicon
│   ├── globals.css         # Tailwind v4 theme definitions and custom classes
│   ├── layout.tsx          # Root layout with Geist font configuration and metadata
│   └── page.tsx            # Main application shell with sidebar navigation
├── components/
│   └── ui/
│       ├── InfoCard.tsx    # Metric counter cards (Years Experience, Projects)
│       ├── SkillCard.tsx   # Categorized skill badges
│       └── Socials.tsx     # Social links (GitHub, LinkedIn)
├── public/
│   ├── My Resume New.pdf   # Downloadable resume document
│   └── ...                 # Static assets
├── section/
│   ├── About.tsx           # Bio, stats, skills grid, contact triggers, resume
│   ├── Experience.tsx      # Professional career timeline and bulleted achievements
│   └── Project.tsx         # Interactive project browser with Markdown renderers
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration for Tailwind v4
└── tsconfig.json           # TypeScript configuration
```

---

## 🌟 Featured Projects Highlighted in Portfolio

1. **[SuiteScript Manager (VS Code Extension)](https://github.com/Monish-K2002/suitescript-manager)**
   - Brings NetSuite development workflows directly into VS Code.
   - Real-time code synchronization with File Cabinet, pre-overwrite backups, side-by-side native diff viewing, saved search exploration, and execution log monitoring via SuiteScript 2.1 RESTlet.
2. **Git Post-Commit Work Tracker**
   - Python-based Git hook that extracts commit metadata and changed files to maintain environment-aware, project-specific Excel logs automatically.
3. **[SDF Import Helper](https://github.com/Monish-K2002/sdf-import-helper)**
   - Python CLI utility wrapping SuiteCloud CLI to enable bulk SDF object/file imports from text lists with input normalization and live feedback.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.18.0` or higher (Node.js 20+ recommended)
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

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

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) to see the application running.

---

## 📜 Available Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server at `http://localhost:3000` |
| `npm run build` | Compiles and builds the production application |
| `npm run start` | Runs the built production server |
| `npm run lint` | Runs ESLint to identify code quality and style issues |

---

## 🚢 Deployment

The portfolio is optimized for deployment on the [Vercel Platform](https://vercel.com/):

1. Push your latest changes to GitHub.
2. Import the `portfolio` repository into Vercel.
3. Vercel will automatically detect Next.js and configure build settings (`npm run build`).
4. Click **Deploy**.

Alternatively, it can be deployed to any hosting platform supporting Node.js or static export.

---

## 📬 Contact & Connect

- **Monish K** — Software Engineer & Technical Consultant
- **GitHub**: [@Monish-K2002](https://github.com/Monish-K2002)
- **LinkedIn**: [monishk2002](https://www.linkedin.com/in/monishk2002)
- **Email**: [monishk2002@gmail.com](mailto:monishk2002@gmail.com)

