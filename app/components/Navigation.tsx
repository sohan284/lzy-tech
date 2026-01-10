"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/public/assets/logo.png";
import Image from "next/image";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide section navigation items on contact and privacy pages
  const showSectionLinks = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if at top
      setIsAtTop(currentScrollY < 10);

      // Show header when at top or scrolling up
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50  transition-colors duration-300 ${
          isAtTop ? "bg-transparent" : "bg-primary/50 backdrop-blur-sm"
        }`}
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between px-8 lg:px-16 py-6 max-w-[1440px] mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            
            <Image src={logo} alt="Logo" className="w-[160px] h-16" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8">
            {showSectionLinks && (
              <>
                <a
                  href="#services"
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("services");
                  }}
                >
                  A propos
                </a>
                <a
                  href="#cta"
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("cta");
                  }}
                >
                  Vos secteurs
                </a>
                <a
                  href="#approche"
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("approche");
                  }}
                >
                  Notre Approche
                </a>
                <a
                  href="#engagements"
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("engagements");
                  }}
                >
                  Nos services
                </a>
                <a
                  href="#impact"
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("impact");
                  }}
                >
                  Notre impact
                </a>
              </>
            )}
            {!showSectionLinks && (
              <Link
                href="/"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Accueil
              </Link>
            )}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors rounded flex items-center gap-2"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Burger Menu Button */}
          <button
            className="xl:hidden text-white focus:outline-none relative z-[9999]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Rendered outside nav for proper positioning */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-[9999] xl:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-screen w-80 bg-[#0F172A] shadow-xl z-[9999] xl:hidden overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 text-white focus:outline-none z-[10000] hover:opacity-80 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col p-8 pt-20">
                {showSectionLinks && (
                  <>
                    <a
                      href="#services"
                      className="text-white hover:text-gray-300 transition-colors py-4 border-b border-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo("services");
                      }}
                    >
                      A propos
                    </a>
                    <a
                      href="#cta"
                      className="text-white hover:text-gray-300 transition-colors py-4 border-b border-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo("cta");
                      }}
                    >
                      Vos secteurs
                    </a>
                    <a
                      href="#approche"
                      className="text-white hover:text-gray-300 transition-colors py-4 border-b border-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo("approche");
                      }}
                    >
                      Notre Approche
                    </a>
                    <a
                      href="#engagements"
                      className="text-white hover:text-gray-300 transition-colors py-4 border-b border-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo("engagements");
                      }}
                    >
                      Nos services
                    </a>
                    <a
                      href="#impact"
                      className="text-white hover:text-gray-300 transition-colors py-4 border-b border-white/10"
                      onClick={(e) => {
                        e.preventDefault();
                        handleScrollTo("impact");
                      }}
                    >
                      Notre impact
                    </a>
                  </>
                )}
                {!showSectionLinks && (
                  <Link
                    href="/"
                    className="text-white hover:text-gray-300 transition-colors py-4 border-b border-white/10"
                    onClick={handleLinkClick}
                  >
                    Accueil
                  </Link>
                )}
                <Link
                  href="/contact"
                  className="mt-4 px-6 py-3 bg-red-600 text-white font-medium hover:bg-red-700 transition-colors rounded flex items-center justify-center gap-2"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
