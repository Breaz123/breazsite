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
  Target,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Calendar,
  TrendingUp,
  Users,
  Lightbulb,
  BarChart3,
  Clock,
  Award,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Strategische Roadmap & Groeiplan | Breaz - Van visie naar actie',
  description:
    'Van visie naar actie. We helpen je om een helder groeiplan te maken dat aansluit bij je ambities en de realiteit van je markt.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten/business-development/strategische-roadmap-groeiplan',
    siteName: 'Breaz',
    title: 'Strategische Roadmap & Groeiplan | Breaz - Van visie naar actie',
    description:
      'Van visie naar actie. We helpen je om een helder groeiplan te maken dat aansluit bij je ambities en de realiteit van je markt.',
    images: [
      {
        url: '/og-breaz-strategische-roadmap.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz Strategische Roadmap & Groeiplan',
      },
    ],
  },
}

const phases = [
  {
    step: '01',
    title: 'Visie & Ambitie',
    description: 'We definiëren samen je langetermijnvisie en concrete ambities',
    icon: Target,
    details: [
      'Huidige situatie in kaart brengen',
      'Toekomstvisie formuleren',
      'SMART-doelstellingen opstellen',
      'Kernwaarden en missie verhelderen',
    ],
  },
  {
    step: '02',
    title: 'Marktanalyse',
    description: 'Inzicht in kansen, bedreigingen en concurrentiepositie',
    icon: BarChart3,
    details: [
      'Marktonderzoek en trends',
      'Concurrentieanalyse',
      'SWOT-analyse',
      'Kansen identificeren',
    ],
  },
  {
    step: '03',
    title: 'Strategie Ontwikkeling',
    description: 'Concrete strategieën en prioriteiten bepalen',
    icon: Lightbulb,
    details: [
      'Strategische opties evalueren',
      'Prioriteiten stellen',
      'Risico\'s inschatten',
      'KPI\'s definiëren',
    ],
  },
  {
    step: '04',
    title: 'Roadmap & Planning',
    description: 'Gedetailleerde uitvoeringsplan met tijdlijn',
    icon: MapPin,
    details: [
      'Actieplan opstellen',
      'Tijdlijn bepalen',
      'Resources toewijzen',
      'Mijlpalen definiëren',
    ],
  },
  {
    step: '05',
    title: 'Implementatie',
    description: 'Begeleiding bij de uitvoering en monitoring',
    icon: TrendingUp,
    details: [
      'Uitvoering begeleiden',
      'Voortgang monitoren',
      'Bijsturen waar nodig',
      'Resultaten meten',
    ],
  },
]

const deliverables = [
  {
    icon: Target,
    title: 'Strategisch Plan',
    description: 'Een compleet strategisch plan met visie, missie en doelstellingen',
  },
  {
    icon: MapPin,
    title: 'Roadmap',
    description: 'Gedetailleerde roadmap met tijdlijn en mijlpalen',
  },
  {
    icon: BarChart3,
    title: 'Marktanalyse',
    description: 'Uitgebreide analyse van markt en concurrentie',
  },
  {
    icon: Users,
    title: 'Implementatieplan',
    description: 'Concrete stappen voor uitvoering en monitoring',
  },
]

const benefits = [
  'Een heldere richting voor je bedrijf',
  'Concrete stappen van visie naar resultaat',
  'Inzicht in marktkansen en bedreigingen',
  'Realistische planning met meetbare doelen',
  'Flexibiliteit om bij te sturen',
  'Een sparringpartner voor strategische beslissingen',
]

export default function StrategischeRoadmapPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Target className="h-4 w-4" />
                <span>Strategische Roadmap & Groeiplan</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Van visie naar{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  concrete actie
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Een heldere strategie is de basis voor duurzame groei. We helpen je om van je visie 
                een concrete roadmap te maken met meetbare doelen, realistische planning en duidelijke 
                stappen naar succes.
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

      {/* Process Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Tech Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          {/* Floating Tech Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-lg animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-2000" />
          <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-indigo-500/10 rounded-full blur-lg animate-pulse delay-500" />
          
          {/* Circuit Lines */}
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          <div className="absolute bottom-1/3 right-0 w-px h-32 bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />
          <div className="absolute top-1/2 left-1/4 w-64 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                Onze 5-fasen aanpak
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Van visie tot uitvoering: een gestructureerde aanpak die resultaat oplevert.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-8">
              {phases.map((phase, index) => (
                <AnimatedSection key={phase.step} delay={index * 0.1}>
                  <div className="relative group">
                    {/* Glassmorphism Card */}
                    <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                      {/* Animated Border Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      
                      <div className="flex flex-col lg:flex-row relative z-10">
                        <div className="lg:w-1/3 p-8 flex flex-col justify-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                              {phase.step}
                            </div>
                            <phase.icon className="h-8 w-8 text-cyan-400" />
                          </div>
                          <h3 className="text-2xl font-bold mb-2 text-white">{phase.title}</h3>
                          <p className="text-slate-300 text-lg">{phase.description}</p>
                        </div>
                        <div className="lg:w-2/3 p-8 bg-white/5">
                          <ul className="space-y-3">
                            {phase.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-base text-slate-200">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
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
                Concrete deliverables die je direct kunt gebruiken voor je groei.
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
      <section className="py-20 relative overflow-hidden">
        {/* Tech Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          {/* Circuit Board Pattern */}
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3Cpath d='M20 20c0 11.046 8.954 20 20 20V20H20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          
          {/* Floating Tech Elements */}
          <div className="absolute top-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-purple-500/10 rounded-full blur-lg animate-pulse delay-2000" />
          <div className="absolute bottom-40 right-1/4 w-20 h-20 bg-indigo-500/10 rounded-full blur-md animate-pulse delay-500" />
          
          {/* Tech Lines */}
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
          <div className="absolute bottom-1/4 right-0 w-px h-40 bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />
          <div className="absolute top-2/3 left-1/4 w-80 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
                  Waarom een strategische roadmap?
                </h2>
                <p className="text-xl text-slate-300">
                  Een heldere strategie is de basis voor duurzame groei en succes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="relative group">
                {/* Glassmorphism Card */}
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
                  {/* Animated Border Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                  
                  <div className="relative z-10">
                    <ul className="space-y-4">
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-lg text-slate-200">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
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
                      <Target className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                      Klaar voor een heldere strategie?
                    </h2>
                    <p className="text-lg sm:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
                      Laten we samen je visie omzetten in een concrete roadmap voor duurzame groei.
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
