/**
 * Beeld bij de diensten en de sfeerstrook.
 *
 * Alle foto's hieronder zijn licentievrije Unsplash-beelden (zie CREDITS.md in de
 * hoofdmap). Het is nadrukkelijk SFEERBEELD: geen van deze foto's toont werk van
 * Erwin Blaauw Installatietechniek. De alt-teksten beschrijven daarom wat er te
 * zien is en claimen nergens dat het om een eigen project gaat.
 *
 * De enige échte bedrijfsfoto's (Erwin bij de bedrijfsbus) staan los in
 * public/fotos en worden alleen op de homepage en Over ons gebruikt.
 */

export type Photo = {
  src: string
  alt: string
  /** Natuurlijke verhouding, zodat next/image nooit hoeft te gissen. */
  width: number
  height: number
}

export const heroPhoto: Photo = {
  src: '/fotos/hero-moderne-badkamer.webp',
  alt: 'Moderne badkamer met een vrijstaand bad, een inloopdouche en veel daglicht',
  width: 2000,
  height: 1125,
}

/** Beeld per dienst, op slug uit src/data/site.ts. */
export const servicePhotos: Record<string, Photo> = {
  gasinstallaties: {
    src: '/fotos/gasmeter-installatie.webp',
    alt: 'Gasmeter met drukregelaar en koperen leiding tegen een witte muur',
    width: 1600,
    height: 1200,
  },
  waterleidinginstallaties: {
    src: '/fotos/kraan-wastafel.webp',
    alt: 'Chromen wastafelkraan met een vallende waterdruppel boven een witte wastafel',
    width: 1600,
    height: 1200,
  },
  'centrale-verwarming': {
    src: '/fotos/cv-ketel-onderhoud.webp',
    alt: 'Waterpomptang aan de aansluiting van een boiler tijdens onderhoud',
    width: 1600,
    height: 1200,
  },
  'badkamer-en-sanitair': {
    src: '/fotos/badkamer-sanitair.webp',
    alt: 'Lichte badkamer met een vrijstaand bad, een waskom en een groot raam',
    width: 1600,
    height: 1200,
  },
  'zink-en-dakwerk': {
    src: '/fotos/dakgoot-zinkwerk.webp',
    alt: 'Dakgoot met hemelwaterafvoer langs een gevel tegen een blauwe lucht',
    width: 1600,
    height: 1200,
  },
  riolering: {
    src: '/fotos/leidingwerk-fittingen.webp',
    alt: 'Metalen leidingdelen en koppelstukken naast elkaar',
    width: 1600,
    height: 1200,
  },
  dakbedekking: {
    src: '/fotos/dakpannen-dakbedekking.webp',
    alt: 'Rijen donkere dakpannen op een hellend dak',
    width: 1600,
    height: 1200,
  },
  'ventilatie-advies': {
    src: '/fotos/ventilatiekanalen.webp',
    alt: 'Ronde ventilatiekanalen die onder een plafond doorlopen',
    width: 1600,
    height: 1200,
  },
  'product-en-budget': {
    src: '/fotos/gereedschap-installateur.webp',
    alt: 'Tangen en ander handgereedschap in een gereedschapsrek',
    width: 1600,
    height: 1200,
  },
}

/** Korte sfeerstrook op de homepage. Staand en liggend beeld door elkaar. */
export const sfeerPhotos: Photo[] = [
  {
    src: '/fotos/douche-marmer.webp',
    alt: 'Inloopdouche met een glazen wand in een lichte, betegelde badkamer',
    width: 900,
    height: 1200,
  },
  {
    src: '/fotos/radiator-onder-raam.webp',
    alt: 'Witte paneelradiator onder een raam in een rustige kamer',
    width: 1600,
    height: 1200,
  },
  {
    src: '/fotos/gasvlam-brander.webp',
    alt: 'Blauwe gasvlam van een brander, van dichtbij gefotografeerd',
    width: 900,
    height: 1200,
  },
  {
    src: '/fotos/dakgoot-zinkwerk.webp',
    alt: 'Zinken dakgoot en hemelwaterafvoer op de hoek van een gevel',
    width: 1600,
    height: 1200,
  },
]
