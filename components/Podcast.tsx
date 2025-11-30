import React from 'react';
import { Icons, PODCAST_INFO } from '../constants';

const Podcast: React.FC = () => {
  return (
    <section id="podcast" className="py-32 bg-white scroll-mt-24 relative overflow-hidden">
      {/* Decor */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-red-50 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal from-bottom">
          <div className="inline-flex items-center justify-center p-4 bg-red-50 text-red-600 rounded-full mb-6 animate-pulse-slow">
             <Icons.Mic />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-amg-blue font-heading mb-4">
            {PODCAST_INFO.title}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            {PODCAST_INFO.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Featured Episode */}
          <div className="reveal from-left bg-gradient-to-br from-amg-dark to-amg-blue rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(15,44,89,0.3)] transition-shadow duration-500">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-amg-gold rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                 <span className="bg-red-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">Latest Episode</span>
                 <span className="text-gray-400 text-sm">Oct 24, 2023</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">Navigating Federal Contracts in 2024</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                We sit down with industry veteran Sarah Jenkins to discuss the changing landscape of government procurement and what small businesses need to know to succeed.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <button className="flex items-center space-x-3 bg-white text-amg-blue px-8 py-3 rounded-full font-bold hover:bg-amg-gold transition-colors transform hover:-translate-y-0.5 shadow-lg">
                  <div className="w-6 h-6 animate-pulse">
                    <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                  </div>
                  <span>Listen Now</span>
                </button>
                <span className="text-sm text-gray-400 font-medium">45 min • Strategy</span>
              </div>
            </div>
            
            {/* Visualizer bars simulation */}
            <div className="absolute bottom-0 right-0 left-0 h-1 flex items-end opacity-20 space-x-1">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="flex-1 bg-white animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDuration: `${0.5 + Math.random()}s` }}></div>
              ))}
            </div>
          </div>

          {/* Episode List */}
          <div className="space-y-6">
            {[1, 2, 3].map((item, index) => (
              <div 
                key={item} 
                className="reveal from-right flex items-center p-5 bg-white rounded-2xl hover:bg-gray-50 hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer group transform hover:-translate-x-1"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-amg-blue/5 rounded-xl flex-shrink-0 flex items-center justify-center text-amg-blue mr-5 group-hover:bg-amg-blue group-hover:text-white transition-all duration-300 shadow-sm relative overflow-hidden">
                  <span className="font-bold text-xl relative z-10">0{item}</span>
                  <div className="absolute inset-0 bg-amg-gold transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-amg-blue text-lg mb-1 group-hover:text-amg-gold transition-colors">
                    {item === 1 ? 'Leadership in Crisis' : item === 2 ? 'The Future of Remote Work' : 'Building High-Performance Teams'}
                  </h4>
                  <p className="text-sm text-gray-500">Episode • 30 min • Business Management</p>
                </div>
                <div className="ml-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 text-amg-gold">
                   <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                </div>
              </div>
            ))}
            
            <div className="text-center pt-8 reveal from-bottom delay-300">
              <a href="#" className="inline-flex items-center text-amg-blue font-bold hover:text-amg-gold transition-colors group">
                View All Episodes 
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcast;