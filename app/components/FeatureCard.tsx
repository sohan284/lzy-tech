"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import LogoWatermark from "./LogoWatermark";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      className="group bg-white border border-gray-200 rounded-lg lg:p-10 p-5 hover:bg-primary hover:border-primary transition-all duration-300 cursor-pointer flex flex-col text-center relative overflow-hidden"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut" }}
    >
      {/* Logo Watermark - appears on hover */}
      <LogoWatermark showOnHover={true} opacity={10} />

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="mb-6 text-center flex items-center justify-center"
        >
          <div className="text-primary group-hover:text-white transition-colors duration-300 text-center">
            {icon}
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-primary group-hover:text-white mb-4 transition-colors duration-300 text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl text-gray-600 group-hover:text-white leading-relaxed transition-colors duration-300 grow">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
