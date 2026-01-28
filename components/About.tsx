
import React from 'react';
import { Icons, COMPANY_INFO } from '../constants';
import Link from './Link';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-24 sm:py-32 bg-amg-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white font-heading mb-6 tracking-tight animate-fade-in-down">
            About <br className="sm:hidden" /> Azariah Management Group
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-amg-green font-bold max-w-4xl mx-auto leading-tight px-2 reveal from-bottom">
            Where Strategy, Innovation, and Social Impact Work as One
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light reveal from-bottom">
            Azariah Management Group (AMG) is a multidisciplinary consulting and media firm helping
            organizations build stronger communities, accelerate growth, and execute with confidence. We
            combine corporate strategy, innovation and AI consulting, government and nonprofit
            expertise, and creative storytelling through Studio AMG—delivering solutions that move
            organizations from <span className="text-amg-blue font-bold italic">feasibility → readiness → execution</span>.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal from-left">
              <h2 className="text-amg-green font-black uppercase tracking-[0.3em] text-sm mb-4">Our Mission</h2>
              <h3 className="text-3xl sm:text-4xl font-black text-amg-blue mb-8 leading-tight">
                Empowering the Future of <br/> Strategic Impact
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                To empower businesses, governments, and nonprofits to create sustainable, measurable impact
                by aligning strategy, innovation, community development, and storytelling in one seamless
                ecosystem.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 reveal from-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-amg-green/10 rounded-3xl blur-2xl group-hover:bg-amg-green/20 transition-all"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                  alt="Mission Focused Collaboration"
                  className="relative rounded-3xl overflow-hidden shadow-2xl w-full object-cover h-80 lg:h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-amg-blue mb-6">Who We Serve</h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto font-light">
              AMG partners with organizations across industries and continents, delivering multidimensional insight no single-sector firm can offer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Start-ups & MSMEs", desc: "Seeking growth, readiness, and business development support." },
              { title: "Government & Public Agencies", desc: "Executing programs and modernization initiatives." },
              { title: "Nonprofits & Foundations", desc: "Building strategy, capacity, and community impact." },
              { title: "International Partners", desc: "Expanding footprint across U.S., EU, UK, and Africa." },
              { title: "Tech & Engineering Firms", desc: "Innovating and scaling new technological solutions." },
              { title: "Creative & Mission-Driven Brands", desc: "Seeking advocacy or high-end branded storytelling." }
            ].map((item, i) => (
              <div key={i} className="reveal from-bottom bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-amg-green hover:shadow-xl transition-all group" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-12 h-12 bg-amg-blue text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-amg-green transition-colors">
                  <Icons.Users />
                </div>
                <h4 className="text-xl font-bold text-amg-blue mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-center text-xl text-amg-blue font-bold italic max-w-3xl mx-auto">
            "Our clients choose AMG because we understand both the strategic landscape and the communities they're called to serve."
          </p>
        </div>
      </section>

      {/* What Makes AMG Different */}
      <section className="py-24 bg-amg-blue text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-5xl font-black mb-6">What Makes AMG Different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Integrated Consulting + Media Power", 
                desc: "While most firms offer strategy—or storytelling—AMG merges both. Our divisions work hand-in-hand to transform insights into narratives." 
              },
              { 
                title: "Real-World Expertise Across Sectors", 
                desc: "Experience from the private sector, government, and community organizations—giving clients multidimensional insight." 
              },
              { 
                title: "End-to-End Support", 
                desc: "We guide clients across every phase: Feasibility (research), Readiness (capacity building), and Execution (program delivery)." 
              },
              { 
                title: "Community Impact at the Core", 
                desc: "Every project includes a lens of equity, community advancement, and sustainable development as a core requirement." 
              }
            ].map((item, i) => (
              <div key={i} className="reveal from-bottom p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-amg-green mb-6">
                  <Icons.Sparkles />
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal from-left">
              <h2 className="text-3xl sm:text-5xl font-black text-amg-blue mb-8">Our Global Reach</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Through partnerships in the U.S., Europe, UK, and Africa, AMG supports diaspora innovation, 
                international market entry, cross-cultural collaboration, and global capacity building.
              </p>
              <p className="text-gray-900 font-bold mb-6">Our ecosystem extends through:</p>
              <ul className="space-y-4 mb-10">
                {[
                  "Luxurious Decorations (EU/Africa operations)",
                  "Foundation of Luv (global social impact and advocacy)",
                  "Studio AMG (creative & media production)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-amg-blue font-bold group">
                    <span className="w-3 h-3 bg-amg-green rounded-full shadow-[0_0_10px_#8DC63F]"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="p-8 bg-amg-blue/5 rounded-2xl border border-amg-blue/10 border-l-amg-green border-l-8">
                <p className="text-amg-blue font-black italic">"We are uniquely positioned to support organizations operating across borders."</p>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 reveal from-right flex justify-center">
               <div className="relative">
                  <div className="absolute inset-0 bg-amg-blue/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative text-amg-blue">
                    <Icons.Globe />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-amg-blue mb-10">Our Story</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light reveal from-bottom">
            AMG was founded with a clear belief: innovation, community impact, and storytelling must 
            exist together to create lasting change. 
          </p>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed font-light reveal from-bottom">
            What started as a consulting practice evolved into a global ecosystem where strategy, social 
            impact, and media are intertwined—serving clients who want not only to grow but to make a difference.
          </p>
          <p className="text-xl text-gray-600 leading-relaxed font-light reveal from-bottom">
            Today, AMG supports entrepreneurs, nonprofits, public agencies, and corporate leaders in 
            building solutions that shape healthier economies, stronger communities, and more connected futures.
          </p>
        </div>
      </section>

      {/* How We Create Impact */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-amg-blue mb-6">How We Create Impact</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Strengthen community development and CSR initiatives",
              "Build nonprofit capacity and design result-driven programs",
              "Support government modernization with strategic management",
              "Innovate using technology, AI strategy, and digital transformation",
              "Expand internationally through diaspora-led economic pathways",
              "Amplify missions and campaigns through creative storytelling"
            ].map((impact, i) => (
              <div key={i} className="reveal from-bottom flex items-start gap-5 p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-amg-blue transition-colors group">
                <div className="flex-shrink-0 w-8 h-8 bg-amg-green text-white rounded-lg flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="text-gray-700 font-bold group-hover:text-amg-blue transition-colors">{impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-amg-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal from-left">
              <h2 className="text-3xl sm:text-5xl font-black mb-8">Our Approach</h2>
              <p className="text-2xl text-amg-green font-bold mb-8">People-first. Insight-driven. Execution-focused.</p>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">
                We listen deeply, collaborate intentionally, and execute with precision. Our integrated method ensures every solution is practical, culturally aligned, and built for long-term success.
              </p>
            </div>
            <div className="reveal from-right space-y-4">
              <h4 className="text-amg-green uppercase font-black tracking-widest text-xs mb-6">Our Framework Blends:</h4>
              {[
                "Strategic consulting",
                "Program design and management",
                "Innovation and AI",
                "Media & storytelling",
                "Social impact evaluation",
                "Cross-sector partnership development"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="w-2 h-2 bg-amg-green rounded-full"></div>
                  <span className="font-bold">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Studio AMG */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
             <div className="reveal from-left order-2 lg:order-1">
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200" 
                    alt="Studio AMG Production"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amg-blue/60 to-transparent"></div>
                </div>
             </div>
             <div className="reveal from-right order-1 lg:order-2">
                <h2 className="text-3xl sm:text-5xl font-black text-amg-blue mb-8">Meet Studio AMG</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Studio AMG is our creative engine—a media and storytelling division specializing in:
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    "Impact documentaries",
                    "Branded content",
                    "Advocacy campaigns",
                    "Corporate storytelling",
                    "Nonprofit and community-focused media"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-amg-blue font-bold">
                       <Icons.Video />
                       <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-lg text-gray-500 italic">Studio AMG transforms strategies into stories that connect, mobilize, and inspire.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-amg-blue mb-10">Our Commitment</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
            We are committed to advancing innovation, economic opportunity, social impact, and global 
            collaboration. Every client is a partner, every project is a mission, and every outcome is designed 
            to create meaningful change.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-amg-blue text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-6xl font-black mb-10 leading-tight">Let’s Build Something <br/> That Creates Impact</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 font-light">
            Whether you’re a start-up scaling new solutions, a nonprofit driving change, or an agency 
            executing a major initiative—AMG is your partner for innovation, strategy, and community advancement.
          </p>
          <Link href="/contact" className="group inline-flex items-center bg-amg-green text-white font-black px-12 py-6 rounded-full hover:bg-white hover:text-amg-blue transition-all transform hover:-translate-y-1 shadow-2xl">
            <span className="uppercase tracking-[0.2em] text-sm">Work With AMG</span>
            <svg className="w-6 h-6 ml-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
