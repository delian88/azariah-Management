
import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  // Duplicate partners array to ensure seamless looping
  const scrollingPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
         <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Our Strategic Partners</p>
      </div>

      <div className="relative w-full">
        {/* Continuous scroll container */}
        <div className="flex w-max animate-scroll hover:pause">
          {scrollingPartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="flex-shrink-0 w-[180px] sm:w-[220px] mx-6 sm:mx-10 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 hover:scale-110 transform"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-12 sm:max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient Overlays for Smooth Fade Effect */}
        <div className="absolute top-0 left-0 h-full w-24 sm:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 sm:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Partners;
