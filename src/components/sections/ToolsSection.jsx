import React from 'react';
import { TOOLS } from '../../utils/constants';

function ToolCard({ name, category, icon, background }) {
  return (
    <div className="px-4 md:px-8 lg:px-12 relative bg-linear-to-b from-gray-800 to-gray-900 p-4 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer overflow-hidden">
      
      {/* BACKGROUND IMAGE - À l'intérieur de la card */}
      {background && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 hover:opacity-20 transition-opacity duration-300 rounded-lg"
          style={{ backgroundImage: `url(${background})` }}
        />
      )}
      
      {/* OVERLAY pour effet de focus/gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-transparent rounded-lg" />
      
      {/* CONTENU - avec z-index pour être au-dessus du background */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-12 h-12 bg-linear-to-b from-gray-700 to-gray-800 rounded-lg flex items-center justify-center border border-gray-600">
          <img 
            src={icon} 
            alt={name} 
            className="w-7 h-7 object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `<span class="text-white text-xs font-bold">${name.slice(0, 2)}</span>`;
            }}
          />
        </div>
        <div>
          <p className="text-white text-sm font-semibold">{name}</p>
          <p className="text-gray-400 text-xs">{category}</p>
        </div>
      </div>
    </div>
  );
}

export default function ToolsSection() {
  return (
    <section className="py-25 relative bg-linear-to-r from-[#2C2C2C] via-[#2F2F2F] to-[#1A1A1A] " >
      <div className="container mx-auto px-6">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12 relative">
          <div className="absolute -top-10 -bottom-5 left-1/2 -translate-x-1/2 w-50 h-30 bg-red-80 blur-3xl opacity-40"></div>
          <div className="absolute -top-5 -bottom-5 left-1/2 -translate-x-1/2 w-30 h-10 bg-red-100 blur-2xl opacity-40"></div>
          <span className="relative z-10">TECNO & TOOLS</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {TOOLS.map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              category={tool.category}
              icon={tool.icon}
              background={tool.background}
            />
          ))}
        </div>
        
        <div className="flex justify-center">
          <button 
            className="h-11 px-8 text-white rounded-md flex items-center justify-center gap-2 hover:bg-[#C4171F] transition-colors duration-300"
            style={{ backgroundColor: '#E00216' }}
          >
            Get started
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}