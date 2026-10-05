import Link from 'next/link'
import { CallButton, MailButton } from '@/components/actions'
import { PageHero } from '@/components/page-hero'
import { navigation } from '@/data/site'

export const metadata = {
  title: 'Pagina niet gevonden',
  description: 'Deze pagina bestaat niet of is verplaatst.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <>
      <PageHero
        crumb="Pagina niet gevonden"
        title="Deze pagina bestaat niet"
        intro="Misschien is de pagina verplaatst of is er een typefout in het adres geslopen. Via het menu hieronder komt u er wel."
      />

      <section className="sec sec-top">
        <div className="wrap">
          <nav className="chips" aria-label="Alle pagina's">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="actions">
            <CallButton />
            <MailButton />
          </div>
        </div>
      </section>
    </>
  )
}
