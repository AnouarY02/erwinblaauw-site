import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'
import { IconArrow, IconClock, IconMail, IconPhone, IconPin } from '@/components/icons'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section'
import { site } from '@/data/site'
import { JsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Contact',
  description: `Neem contact op met ${site.name} in Gorredijk. Telefoon ${site.phone}, mobiel ${site.mobile}, e-mail ${site.email}.`,
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact"
        title="Neem contact op"
        intro="Bel voor een snel antwoord, of vul het formulier in en beschrijf uw situatie. We nemen dan contact met u op."
      />

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Gegevens */}
          <div>
            <Reveal>
              <SectionHeading eyebrow="Gegevens" title="Direct contact" />

              <ul className="mt-8 space-y-5">
                <li className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-copper-300">
                    <IconPhone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-navy-500">
                      Telefoon
                    </p>
                    <a
                      href={site.phoneHref}
                      className="mt-1 block rounded text-lg font-bold text-navy-900 hover:text-copper-700"
                    >
                      {site.phone}
                    </a>
                    <a
                      href={site.mobileHref}
                      className="mt-0.5 block rounded text-lg font-bold text-navy-900 hover:text-copper-700"
                    >
                      {site.mobile}
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-copper-300">
                    <IconMail className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-navy-500">
                      E-mail
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 block break-all rounded text-lg font-bold text-navy-900 hover:text-copper-700"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-copper-300">
                    <IconPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.1em] text-navy-500">
                      Adres
                    </p>
                    <address className="mt-1 not-italic text-lg font-bold leading-snug text-navy-900">
                      {site.address.street}
                      <br />
                      {site.address.postalCode} {site.address.city}
                    </address>
                    <Link
                      href="/route"
                      className="mt-2 inline-flex items-center gap-2 rounded text-sm font-semibold text-copper-700 hover:text-copper-800"
                    >
                      Bekijk de route
                      <IconArrow className="h-4 w-4" />
                    </Link>
                  </div>
                </li>
              </ul>
            </Reveal>

            {/* Openingstijden — plaatshouder */}
            <Reveal delay={90}>
              <div className="mt-10 rounded-2xl border-2 border-dashed border-navy-300 bg-navy-50/60 p-6">
                <div className="flex items-center gap-3">
                  <IconClock className="h-5 w-5 text-navy-700" />
                  <h2 className="text-base font-bold text-navy-900">Openingstijden</h2>
                </div>
                {/*
                  TODO — OPENINGSTIJDEN INVULLEN
                  De openingstijden zijn niet bekend; ze staan niet op de bestaande website.
                  Vul de echte tijden hier in en voeg ze daarna ook toe aan het JSON-LD schema
                  (src/lib/jsonld.tsx, veld openingHoursSpecification).
                */}
                <dl className="mt-5 space-y-2 text-sm">
                  {['Maandag t/m vrijdag', 'Zaterdag', 'Zondag'].map((day) => (
                    <div
                      key={day}
                      className="flex items-center justify-between gap-4 border-b border-navy-200/70 pb-2 last:border-0"
                    >
                      <dt className="font-medium text-navy-900">{day}</dt>
                      <dd className="text-navy-500">nog in te vullen</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-sm leading-relaxed text-charcoal-700">
                  De openingstijden zijn nog niet bekend. Tot die tijd: bel{' '}
                  <a
                    href={site.phoneHref}
                    className="rounded font-semibold text-navy-900 underline decoration-copper-500 decoration-2 underline-offset-4"
                  >
                    {site.phone}
                  </a>{' '}
                  of mobiel{' '}
                  <a
                    href={site.mobileHref}
                    className="rounded font-semibold text-navy-900 underline decoration-copper-500 decoration-2 underline-offset-4"
                  >
                    {site.mobile}
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>

          {/* Formulier */}
          <Reveal delay={60}>
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-navy-900">
                Vraag advies aan
              </h2>
              <p className="mt-3 text-base leading-relaxed text-charcoal-700">
                Vul uw gegevens in en beschrijf waar het over gaat. Velden met een{' '}
                <span className="font-semibold text-copper-700">*</span> zijn verplicht.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
    </>
  )
}
