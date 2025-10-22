"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Target, TrendingUp, Users, Lightbulb, Heart, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Groei begint bij{" "}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                mensen.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Breaz helpt bedrijven sterker verbinden met hun klanten via marketing, sales en business development die wérkt.
              Geen loze beloftes, maar échte groei door inzicht, strategie en vertrouwen.
            </motion.p>

            {/* USP's */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid gap-6 md:grid-cols-3 mb-10 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <p className="text-base text-foreground/80">
                  Marketing die klanten aantrekt, niet opjaagt.
                </p>
              </div>
              <div className="text-center">
                <p className="text-base text-foreground/80">
                  Sales die luistert en overtuigt.
                </p>
              </div>
              <div className="text-center">
                <p className="text-base text-foreground/80">
                  Business development dat duurzame relaties bouwt.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <Button variant="primary" size="lg" asChild>
                <Link href="/contact">
                  Plan een intakegesprek
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link href="/aanpak">
                  Ontdek onze aanpak
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Waarom Breaz */}
      <Section className="bg-blue-50/50 dark:bg-blue-950/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Waarom Breaz anders is.
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We geloven niet in snelle trucjes, wel in duurzame groei door begrip.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-4xl space-y-6 text-lg leading-relaxed"
          >
            <p>
              Bij Breaz draait alles rond mensen — jouw klanten, jouw team en jouw doelen.
              We combineren strategisch inzicht met een persoonlijke aanpak, zodat elk plan klopt met wie jij bent als organisatie.
            </p>
            <p>
              Onze kracht? We luisteren eerst, handelen daarna.
              We vertalen jouw ambities naar concrete acties binnen drie pijlers: marketing, sales en business development.
              Zo zorgen we dat elke stap bijdraagt aan meer vertrouwen, meer klanten en meer groei.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* De drie pijlers */}
      <Section>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              De drie pijlers van Breaz
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-xl transition-all hover:shadow-xl flex"
              >
                {/* Card content */}
                <div className="relative rounded-xl border border-border bg-card p-8 w-full flex flex-col overflow-hidden">
                  {/* Animated shine traveling along borders */}
                  <span className="border-shine-line" style={{ animationDelay: `${index * 0.5}s` }} />
                  
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {pillar.icon}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{pillar.title}</h3>
                  <h4 className="mb-4 text-lg font-semibold text-primary">{pillar.subtitle}</h4>
                  <p className="mb-6 text-muted-foreground leading-relaxed flex-grow">{pillar.description}</p>
                  <ul className="space-y-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Onze aanpak */}
      <Section className="bg-yellow-50/30 dark:bg-yellow-950/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Customer intimacy als groeimotor
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                We luisteren eerst.
                Want echte groei begint bij inzicht — in de markt, de klant en jezelf.
                Van daaruit bouwen we een strategie die menselijk, haalbaar en meetbaar is.
              </p>
              <p>
                Onze samenwerking is transparant, gefaseerd en gefocust op resultaat.
                Geen standaardformules, maar een traject dat met jou meebeweegt.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Wat onze klanten zeggen
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-xl border bg-card p-8 shadow-sm"
              >
                <div className="mb-4 text-4xl text-primary/20">"</div>
                <p className="mb-6 text-lg leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-orange-50/30 dark:bg-orange-950/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-blue-600 px-8 py-16 text-center text-primary-foreground shadow-2xl md:px-16"
          >
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Klaar om samen te groeien?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">
                Breaz helpt bedrijven groeien via marketing, sales en business development met een menselijke touch.
                Plan vandaag een vrijblijvend gesprek en ontdek waar jouw volgende groeikans ligt.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                  <Link href="/contact">
                    Plan een gesprek
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/10" asChild>
                  <Link href="/aanpak">
                    Ontdek onze aanpak →
                  </Link>
                </Button>
              </div>
            </div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          </motion.div>
        </div>
      </Section>
    </>
  );
}

const pillars = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Marketing",
    subtitle: "Strategie met inhoud.",
    description:
      "Wij bouwen merken die spreken vanuit hun waarden. Van positionering tot campagne — elk stuk content en elke boodschap vertrekt vanuit één vraag: wat raakt je klant écht?",
    items: [
      "Merkstrategie en positionering",
      "Campagneontwikkeling",
      "Contentmarketing en copywriting",
      "Digitale zichtbaarheid en SEO",
    ],
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Sales",
    subtitle: "Verkopen met vertrouwen.",
    description:
      "Sales draait niet om pushen, maar om begrijpen. We helpen jouw salesafdeling efficiënter werken, beter luisteren en sterker connecteren.",
    items: [
      "Salescoaching en opleiding",
      "Funnel- en CRM-optimalisatie",
      "Lead nurturing & follow-up strategieën",
      "Samenwerking marketing ↔ sales verbeteren",
    ],
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Business Development",
    subtitle: "Groeien met richting.",
    description:
      "Echte groei komt uit structuur én lef. We ondersteunen bedrijven in het creëren van nieuwe marktopportuniteiten, partnerschappen en strategische keuzes.",
    items: [
      "Strategische roadmap",
      "Nieuwe markten en partnerships",
      "Procesanalyse en schaalstrategie",
      "Innovatie- en groeiplannen",
    ],
  },
];

const testimonials = [
  {
    quote:
      "De aanpak van Breaz is anders. Geen agency-praat, maar mensen die écht meedenken. Onze marketing en sales lopen eindelijk in één lijn.",
    name: "Tom",
    role: "Zaakvoerder bij Nova Solutions",
  },
  {
    quote:
      "Breaz hielp ons de juiste keuzes maken voor groei. Hun mix van strategie en menselijke aanpak maakt echt het verschil.",
    name: "Sarah",
    role: "Marketing Manager bij Veralux",
  },
];
