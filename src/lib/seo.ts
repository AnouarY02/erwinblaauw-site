import type { Metadata } from 'next'
import { site } from '@/data/site'

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  const url = `${site.url}${path === '/' ? '' : path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      locale: 'nl_NL',
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      url,
      // De afbeelding komt uit src/app/opengraph-image.tsx; Next vult die
      // automatisch aan, dus hier bewust geen vast pad opgeven.
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${site.name}`,
      description,
    },
  }
}
