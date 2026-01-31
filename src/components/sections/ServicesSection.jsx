import React from 'react';
import { Palette, Code2, Network, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: "ux/ui design",
    icon: Palette,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    bgColor: "bg-[#E00216]",
    rotation: "-6deg"
  },
  {
    title: "Front-end",
    icon: Code2,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    bgColor: "bg-[#2a2a2a]",
    rotation: "0deg"
  },
  {
    title: "Back-end",
    icon: Network,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    bgColor: "bg-[#2a2a2a]",
    rotation: "0deg"
  },
  {
    title: "Artificial Intelligence",
    icon: Wrench,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    bgColor: "bg-[#2a2a2a]",
    rotation: "0deg"
  }
];

function ServiceCard({ title, icon: Icon, description, bgColor, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: index === 0 ? -6 : 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: index === 0 ? -6 : 0 }}
      whileHover={{
        rotate: 0,
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }}
      viewport={{ once: true }}
      className={`${bgColor} p-8 rounded-2xl cursor-pointer shadow-2xl flex flex-col`}
    >
      <div className="flex items-center gap-4 mb-6">
        <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
        <h3 className="text-white text-xl font-bold uppercase">
          {title}
        </h3>
      </div>

      <p className="text-white text-sm leading-relaxed grow">
        {description}
      </p>
    </motion.div>
  );
}

export default function ServicesSection() {

  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1, ease: "easeInOut" }
    }
  };

  return (
    <section className="py-20 relative bg-[#1a1a1a]">

      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* 🔴 LIGNE TIRÉ-TIRÉ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={lineVariants}
          className="absolute top-0 left-6 right-6 h-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #E00216 0 6px, transparent 6px 10px)"
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">

          {/* Left */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-12">
              <h2 className="text-white text-4xl font-bold mb-4 uppercase">
                OUR SERVICES
              </h2>
              <p className="text-gray-400">
                Short Description
              </p>
            </div>

            <div className="mt-auto max-w-md">
              <img
                src="/assets/images/laptop.png"
                alt="Laptop"
                className="w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">

            {SERVICES.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                {...service}
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
