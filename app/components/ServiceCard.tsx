import { ReactNode } from 'react';
import Image from 'next/image';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  backgroundImage: string;
  isDownloadCard?: boolean;
}

export default function ServiceCard({ 
  icon, 
  title, 
  description, 
  backgroundImage,
  isDownloadCard = false
}: ServiceCardProps) {
  return (
    <div className={`group relative rounded-lg p-8 lg:p-12 transition-all duration-300 cursor-pointer flex flex-col text-left overflow-hidden border border-gray-200 ${
      isDownloadCard ? 'bg-primary' : 'bg-white'
    }`}>
      {/* Background Image - Shows on hover (only for non-download cards) */}
      {!isDownloadCard && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
          <Image 
            src={backgroundImage} 
            alt={title} 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6">
          <div className={`transition-colors duration-300 ${
            isDownloadCard 
              ? 'text-white' 
              : 'text-primary group-hover:text-white'
          }`}>
            {icon}
          </div>
        </div>
        
        {/* Title */}
        <h3 className={`text-xl lg:text-2xl font-bold mb-4 transition-colors duration-300 ${
          isDownloadCard 
            ? 'text-white' 
            : 'text-primary group-hover:text-white'
        }`}>
          {title}
        </h3>
        
        {/* Description */}
        <p className={`leading-relaxed transition-colors duration-300 ${
          isDownloadCard 
            ? 'text-white/90' 
            : 'text-gray-600 group-hover:text-white'
        }`}>
          {description}
        </p>
        
        {/* Download Button for last card */}
        {isDownloadCard && (
          <button className="mt-6 px-6 py-3 bg-white text-primary font-semibold rounded border-2 border-white hover:bg-transparent hover:text-white transition-colors duration-300 relative z-20">
            téléchargement →
          </button>
        )}
      </div>
    </div>
  );
}

