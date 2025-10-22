import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

import { cn } from '@/lib/utils'

const testimonialVariants = cva(
  'relative flex flex-col rounded-lg border p-6 transition-all',
  {
    variants: {
      variant: {
        default: 'bg-card shadow-sm hover:shadow-md',
        bordered: 'border-2 hover:border-primary/50',
        filled: 'bg-muted border-transparent',
        minimal: 'border-transparent shadow-none',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface TestimonialProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof testimonialVariants> {
  quote: string
  author: string
  role?: string
  company?: string
  avatar?: string
  rating?: number
  animated?: boolean
  animationDelay?: number
  showQuoteIcon?: boolean
}

const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  ({ 
    className, 
    variant, 
    quote,
    author,
    role,
    company,
    avatar,
    rating,
    animated = true,
    animationDelay = 0,
    showQuoteIcon = true,
    ...props 
  }, ref) => {
    const { onDrag, onDragStart, onDragEnd, ...restProps } = props as any
    
    const content = (
      <>
        {showQuoteIcon && (
          <Quote className="mb-4 h-8 w-8 text-primary/30" />
        )}
        
        {/* Rating */}
        {rating && (
          <div className="mb-4 flex gap-1" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={cn(
                  'h-5 w-5',
                  i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
                )}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            ))}
          </div>
        )}
        
        {/* Quote */}
        <blockquote className="mb-6 text-lg leading-relaxed">
          "{quote}"
        </blockquote>
        
        {/* Author */}
        <div className="mt-auto flex items-center gap-4">
          {avatar && (
            <img
              src={avatar}
              alt={author}
              className="h-12 w-12 rounded-full object-cover"
            />
          )}
          <div>
            <div className="font-semibold">{author}</div>
            {(role || company) && (
              <div className="text-sm text-muted-foreground">
                {role}{role && company && ' • '}{company}
              </div>
            )}
          </div>
        </div>
      </>
    )

    if (animated) {
      return (
        <motion.div
          ref={ref}
          className={cn(testimonialVariants({ variant, className }))}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
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
        className={cn(testimonialVariants({ variant, className }))}
        {...props}
      >
        {content}
      </div>
    )
  }
)
Testimonial.displayName = 'Testimonial'

export { Testimonial, testimonialVariants }

