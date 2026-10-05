import type { MetadataRoute } from 'next'
import { navigation, site } from '@/data/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return navigation.map((item) => ({
    url: `${site.url}${item.href === '/' ? '' : item.href}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: item.href === '/' ? 1 : 0.7,
  }))
}
