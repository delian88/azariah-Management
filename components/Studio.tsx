import React from 'react';
import { Icons, STUDIO_INFO } from '../constants';

const Studio: React.FC = () => {
  return (
    <section id="studio" className="py-24 pt-32 bg-amg-blue text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C69749 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute -top-1/2 -right-1/2 w-[100%] h-[100%] bg-gradient-to-b from-amg-gold/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal from-left order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 mb-6 text-amg-gold animate-bounce" style={{ animationDuration: '3s' }}>
              <Icons.Video />
              <span className="font-bold tracking-wider uppercase">AMG Creative</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-6 leading-tight">
              {STUDIO_INFO.title}
            </h2>
            <h3 className="text-2xl text-gray-300 mb-6 font-light">{STUDIO_INFO.subtitle}</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 border-l-4 border-amg-gold pl-6">
              {STUDIO_INFO.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Professional Lighting', '4K Video Production', 'Sound Engineering', 'Live Streaming'].map((item, i) => (
                <div key={item} className="flex items-center space-x-2 reveal from-bottom" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-2 h-2 bg-amg-gold rounded-full shadow-[0_0_10px_#C69749]"></div>
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="group inline-block bg-transparent border-2 border-amg-gold text-amg-gold font-bold px-8 py-3 rounded-full hover:bg-amg-gold hover:text-amg-blue transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">Book Studio Time</span>
              <div className="absolute inset-0 bg-amg-gold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </a>
          </div>

          <div className="reveal from-right order-1 lg:order-2 mb-12 lg:mb-0 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-amg-gold/30 to-blue-500/30 rounded-2xl blur-lg group-hover:blur-2xl transition-all duration-500 animate-pulse-slow"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="AMG Studio"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 opacity-90 group-hover:opacity-100 transition-opacity">
                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="font-bold text-xl mb-1">State-of-the-art Facilities</p>
                  <p className="text-sm text-gray-300 flex items-center">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                    Washington, DC
                  </p>
                </div>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20 backdrop-blur-[2px]">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                   <div className="ml-1 text-white"><Icons.Play /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;