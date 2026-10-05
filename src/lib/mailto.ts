import { site } from '@/data/site'

/**
 * Bouwt een mailto-link met een vooringevuld onderwerp en een korte aanzet voor
 * de body. Het mailadres komt altijd uit src/data/site.ts; nergens anders staat
 * een adres hardgecodeerd.
 */
export function mailto(subject: string, body?: string) {
  const params = new URLSearchParams({ subject })
  if (body) params.set('body', body)
  // URLSearchParams codeert spaties als '+', wat in een mailto-body als plusteken
  // in beeld komt. %20 is hier de juiste codering.
  return `mailto:${site.email}?${params.toString().replace(/\+/g, '%20')}`
}

const groet =
  'Met vriendelijke groet,\n\n[uw naam]\n[uw adres]\n[uw telefoonnummer]'

/** Algemene aanvraag, voor header, footer en de contactpagina. */
export const mailtoAlgemeen = mailto(
  'Aanvraag via de website',
  `Goedendag,\n\nIk heb een vraag over:\n\n\n${groet}`,
)

/** Aanvraag voor een specifieke dienst. */
export function mailtoDienst(dienst: string) {
  return mailto(
    `Aanvraag: ${dienst}`,
    `Goedendag,\n\nIk heb een vraag over ${dienst.toLowerCase()}.\n\nMijn situatie:\n\n\n${groet}`,
  )
}

/** Offerte- of adviesaanvraag vanuit de hero en de CTA-band. */
export const mailtoAdvies = mailto(
  'Vrijblijvend advies aanvragen',
  `Goedendag,\n\nIk zou graag advies willen over:\n\nAdres van de werkzaamheden:\n\n\n${groet}`,
)
