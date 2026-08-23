# VStage Card Gallery

A card gallery for **VStage**, a card game about vtubers. Vue 3 + TypeScript + Vite,
statically prerendered with `vite-ssg`, styled with Bootstrap 5.

This is a reference site, not a playable game — card effects are descriptive text and no
game state is ever simulated.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5180
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server on port 5180 |
| `npm run build` | Type-check, then prerender every page to `dist/` |
| `npm run preview` | Serve the built `dist/` |
| `npm run type-check` | `vue-tsc` only |
| `npm run lint` | oxlint + eslint, both with `--fix` |

## Adding cards

Card data is hand-authored TypeScript in `src/data/`. The compiler is the schema check —
a malformed card fails `npm run type-check` rather than breaking at runtime.

- `src/data/cards.ts` — the cards
- `src/data/tokens.ts` — tokens characters can summon
- `src/data/sets.ts` — set names and declared set sizes

Adding a card needs **no routing or build config change**: `src/router/index.ts` generates
one static route per card, and `vite-ssg` prerenders whatever it finds.

### The two card shapes

```ts
// A full card definition.
{ setId: 'vs01', number: 1, image: sampleArt, artist: 'SketchSamurai',
  name: 'Vtuber A', rarity: 'uncommon', maxHp: 10, skills: [...] }

// An overnumbered secret print (41/40) of an existing card.
{ setId: 'vs01', number: 41, image: sampleArt, artist: 'SketchSamurai',
  rarity: 'ultra-rare', baseCardId: 'vs01-002' }
```

A reprint has no `name`, `maxHp` or `skills` field *at all* — those resolve from its base
card at read time, so skill text can never drift between two printings of the same card.
Only `number`, `rarity` and `image` belong to the printing. `resolveCard()` in
`src/data/index.ts` merges the two, and every component consumes the merged result.

Overnumbered cards intentionally exceed a set's declared `totalCards`, which is why
`41/40` displays correctly and why the dev-mode integrity check warns on *duplicate*
numbers rather than on exceeding the total.

### Rarity

`'common' | 'uncommon' | 'rare' | 'ultra-rare'`, ascending. `RARITIES` in
`src/types/card.ts` is both the list and the canonical sort order, and `RARITY_LABELS`
maps each to its display form (`'ultra-rare'` renders as `Ultra Rare`). The hyphenated
value keeps it usable in CSS attribute selectors and filter values.

The rarity marking printed in the card's bottom-left corner is not modelled — the site
shows the word instead.

### Card art and credits

`image` and `artist` are both **required** on every card, including reprints. A reprint's
whole point is that its art differs from the base card's, so neither is inherited — it
carries its own art and its own illustrator credit.

Art is imported, not referenced by path string, so Vite fingerprints it for cache-busting
(`/assets/sample-art-CgJC2NGf.jpg`) and a missing file fails the build instead of turning
into a broken image at runtime.

Right now every card points at one shared placeholder:

```ts
import sampleArt from '@/assets/cards/sample-art.jpg'
```

To give a card real art, drop the file into `src/assets/cards/`, add an import beside that
one, and point that card's `image` at it. Cards can be migrated one at a time.

## How prerendering works

`npm run build` runs `vite-ssg build`, which renders each route to a real HTML file
(`dist/cards/vs01-001/index.html`) containing the card's actual text. That is what makes
shared card links produce previews in Discord and get indexed by search engines.

Card detail is a **child route of `/cards`**, which means one component serves both
behaviours: clicking a card in the gallery opens it as an overlay without unmounting the
grid, while a direct visit to the same URL still yields a complete prerendered page.

Two constraints follow from this, and both fail quietly if broken:

- Anything touching `window`, `document` or `localStorage` must sit inside `onMounted`,
  because components also render in Node at build time.
- `@unhead/vue` must stay on the **same major version as vite-ssg's own copy** (v2.x).
  A mismatch creates a second unhead instance: the build succeeds and body content is
  fine, but every `<title>` and `og:` tag silently disappears from the output. Check with
  `npm ls @unhead/vue` — it should report `deduped`.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Game summary and a banner of showcase cards |
| `/cards` | Full gallery with search and rarity filter |
| `/cards/:id` | Card detail — overlay from the gallery, standalone page when linked |
| `/sets` | Set overview with signature cards and counts |
| `/rules` | Placeholder, to be written |

Tokens have no page of their own by design; they appear on the detail view of whichever
card summons them.

## Notes for this machine

- Port **5180**, not Vite's default 5173, which is unbindable here.
- Node v22.14.0 is below what some `engines` fields ask for. `npm install` prints
  EBADENGINE warnings; everything works regardless. Node 22.18+ silences them.
