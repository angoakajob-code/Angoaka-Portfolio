import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const letters = [
    { char: 'A', file: 'A.svg' },
    { char: 'N', file: 'N.svg' },
    { char: 'G', file: 'G.svg' },
    { char: 'O', file: 'O.svg' },
    { char: 'A', file: 'A.svg' },
    { char: 'K', file: 'K.svg' },
    { char: 'A', file: 'A.svg' }
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
          top-[15%] 
          -translate-x-1/2 
          w-50 h-50
          md:w-70 md:h-70 
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
          <div className=" mt-28 flex justify-center items-center gap-2 md:gap-4">
            {letters.map((letter, index) => (
              <motion.div
                key={index}
                className={`
                  relative 
                  w-12 h-16 
                  md:w-20 md:h-24 
                  lg:w-24 lg:h-28
                  cursor-pointer
                  transition-all duration-300
                  filter
                  ${hoveredIndex === index ? 'drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]' : 'drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]'}
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{
                  scale: 1.15,
                  y: -10,
                  zIndex: 50,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 30, rotate: -5 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  ...(hoveredIndex === index && {
                    rotate: [0, -10, 10, 0],
                    scale: [1, 1.2, 1.15],
                  })
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  rotate: { duration: 0.5, repeat: Infinity, repeatDelay: 0.2 }
                }}
              >
                {/* Image SVG */}
                <motion.img
                  src={`/assets/images/${letter.file}`}
                  alt={letter.char}
                  className="w-full h-full object-contain"
                  animate={hoveredIndex === index ? {
                    filter: [
                      'brightness(1)',
                      'brightness(1.5)',
                      'brightness(1)'
                    ]
                  } : {}}
                  transition={{ duration: 0.5 }}
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
              </motion.div>
            ))}
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