
import React from 'react';
import { Icons, COMPANY_INFO } from '../constants';
import Link from './Link';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-20 sm:py-24 md:py-32 bg-amg-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white font-heading mb-4 sm:mb-6 tracking-tight">
            About <span className="text-amg-green">Azariah Management Group</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed px-2">
            Where Strategy, Innovation, and Social Impact Work as One
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 sm:mb-8 bg-amg-blue/5 rounded-full border border-amg-blue/10">
            <span className="text-amg-blue font-bold tracking-[0.2em] uppercase text-[9px] sm:text-[10px]">Our Identity</span>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
            Azariah Management Group (AMG) is a multidisciplinary consulting and media firm helping
            organizations build stronger communities, accelerate growth, and execute with confidence. We
            combine corporate strategy, innovation and AI consulting, government and nonprofit
            expertise, and creative storytelling through Studio AMG—delivering solutions that move
            organizations from <span className="text-amg-blue font-bold italic">feasibility → readiness → execution</span>.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal from-left">
              <h2 className="text-3xl sm:text-4xl font-black text-amg-blue mb-6 sm:mb-8 border-l-8 border-amg-green pl-6">Our Mission</h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                To empower businesses, governments, and nonprofits to create sustainable, measurable impact
                by aligning strategy, innovation, community development, and storytelling in one seamless
                ecosystem.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 reveal from-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video sm:aspect-auto">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                  alt="Mission Focused Collaboration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amg-blue/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:init-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-amg-blue mb-4 sm:mb-6">Who We Serve</h2>
            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto">AMG partners with organizations across industries and continents:</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Start-ups & MSMEs", desc: "Seeking growth, readiness, and business development support" },
              { title: "Government & Agencies", desc: "Executing programs and modernization initiatives" },
              { title: "Nonprofits & Foundations", desc: "Building strategy, capacity, and community impact" },
              { title: "International Partners", desc: "U.S., EU, UK, Africa expansion and market entry" },
              { title: "Tech & Engineering", desc: "Innovating and scaling new solutions" },
              { title: "Creative Brands", desc: "Looking for advocacy or branded storytelling" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-amg-green transition-all">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amg-blue/5 rounded-xl flex items-center justify-center text-amg-blue mb-4 sm:mb-6">
                  <Icons.Users />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-amg-blue mb-2">{item.title}</h4>
                <p className="text-gray-500 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <p className="mt-10 sm:mt-12 text-center text-base sm:text-lg text-gray-600 font-medium italic px-4">
            "Our clients choose AMG because we understand both the strategic landscape and the communities they're called to serve."
          </p>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-16 sm:py-24 bg-amg-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amg-green/20 rounded-full blur-[100px] sm:blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">What Makes AMG Different</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-amg-green mb-4">Integrated Consulting + Media Power</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                While most firms offer strategy—or storytelling—AMG merges both. Our consulting divisions
                work hand-in-hand with Studio AMG to transform insights into campaigns, narratives, and
                media that amplify your mission and results.
              </p>
            </div>
            <div className="p-6 sm:p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-amg-green mb-4">Real-World Expertise Across Sectors</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Our team brings experience from the private sector, government, public agencies, international
                collaborations, and community organizations—giving clients multidimensional insight no single-sector firm can offer.
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-12 p-6 sm:p-10 bg-white/10 rounded-3xl border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold text-amg-green mb-8">End-to-End Support</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { title: "Feasibility", desc: "Research, planning, scoping" },
                { title: "Readiness", desc: "Capacity-building, systems, compliance, positioning" },
                { title: "Execution", desc: "Program delivery, innovation, implementation, storytelling, evaluation" }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <span className="text-5xl sm:text-6xl font-black text-white/5 absolute -top-4 -left-2 select-none">0{i+1}</span>
                  <h4 className="font-bold text-lg sm:text-xl mb-2 relative z-10">{step.title}</h4>
                  <p className="text-gray-400 text-sm sm:text-base relative z-10">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-black text-amg-blue mb-6 sm:mb-8">Our Global Reach</h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Through partnerships in the U.S., Europe, UK, and Africa, AMG supports diaspora innovation,
                international market entry, cross-cultural collaboration, and global capacity building.
              </p>
              <div className="space-y-3 sm:space-y-4 mb-8">
                {[
                  "Luxurious Decorations (EU/Africa operations)",
                  "Foundation of Luv (global social impact and advocacy)",
                  "Studio AMG (creative & media production)"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amg-green rounded-full mt-2.5"></div>
                    <span className="text-gray-700 font-bold text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-amg-blue font-bold italic text-sm sm:text-base">
                "We are uniquely positioned to support organizations operating across borders."
              </p>
            </div>
            <div className="lg:col-span-5 mt-10 lg:mt-0">
               <div className="p-6 sm:p-8 bg-amg-blue/5 rounded-3xl border border-amg-blue/10">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <Icons.Globe />
                    <h4 className="text-xl sm:text-2xl font-bold text-amg-blue">US • UK • Africa • EU</h4>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm">Our multidisciplinary approach works anywhere organizations are called to lead and impact communities.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-amg-blue mb-6 sm:mb-8">Our Story</h2>
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              AMG was founded with a clear belief: innovation, community impact, and storytelling must
              exist together to create lasting change.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              What started as a consulting practice evolved into a global ecosystem where strategy, social
              impact, and media are intertwined—serving clients who want not only to grow but to make a
              difference.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Today, AMG supports entrepreneurs, nonprofits, public agencies, and corporate leaders in
              building solutions that shape healthier economies, stronger communities, and more connected
              futures.
            </p>
          </div>
        </div>
      </section>

      {/* Impact & Approach */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-amg-blue mb-6 sm:mb-8 uppercase tracking-widest border-b-2 border-amg-green inline-block pb-2">How We Create Impact</h2>
              <ul className="space-y-4 sm:space-y-6">
                {[
                  "Strengthen community development and CSR initiatives",
                  "Build nonprofit capacity and design effective programs",
                  "Support government modernization with strategic project management",
                  "Innovate using technology, AI strategy, and digital transformation",
                  "Expand internationally through diaspora-led economic pathways",
                  "Amplify missions and campaigns through creative storytelling"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-amg-green font-bold text-lg sm:text-xl">→</span>
                    <span className="text-gray-700 leading-tight text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-amg-blue mb-6 sm:mb-8 uppercase tracking-widest border-b-2 border-amg-green inline-block pb-2">Our Approach</h2>
              <p className="text-base sm:text-lg text-gray-600 font-bold mb-4 sm:mb-6">People-first. Insight-driven. Execution-focused.</p>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                We listen deeply, collaborate intentionally, and execute with precision. Our framework blends:
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {["Strategic consulting", "Program design", "Innovation & AI", "Media & Storytelling", "Social impact evaluation", "Cross-sector partnerships"].map(pill => (
                  <span key={pill} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-amg-blue text-white text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wider">{pill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-16 sm:py-24 bg-amg-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-8 leading-tight">Let’s Build Something <br className="hidden sm:block"/> That Creates Impact</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 sm:mb-12">
            Whether you’re a start-up scaling new solutions, a nonprofit driving change, or an agency
            executing a major initiative—AMG is your partner for innovation, strategy, and community
            advancement.
          </p>
          <Link href="/contact" className="inline-block bg-amg-green text-white font-black px-8 sm:px-12 py-4 sm:py-5 rounded-full hover:bg-white hover:text-amg-blue transition-all transform hover:-translate-y-1 shadow-2xl uppercase tracking-widest text-xs sm:text-sm">
            Work With AMG
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
