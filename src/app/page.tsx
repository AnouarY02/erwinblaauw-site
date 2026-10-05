import Image from 'next/image'
import Link from 'next/link'
import { CallMailButtons, MailLine } from '@/components/contact-actions'
import { CtaBand } from '@/components/cta-band'
import {
  IconArrow,
  IconCheck,
  IconMail,
  IconPhone,
  IconPin,
  ServiceIcon,
  UspIcon,
} from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { CoverPhoto, Photo, SectionHeading } from '@/components/section'
import { heroPhoto, servicePhotos, sfeerPhotos } from '@/data/photos'
import { coreMessage, services, site, usps } from '@/data/site'
import { mailtoAdvies, mailtoDienst } from '@/lib/mailto'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: `${site.slogan} — installatietechniek in Gorredijk`,
  description:
    'Erwin Blaauw Installatietechniek in Gorredijk voor gas, water, cv, badkamer en sanitair, zink- en dakwerk, riolering en ventilatie-advies. De zekerheid van kwaliteit.',
  path: '/',
})

/**
 * Vier feitelijke punten. Alles hierin volgt uit src/data/site.ts; er staan
 * bewust geen jaartallen, aantallen klanten of andere cijfers die we niet weten.
 */
const kerncijfers = [
  { value: `${services.length}`, label: 'vakgebieden onder één dak' },
  { value: 'Gorredijk', label: 'en omstreken in Friesland' },
  { value: 'Aanleg', label: 'service én onderhoud' },
  { value: '1', label: 'vast aanspreekpunt' },
]

/** Scheidingslijnen tussen de cijfers, per kolomindeling. */
const cijferRand = [
  '',
  'border-t border-white/10 sm:border-t-0 sm:border-l lg:border-l',
  'border-t border-white/10 lg:border-t-0 lg:border-l',
  'border-t border-white/10 sm:border-l lg:border-t-0 lg:border-l',
]

export default function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="dark-section relative isolate overflow-hidden bg-navy-950">
        <Image
          src={heroPhoto.src}
          alt={heroPhoto.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay: donker links voor leesbare tekst, open rechts voor het beeld. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-navy-950/95 via-navy-950/80 to-navy-950/90 md:bg-gradient-to-r md:from-navy-950 md:via-navy-950/90 md:to-navy-950/45"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(900px_460px_at_12%_0%,rgba(58,102,156,0.35),transparent_60%),radial-gradient(640px_380px_at_80%_100%,rgba(217,108,44,0.22),transparent_62%)]"
        />

        <div className="container-page relative py-24 lg:py-36">
          <Reveal className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-copper-200 backdrop-blur-sm">
              <IconPin className="h-4 w-4" />
              Gorredijk &amp; omstreken
            </p>

            <h1 className="mt-7 text-display-lg font-bold text-white">
              De zekerheid van
              <span className="block bg-gradient-to-r from-copper-300 to-copper-500 bg-clip-text text-transparent">
                kwaliteit
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-navy-100 sm:text-xl">
              Gas, water, centrale verwarming, sanitair en dak- en zinkwerk. Van aanleg tot
              onderhoud, netjes uitgevoerd en duidelijk afgesproken.
            </p>

            <CallMailButtons
              mailHref={mailtoAdvies}
              mailLabel="Mail uw vraag"
              callLabel={`Bel direct ${site.phone}`}
              tone="dark"
              className="mt-10"
            />
            <MailLine href={mailtoAdvies} tone="dark" prefix="Of mail rechtstreeks naar" />

            <ul className="mt-12 grid gap-x-7 gap-y-3 sm:grid-cols-2">
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
        </div>
      </section>

      {/* ---------------- Kerncijfers / USP-balk ---------------- */}
      <section className="dark-section border-b border-white/10 bg-navy-900">
        <div className="container-page">
          <ul className="grid border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {kerncijfers.map((item, i) => (
              <li
                key={item.label}
                className={`border-white/10 py-7 sm:px-8 sm:first:pl-0 lg:py-9 ${cijferRand[i]}`}
              >
                <p className="font-display text-2xl font-bold text-copper-300 lg:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-200">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------- Contactbalk ---------------- */}
      <section className="border-b border-navy-100 bg-navy-50">
        <div className="container-page flex flex-col gap-3 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-navy-900">
            {site.name} &middot; {site.address.street}, {site.address.postalCode}{' '}
            {site.address.city}
          </p>
          <p className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-navy-800">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded font-semibold hover:text-copper-700"
            >
              <IconPhone className="h-4 w-4" /> {site.phone}
            </a>
            <a
              href={site.mobileHref}
              className="inline-flex items-center gap-2 rounded font-semibold hover:text-copper-700"
            >
              <IconPhone className="h-4 w-4" /> {site.mobile}
            </a>
            <a
              href={mailtoAdvies}
              className="inline-flex items-center gap-2 rounded font-semibold hover:text-copper-700"
            >
              <IconMail className="h-4 w-4" /> {site.email}
            </a>
          </p>
        </div>
      </section>

      {/* ---------------- USP's ---------------- */}
      <section className="container-page section-y">
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
              <div className="group h-full rounded-3xl border border-navy-100 bg-white p-8 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-copper-200 hover:shadow-card-hover">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-copper-50 text-copper-700 transition-colors group-hover:bg-copper-600 group-hover:text-white">
                  <UspIcon name={usp.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-lg font-bold text-navy-900">{usp.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-charcoal-700">{usp.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------------- Diensten met beeld ---------------- */}
      <section className="relative bg-navy-50/70 section-y">
        <div aria-hidden="true" className="rule-copper absolute inset-x-0 top-0" />
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Diensten"
                title="Waarvoor u bij ons terecht kunt"
                intro="Van een gaskeuring tot een complete badkamer en van een nieuwe cv-ketel tot zinken dakgoten."
              />
              <Link href="/diensten" className="btn-secondary shrink-0 !py-2.5 sm:self-end">
                Alle diensten
                <IconArrow className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const photo = servicePhotos[service.slug]
              return (
                <Reveal as="li" key={service.slug} delay={Math.min(i, 5) * 70}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:border-copper-200 hover:shadow-card-hover">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.06]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-navy-950/5 to-transparent"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-navy-900 shadow-sm backdrop-blur-sm transition-colors group-hover:bg-copper-600 group-hover:text-white"
                      >
                        <ServiceIcon name={service.icon} className="h-5 w-5" />
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-base font-bold text-navy-900">
                        <Link
                          href={`/diensten#${service.slug}`}
                          className="rounded after:absolute after:inset-0 after:content-['']"
                        >
                          {service.title}
                        </Link>
                      </h3>
                      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-charcoal-700">
                        {service.summary}
                      </p>
                      <div className="mt-6 flex items-center justify-between gap-3 border-t border-navy-100 pt-4">
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-copper-700">
                          Meer hierover
                          <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        {/* Mailknop per dienst, met het onderwerp al ingevuld. */}
                        <a
                          href={mailtoDienst(service.title)}
                          className="relative z-10 inline-flex items-center gap-1.5 rounded-lg bg-navy-50 px-3 py-1.5 text-xs font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
                        >
                          <IconMail className="h-4 w-4" />
                          Mail hierover
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>

      {/* ---------------- Sfeerstrook ---------------- */}
      <section className="container-page section-y">
        <Reveal>
          <SectionHeading
            eyebrow="Vakgebied in beeld"
            title="Waar we dagelijks mee bezig zijn"
            intro="Sanitair, verwarming, gas, water en dakwerk. Onderstaande foto's zijn sfeerbeeld van het vak; ze tonen geen uitgevoerde projecten."
            align="center"
          />
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {sfeerPhotos.map((photo, i) => (
            <Reveal as="li" key={photo.src} delay={i * 80}>
              <CoverPhoto
                photo={photo}
                sizes="(max-width: 640px) 50vw, 25vw"
                className={`aspect-[3/4] transition-transform duration-500 ease-smooth hover:scale-[1.02] ${
                  i % 2 === 1 ? 'lg:mt-10' : ''
                }`}
                rounded="rounded-3xl"
              />
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ---------------- Over ons ---------------- */}
      <section className="relative overflow-hidden bg-navy-50/70 section-y">
        <div aria-hidden="true" className="rule-copper absolute inset-x-0 top-0" />
        <div className="container-page grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <figure className="mx-auto w-full max-w-[240px] lg:mx-0">
              <Photo
                src="/fotos/erwin-blaauw-bij-bedrijfsbus.webp"
                alt="Erwin Blaauw bij zijn bedrijfsbus in Gorredijk"
                width={174}
                height={294}
              />
              <figcaption className="mt-3 text-center text-xs text-charcoal-700 lg:text-left">
                Erwin Blaauw bij de bedrijfsbus.
              </figcaption>
            </figure>
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
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Link href="/over-ons" className="btn-secondary !py-2.5">
                Meer over Erwin Blaauw
                <IconArrow className="h-5 w-5" />
              </Link>
              <a href={mailtoAdvies} className="btn-mail !py-2.5">
                <IconMail className="h-5 w-5" />
                Mail uw vraag
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Werkgebied ---------------- */}
      <section className="dark-section relative overflow-hidden bg-charcoal-900 section-y">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(800px_400px_at_85%_10%,rgba(58,102,156,0.3),transparent_60%)]"
        />
        <div className="container-page relative grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Werkgebied"
              title="Gevestigd in Gorredijk"
              intro="Het bedrijf zit aan de Brouwerij 1 in Gorredijk en werkt in Gorredijk en de omgeving daarvan. Twijfelt u of uw adres binnen het werkgebied valt? Bel of mail even, dan hoort u het direct."
              onDark
            />
            <CallMailButtons
              mailHref={mailtoAdvies}
              mailLabel="Mail uw adres"
              callLabel={`Bel ${site.phone}`}
              tone="dark"
              className="mt-9"
            />
            <Link
              href="/route"
              className="mt-5 inline-flex items-center gap-2 rounded text-sm font-semibold text-copper-300 hover:text-copper-200"
            >
              Bekijk de route
              <IconArrow className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-inset-line">
              <h3 className="eyebrow text-copper-300">Bedrijfsgegevens</h3>
              <dl className="mt-6 space-y-5 text-sm">
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
                      href={mailtoAdvies}
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
