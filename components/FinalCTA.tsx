
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amg-green/5 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amg-blue/5 rounded-full blur-[120px] animate-pulse-slow"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="reveal from-bottom">
          <div className="inline-block px-4 py-1.5 mb-8 bg-amg-green/10 rounded-full border border-amg-green/20">
            <span className="text-amg-green font-bold tracking-[0.2em] uppercase text-[10px]">Move Your Mission Forward</span>
          </div>
          
          <h2 className="text-4xl md:text-7xl font-black text-amg-blue font-heading mb-8 leading-[1.1] tracking-tighter">
            Let’s Build Something <br/>
            <span className="text-gradient">Transformative Together</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto font-light">
            Whether you're growing your nonprofit, expanding your CSR strategy, modernizing your organization, or scaling community impact—AMG provides the expertise to move your mission forward.
          </p>

          <div className="flex flex-col items-center gap-6">
            <a 
              href="#booking" 
              className="group relative inline-flex items-center justify-center px-12 py-6 text-lg font-black text-white bg-amg-blue rounded-full overflow-hidden transition-all shadow-2xl shadow-amg-blue/20 hover:shadow-amg-green/40 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-3">
                Book a 20-Minute Discovery Call
                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-amg-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0"></div>
            </a>
            
            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">
              Strategic Excellence Integrated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
