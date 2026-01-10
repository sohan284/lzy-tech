"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import backgroundImage from "@/public/assets/cta.jpg";
import LogoWatermark from "./LogoWatermark";

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
          className="object-cover object-[80%_center] lg:object-center"
        />
        {/* Dark blue overlay with pattern */}
        <div className="absolute inset-0 bg-[#002FA7] opacity-90 lg:opacity-50"></div>
        {/* Responsive blue overlay shape */}
        <motion.div
          className="absolute hidden lg:block w-[85vw] md:w-[80vw] lg:w-[85vw] xl:w-[75vw] h-full -left-20 md:-left-32 lg:-left-40 bg-white/70 z-20 rounded-br-[60%] md:rounded-br-[70%] lg:rounded-br-[75%] 2xl:rounded-br-[80%] overflow-hidden"
          initial={{ x: -200 }}
          animate={isInView ? { x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Logo Watermark */}
          <LogoWatermark opacity={20} />
        </motion.div>
       
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 xl:py-32">
        {/* Mobile Layout: Title, Image, then white card with text */}
        <div className="lg:hidden space-y-0">
          {/* Mobile Title - Outside the card */}
          <motion.h2
            className="section-title text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Vous ne rentrez pas pas dans les cases ? Parlons-en.
          </motion.h2>

          {/* Mobile Image */}
          <motion.div
            className="relative w-full h-[300px] sm:h-[400px] mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            <Image
              src={backgroundImage}
              alt="CTA"
              fill
              className="object-cover rounded-t-lg"
            />
          </motion.div>

          {/* Mobile White Card with Text */}
          <motion.div
            className="bg-white rounded-b-lg p-6 md:p-8 -mt-1 mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >

            <motion.div
              className="space-y-4 mb-6"
              initial="hidden"
              animate={isInView ? "visible" : {}}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              <motion.p
                className="section-text text-gray-700"
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
                className="section-text text-gray-700"
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
                className="section-text text-gray-700"
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
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
            >
              <Link href="/contact">
                <motion.button className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold hover:bg-red-700 transition-all duration-300 rounded-lg text-lg hover:opacity-90 cursor-pointer w-full sm:w-auto justify-center">
                  <span className="whitespace-nowrap">
                    Prenez contact maintenant
                  </span>
                </motion.button>ƒ
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Desktop Layout: Keep original layout */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center min-h-[500px] md:min-h-[600px]">
          {/* Left Section - Text Content */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <motion.h2
              className="section-title text-primary mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
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
                    staggerChildren: 0.08,
                  },
                },
              }}
            >
              <motion.p
                className="section-text text-black"
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
                className="section-text text-black"
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
                className="section-text text-black"
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
              className="text-center lg:text-left"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.3, ease: "easeOut" }}
            >
              <Link href="/contact">
                <motion.button className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4  text-white font-semibold rounded-lg bg-red-600 hover:bg-red-700 transition-all duration-300 text-base md:text-lg  sm:w-auto justify-center hover:opacity-90 cursor-pointer">
                  <span className="whitespace-nowrap">
                    Prenez contact maintenant
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section - Image with Widget Overlay */}
          <motion.div
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
