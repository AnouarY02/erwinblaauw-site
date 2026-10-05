import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { site } from '@/data/site'
import { JsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Route',
  description: `Adres en route naar ${site.name}: ${site.address.street}, ${site.address.postalCode} ${site.address.city}.`,
  path: '/route',
})

export default function RoutePage() {
  return (
    <>
      <PageHero
        crumb="Route"
        title="Zo vindt u ons"
        intro={`${site.name} is gevestigd aan ${site.address.street} in ${site.address.city}.`}
      />

      <section className="sec sec-top">
        <div className="wrap contact">
          <aside className="info">
            <p className="eyebrow">Adres</p>
            <h2>
              {site.address.street}, {site.address.city}
            </h2>
            <dl className="facts">
              <div>
                <dt>Bezoekadres</dt>
                <dd>
                  {site.name}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </dd>
              </div>
              <div>
                <dt>Telefoon</dt>
                <dd>
                  <a href={site.phoneHref}>{site.phone}</a>
                  <br />
                  <a href={site.mobileHref}>{site.mobile}</a>
                </dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
            </dl>
            <a
              className="btn btn-primary"
              href={site.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Route plannen in Google Maps
            </a>
            <p className="hint">De routeplanner opent in een nieuw tabblad.</p>
          </aside>

          {/*
            In het ontwerp staat hier een getekende plaatshouder met de regel
            "Op de echte site staat hier de kaart van Google Maps". Dit ís de
            echte site, dus staat de kaart er ook echt. Hij wordt pas geladen
            als de bezoeker er naartoe scrollt.
          */}
          <div className="map map-live">
            <iframe
              src={site.mapsEmbedUrl}
              title={`Kaart met de locatie van ${site.name} aan ${site.address.street} in ${site.address.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
        <div className="wrap">
          <p className="hint map-note">
            De kaart komt van Google Maps en wordt pas geladen wanneer u er naartoe scrollt.
            Werkt de kaart niet in uw browser, gebruik dan de knop hierboven.
          </p>
        </div>
      </section>

      <CtaBand
        title="Liever dat wij langskomen?"
        text="Bel of mail uw adres en uw vraag, dan maken we een afspraak bij u op locatie."
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Route', path: '/route' },
        ])}
      />
    </>
  )
}
