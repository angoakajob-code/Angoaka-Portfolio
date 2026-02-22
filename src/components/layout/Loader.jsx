// components/layout/Loader.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Séquence d'animation logo ────────────────────────────────────────────────
const SEQUENCE = [
  { show1: true,  show2: false, duration: 600 },
  { show1: true,  show2: true,  duration: 700 },
  { show1: true,  show2: true,  duration: 400 },
  { show1: false, show2: true,  duration: 600 },
  { show1: true,  show2: true,  duration: 700 },
  { show1: true,  show2: false, duration: 500 },
];

// ─── CONFIG ───────────────────────────────────────────────────────────────────
const SIZE    = 160;   // taille du cercle en px
const ORBIT_R = 95;   // rayon orbite > 80 → points À L'EXTÉRIEUR du cercle

// 4 points : tête rouge vif (gros) → queue rose pâle (petit)
const DOTS = [
  { angleOffset: 0,  r: 7,   color: '#FF0218', opacity: 1,    glow: 12 },
  { angleOffset: 12, r: 5.5, color: '#FF4466', opacity: 0.75, glow: 8  },
  { angleOffset: 22, r: 4,   color: '#FF8899', opacity: 0.5,  glow: 5  },
  { angleOffset: 31, r: 2.8, color: '#FFBBCC', opacity: 0.3,  glow: 3  },
];

// ─── Composant ────────────────────────────────────────────────────────────────
const Loader = ({ onFinished }) => {
  const [progress,  setProgress]  = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [show1,     setShow1]     = useState(true);
  const [show2,     setShow2]     = useState(false);

  useEffect(() => {
    let cancelled = false;
    const run = async (idx) => {
      if (cancelled) return;
      const step = SEQUENCE[idx % SEQUENCE.length];
      setShow1(step.show1);
      setShow2(step.show2);
      await new Promise(r => setTimeout(r, step.duration));
      if (!cancelled) run(idx + 1);
    };
    run(0);
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(iv);
          setTimeout(() => { setIsVisible(false); setTimeout(onFinished, 200); }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(iv);
  }, [onFinished]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: 'radial-gradient(ellipse at 50% 45%, #242424 0%, #1A1A1A 55%, #111 100%)' }}
        >
          <div className="flex flex-col items-center">

            {/*
              Conteneur 240x240 — plus grand que le cercle (160px)
              pour que les points qui orbitent à 95px du centre
              ne soient JAMAIS clippés par le div parent.
              Le cercle et le logo sont centrés à l'intérieur.
            */}
            <div className="mb-8" style={{ position: 'relative', width: 240, height: 240 }}>

              {/* ── Cercle centré ── */}
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: SIZE, height: SIZE,
                borderRadius: '50%',
                border: '1.5px solid rgba(255,255,255,0.35)',
                boxShadow: 'inset 0 0 18px rgba(255,2,24,0.18)',
                background: 'transparent',
              }} />

              {/* ── Logo A centré ── */}
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 72, height: 72,
                zIndex: 10,
              }}>
                <svg viewBox="0 0 53 52" width="72" height="72" fill="none">
                  <defs>
                    <linearGradient id="lg-shared" x1="0" y1="26" x2="52.4727" y2="26" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#B61C24"/>
                      <stop offset="1" stopColor="#FC0006"/>
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M45.7573 33.7332C45.7172 33.5511 45.6847 33.3741 45.6497 33.207L33.5949 0H18.8829L7.55365 31.1995C10.1783 27.8429 14.5594 25.3367 21.8403 26.6808H21.9003L26.1538 13.99L32.6191 33.0274H19.7661L19.7861 32.9601C14.9647 32.9601 6.77552 33.5137 5.47196 37.0199L3.62545 42.0324V41.9875L0 52H13.3033L16.4284 42.818H35.6315C40.5455 42.3416 47.1434 40.4663 45.7573 33.7332Z"
                    fill="url(#lg-shared)"
                    animate={{ opacity: show2 ? 1 : 0, y: show2 ? 0 : -6 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  />
                  <motion.path
                    d="M47.1484 37.3342C47.1609 40.7307 45.4845 45.1347 37.1027 46.0474H36.9976L39.0318 52H52.4852L47.1484 37.3342Z"
                    fill="url(#lg-shared)"
                    animate={{ opacity: show1 ? 1 : 0, x: show1 ? 0 : 8 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                  />
                </svg>
              </div>

              {/*
                ── SVG des points orbitants ──
                Taille 240x240, centre = (120, 120).
                ORBIT_R=95 → point le plus loin à cx=215 < 240 ✓
                overflow="visible" en backup mais normalement pas nécessaire.
              */}
              <motion.svg
                width={240}
                height={240}
                viewBox="0 0 240 240"
                style={{ position: 'absolute', top: 0, left: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              >
                <defs>
                  {DOTS.map((dot, i) => (
                    <filter key={i} id={`dg-${i}`} x="-80%" y="-80%" width="260%" height="260%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation={dot.glow * 0.4} result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  ))}
                </defs>

                {DOTS.map((dot, i) => {
                  // Tête à 0° (droite du cercle), queue décalée en négatif = en arrière dans la rotation CW
                  const rad = (-dot.angleOffset * Math.PI) / 180;
                  const cx  = 120 + ORBIT_R * Math.cos(rad);
                  const cy  = 120 + ORBIT_R * Math.sin(rad);
                  return (
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r={dot.r}
                      fill={dot.color}
                      opacity={dot.opacity}
                      filter={`url(#dg-${i})`}
                    />
                  );
                })}
              </motion.svg>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;