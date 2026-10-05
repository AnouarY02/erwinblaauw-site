import Image from 'next/image'
import type { ReactNode } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  onDark = false,
  as: Tag = 'h2',
}: {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  onDark?: boolean
  as?: 'h1' | 'h2'
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
            onDark ? 'text-copper-300' : 'text-copper-700'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
          onDark ? 'text-white' : 'text-navy-900'
        }`}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            onDark ? 'text-navy-200' : 'text-charcoal-700'
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  )
}

/**
 * Echte foto uit `public/fotos/`. De beelden komen van de huidige website van
 * Erwin Blaauw en zijn klein van origine (circa 174 x 294 en 155 x 192 pixels).
 * Geef de weergavebreedte daarom mee via een wrapper om de foto heen en houd
 * die dicht bij het oorspronkelijke formaat, anders wordt het beeld wazig.
 */
export function Photo({
  src,
  alt,
  width,
  height,
  tone = 'light',
}: {
  src: string
  alt: string
  width: number
  height: number
  tone?: 'light' | 'dark'
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes="(max-width: 640px) 50vw, 240px"
      className={`h-auto w-full rounded-2xl border ${
        tone === 'dark' ? 'border-white/15' : 'border-navy-100 shadow-card'
      }`}
    />
  )
}

/**
 * Nette plaatshouder voor beeldvlakken waar nog geen bruikbare foto voor is.
 * Erwin kan hier zijn eigen foto's laten plaatsen.
 */
export function PhotoPlaceholder({
  label,
  hint,
  className = '',
  tone = 'light',
  children,
}: {
  label: string
  hint?: string
  className?: string
  tone?: 'light' | 'dark'
  children?: ReactNode
}) {
  const dark = tone === 'dark'
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed p-6 text-center ${
        dark
          ? 'border-white/25 bg-white/[0.05]'
          : 'border-navy-300 bg-gradient-to-br from-navy-50 via-white to-copper-50'
      } ${className}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${dark ? 'opacity-[0.12]' : 'opacity-[0.07]'}`}
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${
            dark ? '#ffffff' : '#1c3252'
          } 0 1px, transparent 1px 11px)`,
        }}
      />
      <div className="relative">
        {children}
        <p className={`mt-3 text-sm font-semibold ${dark ? 'text-white' : 'text-navy-800'}`}>
          {label}
        </p>
        {hint && (
          <p className={`mt-1 text-xs leading-relaxed ${dark ? 'text-navy-200' : 'text-navy-700'}`}>
            {hint}
          </p>
        )}
        <p
          className={`mt-3 inline-block rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] ${
            dark ? 'bg-white/15 text-white' : 'bg-navy-900 text-white'
          }`}
        >
          Plek voor eigen foto
        </p>
      </div>
    </div>
  )
}
