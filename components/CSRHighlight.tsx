
import React from 'react';
import { Icons } from '../constants';

const CSRHighlight: React.FC = () => {
  return (
    <section id="csr-consulting" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Imagery / Visual Side */}
          <div className="reveal from-left order-2 lg:order-1 mt-16 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-amg-green/10 rounded-[2rem] blur-2xl animate-pulse-slow"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 group">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="CSR Leadership and Community Impact"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amg-blue/60 via-transparent to-transparent"></div>
                
                {/* Floating Metric Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-black text-amg-green uppercase tracking-[0.2em] mb-1">Impact Scored</span>
                    <span className="block text-2xl font-black text-amg-blue">Measurable ROI</span>
                  </div>
                  <div className="w-12 h-12 bg-amg-blue text-white rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative circle */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-amg-green/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="reveal from-right order-1 lg:order-2">
            <div className="inline-block px-4 py-1.5 mb-6 bg-amg-blue/5 rounded-full border border-amg-blue/10">
              <span className="text-amg-blue font-bold tracking-[0.2em] uppercase text-[10px]">Flagship Capability</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-amg-blue font-heading mb-8 leading-tight">
              Corporate Social <br/>
              <span className="text-gradient">Responsibility Consulting</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-10">
              In an era where purpose-driven leadership is paramount, we frame CSR as a high-value strategic asset. We don't just facilitate charity; we build <strong>authentic social infrastructure</strong> that delivers measurable community benefit and sustainable organizational growth.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-amg-blue/5 text-amg-blue flex items-center justify-center rounded-2xl group-hover:bg-amg-green group-hover:text-white transition-all duration-300">
                  <Icons.Handshake />
                </div>
                <div>
                  <h4 className="text-xl font-black text-amg-blue mb-2">Stakeholder Alignment</h4>
                  <p className="text-gray-500 leading-relaxed">Harmonizing corporate values with community needs to foster trust and long-term partnership growth.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-amg-blue/5 text-amg-blue flex items-center justify-center rounded-2xl group-hover:bg-amg-green group-hover:text-white transition-all duration-300">
                  <Icons.Chart />
                </div>
                <div>
                  <h4 className="text-xl font-black text-amg-blue mb-2">ROI-Driven Impact</h4>
                  <p className="text-gray-500 leading-relaxed">Utilizing data-backed impact metrics to demonstrate the real-world value of your social investments.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 bg-amg-blue/5 text-amg-blue flex items-center justify-center rounded-2xl group-hover:bg-amg-green group-hover:text-white transition-all duration-300">
                  <Icons.Globe />
                </div>
                <div>
                  <h4 className="text-xl font-black text-amg-blue mb-2">Community Relevance</h4>
                  <p className="text-gray-500 leading-relaxed">Developing initiatives that resonate deeply with local landscapes, ensuring authentic and sustainable presence.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href="#booking" 
                className="bg-amg-blue text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-amg-green transition-all shadow-xl hover:-translate-y-1"
              >
                Schedule Strategy Session
              </a>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                Primary SEO Section
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CSRHighlight;
