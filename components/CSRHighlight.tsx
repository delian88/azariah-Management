
import React from 'react';
import { Icons } from '../constants';

const CSRHighlight: React.FC = () => {
  return (
    <section id="csr-consulting" className="py-24 md:py-36 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50/50 to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Imagery / Visual Side */}
          <div className="reveal from-left order-2 lg:order-1 mt-16 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-amg-green/10 rounded-[2.5rem] blur-3xl animate-pulse-slow"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Corporate Social Responsibility Consulting - Strategic Impact"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amg-blue/70 via-amg-blue/20 to-transparent"></div>
                
                {/* Floating Metric Card - Business Developer ROI focus */}
                <div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl flex items-center justify-between border border-white/20">
                  <div>
                    <span className="block text-[10px] font-black text-amg-green uppercase tracking-[0.3em] mb-2">Portfolio Performance</span>
                    <span className="block text-3xl font-black text-amg-blue tracking-tighter">Impact ROI+</span>
                  </div>
                  <div className="w-14 h-14 bg-amg-green text-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                    <Icons.Chart />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-amg-green/10 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

          {/* Text Content Side - Optimized for SEO and Strategic Narrative */}
          <div className="reveal from-right order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 mb-8 bg-amg-green/10 rounded-full border border-amg-green/20">
              <span className="text-amg-green font-bold tracking-[0.2em] uppercase text-[10px]">Flagship Service Category</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-amg-blue font-heading mb-8 leading-[1.1] tracking-tight">
              Corporate Social <br/>
              <span className="text-gradient">Responsibility Consulting</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-10 font-light">
              As CSR budgets continue to rise globally, Azariah Management Group frames social leadership as a <strong>high-value strategic asset</strong>. We partner with organizations to build authentic social infrastructure that scales community relevance and delivers measurable business outcomes.
            </p>

            {/* Bullet Points for UX clarity and scanning */}
            <div className="grid grid-cols-1 gap-6 mb-12">
              <div className="flex items-start gap-5 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                <div className="flex-shrink-0 w-12 h-12 bg-amg-blue/5 text-amg-blue flex items-center justify-center rounded-xl group-hover:bg-amg-green group-hover:text-white transition-colors">
                  <Icons.Handshake />
                </div>
                <div>
                  <h4 className="text-lg font-black text-amg-blue mb-1">Strategic Purpose Alignment</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Showcasing CSR leadership that reinforces your core brand identity and deepens community trust.</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                <div className="flex-shrink-0 w-12 h-12 bg-amg-blue/5 text-amg-blue flex items-center justify-center rounded-xl group-hover:bg-amg-green group-hover:text-white transition-colors">
                  <Icons.Globe />
                </div>
                <div>
                  <h4 className="text-lg font-black text-amg-blue mb-1">Stakeholder & Partnership Growth</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Driving ROI through robust stakeholder alignment and expansive social partnership networks.</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group">
                <div className="flex-shrink-0 w-12 h-12 bg-amg-blue/5 text-amg-blue flex items-center justify-center rounded-xl group-hover:bg-amg-green group-hover:text-white transition-colors">
                  <Icons.Sparkles />
                </div>
                <div>
                  <h4 className="text-lg font-black text-amg-blue mb-1">Measurable Impact Metrics</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">Emphasizing purpose with hard data—turning social initiatives into quantifiable organizational performance.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              <a 
                href="#booking" 
                className="w-full sm:w-auto text-center bg-amg-blue text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-amg-green transition-all shadow-2xl shadow-amg-blue/20 hover:shadow-amg-green/40 transform hover:-translate-y-1"
              >
                Start CSR Strategy Session
              </a>
              <div className="flex flex-col">
                <span className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Expert Advisor</span>
                <span className="text-amg-blue font-bold text-sm underline decoration-amg-green decoration-2 underline-offset-4 cursor-pointer hover:text-amg-green transition-colors">Download CSR Impact Guide</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CSRHighlight;
