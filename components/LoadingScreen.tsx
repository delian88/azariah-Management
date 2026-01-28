
import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';

interface LoadingScreenProps {
  onFinished: () => void;
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished, isVisible }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Reveal the logo almost immediately
    const showTimer = setTimeout(() => setIsReady(true), 100);
    
    // Automatically transition to the site after the animation finishes
    const finishTimer = setTimeout(() => {
      onFinished();
    }, 2000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="flex flex-col items-center">
        <div className="relative mb-8">
          <div className="absolute -inset-8 bg-amg-green/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="relative bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-2xl border border-gray-50 animate-fade-in-down">
            <img 
              src={COMPANY_INFO.logoUrl} 
              alt={COMPANY_INFO.name} 
              className="h-20 sm:h-28 w-auto object-contain"
            />
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-amg-blue font-black uppercase tracking-[0.5em] text-[10px] sm:text-xs animate-pulse">
            Strategic Excellence
          </h2>
          <div className="mt-4 w-48 h-1 bg-gray-100 rounded-full mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-amg-green animate-[loading_1.8s_ease-in-out_forwards]"></div>
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
