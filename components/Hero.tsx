import React from 'react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amg-blue/95 via-amg-blue/80 to-amg-blue/40 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Modern corporate office"
          className="w-full h-full object-cover transform scale-100 animate-[pulse_20s_ease-in-out_infinite]"
          style={{ animationDuration: '30s' }} // Very slow zoom/pulse effect
        />
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-amg-green/20 rounded-full blur-2xl animate-float z-10"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float-delayed z-10"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="inline-block px-5 py-2 mb-6 border border-amg-green/50 rounded-full bg-amg-blue/40 backdrop-blur-md animate-fade-in-down shadow-lg shadow-amg-green/10">
            <span className="text-amg-green font-bold text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amg-green animate-pulse"></span>
              Premier Management Consulting
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white font-heading tracking-tight mb-8 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Driving Growth <br/>
            <span className="text-gradient text-gradient-animate">
              Through Excellence
            </span>
          </h1>
          
          <p className="mt-4 text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-light animate-fade-in-up max-w-2xl" style={{ animationDelay: '0.3s' }}>
            We provide world-class management consulting, program support, and administrative services tailored to empower your organization's future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="#services"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-amg-green overflow-hidden transition-all shadow-[0_0_20px_rgba(22,163,74,0.3)] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)] hover:-translate-y-1"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Services</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0 opacity-10"></div>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-lg font-bold rounded-full text-white hover:bg-white hover:text-amg-blue transition-all hover:shadow-lg hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;