
import React from 'react';
import { Icons } from '../constants';

const GovernmentConsulting: React.FC = () => {
  return (
    <section id="government-consulting" className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50/30 to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Imagery / Visual Side */}
          <div className="reveal from-left order-2 lg:order-1 mt-16 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-amg-blue/5 rounded-[2.5rem] blur-3xl animate-pulse-slow"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Government & Public Sector Consulting - Public Value"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amg-blue/60 via-transparent to-transparent"></div>
                
                {/* Floating Metric Card */}
                <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-black text-amg-green uppercase tracking-[0.3em] mb-2">Public Trust Index</span>
                    <span className="block text-3xl font-black text-amg-blue tracking-tighter">Strategic Compliance</span>
                  </div>
                  <div className="w-14 h-14 bg-amg-blue text-white rounded-2xl flex items-center justify-center shadow-lg">
                    <Icons.Globe />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-amg-green/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

          {/* Text Content Side - Optimized for Public Sector Procurement Language */}
          <div className="reveal from-right order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 mb-8 bg-amg-blue/5 rounded-full border border-amg-blue/10">
              <span className="text-amg-blue font-bold tracking-[0.2em] uppercase text-[10px]">Public Sector Advisory</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-amg-blue font-heading mb-6 leading-[1.1] tracking-tight">
              Government & <br/>
              <span className="text-gradient">Public Sector Consulting</span>
            </h2>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              We support government agencies with strategic planning, program management, community engagement, and cross-sector partnership development.
            </p>

            {/* Service List - Scannable for RFP readers */}
            <div className="space-y-4 mb-10">
              {[
                "Program & project management",
                "Community engagement strategies",
                "Interagency coordination",
                "Public-sector innovation & modernization",
                "Federal/state/local partnership development",
                "Policy-aligned program design & reporting"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 bg-amg-green/10 rounded-full flex items-center justify-center group-hover:bg-amg-green transition-colors shadow-sm">
                    <svg className="w-3.5 h-3.5 text-amg-green group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-600 font-bold group-hover:text-amg-blue transition-colors">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Outcome Statement - Precise phrasing for government leaders */}
            <div className="mb-12 p-8 bg-amg-blue/5 border-l-4 border-amg-green rounded-r-2xl border border-gray-100 shadow-sm">
              <p className="text-amg-blue font-bold italic text-lg">
                Outcome: <span className="text-gray-700 font-normal">Effective programs, stronger public trust, and improved service delivery.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a 
                href="#booking" 
                className="w-full sm:w-auto text-center bg-amg-blue text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-amg-green transition-all shadow-2xl shadow-amg-blue/20 hover:shadow-amg-green/40 transform hover:-translate-y-1"
              >
                Start Public Sector Engagement
              </a>
              <div className="flex flex-col">
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Policy & Governance</span>
                <span className="text-amg-blue font-bold text-sm underline decoration-amg-green decoration-2 underline-offset-4 cursor-pointer hover:text-amg-green transition-colors">Review Capability Statement</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GovernmentConsulting;
