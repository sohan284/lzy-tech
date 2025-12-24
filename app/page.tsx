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
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <PartnershipSection />
      <ClientsSection />
      <CTASection />
      <TrustSection />
    </div>
  );
}
