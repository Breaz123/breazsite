import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AnimatedSection } from '@/components/animated-section'
import { FadeIn } from '@/components/fade-in'
import {
  Heart,
  Users,
  Lightbulb,
  Target,
  TrendingUp,
  BarChart,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Search,
  Sparkles,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Onze Aanpak',
  description:
    'Ontdek hoe Breaz werkt: van customer intimacy tot een bewezen proces dat leidt tot meetbare resultaten. Transparant, menselijk en resultaatgericht.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz-it.be/aanpak',
    siteName: 'Breaz',
    title: 'Onze Aanpak | Breaz',
    description:
      'Ontdek hoe Breaz werkt: van customer intimacy tot een bewezen proces dat leidt tot meetbare resultaten. Transparant, menselijk en resultaatgericht.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onze Aanpak | Breaz',
    description:
      'Ontdek hoe Breaz werkt: van customer intimacy tot een bewezen proces dat leidt tot meetbare resultaten. Transparant, menselijk en resultaatgericht.',
  },
}

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Ontdekken',
    subtitle: 'We beginnen bij het begin',
    description:
      'We duiken diep in jouw wereld. Wat zijn je ambities? Wat houdt je tegen? Wie zijn je klanten écht? Door te luisteren en vragen te stellen, krijgen we een helder beeld van je situatie en kansen.',
    activities: [
      'Intake gesprekken met key stakeholders',
      'Analyse van huidige marketing & sales',
      'Doelgroep & marktonderzoek',
      'Concurrentie analyse',
    ],
    deliverable: 'Situatie analyse & kansen document',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategiseren',
    subtitle: 'Van inzicht naar richting',
    description:
      'Met alle inzichten ontwikkelen we een strategie die bij jou past. Geen standaard sjablonen, maar maatwerk dat rekening houdt met je doelen, budget en capaciteit.',
    activities: [
      'Doelgroep & buyer persona ontwikkeling',
      'Merkpositionering & messaging',
      'Channel strategie & tactieken',
      'KPI definitie & meetplan',
    ],
    deliverable: 'Marketing & sales strategie document',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Uitvoeren',
    subtitle: 'Van plan naar praktijk',
    description:
      'We rollen de mouwen op en zetten de strategie om in actie. Of het nu gaat om content creatie, campagne uitvoering of sales enablement - we zorgen dat het gebeurt.',
    activities: [
      'Content creatie & distributie',
      'Campagne ontwikkeling & lancering',
      'Marketing automation setup',
      'Sales collateral ontwikkeling',
    ],
    deliverable: 'Live campagnes & marketing assets',
  },
  {
    number: '04',
    icon: BarChart,
    title: 'Optimaliseren',
    subtitle: 'Continue verbetering',
    description:
      'We meten, analyseren en optimaliseren continu. Wat werkt? Wat niet? Door data en feedback te combineren, maken we elke maand beter dan de vorige.',
    activities: [
      'Performance monitoring & rapportage',
      'A/B testing & experimenten',
      'Customer feedback verzamelen',
      'Strategie updates op basis van learnings',
    ],
    deliverable: 'Maandelijkse performance rapportages',
  },
]

const customerIntimacyPrinciples = [
  {
    icon: Heart,
    title: 'We beginnen bij de klant, niet bij je product',
    description:
      'Veel bedrijven starten met "wat doen we" en "waarom zijn we zo goed". Wij beginnen bij "wie is de klant", "wat houdt hem wakker" en "hoe kunnen we helpen".',
  },
  {
    icon: Users,
    title: 'We gaan verder dan demografie',
    description:
      'Leeftijd en functietitel zijn niet genoeg. We onderzoeken motivaties, frustraties, ambities en beslisprocessen. Pas dan kun je echt resoneren.',
  },
  {
    icon: MessageSquare,
    title: 'We praten met echte mensen',
    description:
      'Customer interviews, sales gesprekken bijwonen, feedback sessies - we investeren tijd in het horen van echte stemmen, niet alleen data points.',
  },
  {
    icon: Target,
    title: 'We vertalen inzichten naar actie',
    description:
      'Customer intimacy is geen theoretisch concept. We gebruiken elk inzicht om je messaging, content en campagnes effectiever te maken.',
  },
]

const differentiators = [
  {
    title: 'Geen black box',
    description:
      'Je weet altijd wat we doen, waarom we het doen en wat de resultaten zijn. Transparantie is de basis van vertrouwen.',
  },
  {
    title: 'Sparringpartner, geen uitvoerder',
    description:
      'We denken proactief mee over je business, challengen waar nodig en brengen nieuwe ideeën aan. Je krijgt onze expertise, niet alleen onze uren.',
  },
  {
    title: 'Flexibel proces',
    description:
      'Elke klant is uniek. Ons proces is een framework, geen keurslijf. We passen aan op basis van jouw situatie en behoeften.',
  },
  {
    title: 'Focus op impact',
    description:
      'We meten succes niet in deliverables, maar in impact. Meer leads, betere conversie, hogere klantwaarde - daar doen we het voor.',
  },
]

export default function AanpakPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Onze aanpak:{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  customer intimacy & proces
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-muted-foreground mb-8">
                Een bewezen proces dat begint bij het écht begrijpen van je
                klanten en eindigt bij meetbare groei. Transparant, praktisch
                en resultaatgericht.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Customer Intimacy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Customer Intimacy als fundament
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Waarom starten we hier? Omdat marketing die niet resoneert met
                je doelgroep, geld verbrand op de verkeerde plek is. Customer
                intimacy is geen nice-to-have, het is essentieel.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {customerIntimacyPrinciples.map((principle, index) => (
              <AnimatedSection key={principle.title} delay={index * 0.1}>
                <Card className="h-full border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <principle.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ons proces: van inzicht tot impact
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Vier fases die samen zorgen voor duurzame groei. Elke fase
                bouwt voort op de vorige en leidt tot concrete resultaten.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-12 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.1}>
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Number & Icon */}
                    <div className="lg:col-span-2 bg-primary/5 p-8 flex flex-col items-center justify-center">
                      <div className="text-5xl font-bold text-primary/20 mb-4">
                        {step.number}
                      </div>
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-10 p-8">
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-primary mb-4">{step.subtitle}</p>
                      <p className="text-muted-foreground mb-6">
                        {step.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Sparkles className="h-4 w-4 text-primary mr-2" />
                            Wat we doen
                          </h4>
                          <ul className="space-y-2">
                            {step.activities.map((activity) => (
                              <li
                                key={activity}
                                className="flex items-start text-sm"
                              >
                                <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">
                                  {activity}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3 flex items-center">
                            <Zap className="h-4 w-4 text-primary mr-2" />
                            Deliverable
                          </h4>
                          <div className="bg-primary/5 rounded-lg p-4">
                            <p className="text-sm font-medium">
                              {step.deliverable}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Wat maakt onze aanpak anders?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Het proces is belangrijk, maar hoe we het uitvoeren maakt het
                verschil.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((diff, index) => (
              <AnimatedSection key={diff.title} delay={index * 0.1}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-muted-foreground">{diff.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Klaar om te starten?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Laten we samen ontdekken hoe onze aanpak jouw bedrijf kan
                helpen groeien. Plan een vrijblijvend kennismakingsgesprek.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base"
              >
                <Link href="/contact">
                  Plan een intakegesprek
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

