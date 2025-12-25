"use client";

import backgroundImage from "@/public/assets/about.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="w-full min-h-[900px] grid grid-cols-1 md:grid-cols-12"
    >
      {/* Left Column - Text Content */}
      <motion.div
        className="w-full col-span-7 bg-[#DAEAF6] flex items-center px-8"
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="xl:max-w-[740px] ml-auto">
          {/* Main Headline */}
          <motion.h2
            className="section-title text-primary mb-8 text-left"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Depuis l&apos;Afrique, avec la rigueur des standards internationaux
          </motion.h2>

          {/* First Paragraph */}
          <motion.p
            className="section-text text-black mb-6 text-left"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Nous opérons depuis Abidjan, au plus près des réalités de nos
            clients africains et internationaux.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p
            className="section-text text-black text-left"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Cette position nous permet de conjuguer une compréhension fine des
            contraintes locales avec des exigences élevées en matière de
            qualité, de reporting et de gouvernance.
          </motion.p>
        </div>
      </motion.div>

      {/* Right Column - Image Placeholder */}
      <motion.div
        className="w-full col-span-5 relative bg-cover bg-center bg-no-repeat flex items-center justify-center"
        initial={{ x: 50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src={backgroundImage}
          alt="About Background"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
