import React, { useState, useEffect, useRef } from 'react';
import data from '../../data/projects.json';

function StatCard({ label, value }) {
  return (
    <div className="h-32 border-gray-100 p-8 rounded-lg text-center relative overflow-hidden hover:border-gray-80 transition-all duration-300 flex flex-col justify-center items-center mx-auto w-full">
      <div className="absolute inset-0 bg-linear-to-br from-bg-gray-100 to-bg-gray-80 backdrop-blur-xl border border-gray-100/10 rounded-lg"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gray-500/20 to-transparent"></div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-14 bg-red-50 blur-2xl opacity-50"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-100 blur-xl opacity-80"></div>
      <div className="relative z-10 w-full">
        <p className="text-gray-300 text-sm mb-5 tracking-wider font-medium">{label}</p>
        <p className="text-white text-6xl md:text-7xl font-bold tracking-tighter">
          {value.toString().padStart(2, '0')}+
        </p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [stats, setStats] = useState([]);
  const [counts, setCounts] = useState({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  const calculateStats = () => {
    const projects = data.projects;
    const completedProjects = projects.filter(project =>
      ["Completed", "Live on App Store", "Deployed", "Delivered",
       "In Production", "Implemented", "MVP Launched", "Published on Stores"]
      .includes(project.status)
    ).length;
    const yearsExperience = 5;
    const countries = [...new Set(projects.map(project => project.country))];
    const countriesCount = countries.length;

    return [
      { label: "Projets",              value: completedProjects },
      { label: "Years of experience",  value: yearsExperience  },
      { label: "Intervening country",  value: countriesCount   },
    ];
  };

  // Lance l'animation de comptage
  const runAnimation = (calculatedStats) => {
    // Reset à 0 d'abord
    const zeros = calculatedStats.reduce((acc, s) => ({ ...acc, [s.label]: 0 }), {});
    setCounts(zeros);

    // Annule un éventuel timer précédent
    if (timerRef.current) clearInterval(timerRef.current);

    const duration = 2000;
    const steps    = 60;
    const interval = duration / steps;
    const targets  = calculatedStats.reduce((acc, s) => ({ ...acc, [s.label]: s.value }), {});
    let step = 0;

    timerRef.current = setInterval(() => {
      step++;
      const progress = step / steps;
      // Easing : ease-out cubique
      const ease = 1 - Math.pow(1 - progress, 3);
      const newCounts = {};
      calculatedStats.forEach(s => {
        newCounts[s.label] = Math.floor(s.value * ease);
      });
      setCounts(newCounts);

      if (step >= steps) {
        clearInterval(timerRef.current);
        setCounts(targets);
      }
    }, interval);
  };

  useEffect(() => {
    const calculatedStats = calculateStats();
    setStats(calculatedStats);
    const zeros = calculatedStats.reduce((acc, s) => ({ ...acc, [s.label]: 0 }), {});
    setCounts(zeros);
  }, []);

  // IntersectionObserver — relance l'animation à chaque fois que la section entre dans le viewport
  useEffect(() => {
    if (stats.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Relance à CHAQUE apparition dans le viewport
            runAnimation(stats);
          }
        });
      },
      { threshold: 0.3 } // déclenche quand 30% de la section est visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [stats]);

  return (
    <section ref={sectionRef} className="mt-7.5 pb-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="p-12 rounded-2xl bg-gray-150/80 backdrop-blur-2xl shadow-2xl shadow-black/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
              {stats.map((stat, index) => (
                <div key={index} className="w-full max-w-xs">
                  <StatCard
                    label={stat.label}
                    value={counts[stat.label] || 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}