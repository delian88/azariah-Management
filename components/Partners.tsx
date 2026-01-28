
import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  // Triple the partners array to ensure seamless looping on all screen sizes
  const scrollingPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-16 bg-white border-b border-gray-100 overflow-hidden relative group">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
         <p className="text-[10px] font-black text-amg-blue uppercase tracking-[0.5em] opacity-40">Our Strategic Partners & Clients</p>
      </div>

      <div className="relative w-full">
        {/* Continuous scroll container */}
        <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused] py-6">
          {scrollingPartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="flex-shrink-0 mx-10 sm:mx-16 flex items-center justify-center transition-all duration-700"
            >
              <span className="text-xl sm:text-2xl font-black text-amg-blue/30 hover:text-amg-green transition-all uppercase tracking-tighter whitespace-nowrap cursor-default">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Cinematic Gradient Overlays for Smooth Fade Effect */}
        <div className="absolute top-0 left-0 h-full w-24 sm:w-80 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 sm:w-80 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Partners;
