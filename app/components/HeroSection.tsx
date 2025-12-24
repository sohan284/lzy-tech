import Image from 'next/image';
import backgroundImage from '@/public/assets/hero.jpg';
import Navigation from './Navigation';
export default function HeroSection() {
    return (
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image Container - Replace with your image */}
        <div className="absolute inset-0 bg-[#0a1628]">
          <Image src={backgroundImage} alt="Hero Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040437]/95 via-[#040437]/80 to-[#040437]/30"></div>
          
          {/* Geometric circles overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 border border-blue-400/30 rounded-full"></div>
            <div className="absolute top-40 left-32 w-64 h-64 border border-blue-400/20 rounded-full"></div>
            <div className="absolute top-10 left-20 w-48 h-48 border border-blue-400/40 rounded-full"></div>
          </div>
        </div>
        
        {/* Navigation */}
       <Navigation/>
        
        {/* Hero Content */}
        <div className="relative z-10 px-8 lg:px-16 pt-20 pb-32 max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight">
              Décidez vite,<br />agissez juste.
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl">
              Ne laissez plus la complexité de vos données ou de vos processus freiner votre croissance. Que vous soyez une ETI, PME ou grande organisation, IzyTechnology vous aide à <span className="text-yellow-500">fiabiliser vos données, sécuriser vos revenus et simplifier vos opérations.</span>
            </p>
            
            {/* Quote with accent line */}
            <div className="flex items-start gap-4 mb-12">
              <div className="w-1 h-24 bg-yellow-500 shrink-0 mt-1"></div>
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
                Nous mettons 20 ans d&apos;expérience terrain au service de vos enjeux, avec une exigence de rigueur et de simplicité.
              </p>
            </div>
            
            {/* CTA Button */}
            <button className="px-8 py-4 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors rounded-lg flex items-center gap-2 text-lg">
              Parler de vos enjeux →
            </button>
          </div>
        </div>
      </section>
    );
  }