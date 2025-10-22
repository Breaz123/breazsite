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
  Globe,
  CheckCircle2,
  ArrowRight,
  Layout,
  Shield,
  Zap,
  Users,
  Settings,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'WordPress Development | Breaz - Professionele WordPress Websites',
  description:
    'Professionele WordPress development: gebruiksvriendelijk, snel en SEO-geoptimaliseerd. Custom thema\'s, veilige websites en volledige ondersteuning.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten/webdevelopment/wordpress-development',
    siteName: 'Breaz',
    title: 'WordPress Development | Breaz',
    description:
      'Professionele WordPress websites op maat. Gebruiksvriendelijk, snel en SEO-klaar. Van eenvoudige sites tot uitgebreide e-commerce.',
    images: [
      {
        url: '/og-breaz-wordpress.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz WordPress Development',
      },
    ],
  },
}

const benefits = [
  'Gebruiksvriendelijk CMS - beheer zelf je content zonder technische kennis',
  'SEO-geoptimaliseerd vanaf dag één',
  'Custom thema\'s op maat van jouw huisstijl',
  'Veiligheid en performance als prioriteit',
  'Mobiel responsive en snel ladend',
  'Training zodat je zelf aanpassingen kan doen',
  'Onderhoud en support op lange termijn',
]

const features = [
  {
    icon: Layout,
    title: 'Custom thema\'s',
    description:
      'Geen standaard templates, maar maatwerk dat perfect aansluit bij jouw merkidentiteit.',
  },
  {
    icon: Shield,
    title: 'Veiligheid & onderhoud',
    description:
      'Regelmatige updates, backups en monitoring voor een veilige en stabiele website.',
  },
  {
    icon: Zap,
    title: 'Performance-optimalisatie',
    description:
      'Snelle laadtijden dankzij optimalisatie van afbeeldingen, caching en clean code.',
  },
  {
    icon: Users,
    title: 'Gebruiksvriendelijk',
    description:
      'Intuïtieve interface zodat je zonder technische kennis content kan beheren.',
  },
  {
    icon: Settings,
    title: 'Uitbreidbaar',
    description:
      'Eenvoudig uitbreiden met nieuwe functionaliteiten en integraties wanneer nodig.',
  },
  {
    icon: Globe,
    title: 'SEO-ready',
    description:
      'Geoptimaliseerd voor zoekmachines met juiste structuur, schema\'s en metadata.',
  },
]

export default function WordPressDevelopmentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Globe className="h-4 w-4" />
                <span>WordPress Development</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                WordPress websites die{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  jij zelf kan beheren
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                WordPress is ideaal voor bedrijven die zelf hun content willen beheren zonder technische kennis. 
                We bouwen performante WordPress-websites met moderne thema's, geoptimaliseerd voor snelheid, 
                beveiliging en vindbaarheid.
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

      {/* Why WordPress Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Waarom WordPress?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Flexibel, gebruiksvriendelijk en SEO-klaar - ideaal voor bedrijven die autonomie willen.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  WordPress is ideaal wanneer
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je een eenvoudig beheersbare website wil zonder programmeerkennis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je snel online wil met een professionele uitstraling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je op termijn wil uitbreiden naar e-commerce (WooCommerce)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je regelmatig content wil toevoegen (blog, nieuws, portfolio)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je een kosteneffectieve oplossing zoekt met veel mogelijkheden</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Wat je van ons krijgt
                </h2>
                <p className="text-xl text-muted-foreground">
                  Een complete WordPress oplossing, van A tot Z verzorgd.
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-0 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-700"></div>
                
                <CardContent className="relative p-12 sm:p-16 text-center text-white">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-8">
                    <Globe className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    Klaar voor een professionele WordPress website?
                  </h2>
                  <p className="text-lg sm:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
                    Laten we samen bouwen aan een WordPress website die perfect aansluit bij jouw doelen 
                    en die je zelf eenvoudig kan beheren.
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

