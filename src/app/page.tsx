import Image from 'next/image'
import Link from 'next/link'
import { CallButton, MailButton } from '@/components/actions'
import { CtaBand } from '@/components/cta-band'
import { HeroSchema } from '@/components/hero-schema'
import { IconArrow, IconMail, IconPhone, IconPin } from '@/components/icons'
import { illustrations } from '@/components/illustrations'
import { SectionHead } from '@/components/section'
import { coreMessage, services, site } from '@/data/site'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Installatietechniek in Gorredijk',
  description:
    'Gas, water, centrale verwarming, sanitair en dak- en zinkwerk. Van aanleg tot onderhoud, netjes uitgevoerd en duidelijk afgesproken. Erwin Blaauw Installatietechniek in Gorredijk.',
  path: '/',
})

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-txt">
            <p className="pill">
              <span className="dot" />
              Installatietechniek in Gorredijk en omstreken
            </p>
            <h1>
              De zekerheid van{' '}
              <em>
                kwaliteit
                <svg viewBox="0 0 300 26" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 22H258L298 2" pathLength="1" />
                </svg>
              </em>
            </h1>
            <p className="lead">
              Gas, water, centrale verwarming, sanitair en dak- en zinkwerk. Van aanleg tot
              onderhoud, netjes uitgevoerd en duidelijk afgesproken.
            </p>
            <div className="actions">
              <CallButton />
              <MailButton />
            </div>
          </div>
          <div className="hero-art">
            <HeroSchema />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead
            eyebrow="Diensten"
            title="Waarvoor u bij ons terecht kunt"
            intro="Van een gaskeuring tot een complete badkamer en van een nieuwe cv-ketel tot zinken dakgoten."
          />
          <div className="bento">
            {services.map((service) => {
              const Illustratie = illustrations[service.slug]
              return (
                <Link className="t" key={service.slug} href={`/diensten#${service.slug}`}>
                  <Illustratie />
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <span className="go" aria-hidden="true">
                    <IconArrow />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap about">
          <div className="collage">
            <span className="blob" />
            <Image
              className="c1"
              src="/fotos/erwin-blaauw-bij-bedrijfsbus.webp"
              alt="Erwin Blaauw bij zijn bedrijfsbus in Gorredijk"
              width={174}
              height={294}
              priority
            />
            <Image
              className="c2"
              src="/fotos/bedrijfsbus-met-ladders.webp"
              alt="De bedrijfsbus van Erwin Blaauw Installatietechniek met ladders op het dak"
              width={174}
              height={294}
            />
          </div>
          <div className="about-txt">
            <p className="eyebrow">Over ons</p>
            <h2>Vakwerk met korte lijnen</h2>
            <p>{coreMessage}</p>
            <p>
              In de praktijk betekent dat: u legt uw vraag voor, wij kijken wat er nodig is en
              leggen uit wat de opties zijn. Ook bij het uitzoeken van een product dat het beste
              bij uw budget past.
            </p>
            <Link className="more" href="/over-ons">
              Meer over Erwin Blaauw
              <IconArrow />
            </Link>
          </div>
        </div>

        <div className="wrap">
          <div className="band">
            <div className="band-lead">
              <p className="eyebrow">Werkgebied</p>
              <h3>Gevestigd in {site.address.city}</h3>
              <p>
                Het bedrijf zit aan de {site.address.street} in {site.address.city} en werkt in{' '}
                {site.address.city} en de omgeving daarvan. Twijfelt u of uw adres binnen het
                werkgebied valt? Bel dan even, dan hoort u het direct.
              </p>
              <Link className="more" href="/route">
                Bekijk de route
                <IconArrow />
              </Link>
            </div>
            <dl className="band-facts">
              <div>
                <dt>
                  <IconPin />
                  Adres
                </dt>
                <dd>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </dd>
              </div>
              <div>
                <dt>
                  <IconPhone />
                  Telefoon
                </dt>
                <dd>
                  <a href={site.phoneHref}>{site.phone}</a>
                  <br />
                  <a href={site.mobileHref}>{site.mobile}</a>
                </dd>
              </div>
              <div>
                <dt>
                  <IconMail />
                  E-mail
                </dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <CtaBand
        title="Een vraag over gas, water, cv of dakwerk?"
        text="Bel even, dan kijken we samen wat er nodig is. Liever eerst uw situatie beschrijven? Vraag dan advies aan."
      />
    </>
  )
}
