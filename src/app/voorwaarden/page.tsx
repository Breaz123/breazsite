import type { Metadata } from 'next'
import { FadeIn } from '@/components/fade-in'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden',
  description: 'Algemene voorwaarden van Breaz - alle voorwaarden voor samenwerking en dienstverlening.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz-it.be/voorwaarden',
    siteName: 'Breaz',
    title: 'Algemene Voorwaarden | Breaz',
    description: 'Algemene voorwaarden van Breaz - alle voorwaarden voor samenwerking en dienstverlening.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Algemene Voorwaarden | Breaz',
    description: 'Algemene voorwaarden van Breaz - alle voorwaarden voor samenwerking en dienstverlening.',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function VoorwaardenPage() {
  return (
    <div className="flex flex-col pt-16">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-8">Algemene Voorwaarden</h1>
            <p className="text-sm text-muted-foreground mb-8">
              Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
            </p>
          </FadeIn>

          <div className="prose prose-lg max-w-none space-y-8">
            <FadeIn delay={0.1}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Definities</h2>
                <p className="text-muted-foreground">
                  In deze algemene voorwaarden wordt verstaan onder:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>
                    <strong>Breaz:</strong> de opdrachtnemer, gevestigd in
                    Nederland
                  </li>
                  <li>
                    <strong>Opdrachtgever:</strong> de wederpartij van Breaz
                  </li>
                  <li>
                    <strong>Diensten:</strong> alle door Breaz te leveren
                    diensten
                  </li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.2}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  2. Toepasselijkheid
                </h2>
                <p className="text-muted-foreground">
                  Deze algemene voorwaarden zijn van toepassing op alle
                  aanbiedingen, offertes en overeenkomsten tussen Breaz en
                  opdrachtgever. Afwijkingen zijn alleen geldig indien
                  schriftelijk overeengekomen.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.3}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  3. Aanbiedingen en Offertes
                </h2>
                <p className="text-muted-foreground">
                  Alle aanbiedingen en offertes zijn vrijblijvend, tenzij
                  anders aangegeven. Offertes zijn geldig gedurende 30 dagen na
                  datum van uitgifte, tenzij anders vermeld.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.4}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  4. Uitvoering van de Opdracht
                </h2>
                <p className="text-muted-foreground mb-4">
                  Breaz zal de opdracht naar beste inzicht en vermogen en
                  overeenkomstig de eisen van goed vakmanschap uitvoeren.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    Alle termijnen zijn indicatief en niet fataal, tenzij
                    uitdrukkelijk anders overeengekomen
                  </li>
                  <li>
                    Breaz heeft het recht derden in te schakelen voor de
                    uitvoering van de opdracht
                  </li>
                  <li>
                    Opdrachtgever verschaft tijdig alle voor uitvoering
                    benodigde informatie
                  </li>
                </ul>
              </section>
            </FadeIn>

            <FadeIn delay={0.5}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  5. Prijzen en Betaling
                </h2>
                <p className="text-muted-foreground mb-4">
                  Alle prijzen zijn exclusief BTW en andere heffingen, tenzij
                  anders vermeld. Betaling dient te geschieden binnen 14 dagen
                  na factuurdatum.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.6}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  6. Intellectueel Eigendom
                </h2>
                <p className="text-muted-foreground">
                  Alle intellectuele eigendomsrechten op de door Breaz
                  ontwikkelde materialen berusten bij Breaz. Opdrachtgever
                  verkrijgt uitsluitend een gebruiksrecht voor eigen
                  bedrijfsvoering.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.7}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  7. Aansprakelijkheid
                </h2>
                <p className="text-muted-foreground">
                  De aansprakelijkheid van Breaz is beperkt tot het bedrag dat
                  in het betreffende geval door de aansprakelijkheidsverzekering
                  wordt uitbetaald, vermeerderd met het eigen risico.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.8}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  8. Geheimhouding
                </h2>
                <p className="text-muted-foreground">
                  Beide partijen zijn verplicht tot geheimhouding van alle
                  vertrouwelijke informatie die zij in het kader van de
                  opdracht verkrijgen.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={0.9}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">
                  9. Toepasselijk Recht
                </h2>
                <p className="text-muted-foreground">
                  Op alle overeenkomsten is Nederlands recht van toepassing.
                  Geschillen worden voorgelegd aan de bevoegde rechter in
                  Nederland.
                </p>
              </section>
            </FadeIn>

            <FadeIn delay={1.0}>
              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
                <p className="text-muted-foreground">
                  Voor vragen over deze algemene voorwaarden kun je contact met
                  ons opnemen via{' '}
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

