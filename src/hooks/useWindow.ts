import { useEffect, useState } from 'react';

export const useWindow = () => {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>();

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [window.innerHeight, window.innerWidth]);

  return { windowSize };
};
