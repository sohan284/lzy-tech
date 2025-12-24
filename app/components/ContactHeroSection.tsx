'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import backgroundImage from '@/public/assets/contactHero.jpg';
import Navigation from './Navigation';
import logo from '@/public/assets/whiteLogo.png';
import bgShape from '@/public/assets/bgShape.png';

export default function ContactHeroSection() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 bg-[#0a1628]">
        <Image src={backgroundImage} alt="Contact Hero Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#040437]/95 via-[#040437]/80 to-[#040437]/30"></div>
        
        {/* Geometric circles overlay */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 border border-primary/30 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-40 left-32 w-64 h-64 border border-primary/20 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div 
            className="absolute top-10 left-20 w-48 h-48 border border-primary/40 rounded-full"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ 
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </div>
      </div>
      
      {/* Navigation */}
      <Navigation/>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image src={logo} alt="Logo" className="absolute opacity-60 left-[20%] top-[10%] w-[25vw] h-[25vw]" />
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* <Image src={bgShape} alt="Background Shape" className="absolute bottom-0 left-0" /> */}
      </motion.div>
      
      {/* Hero Content */}
      <div className="relative z-10 px-8 lg:px-16 pt-20 pb-20 max-w-[1440px] mx-auto">
        <div className="">
          <motion.h1 
            className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 leading-tight text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Construisons<br />ensemble la suite
          </motion.h1>
          
          <motion.p 
            className="text-lg lg:text-xl text-white mb-6 leading-relaxed max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Dites-nous en quelques mots ce qui vous préoccupe aujourd&apos;hui :{' '}
            <span className="text-yellow-500 font-semibold">fiabilité des chiffres</span>,{' '}
            <span className="text-yellow-500 font-semibold">sécurisation des revenus</span>,{' '}
            <span className="text-yellow-500 font-semibold">fluidité de vos processus</span> ou{' '}
            <span className="text-yellow-500 font-semibold">mise en place d&apos;outils adaptés</span>.
          </motion.p>
          
          <motion.p 
            className="text-base lg:text-lg text-white/90 leading-relaxed max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Nous reviendrons vers vous pour un premier échange, sans engagement, afin de comprendre vos enjeux et vérifier si nous sommes le bon partenaire pour vous.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

