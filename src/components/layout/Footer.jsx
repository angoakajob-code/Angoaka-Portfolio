// Footer.jsx - Version simplifiée
import React from 'react';
import AngoakaLogo from '/assets/images/logo blanc(1).png';

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-b  text-white py-12 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto">
        {/* Section logo avec ligne continue */}
        <div className="relative mb-8">
          {/* Ligne complète */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-700 transform -translate-y-1/2"></div>
          
          {/* Logo centré par-dessus la ligne */}
          <div className="relative flex justify-center">
            <div className="bg-linear-to-b from-[#1A1A1A] via-[#1A1A1A] to-[#1B1B1B] px-8">
              <img 
                src={AngoakaLogo} 
                alt="ANGOAKA Logo" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 mb-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium">
            Contact us
          </a>
          <span className="hidden md:inline mx-8 text-gray-500">•</span>
          <span className="md:hidden w-4"></span>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium">
            Book an appointment
          </a>
          <span className="hidden md:inline mx-8 text-gray-500">•</span>
          <span className="md:hidden w-4"></span>
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium">
            Give feedback
          </a>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-gray-400">
          <p className="text-sm md:text-base">
            Designed and developer by team Angoaka 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;