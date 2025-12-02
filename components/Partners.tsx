import React from 'react';
import { PARTNERS } from '../constants';

const Partners: React.FC = () => {
  // Duplicate partners array to ensure seamless looping
  const scrollingPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section className="py-12 bg-white border-b border-gray-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
         <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Our Partners</p>
      </div>

      <div className="relative w-full">
        <div className="flex w-[200%] animate-scroll-right hover:pause">
          {scrollingPartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="flex-shrink-0 w-[200px] mx-8 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110 transform"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient Overlays for Smooth Fade Effect */}
        <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default Partners;