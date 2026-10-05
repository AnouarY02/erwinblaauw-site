import Link from 'next/link'
import { site } from '@/data/site'
import { IconArrow, IconPhone } from './icons'

export function CtaBand({
  title = 'Een vraag over gas, water, cv of dakwerk?',
  text = 'Bel even, dan kijken we samen wat er nodig is. Liever eerst uw situatie beschrijven? Vraag dan advies aan.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="dark-section bg-navy-900">
      <div className="container-page py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-navy-200 sm:text-lg">{text}</p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a href={site.phoneHref} className="btn-primary">
              <IconPhone className="h-5 w-5" />
              Bel direct {site.phone}
            </a>
            <Link href="/contact" className="btn-on-dark">
              Vraag advies aan
              <IconArrow className="h-5 w-5" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-navy-300">
            Of mobiel:{' '}
            <a href={site.mobileHref} className="rounded font-semibold text-white underline decoration-copper-400 decoration-2 underline-offset-4">
              {site.mobile}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
