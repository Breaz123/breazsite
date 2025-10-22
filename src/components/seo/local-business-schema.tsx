import React from 'react';

interface LocalBusinessSchemaProps {
  businessName?: string;
  businessType?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  contactInfo?: {
    telephone?: string;
    email?: string;
    website?: string;
  };
  openingHours?: string[];
  priceRange?: string;
  paymentAccepted?: string[];
  currenciesAccepted?: string;
}

export function LocalBusinessSchema({
  businessName = "Breaz",
  businessType = "Marketing Agency",
  address = {
    addressLocality: "Brussel",
    addressRegion: "Vlaanderen",
    addressCountry: "BE"
  },
  geo = {
    latitude: 50.8503,
    longitude: 4.3517
  },
  contactInfo = {
    telephone: "+32-XXX-XXX-XXX",
    email: "info@breaz-it.be",
    website: "https://www.breaz-it.be"
  },
  openingHours = ["Mo-Fr 09:00-18:00"],
  priceRange = "€€",
  paymentAccepted = ["Cash", "Credit Card", "Bank Transfer"],
  currenciesAccepted = "EUR"
}: LocalBusinessSchemaProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.breaz-it.be/#business",
    "name": businessName,
    "description": "Marketing, Sales & Business Development specialist in België. We helpen bedrijven groeien via strategie, customer intimacy en duurzame relaties.",
    "url": contactInfo.website,
    "logo": "https://www.breaz-it.be/logo.png",
    "image": "https://www.breaz-it.be/og-breaz.jpg",
    "telephone": contactInfo.telephone,
    "email": contactInfo.email,
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Belgium"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Flanders"
      },
      {
        "@type": "AdministrativeArea", 
        "name": "Wallonia"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Brussels"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": geo.latitude,
        "longitude": geo.longitude
      },
      "geoRadius": "300000"
    },
    "openingHoursSpecification": openingHours.map(hours => ({
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": hours.split(' ')[0].split(',').map(day => {
        const dayMap: { [key: string]: string } = {
          'Mo': 'Monday',
          'Tu': 'Tuesday', 
          'We': 'Wednesday',
          'Th': 'Thursday',
          'Fr': 'Friday',
          'Sa': 'Saturday',
          'Su': 'Sunday'
        };
        return dayMap[day] || day;
      }),
      "opens": hours.split(' ')[1]?.split('-')[0] || "09:00",
      "closes": hours.split(' ')[1]?.split('-')[1] || "18:00"
    })),
    "priceRange": priceRange,
    "paymentAccepted": paymentAccepted,
    "currenciesAccepted": currenciesAccepted,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marketing & Business Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Strategy",
            "description": "Strategische marketing en merkontwikkeling voor Belgische bedrijven"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sales Training",
            "description": "Sales coaching en optimalisatie voor betere resultaten"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Development",
            "description": "Strategische groei en partnerships in België"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Moderne websites en webapplicaties die converteren"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "12",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Tom"
        },
        "reviewBody": "De aanpak van Breaz is anders. Geen agency-praat, maar mensen die écht meedenken. Onze marketing en sales lopen eindelijk in één lijn."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah"
        },
        "reviewBody": "Breaz hielp-plus ons de juiste keuzes maken voor groei. Hun mix van strategie en menselijke aanpak maakt echt het verschil."
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/breaz",
      "https://www.facebook.com/breaz.be",
      "https://www.instagram.com/breaz.be"
    ],
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": "https://www.breaz-it.be/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      },
      {
        "@type": "ContactAction",
        "target": "https://www.breaz-it.be/contact",
        "name": "Contact Breaz"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}

// Specialized local business schemas for different Belgian cities
export const brusselsBusinessSchema = {
  businessName: "Breaz - Marketing Bureau Brussel",
  businessType: "Marketing Agency",
  address: {
    addressLocality: "Brussel",
    addressRegion: "Brussels",
    addressCountry: "BE"
  },
  geo: {
    latitude: 50.8503,
    longitude: 4.3517
  },
  areaServed: [
    "Brussel",
    "Vlaanderen", 
    "Wallonië",
    "België"
  ]
};

export const antwerpenBusinessSchema = {
  businessName: "Breaz - Marketing Bureau Antwerpen",
  businessType: "Marketing Agency", 
  address: {
    addressLocality: "Antwerpen",
    addressRegion: "Vlaanderen",
    addressCountry: "BE"
  },
  geo: {
    latitude: 51.2194,
    longitude: 4.4025
  },
  areaServed: [
    "Antwerpen",
    "Vlaanderen",
    "België"
  ]
};

export const gentBusinessSchema = {
  businessName: "Breaz - Marketing Bureau Gent",
  businessType: "Marketing Agency",
  address: {
    addressLocality: "Gent", 
    addressRegion: "Vlaanderen",
    addressCountry: "BE"
  },
  geo: {
    latitude: 51.0543,
    longitude: 3.7174
  },
  areaServed: [
    "Gent",
    "Oost-Vlaanderen",
    "Vlaanderen",
    "België"
  ]
};
