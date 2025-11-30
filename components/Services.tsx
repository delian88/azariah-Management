import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-gray-50 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#0F2C59 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal from-bottom">
          <h2 className="text-amg-gold font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-amg-blue font-heading mb-6">
            Comprehensive Solutions
          </h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amg-gold to-transparent mx-auto rounded-full mb-6"></div>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            We deliver a wide range of professional services designed to elevate your business operations and drive efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 reveal from-bottom"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-amg-blue/5 rounded-2xl flex items-center justify-center text-amg-blue mb-8 group-hover:bg-amg-blue group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-3">
                <div className="transform transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-2xl font-bold text-amg-blue mb-4 font-heading group-hover:text-amg-gold transition-colors">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700">
                {service.description}
              </p>
              <div className="mt-auto pt-4 border-t border-gray-50">
                <a href="#contact" className="inline-flex items-center text-sm font-bold text-amg-blue group-hover:text-amg-gold transition-colors">
                  Learn More 
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;