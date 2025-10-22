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
  Zap,
  CheckCircle2,
  ArrowRight,
  Code,
  Layers,
  Smartphone,
  TrendingUp,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tailwind CSS, React & Next.js Development | Breaz Webdevelopment',
  description:
    'High-performance web development met React, Next.js en Tailwind CSS. Razendsnelle, schaalbare websites en webapplicaties voor ambitieuze projecten.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten/webdevelopment/tailwind-react-nextjs',
    siteName: 'Breaz',
    title: 'Tailwind CSS, React & Next.js Development | Breaz',
    description:
      'Bouw razendsnelle, moderne websites en webapplicaties met React, Next.js en Tailwind CSS. Performance, UX en conversie centraal.',
    images: [
      {
        url: '/og-breaz-react-nextjs.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz - React, Next.js en Tailwind CSS Development',
      },
    ],
  },
}

const benefits = [
  'Razendsnelle laadtijden en optimale performance',
  'SEO-vriendelijk dankzij server-side rendering',
  'Schaalbare en future-proof architectuur',
  'Responsive en mobile-first design',
  'Modern design met Tailwind CSS',
  'Eenvoudig te onderhouden en uit te breiden',
]

const useCases = [
  {
    icon: TrendingUp,
    title: 'High-traffic websites',
    description:
      'Voor websites die veel bezoekers moeten verwerken zonder in te boeten aan snelheid.',
  },
  {
    icon: Layers,
    title: 'Complexe webapplicaties',
    description:
      'Van SaaS-platforms tot data-gedreven dashboards - we bouwen op maat.',
  },
  {
    icon: Smartphone,
    title: 'Progressive Web Apps',
    description:
      'Web apps die aanvoelen als native apps, met offline functionaliteit.',
  },
]

export default function TailwindReactNextjsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                <span>React / Next.js / Tailwind CSS</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                High-performance development{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  voor ambitieuze projecten
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Met moderne technologieën zoals React, Next.js en Tailwind CSS bouwen we 
                razendsnelle, dynamische webapplicaties en websites die meegroeien met jouw bedrijf.
                Performance, gebruikservaring en conversie staan centraal.
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
                  <Link href="/diensten/webdevelopment">
                    Terug naar webdevelopment
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why This Stack Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Waarom React, Next.js en Tailwind CSS?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Deze tech stack combineert snelheid, flexibiliteit en moderne ontwikkeling.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <AnimatedSection delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Razendsnelle performance</CardTitle>
                  <CardDescription>
                    Next.js optimaliseert automatisch je code, zorgt voor snellere laadtijden 
                    en biedt server-side rendering voor betere SEO.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Modern en schaalbaar</CardTitle>
                  <CardDescription>
                    React maakt complexe interfaces eenvoudig te bouwen en onderhouden. 
                    Perfect voor groeiende bedrijven met veranderende behoeften.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Layers className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Flexibel design</CardTitle>
                  <CardDescription>
                    Tailwind CSS biedt maximale flexibiliteit voor custom designs zonder de overhead 
                    van traditionele CSS frameworks.
                  </CardDescription>
                </CardHeader>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Ideaal wanneer:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Performance cruciaal is voor jouw gebruikers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je een headless CMS of externe API's wil koppelen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je wil inzetten op UX, snelheid en conversie</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je een complexe webapp of dashboard nodig hebt</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je een schaalbare, future-proof website wil</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Wat we voor je kunnen bouwen
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <AnimatedSection key={useCase.title} delay={index * 0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <useCase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    <CardDescription className="text-base">
                      {useCase.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Wat je van ons krijgt
                </h2>
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-0 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-700"></div>
                
                <CardContent className="relative p-12 sm:p-16 text-center text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-8">
                    <Zap className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    Klaar voor een razendsnelle website?
                  </h2>
                  <p className="text-lg sm:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
                    Laten we samen kijken hoe React, Next.js en Tailwind CSS jouw digitale aanwezigheid 
                    naar een hoger niveau tillen.
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
                      <Link href="/diensten/webdevelopment">
                        Bekijk andere oplossingen
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

