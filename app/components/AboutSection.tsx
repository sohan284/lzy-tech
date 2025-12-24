import backgroundImage from '@/public/assets/about.jpg';
import Image from 'next/image';
export default function AboutSection() {
  return (
    <section className="w-full min-h-[900px] grid grid-cols-1 md:grid-cols-12">
      {/* Left Column - Text Content */}
      <div className="w-full col-span-7 bg-[#DAEAF6] flex items-center px-8 ">
        <div className="xl:max-w-[740px] ml-auto">
          {/* Globe Icon */}
          <div className="flex justify-left mb-6">
            <svg 
              className="w-12 h-12 text-[#002FA7]" 
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
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#002FA7] mb-8 text-left leading-tight">
            Depuis l&apos;Afrique, avec la rigueur des standards internationaux
          </h2>

          {/* First Paragraph */}
          <p className="text-lg md:text-xl text-black mb-6 leading-relaxed text-left">
            Nous opérons depuis Abidjan, au plus près des réalités de nos clients africains et internationaux.
          </p>

          {/* Second Paragraph */}
          <p className="text-lg md:text-xl text-black leading-relaxed text-left">
            Cette position nous permet de conjuguer une compréhension fine des contraintes locales avec des exigences élevées en matière de qualité, de reporting et de gouvernance.
          </p>
        </div>
      </div>

      {/* Right Column - Image Placeholder */}
      <div  className="w-full col-span-5 relative  bg-cover bg-center bg-no-repeat flex items-center justify-center">
      <Image src={backgroundImage} alt="About Background" fill className="object-cover" />
      </div>
    </section>
  );
}

