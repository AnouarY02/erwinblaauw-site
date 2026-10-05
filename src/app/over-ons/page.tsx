import Image from 'next/image'
import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { SectionHead } from '@/components/section'
import { serviceIcons } from '@/components/service-icons'
import { coreMessage, services } from '@/data/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Over ons',
  description:
    'Erwin Blaauw Installatietechniek uit Gorredijk: gas, water, cv, sanitair en dak- en zinkwerk. Korte lijnen, duidelijke afspraken en service na oplevering.',
  path: '/over-ons',
})

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        crumb="Over ons"
        title="Erwin Blaauw Installatietechniek"
        intro="Een installatiebedrijf uit Gorredijk voor gas, water, cv, sanitair en dak- en zinkwerk. Met korte lijnen en duidelijke afspraken."
      />

      <section className="sec sec-top">
        <div className="wrap split">
          <div className="prose">
            <p className="eyebrow">Onze werkwijze</p>
            <h2>De zekerheid van kwaliteit</h2>
            <p>{coreMessage}</p>
            <p>
              Dat begint bij het eerste gesprek: u legt uw vraag voor, wij kijken wat er nodig is
              en leggen uit welke mogelijkheden er zijn. Ook als dat betekent dat we met u
              meedenken over een product dat het beste bij uw budget past.
            </p>
            <p>
              Na de oplevering blijft het werk niet staan. Voor gas, water en centrale verwarming
              verzorgen we ook de service en het onderhoud, zodat de installatie blijft doen wat
              hij moet doen.
            </p>
          </div>

          <figure className="portrait">
            <div className="portrait-pair">
              <Image
                src="/fotos/erwin-blaauw-bij-bedrijfsbus.webp"
                alt="Erwin Blaauw bij zijn bedrijfsbus met het bedrijfslogo erop"
                width={174}
                height={294}
              />
              <Image
                src="/fotos/bedrijfsbus-met-ladders.webp"
                alt="De bedrijfsbus van Erwin Blaauw Installatietechniek met ladders op het dak"
                width={174}
                height={294}
              />
            </div>
            <figcaption>Erwin Blaauw bij de bedrijfsbus.</figcaption>
          </figure>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Vakgebieden"
            title="Waar we voor ingeschakeld worden"
            intro="U kunt bij Erwin Blaauw Installatietechniek terecht voor de volgende werkzaamheden."
          />
          <ul className="fields">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug]
              return (
                <li key={service.slug}>
                  <Link href={`/diensten#${service.slug}`}>
                    <Icon />
                    {service.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Een vraag over gas, water, cv of dakwerk?"
        text="Bel even, dan kijken we samen wat er nodig is. Liever eerst uw situatie beschrijven? Vraag dan advies aan."
      />
    </>
  )
}
