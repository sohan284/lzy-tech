"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import backgroundImage from "@/public/assets/contactHero.jpg";
import Navigation from "./Navigation";
import LogoWatermark from "./LogoWatermark";

export default function ContactHeroSection() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-[#0a1628]">
        <Image
          src={backgroundImage}
          alt="Contact Hero Background"
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
              delay: 0.3,
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
              delay: 0.2,
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
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* <Image src={bgShape} alt="Background Shape" className="absolute bottom-0 left-0" /> */}
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 px-8 lg:px-16 pt-24 pb-20 max-w-[1440px] mx-auto">
        <div className="">
          <motion.h1
          style={{textAlign: "center"}}
            className="hero-title text-white mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Construisons
            <br />
            ensemble la suite
          </motion.h1>

          <motion.p
            style={{textAlign: "center"}}
            className="section-text text-white mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          >
            Dites-nous en quelques mots ce qui vous préoccupe aujourd&apos;hui :{" "}
            <span className="text-yellow-500 font-semibold">
              fiabilité des chiffres
            </span>
            ,{" "}
            <span className="text-yellow-500 font-semibold">
              sécurisation des revenus
            </span>
            ,{" "}
            <span className="text-yellow-500 font-semibold">
              fluidité de vos processus
            </span>{" "}
            ou{" "}
            <span className="text-yellow-500 font-semibold">
              mise en place d&apos;outils adaptés
            </span>
            .
          </motion.p>

          <motion.p
            style={{textAlign: "center"}}
            className="section-text-small text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            Nous reviendrons vers vous pour un premier échange, sans engagement,
            afin de comprendre vos enjeux et vérifier si nous sommes le bon
            partenaire pour vous.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
