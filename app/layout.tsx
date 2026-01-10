import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import CookieConsentModal from "./components/CookieConsentModal";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://izytechnology.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "IzyTechnology - Décidez vite, agissez juste",
    template: "%s | IzyTechnology",
  },
  description:
    "Ne laissez plus la complexité de vos données ou de vos processus freiner votre croissance. Que vous soyez une ETI, PME ou grande organisation, IzyTechnology vous aide à fiabiliser vos données, sécuriser vos revenus et simplifier vos opérations.",
  keywords: [
    "IzyTechnology",
    "fiabilisation données",
    "sécurisation revenus",
    "optimisation processus",
    "solutions technologiques",
    "Afrique",
    "Côte d'Ivoire",
    "transformation digitale",
    "ETI",
    "PME",
    "applications métier",
  ],
  authors: [{ name: "IzyTechnology" }],
  creator: "IzyTechnology",
  publisher: "IzyTechnology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "IzyTechnology",
    title: "IzyTechnology - Décidez vite, agissez juste",
    description:
      "Ne laissez plus la complexité de vos données ou de vos processus freiner votre croissance. Que vous soyez une ETI, PME ou grande organisation, IzyTechnology vous aide à fiabiliser vos données, sécuriser vos revenus et simplifier vos opérations.",
    images: [
      {
        url: `${siteUrl}/assets/redLogo.png`,
        width: 1200,
        height: 630,
        alt: "IzyTechnology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IzyTechnology - Décidez vite, agissez juste",
    description:
      "Ne laissez plus la complexité de vos données ou de vos processus freiner votre croissance.",
    images: [`${siteUrl}/assets/redLogo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#002FA7" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        {/* <Navigation /> */}
        <main>{children}</main>
        <Footer />
        <CookieConsentModal />
      </body>
    </html>
  );
}
