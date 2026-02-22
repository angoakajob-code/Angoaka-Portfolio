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

  // Gérer l'affichage après le loader
  const handleLoaderFinished = () => {
    setShowContent(true);
    // Petite animation pour faire apparaître le contenu
    document.body.style.overflow = 'auto';
  };

  // Bloquer le scroll pendant le chargement
  useEffect(() => {
    if (!showContent) {
      document.body.style.overflow = 'hidden';
    }
  }, [showContent]);

  if (!assetsLoaded || !showContent) {
    return <Loader onFinished={handleLoaderFinished} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A] to-[#1B1B1B]">
      <Header />
      <SocialSidebar />
      <main>
        <section id="home"><HeroSection /></section>
        <section id="about"><StatsSection /></section>
        <section id="about"><AboutSection /></section>
        <section id="about"><ToolsSection /></section>
        <section id="services"><ServicesSection /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="contacts"><CallToActionSection /></section>
      </main>
      <Footer />
    </div>
  );
}