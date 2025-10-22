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
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ShoppingCart,
  CreditCard,
  TrendingUp,
  Package,
  BarChart,
  Palette,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shopify Development | Breaz - E-commerce met Focus op Rendement',
  description:
    'Professionele Shopify webshops die converteren. Custom thema\'s, integraties en een naadloze winkelervaring voor meer omzet.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten/webdevelopment/shopify',
    siteName: 'Breaz',
    title: 'Shopify Development | Breaz',
    description:
      'Shopify webshops op maat: snel, gebruiksvriendelijk en conversiegericht. Van setup tot optimalisatie.',
    images: [
      {
        url: '/og-breaz-shopify.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz Shopify Development',
      },
    ],
  },
}

const benefits = [
  'Shopify-thema\'s op maat van jouw huisstijl',
  'Snelle laadtijden voor betere conversie',
  'Integratie met betalings- en verzendingssystemen',
  'Conversiegericht design en UX-optimalisatie',
  'SEO & tracking ingesteld vanaf dag één',
  'Mobiel responsive voor shoppers onderweg',
  'Onderhoud en technische updates inclusief',
]

const features = [
  {
    icon: Palette,
    title: 'Custom thema\'s',
    description:
      'Unieke designs die eruitzien alsof ze maatwerk zijn, maar de betrouwbaarheid van Shopify hebben.',
  },
  {
    icon: CreditCard,
    title: 'Betalingsintegraties',
    description:
      'Veilige betalingen via alle populaire methoden: creditcard, Bancontact, PayPal en meer.',
  },
  {
    icon: Package,
    title: 'Fulfilment & verzending',
    description:
      'Koppeling met verzendpartners en automatische tracking voor jouw klanten.',
  },
  {
    icon: TrendingUp,
    title: 'Conversieoptimalisatie',
    description:
      'Design en functionaliteit gericht op het verhogen van je conversie en gemiddelde orderwaarde.',
  },
  {
    icon: BarChart,
    title: 'Analytics & rapportage',
    description:
      'Inzicht in je verkopen, klanten en prestaties via uitgebreide dashboards.',
  },
  {
    icon: ShoppingCart,
    title: 'Gebruiksvriendelijk',
    description:
      'Intuïtieve interface voor jou en een naadloze winkelervaring voor je klanten.',
  },
]

export default function ShopifyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Smartphone className="h-4 w-4" />
                <span>Shopify Development</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                E-commerce met focus op{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  beleving en rendement
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Shopify is dé oplossing voor bedrijven die hun producten online willen verkopen zonder zorgen. 
                Wij bouwen Shopify-webshops die snel laden, gebruiksvriendelijk zijn en eruitzien alsof ze 
                maatwerk zijn — met conversie en omzet als einddoel.
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

      {/* Why Shopify Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Waarom Shopify?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Het meest betrouwbare e-commerce platform met alles wat je nodig hebt om te groeien.
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
                  Shopify is ideaal wanneer
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je een e-commerce business runt of wil starten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je eenvoud en betrouwbaarheid zoekt zonder technische hoofdpijn</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je wil dat design en techniek naadloos samenwerken</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je focus wil leggen op verkopen, niet op technische problemen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je wil schalen zonder zorgen over hosting en performance</span>
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
                  Een complete Shopify webshop, klaar om te verkopen.
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

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Van setup tot verkoop
                </h2>
                <p className="text-xl text-muted-foreground">
                  We begeleiden je in elke stap van je e-commerce journey.
                </p>
              </div>
            </AnimatedSection>

            <div className="space-y-6">
              <AnimatedSection delay={0.1}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">1</span>
                      </div>
                      <CardTitle>Strategie & Setup</CardTitle>
                    </div>
                    <CardDescription className="ml-14">
                      We bepalen samen je doelen, doelgroep en productstrategie voor een sterke start.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">2</span>
                      </div>
                      <CardTitle>Design & Ontwikkeling</CardTitle>
                    </div>
                    <CardDescription className="ml-14">
                      We bouwen een custom Shopify thema dat past bij jouw merk en optimaliseert voor conversie.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">3</span>
                      </div>
                      <CardTitle>Producten & Content</CardTitle>
                    </div>
                    <CardDescription className="ml-14">
                      We helpen met het uploaden van producten, schrijven van overtuigende beschrijvingen en SEO.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">4</span>
                      </div>
                      <CardTitle>Launch & Groei</CardTitle>
                    </div>
                    <CardDescription className="ml-14">
                      Na de lancering ondersteunen we je met marketing, optimalisatie en verdere uitbreiding.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-blue-600 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <AnimatedSection>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Klaar om online te verkopen?
              </h2>
              
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Laten we samen bouwen aan een Shopify webshop die converteert en je helpt groeien. Van eerste verkoop tot schaalbare e-commerce business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 font-semibold"
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
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold"
                >
                  <Link href="/diensten/webdevelopment">
                    Bekijk andere oplossingen
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

