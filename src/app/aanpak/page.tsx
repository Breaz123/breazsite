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
  Code,
  Briefcase,
  Megaphone,
  Handshake,
  Rocket,
  Brain,
  Shield,
  Globe,
  Layers,
  PieChart,
  Cpu,
  Database,
  Network,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Onze Aanpak - Marketing, Sales, Business Development & Web Development',
  description:
    'Ontdek hoe Breaz werkt: van échte klantkennis tot een bewezen proces dat leidt tot meetbare resultaten. Transparant, menselijk en resultaatgericht voor alle diensten.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz-it.be/aanpak',
    siteName: 'Breaz',
    title: 'Onze Aanpak | Breaz - Marketing, Sales, Business Development & Web Development',
    description:
      'Ontdek hoe Breaz werkt: van échte klantkennis tot een bewezen proces dat leidt tot meetbare resultaten. Transparant, menselijk en resultaatgericht.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onze Aanpak | Breaz',
    description:
      'Ontdek hoe Breaz werkt: van échte klantkennis tot een bewezen proces dat leidt tot meetbare resultaten. Transparant, menselijk en resultaatgericht.',
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
      'Analyse van huidige marketing, sales & tech stack',
      'Doelgroep & marktonderzoek',
      'Concurrentie analyse & business model evaluatie',
      'Technische audit van huidige systemen',
    ],
    deliverable: 'Comprehensive situatie analyse & kansen document',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Strategiseren',
    subtitle: 'Van inzicht naar richting',
    description:
      'Met alle inzichten ontwikkelen we een integrale strategie die bij jou past. Geen standaard sjablonen, maar maatwerk dat rekening houdt met je doelen, budget en capaciteit.',
    activities: [
      'Doelgroep & buyer persona ontwikkeling',
      'Merkpositionering & messaging strategie',
      'Marketing & sales funnel optimalisatie',
      'Business development roadmap',
      'Tech stack & digitale infrastructuur planning',
      'KPI definitie & meetplan',
    ],
    deliverable: 'Integrale groeistrategie document',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Uitvoeren',
    subtitle: 'Van plan naar praktijk',
    description:
      'We rollen de mouwen op en zetten de strategie om in actie. Of het nu gaat om content creatie, website development, sales coaching of business partnerships - we zorgen dat het gebeurt.',
    activities: [
      'Content creatie & storytelling campagnes',
      'Website & webapplicatie development',
      'Marketing automation & CRM setup',
      'Sales coaching & procesoptimalisatie',
      'Business development & partnerships',
      'Technical implementation & deployment',
    ],
    deliverable: 'Live campagnes, websites & business assets',
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
      'Website performance & SEO optimalisatie',
      'Sales funnel & conversie optimalisatie',
      'Strategie updates op basis van learnings',
    ],
    deliverable: 'Maandelijkse performance rapportages & optimalisaties',
  },
]

const servicePillars = [
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Marketing',
    subtitle: 'Bouw een merk dat raakt',
    description: 'Van strategie tot uitvoering: we creëren marketing die resoneert met je doelgroep en leidt tot echte verbinding.',
    principles: [
      {
        icon: Heart,
        title: 'Customer-centric storytelling',
        description: 'Elk verhaal begint bij je klant. We ontwikkelen messaging die hun pijnpunten begrijpt en oplossingen biedt.',
      },
      {
        icon: Target,
        title: 'Data-driven creativiteit',
        description: 'Creativiteit zonder data is gokken. We combineren inzicht met inspiratie voor campagnes die echt werken.',
      },
      {
        icon: Globe,
        title: 'Omnichannel consistentie',
        description: 'Van website tot social media: je merk ervaring is coherent en versterkt je boodschap op elk touchpoint.',
      },
    ],
  },
  {
    id: 'sales',
    icon: Handshake,
    title: 'Sales',
    subtitle: 'Verkoop begint bij luisteren',
    description: 'We maken sales menselijker en effectiever door te focussen op echte klantbehoeften en vertrouwen.',
    principles: [
      {
        icon: Users,
        title: 'Empathetic selling',
        description: 'Echte verkoop draait om begrip. We trainen je team om eerst te luisteren, dan pas te verkopen.',
      },
      {
        icon: BarChart,
        title: 'Proces optimalisatie',
        description: 'Van lead tot klant: we optimaliseren elke stap in je sales funnel voor maximale conversie.',
      },
      {
        icon: MessageSquare,
        title: 'Relationship building',
        description: 'Korte termijn sales vs. lange termijn relaties. We kiezen voor duurzaamheid boven snelle winst.',
      },
    ],
  },
  {
    id: 'business-development',
    icon: TrendingUp,
    title: 'Business Development',
    subtitle: 'Groei met richting en lef',
    description: 'Strategische groei vraagt visie, moed en uitvoering. We helpen je bouwen aan een duurzame toekomst.',
    principles: [
      {
        icon: Brain,
        title: 'Strategic thinking',
        description: 'Vooruit kijken en plannen maken. We ontwikkelen roadmaps die je helpen groeien op een gecontroleerde manier.',
      },
      {
        icon: Network,
        title: 'Partnership development',
        description: 'Alleen ga je sneller, samen kom je verder. We identificeren en ontwikkelen strategische samenwerkingen.',
      },
      {
        icon: Rocket,
        title: 'Innovation focus',
        description: 'Stilstand is achteruitgang. We helpen je innoveren en diversifiëren voor toekomstbestendige groei.',
      },
    ],
  },
  {
    id: 'webdevelopment',
    icon: Code,
    title: 'Web Development',
    subtitle: 'Websites die converteren',
    description: 'Technologie moet je business versterken, niet in de weg staan. We bouwen digitale oplossingen die werken.',
    principles: [
      {
        icon: Cpu,
        title: 'Performance first',
        description: 'Snelheid is cruciaal. We bouwen websites die niet alleen mooi zijn, maar ook razendsnel laden en perfect presteren.',
      },
      {
        icon: Shield,
        title: 'Security & reliability',
        description: 'Vertrouwen begint bij veiligheid. We implementeren best practices voor beveiliging en betrouwbaarheid.',
      },
      {
        icon: Layers,
        title: 'Scalable architecture',
        description: 'Vandaag een website, morgen een platform. We bouwen voor groei en flexibiliteit.',
      },
    ],
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
      'Échte klantkennis is geen theoretisch concept. We gebruiken elk inzicht om je messaging, content en campagnes effectiever te maken.',
  },
]

const differentiators = [
  {
    title: 'Integrale aanpak',
    description:
      'We combineren marketing, sales, business development en web development in één coherente strategie. Geen losse diensten, maar een samenhangend geheel.',
  },
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
  {
    title: 'Technologie als enabler',
    description:
      'We gebruiken de nieuwste technologieën niet om te imponeren, maar om je business doelen te bereiken. Eenvoud en effectiviteit staan voorop.',
  },
]

export default function AanpakPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Tech Background */}
        <div className="tech-hero-bg">
          <div className="tech-orb tech-orb-1"></div>
          <div className="tech-orb tech-orb-2"></div>
          <div className="tech-orb tech-orb-3"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Onze aanpak:{' '}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent shimmer-text">
                  integrale groei & technologie
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Een bewezen proces dat marketing, sales, business development en web development combineert in één coherente strategie. 
                <span className="text-foreground font-medium"> Transparant, praktisch en resultaatgericht.</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                  <span className="text-sm font-medium text-primary">Marketing</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                  <span className="text-sm font-medium text-blue-600">Sales</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
                  <span className="text-sm font-medium text-green-600">Business Development</span>
                </div>
                <div className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
                  <span className="text-sm font-medium text-purple-600">Web Development</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Vier pijlers, één{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  visie
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Elk van onze vier service pijlers heeft zijn eigen expertise en principes, 
                maar samen vormen ze een integrale aanpak voor duurzame groei.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {servicePillars.map((pillar, index) => (
              <AnimatedSection key={pillar.id} delay={index * 0.1}>
                <div className="card-3d group">
                  <div className="card-3d-inner rounded-2xl p-8 h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <pillar.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{pillar.title}</h3>
                        <p className="text-primary font-medium mb-2">{pillar.subtitle}</p>
                        <p className="text-muted-foreground">{pillar.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {pillar.principles.map((principle, pIndex) => (
                        <div key={principle.title} className="flex gap-3 group/item">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/20 transition-colors">
                            <principle.icon className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm mb-1">{principle.title}</h4>
                            <p className="text-xs text-muted-foreground">{principle.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-blue-600/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ons proces: van{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  inzicht tot impact
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Vier fases die samen zorgen voor duurzame groei. Elke fase
                bouwt voort op de vorige en leidt tot concrete resultaten.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.number} delay={index * 0.15}>
                <div className="card-3d group">
                  <div className="card-3d-inner rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                      {/* Number & Icon */}
                      <div className="lg:col-span-3 bg-gradient-to-br from-primary/10 to-blue-600/10 p-8 flex flex-col items-center justify-center relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                        <div className="relative z-10 text-center">
                          <div className="text-6xl font-bold text-primary/30 mb-4 group-hover:text-primary/40 transition-colors">
                            {step.number}
                          </div>
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon className="h-10 w-10 text-primary" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-9 p-8">
                        <div className="mb-6">
                          <h3 className="text-2xl lg:text-3xl font-bold mb-2">{step.title}</h3>
                          <p className="text-primary font-medium mb-4 text-lg">{step.subtitle}</p>
                          <p className="text-muted-foreground text-base leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <h4 className="font-semibold text-lg flex items-center">
                              <Sparkles className="h-5 w-5 text-primary mr-3" />
                              Wat we doen
                            </h4>
                            <ul className="space-y-3">
                              {step.activities.map((activity, aIndex) => (
                                <li
                                  key={activity}
                                  className="flex items-start text-sm group/item"
                                >
                                  <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                                  <span className="text-muted-foreground leading-relaxed">
                                    {activity}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-4">
                            <h4 className="font-semibold text-lg flex items-center">
                              <Zap className="h-5 w-5 text-primary mr-3" />
                              Deliverable
                            </h4>
                            <div className="bg-gradient-to-br from-primary/5 to-blue-600/5 rounded-xl p-6 border border-primary/10">
                              <p className="text-sm font-medium text-foreground">
                                {step.deliverable}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Intimacy */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.03),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Échte{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  klantkennis
                </span>{' '}
                als fundament
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Waarom starten we hier? Omdat elke strategie die niet resoneert met
                je doelgroep, geld verbrand op de verkeerde plek is. Échte
                klantkennis is geen nice-to-have, het is essentieel.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {customerIntimacyPrinciples.map((principle, index) => (
              <AnimatedSection key={principle.title} delay={index * 0.1}>
                <div className="card-3d group">
                  <div className="card-3d-inner rounded-2xl p-8 h-full">
                    <div className="flex gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <principle.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-blue-600/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.02),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Wat maakt onze aanpak{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  anders?
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Het proces is belangrijk, maar hoe we het uitvoeren maakt het
                verschil. Deze zes pijlers maken Breaz uniek.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {differentiators.map((diff, index) => (
              <AnimatedSection key={diff.title} delay={index * 0.1}>
                <div className="card-3d group h-full">
                  <div className="card-3d-inner rounded-2xl p-6 h-full flex flex-col">
                    <div className="flex gap-4 flex-1">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div className="flex flex-col flex-1">
                        <h3 className="text-lg font-bold mb-3">
                          {diff.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed flex-1">{diff.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Klaar om te{' '}
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  starten?
                </span>
              </h2>
              <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Laten we samen ontdekken hoe onze integrale aanpak jouw bedrijf kan
                helpen groeien. Plan een vrijblijvend kennismakingsgesprek.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="text-base font-medium"
                >
                  <Link href="/contact">
                    Plan een intakegesprek
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-base font-medium border-white/20 text-white hover:bg-white/10"
                >
                  <Link href="/diensten">
                    Ontdek onze diensten
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

