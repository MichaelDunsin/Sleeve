---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: []
---

# Surface: Sleeve homepage (exploration, 5 variants)

Mode: Experience. The covers lead from the first viewport; the interface recedes into each variant's carrier.
Audience: curious music fans, phone-first. Job: scroll fifty years, look harder at the art, learn the makers' names, want to listen.
Content: one `src/data/sleeves.json`; real covers shown as `imageStatus: "reference"` (Wikipedia low-res non-free files, credited). Eras 1 and 5 fully written; 2–4 title card + theme + Design DNA, essay/crate "Coming soon".
Constraints: pinned era palettes/type/texture, base tokens, mono UI, AA in every era, reduced-motion instant swaps, keyboard grid + dialog, smooth on mid-range Android (opacity/transform-driven crossfades only).
Build path: code-led (no image generation available).

## Direction contract

THESIS: The page time-travels; the carrier holding the covers is what changes per variant. Refuses the category default: a dark parallax timeline with big images and a centred hero.

OWN-WORLD (shared): each era section owns its pinned tokens (--era-bg/fg/accent-1/accent-2/display-font/texture); chrome in --vinyl/--paper/--label-red; JetBrains Mono for years, catalogue numbers, credits, nav; Literata as the constant narrator voice for essays. Every sleeve carries a catalogue numeral (kiln-shelf raise). Layout geometry holds still while era tokens re-skin it (ASCII raise). The era just left lingers as a fading trace (plankton raise). Timeline ticks are real measured years (oscilloscope raise).

STORY: a fan sees fifty years of covers fan out, learns Afrobeat ≠ Afrobeats, meets Lemi Ghariokwu, Remi Olowookere, Peter Obe, Lanre Williams beside Fela and Rema, opens a sleeve, pulls the record, and leaves with listen links.

FIRST VIEWPORT, per variant:
1 FLYPOST: a weathered Lagos wall edge to edge; "Sleeve" pasted as a torn hand-lettered bill top-left at ~40% width; the sleeve fan pasted as overlapping bills spreading right; tagline on a strip of tape; torn-layer strata at the right edge as the timeline. Raise from monochrome-marketing: every essay claim sits beside the sleeve proving it.
2 SHUTTER: a market lane facade; a painted roll-up shutter fills the viewport with "SLEEVE · RECORDS" signwriting, catalogue-number stall plate, tagline painted below; shutter rises on load to reveal the sleeve fan hung on the stall wall; street-sign timeline at top.
3 SHOW BILL: a screen-printed gig bill as the page frame; ruled border of year cells (1970…2026) on all four sides as navigation (active cell floods, passed years struck); ray burst firing from a spindle point off-centre left; the sleeve fan collaged into the rays; "Sleeve" hand-lettered huge.
4 DIAL: a radio band across the top: FM scale where frequency = year, needle tracking scroll; first viewport is the station ident: "Sleeve" at large scale on the receiver glass, sleeve fan in the speaker grille field, static grain between stations.
5 CRATE: looking down into a crate; sleeves stand in depth and the front sleeve flips forward as you scroll; "Sleeve" printed on the crate's divider card; era dividers are tabbed cards.

Signature interaction (all): click a sleeve → the record slides out of the cover → detail dialog (title, artist, year, label, designer/photographer, notes, listen slot). Hover tilts sleeve in 3D with sheen. Motion grammar: one scroll-linked era crossfade per variant, expressed in its carrier (paste wipe / shutter roll / cell flood / needle sweep / divider flip).

FORM: five forms from the ordered list (1 crate, 2 market stall, 3 record, 4 flyposter wall, 5 radio dial, 6 magazine, 7 retrospective) plus the competitive challenger posters-covers-sleeves-angura-theatre-poster; assigned index 4 = Flypost leads; seed key cad8d198.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Cited adaptations (after finish review 1)

- V1 Flypost: "Sleeve" is a collage of torn scraps, one per era face, instead of a single hand-lettered bill. Reason: the wordmark itself demonstrates the page's mechanism (five eras, five lettering cultures) in the first viewport. The wall is a photographed weathered plaster texture (CC0, Poly Haven), so wall copy is set in dark ink.
- V2 Shutter: the signwriting is the era/brand face with an SVG brush-displacement filter over a photographed roller-shutter texture (CC0, Poly Haven), not hand-painted lettering art (no image generation available).
- V3 Show Bill: the spindle sits bottom-left (off-centre left) with rays rising like a sunrise, and the copy sits on the right.
- V4 Dial: the "Sleeve" wordmark is printed on the receiver glass, and the hero fan spreads inside the speaker grille. The unstationed band (1980–2019) shows as dead-air static.
- V5 Crate: the crate is seen in front elevation from slightly above, not straight down, so the sleeves' faces lead. Sleeves fan behind a short divider, and the dig is a true rotateX flip with backface hidden.

## Unresolved

- User picks one variant; then DESIGN.md is written from it and the others are deleted.
- Higher-resolution licensed covers to replace the low-res references.
