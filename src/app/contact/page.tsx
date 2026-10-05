import Link from 'next/link'
import { ContactForm } from '@/components/contact-form'
import { IconArrow, IconMail, IconPhone } from '@/components/icons'
import { PageHero } from '@/components/page-hero'
import { site } from '@/data/site'
import { JsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Contact',
  description: `Neem contact op met ${site.name} in ${site.address.city}: bel ${site.phone}, mobiel ${site.mobile} of mail ${site.email}.`,
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Neem contact op"
        intro="Bellen is het snelst. Liever schrijven? Laat hieronder een kort bericht achter, dan nemen we contact met u op."
      />

      <section className="sec sec-top">
        <div className="wrap">
          <div className="ways">
            <a className="way way-main" href={site.phoneHref}>
              <IconPhone className="way-ic" />
              <span>Bel ons</span>
              <strong>{site.phone}</strong>
            </a>
            <a className="way" href={site.mobileHref}>
              <IconPhone className="way-ic" />
              <span>Mobiel</span>
              <strong>{site.mobile}</strong>
            </a>
            <a className="way" href={`mailto:${site.email}`}>
              <IconMail className="way-ic" />
              <span>Mail ons</span>
              <strong>{site.email}</strong>
            </a>
          </div>

          <div className="contact contact-simple">
            <ContactForm />

            <aside className="info">
              <h2>Langskomen</h2>
              <p>
                {site.name}
                <br />
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </p>
              <Link className="more" href="/route">
                Bekijk de route
                <IconArrow />
              </Link>
            </aside>
          </div>
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
