
import React from 'react';
import { COMPANY_INFO } from '../constants';
import Link from './Link';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amg-blue/95 via-amg-blue/80 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=90" 
          alt="Modern Architecture"
          className="w-full h-full object-cover transform scale-105"
        />
      </div>

      {/* Animated Gradient Accents */}
      <div className="absolute top-1/4 -left-20 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-amg-green/10 rounded-full blur-[100px] sm:blur-[140px] animate-pulse-slow"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 mb-6 sm:mb-8 border border-white/20 rounded-full bg-white/10 backdrop-blur-md shadow-2xl">
            <span className="text-white font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.4em] flex items-center gap-2 sm:gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amg-green animate-ping"></span>
              {COMPANY_INFO.tagline}
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white font-heading tracking-tighter mb-6 sm:mb-8 leading-[1.1] sm:leading-[0.85] animate-fade-in-up">
            {COMPANY_INFO.shortName} <br/>
            <span className="text-gradient brightness-125">
              Strategic Force
            </span>
          </h1>
          
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 leading-relaxed font-light max-w-2xl animate-fade-in-up">
            Empowering <strong>Global Leaders</strong> through Integrated Strategic Consulting, AI Innovation, and Professional Media Storytelling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up">
            <Link
              href="/blueprint"
              className="group relative inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-black rounded-full text-white bg-amg-green overflow-hidden transition-all shadow-2xl"
            >
              <span className="relative z-10 uppercase tracking-widest text-[10px] sm:text-xs">Download Blueprint</span>
            </Link>
            <Link
              href="/booking"
              className="group inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 border-2 border-white/40 backdrop-blur-sm text-base sm:text-lg font-black rounded-full text-white hover:bg-white hover:text-amg-blue transition-all"
            >
              <span className="uppercase tracking-widest text-[10px] sm:text-xs">Book a Session</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
