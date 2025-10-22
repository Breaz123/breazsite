import React from 'react';
import { usePathname } from 'next/navigation';
import { FAQSchema, homePageFAQs, servicesPageFAQs, contactPageFAQs } from './faq-schema';
import { BreadcrumbSchema, getBreadcrumbsForPage } from './breadcrumb-schema';
import { ServiceSchema, marketingServiceSchema, salesServiceSchema, businessDevelopmentSchema, webDevelopmentSchema } from './service-schema';
import { LocalBusinessSchema } from './local-business-schema';

interface SEOOptimizerProps {
  pageType?: 'home' | 'services' | 'service-detail' | 'about' | 'contact' | 'team' | 'approach';
  serviceCategory?: 'marketing' | 'sales' | 'business-development' | 'webdevelopment';
  customFAQs?: Array<{ question: string; answer: string }>;
  customBreadcrumbs?: Array<{ name: string; url: string; position: number }>;
}

export function SEOOptimizer({ 
  pageType = 'home', 
  serviceCategory,
  customFAQs,
  customBreadcrumbs
}: SEOOptimizerProps) {
  const pathname = usePathname();
  
  // Get appropriate FAQs based on page type
  const getFAQsForPage = () => {
    if (customFAQs) return customFAQs;
    
    switch (pageType) {
      case 'home':
        return homePageFAQs;
      case 'services':
      case 'service-detail':
        return servicesPageFAQs;
      case 'contact':
        return contactPageFAQs;
      default:
        return homePageFAQs;
    }
  };

  // Get appropriate breadcrumbs
  const getBreadcrumbsForCurrentPage = () => {
    if (customBreadcrumbs) return customBreadcrumbs;
    return getBreadcrumbsForPage(pathname);
  };

  // Get service schema based on category
  const getServiceSchemaForCategory = () => {
    switch (serviceCategory) {
      case 'marketing':
        return marketingServiceSchema;
      case 'sales':
        return salesServiceSchema;
      case 'business-development':
        return businessDevelopmentSchema;
      case 'webdevelopment':
        return webDevelopmentSchema;
      default:
        return null;
    }
  };

  return (
    <>
      {/* FAQ Schema */}
      <FAQSchema faqs={getFAQsForPage()} />
      
      {/* Breadcrumb Schema */}
      <BreadcrumbSchema items={getBreadcrumbsForCurrentPage()} />
      
      {/* Service Schema for service pages */}
      {pageType === 'service-detail' && serviceCategory && (
        <ServiceSchema {...getServiceSchemaForCategory()!} />
      )}
      
      {/* Local Business Schema for all pages */}
      <LocalBusinessSchema />
      
      {/* Additional SEO enhancements */}
      <SEOEnhancements pageType={pageType} pathname={pathname} />
    </>
  );
}

// Additional SEO enhancements component
function SEOEnhancements({ pageType, pathname }: { pageType: string; pathname: string }) {
  const baseUrl = 'https://www.breaz-it.be';
  
  // Generate additional meta tags based on page type
  const getAdditionalMetaTags = () => {
    const tags: Array<{ name: string; content: string }> = [];
    
    switch (pageType) {
      case 'home':
        tags.push(
          { name: 'DC.title', content: 'Breaz - Marketing, Sales & Business Development in België' },
          { name: 'DC.description', content: 'Breaz is dé specialist in marketing, sales en business development in België. Wij helpen bedrijven groeien via strategie, customer intimacy en duurzame relaties.' },
          { name: 'DC.subject', content: 'Marketing, Sales, Business Development, België' },
          { name: 'DC.coverage', content: 'België, Vlaanderen, Brussel' },
          { name: 'DC.audience', content: 'Bedrijven die willen groeien via marketing, sales en business development' }
        );
        break;
      case 'services':
        tags.push(
          { name: 'DC.title', content: 'Diensten - Marketing, Sales & Business Development | Breaz' },
          { name: 'DC.description', content: 'Ontdek alle diensten van Breaz: marketing strategie, sales coaching, business development en web development. Gespecialiseerd in de Belgische markt.' },
          { name: 'DC.subject', content: 'Marketing diensten, Sales training, Business development, Web development' }
        );
        break;
      case 'contact':
        tags.push(
          { name: 'DC.title', content: 'Contact - Breaz Marketing Bureau België' },
          { name: 'DC.description', content: 'Neem contact op met Breaz voor marketing, sales en business development diensten. Vrijblijvend intakegesprek mogelijk.' },
          { name: 'DC.subject', content: 'Contact, Marketing bureau, België' }
        );
        break;
    }
    
    return tags;
  };

  const additionalTags = getAdditionalMetaTags();

  return (
    <>
      {additionalTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}${pathname}`} />
      
      {/* Alternate language versions */}
      <link rel="alternate" hrefLang="nl-BE" href={`${baseUrl}${pathname}`} />
      <link rel="alternate" hrefLang="nl" href={`${baseUrl}${pathname}`} />
      <link rel="alternate" hrefLang="en" href={`${baseUrl}/en${pathname}`} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </>
  );
}

// SEO-optimized image component
interface SEOImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  caption?: string;
}

export function SEOImage({ 
  src, 
  alt, 
  width = 800, 
  height = 600, 
  priority = false,
  className,
  caption
}: SEOImageProps) {
  return (
    <figure className={className}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      {caption && (
        <figcaption className="text-sm text-muted-foreground mt-2">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// SEO-optimized heading component
interface SEOHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SEOHeading({ level, children, className, id }: SEOHeadingProps) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <HeadingTag 
      id={id}
      className={className}
      itemProp={level === 1 ? 'headline' : undefined}
    >
      {children}
    </HeadingTag>
  );
}

// SEO-optimized paragraph component
interface SEOParagraphProps {
  children: React.ReactNode;
  className?: string;
  itemProp?: string;
}

export function SEOParagraph({ children, className, itemProp }: SEOParagraphProps) {
  return (
    <p className={className} itemProp={itemProp}>
      {children}
    </p>
  );
}
