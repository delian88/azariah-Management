
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
            About <br className="sm:hidden" /> Azariah Management Group
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl text-gray-200 font-light max-w-4xl mx-auto leading-relaxed px-2">
            Where Strategy, Innovation, and Social Impact Work as One
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                  alt="Mission Focused Collaboration"
                  className="w-full h-64 sm:h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-amg-blue mb-4 sm:mb-6">Who We Serve</h2>
            <p className="text-lg sm:text-xl text-gray-500 max-w-3xl mx-auto">AMG partners with organizations across industries and continents:</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Start-ups & MSMEs", desc: "Seeking growth, readiness, and business development support" },
              { title: "Government & Public Agencies", desc: "Executing programs and modernization initiatives" },
              { title: "Nonprofits & Foundations", desc: "Building strategy, capacity, and community impact" },
              { title: "International Partners", desc: "U.S., EU, UK, Africa expansion and market entry" },
              { title: "Tech & Engineering", desc: "Innovating and scaling new solutions" },
              { title: "Creative & Mission-Driven", desc: "Looking for advocacy or branded storytelling" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-amg-green transition-all">
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

      {/* What Makes AMG Different */}
      <section className="py-16 sm:py-24 bg-amg-blue text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-center">What Makes AMG Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-amg-green mb-4">Integrated Consulting + Media Power</h3>
              <p className="text-gray-300">While most firms offer strategy—or storytelling—AMG merges both. Our consulting divisions work hand-in-hand with Studio AMG to transform insights into campaigns.</p>
            </div>
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-amg-green mb-4">Real-World Expertise Across Sectors</h3>
              <p className="text-gray-300">Experience from private sector, government, and community organizations—giving clients multidimensional insight no single-sector firm can offer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-amg-blue mb-6">Our Global Reach</h2>
              <p className="text-lg text-gray-600 mb-6">Support for diaspora innovation, international market entry, and global capacity building in the U.S., Europe, UK, and Africa.</p>
              <ul className="space-y-3 mb-8">
                {["Luxurious Decorations (EU/Africa)", "Foundation of Luv (Impact & Advocacy)", "Studio AMG (Creative & Media)"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-amg-blue">
                    <span className="w-2 h-2 bg-amg-green rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amg-blue/5 p-10 rounded-3xl border border-amg-blue/10">
              <Icons.Globe />
              <h3 className="text-2xl font-bold text-amg-blue mt-4 mb-2">Uniquely Positioned</h3>
              <p className="text-gray-600 italic">"We are uniquely positioned to support organizations operating across borders."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Approach */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-amg-blue mb-8">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">AMG was founded with a clear belief: innovation, community impact, and storytelling must exist together to create lasting change.</p>
          <p className="text-lg text-gray-600">Today, AMG supports entrepreneurs, nonprofits, and public agencies in building solutions that shape healthier economies and stronger communities.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-amg-blue text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl font-black mb-8">Let’s Build Something <br/> That Creates Impact</h2>
          <Link href="/contact" className="inline-block bg-amg-green text-white font-black px-12 py-5 rounded-full hover:bg-white hover:text-amg-blue transition-all">
            Work With AMG
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
