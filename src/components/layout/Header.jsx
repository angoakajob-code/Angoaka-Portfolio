import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS } from '../../utils/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed h-15 top-3.25 left-16.5 right-16.5 z-50 flex items-center transition-all duration-300 ${
        isScrolled ? 'bg-white/10 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      } rounded-[10px]`}
    >
      <div className=" container mx-auto w-full flex items-center justify-between"> 
        <div className="flex items-center gap-3 pl-6  md:pl-8">
          {/* Logo A en PNG */}
          <img 
            src="/assets/images/logo.png" 
            alt="Logo A" 
            className="w-8.5 object-contain "
          />
          <span className="font-semibold text-lg text-amber-50">Angoaka</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`font-medium hover:text-[#FF0218] transition ${
                index === 0 ? 'text-[#FF0218]' : 'text-gray-100'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <button 
          className="h-11 text-white px-6 py-1.5 rounded-md hover:bg-[#E00216] transition flex items-center gap-2 shadow-md mr-6 md:mr-8"
          style={{ backgroundColor: '#E00216' }}
        >
          Get started
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </header>
  );
}