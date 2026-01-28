import React from 'react';
import { Palette, Code2, Network, Wrench } from 'lucide-react';

const SERVICES = [
  {
    title: "ux/ui design",
    icon: Palette,
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    bgColor: "bg-[#E00216]",
    rotation: "rotate-[-6deg]"
  },
  {
    title: "Front-end",
    icon: Code2,
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    bgColor: "bg-[#2a2a2a]",
    rotation: ""
  },
  {
    title: "Back-end",
    icon: Network,
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    bgColor: "bg-[#2a2a2a]",
    rotation: ""
  },
  {
    title: "Artificial Intelligence",
    icon: Wrench,
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    bgColor: "bg-[#2a2a2a]",
    rotation: ""
  }
];

function ServiceCard({ title, icon: Icon, description, bgColor, rotation }) {
  return (
    <div 
      className={`${bgColor} p-8 rounded-2xl ${rotation} hover:rotate-0 hover:scale-105 transition-all duration-300 cursor-pointer shadow-2xl h-full`}
    >
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
      <p className="text-white text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-20 relative bg-[#1a1a1a]">
      {/* Container with max-width - section doesn't take full screen */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-[#E00216] gap-12">
          {/* Left Column - Title + Laptop Image */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Title Section */}
            <div className="mb-12">
              <h2 className="text-white text-4xl font-bold mb-4 uppercase tracking-wide">
                OUR SERVICES
              </h2>
              <p className="text-gray-400 text-base">
                Short Description
              </p>
            </div>
            
            {/* Laptop Image - Much Bigger */}
            <div className="relative flex items-center justify-start mt-auto">
              <div className="w-full max-w-md">
                <img 
                  src="/assets/images/laptop.png" 
                  alt="Laptop with design" 
                  className="w-75 object-contain drop-shadow-2xl" 
                /> 
              </div>
            </div>
          </div>
          
          {/* Right Column - Services Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {SERVICES.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                  bgColor={service.bgColor}
                  rotation={service.rotation}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}