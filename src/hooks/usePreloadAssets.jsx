// hooks/usePreloadAssets.js (simplifié)
import { useState, useEffect } from 'react';

const usePreloadAssets = () => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    const preloadAllAssets = async () => {
      const imagesToPreload = [
        '/assets/images/angaoaka.png',
        '/assets/images/background.jpg',
        '/assets/images/lumiere.png',
        '/assets/images/equipe.png',
        '/assets/images/laptop.png',
        '/assets/images/bg2.jpg',
        '/assets/images/logo.png',
        '/assets/images/logo blanc(1).png',
        '/assets/icons/Subtract.png',
        '/assets/images/A.svg',
        '/assets/images/N.svg',
        '/assets/images/G.svg',
        '/assets/images/O.svg',
        '/assets/images/K.svg',
      ];

      const imagePromises = imagesToPreload.map(src => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      const fontPromise = document.fonts ? document.fonts.ready : Promise.resolve();

      await Promise.all([...imagePromises, fontPromise]);
      setAssetsLoaded(true);
    };

    preloadAllAssets();
  }, []);

  return assetsLoaded;
};

export default usePreloadAssets;