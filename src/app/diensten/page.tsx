import { CallMailButtons } from '@/components/contact-actions'
import { CtaBand } from '@/components/cta-band'
import { IconMail, ServiceIcon } from '@/components/icons'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CoverPhoto, SectionHeading } from '@/components/section'
import { servicePhotos } from '@/data/photos'
import { services, site } from '@/data/site'
import { JsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
import { mailtoAlgemeen, mailtoDienst } from '@/lib/mailto'
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
        photo={servicePhotos['centrale-verwarming']}
      />

      {/* Snelnavigatie */}
      {/* Op grote schermen blijft de snelnavigatie meelopen; op mobiel zou die vier regels hoog plakken. */}
      <section className="z-30 border-b border-navy-100 bg-white/95 backdrop-blur-md lg:sticky lg:top-[4.5rem]">
        <div className="container-page py-4">
          <h2 className="sr-only">Snel naar een dienst</h2>
          <ul className="flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-800 transition-all hover:border-copper-400 hover:bg-copper-50 hover:text-copper-800"
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
      <div>
        {services.map((service, i) => {
          const photo = servicePhotos[service.slug]
          const omgekeerd = i % 2 === 1
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={`scroll-mt-32 py-16 lg:py-24 ${
                omgekeerd ? 'bg-navy-50/70' : 'bg-white'
              }`}
            >
              <div className="container-page">
                <Reveal>
                  <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                    <div className={omgekeerd ? 'lg:order-2' : ''}>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-copper-300">
                        <ServiceIcon name={service.icon} className="h-6 w-6" />
                      </span>
                      <h2 className="mt-6 text-display-sm font-bold text-navy-900">
                        {service.title}
                      </h2>
                      <div className="prose-site mt-5 space-y-4">
                        {service.body.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                      <CallMailButtons
                        mailHref={mailtoDienst(service.title)}
                        mailLabel={`Mail over ${service.label.toLowerCase()}`}
                        callLabel={`Bel ${site.phone}`}
                        size="sm"
                        className="mt-8"
                      />
                    </div>

                    <CoverPhoto
                      photo={photo}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={`aspect-[4/3] shadow-soft ${omgekeerd ? 'lg:order-1' : ''}`}
                    />
                  </div>
                </Reveal>
              </div>
            </section>
          )
        })}
      </div>

      {/* Beeldverantwoording: eerlijk over wat de foto's wel en niet zijn. */}
      <section className="border-y border-navy-100 bg-white">
        <div className="container-page py-8">
          <p className="text-sm leading-relaxed text-charcoal-700">
            <strong className="font-semibold text-navy-900">Over de foto&apos;s:</strong> de
            beelden op deze pagina zijn licentievrij sfeerbeeld van het vak. Het zijn geen
            foto&apos;s van projecten die door Erwin Blaauw Installatietechniek zijn uitgevoerd.
          </p>
        </div>
      </section>

      <section className="container-page py-14">
        <Reveal>
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-navy-100 bg-navy-50/70 p-8 sm:flex-row sm:items-center sm:justify-between lg:p-10">
            <SectionHeading
              eyebrow="Liever meteen mailen"
              title="Beschrijf uw situatie in een mail"
              intro="Zet erbij om welke dienst het gaat en wat uw adres is. Dan kunnen we gericht antwoorden."
            />
            <a href={mailtoAlgemeen} className="btn-mail shrink-0">
              <IconMail className="h-5 w-5" />
              Mail {site.email}
            </a>
          </div>
        </Reveal>
      </section>

      <CtaBand
        title="Niet gevonden wat u zocht?"
        text="Staat uw vraag er niet bij? Bel of mail dan even. Dan hoort u direct of we u kunnen helpen."
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
