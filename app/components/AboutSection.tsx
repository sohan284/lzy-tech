'use client';

import backgroundImage from '@/public/assets/about.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full min-h-[900px] grid grid-cols-1 md:grid-cols-12">
      {/* Left Column - Text Content */}
      <motion.div 
        className="w-full col-span-7 bg-[#DAEAF6] flex items-center px-8"
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="xl:max-w-[740px] ml-auto">
          {/* Globe Icon */}
          <motion.div 
            className="flex justify-left mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <svg 
              className="w-12 h-12 text-primary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </motion.div>

          {/* Main Headline */}
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-8 text-left leading-tight"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Depuis l&apos;Afrique, avec la rigueur des standards internationaux
          </motion.h2>

          {/* First Paragraph */}
          <motion.p 
            className="text-lg md:text-xl text-black mb-6 leading-relaxed text-left"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Nous opérons depuis Abidjan, au plus près des réalités de nos clients africains et internationaux.
          </motion.p>

          {/* Second Paragraph */}
          <motion.p 
            className="text-lg md:text-xl text-black leading-relaxed text-left"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Cette position nous permet de conjuguer une compréhension fine des contraintes locales avec des exigences élevées en matière de qualité, de reporting et de gouvernance.
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
        <Image src={backgroundImage} alt="About Background" fill className="object-cover" />
      </motion.div>
    </section>
  );
}

