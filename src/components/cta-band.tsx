import { site } from '@/data/site'
import { CallButton, MailButton } from './actions'

/**
 * De call-sectie onderaan de pagina's: het telefoonnummer groot uitgeschreven,
 * met daaronder een regel tekst en de bel- en mailknop. Precies de `.call` uit
 * het ontwerp; de titel en de tekst verschillen per pagina.
 */
export function CtaBand({
  title,
  text,
}: {
  title: string
  text: string
}) {
  return (
    <section className="call">
      <div className="wrap">
        <p className="eyebrow">Direct contact</p>
        <h2>{title}</h2>
        <a className="bignum" href={site.phoneHref} aria-label={`Bel ${site.phone}`}>
          {site.phone}
        </a>
        <div className="call-row">
          <p>{text}</p>
          <div className="call-act">
            <CallButton />
            <MailButton variant="btn-dark" />
          </div>
        </div>
      </div>
    </section>
  )
}
