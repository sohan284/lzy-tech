"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/public/assets/whiteLogo.png";

interface LogoWatermarkProps {
  opacity?: number; // 0-100
  size?: {
    width: number;
    height: number;
  };
  position?: "center" | "custom";
  className?: string;
  animated?: boolean;
  initialOpacity?: number;
  containerClassName?: string;
  showOnHover?: boolean; // For cards that show on hover
}

export default function LogoWatermark({
  opacity = 10,
  size = { width: 250, height: 300 },
  position = "center",
  className = "",
  animated = false,
  initialOpacity,
  containerClassName = "",
  showOnHover = false,
}: LogoWatermarkProps) {
  const opacityValue = opacity / 100;

  const imageElement = (
    <Image
      src={logo}
      alt="Logo watermark"
      width={size.width}
      height={size.height}
      className={`w-[${size.width}px] h-[${size.height}px] object-contain ${className}`}
      style={showOnHover ? {} : { opacity: opacityValue }}
    />
  );

  let containerClasses = "";

  if (position === "center") {
    if (showOnHover) {
      containerClasses = `absolute inset-0 z-0 flex items-center justify-center pointer-events-none ${containerClassName}`;
    } else {
      containerClasses = `absolute inset-0 flex items-center justify-center pointer-events-none ${containerClassName}`;
    }
  } else {
    containerClasses = `absolute pointer-events-none ${containerClassName}`;
  }

  if (showOnHover) {
    return (
      <div
        className={`${containerClasses} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      >
        <Image
          src={logo}
          alt="Logo watermark"
          width={size.width}
          height={size.height}
          className={`w-[${size.width}px] h-[${size.height}px] object-contain ${className}`}
          style={{ opacity: opacityValue }}
        />
      </div>
    );
  }

  if (animated) {
    return (
      <motion.div
        className={containerClasses}
        initial={{ opacity: initialOpacity ?? opacityValue, scale: 0.8 }}
        animate={{ opacity: opacityValue, scale: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        {imageElement}
      </motion.div>
    );
  }

  return <div className={containerClasses}>{imageElement}</div>;
}
