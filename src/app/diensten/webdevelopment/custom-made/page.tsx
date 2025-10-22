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
  Code,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lock,
  Rocket,
  Database,
  Layers,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Custom Webdevelopment op Maat | Breaz - Maatwerk Websites & Web Apps',
  description:
    'Webdevelopment volledig op maat: unieke websites en webapplicaties met focus op jouw doelen. Van UX tot API-integraties, alles mogelijk.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten/webdevelopment/custom-made',
    siteName: 'Breaz',
    title: 'Custom Webdevelopment op Maat | Breaz',
    description:
      'Maatwerk webdevelopment voor merken die verder willen. Unieke architectuur, maximale performance en volledige controle.',
    images: [
      {
        url: '/og-breaz-custom-development.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz Custom Webdevelopment op Maat',
      },
    ],
  },
}

const benefits = [
  'Volledige controle over functionaliteit en design',
  'Optimale performance en schaalbaarheid',
  'Integratie met bestaande systemen en tools',
  'Unieke gebruikerservaring op maat van jouw klanten',
  'Veilige en onderhoudbare code',
  'Eigenaarschap van de volledige codebase',
  'Future-proof architectuur die meegroeit met je bedrijf',
]

const features = [
  {
    icon: Sparkles,
    title: 'Unieke merkervaring',
    description:
      'Geen templates of standaardoplossingen. We bouwen een digitale ervaring die perfect aansluit bij jouw merkidentiteit.',
  },
  {
    icon: Database,
    title: 'Complexe integraties',
    description:
      'Koppel je website aan ERP-systemen, CRM, externe API\'s of databases. Alles is mogelijk.',
  },
  {
    icon: Rocket,
    title: 'Performance & snelheid',
    description:
      'Geoptimaliseerde code, efficiënte architectuur en moderne technologieën voor razendsnelle websites.',
  },
  {
    icon: Lock,
    title: 'Veiligheid & compliance',
    description:
      'GDPR-compliant, veilige authenticatie en encryptie. We nemen beveiliging serieus.',
  },
  {
    icon: Layers,
    title: 'Schaalbare architectuur',
    description:
      'Gebouwd om mee te groeien. Van startup tot enterprise, je website past zich aan jouw groei aan.',
  },
  {
    icon: Code,
    title: 'Clean code & documentatie',
    description:
      'Onderhoudbare, goed gedocumenteerde code volgens best practices voor lange termijn.',
  },
]

export default function CustomMadePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Code className="h-4 w-4" />
                <span>Custom Webdevelopment</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Webdevelopment op maat{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  voor merken die verder willen
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Soms volstaat een kant-en-klare oplossing niet. Daarom ontwikkelen we websites en 
                webapplicaties volledig op maat — met de juiste architectuur, performance en design. 
                We combineren UX, SEO en conversiegericht design om jouw merk digitaal te laten uitblinken.
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

      {/* Why Custom Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Waarom custom development?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Voor bedrijven die meer willen dan standaard - volledige vrijheid en controle.
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
                  Custom development is ideaal wanneer
                </h2>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card>
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je een unieke merkervaring wil die je onderscheidt van concurrenten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je website moet integreren met bestaande tools, ERP of CRM-systemen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Snelheid, schaalbaarheid en veiligheid cruciaal zijn</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je specifieke functionaliteit nodig hebt die niet bestaat in standaard oplossingen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Je volledige controle en eigenaarschap wil over je digitale platform</span>
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
                  Een complete maatwerk oplossing, gebouwd volgens jouw specificaties.
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
                  Ons proces
                </h2>
                <p className="text-xl text-muted-foreground">
                  Van concept tot lancering, we begeleiden je in elke stap.
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
                      <CardTitle>Discovery & Strategy</CardTitle>
                    </div>
                    <CardDescription className="ml-14">
                      We starten met een grondige analyse van jouw doelen, doelgroep en technische vereisten.
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
                      <CardTitle>Design & Architecture</CardTitle>
                    </div>
                    <CardDescription className="ml-14">
                      We ontwerpen de UX/UI en architectuur, met focus op gebruikerservaring en technische soliditeit.
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
                      <CardTitle>Development & Testing</CardTitle>
                    </div>
                    <CardDescription className="ml-14">
                      We bouwen je website of applicatie met clean code, uitgebreid testen en continue feedback.
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
                      <CardTitle>Launch & Support</CardTitle>
                    </div>
                    <CardDescription className="ml-14">
                      Na de lancering blijven we ondersteunen met onderhoud, updates en optimalisaties.
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
                <Code className="w-6 h-6 text-white" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Klaar voor een digitale oplossing op maat?
              </h2>
              
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Laten we samen verkennen hoe we een unieke, krachtige digitale oplossing kunnen bouwen die perfect aansluit bij jouw visie en doelen.
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

