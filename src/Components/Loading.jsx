import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const Loading = () => {
  const [scaleUp, setScaleUp] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const scaleTimeout = setTimeout(() => setScaleUp(true), 1000);

    const endTimeout = setTimeout(() => setShowLoading(false), 2 *  1000); 

    return () => {
      clearTimeout(scaleTimeout);
      clearTimeout(endTimeout);
    };
  }, []);

  if (!showLoading) return null;

  return (
    <div
      className="flex items-center justify-center h-screen"
      aria-label="Loading screen"
    >
      <div
        className={`flex items-center text-6xl text-purple-700 font-mono font-bold transition-transform duration-1000 ease-in-out ${
          scaleUp ? 'scale-110' : 'scale-100'
        }`}
      >
        <span className="tracking-widest">L</span>

        {!imgError ? (
          <img
            src={logo}
            alt="Loading icon"
            className="w-12 h-12 mx-2 animate-pulse"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <span
            className="mx-2 text-red-400 text-4xl animate-bounce"
            role="img"
            aria-label="Error loading logo"
          >
            ⚠️
          </span>
        )}

        <span className="tracking-widest">ADING</span>
      </div>
    </div>
  );
};

export default Loading;
