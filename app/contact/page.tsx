import { submitContactForm } from '../actions/contact';
import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact Us - LZY Tech',
  description: 'Get in touch with LZY Tech. Have a question or want to work together? We\'d love to hear from you.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have a question or want to work together? We&apos;d love to hear from you.
          </p>
        </div>

        <ContactForm submitContactForm={submitContactForm} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Email
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              contact@lzytech.com
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Office Hours
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Monday - Friday<br />
              9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
