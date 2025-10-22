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
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Code,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Diensten | Breaz - Marketing, Sales, Business Development & Webdevelopment',
  description:
    'Breaz helpt bedrijven groeien via vier pijlers: marketing, sales, business development en webdevelopment. Ontdek onze strategie voor duurzame groei.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz.be/diensten',
    siteName: 'Breaz',
    title: 'Diensten | Breaz - Marketing, Sales, Business Development & Webdevelopment',
    description:
      'Breaz begeleidt bedrijven in marketing, sales, business development en webdevelopment. Met customer intimacy als kern creëren we duurzame groei.',
    images: [
      {
        url: '/og-breaz-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Breaz diensten - marketing, sales en business development',
      },
    ],
  },
}

const pillars = [
  {
    id: 'marketing',
    icon: Target,
    title: 'Marketing',
    subtitle: 'de zichtbare motor van groei',
    tagline: 'Bouw een merk dat raakt.',
    description:
      'Marketing is meer dan reclame. Het is het verhaal dat je vertelt, en hoe je dat doet op elk moment dat iemand met jouw merk in contact komt. Wij helpen je om dat verhaal helder te maken en consequent uit te dragen — via strategie, content en campagnes die vertrouwen wekken.',
    features: [
      'Merkstrategie & positionering',
      'Contentcreatie & storytelling',
      'Online zichtbaarheid & SEO',
      'Campagnes en social media',
    ],
    link: '/diensten/marketing',
  },
  {
    id: 'sales',
    icon: Users,
    title: 'Sales',
    subtitle: 'van gesprek naar vertrouwen',
    tagline: 'Verkoop begint bij luisteren.',
    description:
      'Een sterk product verkoopt niet vanzelf. Daarom helpt Breaz bedrijven om hun verkoopaanpak menselijker en efficiënter te maken. We brengen structuur, inzicht en empathie samen zodat jouw team beter begrijpt wat klanten nodig hebben — en daar overtuigend op kan inspelen.',
    features: [
      'Salescoaching & training',
      'Funnelanalyse & conversieoptimalisatie',
      'CRM & procesondersteuning',
      'Marketing–sales alignment',
    ],
    link: '/diensten/sales',
  },
  {
    id: 'business-development',
    icon: TrendingUp,
    title: 'Business Development',
    subtitle: 'strategie met toekomst',
    tagline: 'Groei met richting en lef.',
    description:
      'Business development gaat over het creëren van kansen. Nieuwe markten, nieuwe samenwerkingen en nieuwe producten — maar altijd vanuit een duidelijke strategie. Wij helpen je om de juiste keuzes te maken, te focussen op wat rendeert en te bouwen aan duurzame groei.',
    features: [
      'Strategische roadmap & groeiplan',
      'Markt- en concurrentieanalyse',
      'Partnerschappen & samenwerkingstrajecten',
      'Innovatie & diversificatie',
    ],
    link: '/diensten/business-development',
  },
  {
    id: 'webdevelopment',
    icon: Code,
    title: 'Webdevelopment',
    subtitle: 'digitale oplossingen die werken',
    tagline: 'Websites die converteren.',
    description:
      'Een website is vaak het eerste contact tussen jou en je klanten. Daarom bouwen wij digitale oplossingen die niet alleen mooi zijn, maar ook gebruiksvriendelijk, snel en effectief. Van moderne websites tot complexe webapplicaties — altijd met focus op jouw doelen en resultaten.',
    features: [
      'Website development',
      'Webapplicaties op maat',
      'Responsive & mobile-first design',
      'Onderhoud & optimalisatie',
    ],
    link: '/diensten/webdevelopment',
  },
]

export default function DienstenPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Eén visie. Vier pijlers.{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Duurzame groei.
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-muted-foreground mb-6">
                Breaz helpt bedrijven groeien via marketing, sales, business development en webdevelopment —<br />
                met strategieën die vertrekken vanuit inzicht en eindigen bij resultaat.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="prose prose-lg mx-auto text-muted-foreground mb-8">
                <p className="mb-4">
                  Elke onderneming wil groeien. Maar echte groei vraagt meer dan alleen cijfers of campagnes.
                  Het vraagt om richting, structuur en mensen die begrijpen waar je naartoe wil.
                  Daarom werkt Breaz volgens vier samenhangende pijlers: marketing, sales, business development en webdevelopment.
                </p>
                <p className="font-medium text-foreground">
                  Vier invalshoeken, één doel: jouw bedrijf laten groeien op een manier die menselijk, duurzaam en winstgevend is.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/aanpak">
                    Ontdek onze aanpak
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">
                    Plan een intakegesprek
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sectie: Onze Visie op Groei */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Groei ontstaat waar strategie en mens elkaar ontmoeten.
              </h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="mb-4">
                  Wij geloven dat groei niet toevallig is. Het is het resultaat van duidelijke keuzes, goede communicatie en sterke relaties.
                  Daarom werken we niet met standaardtrajecten, maar bouwen we samen met jou een plan op maat —
                  waarbij elke pijler inspeelt op een ander aspect van jouw organisatie.
                </p>
                <p>
                  Of je nu nood hebt aan een helder marketingplan, een sterker salesproces of een langetermijnstrategie voor groei,
                  Breaz begeleidt je stap voor stap met focus op wat écht telt: klanten die blijven, teams die groeien en resultaten die standhouden.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sectie: De Vier Pijlers van Breaz */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                De vier pijlers van Breaz
              </h2>
            </div>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto space-y-12">
            {pillars.map((pillar, index) => (
              <AnimatedSection key={pillar.id} delay={index * 0.1}>
                <Card className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-5 bg-primary/5 p-8 flex flex-col justify-center">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                        <pillar.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="mb-2">
                        <span className="text-sm font-medium text-primary uppercase tracking-wide">
                          {index + 1}. {pillar.title}
                        </span>
                      </div>
                      <p className="text-lg text-muted-foreground italic mb-4">
                        {pillar.subtitle}
                      </p>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                        {pillar.tagline}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {pillar.description}
                      </p>
                      <Button asChild variant="outline" className="w-fit">
                        <Link href={pillar.link}>
                          Lees meer over {pillar.title.toLowerCase()}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    <div className="lg:col-span-7 p-8 flex items-center">
                      <div className="w-full">
                        <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-4">
                          Voorbeelden van wat we doen
                        </h4>
                        <ul className="space-y-3">
                          {pillar.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sectie: Onze Aanpak */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Van strategie tot resultaat — stap voor stap
              </h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p className="mb-4">
                  We starten niet met een pitch, maar met een gesprek.
                  We luisteren naar je doelen, je uitdagingen en je ambities.
                  Van daaruit bouwen we een traject dat past bij jouw tempo, jouw team en jouw klanten.
                </p>
                <p>
                  Onze samenwerking is flexibel, transparant en volledig op maat.
                  Zo haal je het maximum uit je marketing, sales én business development — zonder de mens uit het oog te verliezen.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sectie: Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="relative group">
                {/* Animated gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-blue-600 to-primary rounded-2xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition duration-500 animate-pulse"></div>
                
                {/* Main card */}
                <Card className="relative overflow-hidden border-0 shadow-2xl">
                  {/* Gradient background with animated overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-700"></div>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMCAwdjJoLTJ2LTJoMnptLTIgMnYyaC0ydi0yaDJ6bS0yIDBoMnYyaC0ydi0yem0yLTJ2MmgtMnYtMmgyem0wLTJ2Mmgtdi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
                  
                  <CardContent className="relative p-12 sm:p-16 text-center text-white">
                    {/* Animated icon or decoration */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-8 group-hover:scale-110 transition-transform duration-500">
                      <TrendingUp className="w-8 h-8 text-white animate-bounce" />
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transform group-hover:scale-105 transition-transform duration-300">
                      Klaar om samen te bouwen aan groei?
                    </h2>
                    <p className="text-lg sm:text-xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
                      Plan een vrijblijvend intakegesprek met Breaz en ontdek hoe we jouw marketing, sales en business development op één lijn brengen.
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
                          Ontdek onze aanpak
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute top-10 left-10 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
                    <div className="absolute bottom-20 right-20 w-2 h-2 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 right-10 w-2 h-2 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
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

