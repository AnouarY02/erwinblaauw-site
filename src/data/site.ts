/**
 * Alle bedrijfsgegevens en teksten staan hier bij elkaar.
 * De inhoud komt letterlijk (hertaald/geherformuleerd) van www.erwinblaauw.nl.
 * Er zijn GEEN feiten toegevoegd: geen prijzen, certificeringen, jaartallen,
 * oprichtingsdatum, aantallen medewerkers of reviews.
 */

/**
 * Basis-URL voor canonicals, sitemap, robots, Open Graph en JSON-LD.
 *
 * Bewust NIET hardgecodeerd: bij een preview-deploy is het adres pas bij de
 * build bekend. Vercel zet VERCEL_PROJECT_PRODUCTION_URL automatisch; staat er
 * later een eigen domein, zet dan NEXT_PUBLIC_SITE_HOST (zonder protocol, bv.
 * "www.erwinblaauw.nl") als omgevingsvariabele in het Vercel-project.
 * Lokaal valt hij terug op de ontwikkelserver.
 */
const siteHost =
  process.env.NEXT_PUBLIC_SITE_HOST ||
  process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  ''
const siteUrl = siteHost ? `https://${siteHost}` : 'http://localhost:3000'

export const site = {
  name: 'Erwin Blaauw Installatietechniek',
  shortName: 'Erwin Blaauw',
  slogan: 'De zekerheid van kwaliteit',
  url: siteUrl,
  address: {
    street: 'Brouwerij 1',
    postalCode: '8401 PM',
    city: 'Gorredijk',
    country: 'NL',
  },
  phone: '0513-462537',
  phoneHref: 'tel:+31513462537',
  mobile: '06 52 31 76 82',
  mobileHref: 'tel:+31652317682',
  email: 'info@erwinblaauw.nl',
  // Werkgebied zoals af te leiden uit de vestigingsplaats. Geen harde claims
  // over gemeenten of reistijden: dat kan Erwin zelf aanvullen.
  region: 'Gorredijk en omstreken (Friesland)',
} as const

export const coreMessage =
  'Kwaliteit staat bij Erwin Blaauw Installatietechniek hoog in het vaandel. De kwaliteit van het eindproduct, maar ook de kwaliteit van alle processen: totstandkoming, beheer en onderhoud. En natuurlijk de kwaliteit van de relatie met de klant: samenwerken, meedenken en oplossen.'

export type Service = {
  slug: string
  label: string
  title: string
  summary: string
  body: string[]
  icon: 'flame' | 'drop' | 'radiator' | 'bath' | 'roof' | 'pipe' | 'shingle' | 'wind' | 'advice'
}

export const services: Service[] = [
  {
    slug: 'gasinstallaties',
    label: 'Gas',
    title: 'Gasinstallaties en service',
    summary:
      'De gasinstallatie is een belangrijk onderdeel van uw woning of bedrijfspand.',
    body: [
      'De gasinstallatie is een belangrijk onderdeel van uw woning of bedrijfspand. U moet deze regelmatig laten keuren en onderhouden, in het belang van uw veiligheid.',
    ],
    icon: 'flame',
  },
  {
    slug: 'waterleidinginstallaties',
    label: 'Water',
    title: 'Waterleidinginstallaties en service',
    summary: 'Schoon en helder drink- en badwater, in huis en in het bedrijfspand.',
    body: [
      'Erwin Blaauw Installatietechniek voorziet u graag van schoon en helder drink- en badwater.',
      'Daarom vernieuwen, herstellen en leggen wij drinkwaterinstallaties geheel of gedeeltelijk aan.',
    ],
    icon: 'drop',
  },
  {
    slug: 'centrale-verwarming',
    label: 'CV',
    title: 'Centrale verwarming en service',
    summary: 'Een breed scala aan nieuwe cv-ketels, met hoog rendement en warmtecomfort.',
    body: [
      'Voor de installatie kunt u bij Erwin Blaauw Installatietechniek kiezen uit een breed scala aan nieuwe cv-ketels.',
      'Ze combineren de laagste stookkosten met een hoog rendement en warmtecomfort. Vriendelijk voor het milieu en uw portemonnee.',
    ],
    icon: 'radiator',
  },
  {
    slug: 'badkamer-en-sanitair',
    label: 'Sanitair',
    title: 'Badkamerinstallatie en sanitair',
    summary: 'De badkamer neemt steeds meer een centrale plek in huis.',
    body: [
      'De badkamer neemt steeds meer een centrale plek in huis. Mensen maken vele malen gebruik van hun badkamer, niet alleen op functionele wijze maar ook voor de ontspanning.',
    ],
    icon: 'bath',
  },
  {
    slug: 'zink-en-dakwerk',
    label: 'Zink en dakwerk',
    title: 'Zink- en dakwerk',
    summary: 'Van alle gebouwen in Nederland heeft 80% zinken dakgoten.',
    body: [
      'Van alle gebouwen in Nederland heeft 80% zinken dakgoten. Dit omdat zink een duurzaam materiaal is dat 30 tot wel 50 jaar mee kan gaan.',
      'Zink is volledig recyclebaar, het geeft een esthetisch fraai uiterlijk en is in vele uitvoeringsvormen leverbaar.',
    ],
    icon: 'roof',
  },
  {
    slug: 'riolering',
    label: 'Riolering',
    title: 'Rioleringinstallaties',
    summary: 'Aanleg en herstel van rioleringinstallaties.',
    body: [
      'U kunt bij Erwin Blaauw Installatietechniek terecht voor rioleringinstallaties.',
    ],
    icon: 'pipe',
  },
  {
    slug: 'dakbedekking',
    label: 'Dakbedekking',
    title: 'Dakbedekking',
    summary: 'Dakbedekking voor woning en bedrijfspand.',
    body: ['U kunt bij Erwin Blaauw Installatietechniek terecht voor dakbedekking.'],
    icon: 'shingle',
  },
  {
    slug: 'ventilatie-advies',
    label: 'Ventilatie',
    title: 'Advies op het gebied van ventilatie',
    summary: 'Advies over ventilatie in uw woning of bedrijfspand.',
    body: [
      'Erwin Blaauw Installatietechniek geeft advies op het gebied van ventilatie.',
    ],
    icon: 'wind',
  },
  {
    slug: 'product-en-budget',
    label: 'Advies',
    title: 'Hulp bij het kiezen van een product',
    summary: 'Meedenken over een product dat het beste bij uw budget past.',
    body: [
      'Ook kunnen wij u van dienst zijn bij het uitzoeken van een product dat het beste bij uw budget past.',
    ],
    icon: 'advice',
  },
]

/** De drie USP's zijn een herformulering van de kernboodschap, geen nieuwe claims. */
export const usps = [
  {
    title: 'Kwaliteit van het eindproduct',
    text: 'Werk dat af is zoals het hoort: netjes uitgevoerd, veilig en gemaakt om jaren mee te gaan.',
    icon: 'badge' as const,
  },
  {
    title: 'Kwaliteit in het hele proces',
    text: 'Niet alleen de aanleg, ook de totstandkoming, het beheer en het onderhoud daarna.',
    icon: 'process' as const,
  },
  {
    title: 'Kwaliteit in de samenwerking',
    text: 'Samenwerken, meedenken en oplossen. U weet waar u aan toe bent.',
    icon: 'handshake' as const,
  },
]

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/diensten', label: 'Diensten' },
  { href: '/referenties', label: 'Referenties' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/contact', label: 'Contact' },
  { href: '/route', label: 'Route' },
]
