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
  Settings,
  Target,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Database,
  AlertTriangle,
  Lightbulb,
  Zap,
  Workflow,
  BarChart3,
  Clock,
  FileText,
  Shield,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'CRM & Procesondersteuning | Breaz - Verkoop begint bij luisteren',
  description:
    'De juiste tools en processen maken het verschil. We helpen je om je CRM optimaal in te zetten en je salesproces te stroomlijnen.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten/sales/crm-procesondersteuning',
    siteName: 'Breaz',
    title: 'CRM & Procesondersteuning | Breaz - Verkoop begint bij luisteren',
    description:
      'De juiste tools en processen maken het verschil. We helpen je om je CRM optimaal in te zetten en je salesproces te stroomlijnen.',
    images: [
      {
        url: '/og-breaz-crm.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz CRM & Procesondersteuning',
      },
    ],
  },
}

// PASO Framework: Problem - Agitation - Solution - Outcome

const problem = {
  title: 'Het probleem',
  subtitle: 'Waarom werken CRM-systemen niet optimaal?',
  description:
    'De meeste bedrijven hebben een CRM-systeem, maar gebruiken het niet optimaal. Teams worstelen met complexe interfaces, dubbele data-entry en processen die niet aansluiten bij hun dagelijkse werk. Het resultaat? Gemiste kansen en gefrustreerde medewerkers.',
  painPoints: [
    'CRM-systemen die te complex zijn voor dagelijks gebruik',
    'Dubbele data-entry en handmatige processen',
    'Geen duidelijkheid over welke data belangrijk is',
    'Processen die niet aansluiten bij de werkelijkheid',
    'Gebrek aan automatisering en slimme workflows',
    'Geen inzicht in wat er écht gebeurt in je salesproces',
  ],
}

const agitation = {
  title: 'De gevolgen',
  subtitle: 'Wat kost dit je bedrijf?',
  description:
    'Inefficiënte CRM-processen kosten je bedrijf meer dan je denkt. Niet alleen in tijd en geld, maar ook in gemiste kansen en teamfrustratie:',
  consequences: [
    {
      icon: Clock,
      title: 'Verloren tijd',
      description: 'Je team besteedt uren aan administratie in plaats van verkoop en klantcontact.',
    },
    {
      icon: Database,
      title: 'Verkeerde data',
      description: 'Incomplete of verouderde informatie leidt tot gemiste kansen en slechte beslissingen.',
    },
    {
      icon: Users,
      title: 'Frustrerende ervaringen',
      description: 'Je team raakt gedemotiveerd door systemen die niet werken zoals ze zouden moeten.',
    },
    {
      icon: AlertTriangle,
      title: 'Gemiste kansen',
      description: 'Leads verdwijnen omdat niemand weet wat de volgende stap is of wie verantwoordelijk is.',
    },
  ],
}

const solution = {
  title: 'De oplossing',
  subtitle: 'Hoe wij je CRM optimaliseren',
  description:
    'Wij maken je CRM-systeem werkend. Door processen te stroomlijnen, automatisering toe te voegen en je team te trainen, zorgen we dat je CRM een krachtige tool wordt in plaats van een last.',
  approach: [
    {
      icon: Workflow,
      title: 'Proces Mapping',
      description: 'We brengen je huidige salesproces in kaart en identificeren verbeterkansen.',
    },
    {
      icon: Settings,
      title: 'CRM Optimalisatie',
      description: 'We configureren je CRM zodat het perfect aansluit bij jouw werkwijze en behoeften.',
    },
    {
      icon: Zap,
      title: 'Automatisering',
      description: 'We automatiseren repetitieve taken zodat je team zich kan focussen op verkoop.',
    },
    {
      icon: FileText,
      title: 'Data Structuur',
      description: 'We zorgen voor duidelijke data-standaarden en invoerprocessen die écht werken.',
    },
    {
      icon: BarChart3,
      title: 'Rapportage & Dashboards',
      description: 'We bouwen dashboards die je team de juiste inzichten geven op het juiste moment.',
    },
    {
      icon: Shield,
      title: 'Training & Support',
      description: 'We trainen je team en zorgen voor continue ondersteuning bij het gebruik van je CRM.',
    },
  ],
}

const outcome = {
  title: 'Het resultaat',
  subtitle: 'Wat je kunt verwachten',
  description:
    'Na onze CRM-optimalisatie heb je een systeem dat écht werkt. Je team gebruikt het dagelijks, data is betrouwbaar en processen lopen soepel. Het resultaat: meer tijd voor verkoop en betere resultaten.',
  results: [
    'Een CRM-systeem dat je team daadwerkelijk gebruikt',
    'Geautomatiseerde processen die tijd besparen',
    'Betrouwbare data voor betere beslissingen',
    'Duidelijke workflows die iedereen begrijpt',
    'Real-time inzichten in je salesprestaties',
    'Een gemotiveerd team dat efficiënt werkt',
  ],
  metrics: [
    { label: 'Tijd besparing', value: '40-60%' },
    { label: 'Data kwaliteit', value: '85%+' },
    { label: 'Team adoptie', value: '90%+' },
    { label: 'Proces efficiency', value: '50%+' },
  ],
}

export default function CrmProcesondersteuningPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Settings className="h-4 w-4" />
                <span>CRM & Procesondersteuning</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Tools die{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  écht werken
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                De juiste tools en processen maken het verschil. We helpen je om je CRM optimaal in te zetten 
                en je salesproces te stroomlijnen voor maximale efficiency.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="#problem">
                    Ontdek het probleem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">
                    Plan een gesprek
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* PROBLEM - The Problem */}
      <section id="problem" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/20 backdrop-blur-sm text-red-400 text-sm font-semibold mb-8 border border-red-500/30">
                  <AlertTriangle className="h-4 w-4 animate-pulse" />
                  <span>EEN PROBLEEM</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                  {problem.subtitle}
                </h2>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  {problem.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {problem.painPoints.map((point, index) => (
                  <AnimatedSection key={index} delay={index * 0.15}>
                    <div className="group h-full">
                      <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-red-500/50 transition-all duration-500 group-hover:bg-slate-800/80 group-hover:shadow-2xl group-hover:shadow-red-500/20 group-hover:-translate-y-2">
                        <CardContent className="p-8 h-full flex flex-col">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 text-white flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="flex-1 min-h-[3rem] flex items-center">
                              <p className="text-slate-200 font-medium text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                                {point}
                              </p>
                            </div>
                          </div>
                          
                          {/* Animated underline */}
                          <div className="mt-auto">
                            <div className="h-0.5 bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 group-hover:from-red-500 group-hover:via-red-500 group-hover:to-red-500 transition-all duration-500"></div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 text-slate-400 text-sm">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <span>Deze problemen herken je vast wel...</span>
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* IRRITATIE - The Consequences */}
      <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500/20 backdrop-blur-sm text-orange-400 text-sm font-semibold mb-8 border border-orange-500/30">
                  <TrendingUp className="h-4 w-4 animate-pulse" />
                  <span>IRRITATIE</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                  {agitation.subtitle}
                </h2>
                <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                  {agitation.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {agitation.consequences.map((consequence, index) => (
                  <AnimatedSection key={index} delay={index * 0.15}>
                    <div className="group h-full">
                      <Card className="h-full bg-slate-800/50 backdrop-blur-sm border-slate-600 hover:border-orange-500/50 transition-all duration-500 group-hover:bg-slate-800/80 group-hover:shadow-2xl group-hover:shadow-orange-500/20 group-hover:-translate-y-2">
                        <CardContent className="p-8 h-full flex flex-col">
                          <div className="flex items-start gap-6 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                              <consequence.icon className="h-7 w-7 text-white" />
                            </div>
                            <div className="flex-1 min-h-[4rem] flex flex-col justify-center">
                              <h3 className="text-xl font-bold text-slate-200 group-hover:text-white transition-colors duration-300 mb-2">
                                {consequence.title}
                              </h3>
                              <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                                {consequence.description}
                              </p>
                            </div>
                          </div>
                          
                          {/* Animated underline */}
                          <div className="mt-auto">
                            <div className="h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 group-hover:from-orange-500 group-hover:via-orange-500 group-hover:to-orange-500 transition-all duration-500"></div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 text-orange-300 text-sm">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                  <span>Deze kosten lopen snel op...</span>
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SOLUTION - The Solution */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
                  <Lightbulb className="h-4 w-4" />
                  <span>SOLUTION</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                  {solution.subtitle}
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {solution.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solution.approach.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <Card className="h-full bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 group border-slate-700 hover:border-primary/50">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl text-white group-hover:text-primary transition-colors">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* OUTCOME - The Results */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 relative overflow-hidden">
        {/* Tech Background Elements */}
        <div className="absolute inset-0">
          {/* Circuit lines */}
          <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M10 10 L90 10 L90 30 L30 30 L30 50 L70 50 L70 70 L10 70 Z" stroke="url(#techGradient)" strokeWidth="2" fill="none" />
              <circle cx="30" cy="30" r="3" fill="url(#techGradient)" />
              <circle cx="70" cy="50" r="3" fill="url(#techGradient)" />
              <defs>
                <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="absolute top-40 right-20 w-24 h-24 opacity-8">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect x="20" y="20" width="60" height="60" rx="10" stroke="url(#techGradient2)" strokeWidth="2" fill="none" />
              <path d="M30 40 L70 40 M30 60 L70 60 M50 30 L50 70" stroke="url(#techGradient2)" strokeWidth="1.5" />
              <defs>
                <linearGradient id="techGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute bottom-32 left-1/4 w-20 h-20 opacity-6">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,10 80,40 50,70 20,40" stroke="url(#techGradient3)" strokeWidth="2" fill="none" />
              <circle cx="50" cy="40" r="8" fill="url(#techGradient3)" />
              <defs>
                <linearGradient id="techGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22c55e" />
                  <stop offset="100%" stopColor="#16a34a" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute top-1/2 right-1/3 w-16 h-16 opacity-7">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M20 20 Q50 5 80 20 Q95 50 80 80 Q50 95 20 80 Q5 50 20 20" stroke="url(#techGradient4)" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="4" fill="url(#techGradient4)" />
              <defs>
                <linearGradient id="techGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-green-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-emerald-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-green-400 text-sm font-semibold mb-8 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
                  <CheckCircle2 className="h-4 w-4 animate-pulse" />
                  <span>RESULTAAT</span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                  {outcome.subtitle}
                </h2>
                <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
                  {outcome.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Results List */}
                <div>
                  <h3 className="text-3xl font-bold mb-10 text-white">
                    Concrete verbeteringen
                  </h3>
                  <div className="space-y-6">
                    {outcome.results.map((result, index) => (
                      <AnimatedSection key={index} delay={index * 0.1}>
                        <div className="group flex items-start gap-4 p-6 rounded-2xl transition-all duration-500 hover:scale-105 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15">
                          <div className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0 bg-gradient-to-br from-green-500 to-green-600">
                            <CheckCircle2 className="h-6 w-6 text-white" />
                          </div>
                          <p className="text-slate-200 font-medium text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                            {result}
                          </p>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div>
                  <h3 className="text-3xl font-bold mb-10 text-white">
                    Meetbare resultaten
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {outcome.metrics.map((metric, index) => (
                      <AnimatedSection key={index} delay={index * 0.1}>
                        <div className="group h-full">
                          <div className="h-full text-center p-8 rounded-2xl transition-all duration-500 group-hover:-translate-y-2 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-xl hover:bg-white/15">
                            <div className="h-full flex flex-col justify-center">
                              <div className="text-4xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors duration-300 group-hover:scale-110">
                                {metric.value}
                              </div>
                              <p className="text-slate-300 font-medium text-sm group-hover:text-slate-200 transition-colors duration-300 mb-4">
                                {metric.label}
                              </p>
                              
                              {/* Glassmorphic progress bar */}
                              <div className="mt-4 h-2 rounded-full overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10">
                                <div className="h-full rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 delay-300 bg-gradient-to-r from-green-500 to-green-400 shadow-lg"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom accent with glassmorphic styling */}
              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl text-green-300 text-sm backdrop-blur-md bg-white/10 border border-white/20 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Deze resultaten spreken voor zich...</span>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        {/* Tech Background Elements */}
        <div className="absolute inset-0">
          {/* Circuit patterns */}
          <div className="absolute top-16 left-16 w-40 h-40 opacity-8">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M10 20 L90 20 L90 40 L40 40 L40 60 L80 60 L80 80 L10 80 Z" stroke="url(#ctaGradient1)" strokeWidth="2" fill="none" />
              <circle cx="40" cy="40" r="4" fill="url(#ctaGradient1)" />
              <circle cx="80" cy="60" r="4" fill="url(#ctaGradient1)" />
              <defs>
                <linearGradient id="ctaGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#1d4ed8" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="absolute top-32 right-24 w-28 h-28 opacity-6">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <rect x="15" y="15" width="70" height="70" rx="15" stroke="url(#ctaGradient2)" strokeWidth="2" fill="none" />
              <path d="M25 35 L75 35 M25 50 L75 50 M25 65 L75 65 M40 25 L40 75 M60 25 L60 75" stroke="url(#ctaGradient2)" strokeWidth="1.5" />
              <defs>
                <linearGradient id="ctaGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1d4ed8" />
                  <stop offset="100%" stopColor="#1e40af" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute bottom-24 left-1/3 w-24 h-24 opacity-7">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,15 85,35 85,65 50,85 15,65 15,35" stroke="url(#ctaGradient3)" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="6" fill="url(#ctaGradient3)" />
              <defs>
                <linearGradient id="ctaGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="absolute top-1/2 right-1/4 w-20 h-20 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M25 25 Q50 10 75 25 Q90 50 75 75 Q50 90 25 75 Q10 50 25 25" stroke="url(#ctaGradient4)" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="5" fill="url(#ctaGradient4)" />
              <defs>
                <linearGradient id="ctaGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1e40af" />
                  <stop offset="100%" stopColor="#1e3a8a" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating particles */}
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-indigo-300 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-slate-400 rounded-full opacity-25 animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-blue-300 rounded-full opacity-35 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-blue-500/30 rounded-3xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500"></div>
                
                <div className="relative overflow-hidden border-0 shadow-2xl rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 group-hover:bg-white/15 transition-all duration-500">
                  <div className="p-12 sm:p-16 text-center text-white">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm mb-8 shadow-lg">
                      <Settings className="w-10 h-10 text-white" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                      Klaar om je CRM te optimaliseren?
                    </h2>
                    <p className="text-lg sm:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
                      Laten we samen kijken hoe we je CRM-systeem kunnen omtoveren tot een krachtige tool 
                      die je team daadwerkelijk gebruikt en waarde oplevert.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Button
                        asChild
                        size="lg"
                        className="text-base bg-white/20 backdrop-blur-md text-white hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold px-8 border border-white/30 hover:border-white/50"
                      >
                        <Link href="/contact">
                          Start de optimalisatie
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="text-base bg-transparent border-2 border-white/50 text-white hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-300 font-semibold px-8 backdrop-blur-sm"
                      >
                        <Link href="/diensten/sales">
                          Bekijk alle sales diensten
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
