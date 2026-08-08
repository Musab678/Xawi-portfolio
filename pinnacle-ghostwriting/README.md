# Pinnacle Ghostwriting

React (Vite) port of the original single-file `index (2).html`. The layout, CSS, copy and
animations are reproduced as-is; the only visual change is that the generated SVG book covers
were replaced with real cover photographs.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle into dist/
npm run preview  # serve the built bundle
```

## Deploy to Vercel

Vercel auto-detects Vite — no config file needed.

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

Or push the folder to a GitHub repo and import it at vercel.com. If asked, the settings are:

| Setting          | Value           |
| ---------------- | --------------- |
| Framework Preset | Vite            |
| Build Command    | `npm run build` |
| Output Directory | `dist`          |

## Structure

```
public/images/covers/   real book cover images
public/images/          books-bg.jpg — library photo behind the About section
src/data/content.js     genres, services, reviews and the canonical BOOKS list
src/components/         one component per section of the original page
src/styles.css          the original <style> block, verbatim + a .cover-img rule
```

## Swapping the covers

`src/data/content.js` holds the single `BOOKS` array that feeds both the About marquee and the
Portfolio grid. Drop a new image into `public/images/covers/` and point the `img` field at it —
covers look best at a 2:3 ratio.

## Image provenance

- **Book covers** — publisher cover art, fetched from the [Open Library Covers API](https://openlibrary.org/dev/docs/api/covers).
  These are copyrighted works belonging to their publishers and the books were not written by
  this business. Replace them with your own client covers before going live.
- **`books-bg.jpg`** — [Unsplash](https://unsplash.com/license), free for commercial use, no attribution required.
