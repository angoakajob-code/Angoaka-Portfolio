import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../../utils/constants';
import { Home } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Par celui-ci qui détecte les sections :


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    
    // Détecter la section visible
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 200) {
        currentSection = section.getAttribute('id');
      }
    });

    setActiveSection(currentSection);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Appel initial
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

 // Fonction pour vérifier si le lien est actif
  const isActiveLink = (href) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };


  // Ajoutez cette nouvelle fonction après isActiveLink :
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const sectionId = href.replace('#', '');
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                onClick={(e) => handleNavClick(e, link.href)} 
                className="relative font-medium hover:text-red-100 transition-colors duration-300 flex flex-col items-center group">
                <span className={`${
                  isActiveLink(link.href) ? 'text-red-100' : 'text-white'
                }`}>
                  {link.label}
                </span>
                {/* Point rouge sous le lien actif */}
                {isActiveLink(link.href) && (
                  <span className="absolute -bottom-2 w-1.5 h-1.5 bg-red-100 rounded-full"></span>
                )}
              </a>
            ))}
          </nav>
          
          {/* Bouton desktop */}
          <button 
            className="hidden md:flex h-10 text-white  bg-red-100 px-5 rounded-md transition-all duration-300 items-center gap-2 shadow-md mr-4 lg:mr-6"
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

            {/* Navigation mobile */}
            <nav className="flex flex-col gap-6 mb-8">
              {NAVIGATION_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)} 
                  className="relative font-medium text-lg hover:text-red-100 transition-colors duration-300 py-2 flex items-center gap-3"
>
                  {/* Point rouge à gauche pour mobile */}
                  {isActiveLink(link.href) && (
                    <span className="w-1.5 h-1.5 bg-red-100 rounded-full"></span>
                  )}
                  <span className={`${
                    isActiveLink(link.href) ? 'text-red-100' : 'text-white'
                  }`}>
                    {link.label}
                  </span>
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