import Link from 'next/link';
import logo from '@/public/assets/redLogo.png';
import Image from 'next/image';
export default function Navigation() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-8 lg:px-16 py-6 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-white text-xl font-semibold">Izy Technology</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Notre Approche</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Services</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Engagements</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Client</a>
            <button className="px-6 py-2.5 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors rounded flex items-center gap-2">
              Contact →
            </button>
          </div>
        </nav>
  );
}

