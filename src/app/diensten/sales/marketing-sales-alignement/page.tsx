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
  RefreshCw,
  Target,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  AlertTriangle,
  Lightbulb,
  Zap,
  Search,
  Filter,
  PieChart,
  Activity,
  Handshake,
  MessageSquare,
  BarChart3,
  Users2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Marketing-Sales Alignement | Breaz - Verkoop begint bij luisteren',
  description:
    'Marketing en sales werken samen aan één doel: klanten. We zorgen dat beide teams op één lijn zitten en elkaar versterken.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten/sales/marketing-sales-alignement',
    siteName: 'Breaz',
    title: 'Marketing-Sales Alignement | Breaz - Verkoop begint bij luisteren',
    description:
      'Marketing en sales werken samen aan één doel: klanten. We zorgen dat beide teams op één lijn zitten en elkaar versterken.',
    images: [
      {
        url: '/og-breaz-alignement.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz Marketing-Sales Alignement',
      },
    ],
  },
}

// AIDA Framework: Challenge - Benefits - Vision - Solution

const attention = {
  title: 'Challenge',
  subtitle: 'Het probleem dat iedereen kent maar niemand oplost',
  description:
    'Marketing en sales werken vaak langs elkaar heen. Marketing levert leads die sales niet kan gebruiken, sales klaagt over kwaliteit van leads, en beide teams hebben het gevoel dat ze tegen elkaar werken in plaats van samen.',
  hook: 'Wist je dat bedrijven met goede marketing-sales alignment 67% beter presteren in het sluiten van deals?',
  stats: [
    { label: 'Betere lead kwaliteit', value: '67%' },
    { label: 'Hogere win rates', value: '38%' },
    { label: 'Kortere sales cycli', value: '24%' },
    { label: 'Lagere customer acquisition cost', value: '36%' },
  ],
}

const interest = {
  title: 'Benefits',
  subtitle: 'Waarom alignment zo belangrijk is',
  description:
    'Wanneer marketing en sales op één lijn zitten, ontstaat er een krachtige synergie. Marketing begrijpt wat sales nodig heeft, sales krijgt betere leads, en klanten krijgen een consistente ervaring van eerste contact tot gesloten deal.',
  benefits: [
    {
      icon: Handshake,
      title: 'Betere samenwerking',
      description: 'Teams werken samen in plaats van tegen elkaar, met gedeelde doelen en metrics.',
    },
    {
      icon: Target,
      title: 'Kwalitatievere leads',
      description: 'Marketing levert leads die sales daadwerkelijk kan gebruiken en omzetten.',
    },
    {
      icon: MessageSquare,
      title: 'Consistente communicatie',
      description: 'Klanten krijgen dezelfde boodschap en ervaring van marketing tot sales.',
    },
    {
      icon: BarChart3,
      title: 'Betere resultaten',
      description: 'Hogere conversieratio\'s, kortere cycli en meer omzet per klant.',
    },
  ],
}

const desire = {
  title: 'Vision',
  subtitle: 'Stel je voor: perfecte samenwerking',
  description:
    'Beeld je in dat je marketing en sales teams perfect op elkaar afgestemd zijn. Marketing levert precies de leads die sales nodig heeft, sales geeft waardevolle feedback aan marketing, en samen creëren jullie een naadloze klantervaring die tot meer deals leidt.',
  vision: [
    'Marketing en sales die elkaar begrijpen en waarderen',
    'Leads die perfect aansluiten bij je salesproces',
    'Korte, effectieve salescycli zonder misverstanden',
    'Klanten die een consistente, professionele ervaring krijgen',
    'Meetbare verbeteringen in je verkoopresultaten',
    'Een team dat samen groeit en successen viert',
  ],
  emotional: 'Dit is niet alleen goed voor je cijfers, maar ook voor je team. Mensen die samenwerken aan een gemeenschappelijk doel zijn gemotiveerder, productiever en gelukkiger.',
}

const action = {
  title: 'Solution',
  subtitle: 'Hoe wij alignment realiseren',
  description:
    'Wij brengen marketing en sales bij elkaar. Door processen te stroomlijnen, communicatie te verbeteren en gedeelde doelen te creëren, zorgen we dat beide teams optimaal samenwerken.',
  approach: [
    {
      icon: Search,
      title: 'Gap Analyse',
      description: 'We analyseren waar de verschillen zitten tussen marketing en sales en identificeren verbeterkansen.',
    },
    {
      icon: MessageSquare,
      title: 'Communicatie Verbetering',
      description: 'We implementeren regelmatige meetings en feedback loops tussen beide teams.',
    },
    {
      icon: Target,
      title: 'Gedeelde Doelen',
      description: 'We creëren KPI\'s en doelen die beide teams motiveren om samen te werken.',
    },
    {
      icon: Filter,
      title: 'Lead Scoring & Routing',
      description: 'We ontwikkelen systemen om leads correct te scoren en door te geven aan sales.',
    },
    {
      icon: Activity,
      title: 'Proces Optimalisatie',
      description: 'We stroomlijnen handoffs en zorgen voor duidelijke verantwoordelijkheden.',
    },
    {
      icon: PieChart,
      title: 'Rapportage & Monitoring',
      description: 'We zorgen voor transparantie en inzicht in prestaties van beide teams.',
    },
  ],
  cta: {
    title: 'Klaar om je teams te aligneren?',
    description: 'Laten we samen kijken hoe we marketing en sales kunnen laten samenwerken aan jouw groeidoelen.',
    primary: 'Start het gesprek',
    secondary: 'Bekijk alle sales diensten',
  },
}

export default function MarketingSalesAlignementPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-600/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium mb-8 shadow-2xl">
                <RefreshCw className="h-4 w-4 animate-spin" />
                <span>Marketing-Sales Alignement</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8 text-white">
                Marketing en sales{' '}
                <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  op één lijn
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Marketing en sales werken samen aan één doel: klanten. We zorgen dat beide teams 
                op één lijn zitten en elkaar versterken voor betere resultaten.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-2xl">
                  <Link href="#attention">
                    Ontdek de kansen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-2xl">
                  <Link href="/contact">
                    Plan een gesprek
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CHALLENGE - The Problem */}
      <section id="attention" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-yellow-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500/20 backdrop-blur-md border border-red-500/30 text-red-300 text-sm font-medium mb-8 shadow-2xl">
                  <Eye className="h-4 w-4 animate-pulse" />
                  <span>CHALLENGE</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
                  {attention.subtitle}
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
                  {attention.description}
                </p>
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-yellow-500/30 text-yellow-200 text-lg font-semibold shadow-2xl">
                  <Lightbulb className="h-6 w-6 animate-bounce" />
                  <span>{attention.hook}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {attention.stats.map((stat, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <Card className="text-center bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl hover:shadow-3xl hover:bg-white/15 transition-all duration-500 hover:scale-105 group">
                      <CardContent className="p-8">
                        <div className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                          {stat.value}
                        </div>
                        <p className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                          {stat.label}
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

      {/* BENEFITS - The Value */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-300 text-sm font-medium mb-8 shadow-2xl">
                  <MousePointer className="h-4 w-4 animate-pulse" />
                  <span>BENEFITS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
                  {interest.subtitle}
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {interest.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {interest.benefits.map((benefit, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-3xl hover:bg-white/10 transition-all duration-500 group hover:scale-105">
                      <CardHeader className="p-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <benefit.icon className="h-8 w-8 text-blue-400" />
                        </div>
                        <CardTitle className="text-2xl text-white group-hover:text-blue-300 transition-colors duration-300">
                          {benefit.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-8 pt-0">
                        <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                          {benefit.description}
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

      {/* VISION - The Future */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-tr from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 backdrop-blur-md border border-primary/30 text-primary text-sm font-medium mb-8 shadow-2xl">
                  <Zap className="h-4 w-4 animate-pulse" />
                  <span>VISION</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
                  {desire.subtitle}
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {desire.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Vision List */}
                <div>
                  <h3 className="text-3xl font-bold mb-10 text-white bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Wat je kunt verwachten
                  </h3>
                  <div className="space-y-6">
                    {desire.vision.map((item, index) => (
                      <AnimatedSection key={index} delay={index * 0.1}>
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-md border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                          </div>
                          <p className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">{item}</p>
                        </div>
                      </AnimatedSection>
                    ))}
                  </div>
                </div>

                {/* Emotional Appeal */}
                <div>
                  <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
                    <CardContent className="p-10">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 backdrop-blur-md border border-primary/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Users2 className="h-10 w-10 text-primary" />
                      </div>
                      <p className="text-xl text-slate-300 leading-relaxed italic group-hover:text-white transition-colors duration-300">
                        "{desire.emotional}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SOLUTION - The Approach */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-teal-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500/20 backdrop-blur-md border border-green-500/30 text-green-300 text-sm font-medium mb-8 shadow-2xl">
                  <ArrowRight className="h-4 w-4 animate-pulse" />
                  <span>SOLUTION</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
                  {action.subtitle}
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {action.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {action.approach.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <Card className="h-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl hover:shadow-3xl hover:bg-white/10 transition-all duration-500 group hover:scale-105">
                      <CardHeader className="p-8">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-md border border-green-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                          <item.icon className="h-8 w-8 text-green-400" />
                        </div>
                        <CardTitle className="text-xl text-white group-hover:text-green-300 transition-colors duration-300">
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-8 pt-0">
                        <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-12 sm:p-16 text-center text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                    <RefreshCw className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
                    {action.cta.title}
                  </h2>
                  <p className="text-lg sm:text-xl mb-10 text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    {action.cta.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                      asChild
                      size="lg"
                      className="text-base bg-white/15 backdrop-blur-md border border-white/25 text-white hover:bg-white/25 hover:scale-105 transition-all duration-300 shadow-lg font-medium px-8 py-3 rounded-xl"
                    >
                      <Link href="/contact">
                        {action.cta.primary}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="text-base bg-transparent border border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 font-medium px-8 py-3 rounded-xl"
                    >
                      <Link href="/diensten/sales">
                        {action.cta.secondary}
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
