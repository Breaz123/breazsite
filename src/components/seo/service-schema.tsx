import React from 'react';

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  category?: string;
  areaServed?: string[];
  hasOfferCatalog?: boolean;
  offers?: Array<{
    name: string;
    description: string;
    price?: string;
  }>;
}

export function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceUrl,
  category = "Marketing Services",
  areaServed = ["Belgium"],
  hasOfferCatalog = true,
  offers = []
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "url": serviceUrl,
    "category": category,
    "serviceType": category,
    "provider": {
      "@type": "Organization",
      "name": "Breaz",
      "url": "https://www.breaz-it.be",
      "logo": "https://www.breaz-it.be/logo.png"
    },
    "areaServed": areaServed.map(area => ({
      "@type": "Country",
      "name": area
    })),
    "availableLanguage": ["Dutch", "English"],
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Belgian businesses"
    },
    "offers": hasOfferCatalog ? {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR",
      "priceValidUntil": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "itemOffered": {
        "@type": "Service",
        "name": serviceName,
        "description": serviceDescription
      }
    } : undefined,
    "hasOfferCatalog": hasOfferCatalog ? {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
      "itemListElement": offers.map(offer => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": offer.name,
          "description": offer.description
        },
        "price": offer.price || "Contact for pricing",
        "priceCurrency": "EUR"
      }))
    } : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}

// Predefined service schemas for different pages
export const marketingServiceSchema = {
  serviceName: "Marketing Strategie & Branding",
  serviceDescription: "Breaz helpt bedrijven in België met strategische marketing, merkontwikkeling en brand positioning. We creëren duurzame merken die resoneren met de Belgische markt en cultuur.",
  serviceUrl: "https://www.breaz-it.be/diensten/marketing",
  category: "Marketing Services",
  offers: [
    {
      name: "Merkstrategie & Positionering",
      description: "Ontwikkeling van een sterke merkidentiteit en positionering in de Belgische markt",
      price: "Vanaf €2,500"
    },
    {
      name: "Content Marketing & Storytelling",
      description: "Creëren van authentieke content die je doelgroep raakt en betrekt",
      price: "Vanaf €1,800"
    },
    {
      name: "Online Zichtbaarheid & SEO",
      description: "Verbetering van je online zichtbaarheid en zoekmachine rankings in België",
      price: "Vanaf €1,200"
    },
    {
      name: "Campagnes & Social Media",
      description: "Ontwikkeling en uitvoering van gerichte marketing campagnes",
      price: "Vanaf €2,000"
    }
  ]
};

export const salesServiceSchema = {
  serviceName: "Sales Coaching & Training",
  serviceDescription: "Breaz verbetert je sales prestaties via coaching, training en procesoptimalisatie. We helpen sales teams om betere resultaten te behalen door menselijke verkooptechnieken.",
  serviceUrl: "https://www.breaz-it.be/diensten/sales",
  category: "Sales Services",
  offers: [
    {
      name: "Sales Coaching & Training",
      description: "Persoonlijke coaching en teamtraining voor betere sales prestaties",
      price: "Vanaf €1,500"
    },
    {
      name: "Funnelanalyse & Conversieoptimalisatie",
      description: "Analyse en optimalisatie van je sales funnel voor hogere conversies",
      price: "Vanaf €2,000"
    },
    {
      name: "CRM & Procesondersteuning",
      description: "Implementatie en optimalisatie van CRM systemen en sales processen",
      price: "Vanaf €1,800"
    },
    {
      name: "Marketing-Sales Alignement",
      description: "Betere samenwerking tussen marketing en sales teams",
      price: "Vanaf €2,200"
    }
  ]
};

export const businessDevelopmentSchema = {
  serviceName: "Business Development & Strategie",
  serviceDescription: "Breaz helpt bedrijven groeien via strategische business development, marktanalyse en partnerships. We creëren duurzame groeistrategieën voor de Belgische markt.",
  serviceUrl: "https://www.breaz-it.be/diensten/business-development",
  category: "Business Development Services",
  offers: [
    {
      name: "Strategische Roadmap & Groeiplan",
      description: "Ontwikkeling van een complete groeistrategie en roadmap",
      price: "Vanaf €3,000"
    },
    {
      name: "Markt- & Concurrentieanalyse",
      description: "Diepgaande analyse van je markt en concurrentiepositie",
      price: "Vanaf €2,500"
    },
    {
      name: "Partnerschappen & Samenwerkingstrajecten",
      description: "Identificatie en ontwikkeling van strategische partnerships",
      price: "Vanaf €2,000"
    },
    {
      name: "Innovatie & Diversificatie",
      description: "Strategieën voor innovatie en marktdiversificatie",
      price: "Vanaf €2,800"
    }
  ]
};

export const webDevelopmentSchema = {
  serviceName: "Web Development & Digitale Oplossingen",
  serviceDescription: "Breaz ontwikkelt moderne websites en webapplicaties die converteren. We gebruiken cutting-edge technologieën en optimaliseren voor de Belgische markt.",
  serviceUrl: "https://www.breaz-it.be/diensten/webdevelopment",
  category: "Web Development Services",
  offers: [
    {
      name: "React & Next.js Development",
      description: "Moderne webapplicaties met React en Next.js",
      price: "Vanaf €3,500"
    },
    {
      name: "WordPress Development",
      description: "Custom WordPress websites en thema's",
      price: "Vanaf €2,000"
    },
    {
      name: "Custom Made Webapplicaties",
      description: "Op maat gemaakte webapplicaties en systemen",
      price: "Vanaf €5,000"
    },
    {
      name: "Shopify E-commerce",
      description: "E-commerce oplossingen met Shopify",
      price: "Vanaf €2,500"
    }
  ]
};
