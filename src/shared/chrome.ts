import type { CSSProperties } from 'react'
import { eras } from '../data/content'

/** Chrome tokens for the active era (base tokens before the first era).
 *  Registered as <color> in theme.css, so they crossfade. */
export function chromeStyle(active: number): CSSProperties {
  const era = eras[active]
  if (!era) return { '--chrome-bg': '#111111', '--chrome-fg': '#f3ebdd', '--chrome-accent': '#c8321e' } as CSSProperties
  const t = era.theme
  return { '--chrome-bg': t.bg, '--chrome-fg': t.fg, '--chrome-accent': era.id === 'e5' ? t.accent2 : t.accent1 } as CSSProperties
}
