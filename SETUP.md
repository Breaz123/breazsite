# Breaz Website - Quick Setup Guide

## ⚡ Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- TypeScript
- And all other dependencies

### Step 2: Run Development Server
```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

### Step 3: Customize Content

#### Update Brand Colors
Edit `src/styles/globals.css` - search for `--primary`:
```css
--primary: 200 100% 45%; /* Change this HSL value */
```

#### Update Contact Information
Edit `src/components/footer.tsx` and `src/app/contact/page.tsx`:
- Email addresses
- Phone numbers
- Social media links
- Address

#### Update Navigation
Edit `src/components/navigation.tsx` to add/remove menu items:
```tsx
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/diensten', label: 'Diensten' },
  // Add more items here
]
```

---

## 🎨 Customization Guide

### 1. Change Logo
Replace the `Wind` icon in:
- `src/components/navigation.tsx`
- `src/components/footer.tsx`

Or add your own logo image in `public/` and update imports.

### 2. Update Homepage Content
Edit `src/app/page.tsx`:
- Hero section (lines ~15-65)
- Values section (lines ~68-120)
- Services section (lines ~123-280)
- Approach section (lines ~283-350)

### 3. Modify Services
Edit `src/app/diensten/page.tsx`:
- Update services array (lines ~20-100)
- Modify packages (lines ~103-140)
- Change FAQ items (lines ~200-250)

### 4. Update About Page
Edit `src/app/over-ons/page.tsx`:
- Company story
- Values
- Working principles

### 5. Configure Contact Form
Edit `src/app/contact/page.tsx`:
- Form fields
- Validation rules
- Submit handler (line ~25)

**To add email functionality:**
1. Install email service (e.g., SendGrid, Resend)
2. Create API route: `src/app/api/contact/route.ts`
3. Update form submit handler

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"
   - Done! ✨

### Deploy to Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. **Deploy**

### Environment Variables
Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set in your hosting dashboard:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## 📋 Pre-Launch Checklist

Before going live, make sure to:

- [ ] Update all contact information
- [ ] Replace placeholder email (info@breaz.nl)
- [ ] Update social media links
- [ ] Add your real logo
- [ ] Customize brand colors
- [ ] Update metadata in `src/app/layout.tsx`
- [ ] Add real images/photos
- [ ] Set up contact form backend
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Test on mobile devices
- [ ] Test contact form
- [ ] Check all internal links
- [ ] Review SEO metadata
- [ ] Set up custom domain
- [ ] Configure SSL certificate
- [ ] Update robots.txt if needed
- [ ] Submit sitemap to Google Search Console

---

## 🎯 Adding Custom Features

### Add a Blog
1. Create `src/app/blog/page.tsx`
2. Create `src/app/blog/[slug]/page.tsx` for posts
3. Use MDX or headless CMS (Contentful, Sanity)

### Add Analytics
```bash
npm install @vercel/analytics
```

Add to `src/app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout() {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Add Contact Form Email Service

**Option 1: Resend (Recommended)**
```bash
npm install resend
```

Create `src/app/api/contact/route.ts`:
```tsx
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  
  await resend.emails.send({
    from: 'contact@yourdomain.com',
    to: 'info@breaz.nl',
    subject: 'New contact form submission',
    html: `<p>${body.message}</p>`
  })
  
  return Response.json({ success: true })
}
```

**Option 2: FormSpree (No Backend Required)**
```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* your form fields */}
</form>
```

### Add CMS (Content Management)

**Option 1: Contentful**
- Great for marketing content
- Easy to use interface
- Free tier available

**Option 2: Sanity**
- More flexible
- Real-time collaboration
- Open source

**Option 3: Strapi**
- Self-hosted
- Full control
- Free

---

## 🔧 Troubleshooting

### Site won't start
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Styles not working
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### TypeScript errors
```bash
# Regenerate types
npm run build
```

### Can't find module errors
Make sure tsconfig.json has correct paths:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 📞 Getting Help

- **Next.js Issues**: https://github.com/vercel/next.js/discussions
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Email**: info@breaz.nl

---

## 🎓 Learning Resources

### Next.js
- [Official Tutorial](https://nextjs.org/learn)
- [App Router Docs](https://nextjs.org/docs/app)

### React
- [React Docs](https://react.dev)
- [React Patterns](https://reactpatterns.com)

### Tailwind CSS
- [Documentation](https://tailwindcss.com/docs)
- [Components](https://tailwindui.com/components)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React + TypeScript](https://react-typescript-cheatsheet.netlify.app)

---

## 🎉 You're Ready!

Your production-ready Breaz website is now set up and ready to customize. Happy coding! 🚀

