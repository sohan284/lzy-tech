import { submitContactForm } from '../actions/contact';
import ContactForm from './ContactForm';
import ContactHeroSection from '../components/ContactHeroSection';

export const metadata = {
  title: 'Contact Us - IzyTechnology',
  description: 'Contactez IzyTechnology. Nous serions ravis d\'échanger avec vous.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHeroSection />
      <ContactForm submitContactForm={submitContactForm} />
    </div>
  );
}
