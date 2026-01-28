
import React from 'react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amg-blue/95 via-amg-blue/70 to-transparent z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=90" 
          alt="Modern Architecture"
          className="w-full h-full object-cover transform scale-105 animate-spin-slow"
          style={{ animationDuration: '60s' }} 
        />
      </div>

      {/* Animated Gradient Accents */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amg-green/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-8 border border-white/20 rounded-full bg-white/5 backdrop-blur-md animate-fade-in-down shadow-2xl">
            <span className="text-white font-bold text-xs uppercase tracking-[0.3em] flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-amg-green animate-ping"></span>
              {COMPANY_INFO.tagline}
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white font-heading tracking-tighter mb-8 leading-[0.9] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {COMPANY_INFO.shortName} <br/>
            <span className="text-gradient brightness-110">
              Force-Multiplier
            </span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed font-light animate-fade-in-up max-w-2xl" style={{ animationDelay: '0.3s' }}>
            Empowering <strong>Global Leaders</strong> through Integrated Strategic Consulting, AI Innovation, and Professional Media Storytelling.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="#services"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full text-white bg-amg-green overflow-hidden transition-all shadow-[0_0_25px_rgba(22,163,74,0.4)] hover:shadow-[0_0_40px_rgba(22,163,74,0.6)] hover:-translate-y-1"
            >
              <span className="relative z-10">Our Expertise</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0 opacity-20"></div>
            </a>
            <a
              href="#booking"
              className="group inline-flex items-center justify-center px-10 py-5 border-2 border-white/40 backdrop-blur-sm text-lg font-bold rounded-full text-white hover:bg-white hover:text-amg-blue transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Book a Session
            </a>
          </div>

          <div className="mt-16 flex items-center gap-10 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-amg-blue shadow-lg" alt="Avatar" />
                ))}
             </div>
             <p className="text-gray-300 text-sm font-medium">
                Trusted by <span className="text-white font-bold">500+</span> Organizational Leaders
             </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-10 z-20 hidden md:block animate-bounce opacity-50">
        <div className="w-0.5 h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        <p className="[writing-mode:vertical-lr] text-white text-[10px] font-bold tracking-widest uppercase mt-4">Discover More</p>
      </div>
    </section>
  );
};

export default Hero;
