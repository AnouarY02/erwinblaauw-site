import { site } from '@/data/site'
import { IconMail, IconPhone } from './icons'

/**
 * De bel- en mailknop zoals ze in het ontwerp op vijf plekken terugkomen:
 * in de kop, in de hero, bij elke dienstenrij en onder in de call-sectie.
 * Alleen de maat en de stijl van de tweede knop verschillen per plek.
 */
export function CallButton({ size = '', variant = 'btn-primary' }: { size?: string; variant?: string }) {
  return (
    <a className={`btn ${variant} ${size}`.trim()} href={site.phoneHref}>
      <IconPhone className="ic-s" />
      Bel <span className="num">{site.phone}</span>
    </a>
  )
}

export function MailButton({ size = '', variant = 'btn-line' }: { size?: string; variant?: string }) {
  return (
    <a className={`btn ${variant} ${size}`.trim()} href={`mailto:${site.email}`}>
      <IconMail className="ic-s" />
      Mail
    </a>
  )
}
