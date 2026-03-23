# AGENTS.md

Guidelines for AI agents working on this project.

## Project overview

Consulting website for **Lindqvist Konsult** at **lkkb.se**. Astro 6.x, Tailwind CSS 4.x. Static output only — no database, no CMS, no auth, no server-side rendering.

Two pages: homepage (services showcase + about + contact) and CV (resume).

## Tech stack

- **Framework**: Astro 6.x (static output only, View Transitions enabled)
- **Styling**: Tailwind CSS 4.x with `@tailwindcss/vite` plugin (NOT the old `@astrojs/tailwind` integration)
- **Components**: Astro components only (no client-side framework)
- **SEO**: `@astrojs/sitemap` for auto-generated sitemap, JSON-LD structured data on both pages
- **Linting**: Biome (not ESLint/Prettier)
- **Package manager**: pnpm (not npm/yarn)

## Architecture decisions

- **Light mode only**: No dark mode, no theme toggle. CSS custom properties in `global.css` under `:root` only.
- **Fonts**: Inter via `@fontsource-variable/inter`. Imported in `global.css`.
- **Color palette**: Monochrome only. `--color-blackout: #080808`, `--color-whiteout: #f7f7f7`, grey scale. Semantic tokens: `--bg`, `--fg`, `--muted`, `--border`, `--surface`. No accent colors.
- **Services data**: Defined in `src/data/services.ts`. Rendered on homepage via `ServiceCard.astro`.
- **CV data**: Defined in `src/data/cv.ts`. Rendered on CV page.
- **View Transitions**: Enabled via Astro's built-in `<ViewTransitions />` for smooth page navigation.
- **No client-side JS**: Do not add Svelte, React, or any client-side framework.

## Code style

- **Formatting**: 2-space indent, double quotes for JS/TS, handled by Biome
- **Components**: Astro components in `src/components/`
- **CSS**: Use Tailwind utility classes. For custom properties, use `text-(--muted)` syntax (Tailwind v4 arbitrary property shorthand). Avoid raw CSS unless defining theme variables in `global.css`.
- **No accent colors**: Design is strictly black/white/grey. Do not introduce colored accents.
- **Spacing rhythm**: `mb-16` between major sections, `mb-8` subsections, `mb-4` within sections.

## Key files

| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro config (site URL, vite plugins, sitemap) |
| `src/styles/global.css` | Tailwind directives, fonts, CSS custom properties, animations |
| `src/layouts/Base.astro` | HTML shell, SEO meta, favicon, OG image, View Transitions |
| `src/data/services.ts` | Consulting service definitions |
| `src/data/cv.ts` | CV data (skills, experience, education, languages, contact) |
| `src/pages/index.astro` | Homepage (hero, about, services, contact) |
| `src/pages/cv.astro` | CV / resume page |
| `biome.json` | Linter/formatter config |

## Commands

```bash
pnpm dev                        # Start dev server at localhost:4321
pnpm build                      # Production build
pnpm preview                    # Preview built site locally
pnpm biome check .              # Lint check
pnpm biome check --write .      # Auto-fix lint issues
```

## Common tasks

### Adding or editing a service

Edit the `services` array in `src/data/services.ts`. Each service has `name`, `tagline`, `description`, `features` (string array), and `tags`.

### Modifying the theme

Edit CSS custom properties in `src/styles/global.css` under `:root`.

### Updating the CV

Edit `src/data/cv.ts`. Skills, experience, education, languages, focus areas, and contact info are all exported from this file.

## Gotchas

- Tailwind v4 uses `@theme` and `@import "tailwindcss"` directives, not the old `tailwind.config.ts` file
- No client-side JavaScript — do not add `client:load` or `client:visible` directives
- Images are self-hosted in `/public/images/`, not external URLs
- JSON-LD structured data is inline in each page file, not in the layout
