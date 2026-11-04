# Portfolio site

Vite + React + TypeScript + Tailwind CSS 3 + shadcn/ui-style components.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build
```

Requires Node 18 or newer.

## Content and images

All text, links and image names live in `src/content.ts`. The site has a home page, Achievements,
Leadership, Projects, Internship, Beyond the Lab, and ten detail pages (PAsC, USAC, Solar Pulse Hub,
MathMarvel, The Promethean Flame, JointGuard AI, D70F700 Telescope, Scam Shield, SkyScore, AstroSphere).
Pages are reached through `#slug` links, so it works on any static host without server settings.

Copy your photos into `public/images/` using the file names in `public/images/README.txt`
(for example `portrait.jpg`, `jg-1.jpg`). A photo that is missing is hidden automatically; if a whole
gallery has no photos, its heading disappears too. Click a photo to open the viewer (arrow keys and Esc work).

## Change the colours

All colours are CSS variables in `src/index.css` (`:root` for light, `.dark` for dark).
Tailwind only references them (`tailwind.config.ts`), so one edit changes the whole site.

| Variable | Light | Dark | Used for |
|---|---|---|---|
| `--background` | #FFFFFF | #0E1621 | page |
| `--card` | #F7F8FA | #162231 | cards, alternate bands |
| `--foreground` | #1B2430 | #E6EAF0 | main text |
| `--muted-foreground` | #5B6675 | #9AA6B5 | captions, metadata |
| `--primary` | #1F4E8C | #5AA9E6 | links, buttons, key numbers |
| `--primary-hover` | #163A69 | #7DBBEE | hover |
| `--primary-foreground` | #FFFFFF | #0E1621 | text on primary buttons |
| `--border` | #E2E6EC | #243245 | dividers |
| `--input` | #8A94A3 | #5F7088 | control borders (3:1 or more) |

## Motion

Subtle only: sections fade up once when scrolled into view (`.reveal`), cards lift 2px on hover
(`.lift`), buttons press to 98% on click, link arrows nudge on hover. Everything switches off
under `prefers-reduced-motion`, and content stays visible if JavaScript fails.

## shadcn/ui

`components.json` is set up, so `npx shadcn@latest add <component>` works. The Button, Card and
Badge in `src/components/ui` follow the shadcn source and use the same token names.
