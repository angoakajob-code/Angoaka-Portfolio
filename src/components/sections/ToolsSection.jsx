import React from 'react';
import { TOOLS } from '../../utils/constants';

function ToolCard({ name, category, icon }) {
  return (
    <div className="bg-linear-to-b from-gray-800 to-gray-900 p-4 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-linear-to-b from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
          {/* <img src={icon} alt={name} className="w-6 h-6" /> */}
          <span className="text-white text-xs font-bold">{name.slice(0, 2)}</span>
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
    <section id="projects" className="container py-20 relative">

      <div className="container mx-auto px-6">
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-12">
          <div className="absolute left-1/2 -translate-x-1/2 w-72 h-11 bg-red-500 blur-3xl"></div>
          <div className="absolute  left-1/2 -translate-x-1/2 w-32 h-8 bg-red-600 blur-2xl"></div>
          TECNO & TOOLS
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {TOOLS.map((tool, index) => (
            <ToolCard
              key={index}
              name={tool.name}
              category={tool.category}
              icon={tool.icon}
            />
          ))}
        </div>

        <button 
          className="h-11 text-white rounded-md bg-[#E00216]  flex items-center justify-center"
          style={{ backgroundColor: '#E00216' }}
        >
          Get started
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  );
}