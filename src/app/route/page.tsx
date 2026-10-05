import { CtaBand } from '@/components/cta-band'
import { IconArrow, IconMail, IconPhone, IconPin } from '@/components/icons'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section'
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
        eyebrow="Route"
        title="Zo vindt u ons"
        intro={`${site.name} is gevestigd aan ${site.address.street} in ${site.address.city}.`}
      />

      <section className="container-page py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <Reveal>
            <SectionHeading eyebrow="Adres" title="Brouwerij 1, Gorredijk" />

            <address className="mt-7 not-italic">
              <p className="flex gap-3 text-base leading-relaxed text-charcoal-800">
                <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-copper-700" />
                <span>
                  <strong className="font-bold text-navy-900">{site.name}</strong>
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </p>
              <p className="mt-5 flex gap-3 text-base text-charcoal-800">
                <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-copper-700" />
                <span className="flex flex-col">
                  <a href={site.phoneHref} className="rounded font-semibold text-navy-900 hover:text-copper-700">
                    {site.phone}
                  </a>
                  <a href={site.mobileHref} className="rounded font-semibold text-navy-900 hover:text-copper-700">
                    {site.mobile}
                  </a>
                </span>
              </p>
              <p className="mt-5 flex gap-3 text-base text-charcoal-800">
                <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-copper-700" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all rounded font-semibold text-navy-900 hover:text-copper-700"
                >
                  {site.email}
                </a>
              </p>
            </address>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Brouwerij+1,+8401+PM+Gorredijk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-9 w-full sm:w-auto"
            >
              Route plannen in Google Maps
              <IconArrow className="h-5 w-5" />
            </a>
            <p className="mt-3 text-sm text-charcoal-700">
              De routeplanner opent in een nieuw tabblad.
            </p>
          </Reveal>

          <Reveal delay={90}>
            {/*
              TODO — INGESLOTEN KAART
              Hier stond een ingesloten Google Maps-kaart. Die laadt bij elk
              bezoek ongevraagd Google-content en zet cookies; op een Nederlandse
              bedrijfssite hoort daar een cookiekeuze bij. Zolang die er niet is,
              staat hier een kaartblok dat de bezoeker zelf opent. Wil Erwin de
              kaart wel ingesloten hebben, dan kan dit blok vervangen worden door
              een iframe naar de kaart van dit adres.
            */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Brouwerij+1,+8401+PM+Gorredijk"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-2xl border border-navy-200 bg-navy-50 shadow-card transition hover:border-copper-400 hover:shadow-lg"
            >
              <span className="relative flex h-[360px] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-navy-100 via-white to-copper-50 sm:h-[480px] lg:h-[560px]">
                <span className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
                  <svg viewBox="0 0 400 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <pattern id="kaartraster" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M40 0H0V40" fill="none" stroke="#c9d6e8" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="400" height="400" fill="url(#kaartraster)" />
                    <path d="M-20 250 L160 170 L420 230" fill="none" stroke="#b7c7dd" strokeWidth="14" />
                    <path d="M120 -20 L175 180 L150 420" fill="none" stroke="#b7c7dd" strokeWidth="10" />
                    <path d="M-20 90 L420 60" fill="none" stroke="#dde5f0" strokeWidth="8" />
                  </svg>
                </span>
                <span className="relative flex flex-col items-center px-6 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-copper-600 text-white shadow-lg transition group-hover:scale-105">
                    <IconPin className="h-7 w-7" />
                  </span>
                  <span className="mt-4 text-lg font-bold text-navy-900">
                    {site.address.street}, {site.address.city}
                  </span>
                  <span className="mt-1 text-sm text-charcoal-700">
                    Klik om de route te openen in Google Maps
                  </span>
                </span>
              </span>
            </a>
            <p className="mt-3 text-sm text-charcoal-700">
              De kaart wordt pas bij Google opgehaald als u er zelf op klikt. Zo laadt deze
              pagina niets van buitenaf.
            </p>
          </Reveal>
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
