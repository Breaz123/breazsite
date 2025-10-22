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
  Megaphone,
  Search,
  TrendingUp,
  Share2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Marketing | Breaz - Bouw een merk dat raakt',
  description:
    'Breaz helpt je om een sterk verhaal te vertellen via strategie, content en campagnes die vertrouwen wekken. Ontdek onze marketingdiensten.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten/marketing',
    siteName: 'Breaz',
    title: 'Marketing | Breaz - Bouw een merk dat raakt',
    description:
      'Marketing is meer dan reclame. Breaz helpt je om je verhaal helder te maken en consequent uit te dragen via strategie, content en campagnes.',
    images: [
      {
        url: '/og-breaz-marketing.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz Marketing diensten',
      },
    ],
  },
}

const services = [
  {
    icon: Target,
    title: 'Merkstrategie & positionering',
    description:
      'We helpen je om je merk helder te positioneren en een unieke plek in de markt te vinden. Van visie tot visuele identiteit.',
    href: '/diensten/marketing/merkstrategie-positionering',
  },
  {
    icon: Megaphone,
    title: 'Contentcreatie & storytelling',
    description:
      'Verhalen die raken en blijven hangen. We creëren content die jouw doelgroep aanspreekt en je merk menselijk maakt.',
    href: '/diensten/marketing/content-storytelling',
  },
  {
    icon: Search,
    title: 'Online zichtbaarheid & SEO',
    description:
      'Gevonden worden door de juiste mensen op het juiste moment. We optimaliseren je online aanwezigheid voor maximale impact.',
    href: '/diensten/marketing/online-zichtbaarheid-seo',
  },
  {
    icon: Share2,
    title: 'Campagnes en social media',
    description:
      'Van strategie tot uitvoering. We bouwen campagnes die inspelen op wat jouw doelgroep beweegt en die resultaten opleveren.',
    href: '/diensten/marketing/campagnes-social-media',
  },
]

const benefits = [
  'Een helder verhaal dat je onderscheidt van de concurrentie',
  'Consistente communicatie over alle kanalen',
  'Meer zichtbaarheid bij je doelgroep',
  'Een sterker merk dat vertrouwen opbouwt',
  'Meetbare resultaten en continue optimalisatie',
  'Een team dat meedenkt over strategie en uitvoering',
]

export default function MarketingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Target className="h-4 w-4" />
                <span>Marketing</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Bouw een merk{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  dat raakt
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Marketing is meer dan reclame. Het is het verhaal dat je vertelt, en hoe je dat doet op elk moment 
                dat iemand met jouw merk in contact komt. Wij helpen je om dat verhaal helder te maken en 
                consequent uit te dragen.
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

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Wat we voor je doen
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Van strategie tot uitvoering, we zorgen dat je marketing werkt.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1 flex flex-col group/card border-primary/10 hover:border-primary/30 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  <CardHeader className="relative">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover/card:bg-primary/20 group-hover/card:scale-110 transition-all duration-300">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover/card:text-primary transition-colors duration-300">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0 relative">
                    <Button 
                      asChild 
                      className="w-full justify-between group bg-primary/10 hover:bg-primary hover:text-primary-foreground border border-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02] font-medium"
                    >
                      <Link href={service.href}>
                        <span className="font-semibold">Ontdek meer</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-all duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
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
                  Waarom marketing met Breaz?
                </h2>
                <p className="text-xl text-muted-foreground">
                  We bouwen samen aan een merk dat gezien en onthouden wordt.
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
                      <Target className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                      Klaar om je merk te laten groeien?
                    </h2>
                    <p className="text-lg sm:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
                      Laten we samen bouwen aan een marketingstrategie die past bij jouw ambities en je doelgroep raakt.
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
                        <Link href="/diensten">
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

