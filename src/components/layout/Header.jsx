import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../../utils/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Empêche le défilement quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed h-14 top-4 left-4 right-4 md:left-16 md:right-16 lg:left-20 lg:right-20 z-50 flex items-center transition-all duration-300 ${
          isScrolled ? 'bg-white/10 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        } rounded-xl`}
      >
        <div className="w-full flex items-center justify-between"> 
          <div className="flex items-center gap-3 pl-4 md:pl-6 lg:pl-8">
            <img 
              src="/assets/images/logo.png" 
              alt="Logo A" 
              className="w-8 h-8 md:w-9 md:h-9 object-contain"
            />
            <span className="font-semibold text-lg text-white">Angoaka</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAVIGATION_LINKS.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`font-medium hover:text-[#FF0218] transition-colors duration-300 ${
                  index === 0 ? 'text-[#FF0218]' : 'text-gray-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* Bouton desktop */}
          <button 
            className="hidden md:flex h-10 text-white px-5 rounded-md hover:bg-[#C4171F] transition-all duration-300 items-center gap-2 shadow-md mr-4 lg:mr-6"
            style={{ backgroundColor: '#E00216' }}
          >
            Get started
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          {/* Menu hamburger mobile */}
          <button
            className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5 mr-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Menu mobile */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Menu panel */}
        <div className={`absolute top-0 right-0 h-full w-64 bg-linear-to-b from-gray-900 to-gray-950 shadow-xl transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Fermer bouton */}
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation mobile */}
            <nav className="flex flex-col gap-6 mb-8">
              {NAVIGATION_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`font-medium text-lg hover:text-[#FF0218] transition-colors duration-300 py-2 ${
                    index === 0 ? 'text-[#FF0218]' : 'text-gray-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Bouton Get Started mobile */}
            <button 
              className="mt-auto mb-8 h-12 text-white px-6 rounded-md hover:bg-[#C4171F] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              style={{ backgroundColor: '#E00216' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get started
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Espace pour le header fixe */}
      <div className="h-16 md:h-18"></div>
    </>
  );
}