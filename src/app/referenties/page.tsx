import { CtaBand } from '@/components/cta-band'
import { IconImage } from '@/components/icons'
import { PageHero } from '@/components/page-hero'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Referenties',
  description:
    'Projecten van Erwin Blaauw Installatietechniek bij bedrijven en particulieren: gasinstallaties, waterleiding, verwarming, badkamers, riolering en dakwerk.',
  path: '/referenties',
})

export default function ReferentiesPage() {
  return (
    <>
      <PageHero
        crumb="Referenties"
        title="Projecten bij bedrijven en particulieren"
        intro="Deze pagina wordt gevuld met echte projecten. De opzet staat klaar; de foto's en beschrijvingen volgen."
      />

      <section className="sec sec-top">
        <div className="wrap">
          <p className="notice">
            <IconImage />
            <span>
              <strong>Binnenkort meer informatie.</strong> Zodra er foto&apos;s en beschrijvingen
              van projecten zijn, komen die hier te staan.
            </span>
          </p>

          <div className="two">
            <div className="ref">
              <h2>Bedrijven</h2>
              <p>
                Werk in bedrijfspanden: gasinstallaties, waterleiding, verwarming, riolering en
                dakwerk.
              </p>
            </div>
            <div className="ref">
              <h2>Particulieren</h2>
              <p>
                Werk in en rond de woning: cv-ketels, badkamers, sanitair, dakgoten en zinkwerk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Benieuwd wat we voor u kunnen doen?"
        text="Bel of mail uw vraag. Dan vertellen we graag welk vergelijkbaar werk we eerder hebben gedaan."
      />
    </>
  )
}
