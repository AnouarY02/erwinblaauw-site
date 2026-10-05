import { CtaBand } from '@/components/cta-band'
import { IconImage, IconPin } from '@/components/icons'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section'
import { JsonLd, breadcrumbJsonLd } from '@/lib/jsonld'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Referenties',
  description:
    'Projecten van Erwin Blaauw Installatietechniek bij bedrijven en particulieren. Binnenkort meer informatie.',
  path: '/referenties',
})

/**
 * Plaatsbare projectkaarten. Er staan bewust GEEN verzonnen projecten,
 * klanten of resultaten in: op de bestaande website staat alleen
 * "Binnenkort meer informatie". Erwin kan deze kaarten zelf vullen.
 */
const groups = [
  {
    id: 'bedrijven',
    title: 'Bedrijven',
    intro:
      'Werk in bedrijfspanden: gasinstallaties, waterleiding, verwarming, riolering en dakwerk.',
    slots: 3,
  },
  {
    id: 'particulieren',
    title: 'Particulieren',
    intro: 'Werk in en rond de woning: cv-ketels, badkamers, sanitair, dakgoten en zinkwerk.',
    slots: 3,
  },
]

function ProjectSlot({ index }: { index: number }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-card">
      <div className="relative flex aspect-[4/3] items-center justify-center border-b border-dashed border-navy-200 bg-gradient-to-br from-navy-50 via-white to-copper-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #1c3252 0 1px, transparent 1px 11px)',
          }}
        />
        <div className="relative text-center">
          <IconImage className="mx-auto h-10 w-10 text-navy-400" />
          <p className="mt-2 text-xs font-semibold text-navy-700">Projectfoto {index}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="inline-flex w-fit rounded-full bg-copper-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-copper-800">
          Nog in te vullen
        </span>
        <h3 className="mt-4 text-base font-bold text-navy-900">Titel van het project</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal-700">
          Hier komt in een paar regels wat er gedaan is: welke installatie, wat de vraag was en
          hoe het is opgelost.
        </p>
        <p className="mt-4 flex items-center gap-2 text-xs font-medium text-navy-600">
          <IconPin className="h-4 w-4" />
          Plaats en jaartal
        </p>
      </div>
    </div>
  )
}

export default function ReferentiesPage() {
  return (
    <>
      <PageHero
        crumb="Referenties"
        eyebrow="Referenties"
        title="Projecten bij bedrijven en particulieren"
        intro="Deze pagina wordt gevuld met echte projecten. De opzet staat klaar; de foto's en beschrijvingen volgen."
      />

      <section className="border-b border-copper-200 bg-copper-50">
        <div className="container-page py-6">
          <p className="text-sm font-medium text-copper-900">
            <strong className="font-bold">Binnenkort meer informatie.</strong> Hieronder staan
            plaatshouders voor projecten. Zodra er foto&apos;s en beschrijvingen zijn, komen die
            hier te staan.
          </p>
        </div>
      </section>

      {groups.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          className={`scroll-mt-24 py-20 ${gi % 2 === 1 ? 'bg-navy-50/70' : 'bg-white'}`}
        >
          <div className="container-page">
            <Reveal>
              <SectionHeading eyebrow={`Referenties — ${group.title}`} title={group.title} intro={group.intro} />
            </Reveal>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: group.slots }, (_, i) => (
                <Reveal as="li" key={i} delay={i * 80} className="h-full">
                  <ProjectSlot index={i + 1} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <CtaBand
        title="Benieuwd wat we voor u kunnen doen?"
        text="Bel of mail uw vraag. Dan vertellen we graag welk vergelijkbaar werk we eerder hebben gedaan."
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Referenties', path: '/referenties' },
        ])}
      />
    </>
  )
}
