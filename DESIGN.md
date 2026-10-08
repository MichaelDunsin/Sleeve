---
name: Sleeve
description: Fifty years of Nigerian sound, judged by its cover.
colors:
  vinyl: "#111111"
  paper: "#f3ebdd"
  label-red: "#c8321e"
  label-red-ink: "#a8281a"
  plaster-wall: "#7f9894"
  page-edge: "#6f7f7b"
  rail-soot: "#3b3833"
  packing-tape: "#e8cd96"
  proof-grey: "#4b4640"
  e1-bg: "#2b1a10"
  e1-fg: "#f2e6c9"
  e1-muted: "#d9c7a4"
  e1-accent-1: "#d98e04"
  e1-accent-2: "#a63a1e"
  e1-accent-3: "#5c6b2e"
  e1-paper: "#f2e6c9"
  e1-ink: "#2b1a10"
  e2-bg: "#4b2a6b"
  e2-fg: "#f5e9d3"
  e2-muted: "#e3d3ec"
  e2-accent-1: "#d4a017"
  e2-accent-2: "#1f6f78"
  e2-accent-3: "#f5e9d3"
  e2-paper: "#f5e9d3"
  e2-ink: "#2e1844"
  e3-bg: "#0a0a0a"
  e3-fg: "#ffffff"
  e3-muted: "#c0c6cc"
  e3-accent-1: "#c0c6cc"
  e3-accent-2: "#6a93ff"
  e3-accent-3: "#1e5bff"
  e3-paper: "#e9edf1"
  e3-ink: "#0a0a0a"
  e4-bg: "#faf7f2"
  e4-fg: "#141414"
  e4-muted: "#4a4540"
  e4-accent-1: "#ff7a1a"
  e4-accent-2: "#2db34a"
  e4-accent-3: "#ff3d8b"
  e4-paper: "#faf7f2"
  e4-ink: "#141414"
  e5-bg: "#3a3a3d"
  e5-fg: "#e8e1d6"
  e5-muted: "#c9c1b4"
  e5-accent-1: "#e8e1d6"
  e5-accent-2: "#ff6a3d"
  e5-accent-3: "#3f4a3a"
  e5-paper: "#e8e1d6"
  e5-ink: "#232325"
typography:
  display-e1:
    fontFamily: "'Londrina Solid', 'Arial Black', sans-serif"
    fontSize: "clamp(60px, 9.5vw, 160px)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  display-e2:
    fontFamily: "'Ultra', 'Rockwell Extra Bold', serif"
    fontSize: "clamp(60px, 9.5vw, 160px)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0"
  display-e3:
    fontFamily: "'Unbounded Variable', 'Arial Black', sans-serif"
    fontSize: "clamp(40px, 6vw, 104px)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.02em"
  display-e4:
    fontFamily: "'Archivo Variable', 'Helvetica Neue', sans-serif"
    fontSize: "clamp(60px, 9.5vw, 160px)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  display-e5:
    fontFamily: "'Bodoni Moda Variable', 'Didot', serif"
    fontSize: "clamp(56px, 7vw, 112px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'opsz' 96"
  wordmark:
    fontFamily: "era display face, one per scrap"
    fontSize: "clamp(54px, 7.2vw, 124px)"
    lineHeight: 0.95
  headline:
    fontFamily: "'Literata Variable', Georgia, serif"
    fontSize: "clamp(40px, 5vw, 76px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  title:
    fontFamily: "var(--era-display-font)"
    fontSize: "clamp(36px, 4vw, 60px)"
    lineHeight: 1
  tagline:
    fontFamily: "'Literata Variable', Georgia, serif"
    fontSize: "clamp(21px, 2.3vw, 34px)"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "'Literata Variable', Georgia, serif"
    fontSize: "clamp(17px, 1.35vw, 19px)"
    fontWeight: 400
    lineHeight: 1.68
  label:
    fontFamily: "'JetBrains Mono Variable', ui-monospace, 'Cascadia Mono', monospace"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.08em"
  caption:
    fontFamily: "'JetBrains Mono Variable', ui-monospace, 'Cascadia Mono', monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  none: "0px"
  flag: "2px"
  pill: "999px"
  record: "50%"
spacing:
  gutter: "clamp(20px, 5vw, 72px)"
  hero-pad: "clamp(28px, 5vw, 72px)"
  bill-pad: "clamp(40px, 5vw, 72px) clamp(20px, 4vw, 64px)"
  block-gap: "120px"
  layer-gap: "140px"
  overlap: "64px"
  rail: "116px"
components:
  listen-button:
    backgroundColor: "{colors.e1-ink}"
    textColor: "{colors.e1-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 18px 12px 14px"
  year-stamp:
    backgroundColor: "{colors.e1-fg}"
    textColor: "{colors.e1-bg}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "6px 12px"
  crate-tag:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.vinyl}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: "5px 8px"
  scroll-cue:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.vinyl}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "9px 14px"
  paper-bill:
    backgroundColor: "{colors.e1-paper}"
    textColor: "{colors.e1-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "{spacing.bill-pad}"
  closing-bill:
    backgroundColor: "{colors.label-red-ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "clamp(40px, 6vw, 88px) clamp(24px, 5vw, 72px)"
  vinyl-nav:
    backgroundColor: "{colors.vinyl}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "5px 14px 5px 5px"
  detail-close:
    backgroundColor: "{colors.e1-bg}"
    textColor: "{colors.e1-fg}"
    rounded: "{rounded.none}"
    size: "44px"
---

# Design System: Sleeve

## Overview

**Creative North Star: "The Flyposted Wall"**

Sleeve is a weathered Lagos wall, and fifty years of Nigerian music are pasted onto it one era at a time. The page is a photographed plaster wall (CC0, Poly Haven) knocked back and warmed; every era arrives as a fresh torn sheet pasted over the last, slapped on as you scroll, casting a shadow on the layer beneath. Covers go up as bills, taped at an edge, sitting slightly crooked, abutting each other the way wild posting does. The interface itself recedes into the carrier: the timeline is a column of torn strips on a measured year scale, captions are paper tags, the closing is a red bill.

The system has two layers that never trade places. The **wall and its chrome** (vinyl, paper, label red, plaster, packing tape, JetBrains Mono, Literata) stay constant from the first viewport to the colophon. The **era layers** each own a pinned token set (background, foreground, muted, three accents, paper, ink, display face, texture) and re-skin identical geometry: title card, essay bill, spotlight, crate. Era identity comes from tokens, never from new layout. The wordmark shows the mechanism in the first viewport: "SLEEVE" is six torn scraps, each set in a different era's lettering.

Density is generous and editorial: long Literata essays on fibre-textured paper, every claim sitting beside the sleeve that proves it. Motion is physical and short: scraps slap on, the fan spreads, layers paste down, records slide out. Rejected by the brief and absent from the build: a dark parallax timeline with a centred hero, purple gradients, cards inside cards, Inter.

**Key Characteristics:**
- A photographed plaster wall as the page ground; copy on the bare wall is dark ink.
- Each era is one torn, pasted layer overlapping the previous by 64px.
- Pinned per-era tokens re-skin fixed geometry; base tokens dress chrome only.
- Torn-edge masks instead of rounded corners; the only round things are records.
- Small, deliberate rotations on everything pasted; nothing sits square.
- JetBrains Mono for anything a record label would print; Literata narrates.

## Colors

A constant wall-and-chrome palette (soot, paper, label red, plaster, tape) carrying five pinned era palettes that each own their layer completely.

### Primary
- **Label Red** (`label-red`): the record-label accent. Text selection, default focus ring, the record label on discs and the mobile vinyl nav before the first era.
- **Label Red Ink** (`label-red-ink`): label red tinted down to hold 4.5:1 for paper text. The closing bill's ground, with paper text on it.

### Neutral
- **Vinyl** (`vinyl`): the base ink. All copy set directly on the plaster wall (hero intro, Terms heading, Designers intro, colophon), crate tags, the dialog backdrop at 86%.
- **Label Paper** (`paper`): pasted paper on the bare wall. Hero intro sheet, scroll cue, crate tags, masking tape at 78%.
- **Plaster Wall** (`plaster-wall`): the fallback colour under the photographed plaster texture; `page-edge` is the body colour around it.
- **Rail Soot** (`rail-soot`): the wall mixed 82% with black for the fixed timeline rail.
- **Packing Tape** (`packing-tape`): brown packing tape at 82–90% opacity, the tagline strip and the tape on hero bills.
- **Proof Grey** (`proof-grey`): reserved secondary ink for paper sheets.

### Era palettes (pinned, binding)
Each era token set applies on any element carrying `data-era="e1".."e5"`, as `--era-bg / fg / muted / accent-1 / accent-2 / accent-3 / paper / ink`. The values come from the brief; tints were adjusted only where AA demanded it (Era 3 accent-2 `#6a93ff` is electric blue lifted for text on black).
- **Era 1, 1970s "Afrobeat and the Revolution":** deep brown ground, cream type, ochre / burnt red / olive accents.
- **Era 2, 1980s "Jùjú, Fújì and Highlife":** royal purple ground, warm cream type, gold / studio teal accents, purple-black ink.
- **Era 3, late 1990s–2000s "Naija Hip-Hop and the CD Era":** black ground, white type, chrome / lifted electric blue / electric blue.
- **Era 4, 2010s "Afrobeats Rises":** off-white ground, near-black type, tangerine / grass green / hot pink.
- **Era 5, 2020s "Global":** smoke ground, bone type, a vivid orange (`e5-accent-2`) as the single accent, deep olive as a tonal field.

### Named Rules
**The Era Owns Its Layer Rule.** Inside an era layer, every surface and text colour comes from that era's tokens. Base tokens appear only on the wall, the chrome and crate tags. An era never borrows another era's colour, except in the wordmark scraps and the Terms bills, which exist to show eras side by side.

**The Dark Ink On Plaster Rule.** The wall is a mid-tone photograph, so copy set on the bare wall is `vinyl`. Longer passages go on a pasted paper sheet, never straight onto the texture.

**The Chrome Follows The Era Rule.** The chrome colours (`--chrome-bg/fg/accent`) are registered `<color>` properties that crossfade over 700ms to the active era's bg, fg and accent (Era 5 uses accent-2). Before the first era they are vinyl, paper and label red.

## Typography

**Display Font:** the active era's face: Londrina Solid (E1), Ultra (E2), Unbounded (E3), Archivo (E4), Bodoni Moda (E5)
**Body Font:** Literata (with Georgia, serif)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, Cascadia Mono)

**Character:** five period lettering cultures speak for their eras, while a warm bookish serif narrates all fifty years and a label-printing mono handles every fact. The display faces change; the narrator and the label never do.

### Hierarchy
- **Era display** (per-era weight, clamp(60px, 9.5vw, 160px), 0.92): era title cards, Terms headwords, crate headings, spotlight titles, designer names, the essay's opening drop cap. E1–E3 uppercase. E2 is outlined in ink with a hard accent-2 drop shadow (pinned by the brief). E3 is a chrome gradient clipped to the text with a blue drop shadow, and runs smaller (clamp(40px, 6vw, 104px)) because it is so wide. E4 is width 112%. E5 is italic at weight 400.
- **Wordmark** (clamp(54px, 7.2vw, 124px)): "SLEEVE" as six scraps, each in a different era's display face, colours and treatment.
- **Wall headline** (Literata 700, clamp(40px, 5vw, 76px), 1.02, -0.02em): headings set on the bare wall or the closing bill (Terms, Designers, Closing). Max 18ch.
- **Tagline** (Literata italic 600, clamp(21px, 2.3vw, 34px), 1.15): the tagline on packing tape, max 22ch.
- **Body** (Literata 400, clamp(17px, 1.35vw, 19px) in essays, 17–18px elsewhere, 1.6–1.68): essays (max 64ch), definitions (48ch), notes and closing copy.
- **Label** (JetBrains Mono 600–700, 12–13px, 0.06–0.08em, uppercase): year stamps, scroll cue, the listen button, dialog fact labels.
- **Caption** (JetBrains Mono 400–700, 11px, 0.04em): crate tags, designer roles and works, rail years and era names (rail names are vertical).

### Named Rules
**The Label Printing Rule.** Years, catalogue numerals, credits, sources, navigation and captions are set in JetBrains Mono, as if printed on a record label. Every sleeve carries its catalogue numeral in bold mono.

**The Constant Narrator Rule.** Essays, notes and any running prose are Literata in every era. An era's display face never sets prose beyond the essay's opening drop cap.

**The Finished Work Rule.** The page shows the work, never the process. Research flags (`[VERIFY]`) and unconfirmed credits live in `sleeves.json` (`verify[]`) and RESEARCH-NOTES.md; the page strips the flags and omits any credit that does not name a confirmed maker.

## Layout

The page is a single column stack: hero, Terms, five era layers, then Designers, Closing and Colophon back on the bare wall. On desktop (900px and up), a fixed 116px timeline rail is reserved on the right and the page pads past it. Horizontal gutters are clamp(20px, 5vw, 72px) throughout. Blocks inside a layer are separated by 120–140px. Each layer ends with 140px of its own colour before the next layer overlaps it.

- **Hero:** a two-column grid (0.95fr / 1.05fr) at full viewport height. The torn-scrap wordmark, tape tagline and paper intro sit on the left; the sleeve fan spreads on the right. Below 900px it stacks, with a 300px fan.
- **Era layer:** a title card at full viewport height (title, lede, year stamp, then the featured cover repeated three times and bleeding off the right edge), the essay bill (max 1120px), the spotlight (two columns, stacking below 860px), the crate (4 columns abutting with no gap; 2 columns with an 18px row gap below 760px).
- **Essay pairs:** each paragraph sits beside a 168px proof sleeve; even pairs mirror the side. Below 640px, the proof drops beneath the paragraph at 140px.
- **Breakpoints:** 899px (rail off, vinyl nav on, hero stacks), 860px (spotlight stacks), 760px (crate 2-up, Terms and dialog single column), 640px (essay proofs stack).

### Named Rules
**The Paste-Over Rule.** Each era layer overlaps the one before by 64px, has a torn top edge, and stacks one z-index higher. As it enters, it drops in from 56px below and -1.2° (driven by the scroll engine's `--enter`), with a blurred 70px shadow cast on the layer underneath. The wall never scrolls past an era it hasn't covered.

**The Still Geometry Rule.** Every era uses the same layout skeleton. Tokens re-skin it; eras never get bespoke layouts.

## Elevation & Depth

Depth is physical paper on a wall, not UI elevation. Pasted things sit almost flat and cast only a tight contact shadow. Sheets that are taped or pinned on lift a little more. The record and the dialog are the only objects that rise off the wall. Torn edges are drawn with masks, and `drop-shadow` filters follow the torn silhouette.

### Shadow Vocabulary
- **Paste contact** (`box-shadow: 0 1px 1px rgb(0 0 0 / 0.5), 0 3px 5px -2px rgb(0 0 0 / 0.35)`): hero bills pasted flat. Paste wrinkles are painted over them with hard-light gradients.
- **Torn sheet** (`filter: drop-shadow(0 1px 1.5px rgb(0 0 0 / 0.4))`): masked paper sheets on the wall (intro, tape).
- **Tag** (`box-shadow: 0 2px 4px rgb(0 0 0 / 0.3)`): crate tags and masking tape.
- **Taped sheet** (`box-shadow: 0 16px 30px -18px rgb(0 0 0 / 0.7)`): spotlight notes; title-card covers use `0 10px 20px -12px rgb(0 0 0 / 0.7)`.
- **Fresh layer cast** (`linear-gradient(rgb(0 0 0 / 0.45), transparent)` 70px tall, blur 6px): the shadow under each newly pasted era.
- **Sleeve rest / lift** (`0 1px 1px rgb(0 0 0 / 0.25), 0 10px 24px -10px rgb(0 0 0 / 0.55)` to `0 2px 2px rgb(0 0 0 / 0.2), 0 22px 40px -14px rgb(0 0 0 / 0.6)` on hover).
- **Dialog** (`box-shadow: 0 40px 90px -30px rgb(0 0 0 / 0.8)`) over a vinyl backdrop at 86%.

### Named Rules
**The Paper Not Plastic Rule.** Shadows are soft, warm and short, matching paper on plaster. Lift belongs to sleeves on hover, the record and the dialog.

## Shapes

There are no rounded corners on paper. Edges are torn: SVG masks (`torn-top`, `torn-bottom`, `scrap`, `tape`) cut the top and bottom of era layers (44px), bills (22px), Terms bills (18px), designer cards (14px), the closing bill (26px), rail strips (8px), the tape strip and every wordmark scrap. Mask depth scales with the size of the sheet. Elsewhere, edges are square: the year stamp, scroll cue, tags, listen button, dialog and close button. Circles are kept for records (discs, the vinyl-nav disc). The vinyl-nav pill (999px) is a chrome control, not paper.

### Named Rules
**The Torn Edge Rule.** Paper sheets get a torn mask, never a border-radius. Round is reserved for vinyl.

**The Nothing Sits Square Rule.** Everything pasted carries a small rotation, alternating direction: bills about -0.35°, sheets ±0.6–0.8°, proofs and tags ±1.5–1.8°, the tape -1.4°, scraps up to ±5.5°, crate items a sine-varied ±0.9° with ±6px drift. Rotation stays under ~2.5° on anything that carries prose.

## Components

### Sleeve (signature)
The cover in its square jacket. On hover it tilts in 3D (perspective 900px) toward the pointer, with a soft-light radial sheen. Clicking pulls the record: the disc slides 62% out and spins 200° in 380ms, then the detail dialog opens. The Flypost world hides the disc peek (`noDisc`) on pasted sleeves, because a bill has no record behind it. When there is no image, the **placeholder frame** is an abstract field in the era's own grammar (E1 painted sunburst, E2 studio backdrop with gold rim, E3 chrome sweep and lens flare, E4 flat colour blocks, E5 smoke with one accent dot), with the artist, title and year in the era's display face and a mono status label at the top left. It is never an imitation of the real cover.

### Paper bill
The essay and Coming-soon carrier. It uses era paper and ink, with a multiply fibre texture, torn top and bottom, and a -0.35° rotation. Coming soon shows a display-face flag, a sentence, and six dashed ghost squares.

### Year stamp
A flat inverted chip (era fg on era bg), mono 700 13px, 0.08em, uppercase. It sits under the era title card's lede.

### Crate tag
A paper slip pinned across the bottom-left of each crate sleeve, overhanging by 12px. Mono 11px with the catalogue numeral in bold, the title and the year. Rotated -1.5°, with a tag shadow.

### Scroll cue
A square paper chip with a bobbing 16px stroke arrow, mono 600 12px uppercase, rotated 1°.

### Buttons
- **Listen** (dialog): square, era ink on era paper, mono 600 13px uppercase, with a 14px filled play glyph (inline SVG); nudges 3px right on hover. With no link, it becomes a transparent, dashed-outline state reading "Listen link to be added".
- **Close** (dialog): a 44px square with a 1px border at 40% era fg; it inverts on hover.
- **Focus:** a 2px outline at 3px offset in label red; inside the dialog it uses the era's accent-1.

### Navigation
- **Desktop rail:** a fixed 116px soot column. Each era is a torn strip placed at its true measured year position (1970–2026), with its height proportional to its span. A tick marks every year and a longer one every decade. A strip shows its start year in mono 700 11px and its name in vertical mono uppercase 10px. Inactive strips slide 34% out and turn 2.5° at 62% opacity. The active, hovered or focused strip sits flush and opaque.
- **Mobile vinyl nav** (below 900px): a fixed top-right pill holding a 34px record that rotates with scroll progress (1440° over the page), plus the era label in mono. It opens a vinyl-coloured menu with era names in Literata 15px and years in mono.

### Detail dialog
A two-column native `<dialog>` (max 1080px). The stage shows era texture over era bg and fibres, the jacket at 420px, and the record sliding out 46% while rotating 120°. The info panel is a pasted bill in era paper and ink: a mono catalogue line, an era-display title, the artist in Literata italic, mono facts in a two-column ruled grid, notes, listen and the image credit with sources. Fact rows (year, label with catalogue number, design, photography) appear only when confirmed. It enters with a 420ms rise and scale; the info panel follows at 420ms. It goes single column below 760px.

### Motion
Easing is `ease-out cubic-bezier(0.16, 1, 0.3, 1)` for everything physical and `ease-in-out cubic-bezier(0.65, 0, 0.35, 1)` for loops. Scroll-linked motion animates transform and opacity only. Under reduced motion, every animation and transition collapses to instant, layer transforms are removed, and the record rests already pulled.

## Do's and Don'ts

### Do:
- **Do** set every era surface from its `--era-*` tokens and let identical geometry carry it (The Still Geometry Rule).
- **Do** paste each new era as a torn layer overlapping the last by 64px, with the cast shadow beneath (The Paste-Over Rule).
- **Do** use torn SVG masks for paper edges, scaled to sheet size (8–44px).
- **Do** give pasted elements a small alternating rotation, kept under ~2.5° on anything carrying prose.
- **Do** set years, catalogue numerals, credits, captions and nav in JetBrains Mono, and all prose in Literata.
- **Do** put copy on the bare wall in vinyl ink, and longer copy on a pasted paper sheet.
- **Do** keep each essay claim beside the sleeve that proves it (168px proof beside the paragraph).
- **Do** omit a credit row rather than show an unconfirmed name. The era-styled placeholder frame remains in code for any sleeve without art.
- **Do** hold WCAG AA in every era; tint a pinned colour (as with Era 3's `#6a93ff`) rather than drop it.

### Don't:
- **Don't** round the corners of paper; round is for records and the vinyl-nav pill only.
- **Don't** give an era a bespoke layout or let it borrow another era's colours or face outside the wordmark and Terms.
- **Don't** set prose in an era display face, or use Inter anywhere.
- **Don't** use purple gradients, cards inside cards, or a stock centred hero.
- **Don't** trace, redraw or imitate a real cover in a placeholder.
- **Don't** drive scroll-linked motion with anything but transform and opacity.
- **Don't** set long copy straight onto the plaster texture.
