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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { AnimatedSection } from '@/components/animated-section'
import { FadeIn } from '@/components/fade-in'
import {
  Target,
  Users,
  MessageSquare,
  BarChart,
  CheckCircle2,
  ArrowRight,
  Zap,
  Globe,
  Mail,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Diensten',
  description:
    'Van strategie tot uitvoering - ontdek hoe Breaz jouw bedrijf helpt groeien met marketing strategie, business development, content creatie en data-gedreven optimalisatie.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz-it.be/diensten',
    siteName: 'Breaz',
    title: 'Diensten | Breaz',
    description:
      'Van strategie tot uitvoering - ontdek hoe Breaz jouw bedrijf helpt groeien met marketing strategie, business development, content creatie en data-gedreven optimalisatie.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diensten | Breaz',
    description:
      'Van strategie tot uitvoering - ontdek hoe Breaz jouw bedrijf helpt groeien met marketing strategie, business development, content creatie en data-gedreven optimalisatie.',
  },
}

const services = [
  {
    id: 'marketing',
    icon: Target,
    title: 'Marketing Strategie',
    subtitle: 'De basis voor duurzaam succes',
    description:
      'Een sterke strategie is het fundament van elke succesvolle marketingcampagne. Wij helpen je de juiste doelgroep te definiëren, een authentieke merkpositionering te creëren en een marketingplan op te stellen dat écht werkt.',
    features: [
      'Doelgroepanalyse & buyer persona ontwikkeling',
      'Merkpositionering & waardepropositie',
      'Concurrentieanalyse & marktonderzoek',
      'Marketing funnel optimalisatie',
      'Go-to-market strategie',
      'Channel strategie & media planning',
    ],
    deliverables: [
      'Uitgebreide doelgroep- en marktanalyse',
      'Marketing strategie document',
      'Customer journey maps',
      'Concrete actieplan met KPIs',
    ],
  },
  {
    id: 'business',
    icon: Users,
    title: 'Business Development',
    subtitle: 'Van leads naar loyale klanten',
    description:
      'Groei gaat verder dan marketing alleen. Wij helpen je salesprocessen optimaliseren, partnerships opbouwen en duurzame klantrelaties creëren die bijdragen aan lange termijn succes.',
    features: [
      'Sales funnel ontwikkeling & optimalisatie',
      'Lead generatie strategieën',
      'Customer journey mapping',
      'Partnership & channel development',
      'Account-based marketing (ABM)',
      'Sales enablement & training',
    ],
    deliverables: [
      'Geoptimaliseerde sales funnel',
      'Lead generatie playbook',
      'Sales collateral & presentaties',
      'Partnership strategie',
    ],
  },
  {
    id: 'content',
    icon: MessageSquare,
    title: 'Content & Campagnes',
    subtitle: 'Verhalen die resoneren en converteren',
    description:
      'Goede content maakt het verschil tussen opvallen en opgaan in de massa. Wij creëren verhalen die jouw doelgroep raken, inspireren tot actie en bijdragen aan je merkautoriteit.',
    features: [
      'Content strategie & planning',
      'Brand storytelling & messaging',
      'Social media campagnes',
      'Thought leadership programmas',
      'Email marketing campagnes',
      'Video & visual content',
    ],
    deliverables: [
      'Content strategie & contentkalender',
      'Social media content & campagnes',
      'Blog artikelen & whitepapers',
      'Email marketing flows',
    ],
  },
  {
    id: 'data',
    icon: BarChart,
    title: 'Data & Optimalisatie',
    subtitle: 'Inzichten die leiden tot betere beslissingen',
    description:
      'Data vertelt het verhaal achter je marketing. Wij analyseren, interpreteren en optimaliseren continu om ervoor te zorgen dat elke euro meetbaar bijdraagt aan je doelen.',
    features: [
      'Marketing analytics & rapportage',
      'A/B testing & conversion optimalisatie',
      'Performance monitoring & dashboards',
      'Marketing attribution modeling',
      'Customer lifetime value analyse',
      'ROI tracking & optimization',
    ],
    deliverables: [
      'Custom analytics dashboards',
      'Maandelijkse performance rapportages',
      'A/B test strategieën & resultaten',
      'Optimalisatie aanbevelingen',
    ],
  },
]

const packages = [
  {
    name: 'Starter',
    description: 'Perfect voor bedrijven die net beginnen met professionele marketing',
    price: 'Op aanvraag',
    features: [
      'Marketing strategie sessie',
      'Buyer persona ontwikkeling',
      'Content kalender (3 maanden)',
      'Maandelijkse rapportage',
    ],
  },
  {
    name: 'Growth',
    description: 'Voor groeiende bedrijven die hun marketing willen professionaliseren',
    price: 'Op aanvraag',
    features: [
      'Volledige marketing strategie',
      'Lead generatie campagnes',
      'Content creatie & distributie',
      'Social media management',
      'Marketing automation',
      'Bi-weekly strategie sessies',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'Voor gevestigde bedrijven die maximale impact willen',
    price: 'Op aanvraag',
    features: [
      'Dedicated marketing team',
      'Volledige funnel optimalisatie',
      'Multi-channel campagnes',
      'Advanced analytics & BI',
      'Sales enablement programma',
      'Weekly strategie sessies',
    ],
  },
]

export default function DienstenPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                Diensten die{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  impact maken
                </span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-xl text-muted-foreground mb-8">
                Van strategie tot uitvoering - wij ondersteunen je in elke fase
                van je groeitraject met diensten die écht bijdragen aan je
                succes.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.1}>
                <div
                  id={service.id}
                  className="scroll-mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
                >
                  <div>
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold mb-3">{service.title}</h2>
                    <p className="text-lg text-primary mb-4">
                      {service.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <Button asChild>
                      <Link href="/contact">
                        Bespreek dit project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Wat we doen</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Wat je krijgt</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {service.deliverables.map((deliverable) => (
                            <li key={deliverable} className="flex items-start">
                              <Zap className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Samenwerkingsmodellen
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Of je nu net begint of al een gevestigde speler bent, we hebben
                een aanpak die bij je past.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <AnimatedSection key={pkg.name} delay={index * 0.1}>
                <Card
                  className={`h-full ${
                    pkg.highlighted
                      ? 'border-primary border-2 shadow-lg scale-105'
                      : ''
                  }`}
                >
                  <CardHeader>
                    {pkg.highlighted && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium w-fit mb-2">
                        Meest gekozen
                      </div>
                    )}
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-base">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <p className="text-3xl font-bold">{pkg.price}</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full"
                      variant={pkg.highlighted ? 'default' : 'outline'}
                    >
                      <Link href="/contact">Neem contact op</Link>
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Veelgestelde vragen
              </h2>
              <p className="text-lg text-muted-foreground">
                Alles wat je moet weten over onze diensten
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Hoe lang duurt een gemiddeld project?
                </AccordionTrigger>
                <AccordionContent>
                  De duur verschilt per project en dienst. Een marketing
                  strategie traject duurt gemiddeld 4-6 weken, terwijl
                  doorlopende samenwerking voor content en campagnes vaak op
                  maandbasis wordt georganiseerd. We stemmen de tijdlijn altijd
                  af op jouw specifieke behoeften en doelen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Werken jullie met bedrijven in mijn sector?
                </AccordionTrigger>
                <AccordionContent>
                  We hebben ervaring met diverse B2B en B2C sectoren, van tech
                  en SaaS tot professional services en e-commerce. Onze aanpak
                  is altijd op maat - we duiken diep in jouw specifieke markt om
                  strategieën te ontwikkelen die werken in jouw context.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Wat maakt jullie aanpak anders?
                </AccordionTrigger>
                <AccordionContent>
                  Wij combineren strategisch inzicht met menselijkheid. Waar
                  veel bureaus focussen op outputs (posts, campagnes, reports),
                  focussen wij op outcomes (groei, conversies, klantwaarde). We
                  nemen de tijd om jouw business écht te begrijpen en bouwen
                  langdurige partnerships in plaats van eenmalige projecten.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Kan ik één dienst afnemen of moet het een pakket zijn?
                </AccordionTrigger>
                <AccordionContent>
                  Beide! Je kunt individuele diensten afnemen zoals een
                  eenmalige strategiesessie of marketing audit. Voor optimale
                  resultaten raden we wel een integrale aanpak aan, omdat
                  marketing en business development het beste werken als
                  samenhangend geheel.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Hoe meten jullie succes?
                </AccordionTrigger>
                <AccordionContent>
                  We definiëren bij aanvang duidelijke KPIs die aansluiten bij
                  jouw business doelen. Dit kunnen metrics zijn zoals lead
                  volume, conversie percentages, customer acquisition cost,
                  lifetime value, of omzetgroei. We rapporteren transparant en
                  frequent, zodat je altijd weet waar je staat.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Laten we kennismaken
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Benieuwd hoe we jouw bedrijf kunnen helpen groeien? Plan een
                vrijblijvend kennismakingsgesprek in.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-base"
              >
                <Link href="/contact">
                  Start een gesprek
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

