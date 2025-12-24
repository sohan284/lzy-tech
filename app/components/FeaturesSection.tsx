'use client';

import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

// Icon components - defined outside render
const SereniteIcon = () => (
  <svg 
    className="w-16 h-16" 
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
    <line x1="8" y1="16" x2="8" y2="20" strokeWidth={1.5} strokeLinecap="round" />
    <circle cx="8" cy="20" r="1.5" fill="currentColor" />
    <line x1="12" y1="16" x2="12" y2="20" strokeWidth={1.5} strokeLinecap="round" />
    <circle cx="12" cy="20" r="1.5" fill="currentColor" />
    <line x1="16" y1="16" x2="16" y2="20" strokeWidth={1.5} strokeLinecap="round" />
    <circle cx="16" cy="20" r="1.5" fill="currentColor" />
  </svg>
);

const RentabiliteIcon = () => (
  <svg 
    className="w-16 h-16" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={1.5} 
      d="M9 12.5V11a3 3 0 116 0v1.5M9 12.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75V11a3 3 0 10-6 0v1.5M9 12.5v-1a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v1M12 8v-2M12 16v-2" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={1.5} 
      d="M12 4.5v2M12 15.5v2M14 6.5h-1.5a1.5 1.5 0 00-1.5 1.5v1a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5H12" 
    />
  </svg>
);

const FluiditeIcon = () => (
  <svg 
    className="w-16 h-16" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={1.5} 
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
      opacity="0.4"
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={1.5} 
      d="M8 18l4-4m0 0l4 4m-4-4v-6" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={1.5} 
      d="M12 8l-4 4m0 0l4 4m-4-4h6" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={1.5} 
      d="M16 8l-4 4m0 0l-4 4m4-4h-6" 
    />
  </svg>
);

export default function FeaturesSection() {
  const features = [
    {
      icon: <SereniteIcon />,
      title: 'Sérénité',
      description: 'Vous décidez sur la base de chiffres fiables, approuvés par Finance, Métiers et SI.'
    },
    {
      icon: <RentabiliteIcon />,
      title: 'Rentabilité',
      description: 'Vous encaissez ce que vous produisez, en limitant durablement les pertes et erreurs de facturation.'
    },
    {
      icon: <FluiditeIcon />,
      title: 'Fluidité',
      description: 'Vous simplifiez vos processus et vos outils, pour que les équipes se concentrent sur ce qui crée vraiment de la valeur.'
    }
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

