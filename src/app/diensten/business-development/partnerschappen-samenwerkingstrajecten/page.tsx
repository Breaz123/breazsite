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
  Users,
  CheckCircle2,
  ArrowRight,
  Handshake,
  Target,
  TrendingUp,
  Lightbulb,
  Shield,
  Zap,
  Globe,
  Award,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partnerschappen & Samenwerkingstrajecten | Breaz - Strategische samenwerking',
  description:
    'De juiste partners kunnen je groei versnellen. We helpen je om strategische samenwerkingen te identificeren en op te zetten.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten/business-development/partnerschappen-samenwerkingstrajecten',
    siteName: 'Breaz',
    title: 'Partnerschappen & Samenwerkingstrajecten | Breaz - Strategische samenwerking',
    description:
      'De juiste partners kunnen je groei versnellen. We helpen je om strategische samenwerkingen te identificeren en op te zetten.',
    images: [
      {
        url: '/og-breaz-partnerschappen.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz Partnerschappen & Samenwerkingstrajecten',
      },
    ],
  },
}

const partnershipTypes = [
  {
    icon: Handshake,
    title: 'Strategische Partnerschappen',
    description: 'Langetermijn samenwerkingen voor wederzijdse groei',
    details: [
      'Gedeelde visie en waarden',
      'Complementaire expertise',
      'Gezamenlijke marktontwikkeling',
      'Risico en investeringen delen',
    ],
  },
  {
    icon: Target,
    title: 'Distributie Partnerschappen',
    description: 'Samenwerking voor verkoop en distributie',
    details: [
      'Toegang tot nieuwe markten',
      'Uitbreiding verkoopkanaal',
      'Lokale expertise en netwerk',
      'Gedeelde verkoopdoelstellingen',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Innovatie Partnerschappen',
    description: 'Samenwerking voor productontwikkeling en innovatie',
    details: [
      'Gedeelde R&D-investeringen',
      'Technologische expertise',
      'Snellere time-to-market',
      'Innovatieve oplossingen',
    ],
  },
  {
    icon: Globe,
    title: 'Internationale Partnerschappen',
    description: 'Samenwerking voor internationale expansie',
    details: [
      'Lokale marktkennis',
      'Regelgeving en compliance',
      'Culturele inzichten',
      'Gedeelde operationele kosten',
    ],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Partnervisie',
    description: 'Bepalen welke partners nodig zijn voor je strategie',
    icon: Target,
  },
  {
    step: '02',
    title: 'Partner Identificatie',
    description: 'Zoeken en screenen van potentiële partners',
    icon: Search,
  },
  {
    step: '03',
    title: 'Partnership Ontwikkeling',
    description: 'Opzetten van samenwerking en overeenkomsten',
    icon: Handshake,
  },
  {
    step: '04',
    title: 'Implementatie',
    description: 'Uitvoering en monitoring van de samenwerking',
    icon: TrendingUp,
  },
]

const deliverables = [
  {
    icon: Target,
    title: 'Partnership Strategie',
    description: 'Strategie voor het identificeren en ontwikkelen van partnerschappen',
  },
  {
    icon: Users,
    title: 'Partner Profielen',
    description: 'Gedetailleerde profielen van potentiële partners',
  },
  {
    icon: Handshake,
    title: 'Partnership Overeenkomsten',
    description: 'Juridische en commerciële overeenkomsten',
  },
  {
    icon: TrendingUp,
    title: 'Implementatieplan',
    description: 'Concrete stappen voor het opzetten van samenwerking',
  },
]

const benefits = [
  'Toegang tot nieuwe markten en klanten',
  'Gedeelde expertise en resources',
  'Lagere operationele kosten',
  'Snellere groei en schaalvergroting',
  'Risico\'s spreiden en delen',
  'Innovatie en nieuwe mogelijkheden',
]

const successFactors = [
  {
    icon: Target,
    title: 'Duidelijke Doelstellingen',
    description: 'Gedeelde visie en meetbare doelen',
  },
  {
    icon: Shield,
    title: 'Vertrouwen & Transparantie',
    description: 'Open communicatie en wederzijds vertrouwen',
  },
  {
    icon: Zap,
    title: 'Complementaire Waarde',
    description: 'Elkaar aanvullen in expertise en resources',
  },
  {
    icon: Award,
    title: 'Win-Win Situatie',
    description: 'Wederzijdse voordelen en waardecreatie',
  },
]

export default function PartnerschappenSamenwerkingstrajectenPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                <span>Partnerschappen & Samenwerkingstrajecten</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Strategische{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  samenwerking
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                De juiste partners kunnen je groei versnellen. We helpen je om strategische samenwerkingen 
                te identificeren, op te zetten en te beheren voor wederzijdse waardecreatie en duurzame groei.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Plan een gesprek
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/aanpak">
                    Onze aanpak
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Tech Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Network Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          {/* Floating Network Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-lg animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-2000" />
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-indigo-500/10 rounded-full blur-lg animate-pulse delay-500" />
          
          {/* Connection Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute bottom-1/3 right-0 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
          <div className="absolute top-1/2 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Soorten partnerschappen
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Verschillende vormen van samenwerking voor verschillende doelen.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {partnershipTypes.map((type, index) => (
              <AnimatedSection key={type.title} delay={index * 0.1}>
                <div className="relative group">
                  {/* Glassmorphism Card */}
                  <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 shadow-xl">
                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 border border-white/10">
                        <type.icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                      <p className="text-slate-300 text-base mb-4">
                        {type.description}
                      </p>
                      <ul className="space-y-2">
                        {type.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-300">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Onze aanpak
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Een gestructureerde aanpak voor succesvolle partnerschappen.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mx-auto mb-4">
                      {step.step}
                    </div>
                    <step.icon className="h-8 w-8 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Succesfactoren
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Wat maakt een partnerschap succesvol?
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {successFactors.map((factor, index) => (
              <AnimatedSection key={factor.title} delay={index * 0.1}>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <factor.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{factor.title}</h3>
                    <p className="text-muted-foreground text-sm">{factor.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Wat je krijgt
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Concrete deliverables voor succesvolle partnerschappen.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {deliverables.map((deliverable, index) => (
              <AnimatedSection key={deliverable.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <deliverable.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{deliverable.title}</CardTitle>
                    <CardDescription className="text-base">
                      {deliverable.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Waarom partnerschappen?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Strategische samenwerking kan je groei versnellen en nieuwe mogelijkheden creëren.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-600 to-primary rounded-2xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500"></div>
                
                <Card className="relative overflow-hidden border-0 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-700"></div>
                  
                  <CardContent className="relative p-12 sm:p-16 text-center text-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-8">
                      <Users className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                      Klaar voor strategische samenwerking?
                    </h2>
                    <p className="text-lg sm:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
                      Laten we samen kijken naar de partnerschappen die je groei kunnen versnellen.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Button
                        asChild
                        size="lg"
                        className="text-base bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold px-8"
                      >
                        <Link href="/contact">
                          Plan een gesprek
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="text-base bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 font-semibold px-8"
                      >
                        <Link href="/diensten/business-development">
                          Bekijk alle diensten
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
