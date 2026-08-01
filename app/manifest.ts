import type { MetadataRoute } from 'next'
import { SITE_NAME } from '@/lib/constants'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: 'Ljiljanina Chogan',
    description: 'Originalna Chogan parfimerija i kozmetika, online prodavnica za Srbiju.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    lang: 'sr',
    icons: [
      {
        src: '/logo.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  }
}
