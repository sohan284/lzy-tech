'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import backgroundImage from '@/public/assets/client.jpg';

export default function ClientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section ref={ref} className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#F6F2E7]">
      <div className="max-w-[1440px] mx-auto">
        {/* Title Section */}
        <motion.div 
          className="mb-12 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002FA7] mb-6">
            Avec qui nous travaillons
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            Pour en savoir plus sur la façon dont nous accompagnons ces organisations, vous pouvez télécharger notre plaquette détaillée, avec plusieurs exemples de missions et d&apos;impacts concrets.
          </p>

          {/* Download Button */}
          <motion.button 
            className="px-8 py-4 bg-red-600 text-white cursor-pointer font-semibold hover:bg-red-700 transition-colors rounded-lg text-lg flex items-center gap-2 mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
                const link = document.createElement('a');
                link.href = '/assets/lyzTech.pdf';
                link.download = 'lyzTech.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
          >
            Télécharger la plaquette IzyTechnology
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.button>
        </motion.div>

        {/* Partners Grid with Central Image */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Partner Categories - Positioned at corners */}
          {/* Top Left - Telecom */}
          <motion.div 
            className="h-full flex lg:flex-col justify-between"
            initial="hidden"
            animate={isInView ? "visible" : {}}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div 
              className="flex flex-col items-end"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-[#002FA7] flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v2m0 0v2m0-2h2m-2 0H10" />
                </svg>
              </motion.div>
              <h3 className="text-lg lg:text-xl font-semibold text-black">
                Acteurs télécoms en Afrique
              </h3>
            </motion.div>
            {/* Bottom Left - Industrial */}
            <motion.div 
              className="flex flex-col items-end"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-[#002FA7] flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 8v2m-2-2v2m4-2h-2m2 0h2" />
                </svg>
              </motion.div>
              <h3 className="text-lg lg:text-xl font-semibold text-black">
                Entreprises industrielles
              </h3>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative w-full h-full mx-auto min-h-[650px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <Image src={backgroundImage} alt="Clients Background" fill className="object-contain" />
          </motion.div>
          
          <motion.div 
            className="h-full flex lg:flex-col justify-between"
            initial="hidden"
            animate={isInView ? "visible" : {}}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Top Right - Public Bodies */}
            <motion.div 
              className="flex flex-col items-start text-left"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-[#002FA7] flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 21V7m14 14V7" />
                </svg>
              </motion.div>
              <h3 className="text-lg lg:text-xl font-semibold text-black">
                Organismes publics
              </h3>
            </motion.div>

            {/* Bottom Right - Services */}
            <motion.div 
              className="flex flex-col items-start"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-[#002FA7] flex items-center justify-center mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l3-3m0 0l3 3m-3-3v12" />
                </svg>
              </motion.div>
              <h3 className="text-lg lg:text-xl font-semibold text-black">
                Acteurs de services<br />(juridiques et financiers)
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

