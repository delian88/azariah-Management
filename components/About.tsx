import React from 'react';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amg-blue/5 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amg-green/10 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* Image Side */}
          <div className="relative mb-16 lg:mb-0 reveal from-left">
            <div className="absolute top-0 left-0 w-full h-full border-2 border-amg-green rounded-2xl transform translate-x-4 translate-y-4 transition-transform duration-500 hover:translate-x-6 hover:translate-y-6"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Strategic meeting at Azariah"
              />
              <div className="absolute inset-0 bg-amg-blue/20 group-hover:bg-amg-blue/0 transition-colors duration-500"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-4 md:-right-10 bg-white p-8 rounded-xl shadow-2xl hidden md:block max-w-xs animate-float border-l-4 border-amg-green">
              <p className="text-amg-blue font-bold text-lg italic leading-relaxed">"Excellence is not an act, but a habit."</p>
              <div className="flex items-center mt-4">
                <div className="w-8 h-px bg-gray-300 mr-2"></div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Our Motto</span>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="reveal from-right delay-200">
            <div className="inline-block px-3 py-1 mb-6 bg-amg-blue/10 rounded-full">
              <span className="text-amg-blue font-bold tracking-wide uppercase text-xs">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-amg-blue font-heading mb-8 leading-tight">
              A Partner You Can <br/><span className="text-amg-green relative inline-block">
                Trust & Rely On
                <svg className="absolute w-full h-2 bottom-0 left-0 text-amg-green/30 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {COMPANY_INFO.aboutText}
            </p>
            
            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
              <div className="group cursor-default">
                <span className="block text-4xl font-extrabold text-amg-blue mb-1 group-hover:text-amg-green transition-colors duration-300">10+</span>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide group-hover:text-amg-blue transition-colors">Years Experience</span>
              </div>
              <div className="group cursor-default">
                <span className="block text-4xl font-extrabold text-amg-blue mb-1 group-hover:text-amg-green transition-colors duration-300">100%</span>
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide group-hover:text-amg-blue transition-colors">Client Satisfaction</span>
              </div>
            </div>
            
            <div className="mt-10">
              <a href="#services" className="inline-flex items-center text-amg-blue font-bold border-b-2 border-amg-green hover:text-amg-green hover:border-amg-blue transition-all pb-1 group">
                Explore our services 
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;