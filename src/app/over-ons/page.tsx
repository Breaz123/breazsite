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
  Heart,
  Users,
  Target,
  TrendingUp,
  Wind,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Over Ons',
  description:
    'Leer Breaz kennen - een marketing & business development agency die gelooft in menselijke connectie, customer intimacy en resultaatgerichte groei. Ontdek onze visie, missie en werkwijze.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz-it.be/over-ons',
    siteName: 'Breaz',
    title: 'Over Ons | Breaz',
    description:
      'Leer Breaz kennen - een marketing & business development agency die gelooft in menselijke connectie, customer intimacy en resultaatgerichte groei.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Over Ons | Breaz',
    description:
      'Leer Breaz kennen - een marketing & business development agency die gelooft in menselijke connectie, customer intimacy en resultaatgerichte groei.',
  },
}

const values = [
  {
    icon: Heart,
    title: 'Menselijkheid voorop',
    description:
      'In een wereld vol automatisering en AI, geloven wij dat échte connecties het verschil maken. We behandelen jouw klanten zoals we zelf behandeld willen worden: met respect, empathie en aandacht.',
  },
  {
    icon: Users,
    title: 'Customer intimacy',
    description:
      'De klant écht begrijpen is onze kernstrategie. We investeren tijd in het doorgronden van hun behoeften, motivaties en uitdagingen. Alleen zo kun je marketing en sales creëren die resoneren.',
  },
  {
    icon: Target,
    title: 'Resultaatgericht',
    description:
      'Mooie campagnes zijn leuk, maar wij focussen op wat écht telt: meetbare resultaten. Elke actie die we ondernemen moet bijdragen aan jouw groei - of we doen het niet.',
  },
  {
    icon: Wind,
    title: 'Helderheid & eenvoud',
    description:
      'Marketing hoeft niet ingewikkeld te zijn. We brengen structuur in chaos, maken complexe strategieën begrijpelijk en zorgen dat je altijd weet waar je staat en waarom.',
  },
  {
    icon: Lightbulb,
    title: 'Continue verbetering',
    description:
      'We zijn nooit tevreden met "goed genoeg". Door continue te testen, leren en optimaliseren, blijven we voorop lopen en halen we meer uit elke campagne, elk kanaal en elk budget.',
  },
  {
    icon: TrendingUp,
    title: 'Lange termijn denken',
    description:
      'Quick wins zijn leuk, maar échte groei bouw je op de lange termijn. We ontwikkelen strategieën die nu werken én een fundament leggen voor duurzaam succes.',
  },
]

const principles = [
  {
    title: 'We kiezen kwaliteit boven kwantiteit',
    description:
      'Liever een klein aantal klanten waar we écht impact voor maken, dan veel klanten die we oppervlakkig bedienen.',
  },
  {
    title: 'We zijn transparant over wat wel en niet werkt',
    description:
      'Marketing is geen exacte wetenschap. We delen openlijk onze successen én learnings, zodat je altijd weet waar je aan toe bent.',
  },
  {
    title: 'We denken mee als sparringpartner',
    description:
      'Je huurt niet alleen onze handen, maar ook onze hersenen. We challengen, adviseren en denken proactief mee over jouw business.',
  },
  {
    title: 'We houden het praktisch',
    description:
      'Theoretische plannen die stof verzamelen? Niet bij ons. We leveren concrete, uitvoerbare strategieën met duidelijke next steps.',
  },
]

export default function OverOnsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
                <Wind className="h-4 w-4" />
                <span className="text-sm font-medium">Over Breaz</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Marketing met een{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  menselijk gezicht
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8">
                Wij geloven dat de beste marketing begint bij het écht begrijpen
                van mensen. Niet als data points of target audiences, maar als
                mensen met dromen, uitdagingen en ambities.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-8">Waarom Breaz bestaat</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                In een wereld die steeds digitaler en geautomatiseerder wordt,
                voelt marketing vaak koud en afstandelijk aan. Generieke
                campagnes, agressieve sales tactieken en oppervlakkige
                "engagement" - het werkt misschien op de korte termijn, maar het
                bouwt geen echte relaties op.
              </p>
              <p>
                Wij zagen bedrijven worstelen met marketing die niet aansloot
                bij wie ze werkelijk zijn. Strategieën die op papier kloppen
                maar in de praktijk niet landen. Campagnes die wel bereik
                genereren maar geen conversie.
              </p>
              <p>
                Daarom startten we Breaz. Een plek waar menselijkheid en
                resultaat samenkomen. Waar we de tijd nemen om te luisteren,
                te begrijpen en strategieën te ontwikkelen die écht passen bij
                jouw bedrijf én jouw klanten.
              </p>
              <p className="text-primary font-medium">
                De naam "Breaz" staat voor de frisse wind die we willen brengen:
                helder, verkwikkend en met beweging voorwaarts.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Onze waarden
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deze principes sturen alles wat we doen - van strategie tot
                uitvoering.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <Card className="h-full border-2 hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <h2 className="text-3xl font-bold mb-12 text-center">
              Hoe we werken
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            {principles.map((principle, index) => (
              <AnimatedSection key={principle.title} delay={index * 0.1}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Onze aanpak in het kort
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Voor B2B bedrijven</CardTitle>
                  <CardDescription>
                    Die hun sales & marketing willen professionaliseren
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Account-based marketing strategieën
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Lead nurturing & conversion optimalisatie
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Sales enablement & content development
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Thought leadership positionering
                    </span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Voor scale-ups</CardTitle>
                  <CardDescription>
                    Die snel willen groeien zonder hun identiteit te verliezen
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Go-to-market strategieën
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Merkpositionering & brand identity
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Growth marketing & experimentation
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">
                      Marketing team opbouw & training
                    </span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Klinkt dit als wat je zoekt?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Laten we kennismaken en ontdekken of we een goede match zijn.
                Een vrijblijvend gesprek over jouw uitdagingen en ambities.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base"
              >
                <Link href="/contact">
                  Plan een kennismaking
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

