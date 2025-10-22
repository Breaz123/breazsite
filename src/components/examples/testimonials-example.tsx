import { Section } from '@/components/ui/section'
import { Testimonial } from '@/components/ui/testimonial'

/**
 * Testimonials Section Example
 * Demonstrates Testimonial component with different variants
 */
export default function TestimonialsExample() {
  return (
    <Section variant="muted" padding="xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          What Our Customers Say
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it - hear from some of our satisfied customers
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Testimonial
          quote="This platform has completely transformed how we build and ship products. The component library is incredibly comprehensive and easy to use."
          author="Sarah Johnson"
          role="Product Manager"
          company="TechCorp"
          rating={5}
          variant="default"
          animationDelay={0}
        />
        
        <Testimonial
          quote="The attention to detail in accessibility and responsive design is outstanding. Our development time has been cut in half."
          author="Michael Chen"
          role="Lead Developer"
          company="StartupXYZ"
          rating={5}
          variant="default"
          animationDelay={0.1}
        />
        
        <Testimonial
          quote="Best component library we've used. The animations are smooth, the code is clean, and the documentation is excellent."
          author="Emily Rodriguez"
          role="UI/UX Designer"
          company="Design Studio"
          rating={5}
          variant="default"
          animationDelay={0.2}
        />
      </div>
    </Section>
  )
}

