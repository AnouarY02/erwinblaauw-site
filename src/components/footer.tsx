import Link from 'next/link'
import { navigation, services, site } from '@/data/site'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-grid">
        <div>
          <Logo className="logo logo-foot" />
          <p>
            {site.slogan}. Gas, water, cv, sanitair, dak- en zinkwerk in {site.region}.
          </p>
        </div>

        <div>
          <h2>Diensten</h2>
          <ul>
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link href={`/diensten#${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Bedrijf</h2>
          <ul>
            {navigation
              .filter((item) => item.href !== '/')
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <ul>
            <li>{site.address.street}</li>
            <li>
              {site.address.postalCode} {site.address.city}
            </li>
            <li>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <a href={site.mobileHref}>{site.mobile}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap foot-base">
        <span>{site.name}</span>
        <span>{site.address.city}</span>
      </div>
    </footer>
  )
}
