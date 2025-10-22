import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { Feature } from '@/components/ui/feature'
import { Zap, Shield, Rocket } from 'lucide-react'

/**
 * Hero Section Example
 * Demonstrates Section, Button, and Feature components with animations
 */
export default function HeroExample() {
  return (
    <Section variant="gradient" padding="xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Build amazing products faster with our comprehensive component library
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Feature
          icon={Zap}
          title="Lightning Fast"
          description="Built for speed with optimized performance and quick load times"
          variant="default"
          align="center"
          animationDelay={0}
        />
        <Feature
          icon={Shield}
          title="Secure by Default"
          description="Enterprise-grade security built into every component"
          variant="default"
          align="center"
          animationDelay={0.1}
        />
        <Feature
          icon={Rocket}
          title="Easily Scalable"
          description="Components that grow with your business needs"
          variant="default"
          align="center"
          animationDelay={0.2}
        />
      </div>
    </Section>
  )
}

