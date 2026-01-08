"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import backgroundImage from "@/public/assets/partnership.jpg";

export default function PartnershipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 style={{ textAlign: "center" }} className="section-title text-primary mb-4">
            Plus qu&apos;un conseil,
            <br />
            un partenaire de vérité.
          </h2>
          <p style={{ textAlign: "center" }} className="section-text font-bold text-gray-600 italic max-w-2xl mx-auto">
            &quot;Notre croissance repose sur une règle d&apos;or : nous ne
            vendons pas du temps, nous vendons de l&apos;impact.&quot;
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-gray-200 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg
                    className="w-24 h-24 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm">Replace with team image</p>
                </div>
              </div>
              <Image
                src={backgroundImage}
                alt="Partnership Background"
                fill
                className="object-cover"
              />
              {/* Decorative border accent */}
              <motion.div
                className="absolute -top-4 -left-4 w-32 h-1 bg-yellow-500"
                initial={{ width: 0 }}
                animate={isInView ? { width: 128 } : {}}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Right - Content Cards */}
          <motion.div
            className="space-y-8 relative"
            initial="hidden"
            animate={isInView ? "visible" : {}}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* Vertical line connecting the numbers - stops at center of third circle */}
            <div className="absolute left-6 top-6 w-0.5 bg-primary/30 h-[calc(100%-12rem)]"></div>
            {/* Card 1 - L'Honnêteté Radicale */}
            <motion.div
              className="flex gap-6"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ x: 5 }}
            >
              <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-full bg-white text-primary border-2 border-primary flex items-center justify-center font-bold"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  01
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  L&apos;Honnêteté Radicale
                </h3>
                <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-3">
                  Nous savons dire NON.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Si la promesse de valeur n&apos;est pas atteignable ou si nous
                  n&apos;avons pas la certitude de réussir, nous refusons la
                  mission. Nous n&apos;acceptons que les défis que nous pouvons
                  relever jusqu&apos;au bout.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - L'Obsession du Concret */}
            <motion.div
              className="flex gap-6"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ x: 5 }}
            >
              <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  02
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  L&apos;Obsession du Concret
                </h3>
                <p className="text-base md:text-xl lg:text-xl font-semibold text-gray-800 mb-3">
                  Au-delà des slides.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Vous n&apos;avez pas besoin d&apos;un énième rapport théorique
                  qui finit dans un tiroir. Nous livrons des solutions
                  éprouvées, des processus installés et des outils configurés
                  pour agir dès le lendemain.
                </p>
              </div>
            </motion.div>

            {/* Card 3 - L'Adaptation Terrain */}
            <motion.div
              className="flex gap-6"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ x: 5 }}
            >
              <div className="flex flex-col items-center flex-shrink-0 relative z-10">
                <motion.div
                  className="w-12 h-12 rounded-full bg-white text-primary border-2 border-primary flex items-center justify-center font-bold"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  03
                </motion.div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  L&apos;Adaptation Terrain
                </h3>
                <p className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-3">
                  La réalité dicte la méthode.
                </p>
                <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Nous appliquons la rigueur des standards internationaux, mais
                  nous l&apos;adaptons toujours à vos réalités locales et
                  opérationnelles. C&apos;est la méthode qui s&apos;adapte à
                  votre terrain, jamais l&apos;inverse.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
