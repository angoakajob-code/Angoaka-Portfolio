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
  const [showContent, setShowContent] = useState(false);
  const assetsLoaded = usePreloadAssets();

  // Gérer la fin du loader
  const handleLoaderFinished = () => {
    setShowContent(true);
    document.body.style.overflow = 'auto';
  };

  // Bloquer le scroll pendant le chargement
  useEffect(() => {
    if (!showContent) {
      document.body.style.overflow = 'hidden';
    }
  }, [showContent]);

  // Le loader s'affiche immédiatement et reste jusqu'à ce que :
  // 1. Les assets soient chargés (assetsLoaded = true)
  // 2. Le loader ait fini son animation (showContent = true)
  if (!showContent) {
    return <Loader 
      onFinished={handleLoaderFinished} 
      assetsReady={assetsLoaded} // On passe l'état des assets au loader
    />;
  }

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