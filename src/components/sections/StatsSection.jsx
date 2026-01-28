import React, { useState, useEffect } from 'react';
import { STATS } from '../../utils/constants';

function StatCard({ label, value }) {
  return (
    <div className="h-32  border-gray-800 p-8 rounded-lg text-center relative overflow-hidden hover:border-gray-700 transition-all duration-300 flex flex-col justify-center items-center mx-auto w-full">
      {/* Glassmorphism avec contraste */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-xl border border-gray-700/30"></div>
      {/* Effet de brillance pour le glassmorphism */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-br from-transparent via-gray-500/20 to-transparent"></div>
      {/* Effet de lueur rouge en bas */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-12 bg-red-500 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-red-600 blur-2xl"></div>
      {/* Contenu centré */}
      <div className="relative z-10 w-full">
        <p className="text-gray-300 text-sm mb-5  tracking-wider font-medium">{label}</p>
        <p className="text-white text-6xl md:text-7xl font-bold tracking-tighter">
          {value.toString().padStart(2, '0')}+
        </p>
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [counts, setCounts] = useState(
    STATS.reduce((acc, stat) => ({ ...acc, [stat.label]: 0 }), {})
  );

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    const targets = STATS.reduce((acc, stat) => ({ ...acc, [stat.label]: stat.value }), {});
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const newCounts = {};
      STATS.forEach(stat => {
        newCounts[stat.label] = Math.floor(stat.value * progress);
      });
      setCounts(newCounts);

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mt-7.5 pb-20 relative">
      <div className="container mx-auto px-4">
        {/* Container centré avec glassmorphism visible */}
        <div className="max-w-5xl mx-auto">
          <div className="p-12 rounded-2xl bg-linear-to-br  backdrop-blur-2xl shadow-2xl shadow-black/30">
            {/* Grille centrée */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
              {STATS.map((stat, index) => (
                <div key={index} className="w-full max-w-xs">
                  <StatCard
                    label={stat.label}
                    value={counts[stat.label]}
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