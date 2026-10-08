import type { CSSProperties } from 'react'
import { eras, heroSleeves, site, sleeveById, TIMELINE_END, TIMELINE_START, type Era } from '../../data/content'
import { DetailProvider } from '../../shared/Detail'
import { CoverArt, SleeveButton } from '../../shared/Sleeve'
import { Closing, Colophon, ComingSoon, Crate, Designers, Essay, Spotlight, Terms } from '../../shared/blocks'
import { VinylNav } from '../../shared/VinylNav'
import { scrollToEra, useEraTracker } from '../../shared/useEraTracker'
import { chromeStyle } from '../../shared/chrome'
import { IconArrowDown } from '../../shared/icons'
import { VerifyText } from '../../shared/VerifyText'
import './flypost.css'

/* V1 · FLYPOST: a Lagos wall where each era is pasted over the last. */

const LETTERS: { ch: string; era: string }[] = [
  { ch: 'S', era: 'e1' },
  { ch: 'L', era: 'e2' },
  { ch: 'E', era: 'e3' },
  { ch: 'E', era: 'e4' },
  { ch: 'V', era: 'e5' },
  { ch: 'E', era: 'e1' },
]

const span = TIMELINE_END - TIMELINE_START + 1

function Rail({ active }: { active: number }) {
  return (
    <nav className="fp-rail" aria-label="Timeline, 1970 to today">
      <ol className="fp-rail__strips">
        {eras.map((e, i) => (
          <li
            key={e.id}
            className="fp-rail__strip"
            data-era={e.id}
            data-on={i === active || undefined}
            style={
              {
                '--top': `${((e.yearStart - TIMELINE_START) / span) * 100}%`,
                '--len': `${((e.yearEnd - e.yearStart + 1) / span) * 100}%`,
              } as CSSProperties
            }
          >
            <a
              href={`#era-${e.slug}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={(ev) => {
                ev.preventDefault()
                scrollToEra(e.slug)
              }}
            >
              <span className="fp-rail__yr">{e.yearStart}</span>
              <span className="fp-rail__name">{e.title}</span>
            </a>
          </li>
        ))}
      </ol>
      <ol className="fp-rail__ticks" aria-hidden="true">
        {Array.from({ length: span }, (_, i) => (
          <li key={i} data-decade={(TIMELINE_START + i) % 10 === 0 || undefined} />
        ))}
      </ol>
      <p className="fp-rail__end" aria-hidden="true">
        {TIMELINE_END}
      </p>
    </nav>
  )
}

function Hero() {
  return (
    <header className="fp-hero">
      <div className="fp-hero__bill">
        <h1 className="fp-hero__title" aria-label={site.title}>
          {LETTERS.map((l, i) => (
            <span key={i} className="fp-scrap era-display" data-era={l.era} style={{ '--i': i } as CSSProperties} aria-hidden="true">
              {l.ch}
            </span>
          ))}
        </h1>
        <p className="fp-hero__tape">{site.tagline}</p>
        <p className="fp-hero__intro">{site.intro}</p>
      </div>
      <ul className="fp-hero__fan" aria-label="A first look at the crate">
        {heroSleeves.map((s, i) => (
          <li key={s.id} style={{ '--i': i, '--n': heroSleeves.length, zIndex: 10 - Math.abs(i - (heroSleeves.length - 1) / 2) * 2 } as CSSProperties}>
            <SleeveButton sleeve={s} eager noDisc />
          </li>
        ))}
      </ul>
      <a
        className="fp-hero__cue"
        href="#era-1970s"
        onClick={(ev) => {
          ev.preventDefault()
          scrollToEra('1970s')
        }}
      >
        <IconArrowDown />
        Start pasting at 1970
      </a>
    </header>
  )
}

function EraLayer({ era, index }: { era: Era; index: number }) {
  const written = era.status === 'written'
  const featured = era.featuredSleeveId ? sleeveById(era.featuredSleeveId) : null
  return (
    <section
      className="fp-era"
      id={`era-${era.slug}`}
      data-era={era.id}
      data-era-section
      tabIndex={-1}
      aria-labelledby={`fp-t-${era.id}`}
      style={{ zIndex: index + 2 } as CSSProperties}
    >
      <div className="fp-era__paste">
        <div className="fp-title">
          <h2 id={`fp-t-${era.id}`} className="fp-title__name era-display">
            {era.title}
          </h2>
          <p className="fp-title__lede">{era.lede}</p>
          <p className="fp-title__years">
            <span>Posted</span> {era.years}
          </p>
          {featured ? (
            <div className="fp-title__repeat" aria-hidden="true">
              {[0, 1, 2].map((k) =>
                featured.imageStatus === 'placeholder' || !featured.imagePath ? (
                  <span key={k} className="fp-title__ph">
                    <CoverArt sleeve={featured} />
                  </span>
                ) : (
                  <img key={k} src={featured.imagePath} alt="" loading="lazy" decoding="async" />
                ),
              )}
            </div>
          ) : (
            <p className="fp-title__soon" aria-hidden="true">
              Bills going up soon
            </p>
          )}
        </div>

        {written ? (
          <>
            <div className="fp-bill fp-bill--essay">
              <Essay era={era} proofs />
            </div>
            <div className="fp-spot">
              <Spotlight era={era} />
            </div>
            <div className="fp-crate">
              <h3 className="fp-sub">
                The crate <span>{era.years}</span>
              </h3>
              <Crate
                era={era}
                noDisc
                caption={(s) => (
                  <p className="fp-tag">
                    <span>{s.index}</span> {s.title} · <VerifyText text={s.year} />
                  </p>
                )}
              />
            </div>
          </>
        ) : (
          <div className="fp-bill fp-bill--soon">
            <ComingSoon era={era} />
          </div>
        )}
      </div>
    </section>
  )
}

export default function Flypost() {
  const { rootRef, active } = useEraTracker<HTMLDivElement>()
  return (
    <DetailProvider skin="fp">
      <div className="fp" ref={rootRef} style={chromeStyle(active)}>
        <Rail active={active} />
        <VinylNav active={active} />
        <Hero />
        <div className="fp-terms">
          <Terms />
        </div>
        <main>
          {eras.map((e, i) => (
            <EraLayer key={e.id} era={e} index={i} />
          ))}
        </main>
        <div className="fp-after">
          <Designers />
          <Closing />
          <Colophon />
        </div>
      </div>
    </DetailProvider>
  )
}
