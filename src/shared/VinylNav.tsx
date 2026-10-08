import { useEffect, useId, useRef, useState } from 'react'
import { eras } from '../data/content'
import { scrollToEra } from './useEraTracker'

/**
 * Mobile navigation: a compact record that rotates with --scroll (set on
 * the variant root by useEraTracker). Tapping it opens the era list.
 */
export function VinylNav({ active }: { active: number }) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const wrap = useRef<HTMLDivElement>(null)
  const era = eras[active]

  useEffect(() => {
    if (!open) return
    const onDoc = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="vnav" ref={wrap}>
      <button
        type="button"
        className="vnav__btn"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="vnav__disc" aria-hidden="true">
          <span className="vnav__label" />
        </span>
        <span className="vnav__now">{era ? era.years : 'Intro'}</span>
        <span className="sr-only">: jump to an era</span>
      </button>
      <ol id={id} className="vnav__menu" hidden={!open}>
        {eras.map((e, i) => (
          <li key={e.id}>
            <a
              href={`#era-${e.slug}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={(ev) => {
                ev.preventDefault()
                setOpen(false)
                scrollToEra(e.slug)
              }}
            >
              <span className="vnav__yr">{e.years}</span> {e.title}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}
