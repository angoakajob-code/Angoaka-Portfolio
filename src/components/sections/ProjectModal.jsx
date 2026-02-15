import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Clock, 
  MapPin, 
  Users, 
  Briefcase, 
  Globe, 
  GitBranch, 
  ExternalLink,
  Github,
  Calendar,
  CheckCircle,
  Code,
  Layers,
  Shield,
  Cpu,
  Database
} from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  // Fonction pour obtenir l'icône en fonction du nom
  const getIcon = (iconName) => {
    const iconMap = {
      react: <Code className="w-5 h-5" />,
      nodejs: <Cpu className="w-5 h-5" />,
      mongodb: <Database className="w-5 h-5" />,
      stripe: <Shield className="w-5 h-5" />,
      aws: <Globe className="w-5 h-5" />,
      vue: <Layers className="w-5 h-5" />,
      python: <Cpu className="w-5 h-5" />,
      docker: <Layers className="w-5 h-5" />,
      figma: <Code className="w-5 h-5" />,
      nextjs: <Code className="w-5 h-5" />,
      typescript: <Code className="w-5 h-5" />,
      unity: <Cpu className="w-5 h-5" />,
      solidity: <Code className="w-5 h-5" />,
      web3: <Globe className="w-5 h-5" />
    };
    return iconMap[iconName] || <Code className="w-5 h-5" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-[#1A1A1A] rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl pointer-events-auto"
            >
              {/* Bouton fermer */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-800/90 hover:bg-gray-700 transition-colors backdrop-blur-sm"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image principale */}
              <div className="relative h-64 md:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              {/* Contenu principal */}
              <div className="p-6 md:p-8">
                {/* En-tête avec boutons d'action */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {project.subtitle || project.title}
                    </h3>
                    <p className="text-lg text-gray-400">Role: {project.role}</p>
                  </div>
                </div>

                {/* Deux colonnes */}
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Colonne gauche - Grande (70%) */}
                  <div className='lg:w-8/12'>
                    <div className='bg-[#2C2C2C] rounded-2xl p-6 md:p-8'>
                      {/* Description détaillée */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg  flex items-center justify-center">
                            <Briefcase className="w-4 h-4 text-red-100" />
                          </div>
                          <h4 className="text-xl font-semibold text-white">Project Overview</h4>
                        </div>
                        <div className="space-y-4 text-gray-20 pl-4 border-l-2 border-[#E00216]/30">
                          <p className="leading-relaxed">
                            {project.detailedDescription || project.description}
                          </p>
                        </div>
                      </div>

                      {/* Functionality */}
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg  flex items-center justify-center">
                            <Layers className="w-4 h-4 text-red-100" />
                          </div>
                          <h4 className="text-xl font-semibold text-white">Key Functionality</h4>
                        </div>
                        <div className="pl-4">
                          <p className="text-gray-20 mb-6 leading-relaxed">
                            {project.functionality}
                          </p>

                          <ul className="space-y-3">
                            {project.features.map((feature, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start text-gray-300 group"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <span className="group-hover:text-white transition-colors">- {feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Skills et Technologies */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg  flex items-center justify-center">
                            <Code className="w-4 h-4 text-red-100" />
                          </div>
                          <h4 className="text-xl font-semibold text-white">Technologies & Skills</h4>
                        </div>
                        <div className="pl-4">
                          {/* Skills tags */}
                          <div className="flex flex-wrap gap-3 mb-6">
                            {project.skills.map((skill, index) => (
                              <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="inline-flex items-center gap-2 bg-red-100 text-white px-4 py-2 rounded-lg hover:bg-[#3A3A3A] transition-colors"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Colonne droite - Petite (30%) */}
                  <div className='lg:w-4/12'>
                    <div className='bg-[#2C2C2C] rounded-2xl p-6 md:p-8'>
                      <h4 className="text-xl font-semibold text-white mb-6">Project Details</h4>

                      {/* Détails avec icônes */}
                      <div className="space-y-4">
                        {/* Durée */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          className="flex items-center gap-3 p-3 bg-[#2A2A2A] rounded-lg hover:bg-[#3A3A3A] transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg  flex items-center justify-center shrink-0">
                            <Clock className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-medium">Duration</p>
                            <p className="text-gray-50 text-sm">{project.duration}</p>
                          </div>
                        </motion.div>

                        {/* Localisation */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center gap-3 p-3 bg-[#2A2A2A] rounded-lg hover:bg-[#3A3A3A] transition-colors"
                        >
                          <div className="w-10 h-10 rounded-lg  flex items-center justify-center shrink-0">
                            <MapPin className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-medium">Location</p>
                            <p className="text-gray-50 text-sm">{project.location}</p>
                            <p className="text-gray-50 text-xs">{project.locationDetail}</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;