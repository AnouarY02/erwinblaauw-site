/** Woordmerk-icoon in SVG (EB). Geen bestanden van de oude site hergebruikt. */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="Logo Erwin Blaauw">
      <rect width="48" height="48" rx="11" fill="#1c3252" />
      <text
        x="24"
        y="32.5"
        textAnchor="middle"
        fontFamily="Inter, system-ui, -apple-system, Segoe UI, Arial, sans-serif"
        fontSize="21"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        <tspan fill="#ffffff">E</tspan>
        <tspan fill="#e2854c">B</tspan>
      </text>
      <rect x="11" y="37" width="26" height="2.6" rx="1.3" fill="#d96c2c" />
    </svg>
  )
}
