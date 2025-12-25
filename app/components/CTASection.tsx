"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import backgroundImage from "@/public/assets/cta.jpg";
import whiteLogo from "@/public/assets/whiteLogo.png";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      ref={ref}
      className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[80vh] overflow-hidden"
    >
      {/* Full Section Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="CTA Background"
          fill
          className="object-cover"
        />
        {/* Dark blue overlay with pattern */}
        <div className="absolute inset-0 bg-[#002FA7] opacity-50"></div>
        {/* Responsive blue overlay shape */}
        <motion.div
          className="absolute hidden lg:block w-[85vw] md:w-[75vw] lg:w-[70vw] h-full -left-20 md:-left-32 lg:-left-40 bg-primary/90 z-20 rounded-br-[60%] md:rounded-br-[70%] lg:rounded-br-[80%] overflow-hidden"
          initial={{ x: -200 }}
          animate={isInView ? { x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Logo Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Image
              src={whiteLogo}
              alt="IzyTechnology Logo"
              width={400}
              height={300}
              className="opacity-10 w-[400px] h-[300px] object-contain"
            />
          </div>
        </motion.div>
        {/* <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src={bgShape}
            alt="Logo"
            className="absolute bottom-0 left-0 z-20"
          />
        </motion.div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 xl:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center min-h-[500px] md:min-h-[600px]">
          {/* Left Section - Text Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2
              className="section-title text-white mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Vous ne rentrez pas pas dans les cases ? Parlons-en.
            </motion.h2>

            <motion.div
              className="space-y-4 md:space-y-6 mb-6 md:mb-10"
              initial="hidden"
              animate={isInView ? "visible" : {}}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <motion.p
                className="section-text text-white"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Vous faites face à un enjeu diffus, à un SI qui s&apos;est
                construit par couches successives, à des données dont vous ne
                savez plus si vous pouvez vous y fier ou à un chantier
                stratégique qui n&apos;avance pas.
              </motion.p>

              <motion.p
                className="section-text text-white"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Vous n&apos;avez peut-être pas encore les mots précis pour
                définir le problème, mais vous sentez qu&apos;il y a un risque,
                une perte ou une complexité qui n&apos;est plus acceptable.
              </motion.p>

              <motion.p
                className="section-text text-white"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Notre rôle est justement de vous aider à clarifier ce point de
                départ, poser les bonnes questions, identifier les leviers de
                valeur et construire avec vous une démarche adaptée, réaliste et
                assumée.
              </motion.p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            >
              <Link href="/contact">
                <motion.button className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white text-[#002FA7] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 text-base md:text-lg w-full sm:w-auto justify-center hover:opacity-90 cursor-pointer">
                  <span className="whitespace-nowrap">
                    Echangez avec un expert IzyTechnology
                  </span>
                  <span className="hidden sm:inline">+</span>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section - Image with Widget Overlay */}
          <motion.div
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
