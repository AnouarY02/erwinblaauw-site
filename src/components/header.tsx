'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { navigation, site } from '@/data/site'
import { CallButton, MailButton } from './actions'
import { Logo } from './logo'

export function Header() {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement | null>(null)

  /**
   * Op smalle schermen is het menu een horizontaal schuifbare rij (zo staat
   * het in het ontwerp: geen hamburgerknop meer). Schuif de huidige pagina
   * dan in beeld, anders staat de bezoeker op /route naar "Home" te kijken.
   */
  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const current = nav.querySelector<HTMLElement>('[aria-current="page"]')
    if (!current || nav.scrollWidth <= nav.clientWidth) return
    nav.scrollLeft = current.offsetLeft - nav.clientWidth / 2 + current.offsetWidth / 2
  }, [pathname])

  return (
    <header className="top">
      <div className="wrap top-in">
        <Link className="brand" href="/" aria-label={`${site.name}, naar de homepage`}>
          <Logo />
        </Link>

        <nav className="nav" id="hoofdmenu" aria-label="Hoofdmenu" ref={navRef}>
          {navigation.map((item) => {
            const active =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)
            return (
              <Link key={item.href} href={item.href} aria-current={active ? 'page' : undefined}>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="top-act">
          <CallButton size="btn-sm" />
          <MailButton size="btn-sm" />
        </div>
      </div>
    </header>
  )
}
