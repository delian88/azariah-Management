
import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  // Duplicate partners array to ensure seamless looping and enough width for all screen sizes
  const scrollingPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden relative group">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
         <p className="text-xs font-black text-amg-grey/40 uppercase tracking-[0.4em]">Our Strategic Network</p>
      </div>

      <div className="relative w-full">
        {/* Continuous scroll container */}
        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused] py-4">
          {scrollingPartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="flex-shrink-0 w-[200px] sm:w-[280px] mx-8 sm:mx-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700 opacity-30 hover:opacity-100 hover:scale-105 transform cursor-pointer"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-10 sm:max-h-14 w-auto object-contain filter drop-shadow-sm"
              />
              <span className="sr-only">{partner.name}</span>
            </div>
          ))}
        </div>
        
        {/* Cinematic Gradient Overlays for Smooth Fade Effect */}
        <div className="absolute top-0 left-0 h-full w-24 sm:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 sm:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Partners;
