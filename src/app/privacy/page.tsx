import type { Metadata } from 'next'
import { FadeIn } from '@/components/fade-in'

export const metadata: Metadata = {
  title: 'Privacy Verklaring',
  description: 'Privacy verklaring van Breaz - hoe we omgaan met jouw gegevens en persoonsgegevens beschermen.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz-it.be/privacy',
    siteName: 'Breaz',
    title: 'Privacy Verklaring | Breaz',
    description: 'Privacy verklaring van Breaz - hoe we omgaan met jouw gegevens en persoonsgegevens beschermen.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Verklaring | Breaz',
    description: 'Privacy verklaring van Breaz - hoe we omgaan met jouw gegevens en persoonsgegevens beschermen.',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col pt-16">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-8">Privacy Verklaring</h1>
            <p className="text-sm text-muted-foreground mb-8">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </p>
          </FadeIn>

          <div className="prose prose-lg max-w-none space-y-8">
            <FadeIn delay={0.1}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introductie</h2>
                <p className="text-muted-foreground">
                  Breaz hecht veel waarde aan de bescherming van jouw
                  persoonsgegevens. In deze privacy verklaring leggen we uit
                  welke gegevens we verzamelen, waarom we dit doen en hoe we
                  deze beschermen.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.2}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  2. Welke gegevens verzamelen we?
                </h2>
                <p className="text-muted-foreground mb-4">
                  We verzamelen alleen gegevens die noodzakelijk zijn voor het
                  leveren van onze diensten:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Contactgegevens (naam, e-mail, telefoonnummer)</li>
                  <li>Bedrijfsgegevens (bedrijfsnaam, functie)</li>
                  <li>Communicatie (e-mails, berichten via contactformulier)</li>
                  <li>Website gebruik (cookies, analytische gegevens)</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.3}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  3. Waarvoor gebruiken we je gegevens?
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Het beantwoorden van je vragen en verzoeken</li>
                  <li>Het uitvoeren van onze diensten</li>
                  <li>Het versturen van relevante informatie en updates</li>
                  <li>Het verbeteren van onze website en diensten</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  4. Hoe beschermen we je gegevens?
                </h2>
                <p className="text-muted-foreground">
                  We nemen passende technische en organisatorische maatregelen
                  om jouw persoonsgegevens te beschermen tegen verlies,
                  misbruik, ongeautoriseerde toegang, openbaarmaking en
                  wijziging.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.5}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
                <p className="text-muted-foreground">
                  We gebruiken cookies om de functionaliteit van onze website te
                  verbeteren en om inzicht te krijgen in het gebruik van onze
                  website. Je kunt cookies uitschakelen via je
                  browserinstellingen.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.6}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Jouw rechten</h2>
                <p className="text-muted-foreground mb-4">
                  Je hebt het recht om:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Inzage te vragen in je persoonsgegevens</li>
                  <li>Je gegevens te laten wijzigen of verwijderen</li>
                  <li>Bezwaar te maken tegen verwerking van je gegevens</li>
                  <li>Je toestemming in te trekken</li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.7}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
                <p className="text-muted-foreground">
                  Voor vragen over deze privacy verklaring of het uitoefenen van
                  je rechten kun je contact met ons opnemen via{' '}
                  <a
                    href="mailto:info@breaz-it.be"
                    className="text-primary hover:underline"
                  >
                    info@breaz-it.be
                  </a>
                  .
                </p>
              </section>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}

