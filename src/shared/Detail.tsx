import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { eraById, type Sleeve } from '../data/content'
import { CoverArt, Disc } from './Sleeve'
import { VerifyText } from './VerifyText'
import { IconClose, IconPlay } from './icons'

type Ctx = { open: (s: Sleeve, trigger: HTMLElement) => void }
const DetailContext = createContext<Ctx>({ open: () => {} })
export const useDetail = () => useContext(DetailContext)

/** A credit is shown only when it names someone. Unknown or "none" values
 *  stay in the data (and in verify[]) but never reach the page. */
export function isKnown(v: string | null | undefined): v is string {
  return !!v && !/to be confirmed|^none\b|^unknown/i.test(v.trim())
}

/**
 * Owns the one detail dialog for a variant. `skin` lets each variant dress
 * the dialog in its own carrier while the behaviour stays identical.
 */
export function DetailProvider({ skin, children }: { skin: string; children: ReactNode }) {
  const [sleeve, setSleeve] = useState<Sleeve | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const open = useCallback((s: Sleeve, trigger: HTMLElement) => {
    triggerRef.current = trigger
    setSleeve(s)
  }, [])

  useEffect(() => {
    const d = dialogRef.current
    if (sleeve && d && !d.open) {
      d.showModal()
      d.querySelector<HTMLElement>('.detail__close')?.focus()
    }
  }, [sleeve])

  const close = useCallback(() => dialogRef.current?.close(), [])

  const onClose = () => {
    setSleeve(null)
    triggerRef.current?.focus({ preventScroll: true })
  }

  const ctx = useMemo(() => ({ open }), [open])
  const era = sleeve ? eraById(sleeve.eraId) : null

  return (
    <DetailContext.Provider value={ctx}>
      {children}
      <dialog
        ref={dialogRef}
        className={`detail detail--${skin}`}
        aria-labelledby="detail-title"
        onClose={onClose}
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
        data-era={sleeve?.eraId}
      >
        {sleeve && era && (
          <div className="detail__inner" key={sleeve.id}>
            <div className="detail__stage">
              <Disc sleeve={sleeve} className="detail__disc" />
              <div className="detail__jacket">
                <CoverArt sleeve={sleeve} eager />
              </div>
            </div>
            <div className="detail__info">
              <p className="detail__cat">
                {sleeve.index}
                {sleeve.catalogueNo && <> · Cat. {sleeve.catalogueNo}</>} · {era.years}
              </p>
              <h2 id="detail-title" className="detail__title era-display">
                {sleeve.title}
              </h2>
              <p className="detail__artist">{sleeve.artist}</p>
              <dl className="detail__facts">
                {(
                  [
                    ['Year', sleeve.year],
                    ['Label', sleeve.catalogueNo ? `${sleeve.label} · ${sleeve.catalogueNo}` : sleeve.label],
                    ['Design', sleeve.designer],
                    ['Photography', sleeve.photographer],
                  ] as const
                )
                  .filter(([, v]) => isKnown(v))
                  .map(([k, v]) => (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>
                        <VerifyText text={v} />
                      </dd>
                    </div>
                  ))}
              </dl>
              <p className="detail__notes">
                <VerifyText text={sleeve.artNotes} />
              </p>
              {sleeve.listenUrl && (
                <a className="detail__listen" href={sleeve.listenUrl} target="_blank" rel="noreferrer">
                  <IconPlay />
                  Listen to {sleeve.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              <p className="detail__credit">
                {sleeve.imageCredit}{' '}
                {sleeve.sources.map((src, i) => (
                  <a key={src} href={src} target="_blank" rel="noreferrer">
                    Source {i + 1}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
              </p>
            </div>
            <button type="button" className="detail__close" onClick={close}>
              <IconClose />
              <span className="sr-only">Close details</span>
            </button>
          </div>
        )}
      </dialog>
    </DetailContext.Provider>
  )
}
