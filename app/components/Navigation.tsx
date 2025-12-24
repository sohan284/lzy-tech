import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="relative z-20 flex items-center justify-between px-8 lg:px-16 py-6 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">IZ</span>
            </div>
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

