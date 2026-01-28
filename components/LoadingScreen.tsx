
import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';

interface LoadingScreenProps {
  onFinished: () => void;
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished, isVisible }) => {
  const [isReady, setIsReady] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    // Start revealing animations
    const showTimer = setTimeout(() => setIsReady(true), 50);
    
    // Automatically transition to the site after the primary brand sequence
    const finishTimer = setTimeout(() => {
      onFinished();
    }, 2200);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className={`flex flex-col items-center transition-all duration-700 ${isReady ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        <div className="relative mb-10">
          <div className="absolute -inset-12 bg-amg-green/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="relative bg-white p-8 rounded-[3rem] shadow-2xl border border-gray-100 flex items-center justify-center min-w-[200px] min-h-[100px]">
            {!logoError ? (
              <img 
                src={COMPANY_INFO.logoUrl} 
                alt={COMPANY_INFO.name} 
                className="h-24 sm:h-32 w-auto object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-amg-blue font-black text-3xl tracking-tighter">AZARIAH</span>
                <span className="text-amg-green font-bold text-xs tracking-[0.3em] uppercase">Management Group</span>
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-amg-blue font-black uppercase tracking-[0.6em] text-[10px] sm:text-xs animate-pulse">
            Strategic Excellence
          </h2>
          <div className="mt-6 w-56 h-1 bg-gray-100 rounded-full mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-amg-green animate-[loading_2s_ease-in-out_forwards]"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
