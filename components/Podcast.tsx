
import React from 'react';
import { Icons, PODCAST_INFO } from '../constants';

const Podcast: React.FC = () => {
  return (
    <section id="podcast" className="py-32 md:py-48 bg-gray-900 text-white scroll-mt-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amg-blue/20 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amg-green/10 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 reveal from-bottom">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/5 backdrop-blur-md border border-white/10 text-amg-green rounded-3xl mb-10 shadow-2xl animate-float">
             <Icons.Mic />
          </div>
          <h2 className="text-5xl md:text-7xl font-black font-heading mb-8 leading-none tracking-tighter">
            The <span className="text-gradient brightness-125">Azariah</span> Perspective
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            {PODCAST_INFO.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          {/* Featured Episode Card */}
          <div className="reveal from-left bg-gradient-to-br from-amg-blue to-black rounded-[40px] p-10 md:p-14 shadow-2xl relative overflow-hidden group border border-white/5">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-amg-green/20 rounded-full blur-[80px] group-hover:bg-amg-green/30 transition-all duration-700"></div>
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-10">
                 <span className="bg-amg-green/90 backdrop-blur-md text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-[0.2em] inline-block shadow-lg">New Episode</span>
                 <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">October 2024</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black mb-8 font-heading leading-[1.1] group-hover:text-amg-green transition-colors duration-500">
                Navigating Global <br/> Procurement in 2025
              </h3>
              <p className="text-gray-400 mb-12 text-lg leading-relaxed font-light">
                We sit down with senior policy advisors to discuss the shifting landscape of international commerce and how small enterprises can leverage AI to secure high-value contracts.
              </p>
              
              <div className="mt-auto flex flex-wrap items-center gap-6">
                <button className="flex items-center space-x-4 bg-white text-amg-blue px-10 py-5 rounded-full font-black hover:bg-amg-green hover:text-white transition-all transform hover:-translate-y-2 shadow-[0_15px_30px_rgba(255,255,255,0.1)] group/btn">
                  <div className="w-8 h-8 flex items-center justify-center bg-amg-blue group-hover/btn:bg-white rounded-full transition-colors">
                    <svg className="w-4 h-4 text-white group-hover/btn:text-amg-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="uppercase tracking-widest text-xs">Listen Episode</span>
                </button>
                <div className="flex items-center space-x-2 text-gray-500 uppercase tracking-widest text-[10px] font-bold">
                   <span className="w-2 h-2 bg-amg-green rounded-full animate-pulse"></span>
                   <span>52:14 Duration</span>
                </div>
              </div>
            </div>
            
            {/* Visualizer Simulation */}
            <div className="absolute bottom-0 right-0 left-0 h-16 flex items-end opacity-10 space-x-1 px-10 pointer-events-none">
              {[...Array(40)].map((_, i) => (
                <div key={i} className="flex-1 bg-white" style={{ 
                    height: `${20 + Math.random() * 80}%`, 
                    animation: `pulse ${0.5 + Math.random()}s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.05}s`
                }}></div>
              ))}
            </div>
          </div>

          {/* Episode List */}
          <div className="flex flex-col justify-center space-y-6">
            <h4 className="text-gray-500 uppercase tracking-[0.4em] text-[10px] font-black mb-4 flex items-center">
              <span className="w-8 h-[1px] bg-amg-green mr-4"></span>
              Recent Broadcasts
            </h4>
            {[
              { id: 1, title: 'Strategic Resilience in Crisis', time: '34 min', tag: 'Leadership' },
              { id: 2, title: 'AI: The Ethics of Innovation', time: '48 min', tag: 'Technology' },
              { id: 3, title: 'Building Impact Ecosystems', time: '41 min', tag: 'Social Value' }
            ].map((item, index) => (
              <div 
                key={item.id} 
                className="reveal from-right flex items-center p-8 bg-white/5 rounded-3xl hover:bg-white/10 transition-all duration-500 border border-white/5 cursor-pointer group transform hover:-translate-x-3"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex-shrink-0 flex items-center justify-center text-white mr-6 group-hover:bg-amg-green transition-all duration-500 shadow-lg relative overflow-hidden">
                  <span className="font-black text-lg relative z-10">0{item.id + 1}</span>
                  <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-xl mb-2 group-hover:text-amg-green transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{item.time}</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-amg-green bg-amg-green/10 px-2 py-0.5 rounded">{item.tag}</span>
                  </div>
                </div>
                <div className="ml-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                   <div className="w-12 h-12 bg-white text-amg-blue rounded-full flex items-center justify-center shadow-2xl">
                     <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                   </div>
                </div>
              </div>
            ))}
            
            <div className="pt-10 reveal from-bottom delay-500">
              <a href="#" className="inline-flex items-center text-white font-black uppercase tracking-[0.2em] text-xs hover:text-amg-green transition-all group">
                Browse Full Catalog 
                <svg className="w-5 h-5 ml-4 transform group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;
