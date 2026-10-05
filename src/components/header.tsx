'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { navigation, site } from '@/data/site'
import { mailtoAlgemeen } from '@/lib/mailto'
import { IconMail, IconPhone } from './icons'
import { Logo } from './logo'

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Sluit het mobiele menu bij navigatie.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Voorkom scrollen van de pagina achter het open menu.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100/80 bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/75">
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 rounded-md py-1 sm:gap-3"
          aria-label={`${site.name} — naar de homepage`}
        >
          <Logo className="h-9 w-9 shrink-0 lg:h-10 lg:w-10" />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate font-display text-[0.95rem] font-bold tracking-tight text-navy-900 lg:text-lg">
              Erwin Blaauw
            </span>
            <span className="mt-1 hidden truncate text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-copper-700 sm:inline lg:text-[0.68rem]">
              Installatietechniek
            </span>
          </span>
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {navigation.map((item) => {
              const active =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`relative block rounded-lg px-3 py-2 text-[0.95rem] font-medium transition-colors ${
                      active
                        ? 'text-copper-700'
                        : 'text-navy-800 hover:bg-navy-50 hover:text-navy-900'
                    }`}
                  >
                    {item.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-copper-600"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/* Mailen staat naast bellen, op elke schermbreedte. */}
          <a
            href={mailtoAlgemeen}
            className="btn-mail hidden whitespace-nowrap !px-4 !py-2.5 !text-[0.95rem] md:inline-flex"
          >
            <IconMail className="h-5 w-5" />
            Mail ons
          </a>
          <a
            href={mailtoAlgemeen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors hover:bg-navy-800 md:hidden"
            aria-label={`Mail naar ${site.email}`}
          >
            <IconMail className="h-5 w-5" />
          </a>

          <a
            href={site.phoneHref}
            className="btn-primary hidden whitespace-nowrap !px-4 !py-2.5 !text-[0.95rem] sm:inline-flex"
          >
            <IconPhone className="h-5 w-5" />
            <span className="whitespace-nowrap">Bel {site.phone}</span>
          </a>
          <a
            href={site.phoneHref}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-copper-600 text-white transition-colors hover:bg-copper-700 sm:hidden"
            aria-label={`Bel direct ${site.phone}`}
          >
            <IconPhone className="h-5 w-5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobiel-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy-200 text-navy-900 lg:hidden"
          >
            <span className="sr-only">{open ? 'Menu sluiten' : 'Menu openen'}</span>
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="m6 6 12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobiel-menu"
          aria-label="Mobiel menu"
          className="border-t border-navy-100 bg-white lg:hidden"
        >
          <ul className="container-page flex flex-col py-2">
            {navigation.map((item) => {
              const active =
                item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`block border-b border-navy-50 py-3.5 text-base font-medium ${
                      active ? 'text-copper-700' : 'text-navy-900'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
            <li className="flex flex-col gap-2.5 pb-2 pt-4">
              <a href={site.phoneHref} className="btn-primary w-full">
                <IconPhone className="h-5 w-5" />
                Bel {site.phone}
              </a>
              <a href={mailtoAlgemeen} className="btn-mail w-full">
                <IconMail className="h-5 w-5" />
                Mail {site.email}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
