# IzyTechnology Website - Administration Guide

This guide explains how to make common updates to the website without requiring technical knowledge.

## Table of Contents
1. [Modifying Texts](#modifying-texts)
2. [Replacing Images](#replacing-images)
3. [Updating Links](#updating-links)

---

## Modifying Texts

### Home Page Content

**Location:** `app/page.tsx`

The main page content is organized in sections. Each section is a separate component:

- **Hero Section**: `app/components/HeroSection.tsx`
- **About Section**: `app/components/AboutSection.tsx`
- **Features Section**: `app/components/FeaturesSection.tsx`
- **Services Section**: `app/components/ServicesSection.tsx`
- **Partnership Section**: `app/components/PartnershipSection.tsx`
- **Clients Section**: `app/components/ClientsSection.tsx`
- **CTA Section**: `app/components/CTASection.tsx`
- **Trust Section**: `app/components/TrustSection.tsx`

**To modify text:**

1. Open the component file (e.g., `app/components/HeroSection.tsx`)
2. Find the text you want to change (use search: Ctrl+F / Cmd+F)
3. Edit the text between quotes
4. Save the file
5. The changes will appear automatically in development mode

**Example - Changing Hero Title:**
```tsx
// In app/components/HeroSection.tsx
<h1 className="...">
  Your New Title Here
</h1>
```

### Contact Page

**Location:** `app/contact/ContactForm.tsx`

- Form labels and placeholders can be modified directly in the component
- Error messages are in `app/actions/contact.ts` (lines 64-98)

### Footer

**Location:** `app/components/Footer.tsx`

- Company information (lines 36-46)
- Copyright text (line 53)
- Email address (line 44)

### Navigation

**Location:** `app/components/Navigation.tsx`

- Menu items and links

### Privacy & Data Protection Pages

- **Privacy Policy**: `app/privacy/page.tsx`
- **Data Protection**: `app/donnees-personnelles/page.tsx`

---

## Replacing Images

### Logo

**Location:** `public/assets/logo.png`

1. Replace the file `public/assets/logo.png` with your new logo
2. Keep the same filename OR update references in:
   - `app/components/Navigation.tsx` (line 7)
   - `app/components/Footer.tsx` (line 6)

**Recommended size:** 320x80px (or maintain aspect ratio)

### Hero Section Image

**Location:** `app/components/HeroSection.tsx`

1. Add your image to `public/assets/` folder
2. Update the import (around line 7):
   ```tsx
   import heroImage from "@/public/assets/your-image.jpg";
   ```
3. Update the Image component `src` prop

### Section Background Images

**Common locations:**
- **CTA Section**: `app/components/CTASection.tsx` - uses `public/assets/cta.jpg`
- **Contact Page**: `app/contact/ContactForm.tsx` - uses `public/assets/contactImage.jpg`
- **Partnership Section**: `app/components/PartnershipSection.tsx` - uses `public/assets/partnership.jpg`

**To replace:**
1. Add new image to `public/assets/` folder
2. Update the import statement
3. Update the `src` prop in the Image component

### Icon Images

**Location:** `public/assets/icons/`

- Service icons, feature icons, etc.
- Replace files while keeping the same filename
- OR update references in the component files

**Example - Service Icons:**
- Icons are in `public/assets/icons/`
- Referenced in `app/components/ServicesSection.tsx` or `app/components/FeaturesSection.tsx`

---

## Updating Links

### PDF Brochure Download

**Location:** Two places need updating:

1. **`app/components/ClientsSection.tsx`** (lines 246-247):
   ```typescript
   link.href = "/assets/Plaquette IzyTechnology.pdf";
   link.download = "Plaquette IzyTechnology.pdf";
   ```

2. **`app/components/ServiceCard.tsx`** (lines 101-102):
   ```typescript
   link.href = "/assets/Plaquette IzyTechnology.pdf";
   link.download = "Plaquette IzyTechnology.pdf";
   ```

**To update:**
1. Replace the PDF file in `public/assets/` folder
2. Update the filename in both locations above
3. Update the `download` attribute if the filename changed

**Note:** The PDF must be placed in `public/assets/` folder to be accessible

### Social Media Links

**Location:** `app/page.tsx` (lines 26-30)

Currently commented out. To add social media links:

```tsx
sameAs: [
  "https://www.linkedin.com/company/izytechnology",
  "https://twitter.com/izytechnology",
  "https://www.facebook.com/izytechnology",
],
```

Uncomment and add your social media URLs.

### Email Links

**Footer Email:**
- **Location:** `app/components/Footer.tsx` (line 44)
- Change `info@izytechnology.com` to your desired email

**Contact Form Email:**
- See [README.md - Form Configuration](#form-configuration) section
- Uses environment variable `CONTACT_EMAIL`

### Internal Navigation Links

**Navigation Menu:**
- **Location:** `app/components/Navigation.tsx`
- Update href attributes for menu items

**Footer Links:**
- **Location:** `app/components/Footer.tsx`
- Privacy and Data Protection links (lines 60-77)

### External Links

Search for `href=` in component files to find all external links:
- Footer links
- CTA buttons
- Social media (if configured)

---

## Quick Reference

| What to Change | File Location | Line(s) |
|---------------|---------------|---------|
| Hero title | `app/components/HeroSection.tsx` | ~20-30 |
| Company email (footer) | `app/components/Footer.tsx` | 44 |
| PDF brochure | `app/components/ClientsSection.tsx` | 246-247 |
| PDF brochure | `app/components/ServiceCard.tsx` | 101-102 |
| Contact form recipient | `.env.local` | CONTACT_EMAIL |
| Social media links | `app/page.tsx` | 26-30 |
| Site URL | `.env.local` | NEXT_PUBLIC_SITE_URL |

---

## Important Notes

1. **Always test changes** in development mode before deploying
2. **Image optimization**: Next.js automatically optimizes images, but large files may slow the site
3. **Text length**: Keep text similar in length to maintain layout
4. **Special characters**: Use `&apos;` for apostrophes in JSX (e.g., `l&apos;entreprise`)
5. **Environment variables**: Changes to `.env.local` require server restart

---

## Need Help?

If you encounter issues:
1. Check the browser console for errors (F12)
2. Verify file paths are correct
3. Ensure image files exist in the specified locations
4. Check that environment variables are set correctly
