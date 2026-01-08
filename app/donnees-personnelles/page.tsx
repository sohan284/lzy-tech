"use client";

import { motion } from "framer-motion";
import NoticeHeroSection from "../components/NoticeHeroSection";

export default function DonneesPersonnelles() {
  return (
    <div className="min-h-screen bg-white">
      <NoticeHeroSection title="Données personnelles" />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-lg p-8 md:p-12 space-y-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Content will be provided later */}
            <section>
              <h2 className="section-title text-primary mb-4">
                Cookies et données personnelles
              </h2>
              <div className="space-y-3 section-text text-gray-700">
                <p>
                  {/* Content to be added */}
                </p>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

