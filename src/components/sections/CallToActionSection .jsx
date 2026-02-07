import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion'; // IMPORT AJOUTÉ
=======
>>>>>>> 5628239 (section project)

const CallToActionSection = () => {
    return (
        <section className="relative overflow-hidden min-h-screen">
            {/* Conteneur pour l'image de fond - pleine largeur et hauteur */}
            <div className="absolute inset-0 z-0">
                {/* Image bgf.jpg en pleine largeur et hauteur */}
                <div className="w-full h-full flex items-center justify-center">
                    <img
<<<<<<< HEAD
                        src="/assets/images/lumiere.png"
                        alt="Background"
                        className="w-min-w-full min-h-full"
=======
                        src="/assets/images/bgf.jpg"
                        alt="Background"
                        className="w-full h-full object-cover min-w-full min-h-full"
>>>>>>> 5628239 (section project)
                    />
                </div>
                {/* Overlay sombre pour améliorer la lisibilité */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Contenu principal - modification ici pour déplacer le contenu vers le bas */}
            <div className="relative z-10 min-h-screen flex flex-col justify-start items-center px-4 md:px-8 lg:px-12 pt-24 md:pt-32 pb-16">
                <div className="max-w-4xl mx-auto text-center w-full">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-8 md:mb-12 tracking-wider">
                        SO! WHAT ARE YOU <span className="text-[#FF0218]">WAITING FOR?</span>
                    </h2>

<<<<<<< HEAD
                    {/* Image centrale avec animation flottante */}
                    <div className="mb-16 md:mb-20">
                        <motion.div
                            className="relative mx-auto w-72 h-72 md:w-96 md:h-96 lg:w-100 lg:h-100"
                            animate={{
                                y: [0, -30, 0] // Animation de flottement
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <img
                                src="/assets/images/angaoaka.png"
                                alt="Let's Collaborate"
                                className="w-full h-full ml-7 object-contain"
                            />
                        </motion.div>
                    </div>

                    {/* Bouton Get Started PLUS BAS et PLUS PETIT */}

                </div>
            </div>

            <div>
                <button className="px-10 mb-7 py-3 bg-[#E00216] text-[#FFF] font-bold rounded-lg hover:bg-[#99010F] transition-all duration-300 transform hover:scale-105 mx-auto flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base md:text-lg ">
                    <p className='text-white font-bold'>Contact Us</p>
                    <motion.svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity
                        }}
                    >
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                </button>
            </div>

=======
                    {/* Image centrale */}
                    <div className="mb-16 md:mb-20">
                        <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px]">
                            <img
                                src="/assets/images/angaoaka.png"
                                alt="Let's Collaborate"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Bouton Get Started PLUS BAS et PLUS PETIT */}
                    <div className="mt-24 md:mt-32">
                        <button className="px-10 py-3 bg-[#E00216] text-white font-bold rounded-lg hover:bg-[#99010F] transition-all duration-300 transform hover:scale-105 mx-auto flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base md:text-lg">
                            Contact Us
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
>>>>>>> 5628239 (section project)
        </section>
    );
};

export default CallToActionSection;