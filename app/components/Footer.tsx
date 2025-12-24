import Image from 'next/image';
import logo from '@/public/assets/whiteLogo.png';
import backgroundImage from '@/public/assets/whiteLogo.png';
  export default function Footer() {
  return (
    <footer className="bg-[#0033a0] text-white py-12 px-8 lg:px-16 relative overflow-hidden">
      <Image src={logo} alt="Logo" className="absolute  opacity-10 left-[45vw]  w-[250px] h-[200px]" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          {/* Left - Logo and Tagline */}
          <div className="flex-shrink-0">
            <div className="flex items-center flex-col gap-2 ">
              <div className="relative">
                <Image src={logo} alt="Logo" className="w-10 h-10" />
              </div>
              <span className="text-2xl font-bold">IzyTechnology</span>
            </div>
            <p className="text-xs  text-right font-mono -mt-1">simplement efficace</p>
          </div>

          {/* Right - Contact Info */}
          <div className="text-left lg:text-right space-y-2">
            <p className="text-sm">
              IzyTechnology, société de conseil SI
            </p>
            <p className="text-sm">
              RC CI-CRDSBM-2018-B-869
            </p>
            <p className="text-sm">
              BP 563 Grand-Bassam, Côte d&apos;Ivoire
            </p>
            <p className="text-sm">
              <a href="mailto:info@izytechnology.com" className="hover:text-gray-200 transition-colors">
                info@izytechnology.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom - Copyright and Legal */}
        <div className="mt-10 pt-6 border-t border-white/20 flex flex-col lg:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white/80">
            © 2025 IzyTechnology. Tous droits réservés.
          </p>
          <a 
            href="/mentions-legales" 
            className="text-white/80 hover:text-white transition-colors underline"
          >
            Mentions légales et Données personnelles
          </a>
        </div>
      </div>
    </footer>
  );
}