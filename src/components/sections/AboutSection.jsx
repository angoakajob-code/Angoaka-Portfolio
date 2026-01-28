import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="  relative">
      <div className="container mx-auto px-6">
        {/* Conteneur centré avec max-width */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-37.5 items-center">
            {/* Image avec bordure en pointillé rouge - centrée */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="border-2 border-dashed border-red-600 rounded-3xl p-1">
                <div className="w-80 h-96 bg-linear-to-b from-red-900 to-black rounded-2xl overflow-hidden">
                  <img 
                    src="/assets/images/equipe .png" 
                    alt="Team" 
                    className="w-full h-full object-cover" 
                  /> 
                </div>
              </div>
            </div>
            
            {/* Contenu texte */}
            <div className="text-center lg:text-left">
              <h2 className="text-white text-5xl font-bold mb-6 tracking-tight">
                ABOUT US
              </h2>
              
              <p className="text-gray-400 mb-12 text-base leading-relaxed">
                About team, tecno-Geek-guy, etc....
              </p>
              
              <div className="space-y-6">
                <h3 className="text-white text-2xl font-semibold">
                  Why Angoaka ?
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-base">
                  We transform ideas into scalable digital solutions through cutting-edge technology 
                  and innovative design. Our team combines expertise in UI/UX design, full-stack 
                  development, AI, and DevOps to deliver exceptional results.
                </p>
                
                <p className="text-gray-400 leading-relaxed text-base">
                  With years of experience and a passion for technology, we help businesses 
                  and individuals bring their digital visions to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}