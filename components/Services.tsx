
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-36 bg-gray-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amg-green/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amg-blue/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mb-20 reveal from-bottom">
          <div className="inline-block px-4 py-1.5 mb-6 bg-amg-green/10 rounded-full border border-amg-green/20">
            <span className="text-amg-green font-bold tracking-[0.2em] uppercase text-[10px]">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-amg-blue font-heading mb-8 leading-[1.1]">
            Strategy, Innovation & Impact— <br/>
            <span className="text-gradient">Built for Growth</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            Azariah Management Group (AMG) provides integrated consulting, program execution, innovation support, and creative storytelling that help organizations drive measurable community impact and sustainable growth.
          </p>
          <p className="mt-6 text-lg text-gray-500 max-w-3xl font-light">
            We partner with corporations, nonprofits, public-sector agencies, start-ups, and international partners who want strategic clarity, operational strength, and meaningful social responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-3xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(15,44,89,0.1)] transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 flex flex-col reveal from-bottom"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 bg-amg-blue/5 rounded-2xl flex items-center justify-center text-amg-blue mb-10 group-hover:bg-amg-blue group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-amg-blue/20 group-hover:rotate-6">
                <div className="transform scale-125 transition-transform duration-500 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-2xl font-black text-amg-blue mb-4 font-heading group-hover:text-amg-green transition-colors leading-tight">
                {service.title}
              </h4>
              <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <a href="#contact" className="inline-flex items-center text-sm font-black text-amg-blue group-hover:text-amg-green transition-colors uppercase tracking-widest">
                  Explore 
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <span className="text-gray-200 font-black text-5xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 select-none">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
