# IzyTechnology Website - Technical Documentation

## Technologies Used and Versions

### Core Framework
- **Next.js**: 16.1.1
- **React**: 19.2.3
- **React DOM**: 19.2.3
- **TypeScript**: ^5

### Styling & UI
- **Tailwind CSS**: ^4
- **Framer Motion**: ^12.23.26 (for animations)
- **React Icons**: ^5.5.0

### Form & Validation
- **Zod**: ^4.3.5 (for form validation)
- **Nodemailer**: ^7.0.12 (for email sending via SMTP)

### Development Tools
- **ESLint**: ^9
- **Node.js**: ^20 (recommended)

## Project Structure

```
lzy-tech/
├── app/
│   ├── actions/
│   │   └── contact.ts          # Contact form server action
│   ├── components/             # React components
│   ├── contact/                # Contact page
│   ├── privacy/                # Privacy policy page
│   ├── donnees-personnelles/   # Data protection page
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── robots.ts               # Robots.txt configuration
│   └── sitemap.ts              # Sitemap generation
├── public/
│   └── assets/                 # Images and PDF files
├── .env.local                  # Environment variables (not in git)
├── package.json                # Dependencies
└── README.md                   # This file
```

## Building and Deploying the Project

### Prerequisites
- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Create environment file:**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # SMTP Configuration (REQUIRED for contact form)
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-gmail-app-password
   
   # Contact Email Recipient (optional - defaults to SMTP_USER)
   CONTACT_EMAIL=contact@izytechnology.com
   
   # Site URL (for sitemap and canonical URLs)
   NEXT_PUBLIC_SITE_URL=https://izytechnology.com
   
   # Google Analytics (optional)
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Get Gmail App Password:**
   - Go to Google Account > Security > 2-Step Verification
   - Enable 2-Step Verification if not already enabled
   - Go to App passwords
   - Generate a new app password for "Mail"
   - Use this password in `SMTP_PASSWORD`

### Development

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

1. **Build the project:**
   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

2. **Start production server:**
   ```bash
   npm start
   # or
   yarn start
   # or
   pnpm start
   ```

### Deployment on Vercel (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Import project to Vercel:**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. **Configure Environment Variables:**
   - Go to Project Settings > Environment Variables
   - Add all variables from `.env.local`:
     - `SMTP_USER`
     - `SMTP_PASSWORD`
     - `CONTACT_EMAIL` (optional)
     - `NEXT_PUBLIC_SITE_URL`
     - `NEXT_PUBLIC_GA_ID` (optional)

4. **Deploy:**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### Alternative Deployment Options

- **Netlify**: Similar to Vercel, supports Next.js out of the box
- **Self-hosted**: Requires Node.js server and reverse proxy (nginx)

## Form Configuration

### Changing the Contact Form Recipient Address

The contact form email recipient is configured in **`app/actions/contact.ts`** at line 210:

```typescript
const toEmail = process.env.CONTACT_EMAIL || fromEmail;
```

**To change the recipient email:**

1. **Option 1 - Environment Variable (Recommended):**
   - Add or update `CONTACT_EMAIL` in your `.env.local` file:
     ```env
     CONTACT_EMAIL=new-recipient@izytechnology.com
     ```
   - Restart the development server or redeploy

2. **Option 2 - Direct Code Change:**
   - Open `app/actions/contact.ts`
   - Find line 210: `const toEmail = process.env.CONTACT_EMAIL || fromEmail;`
   - Change to: `const toEmail = "new-recipient@izytechnology.com";`
   - **Note:** This is not recommended as it requires code changes for updates

### SMTP Configuration

The contact form uses Gmail SMTP. To use a different email service:

1. **Update `app/actions/contact.ts`** (lines 12-18):
   ```typescript
   const transporter = nodemailer.createTransport({
     host: "smtp.your-provider.com",
     port: 587,
     secure: false,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASSWORD,
     },
   });
   ```

2. **Update environment variables** in `.env.local` with your SMTP credentials

## Additional Configuration

### Site URL
- Configured in `app/layout.tsx` (line 18) and `app/page.tsx` (line 11)
- Set via `NEXT_PUBLIC_SITE_URL` environment variable
- Used for sitemap, canonical URLs, and structured data

### Google Analytics
- Configured in `app/components/GoogleAnalytics.tsx`
- Set via `NEXT_PUBLIC_GA_ID` environment variable
- Optional - remove the component if not needed

## Troubleshooting

### Contact Form Not Sending Emails
1. Verify `SMTP_USER` and `SMTP_PASSWORD` are set in `.env.local`
2. Ensure Gmail App Password is correct (not regular password)
3. Check that 2-Step Verification is enabled on Gmail account
4. Verify environment variables are set in production (Vercel/Netlify)

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check Node.js version (requires 20+)
- Clear `.next` folder and rebuild: `rm -rf .next && npm run build`

## Security Notes

- Never commit `.env.local` to version control (already in `.gitignore`)
- Use App Passwords for Gmail, not your regular password
- In production, use environment variables, not hardcoded credentials
- See `SECURITY_SETUP.md` for detailed security information

## Support

For technical questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
