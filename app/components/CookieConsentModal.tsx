"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type ConsentStatus = "accepted" | "rejected" | "skipped" | null;

export default function CookieConsentModal() {
  const [showModal, setShowModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Use setTimeout to avoid synchronous setState in effect
    const timer = setTimeout(() => {
      setIsMounted(true);
      // Check localStorage for existing consent
      const consent = localStorage.getItem("cookieConsent") as ConsentStatus;
      // Check sessionStorage to see if user skipped in this session
      const skippedThisSession = sessionStorage.getItem("cookieConsentSkipped");

      // Only show modal if:
      // 1. No consent has been given (not accepted or rejected)
      // 2. User hasn't skipped in this session
      if (
        consent !== "accepted" &&
        consent !== "rejected" &&
        !skippedThisSession
      ) {
        setShowModal(true);
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowModal(false);
    // Here you can initialize analytics or other tracking if needed
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    setShowModal(false);
    // Here you can disable analytics or other tracking if needed
  };

  const handleSkip = () => {
    // Save to sessionStorage so it doesn't show again in this session
    sessionStorage.setItem("cookieConsentSkipped", "true");
    setShowModal(false);
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {showModal && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-[10000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleSkip}
          />

          {/* Modal */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-6 md:right-auto md:max-w-md z-[10001] bg-white rounded-t-2xl md:rounded-2xl shadow-2xl"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  Politique de Cookies
                </h3>
                <button
                  onClick={handleSkip}
                  className="text-gray-400 hover:text-gray-600 transition-colors ml-4"
                  aria-label="Fermer"
                >
                  <svg
                    className="w-5 h-5"
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
              </div>

              {/* Content */}
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ce site utilise des cookies de mesure d&apos;audience afin de
                  mieux comprendre son utilisation et d&apos;améliorer nos
                  contenus. Aucun cookie publicitaire n&apos;est utilisé. Vous
                  pouvez accepter ou refuser ces cookies.{" "}
                  <Link
                    href="/donnees-personnelles"
                    className="text-primary hover:underline font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Don't close modal when clicking the link
                    }}
                  >
                    En savoir plus
                  </Link>
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Accepter
                </button>
                <button
                  onClick={handleReject}
                  className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Refuser
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
