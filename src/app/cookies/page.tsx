import { Metadata } from 'next';
import Link from 'next/link';
import { Cookie, Shield, Lock, FileText, AlertCircle, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookiebeleid | Breaz',
  description: 'Uitgebreide informatie over hoe Breaz cookies en vergelijkbare technologieën gebruikt op onze website. GDPR-conform cookiebeleid.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="tech-hero-bg" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Cookie className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">GDPR & ISO Compliant</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-orbitron">
              Cookiebeleid
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">
              Laatst bijgewerkt: 22 oktober 2025
            </p>
            <p className="text-base text-muted-foreground">
              Dit cookiebeleid is opgesteld conform de Algemene Verordening Gegevensbescherming (AVG/GDPR),
              de Belgische privacywet, en ePrivacy Richtlijn 2002/58/EG
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Compliance Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <div className="p-6 bg-card border border-border rounded-xl">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">GDPR Compliant</h3>
                <p className="text-sm text-muted-foreground">Volledige naleving van EU Verordening 2016/679</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <Lock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">ISO 27001</h3>
                <p className="text-sm text-muted-foreground">Informatiebeveiligingsstandaard conform ISO/IEC 27001</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <FileText className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">ePrivacy</h3>
                <p className="text-sm text-muted-foreground">Conform Richtlijn 2002/58/EG en 2009/136/EG</p>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {/* Section 1 */}
              <div className="mb-12 p-8 bg-card border border-border rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 font-orbitron flex items-center gap-3">
                  <Cookie className="w-6 h-6 text-primary" />
                  1. Wat zijn cookies?
                </h2>
                <p className="text-muted-foreground mb-4">
                  Cookies zijn kleine tekstbestanden die op uw apparaat (computer, tablet, smartphone) worden geplaatst 
                  wanneer u onze website bezoekt. Deze bestanden bevatten informatie die wordt gebruikt om uw 
                  browse-ervaring te verbeteren en onze diensten te optimaliseren.
                </p>
                <p className="text-muted-foreground">
                  Conform <strong>Artikel 5(3) van de ePrivacy Richtlijn</strong> en <strong>Artikel 6(1)(a) AVG</strong>, 
                  vragen wij uw uitdrukkelijke toestemming voordat we niet-noodzakelijke cookies plaatsen.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-12 p-8 bg-card border border-border rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 font-orbitron flex items-center gap-3">
                  <Settings className="w-6 h-6 text-primary" />
                  2. Welke cookies gebruiken wij?
                </h2>
                
                {/* Necessary Cookies */}
                <div className="mb-6 p-6 bg-background rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-green-500/10 text-green-500 text-xs font-semibold rounded-full">
                      NOODZAKELIJK
                    </span>
                    <h3 className="text-xl font-semibold">2.1 Noodzakelijke Cookies</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Deze cookies zijn essentieel voor de werking van de website en kunnen niet worden uitgeschakeld.
                    <br />
                    <strong>Rechtsgrond:</strong> Gerechtvaardigd belang (Artikel 6(1)(f) AVG)
                  </p>
                  <table className="w-full text-sm">
                    <thead className="border-b border-border">
                      <tr>
                        <th className="text-left py-2 px-3">Cookie Naam</th>
                        <th className="text-left py-2 px-3">Doel</th>
                        <th className="text-left py-2 px-3">Bewaartermijn</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="py-3 px-3 font-mono text-xs">cookieConsent</td>
                        <td className="py-3 px-3">Opslaan van uw cookievoorkeuren</td>
                        <td className="py-3 px-3">12 maanden</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono text-xs">session_id</td>
                        <td className="py-3 px-3">Sessie-identificatie en beveiliging</td>
                        <td className="py-3 px-3">Sessie</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono text-xs">csrf_token</td>
                        <td className="py-3 px-3">Bescherming tegen cross-site request forgery</td>
                        <td className="py-3 px-3">Sessie</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Functional Cookies */}
                <div className="mb-6 p-6 bg-background rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-semibold rounded-full">
                      FUNCTIONEEL
                    </span>
                    <h3 className="text-xl font-semibold">2.2 Functionele Cookies</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Deze cookies verbeteren de functionaliteit en personalisatie van de website.
                    <br />
                    <strong>Rechtsgrond:</strong> Toestemming (Artikel 6(1)(a) AVG)
                  </p>
                  <table className="w-full text-sm">
                    <thead className="border-b border-border">
                      <tr>
                        <th className="text-left py-2 px-3">Cookie Naam</th>
                        <th className="text-left py-2 px-3">Doel</th>
                        <th className="text-left py-2 px-3">Bewaartermijn</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="py-3 px-3 font-mono text-xs">theme_preference</td>
                        <td className="py-3 px-3">Opslaan van dark/light mode voorkeur</td>
                        <td className="py-3 px-3">12 maanden</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono text-xs">language_pref</td>
                        <td className="py-3 px-3">Taalvoorkeur onthouden</td>
                        <td className="py-3 px-3">12 maanden</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Analytical Cookies */}
                <div className="mb-6 p-6 bg-background rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-500 text-xs font-semibold rounded-full">
                      ANALYTISCH
                    </span>
                    <h3 className="text-xl font-semibold">2.3 Analytische Cookies</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Deze cookies helpen ons te begrijpen hoe bezoekers de website gebruiken via anonieme statistieken.
                    <br />
                    <strong>Rechtsgrond:</strong> Toestemming (Artikel 6(1)(a) AVG)
                  </p>
                  <table className="w-full text-sm">
                    <thead className="border-b border-border">
                      <tr>
                        <th className="text-left py-2 px-3">Cookie Naam</th>
                        <th className="text-left py-2 px-3">Provider</th>
                        <th className="text-left py-2 px-3">Doel</th>
                        <th className="text-left py-2 px-3">Bewaartermijn</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="py-3 px-3 font-mono text-xs">_ga</td>
                        <td className="py-3 px-3">Google Analytics</td>
                        <td className="py-3 px-3">Unieke gebruikers identificeren (geanonimiseerd)</td>
                        <td className="py-3 px-3">24 maanden</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono text-xs">_gid</td>
                        <td className="py-3 px-3">Google Analytics</td>
                        <td className="py-3 px-3">Unieke gebruikers identificeren (geanonimiseerd)</td>
                        <td className="py-3 px-3">24 uur</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3 font-mono text-xs">_gat</td>
                        <td className="py-3 px-3">Google Analytics</td>
                        <td className="py-3 px-3">Request rate beperken</td>
                        <td className="py-3 px-3">1 minuut</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Privacy-configuratie:</strong> Google Analytics is geconfigureerd met IP-anonimisering 
                      (anonymizeIP), data sharing is uitgeschakeld, en we gebruiken geen advertising features. 
                      Dit is conform de aanbevelingen van de Belgische Gegevensbeschermingsautoriteit (GBA).
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="p-6 bg-background rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full">
                      MARKETING
                    </span>
                    <h3 className="text-xl font-semibold">2.4 Marketing Cookies</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Deze cookies worden gebruikt om relevante advertenties en marketingcampagnes te tonen.
                    <br />
                    <strong>Rechtsgrond:</strong> Toestemming (Artikel 6(1)(a) AVG)
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Momenteel worden er geen marketing cookies gebruikt op deze website.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-12 p-8 bg-card border border-border rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 font-orbitron flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  3. Uw rechten onder de AVG/GDPR
                </h2>
                <p className="text-muted-foreground mb-6">
                  Als inwoner van België en de EU heeft u de volgende rechten met betrekking tot uw persoonsgegevens:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Recht op inzage (Art. 15 AVG):</strong> U kunt een overzicht opvragen van de persoonsgegevens die wij van u verwerken.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Recht op rectificatie (Art. 16 AVG):</strong> U kunt onjuiste of onvolledige gegevens laten corrigeren.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Recht op verwijdering / 'Recht om vergeten te worden' (Art. 17 AVG):</strong> U kunt verzoeken uw gegevens te verwijderen.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Recht op beperking (Art. 18 AVG):</strong> U kunt de verwerking van uw gegevens laten beperken.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Recht op dataportabiliteit (Art. 20 AVG):</strong> U kunt uw gegevens in een gestructureerd formaat ontvangen.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Recht van bezwaar (Art. 21 AVG):</strong> U kunt bezwaar maken tegen de verwerking van uw gegevens.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <div>
                      <strong>Recht om toestemming in te trekken (Art. 7(3) AVG):</strong> U kunt uw toestemming op elk moment intrekken via uw browserinstellingen of door contact met ons op te nemen.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-12 p-8 bg-card border border-border rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 font-orbitron flex items-center gap-3">
                  <Settings className="w-6 h-6 text-primary" />
                  4. Hoe beheer ik cookies?
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">4.1 Via onze Cookie Banner</h3>
                  <p className="text-muted-foreground mb-3">
                    U kunt uw cookievoorkeuren instellen via de cookie banner die verschijnt bij uw eerste bezoek. 
                    U kunt uw keuze op elk moment wijzigen door de cache van uw browser te wissen.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">4.2 Via uw browser</h3>
                  <p className="text-muted-foreground mb-4">
                    U kunt cookies ook beheren via uw browserinstellingen. Hieronder vindt u instructies voor de meest gebruikte browsers:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <div>
                        <strong>Google Chrome:</strong>{' '}
                        <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          support.google.com/chrome/answer/95647
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <div>
                        <strong>Mozilla Firefox:</strong>{' '}
                        <a href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen-websites-opgeslagen" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          support.mozilla.org
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <div>
                        <strong>Safari:</strong>{' '}
                        <a href="https://support.apple.com/nl-be/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          support.apple.com/safari
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <div>
                        <strong>Microsoft Edge:</strong>{' '}
                        <a href="https://support.microsoft.com/nl-nl/microsoft-edge/cookies-in-microsoft-edge-verwijderen-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          support.microsoft.com/edge
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      <strong>Let op:</strong> Het uitschakelen van alle cookies kan ertoe leiden dat bepaalde functies 
                      van de website niet meer correct werken.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-12 p-8 bg-card border border-border rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 font-orbitron flex items-center gap-3">
                  <Lock className="w-6 h-6 text-primary" />
                  5. Gegevensbeveiliging & ISO 27001
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wij nemen de beveiliging van uw gegevens zeer serieus en hebben passende technische en 
                  organisatorische maatregelen getroffen conform:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <strong>ISO/IEC 27001:2013</strong> - Informatiebeveiligingsmanagementsystemen
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <strong>ISO/IEC 27002:2013</strong> - Best practices voor informatiebeveiliging
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <strong>Artikel 32 AVG</strong> - Beveiliging van de verwerking
                  </li>
                </ul>
                <p className="text-muted-foreground">
                  Onze beveiligingsmaatregelen omvatten onder andere: SSL/TLS encryptie, regelmatige 
                  beveiligingsaudits, toegangscontroles, en continue monitoring van onze systemen.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-12 p-8 bg-card border border-border rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 font-orbitron flex items-center gap-3">
                  <FileText className="w-6 h-6 text-primary" />
                  6. Data Retention (Bewaartermijnen)
                </h2>
                <p className="text-muted-foreground mb-4">
                  Conform <strong>Artikel 5(1)(e) AVG</strong> (opslagbeperking) bewaren wij uw gegevens 
                  niet langer dan noodzakelijk:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <strong>Noodzakelijke cookies:</strong> Maximaal 12 maanden of sessieduur
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <strong>Functionele cookies:</strong> Maximaal 12 maanden
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <strong>Analytische cookies:</strong> Maximaal 24 maanden (geanonimiseerd)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <strong>Marketing cookies:</strong> N.v.t. (niet in gebruik)
                  </li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="mb-12 p-8 bg-card border border-border rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 font-orbitron">
                  7. Third-Party Services & Data Transfers
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wij maken gebruik van de volgende third-party services die cookies kunnen plaatsen:
                </p>
                
                <div className="mb-6 p-4 bg-background rounded-xl border border-border">
                  <h3 className="font-semibold mb-2">Google Analytics (Google Ireland Limited)</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Locatie:</strong> EU (Ierland) - Adequaat beschermingsniveau conform Artikel 45 AVG
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Doel:</strong> Website analyse en optimalisatie (geanonimiseerde gegevens)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Privacy Policy:</strong>{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      policies.google.com/privacy
                    </a>
                  </p>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>EU-US Data Privacy Framework:</strong> Voor eventuele gegevensoverdrachten naar de VS 
                    hanteren wij de Standard Contractual Clauses (SCC's) goedgekeurd door de Europese Commissie 
                    conform Artikel 46 AVG.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-12 p-8 bg-card border border-border rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 font-orbitron">
                  8. Updates van dit Cookiebeleid
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wij kunnen dit cookiebeleid van tijd tot tijd aanpassen om wijzigingen in onze praktijken 
                  of om andere operationele, juridische of regelgevende redenen te weerspiegelen.
                </p>
                <p className="text-muted-foreground">
                  De datum van de laatste wijziging staat bovenaan dit document vermeld. Wij raden u aan 
                  dit beleid regelmatig te raadplegen voor eventuele updates.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-12 p-8 bg-gradient-to-br from-primary/10 to-blue-500/10 border border-primary/30 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 font-orbitron">
                  9. Contact & Klachten
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Verwerkingsverantwoordelijke</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p><strong>Breaz</strong></p>
                    <p>België</p>
                    <p>E-mail: <a href="mailto:privacy@breaz-it.be" className="text-primary hover:underline">privacy@breaz-it.be</a></p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Vragen of verzoeken?</h3>
                  <p className="text-muted-foreground mb-3">
                    Voor vragen over dit cookiebeleid of om uw AVG-rechten uit te oefenen, 
                    kunt u contact met ons opnemen via:
                  </p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Contact opnemen
                  </Link>
                </div>

                <div className="p-4 bg-background/80 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-3">Klacht indienen</h3>
                  <p className="text-muted-foreground mb-3">
                    Indien u van mening bent dat wij uw persoonsgegevens niet op een correcte manier verwerken, 
                    heeft u het recht een klacht in te dienen bij de toezichthoudende autoriteit:
                  </p>
                  <div className="text-muted-foreground">
                    <p><strong>Gegevensbeschermingsautoriteit (GBA)</strong></p>
                    <p>Drukpersstraat 35, 1000 Brussel</p>
                    <p>Tel: +32 (0)2 274 48 00</p>
                    <p>
                      Website:{' '}
                      <a 
                        href="https://www.gegevensbeschermingsautoriteit.be" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        www.gegevensbeschermingsautoriteit.be
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 10 */}
              <div className="p-8 bg-card border border-border rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 font-orbitron">
                  10. Toepasselijk recht
                </h2>
                <p className="text-muted-foreground">
                  Dit cookiebeleid en alle daaruit voortvloeiende geschillen worden beheerst door het Belgisch recht 
                  en de Algemene Verordening Gegevensbescherming (EU) 2016/679. Voor eventuele geschillen zijn 
                  uitsluitend de rechtbanken van België bevoegd.
                </p>
              </div>

              {/* Related Links */}
              <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border">
                <h3 className="font-semibold mb-4">Gerelateerde documenten</h3>
                <div className="flex flex-wrap gap-3">
                  <Link 
                    href="/privacy" 
                    className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg transition-colors"
                  >
                    Privacybeleid
                  </Link>
                  <Link 
                    href="/voorwaarden" 
                    className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg transition-colors"
                  >
                    Algemene Voorwaarden
                  </Link>
                  <Link 
                    href="/contact" 
                    className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg transition-colors"
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Legal References */}
              <div className="mt-8 p-6 bg-card/50 rounded-xl border border-border">
                <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Juridische Referenties</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Verordening (EU) 2016/679 (Algemene Verordening Gegevensbescherming)</li>
                  <li>• Richtlijn 2002/58/EG (ePrivacy Richtlijn) zoals gewijzigd bij Richtlijn 2009/136/EG</li>
                  <li>• Belgische wet van 8 december 1992 tot bescherming van de persoonlijke levenssfeer</li>
                  <li>• ISO/IEC 27001:2013 - Information security management systems</li>
                  <li>• ISO/IEC 27002:2013 - Code of practice for information security controls</li>
                  <li>• ISO/IEC 29100:2011 - Privacy framework</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

