# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React + TypeScript, static build, deployable to any static host. No deploy target has been chosen yet. All content lives in one structured data file (`src/data/sleeves.json`).

## Users

Curious music fans are the primary readers: general listeners, Nigerians at home and in the diaspora, and global Afrobeats audiences who know some of these covers half by sight and want the story behind them. They browse for discovery and pleasure, mostly on phones. The writing has to reward a fan without assuming design vocabulary, and still be accurate enough that a designer or researcher who arrives would trust it.

## Product Purpose

Sleeve is a scrolling visual history of Nigerian music told through its album art, from 1970s Afrobeat to today's global Afrobeats. It celebrates the visual artists, photographers and art directors as much as the musicians. It succeeds when a fan leaves able to see how each era's covers looked the way they did, knows the names behind the art, and wants to go and listen.

Tagline: "Fifty years of Nigerian sound, judged by its cover."

It is a portfolio piece for its author, built to be shown as finished work, with real album covers rather than placeholders.

## Positioning

The history is told through the sleeve, not the discography. The design of the site itself changes as you scroll through time: each era is a full-screen chapter in its own palette, type and texture, so the page feels like flipping through a crate of records across fifty years. Designers and photographers get named credit beside the musicians, and every credit that can't be confirmed says so openly.

## Operating Context

- People read on phones as much as on desktops, including mid-range Android phones, so the long vertical scroll and its theme transitions have to stay smooth there.
- Reading runs top to bottom: hero, five era chapters (title card, essay, featured spotlight, crate, Design DNA), The Designers, Closing.
- Content grows by editing the data file, not layout code. More eras are written over time, and an image is swapped by changing `imagePath` and `imageStatus` only.

## Capabilities and Constraints

- Full site structure: hero (fanned sleeve stack that spreads on load, title, tagline, scroll cue); a sticky 1970-to-today timeline rail showing the current era, with a compact rotating vinyl progress indicator on mobile; five era chapters; The Designers; Closing.
- Each era chapter: full-screen title card in the era's typography and palette; a 200–350 word context essay; a featured artwork spotlight with art-direction notes; a crate of 6–8 sleeves; a Design DNA reference sheet (swatches, type specimens, motifs).
- Interactions: clicking a sleeve slides the vinyl out of the cover, then opens a detail view (title, artist, year, label, designer/photographer, art-direction notes, listen link slot). Hovering tilts a sleeve in 3D with a light sheen. Era themes crossfade, driven by scroll position.
- Theme system: base tokens `--vinyl #111111`, `--paper #F3EBDD`, `--label-red #C8321E` for navigation, chrome and inter-era transitions. Each era overrides `--era-bg`, `--era-fg`, `--era-accent-1`, `--era-accent-2`, `--era-display-font`, `--era-texture`.
- Data: `eras` (id, title, years, essay[], theme tokens, featuredSleeveId, designDNA {colours[], fonts[], motifs[]}) and `sleeves` (id, eraId, title, artist, year, label, designer, photographer, artNotes, imagePath, imageCredit, imageStatus, listenUrl, sources[], verify[]).
- `imageStatus` values: `"placeholder" | "licensed" | "original-art" | "reference"`. `"reference"` (added at the user's request) marks real cover art shown for commentary in a portfolio context. It is not licensed, and every one carries an `imageCredit` naming the source.
- When no image exists, the sleeve shows a clearly labelled era-styled frame (artist, title, year in the era's display face on an abstract era background). Never a traced or imitated version of a real cover.
- All five eras are fully written: essay, featured spotlight and a crate of 8 sleeves each. Eras 1 and 5 show real covers as "reference" images; Eras 2, 3 and 4 use era-styled placeholder frames until art is licensed. The "Coming soon" state remains in the code for any future era without content.
- Direction: the user chose "Flypost" from a five-variant exploration (October 2026): the page is a Lagos wall and each era is pasted over the last. The other variants were deleted. DESIGN.md records the system.
- Unconfirmed designer credits are kept off the page and listed in RESEARCH-NOTES.md for the user to research.

## Brand Commitments

- The name is "Sleeve". The tagline is "Fifty years of Nigerian sound, judged by its cover."
- User-pinned base tokens and per-era palettes, display-type characters and textures are binding as written in the brief:
  - Era 1, 1970s, "Afrobeat and the Revolution": ochre #D98E04, burnt red #A63A1E, olive #5C6B2E, cream #F2E6C9, deep brown #2B1A10. Hand-lettered, chunky, irregular display type. Paint strokes, paper grain, dense collage, comic-panel energy.
  - Era 2, 1980s, "Jùjú, Fújì and Highlife": gold #D4A017, royal purple #4B2A6B, studio teal #1F6F78, warm cream #F5E9D3. Bold condensed serif or slab, outlined or drop-shadowed. Studio backdrops, gold lamé shimmer, flash grain.
  - Era 3, late 1990s–2000s, "Naija Hip-Hop and the CD Era": chrome #C0C6CC, electric blue #1E5BFF, black #0A0A0A, white. Glossy chrome or bevelled, wide extended sans. Lens flare, gradient shine, early-Photoshop maximalism, jewel-case plastic.
  - Era 4, 2010s, "Afrobeats Rises": tangerine #FF7A1A, grass green #2DB34A, hot pink #FF3D8B, off-white #FAF7F2. Confident geometric or grotesque sans. Clean editorial photography, flat colour blocking.
  - Era 5, 2020s, "Global": smoke #3A3A3D, bone #E8E1D6, deep olive #3F4A3A, one vivid accent per cover. Refined, minimal, small and elegant; high-contrast serif or condensed sans. Surreal 3D, fine-art photography, film grain.
- UI typography is constant across eras: a clean monospace (e.g. JetBrains Mono) for years, catalogue numbers, credits and navigation, styled like record-label printing. Never Inter.
- Banned: purple gradients, cards inside cards, a stock centred hero, Inter.

## Evidence on Hand

- Nothing exists yet beyond the brief: no copy, artwork or data.
- The user shared two mood references, not assets to ship: an illustration of three silhouetted musicians (flute, drum, djembe) patterned in red, yellow and black on a mottled ochre ground, and a performance still of Fela Kuti in white face paint at the microphone against deep red. They convey the 1970s energy and painted, patterned figure language.
- Starter crate suggestions from the user, every year, label and credit still to verify: 1970s Fela Kuti / Africa 70 records, several with Lemi Ghariokwu artwork ("Zombie", "Expensive Shit", "Alagbon Close", "Sorrow Tears and Blood"); 2020s Burna Boy "Twice as Tall" (2020), Wizkid "Made in Lagos" (2020), Rema "Rave & Roses" (2022), Asake "Mr. Money with the Vibe" (2022), Davido "Timeless" (2023), Tems "Born in the Wild" (2024), Ayra Starr "The Year I Turned 21" (2024).
- Designer and photographer credits are the facts most likely to be wrong. A credit is never guessed: unknown ones read "Credit to be confirmed" and go into verify[]. Uncertain years, labels, details and essay claims are marked [VERIFY] inline and listed in verify[].

## Product Principles

1. **The cover is the protagonist.** Every section exists to make the reader look harder at the art and the people who made it.
2. **Credit the makers.** Designers, illustrators, photographers and art directors are named as prominently as the artists. Unknown credits are stated as unknown, never invented.
3. **Accuracy over flourish.** Doubt is flagged with [VERIFY], never smoothed over. Afrobeat (Fela's 1970s genre) and Afrobeats (the 2000s-onward umbrella for contemporary Nigerian and West African pop) are always kept distinct, and the site explains the difference.
4. **Every era in its own voice.** No era is flattened into the visual language of another. The page itself time-travels.
5. **Content is data.** The site grows by editing `sleeves.json`, and art swaps without touching layout.

## Accessibility & Inclusion

- WCAG AA contrast in every era theme; tints are adjusted when a pinned palette fails.
- Full prefers-reduced-motion support: theme crossfades become instant swaps, and the sleeve and vinyl motion is removed.
- Keyboard-accessible sleeve grid and detail view, with focus management in the dialog.
- Lazy-loaded sleeve images.
- Correct Yoruba diacritics throughout (Jùjú, Fújì, Adé, etc.).
