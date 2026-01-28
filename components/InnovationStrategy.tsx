
import React from 'react';
import { Icons } from '../constants';

const InnovationStrategy: React.FC = () => {
  return (
    <section id="innovation-strategy" className="py-24 md:py-36 bg-gray-50 relative overflow-hidden">
      {/* High-Tech Background Accents */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#0F2C59 1px, transparent 1px), linear-gradient(90deg, #0F2C59 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amg-green/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content Side - Optimized for Tech Leaders & Startups */}
          <div className="reveal from-left">
            <div className="inline-block px-4 py-1.5 mb-8 bg-amg-green/10 rounded-full border border-amg-green/20">
              <span className="text-amg-green font-bold tracking-[0.2em] uppercase text-[10px]">Digital Transformation</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-amg-blue font-heading mb-6 leading-[1.1] tracking-tight">
              Innovation & AI <br/>
              <span className="text-gradient">Strategy Consulting</span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              We help organizations adopt emerging technologies, build AI readiness, and modernize their systems for the future.
            </p>

            {/* Service List - Targeted at High-Margin Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-10">
              {[
                "AI readiness assessments",
                "Innovation roadmaps",
                "Digital transformation planning",
                "Workflow automation & process optimization",
                "Tech-enabled program design",
                "Startup innovation support"
              ].map((service, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-amg-blue rounded-md flex items-center justify-center group-hover:bg-amg-green transition-colors shadow-sm">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-amg-blue transition-colors leading-tight">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Outcome Statement - Focus on Modernization ROI */}
            <div className="mb-12 p-8 bg-white shadow-xl shadow-amg-blue/5 border-l-4 border-amg-blue rounded-r-2xl border border-gray-100">
              <p className="text-amg-blue font-bold italic text-lg">
                Outcome: <span className="text-gray-700 font-normal">Smarter operations, increased efficiency, and future-proof capabilities.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="#booking" 
                className="w-full sm:w-auto text-center bg-amg-blue text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-amg-green transition-all shadow-xl shadow-amg-blue/20 transform hover:-translate-y-1"
              >
                Future-Proof Your Business
              </a>
              <div className="flex flex-col">
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Innovation Architect</span>
                <span className="text-amg-blue font-bold text-sm underline decoration-amg-green decoration-2 underline-offset-4 cursor-pointer hover:text-amg-green transition-colors">View AI Case Studies</span>
              </div>
            </div>
          </div>

          {/* Image Side - Visualizing Future Tech */}
          <div className="reveal from-right mt-16 lg:mt-0 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-amg-green/5 rounded-[2.5rem] blur-3xl"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Innovation and AI Technology Transformation"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amg-blue/50 to-transparent"></div>
                
                {/* Tech Stat Overlay */}
                <div className="absolute top-8 left-8 bg-amg-blue/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg border border-white/10 flex items-center space-x-4">
                  <div className="flex flex-col">
                    <span className="text-amg-green text-xs font-black uppercase tracking-widest">Efficiency Boost</span>
                    <span className="text-white text-2xl font-black">40% +</span>
                  </div>
                  <div className="w-1 h-8 bg-white/20 rounded-full"></div>
                  <Icons.Sparkles />
                </div>

                {/* Automation Badge */}
                <div className="absolute bottom-10 left-10 right-10 flex items-center gap-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
                   <div className="w-14 h-14 bg-amg-green rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Icons.LightBulb />
                   </div>
                   <div>
                      <p className="text-amg-blue font-black text-xl leading-none">Smart Automation</p>
                      <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Ready for Execution Pipeline</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InnovationStrategy;
