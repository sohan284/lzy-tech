# Security & SEO Setup Guide

## ✅ Completed Implementations

All critical security and SEO recommendations have been implemented.

## 🔐 Environment Variables Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# SMTP Configuration for Contact Form
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Google Analytics 4 (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL (for sitemap and canonical URLs)
NEXT_PUBLIC_SITE_URL=https://izytechnology.com

# Contact Email (Optional - defaults to SMTP_USER)
CONTACT_EMAIL=contact@izytechnology.com
```

### Important Notes:
1. **SMTP_USER and SMTP_PASSWORD are REQUIRED** - The contact form will not work without these.
2. To get a Gmail App Password:
   - Go to Google Account > Security > 2-Step Verification > App passwords
   - Generate a new app password and use it in `SMTP_PASSWORD`
3. **Never commit `.env.local` to version control** - It's already in `.gitignore`

## 🔒 Security Features Implemented

### 1. Environment Variables
- ✅ All sensitive credentials moved to environment variables
- ✅ Contact form uses `process.env.SMTP_USER` and `process.env.SMTP_PASSWORD`
- ✅ Error thrown if environment variables are missing

### 2. Input Validation & Sanitization
- ✅ Zod validation library integrated
- ✅ Field length limits enforced:
  - Prénom/Nom: max 100 characters
  - Organisation: max 100 characters
  - Email: max 255 characters
  - Message: max 500 characters
- ✅ HTML sanitization to prevent XSS attacks
- ✅ All user inputs sanitized before being used in HTML emails

### 3. Rate Limiting
- ✅ Basic rate limiting implemented (5 requests per minute)
- ✅ In-memory store (consider Redis for production)
- ✅ Prevents spam and DoS attacks

### 4. Security Headers
- ✅ Content-Security-Policy (CSP)
- ✅ X-Frame-Options: SAMEORIGIN
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy
- ✅ Strict-Transport-Security (HSTS)

### 5. Error Handling
- ✅ Generic error messages returned to clients
- ✅ Detailed errors logged only in development
- ✅ No stack traces exposed in production

## 📈 SEO Features Implemented

### 1. Metadata Optimization
- ✅ Complete Open Graph tags
- ✅ Twitter Card metadata
- ✅ Canonical URLs
- ✅ Theme color
- ✅ Viewport configuration
- ✅ Comprehensive keywords

### 2. SEO Files
- ✅ `robots.ts` - Search engine crawling rules
- ✅ `sitemap.ts` - XML sitemap generation
- ✅ Automatically accessible at `/robots.txt` and `/sitemap.xml`

### 3. Structured Data (JSON-LD)
- ✅ Organization schema on homepage
- ✅ Website schema with search action
- ✅ Ready for rich snippets in search results

### 4. Google Analytics 4
- ✅ GoogleAnalytics component created
- ✅ Automatically loads when `NEXT_PUBLIC_GA_ID` is set
- ✅ Tracks page views automatically

## 🚀 Next Steps

1. **Create `.env.local`** with your actual credentials
2. **Set up Google Analytics 4**:
   - Create a GA4 property
   - Get your Measurement ID (G-XXXXXXXXXX)
   - Add it to `.env.local` as `NEXT_PUBLIC_GA_ID`
3. **Test the contact form** to ensure emails are sending correctly
4. **Verify security headers** using: https://securityheaders.com
5. **Submit sitemap** to Google Search Console

## 📝 Production Recommendations

1. **Rate Limiting**: Consider using Redis for distributed rate limiting in production
2. **Logging**: Integrate a proper logging service (Sentry, LogRocket) for production error tracking
3. **Monitoring**: Set up uptime monitoring and error alerting
4. **CDN**: Consider using a CDN for static assets
5. **Image Optimization**: Ensure all images are optimized (Next.js Image component is already used)

## ⚠️ Important Security Reminders

1. **Revoke the old Gmail password** that was previously hardcoded
2. **Never commit `.env.local`** to version control
3. **Rotate credentials regularly**
4. **Monitor email sending** for unusual activity
5. **Review rate limiting logs** periodically

