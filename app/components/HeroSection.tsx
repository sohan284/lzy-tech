"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import backgroundImage from "@/public/assets/hero.jpg";
import Navigation from "./Navigation";
import LogoWatermark from "./LogoWatermark";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background Image Container - Replace with your image */}
      <div className="absolute inset-0 bg-[#0a1628]">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover object-[70%_center] lg:object-center"
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
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* <Image src={bgShape} alt="Logo" className="absolute bottom-0 left-0" /> */}
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 px-8 lg:px-16 pt-24 pb-32 max-w-[1440px] mx-auto">
        <div className="max-w-3xl hero-title">
          <motion.h1
            className="hero-title text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Décidez vite,
            <br />
            agissez juste.
          </motion.h1>

          <motion.p
            className="section-text text-white/90 mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Ne laissez plus la complexité de vos données ou de vos processus
            freiner votre croissance. Que vous soyez une ETI, PME ou grande
            organisation, IzyTechnology vous aide à{" "}
            <span className="text-yellow-500">
              fiabiliser vos données, sécuriser vos revenus et simplifier vos
              opérations.
            </span>
          </motion.p>

          {/* Quote with accent line */}
          <motion.div
            className="flex items-start gap-4 mb-12"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="w-1 h-24 bg-yellow-500 shrink-0 mt-1"></div>
            <p className="section-text text-white/90">
              Nous mettons 20 ans d&apos;expérience terrain au service de vos
              enjeux, avec une exigence de rigueur et de simplicité.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Link href="/contact">
              <motion.button className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold hover:bg-red-700 transition-all duration-300 rounded-lg text-lg hover:opacity-90 cursor-pointer">
                Discutons de vos enjeux
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
