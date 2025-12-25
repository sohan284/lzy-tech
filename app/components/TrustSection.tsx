"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustSection() {
  const partners = [
    {
      name: "Côte d'Ivoire Cables",
      image: "/assets/trust1.png",
      size: {
        width: "w-16",
        height: "h-16",
        lgWidth: "lg:w-20",
        lgHeight: "lg:h-20",
      }, // Reduced size
    },
    {
      name: "bnetd",
      image: "/assets/trust2.png",
      size: {
        width: "w-24",
        height: "h-24",
        lgWidth: "lg:w-32",
        lgHeight: "lg:h-32",
      }, // Default size
    },
    {
      name: "Orange",
      image: "/assets/trust3.png",
      size: {
        width: "w-16",
        height: "h-16",
        lgWidth: "lg:w-20",
        lgHeight: "lg:h-20",
      }, // Default size
    },
    {
      name: "OIC",
      image: "/assets/trust4.1.png",
      size: {
        width: "w-28",
        height: "h-28",
        lgWidth: "lg:w-40",
        lgHeight: "lg:h-40",
      }, // Increased size
    },
    {
      name: "Cellcom",
      image: "/assets/trust5.png",
      size: {
        width: "w-24",
        height: "h-24",
        lgWidth: "lg:w-32",
        lgHeight: "lg:h-32",
      }, // Default size
    },
    {
      name: "Etude Maître CRABE ADJOGOUA Notaire",
      image: "/assets/trust6.png",
      size: {
        width: "w-20",
        height: "h-20",
        lgWidth: "lg:w-28",
        lgHeight: "lg:h-28",
      }, // Default size
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <motion.h2
          className="section-title text-[#002FA7] text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Ils nous font confiance
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              variants={{
                hidden: { opacity: 0, scale: 0.5, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <div
                className={`relative ${partner.size.width} ${partner.size.height} ${partner.size.lgWidth} ${partner.size.lgHeight}`}
              >
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
