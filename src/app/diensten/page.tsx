import Link from 'next/link'
import { CallButton, MailButton } from '@/components/actions'
import { CtaBand } from '@/components/cta-band'
import { illustrations } from '@/components/illustrations'
import { PageHero } from '@/components/page-hero'
import { serviceIcons } from '@/components/service-icons'
import { services } from '@/data/site'
import { pageMetadata } from '@/lib/seo'
import { JsonLd, breadcrumbJsonLd } from '@/lib/jsonld'

export const metadata = pageMetadata({
  title: 'Diensten',
  description:
    'Gasinstallaties, waterleiding, centrale verwarming, badkamer en sanitair, zink- en dakwerk, riolering, dakbedekking en ventilatie-advies. Aanleg, service en onderhoud.',
  path: '/diensten',
})

export default function DienstenPage() {
  return (
    <>
      <PageHero
        crumb="Diensten"
        title="Alles voor gas, water, warmte en dak"
        intro="Erwin Blaauw Installatietechniek verzorgt aanleg, service en onderhoud. Hieronder staat per vakgebied wat dat inhoudt."
      />

      <section className="sec sec-top">
        <div className="wrap">
          <nav className="chips" aria-label="Snel naar een dienst">
            {services.map((service) => (
              <Link key={service.slug} href={`/diensten#${service.slug}`}>
                {service.label}
              </Link>
            ))}
          </nav>

          <div className="rows">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug]
              const Illustratie = illustrations[service.slug]
              return (
                <article className="row" id={service.slug} key={service.slug}>
                  <div className="row-ic">
                    <Icon className="ic-l" />
                  </div>
                  <div className="row-body">
                    <h2>{service.title}</h2>
                    {service.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    <div className="row-act">
                      <CallButton size="btn-sm" />
                      <MailButton size="btn-sm" />
                    </div>
                  </div>
                  <Illustratie />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Niet gevonden wat u zocht?"
        text="Staat uw vraag er niet bij? Bel dan even. Dan hoort u direct of we u kunnen helpen."
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Diensten', path: '/diensten' },
        ])}
      />
    </>
  )
}
