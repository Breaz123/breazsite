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
  MessageSquare,
  LineChart,
  Settings,
  RefreshCw,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sales | Breaz - Verkoop begint bij luisteren',
  description:
    'Breaz helpt bedrijven om hun verkoopaanpak menselijker en efficiënter te maken met structuur, inzicht en empathie.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten/sales',
    siteName: 'Breaz',
    title: 'Sales | Breaz - Verkoop begint bij luisteren',
    description:
      'Een sterk product verkoopt niet vanzelf. Breaz helpt bedrijven om hun verkoopaanpak menselijker en efficiënter te maken.',
    images: [
      {
        url: '/og-breaz-sales.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz Sales diensten',
      },
    ],
  },
}

const services = [
  {
    icon: MessageSquare,
    title: 'Salescoaching & training',
    description:
      'We trainen je team in moderne verkooptechnieken waarbij empathie en inzicht centraal staan. Van first contact tot close.',
  },
  {
    icon: LineChart,
    title: 'Funnelanalyse & conversieoptimalisatie',
    description:
      'We analyseren je salesfunnel en identificeren waar kansen liggen om meer prospects om te zetten in klanten.',
  },
  {
    icon: Settings,
    title: 'CRM & procesondersteuning',
    description:
      'De juiste tools en processen maken het verschil. We helpen je om je CRM optimaal in te zetten en je salesproces te stroomlijnen.',
  },
  {
    icon: RefreshCw,
    title: 'Marketing–sales alignment',
    description:
      'Marketing en sales werken samen aan één doel: klanten. We zorgen dat beide teams op één lijn zitten en elkaar versterken.',
  },
]

const benefits = [
  'Een salesaanpak die menselijk én effectief is',
  'Hogere conversieratio\'s en kortere salescycli',
  'Een team dat beter begrijpt wat klanten nodig hebben',
  'Structuur en inzicht in je salesproces',
  'Tools die écht gebruikt worden',
  'Betere samenwerking tussen marketing en sales',
]

export default function SalesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Users className="h-4 w-4" />
                <span>Sales</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Verkoop begint bij{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  luisteren
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Een sterk product verkoopt niet vanzelf. Daarom helpt Breaz bedrijven om hun verkoopaanpak 
                menselijker en efficiënter te maken. We brengen structuur, inzicht en empathie samen zodat 
                jouw team beter begrijpt wat klanten nodig hebben — en daar overtuigend op kan inspelen.
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
                Van coaching tot procesoptimalisatie, we maken sales menselijker en effectiever.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
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
                  Waarom sales met Breaz?
                </h2>
                <p className="text-xl text-muted-foreground">
                  We bouwen samen aan een salesaanpak die werkt voor jou én je klanten.
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
                      Klaar om je salesproces te verbeteren?
                    </h2>
                    <p className="text-lg sm:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
                      Laten we samen kijken hoe we je team kunnen helpen om beter te verkopen en meer klanten te overtuigen.
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

