import { services, site } from '@/data/site'

/**
 * JSON-LD LocalBusiness/Plumber met alleen gegevens die op de bestaande
 * website staan. Geen openingstijden, prijzen of reviews: die zijn niet bekend.
 */
export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Plumber', 'LocalBusiness', 'HVACBusiness'],
    '@id': `${site.url}/#organisatie`,
    name: site.name,
    slogan: site.slogan,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    areaServed: { '@type': 'Place', name: site.region },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'klantenservice',
        telephone: site.phone,
        email: site.email,
        availableLanguage: ['nl'],
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Diensten',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.summary },
      })),
    },
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path === '/' ? '' : item.path}`,
    })),
  }
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Statische, door ons opgebouwde data — geen gebruikersinvoer.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
