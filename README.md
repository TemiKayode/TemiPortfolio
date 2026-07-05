# Temitayo Kayode — Portfolio

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?logo=tailwindcss&logoColor=white)

**Live site:** [temitayoportfolio.netlify.app](https://temitayoportfolio.netlify.app/)

The personal portfolio of **Temitayo Kayode**, a Python Production Engineer specializing in
event-driven, real-time distributed systems. The site is a single-page React application built
around a full-viewport, animated project carousel, followed by an about section, a professional
experience timeline, a filterable project grid, and a working contact form.

## Features

- **Project carousel hero** — a full-viewport, full-bleed carousel that crossfades between
  featured projects (background color, imagery, blur, and scale all animate together), with
  keyboard-free arrow navigation and a link that always points at the currently centered project
- **Modern dark UI** — Anton display type paired with Inter body text, a warm accent color, and
  a light/dark theme toggle
- **Filterable, searchable project grid** — filter by category (Full Stack, Backend, Security,
  Frontend) or search by keyword across 20+ shipped projects
- **Professional experience timeline** — chronological work history with per-role tech stacks
- **Working contact form** — sends email via EmailJS, with client-side validation and an
  automatic reply to the sender
- **Fully responsive** — designed mobile-first, verified at both desktop and mobile viewports

## Tech Stack

| Layer            | Choice                                                              |
| ----------------- | -------------------------------------------------------------------- |
| Framework          | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool         | [Vite](https://vitejs.dev/)                                          |
| Styling            | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) ([Radix UI](https://www.radix-ui.com/) primitives) |
| Icons              | [Lucide React](https://lucide.dev/)                                  |
| Routing            | [React Router](https://reactrouter.com/)                              |
| Forms & validation | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| Email delivery     | [EmailJS](https://www.emailjs.com/)                                  |
| Data fetching      | [TanStack Query](https://tanstack.com/query)                         |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (or pnpm)

### Setup

```bash
git clone https://github.com/TemiKayode/TemiPortfolio.git
cd TemiPortfolio
npm install
npm run dev
```

The dev server runs at **http://localhost:8080**.

### Scripts

| Command             | Description                        |
| -------------------- | ----------------------------------- |
| `npm run dev`         | Start the local dev server           |
| `npm run build`       | Production build (outputs to `dist/`) |
| `npm run build:dev`   | Development-mode build               |
| `npm run preview`     | Preview the production build locally |
| `npm run lint`        | Run ESLint                           |

## Project Structure

```
TemiPortfolio/
├── public/
│   ├── images/                  # Profile photo, CV, project screenshots
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── hero/                # SVG visuals used in the hero carousel
│   ├── components/
│   │   ├── ui/                  # shadcn/ui primitives
│   │   ├── Header.tsx
│   │   ├── Hero.tsx             # Project carousel
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx         # Filterable/searchable project grid
│   │   ├── Contact.tsx          # EmailJS contact form
│   │   └── Footer.tsx
│   ├── lib/
│   │   ├── email-service.ts     # EmailJS integration
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── index.css                # Design tokens & global styles
│   └── main.tsx
├── index.html
├── tailwind.config.ts
└── vite.config.ts
```

## Configuration

The contact form sends email through [EmailJS](https://www.emailjs.com/). Configuration lives in
`src/lib/email-service.ts` and is overridable via environment variables — create a `.env.local`
file in the project root:

```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_AUTOREPLY_TEMPLATE=your_autoreply_template_id
```

## Deployment

The production build is a static site (`npm run build` → `dist/`), deployable to any static
host. This project is currently deployed on **Netlify** with automatic deploys from `main`.

## Contact

- **Email:** [temitayokayode5@gmail.com](mailto:temitayokayode5@gmail.com)
- **GitHub:** [@TemiKayode](https://github.com/TemiKayode)
- **LinkedIn:** [temitayo-kayode](https://www.linkedin.com/in/temitayo-kayode/)
- **Portfolio:** [temitayoportfolio.netlify.app](https://temitayoportfolio.netlify.app/)

---

Built and maintained by **Temitayo Kayode**.
