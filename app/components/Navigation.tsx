'use client';

import Link from 'next/link';
import logo from '@/public/assets/redLogo.png';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-8 lg:px-16 py-6 max-w-[1440px] mx-auto">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-white text-xl font-semibold">Izy Technology</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#approche" 
              className="text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('approche');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Notre Approche
            </a>
            <a 
              href="#services" 
              className="text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Services
            </a>
            <a 
              href="#engagements" 
              className="text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('engagements');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Engagements
            </a>
            <a 
              href="#clients" 
              className="text-white hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('clients');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
            >
              Client
            </a>
            <Link href="/privacy" className="text-white hover:text-gray-300 transition-colors">
              Mentions légales
            </Link>
            <Link href="/contact" className="px-6 py-2.5 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors rounded flex items-center gap-2">
              Contact →
            </Link>
          </div>
        </nav>
  );
}

