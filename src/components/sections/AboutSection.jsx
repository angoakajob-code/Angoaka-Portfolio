import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const titleVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  };

  const paragraphVariants = {
    hidden: {
      x: -30,
      opacity: 0
    },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const subtitleVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      color: "#E00216"
    },
    visible: {
      y: 0,
      opacity: 1,
      color: "#ffffff",
      transition: {
        delay: 0.4,
        duration: 0.7,
        color: {
          delay: 0.6,
          duration: 0.5
        }
      }
    }
  };

  return (
    <section className="relative">
      <div className="container mx-auto px-6">
        {/* Conteneur centré avec max-width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl  mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-37.5 items-center">
            {/* Image seulement - sans bordure ajoutée */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              variants={containerVariants}
            >
              {/* Conteneur image avec animation */}
              <motion.div
                variants={imageVariants}
                className="w-90 h-120 rounded-2xl overflow-hidden relative"
              >
                {/* Image avec effet de fondu */}
                <motion.img
                  src="/assets/images/equipe.png"
                  alt="Team"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />

                {/* Overlay gradient animé - gardé pour l'effet visuel */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                />
              </motion.div>
            </motion.div>

            {/* Contenu texte */}
            <motion.div
              className="text-center lg:text-left"
              variants={containerVariants}
            >
              <motion.h2
                variants={titleVariants}
                className="text-white text-5xl font-bold mb-6 tracking-tight"
              >
                ABOUT US
              </motion.h2>

              <motion.p
                variants={paragraphVariants}
                custom={0}
                className="text-white mb-12 text-base leading-relaxed"
              >
                We transform ideas into scalable digital solutions through cutting-edge technology and innovative design. Our team combines expertise in UI/UX design, full-stack development, AI, and DevOps to deliver exceptional results.
                With 4 years of experience and a passion for technology, we help businesses and individuals bring their digital visions to life.
              </motion.p>

              <div className="space-y-6">
                <motion.h3
                  variants={subtitleVariants}
                  className="text-white text-2xl font-semibold"
                >
                  Why Angoaka ?
                </motion.h3>

                <motion.p
                  variants={paragraphVariants}
                  custom={2}
                  className="text-white leading-relaxed text-base"
                >
                  A team of geeks from the same city, represented by a cicada named ANGOAKA. Each of us is an expert in a specific area of technology, such as UX/UI design, front-end development, back-end development, full stack, AI, and dev ops. So we decided to join forces.
                </motion.p>
              </div>

              {/* Bouton animé optionnel */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="mt-10"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#E00216",
                    boxShadow: "0 10px 30px rgba(224, 2, 22, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent border-2 border-red-600 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}