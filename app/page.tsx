import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import ServicesSection from "./components/ServicesSection";
import PartnershipSection from "./components/PartnershipSection";
import ClientsSection from "./components/ClientsSection";
import CTASection from "./components/CTASection";
import TrustSection from "./components/TrustSection";
import StructuredData from "./components/StructuredData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://izytechnology.com";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IzyTechnology",
  url: siteUrl,
  logo: `${siteUrl}/assets/redLogo.png`,
  description:
    "Ne laissez plus la complexité de vos données ou de vos processus freiner votre croissance. Que vous soyez une ETI, PME ou grande organisation, IzyTechnology vous aide à fiabiliser vos données, sécuriser vos revenus et simplifier vos opérations.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    url: `${siteUrl}/contact`,
  },
  sameAs: [
    // Add social media links when available
    // "https://www.linkedin.com/company/izytechnology",
    // "https://twitter.com/izytechnology",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "IzyTechnology",
  url: siteUrl,
  description:
    "Décidez vite, agissez juste. Solutions technologiques pour fiabiliser vos données, sécuriser vos revenus et simplifier vos opérations.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/contact`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <HeroSection />
      <section id="services" className="scroll-mt-20">
        <AboutSection />
      </section>
      <section id="impact" className="scroll-mt-20">
        <FeaturesSection />
      </section>
      <section id="engagements" className="scroll-mt-20">
        <ServicesSection />
      </section>
      <section id="approche" className="scroll-mt-20">
        <PartnershipSection />
      </section>
      <section id="cta" className="scroll-mt-20">
        <ClientsSection />
      </section>
      <section className="scroll-mt-20">
        <CTASection />
      </section>
      <section id="clients" className="scroll-mt-20">
      <TrustSection />
      </section>
    </div>
  );
}
