import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { IconArrow, IconImage, UspIcon } from '@/components/icons'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { PhotoPlaceholder, SectionHeading } from '@/components/section'
import { coreMessage, services, site, usps } from '@/data/site'
import { JsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Over ons',
  description:
    'Erwin Blaauw Installatietechniek uit Gorredijk: kwaliteit van het eindproduct, van het hele proces en van de relatie met de klant. Samenwerken, meedenken en oplossen.',
  path: '/over-ons',
})

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        crumb="Over ons"
        eyebrow="Over ons"
        title="Erwin Blaauw Installatietechniek"
        intro="Een installatiebedrijf uit Gorredijk voor gas, water, cv, sanitair en dak- en zinkwerk. Met korte lijnen en duidelijke afspraken."
      />

      <section className="container-page py-20 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <SectionHeading eyebrow="Onze werkwijze" title="De zekerheid van kwaliteit" />
            <div className="prose-site mt-6 space-y-5">
              <p>{coreMessage}</p>
              <p>
                Dat begint bij het eerste gesprek: u legt uw vraag voor, wij kijken wat er nodig
                is en leggen uit welke mogelijkheden er zijn. Ook als dat betekent dat we met u
                meedenken over een product dat het beste bij uw budget past.
              </p>
              <p>
                Na de oplevering blijft het werk niet staan. Voor gas, water en centrale
                verwarming verzorgen we ook de service en het onderhoud, zodat de installatie
                blijft doen wat hij moet doen.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <PhotoPlaceholder
              label="Portretfoto van Erwin"
              hint="Staand beeld, ongeveer 900 × 1100 pixels. Bijvoorbeeld bij de werkbus of in de werkplaats."
              className="aspect-[4/5] w-full"
            >
              <IconImage className="mx-auto h-11 w-11 text-navy-400" />
            </PhotoPlaceholder>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50/70 py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Waar we op letten"
              title="Kwaliteit op drie fronten"
              align="center"
            />
          </Reveal>
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {usps.map((usp, i) => (
              <Reveal as="li" key={usp.title} delay={i * 90}>
                <div className="h-full rounded-2xl border border-navy-100 bg-white p-7 shadow-card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-copper-50 text-copper-700">
                    <UspIcon name={usp.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{usp.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-charcoal-700">{usp.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Vakgebieden"
            title="Waar we voor ingeschakeld worden"
            intro={`U kunt bij ${site.name} terecht voor de volgende werkzaamheden.`}
          />
        </Reveal>
        <ul className="mt-12 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/diensten#${s.slug}`}
                className="group flex items-center justify-between gap-3 rounded-lg border-b border-navy-100 py-3.5 text-base font-medium text-navy-900 hover:text-copper-700"
              >
                {s.title}
                <IconArrow className="h-4 w-4 shrink-0 text-copper-600 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Over ons', path: '/over-ons' },
        ])}
      />
    </>
  )
}
