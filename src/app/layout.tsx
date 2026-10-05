import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { site } from '@/data/site'
import { JsonLd, localBusinessJsonLd } from '@/lib/jsonld'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.slogan}`,
    template: `%s | ${site.name}`,
  },
  description:
    'Erwin Blaauw Installatietechniek in Gorredijk: gasinstallaties, waterleiding, centrale verwarming, badkamer en sanitair, zink- en dakwerk, riolering en ventilatie-advies.',
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    'installatietechniek Gorredijk',
    'loodgieter Gorredijk',
    'cv-ketel Gorredijk',
    'badkamer installatie Friesland',
    'zinkwerk dakgoot',
    'gasinstallatie keuren',
  ],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      // De PNG hierachter wordt gegenereerd door src/app/icon.tsx
      { url: '/icon', sizes: '64x64', type: 'image/png' },
    ],
    // De PNG hierachter wordt gegenereerd door src/app/apple-icon.tsx
    apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: site.name,
    url: site.url,
    title: `${site.name} | ${site.slogan}`,
    description:
      'Gas, water, cv, sanitair, dak- en zinkwerk in Gorredijk en omstreken. De zekerheid van kwaliteit.',
  },
}

export const viewport: Viewport = {
  themeColor: '#006ec7',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={inter.variable}>
      <body>
        <a className="skip" href="#inhoud">
          Direct naar de inhoud
        </a>
        <Header />
        <main id="inhoud">{children}</main>
        <Footer />
        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  )
}
