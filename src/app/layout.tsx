import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/cookie-banner";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Breaz | Marketing, Sales & Business Development in België",
  description: "Breaz is dé specialist in marketing, sales en business development in België. Wij helpen bedrijven groeien via strategie, customer intimacy en duurzame relaties. Ontdek onze aanpak!",
  keywords: [
    "marketing België",
    "sales coaching België", 
    "business development België",
    "marketing bureau Vlaanderen",
    "sales training België",
    "groei strategie",
    "customer intimacy",
    "merkstrategie",
    "content marketing",
    "SEO België",
    "webdevelopment België",
    "digitale marketing",
    "marketing consultant",
    "sales consultant",
    "business consultant",
    "marketing met menselijke aanpak",
    "duurzame groei",
    "marketing strategie",
    "sales optimalisatie",
    "business groei"
  ],
  authors: [{ name: "Breaz Team" }],
  creator: "Breaz",
  publisher: "Breaz",
  metadataBase: new URL("https://www.breaz-it.be"),
  alternates: {
    canonical: "/",
    languages: {
      'nl-BE': 'https://www.breaz-it.be',
    },
  },
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://www.breaz-it.be",
    title: "Breaz | Marketing, Sales & Business Development in België",
    description: "Breaz helpt bedrijven in België groeien via marketing, sales en business development met een menselijke aanpak. Ontdek onze strategie voor duurzame groei.",
    siteName: "Breaz",
    images: [
      {
        url: "/og-breaz.jpg",
        width: 1200,
        height: 630,
        alt: "Breaz - Marketing, Sales & Business Development in België",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breaz | Marketing, Sales & Business Development in België",
    description: "Breaz helpt bedrijven in België groeien via marketing, sales en business development met een menselijke aanpak.",
    images: ["/og-breaz.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Breaz",
    "url": "https://www.breaz-it.be",
    "logo": "https://www.breaz-it.be/logo.png",
    "description": "Breaz is dé specialist in marketing, sales en business development in België. Wij helpen bedrijven groeien via strategie, customer intimacy en duurzame relaties.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BE",
      "addressRegion": "Vlaanderen"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+32-XXX-XXX-XXX",
      "contactType": "customer service",
      "email": "info@breaz-it.be",
      "availableLanguage": ["Dutch", "English"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/breaz",
      "https://www.facebook.com/breaz.be",
      "https://www.instagram.com/breaz.be"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Belgium"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marketing, Sales & Business Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Strategy & Branding",
            "description": "Merkstrategie, positionering en content marketing voor duurzame groei"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Sales Coaching & Training",
            "description": "Sales optimalisatie, coaching en training voor betere resultaten"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Business Development",
            "description": "Strategische groei, marktanalyse en partnerships"
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
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Breaz",
    "url": "https://www.breaz-it.be",
    "description": "Breaz helpt bedrijven in België groeien via marketing, sales en business development",
    "inLanguage": "nl-BE",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.breaz-it.be/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Breaz"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.breaz-it.be/#business",
    "name": "Breaz",
    "description": "Marketing, Sales & Business Development specialist in België",
    "url": "https://www.breaz-it.be",
    "telephone": "+32-XXX-XXX-XXX",
    "email": "info@breaz-it.be",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BE",
      "addressRegion": "Vlaanderen"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "50.8503",
      "longitude": "4.3517"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Belgium"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Belgium"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "€€",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Marketing & Business Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Strategy",
            "description": "Strategische marketing en merkontwikkeling"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Sales Training",
            "description": "Sales coaching en optimalisatie"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Development", 
            "description": "Strategische groei en partnerships"
          }
        }
      ]
    }
  };

  return (
    <html lang="nl-BE" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <meta name="geo.region" content="BE" />
        <meta name="geo.placename" content="België" />
        <meta name="geo.position" content="50.8503;4.3517" />
        <meta name="ICBM" content="50.8503, 4.3517" />
        <meta name="DC.title" content="Breaz - Marketing, Sales & Business Development in België" />
        <meta name="DC.description" content="Breaz is dé specialist in marketing, sales en business development in België. Wij helpen bedrijven groeien via strategie, customer intimacy en duurzame relaties." />
        <meta name="DC.language" content="nl-BE" />
        <meta name="DC.coverage" content="België" />
        <meta name="DC.audience" content="Bedrijven die willen groeien via marketing, sales en business development" />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
