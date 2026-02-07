import React from 'react';
import Header from './components/layout/Header';
import SocialSidebar from './components/layout/SocialSidebar';
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import AboutSection from './components/sections/AboutSection';
import ToolsSection from './components/sections/ToolsSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection'; 
import Footer from './components/layout/Footer';
import CallToActionSection from './components/sections/CallToActionSection ';

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#1A1A1A] via-[#1A1A1A] to-[#1B1B1B]">
      <Header />
      <SocialSidebar />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ToolsSection />
        <ServicesSection />
        <ProjectsSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}