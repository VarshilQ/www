import { person } from '@/lib/config'
import { metaInfo } from '@/lib/meta'
import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: metaInfo.home.title,
    short_name: person.nickName,
    description: metaInfo.home.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}