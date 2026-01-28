
import React from 'react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amg-blue/95 via-amg-blue/80 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=90" 
          alt="Modern Architecture"
          className="w-full h-full object-cover transform scale-105"
        />
      </div>

      {/* Animated Gradient Accents matching logo lime green */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-amg-green/10 rounded-full blur-[140px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-white/5 rounded-full blur-[140px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 mb-8 border border-white/20 rounded-full bg-white/10 backdrop-blur-md animate-fade-in-down shadow-2xl">
            <span className="text-white font-black text-[10px] uppercase tracking-[0.4em] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amg-green animate-ping"></span>
              {COMPANY_INFO.tagline}
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-white font-heading tracking-tighter mb-8 leading-[0.85] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {COMPANY_INFO.shortName} <br/>
            <span className="text-gradient brightness-125">
              Strategic Force
            </span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-light animate-fade-in-up max-w-2xl" style={{ animationDelay: '0.3s' }}>
            Empowering <strong>Global Leaders</strong> through Integrated Strategic Consulting, AI Innovation, and Professional Media Storytelling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="#services"
              className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-black rounded-full text-white bg-amg-green overflow-hidden transition-all shadow-2xl shadow-amg-green/40 hover:-translate-y-1 active:scale-95"
            >
              <span className="relative z-10 uppercase tracking-widest text-xs">Our Expertise</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0 opacity-20"></div>
            </a>
            <a
              href="#booking"
              className="group inline-flex items-center justify-center px-12 py-5 border-2 border-white/40 backdrop-blur-sm text-lg font-black rounded-full text-white hover:bg-white hover:text-amg-blue transition-all hover:shadow-2xl hover:-translate-y-1 active:scale-95"
            >
              <span className="uppercase tracking-widest text-xs">Book a Session</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-40 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        <p className="text-white text-[9px] font-black tracking-[0.5em] uppercase mt-4">Scroll</p>
      </div>
    </section>
  );
};

export default Hero;
