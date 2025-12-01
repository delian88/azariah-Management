import React from 'react';

const AiForceCommunity: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-amg-blue via-gray-900 to-amg-blue relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-soft-light"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amg-green/20 rounded-full blur-[100px] animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-16 border border-white/10 text-center reveal from-scale hover:border-amg-green/30 transition-colors duration-500">
          <div className="inline-block px-4 py-1.5 mb-6 border border-amg-green/50 rounded-full bg-amg-green/10">
            <span className="text-amg-green font-bold text-sm tracking-widest uppercase">Community & Innovation</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-heading mb-6 tracking-tight">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amg-green to-teal-400">AI Force</span> Revolution
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Connect with a global network of visionaries, developers, and leaders. 
            Stay ahead of the curve in Artificial Intelligence and shape the future of technology together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://www.worldaiforce.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-amg-blue bg-white rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:bg-amg-green shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(22,163,74,0.6)] hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center">
                Join Community
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <span className="text-gray-400 text-sm font-medium">
              Visit <span className="text-white">worldaiforce.com</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiForceCommunity;