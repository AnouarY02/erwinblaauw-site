import Image from 'next/image'
import type { ReactNode } from 'react'
import type { Photo as PhotoData } from '@/data/photos'

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
        <p className={`eyebrow ${onDark ? 'text-copper-300' : 'text-copper-700'}`}>
          <span
            aria-hidden="true"
            className={`h-px w-7 ${onDark ? 'bg-copper-400/70' : 'bg-copper-400'}`}
          />
          {eyebrow}
        </p>
      )}
      <Tag
        className={`mt-4 text-display-sm font-bold ${onDark ? 'text-white' : 'text-navy-900'}`}
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
 * Beeldvlak met een vaste verhouding. De foto vult het vlak (object-cover), dus
 * hij wordt nooit uitgerekt — alleen bijgesneden. `sizes` is verplicht mee te
 * geven zodat de browser niet onnodig de grootste variant downloadt.
 */
export function CoverPhoto({
  photo,
  sizes,
  priority = false,
  className = '',
  rounded = 'rounded-3xl',
  overlay = false,
}: {
  photo: PhotoData
  sizes: string
  priority?: boolean
  /** Verhouding en overige opmaak van het omhullende vlak. */
  className?: string
  rounded?: string
  /** Lichte donkere waas, voor beeld waar tekst overheen komt. */
  overlay?: boolean
}) {
  return (
    <div className={`relative overflow-hidden bg-navy-100 ${rounded} ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {overlay && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/15 to-transparent"
        />
      )}
    </div>
  )
}

/**
 * Echte foto uit `public/fotos/` op ware grootte. De bedrijfsfoto's van Erwin
 * zijn klein van origine (circa 174 x 294 pixels). Geef de weergavebreedte
 * daarom mee via een wrapper en houd die dicht bij het oorspronkelijke formaat,
 * anders wordt het beeld wazig.
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
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed p-6 text-center ${
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
