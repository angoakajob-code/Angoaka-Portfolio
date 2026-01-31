import React from 'react';
import { Palette, Code2, Network, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: "ux/ui design",
    icon: Palette,
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    bgColor: "bg-[#E00216]",
    rotation: "-6deg"
  },
  {
    title: "Front-end",
    icon: Code2,
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    bgColor: "bg-[#2a2a2a]",
    rotation: "0deg"
  },
  {
    title: "Back-end",
    icon: Network,
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    bgColor: "bg-[#2a2a2a]",
    rotation: "0deg"
  },
  {
    title: "Artificial Intelligence",
    icon: Wrench,
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    bgColor: "bg-[#2a2a2a]",
    rotation: "0deg"
  }
];

function ServiceCard({ title, icon: Icon, description, bgColor, rotation, index }) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 50,
        rotate: index === 0 ? -6 : 0
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        rotate: index === 0 ? -6 : 0
      }}
      whileHover={{ 
        rotate: 0,
        scale: 1.05,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
      }}
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: index * 0.1
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`${bgColor} p-8 rounded-2xl cursor-pointer shadow-2xl h-full min-h-70 flex flex-col`}
      style={{ transformOrigin: "center center" }}
    >
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
        >
          <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
        </motion.div>
        <motion.h3 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          viewport={{ once: true }}
          className="text-white text-xl font-bold uppercase"
        >
          {title}
        </motion.h3>
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.4 }}
        viewport={{ once: true }}
        className="text-white text-sm leading-relaxed grow"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.5
      }
    }
  };

  return (
    <section className="py-20 relative bg-[#1a1a1a]">
      {/* Container with max-width - section doesn't take full screen */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12">
          {/* Animated border line */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="absolute top-0 left-0 right-0 border-t border-dashed border-[#E00216]"
            variants={lineVariants}
          />
          
          {/* Left Column - Title + Laptop Image */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Title Section */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={titleVariants}
              className="mb-12"
            >
              <h2 className="text-white text-4xl font-bold mb-4 uppercase tracking-wide">
                OUR SERVICES
              </h2>
              <p className="text-gray-400 text-base">
                Short Description
              </p>
            </motion.div>

            {/* Laptop Image - Much Bigger */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
              className="relative flex items-center justify-start mt-auto"
            >
              <div className="w-full max-w-md">
                <img
                  src="/assets/images/laptop.png"
                  alt="Laptop with design"
                  className="w-full max-w-md object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Services Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
              {SERVICES.map((service, index) => (
                <ServiceCard
                  key={index}
                  index={index}
                  title={service.title}
                  icon={service.icon}
                  description={service.description}
                  bgColor={service.bgColor}
                  rotation={service.rotation}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}