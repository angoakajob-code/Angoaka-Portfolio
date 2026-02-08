import React from 'react';

const RealisticMagicCircle = () => {
  const beams = [
    { angle: 0, delay: '0s', duration: '2s', height: 'h-40' },
    { angle: 45, delay: '0.4s', duration: '2.2s', height: 'h-52' },
    { angle: 90, delay: '0.8s', duration: '1.8s', height: 'h-44' },
    { angle: 135, delay: '1.2s', duration: '2.5s', height: 'h-60' },
    { angle: 180, delay: '0.2s', duration: '2.1s', height: 'h-48' },
    { angle: 225, delay: '0.6s', duration: '1.9s', height: 'h-56' },
    { angle: 270, delay: '1.0s', duration: '2.3s', height: 'h-42' },
    { angle: 315, delay: '1.4s', duration: '2.0s', height: 'h-50' },
  ];

  // Flammes autour du cercle
  const flames = Array.from({ length: 40 }, (_, i) => ({
    angle: (i / 40) * 360,
    delay: `${(i * 0.1) % 2}s`,
    duration: `${1 + Math.random() * 1}s`,
    height: 15 + Math.random() * 25,
    size: 3 + Math.random() * 5,
  }));

  const runes = Array.from({ length: 12 }, (_, i) => ({
    angle: (i / 12) * 360,
  }));

  return (
    <div className="relative flex items-center justify-center w-full h-[600px] bg-gradient-to-b from-gray-950 via-black to-black overflow-hidden">
      
      <style>{`
        @keyframes riseAndFade {
          0% {
            opacity: 0;
            transform: translateY(30px) scaleY(0.1) scaleX(2);
            filter: blur(4px);
          }
          10% {
            opacity: 0.9;
            transform: translateY(0px) scaleY(1) scaleX(1);
            filter: blur(0px);
          }
          100% {
            opacity: 0;
            transform: translateY(-300px) scaleY(2.5) scaleX(0.3);
            filter: blur(15px);
          }
        }

        @keyframes flameFlicker {
          0%, 100% {
            transform: translateY(0) scaleY(1) scaleX(1);
            opacity: 0.9;
          }
          25% {
            transform: translateY(-5px) scaleY(1.2) scaleX(0.9);
            opacity: 1;
          }
          50% {
            transform: translateY(-8px) scaleY(1.4) scaleX(0.85);
            opacity: 0.95;
          }
          75% {
            transform: translateY(-3px) scaleY(1.1) scaleX(0.95);
            opacity: 0.85;
          }
        }

        @keyframes portalPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
            opacity: 1;
          }
        }

        @keyframes energyWave {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes runeGlow {
          0%, 100% {
            opacity: 0.5;
            text-shadow: 0 0 8px rgba(255, 50, 50, 0.9);
          }
          50% {
            opacity: 1;
            text-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 50, 50, 0.9);
          }
        }

        .beam-animation {
          animation-name: riseAndFade;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          animation-iteration-count: infinite;
          transform-origin: bottom center;
        }

        .flame-animation {
          animation-name: flameFlicker;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          transform-origin: bottom center;
        }
      `}</style>

      <div className="relative flex items-center justify-center [perspective:1500px]">
        
        {/* Brume interdimensionnelle - uniquement rouge */}
        <div className="absolute -top-40 w-[500px] h-[500px] bg-red-600/40 blur-[120px] rounded-full" 
             style={{ animation: 'portalPulse 4s ease-in-out infinite' }} />
        <div className="absolute top-10 w-96 h-96 bg-red-500/30 blur-[100px] rounded-full"
             style={{ animation: 'portalPulse 3s ease-in-out infinite', animationDelay: '1s' }} />
        <div className="absolute top-20 w-80 h-80 bg-red-400/25 blur-[90px] rounded-full"
             style={{ animation: 'portalPulse 3.5s ease-in-out infinite', animationDelay: '0.5s' }} />

        {/* LE PORTAIL - Cercle magique au sol (AGRANDI) */}
        <div className="relative w-[400px] h-[400px] rounded-full 
                        [transform:rotateX(75deg)]">
          
          {/* Ondes d'énergie */}
          <div className="absolute inset-0 rounded-full border-[3px] border-red-500/60"
               style={{ animation: 'energyWave 3s ease-out infinite' }}></div>
          <div className="absolute inset-0 rounded-full border-[3px] border-red-400/50"
               style={{ animation: 'energyWave 3s ease-out infinite', animationDelay: '1s' }}></div>
          <div className="absolute inset-0 rounded-full border-[3px] border-white/40"
               style={{ animation: 'energyWave 3s ease-out infinite', animationDelay: '2s' }}></div>

          {/* Cercle principal avec runes - ANNEAU UNIQUEMENT */}
          <div className="absolute inset-0 rounded-full 
                          border-[8px] border-red-500
                          shadow-[0_0_100px_40px_rgba(255,30,30,0.9),inset_0_0_80px_30px_rgba(255,80,80,0.95)]"
               style={{ animation: 'portalPulse 2s ease-in-out infinite' }}>
            
            {/* Cercle intérieur - anneau blanc/rouge */}
            <div className="absolute inset-10 rounded-full border-[4px] border-white/80 
                            shadow-[0_0_60px_20px_rgba(255,255,255,0.7),inset_0_0_40px_15px_rgba(255,100,100,0.8)]"></div>
            
            {/* Anneau intermédiaire */}
            <div className="absolute inset-6 rounded-full border-[2px] border-red-300/60"></div>
            
            {/* Runes magiques */}
            {runes.map((rune, index) => {
              const radius = 180;
              const x = Math.cos((rune.angle * Math.PI) / 180) * radius;
              const y = Math.sin((rune.angle * Math.PI) / 180) * radius * 0.3;

              return (
                <div
                  key={`rune-${index}`}
                  className="absolute top-1/2 left-1/2 text-white font-bold text-xl"
                  style={{
                    marginLeft: `${x}px`,
                    marginTop: `${y}px`,
                    transform: 'translate(-50%, -50%)',
                    animation: 'runeGlow 2s ease-in-out infinite',
                    animationDelay: `${index * 0.15}s`,
                  }}
                >
                  ◈
                </div>
              );
            })}
          </div>

          {/* Halo externe */}
          <div className="absolute inset-[-40px] bg-gradient-radial from-red-500/50 via-red-600/20 to-transparent blur-[40px] rounded-full"
               style={{ animation: 'portalPulse 2.5s ease-in-out infinite' }}></div>

          {/* Centre du portail - VIDE (néant) - juste un bord lumineux */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-40 h-40 rounded-full border-[3px] border-white/60
                          shadow-[0_0_50px_25px_rgba(255,100,100,0.6),inset_0_0_30px_15px_rgba(255,50,50,0.4)]"
               style={{ animation: 'portalPulse 1.5s ease-in-out infinite' }}>
            {/* Anneau interne qui pulse */}
            <div className="absolute inset-3 rounded-full border-[2px] border-red-400/70"></div>
          </div>
          
          {/* FLAMMES AUTOUR DU CERCLE */}
          {flames.map((flame, index) => {
            const startRadius = 200;
            const startX = Math.cos((flame.angle * Math.PI) / 180) * startRadius;
            const startY = Math.sin((flame.angle * Math.PI) / 180) * startRadius;
            
            const isWhiteFlame = index % 4 === 0;

            return (
              <div
                key={`flame-${index}`}
                className="absolute top-1/2 left-1/2 flame-animation"
                style={{
                  marginLeft: `${startX}px`,
                  marginTop: `${startY}px`,
                  animationDuration: flame.duration,
                  animationDelay: flame.delay,
                }}
              >
                {/* Flamme en forme de goutte étirée */}
                <div 
                  className={`rounded-full blur-[1px]
                    ${isWhiteFlame 
                      ? 'bg-gradient-to-t from-white via-red-200 to-transparent shadow-[0_0_20px_rgba(255,255,255,1)]' 
                      : 'bg-gradient-to-t from-red-600 via-red-400 to-transparent shadow-[0_0_15px_rgba(255,50,50,0.9)]'
                    }`}
                  style={{
                    width: `${flame.size}px`,
                    height: `${flame.height}px`,
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* COLONNES DE LUMIÈRE - blanc et rouge */}
        <div className="absolute top-20 flex items-center justify-center w-[900px] h-[400px] pointer-events-none">
          {beams.map((beam, index) => {
            const radius = 180;
            const x = Math.cos((beam.angle * Math.PI) / 180) * radius;
            const y = Math.sin((beam.angle * Math.PI) / 180) * (radius * 0.3);

            return (
              <div
                key={index}
                className="absolute bottom-[70%] left-1/2 flex flex-col items-center"
                style={{
                  marginLeft: `${x}px`,
                  marginBottom: `${-y}px`,
                }}
              >
                {/* Faisceau principal - gradient blanc→rouge */}
                <div
                  className={`beam-animation w-[5px] ${beam.height}`}
                  style={{
                    animationDuration: beam.duration,
                    animationDelay: beam.delay,
                    background: 'linear-gradient(to top, #ffffff, #ff6b6b 30%, #ff4444 60%, transparent)',
                    boxShadow: '0 0 25px rgba(255, 100, 100, 0.9), 0 0 40px rgba(255, 255, 255, 0.5)',
                  }}
                >
                  {/* Point d'origine - blanc pur */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full 
                                  shadow-[0_0_25px_15px_rgba(255,255,255,0.95),0_0_40px_20px_rgba(255,100,100,0.8)]" />
                  
                  {/* Halo énergétique rouge */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-16 bg-red-500/40 blur-[12px] rounded-full" />
                  
                  {/* Éclairs d'énergie - blanc */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/70 blur-[2px] rotate-45"></div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-white/70 blur-[2px] -rotate-45"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RealisticMagicCircle;