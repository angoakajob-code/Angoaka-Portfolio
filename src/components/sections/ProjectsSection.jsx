import React, { useState, useEffect } from 'react';
import projectsData from '../../data/projects.json';
import SubtractIcon from '/assets/icons/Subtract.png'; // IMPORT AJOUTÉ

const ProjectsSection = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [displayedProjects, setDisplayedProjects] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const { projects, categories } = projectsData;

    // Filtrer les projets
    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    // Gérer l'affichage (4 projets par défaut, tous si showAll)
    useEffect(() => {
        if (showAll) {
            setDisplayedProjects(filteredProjects);
        } else {
            setDisplayedProjects(filteredProjects.slice(0, 4));
        }
    }, [activeFilter, showAll, filteredProjects]);

    return (
        <section
            className="pt-20 px-4 md:px-8 lg:px-12 relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url(/assets/images/bg2.jpg)'
            }}
        >
            {/* Overlay sombre pour la lisibilité */}
            <div className="absolute inset-0 bg-linear-to-b from-[#1A1A1A]/70 via-[#1A1A1A]/60 to-[#1B1B1B]/70"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* En-tête de section */}
                <div className="text-center mb-16 relative">
                    <h2 className="text-xl md:text-xl lg:text-2xl font-bold text-white mb-4 relative">
                        OUR <span className="text-[#FF0218]">PROJECTS</span>

                        {/* Trace Nike rouge en dessous du titre */}
                        <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 w-32 h-6 opacity-80">
                            <svg width="100%" height="100%" viewBox="0 0 128 24" preserveAspectRatio="none">
                                {/* Trace principale - forme Nike/Swoosh */}
                                <path
                                    d="M0,12 C25,2 50,20 75,8 C100,-4 115,18 128,12"
                                    fill="none"
                                    stroke="url(#nike-gradient)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                {/* Ombre/effet de pinceau */}
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

                    <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-8">
                        Our work showcases how we turn ideas into functional, scalable digital products through design, engineering, and collaboration.
                    </p>
                </div>

                {/* Filtres avec compteurs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        // Boutons de filtre avec taille fixe
                        <button
                            key={category.id}
                            onClick={() => {
                                setActiveFilter(category.id);
                                setShowAll(false);
                            }}
                            className={`min-w-35 h-12 rounded-xl transition-all duration-300 font-medium flex items-center justify-center gap-2 ${activeFilter === category.id
                                ? 'bg-[#C4171F] text-white shadow-lg shadow-red-500/20'
                                : 'bg-[#565656]/80 backdrop-blur-sm text-gray-300 hover:bg-gray-700/80 hover:text-white'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Grid horizontal - 4 cartes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {displayedProjects.map((project) => (
                        <div
                            key={project.id}
                            className="rounded-xl bg-[#2C2C2C] overflow-hidden border border-gray-700/50 hover:border-red-500/50 transition-all duration-500 hover:transform hover:scale-[1.03]"
                        >
                            {/* Image du projet avec overlay - VERSION CORRIGÉE */}
                            <div className="relative overflow-hidden">
                                {/* Image du projet depuis le JSON */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-75 object-cover"
                                />
                            </div>

                            {/* Contenu de la carte */}
                            <div className="p-5">
                                {/* Catégorie */}
                                <div className="mb-2">
                                    <span className="text-xs uppercase tracking-wider text-red-500 font-semibold">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Titre */}
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300 line-clamp-1">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message si aucun projet */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-300 text-lg">
                            No projects found in this category.
                        </p>
                    </div>
                )}

                {/* Bouton View All / Show Less */}
                {filteredProjects.length > 4 && (
                    <div className="text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="px-8 py-3.5 border-2 border-[#C4171F] bg-transparent text-white rounded-xl font-semibold hover:bg-red-900/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto backdrop-blur-sm"
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
                <div className="relative mt-16 mb-20">
                    {/* Carte Collaboration */}
                    <div className="relative">
                        {/* Icône V plus grande pour correspondre à la carte agrandie */}
                        <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-20 h-20 z-10">
                            <div className="relative w-full h-full">
                                <div className="absolute inset-0 bg-[#565656] rounded-full"></div>
                                <img
                                    src={SubtractIcon}
                                    alt="V Icon"
                                    className="absolute inset-0 w-full h-full p-4 object-contain"
                                />
                            </div>
                        </div>

                        {/* Carte avec dimensions augmentées */}
                        <div className="bg-[#2C2C2C] rounded-2xl w-full max-w-350 h-55 flex items-center justify-center px-12 md:px-16 mx-auto shadow-xl">
                            <p className="text-gray-300 text-xl leading-relaxed text-center max-w-4xl">
                                We believe great products are built through trust and collaboration.
                                We listen, adapt, and work closely with our clients to deliver reliable,
                                high-quality digital solutions that support their growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;