
import React from 'react';
import { COMPANY_INFO, Icons } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-36 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <div className="lg:col-span-7 reveal from-left">
            <div className="inline-block px-4 py-1.5 mb-8 bg-amg-blue/5 rounded-full border border-amg-blue/10">
              <span className="text-amg-blue font-bold tracking-[0.2em] uppercase text-[10px]">Strategic Vision</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-amg-blue font-heading mb-10 leading-tight">
              We Are Your <br/>
              <span className="text-gradient">Strategic Force Multiplier</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-3xl">
              {COMPANY_INFO.aboutText}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
               <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-amg-green text-white flex items-center justify-center rounded-xl shadow-lg group-hover:rotate-12 transition-transform">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-amg-blue mb-1">Elite Innovation</h4>
                    <p className="text-gray-500 text-sm">Harnessing AI to redefine organizational performance.</p>
                  </div>
               </div>
               <div className="flex gap-5 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-amg-blue text-white flex items-center justify-center rounded-xl shadow-lg group-hover:rotate-12 transition-transform">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-amg-blue mb-1">Global Impact</h4>
                    <p className="text-gray-500 text-sm">Scaling missions across borders and communities.</p>
                  </div>
               </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-10 pt-10 border-t border-gray-100">
               <div className="text-center sm:text-left">
                  <span className="block text-4xl font-black text-amg-blue">10+</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Years of Excellence</span>
               </div>
               <div className="text-center sm:text-left">
                  <span className="block text-4xl font-black text-amg-blue">50+</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Global Partners</span>
               </div>
               <div className="text-center sm:text-left">
                  <span className="block text-4xl font-black text-amg-blue">100%</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Mission Focused</span>
               </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:col-span-5 mt-20 lg:mt-0 relative reveal from-right delay-300">
            <div className="relative group">
               {/* Background Decorative Box */}
               <div className="absolute -top-10 -right-10 w-full h-full border-[10px] border-amg-blue/5 rounded-3xl -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700"></div>
               
               <div className="relative rounded-3xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] group">
                 <img
                    className="w-full h-auto transform transition-transform duration-1000 group-hover:scale-105"
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Team Collaboration"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-amg-blue/40 to-transparent"></div>
               </div>

               {/* Overlapping Detail Card */}
               <div className="absolute -bottom-10 -left-10 bg-amg-green p-8 rounded-2xl shadow-2xl max-w-[280px] hidden md:block animate-float">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                        {/* Fix: Icons must be imported from constants to use Icons.Briefcase here */}
                        <Icons.Briefcase />
                     </div>
                     <span className="text-white font-black text-xl leading-none">Strategic Force</span>
                  </div>
                  <p className="text-white/80 text-sm font-medium">Turning vision into a measurable competitive advantage.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
