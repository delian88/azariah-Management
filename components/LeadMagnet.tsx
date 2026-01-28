
import React, { useState } from 'react';
import { LEAD_MAGNET, Icons } from '../constants';

const LeadMagnet: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulation of lead capture
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-amg-blue text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amg-green/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 mb-8 bg-amg-green/20 rounded-full border border-amg-green/30">
              <span className="text-amg-green font-bold tracking-[0.2em] uppercase text-[10px]">Free Resource</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-6 leading-tight">
              {LEAD_MAGNET.heroH1}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-10 font-light max-w-3xl">
              Download {LEAD_MAGNET.title} — Your Guide to Building Programs That Deliver Real Results
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full sm:w-auto flex items-center bg-white rounded-full p-1 shadow-2xl overflow-hidden group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent border-none px-6 py-4 text-amg-blue outline-none flex-grow"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  onClick={handleSubmit}
                  className="bg-amg-green text-white font-black px-8 py-4 rounded-full hover:bg-amg-blue transition-all uppercase text-xs tracking-widest"
                >
                  Download Now
                </button>
              </div>
              <p className="text-gray-400 text-xs italic">Trusted by nonprofits and public agencies worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-amg-blue mb-4">A Proven Roadmap Built From Real-World Experience</h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">This blueprint helps organizations move from uncertainty → clarity → execution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Nonprofits", desc: "Design programs that create measurable change" },
              { title: "Government", desc: "High-impact, community-centered initiatives" },
              { title: "Start-ups", desc: "Integrate CSR into your core model" },
              { title: "Intl Partners", desc: "Expand into U.S. or diaspora communities" }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-amg-green transition-all group">
                <div className="w-10 h-10 bg-amg-blue/5 rounded-lg flex items-center justify-center text-amg-blue mb-6 group-hover:bg-amg-green group-hover:text-white transition-all">
                  <Icons.Chart />
                </div>
                <h4 className="font-bold text-amg-blue mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-20 bg-amg-blue text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-amg-green font-black uppercase tracking-[0.3em] text-xs mb-4">The Challenge</h3>
              <h2 className="text-4xl font-black mb-8">Stop Struggling with Unclear Strategy</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Many organizations want to create meaningful community impact—but struggle with unclear strategy, limited capacity, or programs that don’t achieve measurable outcomes.
              </p>
            </div>
            <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 backdrop-blur-md">
               <h3 className="text-2xl font-bold text-amg-green mb-6">With this blueprint, you will:</h3>
               <ul className="space-y-4">
                  {[
                    "Gain clarity on what to build—and what to avoid",
                    "Improve organizational readiness & funding potential",
                    "Strengthen stakeholder trust and engagement",
                    "Move faster from planning to execution"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 bg-amg-green rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
                      <span className="text-gray-200">{benefit}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-5xl font-black text-amg-blue mb-8">Ready to Scale Your Impact?</h2>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-amg-blue text-white font-black px-12 py-5 rounded-full hover:bg-amg-green transition-all uppercase tracking-widest text-sm shadow-2xl"
          >
            Download the Blueprint
          </button>
        </div>
      </section>
    </div>
  );
};

export default LeadMagnet;
