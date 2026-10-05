/**
 * De negen dienstpictogrammen uit het ontwerp. Dezelfde paden worden gebruikt
 * in het hero-schema, de dienstenrijen en de vakgebiedenlijst; de maat komt
 * uit de meegegeven klasse (.ic, .ic-l, .way-ic).
 */
type P = { className?: string }

export function IconGas({ className = 'ic' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12.6 2.5c.4 2.6-.5 4-1.9 5.3-1.6 1.5-3.2 3-3.2 5.9a6.5 6.5 0 0 0 13 0c0-2.3-.9-3.9-2-5.2-.4.9-1 1.5-1.8 1.8.3-3.2-1.3-6-4.1-7.8Z" /> <path d="M12 21.4a3.1 3.1 0 0 1-3.1-3.1c0-1.6 1.2-2.5 2-3.6.7 1 1.5 1.4 2.3 1.4.6 0 1.1-.2 1.5-.6.3.6.4 1.3.4 2.1a3.1 3.1 0 0 1-3.1 3.8Z" /></svg>
  )
}

export function IconWater({ className = 'ic' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2.8c3.4 4 5.6 6.9 5.6 9.9A5.6 5.6 0 0 1 12 18.3a5.6 5.6 0 0 1-5.6-5.6c0-3 2.2-5.9 5.6-9.9Z" /> <path d="M9.6 12.9a2.4 2.4 0 0 0 2.4 2.4" /> <path d="M8 21.2h8" /></svg>
  )
}

export function IconCv({ className = 'ic' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="5" width="16" height="12" rx="2" /> <path d="M8 5v12M12 5v12M16 5v12M6 20h12" /></svg>
  )
}

export function IconSanitair({ className = 'ic' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 12h18v2.5A4.5 4.5 0 0 1 16.5 19h-9A4.5 4.5 0 0 1 3 14.5V12Z" /> <path d="M6 12V7a2.4 2.4 0 0 1 4.8 0" /> <path d="M9.6 7.4h2.4" /> <path d="M7 19v2M17 19v2" /></svg>
  )
}

export function IconZink({ className = 'ic' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2.5 12 12 4.5 21.5 12" /> <path d="M4.5 12v3.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V12" /> <path d="M8.5 17.5V21M15.5 17.5V21" /></svg>
  )
}

export function IconRiool({ className = 'ic' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7h5a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3h5" /> <path d="M2.5 5.5h3v3h-3zM18.5 15.5h3v3h-3z" /></svg>
  )
}

export function IconDak({ className = 'ic' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 9h18M3 14h18M3 19h18" /> <path d="M12 4.5 3 9M12 4.5 21 9" /></svg>
  )
}

export function IconVentilatie({ className = 'ic' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 8h11a3 3 0 1 0-3-3" /> <path d="M3 13h8" /> <path d="M3 18h13a3 3 0 1 1-3 3" /></svg>
  )
}

export function IconAdvies({ className = 'ic' }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3a6 6 0 0 1 3.5 10.9c-.6.5-.9 1.1-.9 1.8v.3h-5.2v-.3c0-.7-.3-1.3-.9-1.8A6 6 0 0 1 12 3Z" /> <path d="M10 19.5h4M10.6 21.5h2.8" /></svg>
  )
}

export const serviceIcons: Record<string, (p: P) => React.JSX.Element> = {
  'gasinstallaties': IconGas,
  'waterleidinginstallaties': IconWater,
  'centrale-verwarming': IconCv,
  'badkamer-en-sanitair': IconSanitair,
  'zink-en-dakwerk': IconZink,
  'riolering': IconRiool,
  'dakbedekking': IconDak,
  'ventilatie-advies': IconVentilatie,
  'product-en-budget': IconAdvies,
}
