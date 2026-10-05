/**
 * De kleine interface-pictogrammen uit het ontwerp: telefoon, mail, locatie,
 * pijl, vinkje en foto. De maat en kleur komen uit de meegegeven klasse
 * (.ic, .ic-s, .arr, .way-ic) zodat ze overal hetzelfde zijn als in het ontwerp.
 *
 * De negen dienstpictogrammen staan in service-icons.tsx.
 */
type P = { className?: string }

export function IconPhone({ className = 'ic' }: P) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6.5 3.5h2.3l1.4 3.6-1.8 1.3a10.6 10.6 0 0 0 5.2 5.2l1.3-1.8 3.6 1.4v2.3a2 2 0 0 1-2.2 2A15.4 15.4 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  )
}

export function IconMail({ className = 'ic' }: P) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.8 7 7.2 5.3a1.7 1.7 0 0 0 2 0L20.2 7" />
    </svg>
  )
}

export function IconPin({ className = 'ic' }: P) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 21s6.5-5.8 6.5-10.3A6.5 6.5 0 0 0 5.5 10.7C5.5 15.2 12 21 12 21Z" />
      <circle cx="12" cy="10.4" r="2.4" />
    </svg>
  )
}

export function IconArrow({ className = 'arr' }: P) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconCheck({ className = 'chk' }: P) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  )
}

export function IconImage({ className = 'ic' }: P) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.6" />
      <path d="m3.8 17 4.6-4.4a1.8 1.8 0 0 1 2.5 0l3 2.9 2-1.8a1.8 1.8 0 0 1 2.4 0l2 1.8" />
    </svg>
  )
}
