import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const letters = [
  { char: 'A', file: 'A.svg', scale: 1 },
  { char: 'N', file: 'N.svg', scale: 0.95 },
  { char: 'G', file: 'G.svg', scale: 1.1 },
  { char: 'O', file: 'O.svg', scale: 1.15 },
  { char: 'A', file: 'A.svg', scale: 1 },
  { char: 'K', file: 'K.svg', scale: 0.97 },
  { char: 'A', file: 'A.svg', scale: 1 }
];


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.44] z-0"
        style={{
          backgroundImage: "url('/assets/images/background.jpg')"
        }}
      />

      {/* Floating Angoaka (center X, higher Y, smaller) */}
      <motion.div
        className="
          absolute 
          left-1/2 
          top-[30%] 
          sm:top-[30%]
          md:top-[20%]
          lg:top-[15%]
          -translate-x-1/2 
          w-[200px] h-[240px]
          sm:w-[280px] sm:h-[330px]
          md:w-[350px] md:h-[410px]
          lg:w-[430px] lg:h-[500px]
          z-50
          pointer-events-none
        "
        animate={{ y: [0, -55, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src="/assets/images/angaoaka.png"
          alt="Angoaka"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-8 relative">
          {/* Titre ANGOAKA avec lettres SVG individuelles */}
          <div className="mt-28 flex justify-center items-center gap-2 md:gap-4 relative">
            {letters.map((letter, index) => (
              <motion.div
                key={index}
                className={`
                  relative 
                  w-12 h-16
                  md:w-20 md:h-24 
                  lg:w-24 lg:h-28
                  cursor-pointer
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: hoveredIndex === index ? -58 : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 180,
                  damping: 18,
                  mass: 0.7,
                }}
              >
                {/* Conteneur qui ne bouge pas - positioning context pour la lettre ET portfolio */}
                <div className="relative w-full h-full">
                  {/* Image SVG - celle-ci bouge avec le motion.div parent */}
                  <motion.img
                    src={`/assets/images/${letter.file}`}
                    alt={letter.char}
                    className="w-full h-full object-contain"
                    style={{ scale: letter.scale }}
                    animate={{
                      filter:
                        hoveredIndex === index
                          ? "brightness(1.3)"
                          : "brightness(1)"
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />

                  {/* Effet de particules au survol */}
                  {hoveredIndex === index && (
                    <>
                      <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8 }}
                      />
                      <motion.div
                        className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-400 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </>
                  )}

                  {/* Effet de halo */}
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, rgba(220,38,38,0.4) 0%, transparent 70%)'
                      }}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1.2, opacity: [0, 0.8, 0] }}
                      transition={{ duration: 1 }}
                    />
                  )}
                </div>

                {/* PORTFOLIO - Desktop: sous le dernier A */}
                {index === letters.length - 1 && (
                  <motion.div 
                    className="hidden md:block absolute left-1/2 top-full mt-2 -translate-x-1/2 text-sm tracking-[0.2em] text-white pointer-events-none font-bold"
                    initial={{ y: 0 }}
                    animate={{ y: hoveredIndex === index ? 58 : 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 180,
                      damping: 18,
                      mass: 0.7,
                    }}
                  >
                    PORTFOLIO
                  </motion.div>
                )}
              </motion.div>
            ))}
            
            {/* PORTFOLIO - Mobile: centré sous toutes les lettres */}
            <motion.div 
              className="md:hidden absolute left-1/2 top-full mt-4 -translate-x-1/2 text-xs tracking-[0.2em] text-white pointer-events-none font-bold whitespace-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              PORTFOLIO
            </motion.div>
          </div>        
        </div>

        {/* Texte descriptif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className='mt-16'>
            <p className="text-white text-xl md:text-2xl mb-4 font-light ">
              From idea to scalable digital products.
            </p>

            <p className="text-gray-400 text-sm md:text-base mb-8">
              UI/UX Design · Full-Stack Development · AI · DevOps
            </p>
          </div>
        </motion.div>

        {/* Boutons */}
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 flex-wrap">

            <button className="h-11 text-white px-6 py-1.5 rounded-md bg-[#E00216] transition flex items-center gap-2 shadow-md mr-6 md:mr-8">
              <span>Get started</span>
              <motion.svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </button>

            <button className="h-11 group border border-white text-white px-6 py-1.5 rounded-md hover:bg-white hover:text-[#E00216] transition">
              <span>Our Project</span>
            </button>
          </div>
        </motion.div>


      </div>
    </section>
  );
}