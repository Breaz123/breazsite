import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

// Predefined FAQ data for different pages
export const homePageFAQs: FAQItem[] = [
  {
    question: "Wat maakt Breaz anders dan andere marketing bureaus in België?",
    answer: "Breaz onderscheidt zich door onze menselijke aanpak. We geloven dat echte groei begint bij begrip - van de markt, de klant en jouw organisatie. In tegenstelling tot standaard marketing bureaus, combineren we strategisch inzicht met persoonlijke aandacht, zodat elk plan perfect aansluit bij jouw doelen en waarden."
  },
  {
    question: "Welke diensten biedt Breaz aan voor Belgische bedrijven?",
    answer: "Breaz biedt vier hoofddiensten: Marketing (merkstrategie, content marketing, SEO), Sales (coaching, training, CRM optimalisatie), Business Development (strategische groei, partnerships) en Web Development (moderne websites, webapplicaties). Al onze diensten zijn specifiek afgestemd op de Belgische markt en cultuur."
  },
  {
    question: "Hoe werkt de aanpak van Breaz voor customer intimacy?",
    answer: "Onze customer intimacy aanpak begint met luisteren. We verdiepen ons in jouw klanten, hun behoeften en gedrag. Vervolgens bouwen we een strategie die niet alleen marketing en sales verbetert, maar ook diepere, duurzame relaties creëert. Dit resulteert in meer vertrouwen, hogere klantloyaliteit en betere resultaten op lange termijn."
  },
  {
    question: "In welke regio's van België is Breaz actief?",
    answer: "Breaz is actief in heel België, met speciale focus op Vlaanderen. We werken met bedrijven in Brussel, Antwerpen, Gent, Leuven, Mechelen en alle andere Belgische steden. Onze digitale aanpak maakt het mogelijk om effectief samen te werken, ongeacht de locatie."
  },
  {
    question: "Wat zijn de tarieven van Breaz voor marketing en sales diensten?",
    answer: "Onze tarieven variëren afhankelijk van de specifieke diensten en omvang van het project. We bieden transparante pricing en werken vaak op projectbasis of retainer. Neem contact op voor een vrijblijvend gesprek en een op maat gemaakte offerte die past bij jouw budget en doelen."
  }
];

export const servicesPageFAQs: FAQItem[] = [
  {
    question: "Welke marketing strategieën zijn het meest effectief in België?",
    answer: "In België werken vooral content marketing, lokale SEO en sociale media marketing zeer goed. Belgische consumenten waarderen authenticiteit en lokale betrokkenheid. We focussen op storytelling, community building en persoonlijke relaties, wat perfect aansluit bij de Belgische cultuur en markt."
  },
  {
    question: "Hoe kan Breaz mijn sales team verbeteren?",
    answer: "We verbeteren je sales team via coaching, procesoptimalisatie en CRM training. Onze aanpak combineert technische vaardigheden met soft skills, zodat je team niet alleen beter verkoopt, maar ook sterkere relaties bouwt met klanten. We meten resultaten en passen onze aanpak continu aan."
  },
  {
    question: "Wat is het verschil tussen marketing en business development bij Breaz?",
    answer: "Marketing focust op zichtbaarheid en klantacquisitie, terwijl business development zich richt op strategische groei, partnerships en nieuwe marktkansen. Bij Breaz werken beide disciplines nauw samen om duurzame groei te creëren - van merkbekendheid tot nieuwe business opportunities."
  },
  {
    question: "Biedt Breaz ook web development diensten?",
    answer: "Ja, Breaz biedt complete web development diensten, van moderne websites tot complexe webapplicaties. We gebruiken moderne technologieën zoals React, Next.js en Tailwind CSS. Onze websites zijn geoptimaliseerd voor conversie, SEO en gebruiksvriendelijkheid, specifiek afgestemd op de Belgische markt."
  }
];

export const contactPageFAQs: FAQItem[] = [
  {
    question: "Hoe kan ik contact opnemen met Breaz?",
    answer: "Je kunt ons bereiken via email (info@breaz-it.be), telefoon of ons contactformulier op de website. We reageren doorgaans binnen 24 uur op alle vragen. Voor dringende zaken kun je ons direct bellen tijdens kantooruren."
  },
  {
    question: "Biedt Breaz een gratis intakegesprek aan?",
    answer: "Ja, we bieden een vrijblijvend intakegesprek aan om jouw situatie en behoeften te bespreken. Dit gesprek helpt ons om te begrijpen hoe we jou het beste kunnen helpen en geeft jou de kans om kennis te maken met onze aanpak."
  },
  {
    question: "Werkt Breaz ook met internationale klanten?",
    answer: "Hoewel we ons specialiseren in de Belgische markt, werken we ook graag met internationale klanten die actief zijn in België of de Benelux. Onze expertise in lokale markten en culturele nuances is waardevol voor buitenlandse bedrijven."
  }
];
