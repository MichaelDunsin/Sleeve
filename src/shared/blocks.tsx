import { useRef, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react'
import { site, sleeveById, sleevesFor, type Era, type Sleeve } from '../data/content'
import { SleeveButton } from './Sleeve'
import { VerifyText } from './VerifyText'

/* Semantic content blocks shared by all five variants. Each variant
   arranges and dresses them through its own scoped CSS. */

export function Essay({ era, proofs = false }: { era: Era; proofs?: boolean }) {
  return (
    <div className={`essay${proofs ? ' essay--proofs' : ''}`}>
      {era.essay.map((p, i) => {
        const proof = proofs && era.proof[i] ? sleeveById(era.proof[i]) : null
        return (
          <div className="essay__pair" key={i}>
            <p className="essay__p">
              <VerifyText text={p} />
            </p>
            {proof && (
              <figure className="essay__proof">
                <SleeveButton sleeve={proof} noDisc className="sl--proof" />
                <figcaption>
                  {proof.title}, {proof.year.replace(' [VERIFY]', '')}
                </figcaption>
              </figure>
            )}
          </div>
        )
      })}
    </div>
  )
}

export function Spotlight({ era, children }: { era: Era; children?: ReactNode }) {
  if (!era.featuredSleeveId || !era.spotlight) return null
  const s = sleeveById(era.featuredSleeveId)
  return (
    <figure className="spot">
      <div className="spot__art">
        <SleeveButton sleeve={s} className="sl--spot" />
        {children}
      </div>
      <figcaption className="spot__notes">
        <h3 className="spot__title era-display">{s.title}</h3>
        <p className="spot__by">
          {s.artist} · {s.year.replace(' [VERIFY]', '')} · <VerifyText text={s.label} /> · {s.index}
        </p>
        <dl className="spot__dl">
          <div>
            <dt>Who made it</dt>
            <dd>
              <VerifyText text={era.spotlight.who} />
            </dd>
          </div>
          <div>
            <dt>What it shows</dt>
            <dd>
              <VerifyText text={era.spotlight.what} />
            </dd>
          </div>
          <div>
            <dt>Why it matters</dt>
            <dd>
              <VerifyText text={era.spotlight.why} />
            </dd>
          </div>
        </dl>
      </figcaption>
    </figure>
  )
}

/** Arrow keys move between sleeves; Tab still walks the grid. */
function useGridKeys() {
  const ref = useRef<HTMLUListElement>(null)
  const onKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    const keys = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp', 'Home', 'End']
    if (!keys.includes(e.key)) return
    const items = Array.from(ref.current!.querySelectorAll<HTMLButtonElement>('.sl'))
    const i = items.indexOf(document.activeElement as HTMLButtonElement)
    if (i < 0) return
    const cols = Math.max(1, Math.round(ref.current!.clientWidth / items[0].getBoundingClientRect().width))
    const next = {
      ArrowRight: i + 1,
      ArrowLeft: i - 1,
      ArrowDown: i + cols,
      ArrowUp: i - cols,
      Home: 0,
      End: items.length - 1,
    }[e.key]!
    if (next >= 0 && next < items.length) {
      e.preventDefault()
      items[next].focus()
    }
  }
  return { ref, onKeyDown }
}

export function Crate({
  era,
  caption = (s) => <DefaultCaption s={s} />,
  noDisc,
}: {
  era: Era
  caption?: (s: Sleeve) => ReactNode
  noDisc?: boolean
}) {
  const grid = useGridKeys()
  const list = sleevesFor(era.id)
  return (
    <ul className="crate" ref={grid.ref} onKeyDown={grid.onKeyDown} aria-label={`The crate: ${list.length} sleeves from the ${era.slug}`}>
      {list.map((s, i) => (
        <li className="crate__item" key={s.id} style={{ '--i': i } as CSSProperties}>
          <SleeveButton sleeve={s} noDisc={noDisc} />
          {caption(s)}
        </li>
      ))}
    </ul>
  )
}

function DefaultCaption({ s }: { s: Sleeve }) {
  return (
    <div className="crate__cap">
      <p className="crate__index">{s.index}</p>
      <p className="crate__title">{s.title}</p>
      <p className="crate__artist">
        {s.artist}, <VerifyText text={s.year} />
      </p>
      <p className="crate__credit">
        Design: <VerifyText text={s.designer} />
      </p>
    </div>
  )
}

export function ComingSoon({ era }: { era: Era }) {
  return (
    <div className="soon" role="note">
      <p className="soon__flag">Coming soon</p>
      <p className="soon__text">
        The essay and the crate for the {era.slug} are still being dug and verified: {era.lede}
      </p>
      <ul className="soon__ghosts" aria-hidden="true">
        {Array.from({ length: 6 }, (_, i) => (
          <li key={i} className="soon__ghost" />
        ))}
      </ul>
    </div>
  )
}

export function Terms() {
  const t = site.terms
  return (
    <aside className="terms" aria-labelledby="terms-h">
      <h2 id="terms-h" className="terms__heading">
        {t.heading}
      </h2>
      <dl className="terms__dl">
        <div className="terms__def" data-era="e1">
          <dt className="era-display">Afrobeat</dt>
          <dd>
            <VerifyText text={t.afrobeat} />
          </dd>
        </div>
        <div className="terms__def" data-era="e5">
          <dt className="era-display">Afrobeats</dt>
          <dd>
            <VerifyText text={t.afrobeats} />
          </dd>
        </div>
      </dl>
    </aside>
  )
}

export function Designers({ headingClass = '' }: { headingClass?: string }) {
  const d = site.designers
  return (
    <section className="designers" id="designers" aria-labelledby="designers-h" tabIndex={-1}>
      <h2 id="designers-h" className={`designers__heading ${headingClass}`}>
        {d.heading}
      </h2>
      <p className="designers__intro">{d.intro}</p>
      <ol className="designers__list">
        {d.people.map((p) => (
          <li className="designer" key={p.name} data-era={p.era}>
            <h3 className="designer__name">{p.name}</h3>
            <p className="designer__role">
              {p.role} · {p.eras}
            </p>
            <p className="designer__style">
              <VerifyText text={p.style} />
            </p>
            <ul className="designer__work" aria-label="Notable covers">
              {p.work.map((w) => (
                <li key={w}>
                  <VerifyText text={w} />
                </li>
              ))}
            </ul>
            <p className="designer__note">
              <VerifyText text={p.note} />
            </p>
            <p className="designer__src">
              {p.sources.map((s, i) => (
                <a key={s} href={s} target="_blank" rel="noreferrer">
                  Source {i + 1}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Closing({ headingClass = '' }: { headingClass?: string }) {
  const c = site.closing
  return (
    <section className="closing" aria-labelledby="closing-h">
      <h2 id="closing-h" className={`closing__heading ${headingClass}`}>
        {c.heading}
      </h2>
      <div className="closing__body">
        {c.paragraphs.map((p, i) => (
          <p key={i}>
            <VerifyText text={p} />
          </p>
        ))}
      </div>
    </section>
  )
}

/** Short colophon line that keeps the image policy visible. */
export function Colophon() {
  return (
    <p className="colophon">
      Sleeve. Album covers are © their respective rights holders and are reproduced at low resolution for commentary and
      criticism; each sleeve's detail view credits its makers and sources.
    </p>
  )
}
