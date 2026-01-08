"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoWatermark from "./LogoWatermark";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  backgroundImage: string;
  isDownloadCard?: boolean;
  index?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  backgroundImage,
  isDownloadCard = false,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      className={`group relative rounded-lg p-8 lg:p-10 transition-all duration-300 cursor-pointer flex flex-col text-left overflow-hidden border border-gray-200 ${
        isDownloadCard ? "bg-primary" : "bg-white"
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      {/* Background Image - Shows on hover (only for non-download cards) */}
      {!isDownloadCard && (
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1 }}
        >
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </motion.div>
      )}

      {/* Logo Watermark - Only for download card */}
      {isDownloadCard && <LogoWatermark opacity={10} />}

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="mb-6"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`transition-colors duration-300 ${
              isDownloadCard
                ? "text-white"
                : "text-primary group-hover:text-white"
            }`}
          >
            {icon}
          </div>
        </motion.div>

        {/* Title */}
        <h3
          className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
            isDownloadCard
              ? "text-white"
              : "text-primary group-hover:text-white"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`text-base md:text-lg lg:text-xl leading-relaxed transition-colors duration-300 ${
            isDownloadCard
              ? "text-white/90"
              : "text-gray-600 group-hover:text-white"
          }`}
        >
          {description}
        </p>

        {/* Download Button for last card */}
        {isDownloadCard && (
          <motion.button
            className="mt-6 px-6 py-3 bg-white text-primary font-semibold rounded border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 relative z-20 hover:opacity-90 cursor-pointer"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/assets/Plaquette IzyTechnology.pdf";
              link.download = "Plaquette IzyTechnology.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Téléchargez maintenant
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
