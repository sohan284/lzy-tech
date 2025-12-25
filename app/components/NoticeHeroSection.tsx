"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import backgroundImage from "@/public/assets/noticeHero.png";
import Navigation from "./Navigation";
import LogoWatermark from "./LogoWatermark";

export default function NoticeHeroSection() {
  return (
    <section className="relative min-h-[50vh] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-[#0a1628]">
        <Image
          src={backgroundImage}
          alt="Notice Hero Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040437]/95 via-[#040437]/80 to-[#040437]/30"></div>

        {/* Geometric circles overlay */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 border border-primary/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-40 left-32 w-64 h-64 border border-primary/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-10 left-20 w-48 h-48 border border-primary/40 rounded-full"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
      <LogoWatermark
        opacity={30}
        position="custom"
        containerClassName="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animated={true}
        initialOpacity={0}
      />

      {/* Hero Content */}
      <div className="relative z-10 px-8 lg:px-16 pt-20 pb-16 max-w-[1440px] mx-auto">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="hero-title text-white mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Mentions Légales
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
