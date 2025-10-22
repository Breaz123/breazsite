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
  Smartphone,
  Globe,
  Zap,
  Shield,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Webdevelopment | Breaz - Websites op maat, WordPress, React & Shopify',
  description:
    'Breaz ontwikkelt performante websites op maat. Van WordPress tot React, Node.js, Tailwind en Shopify: webdevelopment met strategie en resultaat.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten/webdevelopment',
    siteName: 'Breaz',
    title: 'Webdevelopment | Breaz - Websites op maat, WordPress, React & Shopify',
    description:
      'Breaz bouwt websites die presteren. WordPress development, React/Node/Tailwind, Shopify en webdevelopment op maat — strategisch, snel en schaalbaar.',
    images: [
      {
        url: '/og-breaz-webdevelopment.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz webdevelopment - WordPress, React, Shopify en maatwerk',
      },
    ],
  },
}

const services = [
  {
    icon: Code,
    title: 'Webdevelopment op maat',
    subtitle: 'Voor merken die verder willen dan standaard.',
    description:
      'Soms volstaat een kant-en-klare oplossing niet. Daarom ontwikkelen we websites volledig op maat — met de juiste architectuur, performance en design. We combineren UX, SEO en conversiegericht design om jouw merk digitaal te laten uitblinken.',
    link: '/diensten/webdevelopment/custom-made',
  },
  {
    icon: Globe,
    title: 'WordPress Development',
    subtitle: 'Flexibel, gebruiksvriendelijk en SEO-klaar.',
    description:
      'WordPress is ideaal voor bedrijven die zelf hun content willen beheren zonder technische kennis. We bouwen performante WordPress-websites met moderne thema\'s, geoptimaliseerd voor snelheid, beveiliging en vindbaarheid.',
    link: '/diensten/webdevelopment/wordpress-development',
  },
  {
    icon: Zap,
    title: 'React / Next.js / Tailwind CSS',
    subtitle: 'High-performance development voor ambitieuze projecten.',
    description:
      'Voor bedrijven die meer willen dan een standaard website. Met moderne technologieën zoals React, Next.js en Tailwind CSS bouwen we razendsnelle, dynamische webapplicaties en websites die meegroeien met jouw bedrijf.',
    link: '/diensten/webdevelopment/tailwind-react-nextjs',
  },
  {
    icon: Smartphone,
    title: 'Shopify Development',
    subtitle: 'E-commerce met focus op beleving en rendement.',
    description:
      'Shopify is dé oplossing voor bedrijven die hun producten online willen verkopen zonder zorgen. Wij bouwen Shopify-webshops die snel laden, gebruiksvriendelijk zijn en eruitzien alsof ze maatwerk zijn.',
    link: '/diensten/webdevelopment/shopify',
  },
]

export default function WebdevelopmentPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Code className="h-4 w-4" />
                <span>Webdevelopment</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Websites die meer doen dan{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  er goed uitzien.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Bij Breaz bouwen we websites die presteren, converteren en meegroeien met jouw business. 
                Van een flexibele WordPress-site tot een krachtige maatwerkoplossing in React of Shopify — wij 
                ontwikkelen wat jouw merk écht nodig heeft.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Plan een gesprek over jouw project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/aanpak">
                    Bekijk onze realisaties
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Webdevelopment dat vertrekt vanuit strategie.
              </h2>
              <div className="text-lg text-muted-foreground space-y-4 text-left">
                <p>
                  Een goede website is meer dan een digitaal visitekaartje — het is het hart van je merkcommunicatie. 
                  Bij Breaz koppelen we strategisch denken aan technische expertise. 
                  We ontwerpen en ontwikkelen websites die niet alleen mooi zijn, maar ook snel, schaalbaar en gericht op conversie.
                </p>
                <p>
                  Onze aanpak start met een helder plan: wie is je doelgroep, wat wil je bereiken en hoe kunnen we jouw merk digitaal versterken? 
                  Daarna kiezen we de juiste technologie en bouwen we een oplossing die perfect past bij jouw noden.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Vier sporen, één doel: een digitale ervaring die werkt.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 flex flex-col">
                  <CardHeader className="flex-grow">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                    <p className="text-base font-semibold text-primary mb-3">{service.subtitle}</p>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={service.link}>
                        Meer informatie
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Techniek is maar de helft van het verhaal.
                </h2>
                <div className="text-lg text-muted-foreground space-y-4 text-left">
                  <p>
                    Bij Breaz geloven we dat webdevelopment pas echt werkt als het vertrekt vanuit strategie. 
                    Daarom starten we elk project met inzicht in jouw merk, jouw doelgroep en jouw doelen. 
                    We ontwerpen de gebruikerservaring (UX) met jouw klant in gedachten, bouwen alles technisch solide op, en meten vervolgens wat rendeert.
                  </p>
                  <p>
                    Ons doel is niet enkel om een website op te leveren, maar om een digitale motor te bouwen voor jouw groei.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-600 to-primary rounded-2xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500"></div>
                
                <Card className="relative overflow-hidden border-0 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-700"></div>
                  
                  <CardContent className="relative p-12 sm:p-16 text-center text-white">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-8">
                      <Code className="w-8 h-8 text-white" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                      Klaar om digitaal te groeien?
                    </h2>
                    <p className="text-lg sm:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
                      Of je nu een WordPress-site, een Shopify-shop of een maatwerkproject nodig hebt — wij denken met je mee van concept tot lancering. 
                      Plan een vrijblijvend gesprek en ontdek wat Breaz voor jouw digitale groei kan betekenen.
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
                        <Link href="/aanpak">
                          Bekijk onze realisaties
                          <ArrowRight className="ml-2 h-4 w-4" />
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

