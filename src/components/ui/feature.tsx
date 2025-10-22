import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

const featureVariants = cva(
  'group relative flex flex-col items-start rounded-lg border p-6 transition-all',
  {
    variants: {
      variant: {
        default: 'bg-card hover:bg-accent/50 hover:shadow-md',
        bordered: 'border-2 hover:border-primary hover:shadow-lg',
        filled: 'bg-primary/5 border-primary/20 hover:bg-primary/10 hover:border-primary/30',
        ghost: 'border-transparent hover:border-border hover:bg-accent/30',
      },
      align: {
        start: 'items-start text-left',
        center: 'items-center text-center',
      },
    },
    defaultVariants: {
      variant: 'default',
      align: 'start',
    },
  }
)

export interface FeatureProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureVariants> {
  icon?: LucideIcon
  iconColor?: string
  title: string
  description: string
  animated?: boolean
  animationDelay?: number
}

const Feature = React.forwardRef<HTMLDivElement, FeatureProps>(
  ({ 
    className, 
    variant, 
    align, 
    icon: Icon, 
    iconColor = 'text-primary',
    title, 
    description, 
    animated = true,
    animationDelay = 0,
    children,
    ...props 
  }, ref) => {
    const { onDrag, onDragStart, onDragEnd, ...restProps } = props as any
    
    const content = (
      <>
        {Icon && (
          <div className={cn(
            'mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20',
            align === 'center' && 'mx-auto'
          )}>
            <Icon className={cn('h-6 w-6', iconColor)} />
          </div>
        )}
        <h3 className="mb-2 text-xl font-semibold tracking-tight">
          {title}
        </h3>
        <p className="text-muted-foreground">
          {description}
        </p>
        {children}
      </>
    )

    if (animated) {
      return (
        <motion.div
          ref={ref}
          className={cn(featureVariants({ variant, align, className }))}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: animationDelay }}
          {...restProps}
        >
          {content}
        </motion.div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(featureVariants({ variant, align, className }))}
        {...props}
      >
        {content}
      </div>
    )
  }
)
Feature.displayName = 'Feature'

export { Feature, featureVariants }

