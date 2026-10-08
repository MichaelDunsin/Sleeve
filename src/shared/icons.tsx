/** One stroke family for every icon: 1.75 stroke, square caps. */
const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 20 20',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'square' as const,
  'aria-hidden': true,
}

export const IconClose = () => (
  <svg {...base}>
    <path d="M5 5l10 10M15 5L5 15" />
  </svg>
)

export const IconArrowDown = () => (
  <svg {...base}>
    <path d="M10 3v13M4.5 10.5L10 16l5.5-5.5" />
  </svg>
)

export const IconArrowRight = () => (
  <svg {...base}>
    <path d="M3 10h13M10.5 4.5L16 10l-5.5 5.5" />
  </svg>
)

export const IconPlay = () => (
  <svg {...base} fill="currentColor" stroke="none">
    <path d="M6 4l10 6-10 6z" />
  </svg>
)
