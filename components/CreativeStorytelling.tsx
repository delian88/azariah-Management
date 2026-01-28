
import React from 'react';
import { Icons } from '../constants';

const CreativeStorytelling: React.FC = () => {
  return (
    <section id="creative-storytelling" className="py-24 md:py-36 bg-amg-blue text-white relative overflow-hidden">
      {/* Cinematic Background Accents */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amg-green/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content Side - Optimized for Impact & Emotion */}
          <div className="reveal from-left">
            <div className="inline-block px-4 py-1.5 mb-8 bg-amg-green/20 rounded-full border border-amg-green/30">
              <span className="text-amg-green font-bold tracking-[0.2em] uppercase text-[10px]">Narrative Excellence</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white font-heading mb-6 leading-[1.1] tracking-tight">
              Creative Storytelling <br/>
              <span className="text-gradient brightness-125">& Media Production</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
              (Studio AMG) — We create powerful content that elevates your mission, inspires action, and expands your reach.
            </p>

            {/* Service List - High-Margin Creative Offerings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-10">
              {[
                "Advocacy videos & documentary storytelling",
                "Animation and branded creative content",
                "Program launch videos",
                "Social media storytelling campaigns",
                "Podcast production & branded series",
                "Media strategy & narrative development"
              ].map((service, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-amg-green rounded-md flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(22,163,74,0.4)]">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3-2a1 1 0 000-1.664z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-300 group-hover:text-amg-green transition-colors leading-tight">
                    {service}
                  </span>
                </div>
              ))}
            </div>

            {/* Outcome Statement - Bridging Strategy + Creativity */}
            <div className="mb-12 p-8 bg-white/5 backdrop-blur-md shadow-2xl border-l-4 border-amg-green rounded-r-2xl border border-white/10">
              <p className="text-amg-green font-bold italic text-lg">
                Outcome: <span className="text-white font-normal">Authentic storytelling that drives visibility, credibility, and engagement.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="#booking" 
                className="w-full sm:w-auto text-center bg-amg-green text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-amg-blue transition-all shadow-xl shadow-amg-green/20 transform hover:-translate-y-1"
              >
                Amplify Your Narrative
              </a>
              <div className="flex flex-col">
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Creative Director</span>
                <span className="text-amg-green font-bold text-sm underline decoration-white/20 decoration-2 underline-offset-4 cursor-pointer hover:text-white transition-colors">View Production Showreel</span>
              </div>
            </div>
          </div>

          {/* Image Side - Visualizing Cinematic Production */}
          <div className="reveal from-right mt-16 lg:mt-0 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-amg-green/10 rounded-[2.5rem] blur-3xl"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Creative Storytelling & Media Production Studio"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amg-blue/80 via-transparent to-transparent"></div>
                
                {/* Visualizer Overlay */}
                <div className="absolute bottom-8 right-8 flex items-end space-x-1 h-12">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1 bg-amg-green rounded-full animate-bounce" 
                      style={{ height: `${40 + Math.random() * 60}%`, animationDelay: `${i * 0.1}s`, animationDuration: `${0.6 + Math.random() * 0.4}s` }}
                    ></div>
                  ))}
                </div>

                {/* Impact Badge */}
                <div className="absolute top-10 left-10 flex items-center gap-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-2xl">
                   <div className="w-10 h-10 bg-amg-green rounded-lg flex items-center justify-center text-white">
                      <Icons.Speaker />
                   </div>
                   <div>
                      <p className="text-white font-black text-sm uppercase tracking-widest">Story First</p>
                      <p className="text-white/60 text-[8px] font-bold uppercase tracking-[0.2em]">Strategy-Aligned Media</p>
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

export default CreativeStorytelling;
