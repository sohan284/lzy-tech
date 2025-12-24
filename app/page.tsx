import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import PartnershipSection from './components/PartnershipSection';
import ClientsSection from './components/ClientsSection';
import CTASection from './components/CTASection';
import TrustSection from './components/TrustSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <section id="approche" className="scroll-mt-20">
        <AboutSection />
      </section>
      <FeaturesSection />
      <section id="services" className="scroll-mt-20">
        <ServicesSection />
      </section>
      <section id="engagements" className="scroll-mt-20">
        <PartnershipSection />
      </section>
      <section id="clients" className="scroll-mt-20">
        <ClientsSection />
      </section>
      <CTASection />
      <TrustSection />
    </div>
  );
}
