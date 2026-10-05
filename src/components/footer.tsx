import Link from 'next/link'
import { navigation, services, site } from '@/data/site'
import { mailtoAlgemeen } from '@/lib/mailto'
import { IconMail, IconPhone, IconPin } from './icons'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="dark-section relative overflow-hidden bg-navy-950 text-navy-100">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper-500/60 to-transparent"
      />
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="flex flex-col leading-none">
              <span className="font-display font-bold text-white">Erwin Blaauw</span>
              <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-copper-300">
                Installatietechniek
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200">
            {site.slogan}. Gas, water, cv, sanitair, dak- en zinkwerk in {site.region}.
          </p>

          {/* Bellen en mailen staan ook onderaan elke pagina. */}
          <div className="mt-7 flex flex-col gap-2.5 sm:max-w-xs">
            <a href={site.phoneHref} className="btn-primary !py-2.5 !text-[0.95rem]">
              <IconPhone className="h-5 w-5" />
              Bel {site.phone}
            </a>
            <a href={mailtoAlgemeen} className="btn-on-dark !py-2.5 !text-[0.95rem]">
              <IconMail className="h-5 w-5" />
              Mail uw vraag
            </a>
          </div>
        </div>

        <div>
          <h2 className="eyebrow text-copper-300">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3">
              <IconPin className="mt-0.5 h-5 w-5 shrink-0 text-navy-300" />
              <span className="text-navy-100">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </span>
            </li>
            <li className="flex gap-3">
              <IconPhone className="mt-0.5 h-5 w-5 shrink-0 text-navy-300" />
              <span className="flex flex-col gap-1">
                <a href={site.phoneHref} className="rounded text-navy-100 hover:text-white">
                  {site.phone}
                </a>
                <a href={site.mobileHref} className="rounded text-navy-100 hover:text-white">
                  {site.mobile}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <IconMail className="mt-0.5 h-5 w-5 shrink-0 text-navy-300" />
              <a
                href={mailtoAlgemeen}
                className="break-all rounded text-navy-100 hover:text-white"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Diensten in de voettekst">
          <h2 className="eyebrow text-copper-300">Diensten</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/diensten#${s.slug}`}
                  className="rounded text-navy-200 transition-colors hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Pagina's in de voettekst">
          <h2 className="eyebrow text-copper-300">Pagina&apos;s</h2>
          <ul className="mt-5 space-y-2.5 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded text-navy-200 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-navy-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Alle rechten voorbehouden.
          </p>
          <p>
            {site.address.street}, {site.address.postalCode} {site.address.city} &middot;{' '}
            {site.phone}
          </p>
        </div>
      </div>
    </footer>
  )
}
