
import React from 'react';
import { Icons, COMPANY_INFO } from '../constants';
import Link from './Link';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-50 to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className="reveal from-left">
            <div className="inline-block px-4 py-1.5 mb-8 bg-amg-blue/5 rounded-full border border-amg-blue/10">
              <span className="text-amg-blue font-bold tracking-[0.2em] uppercase text-[10px]">Our Firm</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-amg-blue font-heading mb-8 leading-[1.1] tracking-tight">
              A Strategic <br/>
              <span className="text-gradient">Force Multiplier</span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
              {COMPANY_INFO.aboutText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="p-6 bg-white rounded-2xl shadow-xl shadow-amg-blue/5 border border-gray-50">
                <div className="w-10 h-10 bg-amg-green/10 text-amg-green rounded-lg flex items-center justify-center mb-4">
                  <Icons.Sparkles />
                </div>
                <h4 className="font-bold text-amg-blue mb-2">Innovation First</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Pioneering AI-driven strategies that optimize organizational readiness and impact.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-xl shadow-amg-blue/5 border border-gray-50">
                <div className="w-10 h-10 bg-amg-blue/10 text-amg-blue rounded-lg flex items-center justify-center mb-4">
                  <Icons.Globe />
                </div>
                <h4 className="font-bold text-amg-blue mb-2">Global Insight</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Deep cross-sector expertise serving public agencies and private enterprises worldwide.</p>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="inline-flex items-center text-amg-blue font-black uppercase tracking-widest text-xs hover:text-amg-green transition-all group"
            >
              Learn More About Our Story 
              <svg className="w-5 h-5 ml-4 transform group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Image Side */}
          <div className="reveal from-right mt-16 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-amg-green/10 rounded-[2.5rem] blur-3xl animate-pulse-slow"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="AMG Executive Strategy Team"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amg-blue/40 to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
