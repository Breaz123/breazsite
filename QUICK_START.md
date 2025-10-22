# 🚀 Breaz Website - Quick Start

## Get Started in 3 Commands

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

---

## 📦 What You Get

✅ **6 Complete Pages**
- Home, Services, About, Contact, Privacy, Terms

✅ **Modern Tech Stack**
- Next.js 14, React 18, TypeScript, Tailwind CSS

✅ **Production Ready**
- SEO optimized, Mobile responsive, Fast performance

✅ **Dutch Content**
- Professional marketing copy in Dutch

---

## 🎨 Quick Customization

### 1. Update Contact Info
**File**: `src/components/footer.tsx` and `src/app/contact/page.tsx`
```tsx
// Change these:
info@breaz.nl → your@email.com
+31 6 1234 5678 → your phone
```

### 2. Change Brand Colors
**File**: `src/styles/globals.css`
```css
--primary: 200 100% 45%; /* Your brand color (HSL) */
```

### 3. Update Logo
**Files**: `src/components/navigation.tsx` and `src/components/footer.tsx`
```tsx
// Replace <Wind> icon with your logo
import YourLogo from '@/public/your-logo.svg'
```

---

## 📚 Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Homepage |
| `src/app/diensten/page.tsx` | Services page |
| `src/app/over-ons/page.tsx` | About page |
| `src/app/contact/page.tsx` | Contact page |
| `src/components/navigation.tsx` | Main navigation |
| `src/components/footer.tsx` | Footer |
| `src/styles/globals.css` | Global styles & colors |

---

## 🚀 Deploy to Vercel

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git push

# Then:
# 1. Go to vercel.com
# 2. Import your repository
# 3. Click "Deploy"
# ✨ Done!
```

---

## 📖 Full Documentation

- **README.md** - Overview
- **SETUP.md** - Detailed setup guide
- **DEVELOPMENT.md** - Development guide
- **PROJECT_SUMMARY.md** - Complete project details

---

## 🎯 Pre-Launch Checklist

- [ ] `npm install` - Install dependencies
- [ ] `npm run dev` - Test locally
- [ ] Update contact email & phone
- [ ] Update social media links
- [ ] Replace "info@breaz.nl" everywhere
- [ ] Add your logo
- [ ] Test contact form
- [ ] Test on mobile
- [ ] Deploy to Vercel
- [ ] Configure custom domain
- [ ] Test production site

---

## 💡 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run linter

# Clear cache (if needed)
rm -rf .next node_modules
npm install
npm run dev
```

---

## 🆘 Need Help?

1. Check **DEVELOPMENT.md** for detailed guides
2. Check **SETUP.md** for troubleshooting
3. Read **PROJECT_SUMMARY.md** for complete overview
4. Email: info@breaz.nl

---

**Your professional website is ready to launch! 🎉**

Just run `npm install && npm run dev` to get started!

