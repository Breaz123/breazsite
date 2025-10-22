import { Section } from '@/components/ui/section'
import { PricingCard } from '@/components/ui/pricing-card'

/**
 * Pricing Section Example
 * Demonstrates PricingCard component with different variants
 */
export default function PricingExample() {
  return (
    <Section variant="default" padding="xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect plan for your needs. All plans include a 14-day free trial.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingCard
          name="Starter"
          description="Perfect for individuals and small projects"
          price={9}
          period="month"
          currency="€"
          features={[
            { text: '5 Projects', included: true },
            { text: '10 GB Storage', included: true },
            { text: 'Email Support', included: true },
            { text: 'Custom Domain', included: false },
            { text: 'Priority Support', included: false },
            { text: 'Advanced Analytics', included: false },
          ]}
          ctaText="Start Free Trial"
          ctaVariant="outline"
          variant="default"
          animationDelay={0}
          onCtaClick={() => console.log('Starter plan selected')}
        />
        
        <PricingCard
          name="Professional"
          description="Best for growing teams and businesses"
          price={29}
          period="month"
          currency="€"
          features={[
            { text: 'Unlimited Projects', included: true },
            { text: '100 GB Storage', included: true },
            { text: 'Priority Email Support', included: true },
            { text: 'Custom Domain', included: true },
            { text: 'Advanced Analytics', included: true },
            { text: 'API Access', included: false },
          ]}
          ctaText="Get Started"
          ctaVariant="default"
          variant="popular"
          badge="Most Popular"
          badgeVariant="success"
          animationDelay={0.1}
          onCtaClick={() => console.log('Professional plan selected')}
        />
        
        <PricingCard
          name="Enterprise"
          description="For large organizations with advanced needs"
          price={99}
          period="month"
          currency="€"
          features={[
            { text: 'Unlimited Everything', included: true },
            { text: 'Unlimited Storage', included: true },
            { text: '24/7 Phone Support', included: true },
            { text: 'Custom Domain', included: true },
            { text: 'Advanced Analytics', included: true },
            { text: 'Full API Access', included: true },
            { text: 'Dedicated Account Manager', included: true },
          ]}
          ctaText="Contact Sales"
          ctaVariant="secondary"
          variant="default"
          animationDelay={0.2}
          onCtaClick={() => console.log('Enterprise plan selected')}
        />
      </div>
    </Section>
  )
}

