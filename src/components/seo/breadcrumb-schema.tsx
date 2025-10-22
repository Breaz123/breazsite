import React from 'react';

interface BreadcrumbItem {
  name: string;
  url: string;
  position: number;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map(item => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}

// Predefined breadcrumb data for different pages
export const getBreadcrumbsForPage = (pathname: string): BreadcrumbItem[] => {
  const baseUrl = 'https://www.breaz-it.be';
  
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: baseUrl, position: 1 }
  ];

  switch (pathname) {
    case '/diensten':
      breadcrumbs.push({ name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 });
      break;
    
    case '/diensten/marketing':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Marketing', url: `${baseUrl}/diensten/marketing`, position: 3 }
      );
      break;
    
    case '/diensten/sales':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Sales', url: `${baseUrl}/diensten/sales`, position: 3 }
      );
      break;
    
    case '/diensten/business-development':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Business Development', url: `${baseUrl}/diensten/business-development`, position: 3 }
      );
      break;
    
    case '/diensten/webdevelopment':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Web Development', url: `${baseUrl}/diensten/webdevelopment`, position: 3 }
      );
      break;
    
    case '/aanpak':
      breadcrumbs.push({ name: 'Onze Aanpak', url: `${baseUrl}/aanpak`, position: 2 });
      break;
    
    case '/over-ons':
      breadcrumbs.push({ name: 'Over Ons', url: `${baseUrl}/over-ons`, position: 2 });
      break;
    
    case '/team':
      breadcrumbs.push({ name: 'Ons Team', url: `${baseUrl}/team`, position: 2 });
      break;
    
    case '/contact':
      breadcrumbs.push({ name: 'Contact', url: `${baseUrl}/contact`, position: 2 });
      break;
    
    case '/start-je-project':
      breadcrumbs.push({ name: 'Start Je Project', url: `${baseUrl}/start-je-project`, position: 2 });
      break;
    
    // Service sub-pages
    case '/diensten/marketing/merkstrategie-positionering':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Marketing', url: `${baseUrl}/diensten/marketing`, position: 3 },
        { name: 'Merkstrategie & Positionering', url: `${baseUrl}/diensten/marketing/merkstrategie-positionering`, position: 4 }
      );
      break;
    
    case '/diensten/marketing/content-storytelling':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Marketing', url: `${baseUrl}/diensten/marketing`, position: 3 },
        { name: 'Content & Storytelling', url: `${baseUrl}/diensten/marketing/content-storytelling`, position: 4 }
      );
      break;
    
    case '/diensten/marketing/online-zichtbaarheid-seo':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Marketing', url: `${baseUrl}/diensten/marketing`, position: 3 },
        { name: 'Online Zichtbaarheid & SEO', url: `${baseUrl}/diensten/marketing/online-zichtbaarheid-seo`, position: 4 }
      );
      break;
    
    case '/diensten/marketing/campagnes-social-media':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Marketing', url: `${baseUrl}/diensten/marketing`, position: 3 },
        { name: 'Campagnes & Social Media', url: `${baseUrl}/diensten/marketing/campagnes-social-media`, position: 4 }
      );
      break;
    
    case '/diensten/sales/salescoaching-training':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Sales', url: `${baseUrl}/diensten/sales`, position: 3 },
        { name: 'Sales Coaching & Training', url: `${baseUrl}/diensten/sales/salescoaching-training`, position: 4 }
      );
      break;
    
    case '/diensten/sales/funnelanalyse-conversieoptimalisatie':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Sales', url: `${baseUrl}/diensten/sales`, position: 3 },
        { name: 'Funnelanalyse & Conversieoptimalisatie', url: `${baseUrl}/diensten/sales/funnelanalyse-conversieoptimalisatie`, position: 4 }
      );
      break;
    
    case '/diensten/sales/crm-procesondersteuning':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Sales', url: `${baseUrl}/diensten/sales`, position: 3 },
        { name: 'CRM & Procesondersteuning', url: `${baseUrl}/diensten/sales/crm-procesondersteuning`, position: 4 }
      );
      break;
    
    case '/diensten/sales/marketing-sales-alignement':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Sales', url: `${baseUrl}/diensten/sales`, position: 3 },
        { name: 'Marketing-Sales Alignement', url: `${baseUrl}/diensten/sales/marketing-sales-alignement`, position: 4 }
      );
      break;
    
    case '/diensten/business-development/strategische-roadmap-groeiplan':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Business Development', url: `${baseUrl}/diensten/business-development`, position: 3 },
        { name: 'Strategische Roadmap & Groeiplan', url: `${baseUrl}/diensten/business-development/strategische-roadmap-groeiplan`, position: 4 }
      );
      break;
    
    case '/diensten/business-development/markt-concurrentieanalyse':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Business Development', url: `${baseUrl}/diensten/business-development`, position: 3 },
        { name: 'Markt- & Concurrentieanalyse', url: `${baseUrl}/diensten/business-development/markt-concurrentieanalyse`, position: 4 }
      );
      break;
    
    case '/diensten/business-development/partnerschappen-samenwerkingstrajecten':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Business Development', url: `${baseUrl}/diensten/business-development`, position: 3 },
        { name: 'Partnerschappen & Samenwerkingstrajecten', url: `${baseUrl}/diensten/business-development/partnerschappen-samenwerkingstrajecten`, position: 4 }
      );
      break;
    
    case '/diensten/business-development/innovatie-diversificatie':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Business Development', url: `${baseUrl}/diensten/business-development`, position: 3 },
        { name: 'Innovatie & Diversificatie', url: `${baseUrl}/diensten/business-development/innovatie-diversificatie`, position: 4 }
      );
      break;
    
    case '/diensten/webdevelopment/tailwind-react-nextjs':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Web Development', url: `${baseUrl}/diensten/webdevelopment`, position: 3 },
        { name: 'Tailwind, React & Next.js', url: `${baseUrl}/diensten/webdevelopment/tailwind-react-nextjs`, position: 4 }
      );
      break;
    
    case '/diensten/webdevelopment/wordpress-development':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Web Development', url: `${baseUrl}/diensten/webdevelopment`, position: 3 },
        { name: 'WordPress Development', url: `${baseUrl}/diensten/webdevelopment/wordpress-development`, position: 4 }
      );
      break;
    
    case '/diensten/webdevelopment/custom-made':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Web Development', url: `${baseUrl}/diensten/webdevelopment`, position: 3 },
        { name: 'Custom Made', url: `${baseUrl}/diensten/webdevelopment/custom-made`, position: 4 }
      );
      break;
    
    case '/diensten/webdevelopment/shopify':
      breadcrumbs.push(
        { name: 'Diensten', url: `${baseUrl}/diensten`, position: 2 },
        { name: 'Web Development', url: `${baseUrl}/diensten/webdevelopment`, position: 3 },
        { name: 'Shopify', url: `${baseUrl}/diensten/webdevelopment/shopify`, position: 4 }
      );
      break;
    
    default:
      break;
  }

  return breadcrumbs;
};
