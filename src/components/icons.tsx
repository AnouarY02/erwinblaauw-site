import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
}

export function IconFlame(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12.6 2.5c.4 2.6-.5 4-1.9 5.3-1.6 1.5-3.2 3-3.2 5.9a6.5 6.5 0 0 0 13 0c0-2.3-.9-3.9-2-5.2-.4.9-1 1.5-1.8 1.8.3-3.2-1.3-6-4.1-7.8Z" />
      <path d="M12 21.4a3.1 3.1 0 0 1-3.1-3.1c0-1.6 1.2-2.5 2-3.6.7 1 1.5 1.4 2.3 1.4.6 0 1.1-.2 1.5-.6.3.6.4 1.3.4 2.1a3.1 3.1 0 0 1-3.1 3.8Z" />
    </svg>
  )
}

export function IconDrop(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 2.8c3.4 4 5.6 6.9 5.6 9.9A5.6 5.6 0 0 1 12 18.3a5.6 5.6 0 0 1-5.6-5.6c0-3 2.2-5.9 5.6-9.9Z" />
      <path d="M9.6 12.9a2.4 2.4 0 0 0 2.4 2.4" />
      <path d="M8 21.2h8" />
    </svg>
  )
}

export function IconRadiator(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="4" y="5" width="16" height="12" rx="2" />
      <path d="M8 5v12M12 5v12M16 5v12M6 20h12" />
    </svg>
  )
}

export function IconBath(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 12h18v2.5A4.5 4.5 0 0 1 16.5 19h-9A4.5 4.5 0 0 1 3 14.5V12Z" />
      <path d="M6 12V7a2.4 2.4 0 0 1 4.8 0" />
      <path d="M9.6 7.4h2.4" />
      <path d="M7 19v2M17 19v2" />
    </svg>
  )
}

export function IconRoof(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M2.5 12 12 4.5 21.5 12" />
      <path d="M4.5 12v3.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V12" />
      <path d="M8.5 17.5V21M15.5 17.5V21" />
    </svg>
  )
}

export function IconPipe(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4 7h5a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3h5" />
      <path d="M2.5 5.5h3v3h-3zM18.5 15.5h3v3h-3z" />
    </svg>
  )
}

export function IconShingle(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 9h18M3 14h18M3 19h18" />
      <path d="M12 4.5 3 9M12 4.5 21 9" />
    </svg>
  )
}

export function IconWind(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M3 8h11a3 3 0 1 0-3-3" />
      <path d="M3 13h8" />
      <path d="M3 18h13a3 3 0 1 1-3 3" />
    </svg>
  )
}

export function IconAdvice(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 3a6 6 0 0 1 3.5 10.9c-.6.5-.9 1.1-.9 1.8v.3h-5.2v-.3c0-.7-.3-1.3-.9-1.8A6 6 0 0 1 12 3Z" />
      <path d="M10 19.5h4M10.6 21.5h2.8" />
    </svg>
  )
}

export function IconBadge(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m12 3 2.3 1.6 2.8-.2.9 2.7 2.3 1.6-.9 2.7.9 2.7-2.3 1.6-.9 2.7-2.8-.2L12 21l-2.3-1.8-2.8.2-.9-2.7L3.7 15l.9-2.7-.9-2.7 2.3-1.6.9-2.7 2.8.2L12 3Z" />
      <path d="m9.3 12.2 1.9 1.9 3.5-3.6" />
    </svg>
  )
}

export function IconProcess(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M20.5 12a8.5 8.5 0 0 1-14.6 5.9" />
      <path d="M3.5 12a8.5 8.5 0 0 1 14.6-5.9" />
      <path d="M18.1 2.8v3.3h-3.3M5.9 21.2v-3.3h3.3" />
    </svg>
  )
}

export function IconHandshake(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m3 11 3.4-3.4a2 2 0 0 1 1.4-.6H11l2.4 2.2a1.4 1.4 0 0 1-1.8 2.1L10 10" />
      <path d="m21 11-3.4-3.4a2 2 0 0 0-1.4-.6H14" />
      <path d="m8.5 13.5 3 2.8a1.5 1.5 0 0 0 2.1-.1l4-4.2" />
      <path d="M3 11v3.2a2 2 0 0 0 .6 1.4L6 18M21 11v3.2a2 2 0 0 1-.6 1.4L18 18" />
    </svg>
  )
}

export function IconPhone(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M6.5 3.5h2.3l1.4 3.6-1.8 1.3a10.6 10.6 0 0 0 5.2 5.2l1.3-1.8 3.6 1.4v2.3a2 2 0 0 1-2.2 2A15.4 15.4 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  )
}

export function IconMail(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.8 7 7.2 5.3a1.7 1.7 0 0 0 2 0L20.2 7" />
    </svg>
  )
}

export function IconPin(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M12 21s6.5-5.8 6.5-10.3A6.5 6.5 0 0 0 5.5 10.7C5.5 15.2 12 21 12 21Z" />
      <circle cx="12" cy="10.4" r="2.4" />
    </svg>
  )
}

export function IconClock(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  )
}

export function IconArrow(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="M4.5 12h15M14 6.5l5.5 5.5L14 17.5" />
    </svg>
  )
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  )
}

export function IconImage(p: IconProps) {
  return (
    <svg {...base} {...p}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.6" />
      <path d="m3.8 17 4.6-4.4a1.8 1.8 0 0 1 2.5 0l3 2.9 2-1.8a1.8 1.8 0 0 1 2.4 0l2 1.8" />
    </svg>
  )
}

const serviceIcons = {
  flame: IconFlame,
  drop: IconDrop,
  radiator: IconRadiator,
  bath: IconBath,
  roof: IconRoof,
  pipe: IconPipe,
  shingle: IconShingle,
  wind: IconWind,
  advice: IconAdvice,
}

export type ServiceIconName = keyof typeof serviceIcons

export function ServiceIcon({ name, ...rest }: { name: ServiceIconName } & IconProps) {
  const Cmp = serviceIcons[name]
  return <Cmp {...rest} />
}

const uspIcons = { badge: IconBadge, process: IconProcess, handshake: IconHandshake }
export type UspIconName = keyof typeof uspIcons

export function UspIcon({ name, ...rest }: { name: UspIconName } & IconProps) {
  const Cmp = uspIcons[name]
  return <Cmp {...rest} />
}
