# Email Setup Guide

This guide explains how to configure email functionality for the contact form on the Breaz website.

## Overview

The contact form uses [Resend](https://resend.com) to send emails. When a user submits the contact form, all the information is sent to `siemon@breaz-it.be`.

## Setup Instructions

### 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "Breaz Website Production")
5. Copy the API key (it will only be shown once!)

### 3. Configure Environment Variables

1. Create a `.env.local` file in the root of your project:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Resend API key to `.env.local`:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. **Important**: Never commit `.env.local` to Git! It's already in `.gitignore`.

### 4. Domain Setup (Optional but Recommended)

By default, emails will be sent from `onboarding@resend.dev`. To use your own domain:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `breaz-it.be`)
4. Follow the DNS configuration instructions
5. Wait for DNS verification (usually takes a few minutes)

Once verified, update the API route:

```typescript
// In src/app/api/contact/route.ts
from: 'Breaz Website <noreply@breaz-it.be>', // Update this line
```

### 5. Test the Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/contact`
3. Fill out the form and submit
4. Check that the email arrives at `siemon@breaz-it.be`

## How It Works

### Form Submission Flow

1. **User fills out form** → Contact page (`/contact`)
2. **Form submits** → API route (`/api/contact`)
3. **Server validates** → Checks required fields and email format
4. **Resend sends email** → To `siemon@breaz-it.be`
5. **User gets feedback** → Success or error message

### Email Content

Each email includes:
- Name
- Email address (set as reply-to)
- Company (if provided)
- Phone number (if provided)
- Message
- Timestamp (in Belgian time)

### API Route Details

**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Example Corp", // optional
  "phone": "+32 472 500 762", // optional
  "message": "Message text"
}
```

**Response (Success)**:
```json
{
  "success": true,
  "message": "Email verzonden",
  "id": "email_id_from_resend"
}
```

**Response (Error)**:
```json
{
  "error": "Error message",
  "details": "Detailed error information"
}
```

## Deployment

### Production Environment Variables

When deploying to production (e.g., Vercel, Netlify), add the environment variable:

**Vercel**:
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add `RESEND_API_KEY` with your production API key
4. Save and redeploy

**Netlify**:
1. Go to Site settings
2. Navigate to **Environment variables**
3. Add `RESEND_API_KEY`
4. Save and redeploy

### Rate Limits

Resend free tier includes:
- 3,000 emails/month
- 100 emails/day

If you need more, upgrade to a paid plan at [resend.com/pricing](https://resend.com/pricing).

## Troubleshooting

### Email not being sent

1. **Check API key**: Make sure `RESEND_API_KEY` is set correctly in `.env.local`
2. **Check server logs**: Look for error messages in the terminal
3. **Verify Resend account**: Ensure your Resend account is active
4. **Check rate limits**: You might have exceeded free tier limits

### Email goes to spam

1. **Set up domain verification** in Resend
2. **Add SPF, DKIM records** as instructed by Resend
3. Consider using a verified sending domain instead of `onboarding@resend.dev`

### Form shows error message

1. **Check browser console** for client-side errors
2. **Check network tab** to see the API response
3. **Verify all required fields** are filled

## Security Notes

- API key is stored server-side (not exposed to client)
- Form validation happens on both client and server
- Email addresses are validated with regex
- Rate limiting is handled by Resend
- CORS is automatically handled by Next.js API routes

## Alternative Email Services

If you prefer to use a different service:

### SendGrid
- Replace `resend` with `@sendgrid/mail`
- Update API route with SendGrid configuration

### Nodemailer
- Install `nodemailer`
- Configure SMTP settings
- Update API route accordingly

### EmailJS (Not Recommended)
- Client-side only (less secure)
- API key exposed in browser
- Only use for non-sensitive applications

## Support

For issues with:
- **Resend**: Contact [Resend Support](https://resend.com/support)
- **Website/Code**: Contact Breaz development team

## Files Involved

- `src/app/api/contact/route.ts` - API endpoint
- `src/app/contact/page.tsx` - Contact form page
- `.env.local` - Environment variables (local)
- `.env.example` - Environment variables template

