# Lindqvist Konsult — lkkb.se

Consulting website for Lindqvist Konsult. Built with Astro and Tailwind CSS.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 22.12.0
- [pnpm](https://pnpm.io/) (install with `npm install -g pnpm`)

## Getting started

```bash
# Install dependencies
pnpm install

# Start dev server (http://localhost:4321)
pnpm dev

# Production build (outputs to dist/)
pnpm build

# Preview production build locally
pnpm preview
```

## Project structure

```
src/
├── components/
│   ├── ServiceCard.astro
│   ├── Header.astro
│   └── Footer.astro
├── data/
│   └── services.ts       # Consulting service entries
├── layouts/
│   └── Base.astro        # HTML shell, SEO meta
├── pages/
│   ├── index.astro       # Homepage (hero, about, services)
│   └── cv.astro          # CV / resume page
└── styles/
    └── global.css        # Tailwind + CSS variables + typography
```

## Adding services

Edit `src/data/services.ts`:

```ts
export const services: Service[] = [
  {
    name: "Service Name",
    tagline: "Short tagline.",
    description: "What it does.",
    features: ["Feature one", "Feature two"],
    tags: ["plm", "ai"],
  },
];
```

## Stack

| Layer              | Tool             | Notes                    |
|--------------------|------------------|--------------------------|
| Framework          | Astro 6.x        | Static site generation   |
| Styling            | Tailwind CSS 4.x | Utility-first            |
| Linting/Formatting | Biome            | `pnpm biome check .`    |

## Linting

```bash
# Check for issues
pnpm biome check .

# Auto-fix
pnpm biome check --write .
```
