import Link from 'next/link'
import { IconArrow, IconPhone } from '@/components/icons'
import { navigation, site } from '@/data/site'

export const metadata = {
  title: 'Pagina niet gevonden',
  description: 'Deze pagina bestaat niet of is verplaatst.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="dark-section relative overflow-hidden bg-navy-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(900px_460px_at_20%_-10%,rgba(58,102,156,0.4),transparent_62%),radial-gradient(640px_360px_at_92%_6%,rgba(217,108,44,0.24),transparent_60%)]"
      />
      <div className="container-page relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper-300">
          Foutmelding 404
        </p>
        <p className="mt-6 text-7xl font-bold tracking-tight text-white/15 sm:text-8xl">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Deze pagina bestaat niet
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-200 sm:text-lg">
          Misschien is de pagina verplaatst of is er een typefout in het adres geslopen. Via het
          menu hieronder komt u er wel.
        </p>

        <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <Link href="/" className="btn-primary">
            Naar de homepage
            <IconArrow className="h-5 w-5" />
          </Link>
          <a href={site.phoneHref} className="btn-on-dark">
            <IconPhone className="h-5 w-5" />
            Bel {site.phone}
          </a>
        </div>

        <nav aria-label="Alle pagina's" className="mt-12 w-full max-w-2xl">
          <ul className="flex flex-wrap justify-center gap-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-navy-100 transition-colors hover:border-white/50 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
