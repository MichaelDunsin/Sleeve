import raw from './sleeves.json'

export type ImageStatus = 'placeholder' | 'licensed' | 'original-art' | 'reference'

export type EraTheme = {
  bg: string
  fg: string
  muted: string
  accent1: string
  accent2: string
  accent3: string
  displayFont: string
  texture: 'paint-grain' | 'lame-flash' | 'chrome-flare' | 'flat' | 'film-grain'
}

export type Era = {
  id: string
  slug: string
  title: string
  years: string
  yearStart: number
  yearEnd: number
  status: 'written' | 'coming-soon'
  lede: string
  essay: string[]
  /** One sleeve id per essay paragraph: the cover that proves the claim. */
  proof: string[]
  featuredSleeveId: string | null
  spotlight: { who: string; what: string; why: string } | null
  theme: EraTheme
  designDNA: {
    colours: { name: string; hex: string; use: string }[]
    fonts: { name: string; role: string; sample: string }[]
    motifs: string[]
  }
}

export type Sleeve = {
  id: string
  eraId: string
  index: string
  title: string
  artist: string
  year: string
  label: string
  catalogueNo: string | null
  designer: string
  photographer: string
  artNotes: string
  accent: string
  imagePath: string
  imageCredit: string
  imageStatus: ImageStatus
  listenUrl: string | null
  sources: string[]
  verify: string[]
}

export type Person = {
  name: string
  role: string
  /** Era id whose theme dresses the entry. */
  era: string
  /** Human-readable era span, e.g. "1970s–1980s". */
  eras: string
  work: string[]
  /** Signature style, one or two sentences. */
  style: string
  /** Short profile. */
  note: string
  sources: string[]
}

type Data = {
  site: {
    title: string
    tagline: string
    intro: string
    heroSleeves: string[]
    terms: { heading: string; afrobeat: string; afrobeats: string }
    designers: { heading: string; intro: string; people: Person[]; unknown: string }
    closing: { heading: string; paragraphs: string[] }
  }
  eras: Era[]
  sleeves: Sleeve[]
}

const data = raw as Data

export const site = data.site
export const eras = data.eras
export const sleeves = data.sleeves

const byId = new Map(sleeves.map((s) => [s.id, s]))

export function sleeveById(id: string): Sleeve {
  const s = byId.get(id)
  if (!s) throw new Error(`Unknown sleeve ${id}`)
  return s
}

export function sleevesFor(eraId: string): Sleeve[] {
  return sleeves.filter((s) => s.eraId === eraId)
}

export function eraById(id: string): Era {
  return eras.find((e) => e.id === id)!
}

export const heroSleeves = site.heroSleeves.map(sleeveById)

/** Timeline bounds: real years, measured. */
export const TIMELINE_START = 1970
export const TIMELINE_END = 2026
