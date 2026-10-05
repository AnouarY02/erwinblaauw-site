import Link from 'next/link'
import { CallMailButtons } from '@/components/contact-actions'
import { CtaBand } from '@/components/cta-band'
import { IconArrow, UspIcon } from '@/components/icons'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CoverPhoto, Photo, SectionHeading } from '@/components/section'
import { servicePhotos, sfeerPhotos } from '@/data/photos'
import { coreMessage, services, site, usps } from '@/data/site'
import { JsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
import { mailtoAdvies } from '@/lib/mailto'
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
        photo={servicePhotos['product-en-budget']}
      />

      <section className="container-page section-y">
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
            <CallMailButtons
              mailHref={mailtoAdvies}
              mailLabel="Mail uw vraag"
              size="sm"
              className="mt-9"
            />
          </Reveal>

          <Reveal delay={100}>
            <figure className="mx-auto w-full max-w-[240px] lg:mx-0">
              <Photo
                src="/fotos/erwin-blaauw-bij-bedrijfsbus.webp"
                alt="Erwin Blaauw bij zijn bedrijfsbus met het bedrijfslogo erop"
                width={174}
                height={294}
              />
              <figcaption className="mt-3 text-sm text-charcoal-700">
                Erwin Blaauw bij de bedrijfsbus.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-50/70 section-y">
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
                <div className="h-full rounded-3xl border border-navy-100 bg-white p-8 shadow-card">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-copper-50 text-copper-700">
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

      <section className="container-page section-y">
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

        <Reveal delay={80}>
          <ul className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {sfeerPhotos.map((photo) => (
              <li key={photo.src}>
                <CoverPhoto
                  photo={photo}
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="aspect-[4/3]"
                  rounded="rounded-2xl"
                />
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-charcoal-700">
            Sfeerbeeld van het vak. Dit zijn geen foto&apos;s van uitgevoerde projecten.
          </p>
        </Reveal>
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
