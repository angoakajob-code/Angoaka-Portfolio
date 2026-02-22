// App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import SocialSidebar from './components/layout/SocialSidebar';
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import AboutSection from './components/sections/AboutSection';
import ToolsSection from './components/sections/ToolsSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection'; 
import Footer from './components/layout/Footer';
import CallToActionSection from './components/sections/CallToActionSection';
import Loader from './components/layout/Loader';
import usePreloadAssets from './hooks/usePreloadAssets';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const assetsLoaded = usePreloadAssets();

  // Gérer la fin du chargement
  const handleLoaderFinished = () => {
    setIsLoading(false);
    document.body.style.overflow = 'auto';
  };

  // Bloquer le scroll pendant le chargement
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  // Attendre que les assets soient chargés pour commencer l'animation du loader
  if (!assetsLoaded) {
    return (
      <div className="fixed inset-0 bg-[#1A1A1A] flex items-center justify-center">
        <div className="text-white">Chargement...</div>
      </div>
    );
  }

  // Afficher le loader principal
  if (isLoading) {
    return <Loader onFinished={handleLoaderFinished} />;
  }

  // Afficher le contenu principal
  return (
    <div className="min-h-screen bg-linear-to-b from-[#1A1A1A] via-[#1A1A1A] to-[#1B1B1B]">
      <Header />
      <SocialSidebar />
      <main>
        <section id="home"><HeroSection /></section>
        <section id="stats"><StatsSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="tools"><ToolsSection /></section>
        <section id="services"><ServicesSection /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="contact"><CallToActionSection /></section>
      </main>
      <Footer />
    </div>
  );
}