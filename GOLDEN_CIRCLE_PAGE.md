# Golden Circle Page - Design Documentation

## Overview
The team page has been transformed into a stunning Golden Circle concept page, combining Simon Sinek's framework with modern tech UI design.

## Key Features

### 🎯 Hero Section
- **Full-screen dark hero** with animated background
- **Visual Golden Circle** - Interactive concentric circles showing WHY, HOW, WHAT
- **Glassmorphism effects** on badges and buttons
- **Animated blur orbs** for depth and movement
- **Scroll indicator** with bounce animation

### 💡 WHY Section (Purpose)
- **Glowing circle badge** with pulse animation
- **Gradient heading** with text-clipping effect
- **3 Impact cards** with:
  - Hover shadow transitions
  - Gradient top borders
  - Sparkle icons
  - Glassmorphism backdrop
- **Radial gradient background** for depth

### 🔧 HOW Section (Process)
- **Dark tech background** with grid pattern overlay
- **6 principle cards** featuring:
  - Slate-800 backgrounds with backdrop blur
  - Glowing borders on hover
  - Icon containers with gradient backgrounds
  - Scale animations on icons
  - Corner accent gradients
- **Consistent WHY-HOW-WHAT badge design**

### 📦 WHAT Section (Services)
- **Light background** with decorative circle elements
- **4 service cards** with:
  - Numbered badges (gradient circles)
  - Hover shadow elevations
  - Gradient accent lines
  - Bottom-right gradient accents on hover
  - Smooth color transitions
- **CTA button** to services page

### 🎨 CTA Section
- **Dark gradient background** with animated elements
- **Mini Golden Circle visualization** with ripple effect
- **Dual CTA buttons** (primary + outline)
- **Trust indicators** with icons
- **Top and bottom gradient lines**

## Design Elements

### Color Palette
- **Primary**: Blue gradient (from primary to blue-600)
- **Backgrounds**: 
  - Dark: slate-900 to slate-950
  - Light: white to blue-50
- **Accents**: Gradient overlays with varying opacity

### Typography
- **Hero**: 4xl to 7xl font sizes
- **Section titles**: 4xl to 5xl
- **Body text**: xl to 2xl for readability
- **Gradient text effects** throughout

### Animations
- **Pulse effects** on circle badges
- **Fade-in transitions** with AnimatedSection
- **Hover states** on all interactive elements
- **Scale transformations** on icons
- **Blur animations** on background orbs
- **Ripple effects** on Golden Circle visualization

### UI Patterns
- **Glassmorphism**: backdrop-blur with semi-transparent backgrounds
- **Gradient borders**: Animated gradient lines
- **Card elevations**: Multi-layer shadow effects
- **Tech grid**: Subtle background patterns
- **Concentric circles**: Visual Golden Circle representation

## Technical Implementation

### Components Used
- AnimatedSection (for scroll animations)
- FadeIn (for sequential reveals)
- Card components (with custom styling)
- Lucide icons (Heart, Target, Compass, etc.)

### Custom CSS Classes
- Custom animations in `globals.css`
- Tailwind utility classes
- Responsive breakpoints (sm, md, lg)
- Dark mode support

### Responsive Design
- Mobile-first approach
- Grid layouts that collapse on mobile
- Adjusted font sizes per breakpoint
- Flexible spacing and padding

## Golden Circle Philosophy

The page follows Simon Sinek's Golden Circle framework:

1. **WHY** (Core belief) - Comes first, in the center
2. **HOW** (Process) - The principles and values
3. **WHAT** (Products) - The concrete services

This creates an inside-out narrative that connects emotionally with visitors before explaining the tactical details.

## Performance Considerations

- Efficient CSS animations
- Optimized gradient usage
- Lazy loading with AnimatedSection
- Minimal JavaScript (React components only)
- SEO-optimized metadata

## Files Modified

1. `src/app/team/page.tsx` - Complete page redesign
2. `src/app/globals.css` - Added custom animations

## Color Accessibility

All text maintains WCAG AA contrast ratios:
- White text on dark backgrounds
- Dark text on light backgrounds
- Gradient text with sufficient contrast

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Backdrop-filter support with fallbacks
- CSS Grid and Flexbox
- CSS animations and transitions

