"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/public/assets/whiteLogo.png";
import LogoWatermark from "./LogoWatermark";
export default function Footer() {
  const pathname = usePathname();
  const isPrivacyPage = pathname === "/privacy";
  const isDonneesPersonnellesPage = pathname === "/donnees-personnelles";
  return (
    <footer className="bg-[#0033a0] text-white py-12 px-8 lg:px-16 relative overflow-hidden">
      <LogoWatermark
        opacity={10}
        position="custom"
        containerClassName="left-1/2 -translate-x-1/2 -mt-12"
      />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-center gap-8">
          {/* Left - Logo and Tagline */}
          <div className="shrink-0">
            <Link
              href="/"
              className="flex items-center flex-col gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="relative">
                <Image src={logo} alt="Logo" className="w-10 h-10" />
              </div>
              <span className="text-2xl font-bold">IzyTechnology</span>
            </Link>
            {/* <p className="text-xs  text-right font-mono -mt-1">simplement efficace</p> */}
          </div>

          {/* Right - Contact Info */}
          <div className="text-center lg:text-right space-y-2">
            <p className="text-sm">IzyTechnology, société de conseil SI</p>
            <p className="text-sm">RC CI-CRDSBM-2018-B-869</p>
            <p className="text-sm">BP 563 Grand-Bassam, Côte d&apos;Ivoire</p>
            <p className="text-sm">
              <a
                href="mailto:info@izytechnology.com"
                className="hover:text-gray-200 transition-colors"
              >
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
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-end">
            {isPrivacyPage ? (
              <span className="text-white/80 underline">
                Mentions légales
              </span>
            ) : (
              <Link
                href="/privacy"
                className="text-white/80 hover:text-white transition-colors underline"
              >
                Mentions légales
              </Link>
            )}
            {isDonneesPersonnellesPage ? (
              <span className="text-white/80 underline">
                Données personnelles
              </span>
            ) : (
              <Link
                href="/donnees-personnelles"
                className="text-white/80 hover:text-white transition-colors underline"
              >
                Données personnelles
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
