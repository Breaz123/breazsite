# Breaz Website - Development Guide

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

The site will automatically reload when you make changes.

---

## 📁 Project Structure

```
breazwebsite/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── layout.tsx          # Root layout with navigation & footer
│   │   ├── page.tsx            # Homepage
│   │   ├── loading.tsx         # Loading state
│   │   ├── not-found.tsx       # 404 page
│   │   ├── sitemap.ts          # Auto-generated sitemap
│   │   ├── contact/            # Contact page
│   │   ├── diensten/           # Services page
│   │   ├── over-ons/           # About page
│   │   ├── privacy/            # Privacy policy
│   │   └── voorwaarden/        # Terms & conditions
│   │
│   ├── components/             # React components
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── accordion.tsx
│   │   │   └── navigation-menu.tsx
│   │   ├── navigation.tsx      # Main navigation
│   │   ├── footer.tsx          # Footer component
│   │   ├── animated-section.tsx # Scroll animations
│   │   ├── fade-in.tsx         # Fade-in animations
│   │   └── index.ts            # Component exports
│   │
│   ├── lib/
│   │   └── utils.ts            # Utility functions (cn helper)
│   │
│   └── styles/
│       └── globals.css         # Global styles & CSS variables
│
├── public/                     # Static assets
│   └── robots.txt              # SEO robots file
│
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

---

## 🎨 Design System

### Color Palette
The site uses a CSS variable-based color system defined in `src/styles/globals.css`:

- **Primary**: Blue (#0094FF) - Main brand color
- **Secondary**: Light gray backgrounds
- **Muted**: Text secondary color
- **Accent**: Interactive elements

### Typography
- Font: Inter (Google Fonts)
- Headings: Semibold, tight tracking
- Body: Regular weight, comfortable line height

### Components
All UI components are built with:
- **shadcn/ui**: Pre-built accessible components
- **Radix UI**: Headless UI primitives
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations

---

## 🔧 Key Technologies

### Framework & Libraries
- **Next.js 14** with App Router
- **React 18** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS** for styling

### UI & Animation
- **shadcn/ui** component library
- **Radix UI** for accessibility
- **Framer Motion** for animations
- **Lucide React** for icons

### SEO & Performance
- **next-seo** for meta tags
- Server-side rendering (SSR)
- Automatic code splitting
- Image optimization

---

## 📝 Adding New Pages

1. **Create a new directory in `src/app/`:**
```bash
mkdir src/app/your-page
```

2. **Add a `page.tsx` file:**
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description for SEO',
}

export default function YourPage() {
  return (
    <div>
      <h1>Your Page</h1>
    </div>
  )
}
```

3. **Update navigation** in `src/components/navigation.tsx`

4. **Update sitemap** in `src/app/sitemap.ts`

---

## 🎭 Using Animations

### AnimatedSection (Scroll-triggered)
```tsx
import { AnimatedSection } from '@/components/animated-section'

<AnimatedSection delay={0.2}>
  <YourContent />
</AnimatedSection>
```

### FadeIn (On mount)
```tsx
import { FadeIn } from '@/components/fade-in'

<FadeIn delay={0.1} direction="up">
  <YourContent />
</FadeIn>
```

---

## 🎯 Best Practices

### Component Structure
- Use Server Components by default (no 'use client')
- Add 'use client' only when using hooks or interactivity
- Keep components small and focused
- Use TypeScript for all components

### Styling
- Use Tailwind utility classes
- Leverage the `cn()` utility for conditional classes
- Follow mobile-first responsive design
- Use semantic color variables (e.g., `bg-primary` not `bg-blue-500`)

### Performance
- Optimize images with Next.js Image component
- Use dynamic imports for heavy components
- Minimize client-side JavaScript
- Leverage Server Components

### SEO
- Add metadata to every page
- Use semantic HTML
- Include proper heading hierarchy
- Add descriptive alt text to images

---

## 🚢 Building for Production

### Build the site:
```bash
npm run build
```

### Test the production build locally:
```bash
npm start
```

### Deployment
The site is ready to deploy on:
- **Vercel** (recommended - zero config)
- **Netlify**
- **Any Node.js hosting**

---

## 🐛 Common Issues

### Module not found errors
```bash
npm install
```

### Tailwind styles not applying
Check that `tailwind.config.ts` includes your file paths:
```ts
content: [
  './src/**/*.{js,ts,jsx,tsx,mdx}',
],
```

### Build errors
Clear Next.js cache:
```bash
rm -rf .next
npm run dev
```

---

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion)
- [Radix UI](https://www.radix-ui.com)

---

## 🤝 Contributing

When making changes:
1. Follow the existing code style
2. Test on mobile and desktop
3. Check for console errors
4. Ensure accessibility standards
5. Update this documentation if needed

---

## 📞 Support

For questions or issues, contact: info@breaz.nl

