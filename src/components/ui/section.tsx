import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

const sectionVariants = cva(
  'relative w-full transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-background',
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        muted: 'bg-muted',
        accent: 'bg-accent text-accent-foreground',
        gradient: 'bg-gradient-to-br from-primary/10 via-background to-secondary/10',
      },
      padding: {
        none: '',
        sm: 'py-8 md:py-12',
        default: 'py-12 md:py-16 lg:py-20',
        lg: 'py-16 md:py-24 lg:py-32',
        xl: 'py-20 md:py-32 lg:py-40',
      },
      container: {
        true: 'container mx-auto px-4 sm:px-6 lg:px-8',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
      container: true,
    },
  }
)

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  animated?: boolean
  animationDelay?: number
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant, padding, container, animated = true, animationDelay = 0, children, ...props }, ref) => {
    const { onDrag, onDragStart, onDragEnd, ...restProps } = props as any
    
    const content = container ? (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    ) : (
      children
    )

    if (animated) {
      return (
        <motion.section
          ref={ref}
          className={cn(sectionVariants({ variant, padding, container: false, className }))}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: animationDelay }}
          {...restProps}
        >
          {content}
        </motion.section>
      )
    }

    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ variant, padding, container: false, className }))}
        {...props}
      >
        {content}
      </section>
    )
  }
)
Section.displayName = 'Section'

export { Section, sectionVariants }

