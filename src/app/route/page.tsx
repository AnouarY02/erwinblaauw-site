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
              href={site.mapsDirectionsUrl}
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
            <div className="overflow-hidden rounded-2xl border border-navy-200 bg-navy-50 shadow-card">
              <iframe
                src={site.mapsEmbedUrl}
                title={`Kaart met de locatie van ${site.name} aan ${site.address.street} in ${site.address.city}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-[360px] w-full border-0 sm:h-[480px] lg:h-[560px]"
              />
            </div>
            <p className="mt-3 text-sm text-charcoal-700">
              De kaart komt van Google Maps en wordt pas geladen wanneer u er naartoe
              scrollt. Werkt de kaart niet in uw browser, gebruik dan de knop hierboven.
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
