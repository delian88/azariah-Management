
import React from 'react';
import { Icons } from '../constants';

const NonprofitStrategy: React.FC = () => {
  return (
    <section id="nonprofit-strategy" className="py-24 md:py-36 bg-gray-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amg-blue/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content Side - Optimized for Executive scanning */}
          <div className="reveal from-left">
            <div className="inline-block px-4 py-1.5 mb-8 bg-amg-blue/5 rounded-full border border-amg-blue/10">
              <span className="text-amg-blue font-bold tracking-[0.2em] uppercase text-[10px]">Strategic Empowerment</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-amg-blue font-heading mb-6 leading-[1.1] tracking-tight">
              Nonprofit Strategy & <br/>
              <span className="text-gradient">Capacity Building</span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              We help nonprofits move from overwhelmed to operationally strong through strategic planning, program design, and structural support.
            </p>

            {/* Service List - Clear Bullets & Strong Verbs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-10">
              {[
                "Organizational assessments",
                "Strategic & operational planning",
                "Fundraising & grant-readiness support",
                "Program design, execution, and evaluation",
                "Communications, PR, and storytelling",
                "Board governance & leadership development"
              ].map((service, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-amg-green rounded-md flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-amg-blue transition-colors leading-tight">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Outcome Statement - Emphasized for Business Developers */}
            <div className="mb-12 p-8 bg-white shadow-xl shadow-amg-blue/5 border-l-4 border-amg-green rounded-r-2xl border border-gray-100">
              <p className="text-amg-blue font-bold italic text-lg">
                Outcome: <span className="text-gray-700 font-normal">A more stable, visible, and investment-ready nonprofit.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="#booking" 
                className="w-full sm:w-auto text-center bg-amg-blue text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-amg-green transition-all shadow-xl shadow-amg-blue/20 transform hover:-translate-y-1"
              >
                Strengthen Your Organization
              </a>
              <div className="flex flex-col">
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Scale Specialist</span>
                <span className="text-amg-blue font-bold text-sm underline decoration-amg-green decoration-2 underline-offset-4 cursor-pointer hover:text-amg-green transition-colors">Download Capacity Audit</span>
              </div>
            </div>
          </div>

          {/* Image Side - Visualizing Operational Excellence */}
          <div className="reveal from-right mt-16 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-amg-blue/5 rounded-[2.5rem] blur-3xl"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Nonprofit Leadership & Strategic Planning"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amg-blue/40 to-transparent"></div>
                
                {/* Status indicator */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/20 flex items-center space-x-3">
                  <span className="w-2 h-2 bg-amg-green rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-black text-amg-blue uppercase tracking-widest">Efficiency Optimized</span>
                </div>

                {/* Impact Badge */}
                <div className="absolute bottom-10 left-10 right-10 flex items-center gap-6 bg-amg-blue/95 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
                   <div className="w-14 h-14 bg-amg-green rounded-xl flex items-center justify-center text-white shadow-lg">
                      <Icons.Chart />
                   </div>
                   <div>
                      <p className="text-white font-black text-xl leading-none">Investment Ready</p>
                      <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Operational Strength Framework</p>
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

export default NonprofitStrategy;
