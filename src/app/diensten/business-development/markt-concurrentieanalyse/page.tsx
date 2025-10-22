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
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Search,
  Target,
  TrendingUp,
  Users,
  Lightbulb,
  Shield,
  Eye,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Markt & Concurrentieanalyse | Breaz - Inzicht in kansen en bedreigingen',
  description:
    'Inzicht in je markt is de basis voor groei. We analyseren kansen, bedreigingen en trends zodat je weloverwogen beslissingen kunt nemen.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten/business-development/markt-concurrentieanalyse',
    siteName: 'Breaz',
    title: 'Markt & Concurrentieanalyse | Breaz - Inzicht in kansen en bedreigingen',
    description:
      'Inzicht in je markt is de basis voor groei. We analyseren kansen, bedreigingen en trends zodat je weloverwogen beslissingen kunt nemen.',
    images: [
      {
        url: '/og-breaz-markt-analyse.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz Markt & Concurrentieanalyse',
      },
    ],
  },
}

const analysisAreas = [
  {
    icon: Search,
    title: 'Marktonderzoek',
    description: 'Diepgaand onderzoek naar je doelmarkt en trends',
    details: [
      'Marktomvang en groeipotentieel',
      'Demografische en psychografische segmentatie',
      'Trends en ontwikkelingen',
      'Marktbarrières en drempels',
    ],
  },
  {
    icon: Target,
    title: 'Concurrentieanalyse',
    description: 'Inzicht in je concurrenten en hun strategieën',
    details: [
      'Directe en indirecte concurrenten',
      'Prijzen en positionering',
      'Sterke en zwakke punten',
      'Marktaandeel en groei',
    ],
  },
  {
    icon: Users,
    title: 'Klantonderzoek',
    description: 'Begrip van je doelgroep en hun behoeften',
    details: [
      'Klantpersona\'s en buyer journeys',
      'Behoeften en pijnpunten',
      'Aankoopgedrag en motivaties',
      'Tevredenheid en loyaliteit',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Kansen & Bedreigingen',
    description: 'Identificatie van kansen en risico\'s',
    details: [
      'SWOT-analyse',
      'Marktkansen identificeren',
      'Bedreigingen inschatten',
      'Strategische aanbevelingen',
    ],
  },
]

const deliverables = [
  {
    icon: BarChart3,
    title: 'Marktrapport',
    description: 'Uitgebreid rapport met marktinzichten en trends',
  },
  {
    icon: Target,
    title: 'Concurrentieanalyse',
    description: 'Gedetailleerde analyse van concurrenten en positionering',
  },
  {
    icon: Users,
    title: 'Klantprofielen',
    description: 'Gedetailleerde persona\'s en buyer journeys',
  },
  {
    icon: Lightbulb,
    title: 'Strategische Aanbevelingen',
    description: 'Concrete aanbevelingen voor groei en positionering',
  },
]

const benefits = [
  'Inzicht in marktkansen en bedreigingen',
  'Begrip van je concurrentiepositie',
  'Duidelijke focus op je doelgroep',
  'Data-gedreven besluitvorming',
  'Voorsprong op de concurrentie',
  'Risico\'s vroegtijdig identificeren',
]

const processSteps = [
  {
    step: '01',
    title: 'Onderzoeksopzet',
    description: 'We bepalen samen de scope en onderzoeksvragen',
    icon: Search,
  },
  {
    step: '02',
    title: 'Data Verzameling',
    description: 'Primair en secundair onderzoek uitvoeren',
    icon: Eye,
  },
  {
    step: '03',
    title: 'Analyse',
    description: 'Data analyseren en patronen identificeren',
    icon: BarChart3,
  },
  {
    step: '04',
    title: 'Rapportage',
    description: 'Bevindingen vertalen naar concrete aanbevelingen',
    icon: Target,
  },
]

export default function MarktConcurrentieanalysePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <BarChart3 className="h-4 w-4" />
                <span>Markt & Concurrentieanalyse</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Inzicht in kansen en{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  bedreigingen
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Inzicht in je markt is de basis voor groei. We analyseren kansen, bedreigingen en trends 
                zodat je weloverwogen beslissingen kunt nemen en een voorsprong kunt behalen op de concurrentie.
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

      {/* Analysis Areas Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Tech Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Data Visualization Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          {/* Floating Data Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-lg animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-2000" />
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-indigo-500/10 rounded-full blur-lg animate-pulse delay-500" />
          
          {/* Data Flow Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute bottom-1/3 right-0 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
          <div className="absolute top-1/2 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Wat we analyseren
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Een complete analyse van je markt, concurrentie en kansen.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {analysisAreas.map((area, index) => (
              <AnimatedSection key={area.title} delay={index * 0.1}>
                <div className="relative group">
                  {/* Glassmorphism Card */}
                  <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 shadow-xl">
                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 border border-white/10">
                        <area.icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                      <p className="text-slate-300 text-base mb-4">
                        {area.description}
                      </p>
                      <ul className="space-y-2">
                        {area.details.map((detail, detailIndex) => (
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
      <section className="py-20 relative overflow-hidden">
        {/* Tech Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
          {/* Hexagonal Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-lg animate-pulse" />
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-md animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-500" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Onze aanpak
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Een gestructureerde aanpak voor betrouwbare inzichten.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1}>
                <div className="relative group">
                  {/* Glassmorphism Card */}
                  <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 shadow-xl">
                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg">
                        {step.step}
                      </div>
                      <step.icon className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                      <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-slate-300 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Tech Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
          {/* Hexagonal Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          {/* Floating Elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-lg animate-pulse" />
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-md animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse delay-500" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Wat je krijgt
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Concrete deliverables die je direct kunt gebruiken voor strategische beslissingen.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {deliverables.map((deliverable, index) => (
              <AnimatedSection key={deliverable.title} delay={index * 0.1}>
                <div className="relative group h-full">
                  {/* Glassmorphism Card */}
                  <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-300 shadow-xl flex flex-col">
                    {/* Animated Border Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 border border-white/10 flex-shrink-0">
                        <deliverable.icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 flex-shrink-0">{deliverable.title}</h3>
                      <p className="text-slate-300 text-base flex-grow">
                        {deliverable.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Waarom marktanalyse?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Inzicht in je markt is de basis voor succesvolle strategische beslissingen.
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
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                      Klaar voor inzicht in je markt?
                    </h2>
                    <p className="text-lg sm:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
                      Laten we samen je markt en concurrentie analyseren voor betere strategische beslissingen.
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
