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
  Wind,
  Lightbulb,
  TrendingUp,
  Sparkles,
  Smile,
  Coffee,
  Rocket,
  ArrowRight,
  Linkedin,
  Mail,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ons Team',
  description:
    'Maak kennis met het Breaz team. Gedreven professionals die geloven in menselijke marketing, customer intimacy en resultaatgerichte groei.',
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    url: 'https://www.breaz-it.be/team',
    siteName: 'Breaz',
    title: 'Ons Team | Breaz',
    description:
      'Maak kennis met het Breaz team. Gedreven professionals die geloven in menselijke marketing, customer intimacy en resultaatgerichte groei.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ons Team | Breaz',
    description:
      'Maak kennis met het Breaz team. Gedreven professionals die geloven in menselijke marketing, customer intimacy en resultaatgerichte groei.',
  },
}

const teamMembers = [
  {
    name: 'Sarah de Vries',
    role: 'Founder & Strategist',
    bio: 'Met 10+ jaar ervaring in B2B marketing helpt Sarah bedrijven hun groeiambities te realiseren. Ze gelooft dat de beste strategieën beginnen bij het écht begrijpen van de klant.',
    email: 'sarah@breaz-it.be',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Mike Jansen',
    role: 'Business Development Lead',
    bio: 'Mike combineert zijn sales achtergrond met een passie voor mensgerichte groei. Hij helpt bedrijven hun salesprocessen te optimaliseren zonder de menselijke touch te verliezen.',
    email: 'mike@breaz-it.be',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Emma van den Berg',
    role: 'Content & Campaign Manager',
    bio: 'Emma vertaalt strategie naar verhalen die resoneren. Van content creatie tot campagne uitvoering, ze zorgt dat je boodschap aankomt bij de juiste mensen.',
    email: 'emma@breaz-it.be',
    linkedin: 'https://linkedin.com',
  },
]

const values = [
  {
    icon: Heart,
    title: 'Menselijkheid',
    description:
      'We geloven in échte connecties. Marketing is niet alleen data en algoritmes, het gaat om mensen die mensen helpen.',
  },
  {
    icon: Target,
    title: 'Resultaatgericht',
    description:
      'Mooie plannen zijn leuk, maar wij focussen op meetbare resultaten die bijdragen aan jouw groei.',
  },
  {
    icon: Lightbulb,
    title: 'Nieuwsgierigheid',
    description:
      'We blijven leren, experimenteren en verbeteren. Stilstand is achteruitgang in de wereld van marketing.',
  },
  {
    icon: Wind,
    title: 'Helderheid',
    description:
      'We maken complexe zaken simpel en zorgen dat je altijd weet waar je staat en waarom.',
  },
  {
    icon: Users,
    title: 'Samenwerking',
    description:
      'We zijn geen bureau dat op afstand werkt, maar een partner die naast je staat en meedenkt.',
  },
  {
    icon: TrendingUp,
    title: 'Duurzame groei',
    description:
      'Quick wins zijn leuk, maar we bouwen aan lange termijn succes dat stand houdt.',
  },
]

const culture = [
  {
    icon: Coffee,
    title: 'Menselijk team',
    description:
      'Geen corporate gedoe, geen jargon. Gewoon échte mensen die hard werken, elkaar helpen en af en toe een grap maken.',
  },
  {
    icon: Rocket,
    title: 'Resultaat gedreven',
    description:
      'We meten onze eigen succes aan jouw succes. Als jij groeit, groeien wij. Dat houdt ons scherp en gemotiveerd.',
  },
  {
    icon: Sparkles,
    title: 'Altijd beter',
    description:
      'We zijn nooit tevreden met "goed genoeg". Elke week leren we iets nieuws en worden we een beetje beter in wat we doen.',
  },
  {
    icon: Smile,
    title: 'Plezier in werk',
    description:
      'Marketing moet leuk zijn. Als we er zelf geen plezier in hebben, hoe kunnen we dan anderen inspireren?',
  },
]

const workingTogether = [
  'We zijn transparant over wat we doen en waarom',
  'Je krijgt directe toegang tot ons team, geen account managers tussendoor',
  'We denken proactief mee en challengen waar nodig',
  'We houden het praktisch en actionable',
  'We vieren successen samen en leren van mislukkingen',
]

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/5 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8">
                <Users className="h-4 w-4" />
                <span className="text-sm font-medium">Ons Team</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                De{' '}
                <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  mensen
                </span>{' '}
                achter Breaz
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8">
                Een klein, gedreven team dat grote dromen helpt realiseren.
                Leer ons kennen en ontdek wat ons drijft.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Maak kennis met het team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Geen corporate foto's of gepolijste biografieën. Dit zijn we,
                écht.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    {/* Profile Image Placeholder */}
                    <div className="w-full aspect-square bg-gradient-to-br from-primary/10 to-blue-100 rounded-lg mb-6 flex items-center justify-center">
                      <Users className="h-16 w-16 text-primary/30" />
                    </div>
                    <CardTitle className="text-2xl">{member.name}</CardTitle>
                    <CardDescription className="text-base">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                    <div className="flex gap-2 pt-2">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a href={`mailto:${member.email}`}>
                          <Mail className="h-4 w-4 mr-2" />
                          Email
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
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
                Dit is waar we in geloven en wat ons werk stuurt. Elke dag
                opnieuw.
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

      {/* Culture */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Hoe we werken
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Onze cultuur in een notendop
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {culture.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Working Together */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Samenwerken met Breaz
              </h2>
              <p className="text-lg text-muted-foreground">
                Wat je kan verwachten als we samen gaan werken
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <Card className="border-2">
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {workingTogether.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-0.5">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Zullen we kennismaken?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Benieuwd of we een goede match zijn? Laten we een
                vrijblijvend gesprek plannen over jouw uitdagingen en
                ambities.
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

