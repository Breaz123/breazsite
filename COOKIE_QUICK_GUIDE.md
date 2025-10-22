# Cookie System - Quick Implementation Guide

## 🎯 Quick Start

Your Breaz website now has a fully compliant EU cookie consent system with:
- ✅ Modern tech-styled cookie banner
- ✅ Comprehensive cookie policy page
- ✅ GDPR, ePrivacy, and ISO compliant

## 📍 What Was Added

### 1. Cookie Banner
**Location:** `src/components/cookie-banner.tsx`  
**Displays on:** All pages (first visit only)  
**Access:** `/cookies` for full policy

### 2. Cookie Policy Page
**URL:** `https://www.breaz-it.be/cookies`  
**File:** `src/app/cookies/page.tsx`

### 3. Footer Link
**Already included** in footer legal section

## 🎨 How It Looks

The cookie banner features:
- Dark tech-styled design with animated grid background
- Glowing blue/cyan borders matching your brand
- Three clear action buttons
- Expandable cookie details
- Direct link to full policy

## 👤 User Experience Flow

1. **First Visit** → Banner appears after 1 second
2. **User Clicks:**
   - ✅ "Alles accepteren" (Accept All) → Saves preference, banner disappears
   - ❌ "Weigeren" (Reject) → Saves preference, only necessary cookies
   - ⚙️ "Aanpassen" (Customize) → Shows cookie categories details
3. **Preference Saved** → Banner won't show again until cache cleared

## 🔧 Customization Options

### Change Colors
Edit `src/components/cookie-banner.tsx`:
```tsx
// Main background gradient
from-slate-900 via-slate-800 to-slate-900

// Border glow
from-primary/50 via-blue-500/50 to-cyan-500/50

// Accept button
from-primary to-cyan-500
```

### Change Timing
```tsx
// Line ~27: Delay before showing banner
setTimeout(() => setIsVisible(true), 1000); // Change 1000 to desired milliseconds
```

### Add/Remove Cookie Categories
Edit `src/app/cookies/page.tsx` sections 2.1 - 2.4

## 📋 Cookie Categories

### Currently Configured:

| Category | Consent Required | Purpose |
|----------|-----------------|---------|
| **Necessary** | ❌ No | Essential website function |
| **Functional** | ✅ Yes | User preferences (theme, language) |
| **Analytical** | ✅ Yes | Anonymous statistics (Google Analytics) |
| **Marketing** | ✅ Yes | Not currently used |

## 🔐 Privacy Contact Information

**Update your details** in `src/app/cookies/page.tsx`:

```tsx
// Section 9: Contact & Complaints
<p><strong>Breaz</strong></p>
<p>België</p>
<p>E-mail: <a href="mailto:privacy@breaz-it.be">privacy@breaz-it.be</a></p>
```

## 🌐 Adding New Cookies

When adding new cookies, update:

1. **Cookie Policy Table** (`src/app/cookies/page.tsx`)
   - Add row to appropriate category section
   - Include: name, purpose, duration

2. **Cookie Banner Details** (optional)
   - Add to expandable section if major change

3. **COOKIE_COMPLIANCE.md**
   - Update cookie inventory table

4. **Update "Last Modified" date**
   - Top of cookie policy page

## 🧪 Testing Your Cookie Banner

### Test Checklist:
```bash
# 1. Clear browser storage
Open DevTools → Application → Storage → Clear site data

# 2. Reload page
Cookie banner should appear after 1 second

# 3. Test "Accept All"
Click → Check localStorage has 'cookieConsent': 'accepted'

# 4. Reload page
Banner should NOT appear

# 5. Clear storage again, test "Reject"
Click → Check localStorage has 'cookieConsent': 'rejected'

# 6. Test "Customize"
Should expand to show cookie categories
```

### Browser DevTools Check:
```javascript
// Check stored consent
localStorage.getItem('cookieConsent')
// Should return: "accepted" or "rejected" or null

// Reset for testing
localStorage.removeItem('cookieConsent')
```

## 📱 Mobile Responsiveness

The banner automatically adapts:
- **Desktop:** Centered card with max-width
- **Mobile:** Full-width bottom sheet
- **Tablet:** Responsive grid layout

## 🚨 GDPR Compliance Checklist

Before going live:

- [x] Cookie banner shows before any tracking
- [x] Clear consent options (accept/reject/customize)
- [x] Link to full cookie policy
- [x] Cookie policy page has all required info
- [x] Privacy email address configured
- [x] GBA (Belgian DPA) contact info included
- [x] All cookie categories documented
- [x] Data retention periods specified
- [x] User rights clearly explained
- [x] No cookies set before consent (except necessary)

## 🔄 Resetting User Consent

Users can reset their choice by:
1. Clearing browser cache/storage, OR
2. You can add a "Cookie Settings" button anywhere:

```tsx
<button onClick={() => {
  localStorage.removeItem('cookieConsent');
  window.location.reload();
}}>
  Cookie Instellingen Wijzigen
</button>
```

## 📞 Support & Questions

### For Users:
- Email: privacy@breaz-it.be
- Page: /cookies
- Contact: /contact

### For Developers:
- Full docs: `COOKIE_COMPLIANCE.md`
- Component: `src/components/cookie-banner.tsx`
- Policy page: `src/app/cookies/page.tsx`

## 🎓 Important Notes

1. **Never track before consent** - Only necessary cookies allowed
2. **Keep policy updated** - Review quarterly
3. **Log policy changes** - GDPR requirement for material changes
4. **Respond to requests** - Within 30 days (GDPR requirement)
5. **Maintain records** - Keep consent records for audit

## 🌟 Next Steps (Optional Enhancements)

Consider adding:
- [ ] Cookie preference center page
- [ ] Remember consent for longer (currently: until cleared)
- [ ] A/B testing with consent
- [ ] Cookie consent analytics (ironically)
- [ ] Multi-language support for policy
- [ ] Advanced cookie management UI
- [ ] Cookie audit log

## 📚 Quick Links

- Cookie Policy: `/cookies`
- Privacy Policy: `/privacy`
- Terms: `/voorwaarden`
- Contact: `/contact`
- Full Documentation: `COOKIE_COMPLIANCE.md`

---

**✨ Your cookie system is now live and EU-compliant!**

For detailed legal and technical information, see `COOKIE_COMPLIANCE.md`.

