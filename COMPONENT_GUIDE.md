# Component Structure Guide

## 🧱 Complete Component Library

This project uses **shadcn/ui** with **Radix UI primitives**, **CVA (Class Variance Authority)** for variants, and **Framer Motion** for animations.

---

## 📦 Basic UI Components

### Button
Multiple variants with animations and sizes.

```tsx
import { Button } from '@/components/ui/button'

<Button variant="primary" size="lg">Click Me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link Button</Button>
<Button variant="outline">Outline</Button>
```

**Variants:** `default`, `primary`, `secondary`, `ghost`, `link`, `outline`, `destructive`  
**Sizes:** `default`, `sm`, `lg`, `xl`, `icon`  
**Props:** `animated` (default: true)

---

### Input
Styled input with variants and validation states.

```tsx
import { Input } from '@/components/ui/input'

<Input placeholder="Enter your name" />
<Input variant="error" placeholder="Error state" />
<Input variant="success" placeholder="Success state" />
<Input inputSize="lg" placeholder="Large input" />
```

**Variants:** `default`, `error`, `success`  
**Sizes:** `default`, `sm`, `lg`  
**Props:** `animated` (default: true)

---

### Textarea
Multi-line text input with variants.

```tsx
import { Textarea } from '@/components/ui/textarea'

<Textarea placeholder="Enter your message" />
<Textarea variant="error" rows={5} />
<Textarea textareaSize="lg" />
```

**Variants:** `default`, `error`, `success`  
**Sizes:** `default`, `sm`, `lg`

---

### Select
Dropdown select with Radix UI primitives.

```tsx
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

---

### Switch
Toggle switch component.

```tsx
import { Switch } from '@/components/ui/switch'

<Switch />
<Switch variant="success" />
<Switch switchSize="lg" />
```

**Variants:** `default`, `success`, `destructive`  
**Sizes:** `default`, `sm`, `lg`

---

### Badge
Small label component for tags and status.

```tsx
import { Badge } from '@/components/ui/badge'

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="outline">Outline</Badge>
```

**Variants:** `default`, `secondary`, `destructive`, `success`, `warning`, `outline`, `ghost`  
**Sizes:** `default`, `sm`, `lg`

---

### Card
Container component with multiple variants.

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card'

<Card variant="elevated" padding="default">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description text</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

**Variants:** `default`, `elevated`, `bordered`, `ghost`, `gradient`  
**Padding:** `none`, `sm`, `default`, `lg`  
**Props:** `animated`, `animationDelay`

---

## 🎭 Overlay Components

### Dialog
Modal dialog with animations.

```tsx
import { 
  Dialog, 
  DialogTrigger, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter 
} from '@/components/ui/dialog'

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>
        Dialog description text
      </DialogDescription>
    </DialogHeader>
    <div>Content</div>
    <DialogFooter>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

---

### Sheet
Sliding panel from edges.

```tsx
import { 
  Sheet, 
  SheetTrigger, 
  SheetContent, 
  SheetHeader, 
  SheetTitle 
} from '@/components/ui/sheet'

<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
    </SheetHeader>
    <div>Content</div>
  </SheetContent>
</Sheet>
```

**Sides:** `top`, `bottom`, `left`, `right`

---

### Tooltip
Hover tooltip component.

```tsx
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip'

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>
      <p>Tooltip content</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

### DropdownMenu
Context menu with animations.

```tsx
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem,
  DropdownMenuSeparator 
} from '@/components/ui/dropdown-menu'

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Item 3</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

## 🏗️ Layout Components

### Section
Responsive section container with variants.

```tsx
import { Section } from '@/components/ui/section'

<Section variant="default" padding="default">
  Content
</Section>

<Section variant="gradient" padding="lg" container={true}>
  Full-width gradient section
</Section>
```

**Variants:** `default`, `primary`, `secondary`, `muted`, `accent`, `gradient`  
**Padding:** `none`, `sm`, `default`, `lg`, `xl`  
**Props:** `container`, `animated`, `animationDelay`

---

### Feature
Feature card with icon and description.

```tsx
import { Feature } from '@/components/ui/feature'
import { Zap } from 'lucide-react'

<Feature
  icon={Zap}
  title="Fast Performance"
  description="Lightning-fast load times"
  variant="default"
  align="center"
/>
```

**Variants:** `default`, `bordered`, `filled`, `ghost`  
**Align:** `start`, `center`  
**Props:** `icon`, `iconColor`, `animated`, `animationDelay`

---

### Testimonial
Customer testimonial card.

```tsx
import { Testimonial } from '@/components/ui/testimonial'

<Testimonial
  quote="This product is amazing!"
  author="John Doe"
  role="CEO"
  company="Company Inc"
  avatar="/path/to/avatar.jpg"
  rating={5}
  variant="default"
/>
```

**Variants:** `default`, `bordered`, `filled`, `minimal`  
**Props:** `quote`, `author`, `role`, `company`, `avatar`, `rating`, `showQuoteIcon`

---

### PricingCard
Pricing plan card with features.

```tsx
import { PricingCard } from '@/components/ui/pricing-card'

<PricingCard
  name="Pro Plan"
  description="For professionals"
  price={29}
  period="month"
  currency="€"
  features={[
    { text: 'Unlimited projects', included: true },
    { text: 'Priority support', included: true },
    { text: 'Custom domain', included: false },
  ]}
  ctaText="Get Started"
  variant="popular"
  badge="Most Popular"
  badgeVariant="success"
/>
```

**Variants:** `default`, `popular`, `premium`  
**Props:** `name`, `description`, `price`, `period`, `currency`, `features`, `badge`, `ctaText`

---

## 🎨 Usage Examples

### Hero Section with Features

```tsx
import { Section, Feature, Button } from '@/components/ui'
import { Zap, Shield, Rocket } from 'lucide-react'

export default function HeroSection() {
  return (
    <Section variant="gradient" padding="xl">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Welcome to Our Platform</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Build amazing products faster
        </p>
        <div className="flex gap-4 justify-center">
          <Button variant="primary" size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <Feature
          icon={Zap}
          title="Fast"
          description="Lightning-fast performance"
          animationDelay={0}
        />
        <Feature
          icon={Shield}
          title="Secure"
          description="Enterprise-grade security"
          animationDelay={0.1}
        />
        <Feature
          icon={Rocket}
          title="Scalable"
          description="Grows with your business"
          animationDelay={0.2}
        />
      </div>
    </Section>
  )
}
```

### Pricing Section

```tsx
import { Section, PricingCard } from '@/components/ui'

export default function PricingSection() {
  return (
    <Section padding="xl">
      <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <PricingCard
          name="Starter"
          price={9}
          features={[
            { text: '5 Projects', included: true },
            { text: 'Basic Support', included: true },
            { text: 'Custom Domain', included: false },
          ]}
          animationDelay={0}
        />
        <PricingCard
          name="Pro"
          price={29}
          variant="popular"
          badge="Most Popular"
          badgeVariant="success"
          features={[
            { text: 'Unlimited Projects', included: true },
            { text: 'Priority Support', included: true },
            { text: 'Custom Domain', included: true },
          ]}
          animationDelay={0.1}
        />
        <PricingCard
          name="Enterprise"
          price={99}
          features={[
            { text: 'Unlimited Everything', included: true },
            { text: '24/7 Support', included: true },
            { text: 'Dedicated Manager', included: true },
          ]}
          animationDelay={0.2}
        />
      </div>
    </Section>
  )
}
```

---

## ✨ Animation Features

All components support:
- **Framer Motion entrance animations**
- **Viewport-aware animations** (trigger when scrolling into view)
- **Customizable animation delays** for staggered effects
- **Hover and tap interactions** on interactive elements
- **Opt-out capability** with `animated={false}` prop

---

## ♿ Accessibility

All components are built with accessibility in mind:
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly
- Color contrast compliance

---

## 📱 Responsive Design

All components are fully responsive:
- Mobile-first approach
- Breakpoint-aware layouts
- Touch-friendly interactions
- Optimized for all screen sizes

---

## 🎯 Best Practices

1. **Use semantic HTML** - Components output proper semantic elements
2. **Leverage variants** - Use CVA variants instead of custom classes
3. **Compose components** - Build complex UIs by composing simple components
4. **Control animations** - Use `animated` and `animationDelay` props for better UX
5. **Test accessibility** - Always test with keyboard and screen readers

---

## 🔧 Customization

All components accept:
- `className` prop for additional Tailwind classes
- Variant props for predefined styles
- All standard HTML attributes
- Ref forwarding for advanced use cases

Example:
```tsx
<Button 
  variant="primary" 
  className="w-full mt-4" 
  onClick={handleClick}
>
  Custom Button
</Button>
```

