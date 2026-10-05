import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { IconArrow, IconImage, IconPhone, ServiceIcon } from '@/components/icons'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { PhotoPlaceholder } from '@/components/section'
import { services, site } from '@/data/site'
import { JsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Diensten',
  description:
    'Gasinstallaties, waterleiding, centrale verwarming, badkamer en sanitair, zink- en dakwerk, riolering, dakbedekking en ventilatie-advies door Erwin Blaauw Installatietechniek in Gorredijk.',
  path: '/diensten',
})

export default function DienstenPage() {
  return (
    <>
      <PageHero
        crumb="Diensten"
        eyebrow="Diensten"
        title="Alles voor gas, water, warmte en dak"
        intro="Erwin Blaauw Installatietechniek verzorgt aanleg, service en onderhoud. Hieronder staat per vakgebied wat dat inhoudt."
      />

      {/* Snelnavigatie */}
      <section className="border-b border-navy-100 bg-white">
        <div className="container-page py-6">
          <h2 className="sr-only">Snel naar een dienst</h2>
          <ul className="flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:border-copper-400 hover:text-copper-700"
                >
                  <ServiceIcon name={s.icon} className="h-4 w-4" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Detailsecties per dienst */}
      <div className="divide-y divide-navy-100">
        {services.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-16 lg:py-20 ${i % 2 === 1 ? 'bg-navy-50/70' : 'bg-white'}`}
          >
            <div className="container-page">
              <Reveal>
                <div
                  className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                    i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-copper-300">
                      <ServiceIcon name={service.icon} className="h-6 w-6" />
                    </span>
                    <h2 className="mt-5 text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                      {service.title}
                    </h2>
                    <div className="prose-site mt-5 space-y-4">
                      {service.body.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                      <a href={site.phoneHref} className="btn-primary !py-2.5">
                        <IconPhone className="h-5 w-5" />
                        Bel {site.phone}
                      </a>
                      <Link href="/contact" className="btn-secondary !py-2.5">
                        Vraag advies aan
                        <IconArrow className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>

                  <PhotoPlaceholder
                    label={`Foto bij ${service.label.toLowerCase()}`}
                    hint="Liggend beeld, ongeveer 1200 × 800 pixels, uit eigen werk."
                    className="aspect-[3/2] w-full"
                  >
                    <IconImage className="mx-auto h-10 w-10 text-navy-400" />
                  </PhotoPlaceholder>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

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
