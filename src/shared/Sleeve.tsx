import { useRef, type CSSProperties, type PointerEvent } from 'react'
import type { Sleeve } from '../data/content'
import { useDetail } from './Detail'
import { prefersReducedMotion } from './motion'

const canHover = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

/** The cover itself: the real image, or a labelled era-styled frame. */
export function CoverArt({ sleeve, eager = false }: { sleeve: Sleeve; eager?: boolean }) {
  const hasImage = sleeve.imageStatus !== 'placeholder' && sleeve.imagePath
  if (hasImage) {
    return (
      <img
        className="cover"
        src={sleeve.imagePath}
        alt={`Cover of ${sleeve.title} by ${sleeve.artist} (${sleeve.year.replace(' [VERIFY]', '')})`}
        width={316}
        height={316}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
      />
    )
  }
  return (
    <span
      className="cover cover--placeholder"
      data-era={sleeve.eraId}
      role="img"
      aria-label={`Placeholder for ${sleeve.title} by ${sleeve.artist}`}
      style={{ '--ph-accent': sleeve.accent } as CSSProperties}
    >
      <span className="cover__ph-art" aria-hidden="true" />
      <span className="cover__ph-artist">{sleeve.artist}</span>
      <span className="cover__ph-title era-display">{sleeve.title}</span>
      <span className="cover__ph-year">{sleeve.year}</span>
      <span className="cover__ph-label">Placeholder · art to be licensed</span>
    </span>
  )
}

/** A record: grooves, label in the sleeve's accent. Pure CSS geometry. */
export function Disc({ sleeve, className = '' }: { sleeve: Sleeve; className?: string }) {
  return (
    <span className={`disc ${className}`} aria-hidden="true" style={{ '--disc-label': sleeve.accent } as CSSProperties}>
      <span className="disc__label">
        <span className="disc__label-text">{sleeve.index}</span>
      </span>
    </span>
  )
}

type Props = {
  sleeve: Sleeve
  className?: string
  eager?: boolean
  /** Hide the peeking record (e.g. sleeves pasted flat on a wall). */
  noDisc?: boolean
  style?: CSSProperties
}

/**
 * Clickable sleeve. Hover tilts it in 3D with a moving sheen; click pulls
 * the record out of the jacket, then opens the detail view.
 */
export function SleeveButton({ sleeve, className = '', eager, noDisc, style }: Props) {
  const ref = useRef<HTMLButtonElement>(null)
  const { open } = useDetail()

  const onMove = (e: PointerEvent<HTMLButtonElement>) => {
    if (!canHover() || prefersReducedMotion()) return
    const el = ref.current!
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--rx', `${((0.5 - y) * 14).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${((x - 0.5) * 16).toFixed(2)}deg`)
    el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`)
    el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`)
  }
  const onLeave = () => {
    const el = ref.current!
    el.style.removeProperty('--rx')
    el.style.removeProperty('--ry')
  }
  const onClick = () => {
    const el = ref.current!
    if (prefersReducedMotion() || noDisc) {
      open(sleeve, el)
      return
    }
    el.classList.add('is-pulling')
    window.setTimeout(() => {
      el.classList.remove('is-pulling')
      open(sleeve, el)
    }, 380)
  }

  return (
    <button
      ref={ref}
      type="button"
      className={`sl ${className}`}
      style={style}
      aria-haspopup="dialog"
      aria-label={`${sleeve.title} by ${sleeve.artist}, ${sleeve.year.replace(' [VERIFY]', '')}. Open details`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onClick={onClick}
      data-era={sleeve.eraId}
    >
      {!noDisc && <Disc sleeve={sleeve} className="sl__disc" />}
      <span className="sl__jacket">
        <CoverArt sleeve={sleeve} eager={eager} />
        <span className="sl__sheen" aria-hidden="true" />
      </span>
    </button>
  )
}
