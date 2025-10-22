import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from './button'
import { Badge } from './badge'

const pricingCardVariants = cva(
  'relative flex flex-col rounded-lg border p-8 transition-all',
  {
    variants: {
      variant: {
        default: 'bg-card hover:shadow-lg',
        popular: 'border-primary border-2 bg-card shadow-lg hover:shadow-xl scale-105',
        premium: 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/50 shadow-lg hover:shadow-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface PricingFeature {
  text: string
  included: boolean
  tooltip?: string
}

export interface PricingCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pricingCardVariants> {
  name: string
  description?: string
  price: string | number
  period?: string
  currency?: string
  features: PricingFeature[]
  ctaText?: string
  ctaVariant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link'
  onCtaClick?: () => void
  badge?: string
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'success' | 'warning' | 'outline'
  animated?: boolean
  animationDelay?: number
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ 
    className, 
    variant,
    name,
    description,
    price,
    period = 'month',
    currency = '€',
    features,
    ctaText = 'Get Started',
    ctaVariant = 'default',
    onCtaClick,
    badge,
    badgeVariant = 'default',
    animated = true,
    animationDelay = 0,
    ...props 
  }, ref) => {
    const { onDrag, onDragStart, onDragEnd, ...restProps } = props as any
    
    const content = (
      <>
        {/* Badge */}
        {badge && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
        )}

        {/* Header */}
        <div className="mb-8 text-center">
          <h3 className="mb-2 text-2xl font-bold">{name}</h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>

        {/* Price */}
        <div className="mb-8 text-center">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-2xl font-semibold">{currency}</span>
            <span className="text-5xl font-bold tracking-tight">{price}</span>
            {period && (
              <span className="text-muted-foreground">/{period}</span>
            )}
          </div>
        </div>

        {/* Features */}
        <ul className="mb-8 space-y-3 flex-1">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3"
              initial={animated ? { opacity: 0, x: -20 } : {}}
              whileInView={animated ? { opacity: 1, x: 0 } : {}}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: animationDelay + (index * 0.05) }}
            >
              {feature.included ? (
                <Check className="h-5 w-5 shrink-0 text-green-500" />
              ) : (
                <X className="h-5 w-5 shrink-0 text-muted-foreground/50" />
              )}
              <span className={cn(
                'text-sm',
                feature.included ? 'text-foreground' : 'text-muted-foreground line-through'
              )}>
                {feature.text}
              </span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <Button
          className="w-full"
          variant={ctaVariant}
          onClick={onCtaClick}
          size="lg"
        >
          {ctaText}
        </Button>
      </>
    )

    if (animated) {
      return (
        <motion.div
          ref={ref}
          className={cn(pricingCardVariants({ variant, className }))}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: animationDelay }}
          whileHover={{ y: -8 }}
          {...restProps}
        >
          {content}
        </motion.div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(pricingCardVariants({ variant, className }))}
        {...props}
      >
        {content}
      </div>
    )
  }
)
PricingCard.displayName = 'PricingCard'

export { PricingCard, pricingCardVariants }

