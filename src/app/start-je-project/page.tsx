import { Metadata } from 'next'
import StartProjectClient from './start-project-client'

export const metadata: Metadata = {
  title: 'Start je project | Breaz - Gratis intakegesprek & Offerte op maat',
  description:
    'Klaar om je bedrijf te laten groeien? Start vandaag nog je marketing, sales, business development of webdevelopment project met Breaz. Vraag een vrijblijvend intakegesprek aan.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/start-je-project',
    siteName: 'Breaz',
    title: 'Start je project met Breaz - Gratis intakegesprek',
    description:
      'Vertel ons over je uitdaging en ontdek hoe we je kunnen helpen groeien met marketing, sales, business development en webdevelopment.',
    images: [
      {
        url: '/og-breaz-start.jpg',
        width: 1200,
        height: 630,
        alt: 'Start je project met Breaz',
      },
    ],
  },
}

export default function StartJeProjectPage() {
  return <StartProjectClient />
}
