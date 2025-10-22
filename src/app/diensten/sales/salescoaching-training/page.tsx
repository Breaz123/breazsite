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
  Target,
  Compass,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  TrendingUp,
  Sparkles,
  CircleDot,
  Heart,
  Lightbulb,
  Award,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Salescoaching & Training | Breaz - Verkoop begint bij luisteren',
  description:
    'Breaz traint je team in moderne verkooptechnieken waarbij empathie en inzicht centraal staan. Van first contact tot close.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten/sales/salescoaching-training',
    siteName: 'Breaz',
    title: 'Salescoaching & Training | Breaz - Verkoop begint bij luisteren',
    description:
      'We trainen je team in moderne verkooptechnieken waarbij empathie en inzicht centraal staan. Van first contact tot close.',
    images: [
      {
        url: '/og-breaz-salescoaching.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz Salescoaching & Training',
      },
    ],
  },
}

// Golden Circle Framework: WHY - HOW - WHAT

const why = {
  title: 'Waarom',
  subtitle: 'Ons doel',
  description:
    'Wij geloven dat verkoop begint bij luisteren. Te veel sales teams focussen op technieken en scripts, terwijl ze vergeten dat verkopen gaat om het begrijpen van wat klanten écht nodig hebben. Breaz traint teams om menselijke verbindingen te maken die leiden tot duurzame relaties en betere resultaten.',
  impact: [
    'Sales teams die écht luisteren naar klanten in plaats van alleen hun pitch af te draaien',
    'Verkoopgesprekken die voelen als een gesprek, niet als een verkooppraatje',
    'Duurzame klantrelaties gebouwd op vertrouwen en waarde',
  ],
}

const how = [
  {
    icon: Heart,
    title: 'Empathie eerst',
    description:
      'We leren je team om écht te begrijpen wat klanten beweegt. Niet door vragenlijsten af te werken, maar door oprecht nieuwsgierig te zijn naar hun uitdagingen en ambities.',
  },
  {
    icon: Target,
    title: 'Doelgerichte gesprekken',
    description:
      'Elk gesprek heeft een doel, maar dat hoeft niet altijd directe verkoop te zijn. We trainen je team om de juiste vragen te stellen op het juiste moment.',
  },
  {
    icon: MessageSquare,
    title: 'Actief luisteren',
    description:
      'Luisteren is meer dan wachten tot je weer mag praten. We leren je team om tussen de regels te lezen en de échte behoeften te ontdekken.',
  },
  {
    icon: Compass,
    title: 'Situatie-afhankelijke aanpak',
    description:
      'Geen one-size-fits-all scripts. We trainen je team om hun aanpak aan te passen aan de specifieke situatie en persoon.',
  },
  {
    icon: TrendingUp,
    title: 'Resultaatgericht',
    description:
      'Empathie zonder resultaten is nutteloos. We leren je team om menselijke verbindingen om te zetten in concrete business outcomes.',
  },
  {
    icon: Lightbulb,
    title: 'Continue verbetering',
    description:
      'Verkoop is een vak dat je blijft leren. We bouwen een cultuur van reflectie en verbetering in je team.',
  },
]

const what = [
  {
    title: 'Verkoopgesprek Training',
    description:
      'Van opening tot closing: we trainen je team in alle aspecten van het verkoopgesprek, met focus op luisteren en begrijpen.',
  },
  {
    title: 'Objectie Handling',
    description:
      'Objecties zijn kansen om te begrijpen wat klanten écht bezighoudt. We leren je team om objecties om te zetten in gesprekken.',
  },
  {
    title: 'Prospect Research',
    description:
      'Goede voorbereiding is het halve werk. We leren je team hoe ze zich kunnen voorbereiden op gesprekken die écht impact hebben.',
  },
  {
    title: 'Follow-up Strategieën',
    description:
      'De meeste deals worden gesloten na het eerste gesprek. We trainen je team in effectieve follow-up strategieën die waarde toevoegen.',
  },
]

export default function SalescoachingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero with Golden Circle Visualization */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-primary/20 to-slate-900 pt-16">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div className="text-center lg:text-left">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
                    <CircleDot className="h-4 w-4" />
                    <span className="text-sm font-medium">
                      Salescoaching & Training
                    </span>
                  </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
                    Verkoop begint bij{' '}
                    <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
                      luisteren
                    </span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                    We trainen je team in moderne verkooptechnieken waarbij empathie en inzicht centraal staan. 
                    Van first contact tot close.
                  </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <Button asChild size="lg" className="group">
                      <Link href="#why">
                        Ontdek waarom
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                      <Link href="/contact">Plan een gesprek</Link>
                    </Button>
                  </div>
                </FadeIn>
              </div>

              {/* Right: Golden Circle Visualization */}
              <FadeIn delay={0.4}>
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  {/* Concentric Circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Outer Circle - WHAT */}
                    <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-blue-600/30 to-primary/30 backdrop-blur-sm border-2 border-blue-400/50 flex items-center justify-center animate-pulse">
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        WHAT
                      </div>
                    </div>

                    {/* Middle Circle - HOW */}
                    <div className="absolute w-2/3 h-2/3 rounded-full bg-gradient-to-br from-primary/40 to-blue-500/40 backdrop-blur-sm border-2 border-primary/60 flex items-center justify-center animate-pulse delay-200">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        HOW
                      </div>
                    </div>

                    {/* Inner Circle - WHY */}
                    <div className="absolute w-1/3 h-1/3 rounded-full bg-gradient-to-br from-primary to-blue-600 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center shadow-2xl animate-pulse delay-500">
                      <div className="text-white text-2xl font-bold">WHY</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 text-white/60 rotate-90" />
        </div>
      </section>

      {/* WHY - The Purpose */}
      <section id="why" className="py-32 bg-gradient-to-br from-slate-50 via-primary/5 to-blue-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-600 to-primary" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/90 via-white/80 to-white/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.08),transparent_55%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                {/* WHY Circle Badge */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary to-blue-600 blur-2xl opacity-50 animate-pulse" />
                  <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white shadow-2xl flex items-center justify-center border-4 border-white">
                    <span className="text-4xl font-bold">WHY</span>
                  </div>
                </div>

                <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-primary to-slate-900 bg-clip-text text-transparent">
                  {why.subtitle}
                </h2>
                <div className="max-w-3xl mx-auto">
                  <Card className="border-0 bg-white/95 backdrop-blur shadow-2xl">
                    <CardContent className="p-6 md:p-8">
                      <p className="text-lg md:text-xl text-slate-800 leading-relaxed">
                        {why.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Impact Cards */}
              <div className="grid gap-6 md:grid-cols-3">
                {why.impact.map((item, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <Card className="relative h-full border-0 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600" />
                      
                      <CardContent className="pt-8 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center mb-4">
                          <Sparkles className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-slate-700 leading-relaxed">{item}</p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* HOW - The Process */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              {/* HOW Circle Badge */}
              <div className="relative inline-flex items-center justify-center mb-8">
                <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary to-blue-600 blur-2xl opacity-50 animate-pulse" />
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white shadow-2xl flex items-center justify-center border-4 border-slate-700">
                  <span className="text-4xl font-bold">HOW</span>
                </div>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
                Hoe wij trainen
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                De principes en methodieken die onze training bepalen. Dit is hoe wij
                verkoopvaardigheden ontwikkelen die écht werken.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {how.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <Card className="group h-full border-0 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/80 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-blue-600/0 group-hover:from-primary/20 group-hover:to-blue-600/20 transition-all duration-300" />
                  <div className="absolute inset-0 border border-slate-700 group-hover:border-primary/50 transition-colors rounded-lg" />
                  
                  <CardHeader className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary/30">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-white text-xl">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>

                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT - The Services */}
      <section className="py-32 bg-gradient-to-br from-blue-50 via-white to-primary/5 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full border-2 border-primary/10" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full border-2 border-blue-600/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="text-center mb-20">
              {/* WHAT Circle Badge */}
              <div className="relative inline-flex items-center justify-center mb-8">
                <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-primary to-blue-600 blur-2xl opacity-50 animate-pulse" />
                <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white shadow-2xl flex items-center justify-center border-4 border-white">
                  <span className="text-5xl font-bold">WHAT</span>
                </div>
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900">
                Wat wij trainen
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                De concrete vaardigheden en technieken waarmee wij jouw sales team
                helpen groeien en betere resultaten behalen.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {what.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <Card className="group h-full border-0 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-600 to-primary" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-blue-600/0 group-hover:from-primary/5 group-hover:to-blue-600/5 transition-all duration-500" />
                  
                  <CardHeader className="relative z-10">
                    <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                      {index + 1}
                    </div>
                    
                    <CardTitle className="text-2xl mb-4 text-slate-900 group-hover:text-primary transition-colors font-bold">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </CardContent>

                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center">
              <Button asChild size="lg" className="group text-lg px-8 shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">
                  Start met training
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 bg-gradient-to-br from-slate-950 via-primary/30 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
          <div className="absolute top-1/2 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-12">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-ping" />
                  <div className="absolute inset-2 rounded-full border-2 border-primary/40" />
                  <div className="absolute inset-4 rounded-full border-2 border-primary/60" />
                  <div className="absolute inset-6 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-2xl">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                  Klaar om je team{' '}
                  <span className="bg-gradient-to-r from-primary via-blue-400 to-blue-600 bg-clip-text text-transparent">
                    te trainen?
                  </span>
                </h2>
                <p className="text-xl sm:text-2xl mb-12 text-slate-200 leading-relaxed max-w-3xl mx-auto">
                  Laten we samen kijken hoe we je sales team kunnen helpen om beter te verkopen 
                  door écht te luisteren naar wat klanten nodig hebben.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 group shadow-2xl hover:shadow-primary/50 transition-all"
                  >
                    <Link href="/contact">
                      Start het gesprek
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/40"
                  >
                    <Link href="/diensten/sales">Bekijk alle sales diensten</Link>
                  </Button>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10">
                  <p className="text-slate-400 text-sm mb-4">
                    Vertrouwd door ambitieuze sales teams
                  </p>
                  <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      <span className="text-sm">Resultaatgericht</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="h-5 w-5" />
                      <span className="text-sm">Menselijk</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      <span className="text-sm">Bewezen methodiek</span>
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
