import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import {
  IconArrow,
  IconCheck,
  IconImage,
  IconMail,
  IconPhone,
  IconPin,
  ServiceIcon,
  UspIcon,
} from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { Photo, PhotoPlaceholder, SectionHeading } from '@/components/section'
import { coreMessage, services, site, usps } from '@/data/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: `${site.slogan} — installatietechniek in Gorredijk`,
  description:
    'Erwin Blaauw Installatietechniek in Gorredijk voor gas, water, cv, badkamer en sanitair, zink- en dakwerk, riolering en ventilatie-advies. De zekerheid van kwaliteit.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="dark-section relative overflow-hidden bg-navy-950">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(1100px_520px_at_18%_-10%,rgba(58,102,156,0.42),transparent_62%),radial-gradient(760px_440px_at_92%_8%,rgba(217,108,44,0.26),transparent_60%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />

        <div className="container-page relative grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-28">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-copper-300">
              <IconPin className="h-4 w-4" />
              Gorredijk &amp; omstreken
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
              De zekerheid van
              <span className="block text-copper-400">kwaliteit</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
              Gas, water, centrale verwarming, sanitair en dak- en zinkwerk. Van aanleg tot
              onderhoud, netjes uitgevoerd en duidelijk afgesproken.
            </p>

            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a href={site.phoneHref} className="btn-primary">
                <IconPhone className="h-5 w-5" />
                Bel direct {site.phone}
              </a>
              <Link href="/contact" className="btn-on-dark">
                Vraag advies aan
                <IconArrow className="h-5 w-5" />
              </Link>
            </div>

            <ul className="mt-10 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {[
                'Eén aanspreekpunt voor uw installatie',
                'Aanleg, service én onderhoud',
                'Meedenken over uw budget',
                'Werk in en rond Gorredijk',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-navy-100">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-copper-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <PhotoPlaceholder
                label="Foto van Erwin aan het werk"
                hint="Liggend beeld, ongeveer 1200 × 900 pixels. Bijvoorbeeld een cv-ketel, badkamer of dakgoot in uitvoering."
                tone="dark"
                className="aspect-[4/3]"
              >
                <IconImage className="mx-auto h-12 w-12 text-white/70" />
              </PhotoPlaceholder>

              <div className="mt-4 flex items-start gap-4">
                <div className="w-[124px] shrink-0 sm:w-[146px]">
                  <Photo
                    src="/fotos/bedrijfsbus-met-ladders.webp"
                    alt="De bedrijfsbus van Erwin Blaauw Installatietechniek met ladders op het dak"
                    width={174}
                    height={294}
                    tone="dark"
                  />
                </div>
                <p className="text-xs leading-relaxed text-navy-300">
                  Deze foto komt van de huidige website van Erwin Blaauw. Het liggende vlak
                  hierboven is nog een plaatshouder: daar past een eigen foto van werk in
                  uitvoering.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Telefoonbalk */}
      <section className="border-b border-navy-100 bg-navy-50">
        <div className="container-page flex flex-col gap-3 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-navy-900">
            {site.name} &middot; {site.address.street}, {site.address.postalCode}{' '}
            {site.address.city}
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-navy-800">
            <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded font-semibold hover:text-copper-700">
              <IconPhone className="h-4 w-4" /> {site.phone}
            </a>
            <a href={site.mobileHref} className="inline-flex items-center gap-2 rounded font-semibold hover:text-copper-700">
              <IconPhone className="h-4 w-4" /> {site.mobile}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 rounded font-semibold hover:text-copper-700">
              <IconMail className="h-4 w-4" /> {site.email}
            </a>
          </p>
        </div>
      </section>

      {/* USP's */}
      <section className="container-page py-20 lg:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Waarom Erwin Blaauw"
            title="Kwaliteit op drie fronten"
            intro="Kwaliteit staat hoog in het vaandel. Niet alleen in het eindresultaat, maar in het hele traject en in de omgang met u als klant."
            align="center"
          />
        </Reveal>
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {usps.map((usp, i) => (
            <Reveal as="li" key={usp.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-7 shadow-card transition-shadow hover:shadow-card-hover">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-copper-50 text-copper-700">
                  <UspIcon name={usp.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{usp.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-charcoal-700">{usp.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Diensten */}
      <section className="bg-navy-50/70 py-20 lg:py-24">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Diensten"
                title="Waarvoor u bij ons terecht kunt"
                intro="Van een gaskeuring tot een complete badkamer en van een nieuwe cv-ketel tot zinken dakgoten."
              />
              <Link
                href="/diensten"
                className="btn-secondary shrink-0 !py-2.5 sm:self-end"
              >
                Alle diensten
                <IconArrow className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal as="li" key={service.slug} delay={Math.min(i, 5) * 70}>
                <Link
                  href={`/diensten#${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-copper-200 hover:shadow-card-hover"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-copper-300 transition-colors group-hover:bg-copper-600 group-hover:text-white">
                    <ServiceIcon name={service.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-navy-900">{service.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-charcoal-700">
                    {service.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-copper-700">
                    Meer hierover
                    <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Over ons */}
      <section className="container-page py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="mx-auto w-full max-w-[232px] lg:mx-0">
              <Photo
                src="/fotos/erwin-blaauw-bij-bedrijfsbus.webp"
                alt="Erwin Blaauw bij zijn bedrijfsbus in Gorredijk"
                width={174}
                height={294}
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="Over ons" title="Vakwerk met korte lijnen" />
            <div className="prose-site mt-6 space-y-5">
              <p>{coreMessage}</p>
              <p>
                In de praktijk betekent dat: u legt uw vraag voor, wij kijken wat er nodig is en
                leggen uit wat de opties zijn. Ook bij het uitzoeken van een product dat het
                beste bij uw budget past.
              </p>
            </div>
            <Link href="/over-ons" className="btn-secondary mt-8">
              Meer over Erwin Blaauw
              <IconArrow className="h-5 w-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="dark-section bg-charcoal-900 py-20 lg:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Werkgebied"
              title="Gevestigd in Gorredijk"
              intro="Het bedrijf zit aan de Brouwerij 1 in Gorredijk en werkt in Gorredijk en de omgeving daarvan. Twijfelt u of uw adres binnen het werkgebied valt? Bel dan even, dan hoort u het direct."
              onDark
            />
            <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <a href={site.phoneHref} className="btn-primary">
                <IconPhone className="h-5 w-5" />
                Bel {site.phone}
              </a>
              <Link href="/route" className="btn-on-dark">
                Bekijk de route
                <IconArrow className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-copper-300">
                Bedrijfsgegevens
              </h3>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex gap-3">
                  <dt className="sr-only">Adres</dt>
                  <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-navy-300" />
                  <dd className="text-navy-100">
                    {site.address.street}
                    <br />
                    {site.address.postalCode} {site.address.city}
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="sr-only">Telefoon</dt>
                  <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-navy-300" />
                  <dd className="flex flex-col gap-1">
                    <a href={site.phoneHref} className="rounded text-navy-100 hover:text-white">
                      {site.phone}
                    </a>
                    <a href={site.mobileHref} className="rounded text-navy-100 hover:text-white">
                      {site.mobile}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="sr-only">E-mail</dt>
                  <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-navy-300" />
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all rounded text-navy-100 hover:text-white"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
