import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'

import { cn } from '@/lib/utils'

const switchVariants = cva(
  'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
        success: 'data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-input',
        destructive: 'data-[state=checked]:bg-destructive data-[state=unchecked]:bg-input',
      },
      switchSize: {
        default: 'h-6 w-11',
        sm: 'h-5 w-9',
        lg: 'h-7 w-14',
      },
    },
    defaultVariants: {
      variant: 'default',
      switchSize: 'default',
    },
  }
)

export interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>,
    VariantProps<typeof switchVariants> {
  animated?: boolean
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(({ className, variant, switchSize, animated = true, ...props }, ref) => {
  const WrapperComponent = animated ? motion.div : 'div'
  const animationProps = animated
    ? {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.3 },
      }
    : {}

  return (
    <WrapperComponent {...animationProps}>
      <SwitchPrimitives.Root
        className={cn(switchVariants({ variant, switchSize, className }))}
        {...props}
        ref={ref}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            'pointer-events-none block rounded-full bg-background shadow-lg ring-0 transition-transform',
            switchSize === 'sm' ? 'h-4 w-4 data-[state=checked]:translate-x-4' : '',
            switchSize === 'default' || !switchSize ? 'h-5 w-5 data-[state=checked]:translate-x-5' : '',
            switchSize === 'lg' ? 'h-6 w-6 data-[state=checked]:translate-x-7' : ''
          )}
        />
      </SwitchPrimitives.Root>
    </WrapperComponent>
  )
})
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch, switchVariants }

