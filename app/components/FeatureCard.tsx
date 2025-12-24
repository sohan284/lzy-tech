import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg lg:p-16 p-5 hover:bg-blue-900 hover:border-blue-900 transition-all duration-300 cursor-pointer flex flex-col text-center">
      {/* Icon */}
      <div className="mb-6 text-center flex items-center justify-center">
        <div className="text-blue-600 group-hover:text-white transition-colors duration-300 text-center">
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-2xl font-bold text-blue-600 group-hover:text-white mb-4 transition-colors duration-300 text-center    ">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 group-hover:text-white leading-relaxed transition-colors duration-300 grow">
        {description}
      </p>
    </div>
  );
}

