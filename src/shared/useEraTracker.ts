import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from './motion'

/**
 * Scroll engine shared by every variant. It never re-renders per frame:
 * on each animation frame it writes CSS custom properties directly.
 *
 * - root:      --scroll   0..1 progress through the whole page
 * - section:   --enter    0..1 as the section's top travels from the
 *                         viewport bottom to 35% height (the crossfade)
 *              --through  0..1 progress through the section itself
 * - layers:    any [data-era-layer="i"] inside root gets opacity = weight
 *
 * Only the active era index goes through React state, and only on change.
 * With reduced motion the values snap to 0 or 1 (instant theme swaps).
 */
export function useEraTracker<T extends HTMLElement>() {
  const rootRef = useRef<T>(null)
  const [active, setActive] = useState(-1)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    let raf = 0
    let last = -2
    const reduce = prefersReducedMotion()

    const measure = () => {
      raf = 0
      const vh = window.innerHeight
      const doc = document.documentElement
      const max = Math.max(1, doc.scrollHeight - vh)
      const scroll = Math.min(1, Math.max(0, window.scrollY / max))
      root.style.setProperty('--scroll', scroll.toFixed(4))

      const sections = root.querySelectorAll<HTMLElement>('[data-era-section]')
      const weights: number[] = []
      let current = -1
      sections.forEach((el, i) => {
        const r = el.getBoundingClientRect()
        let enter = (vh - r.top) / (vh * 0.65)
        enter = Math.min(1, Math.max(0, enter))
        const through = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - vh)))
        if (reduce) enter = enter >= 0.5 ? 1 : 0
        el.style.setProperty('--enter', enter.toFixed(4))
        el.style.setProperty('--through', through.toFixed(4))
        weights.push(enter)
        if (r.top < vh * 0.5) current = i
      })
      // Free-standing tracked elements (sticky scenes): --p is progress
      // from "top reaches viewport top" to "bottom reaches viewport bottom".
      root.querySelectorAll<HTMLElement>('[data-track]').forEach((el) => {
        const r = el.getBoundingClientRect()
        let p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - vh)))
        if (reduce) p = p > 0.15 ? 1 : 0
        el.style.setProperty('--p', p.toFixed(4))
      })
      // A layer's weight is its own entry minus the next one's: crossfade.
      const layers = root.querySelectorAll<HTMLElement>('[data-era-layer]')
      layers.forEach((layer) => {
        const i = Number(layer.dataset.eraLayer)
        const w = (weights[i] ?? 0) - (weights[i + 1] ?? 0)
        layer.style.opacity = Math.max(0, w).toFixed(3)
      })
      if (current !== last) {
        last = current
        root.dataset.activeEra = String(current)
        setActive(current)
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { rootRef, active }
}

export function scrollToEra(slug: string) {
  const el = document.getElementById(`era-${slug}`)
  if (!el) return
  el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  // Move focus for keyboard and screen-reader users without a second jump.
  el.focus({ preventScroll: true })
}
