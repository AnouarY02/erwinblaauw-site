import { site } from '@/data/site'
import { IconMail, IconPhone } from './icons'

/**
 * Bel- en mailknop als vast paar. Ze staan overal in dezelfde volgorde en met
 * hetzelfde gewicht, zodat de bezoeker op elke pagina dezelfde twee routes ziet.
 */
export function CallMailButtons({
  mailHref,
  mailLabel = 'Mail uw vraag',
  callLabel = `Bel ${site.phone}`,
  tone = 'light',
  size = 'md',
  className = '',
}: {
  mailHref: string
  mailLabel?: string
  callLabel?: string
  /** `dark` voor gebruik op een donkere ondergrond. */
  tone?: 'light' | 'dark'
  size?: 'sm' | 'md'
  className?: string
}) {
  const compact = size === 'sm' ? '!px-4 !py-2.5 !text-[0.95rem]' : ''
  return (
    <div
      className={`flex flex-col items-stretch gap-3 sm:flex-row sm:items-center ${className}`}
    >
      <a href={site.phoneHref} className={`btn-primary ${compact}`}>
        <IconPhone className="h-5 w-5 shrink-0" />
        {callLabel}
      </a>
      <a
        href={mailHref}
        className={`${tone === 'dark' ? 'btn-on-dark' : 'btn-mail'} ${compact}`}
      >
        <IconMail className="h-5 w-5 shrink-0" />
        {mailLabel}
      </a>
    </div>
  )
}

/** Compacte tekstlink naar het mailadres, voor onder een knoppenrij. */
export function MailLine({
  href,
  tone = 'light',
  prefix = 'Liever zelf mailen?',
  className = 'mt-5',
}: {
  href: string
  tone?: 'light' | 'dark'
  prefix?: string
  className?: string
}) {
  return (
    <p
      className={`${className} text-sm ${tone === 'dark' ? 'text-navy-300' : 'text-charcoal-700'}`}
    >
      {prefix}{' '}
      <a
        href={href}
        className={`rounded font-semibold underline decoration-copper-400 decoration-2 underline-offset-4 ${
          tone === 'dark' ? 'text-white' : 'text-navy-900'
        }`}
      >
        {site.email}
      </a>
    </p>
  )
}
