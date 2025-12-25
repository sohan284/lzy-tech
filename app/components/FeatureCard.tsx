"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/public/assets/whiteLogo.png";

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Logo Watermark - appears on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-0 flex items-center justify-center pointer-events-none">
        <Image
          src={logo}
          alt="Logo watermark"
          className="w-64 h-64 object-contain"
          width={256}
          height={256}
        />
      </div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="mb-6 text-center flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
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
