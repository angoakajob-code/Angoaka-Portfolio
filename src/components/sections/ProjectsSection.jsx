import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../../data/projects.json';
import SubtractIcon from '/assets/icons/Subtract.png';
import ProjectModal from './ProjectModal';
import {Clock, Users} from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { projects, categories } = projectsData;

  // Filtrer les projets
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Mettre à jour les compteurs dans les catégories
  const updatedCategories = categories.map(cat => ({
    ...cat,
    count: cat.id === 'all' 
      ? projects.length 
      : projects.filter(p => p.category === cat.id).length
  }));

  // Gérer l'affichage (4 projets par défaut, tous si showAll)
  useEffect(() => {
    if (showAll) {
      setDisplayedProjects(filteredProjects);
    } else {
      setDisplayedProjects(filteredProjects.slice(0, 4));
    }
  }, [activeFilter, showAll, filteredProjects]);

  // Gérer l'ouverture de la modal
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Gérer la fermeture de la modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  // Animation variants
  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const filterVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <section
      className="pt-20 px-4 md:px-8 lg:px-12 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/assets/images/bg2.jpg)'
      }}
    >
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-linear-to-b from-[#1A1A1A]/70 via-[#1A1A1A]/60 to-[#1B1B1B]/70"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête de section */}
        <div className="text-center mb-16 relative">
          <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-white mb-4 relative">
            OUR <span className="text-red-100]">PROJECTS</span>
            <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 w-32 h-6 opacity-80">
              <svg width="100%" height="100%" viewBox="0 0 128 24" preserveAspectRatio="none">
                <path
                  d="M0,12 C25,2 50,20 75,8 C100,-4 115,18 128,12"
                  fill="none"
                  stroke="url(#nike-gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M0,12 C25,2 50,20 75,8 C100,-4 115,18 128,12"
                  fill="none"
                  stroke="url(#nike-shadow)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.4"
                  className="blur-[2px]"
                />
                <defs>
                  <linearGradient id="nike-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF0218" stopOpacity="0" />
                    <stop offset="30%" stopColor="#FF0218" stopOpacity="1" />
                    <stop offset="70%" stopColor="#99010F" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FF0218" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="nike-shadow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF0218" stopOpacity="0" />
                    <stop offset="50%" stopColor="#99010F" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#FF0218" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </h2>

          <p className="text-white text-lg max-w-2xl mx-auto mt-8">
            Our work showcases how we turn ideas into functional, scalable digital products through design, engineering, and collaboration.
          </p>
        </div>

        {/* Filtres avec compteurs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <AnimatePresence>
            {updatedCategories.map((category, index) => (
              <motion.button
                key={category.id}
                custom={index}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={filterVariants}
                onClick={() => {
                  setActiveFilter(category.id);
                  setShowAll(false);
                }}
                className={`px-6 h-12 rounded-xl transition-all duration-300 font-medium flex items-center justify-center gap-2 ${
                  activeFilter === category.id
                    ? 'bg-red-100 text-white shadow-lg shadow-red-500/20'
                    : 'bg-gray-80 backdrop-blur-sm text-white hover:bg-gray-80 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Grid des projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={projectVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="rounded-xl bg-[#2C2C2C] overflow-hidden border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 cursor-pointer group"
              onClick={() => handleProjectClick(project)}
            >
              {/* Image du projet */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium flex items-center gap-2">
                    View Details 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Contenu de la carte */}
              <div className="p-5">
                {/* Titre et sous-titre */}
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-white line-clamp-1">{project.subtitle}</p>
                  )}
                </div>

                {/* Description */}
                <p className="text-white text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies (premières 3) */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="px-2 py-1 text-gray-50 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-50 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Bouton View All / Show Less */}
        {filteredProjects.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3.5 border-2 border-red-100 bg-transparent text-white rounded-xl font-semibold hover:bg-red-80/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto backdrop-blur-sm"
            >
              {showAll ? 'Show Less' : 'View More'}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showAll ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
              </svg>
            </button>
          </div>
        )}
        
        {/* Carte Collaboration */}
        <div className="relative mt-16 mb-20">
          <div className="relative">
            {/* Icône V */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-6 sm:-top-8 md:-top-10 w-13 h-13 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 z-10">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gray-80 rounded-full"></div>
                <img
                  src={SubtractIcon}
                  alt="V Icon"
                  className="absolute inset-0 w-full h-full p-4 object-contain"
                />
              </div>
            </div>

            {/* Carte */}
        <div className="
                      bg-gray-100
                      rounded-2xl
                      w-full
                      max-w-275
                      mx-auto
                      shadow-xl
                      px-4 sm:px-6 md:px-10 lg:px-16
                      py-6 sm:py-8 md:py-10
                    "
                  >
                  <p
                    className="
                      text-white
                      text-sm sm:text-base md:text-lg lg:text-xl
                      leading-relaxed
                      text-center
                      max-w-4xl
                      mx-auto
                    "
                  >
                We believe great products are built through trust and collaboration.
                We listen, adapt, and work closely with our clients to deliver reliable,
                high-quality digital solutions that support their growth.
              </p>
        </div>

          </div>
        </div>
      </div>

      {/* Modal pour les détails du projet */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default ProjectsSection;