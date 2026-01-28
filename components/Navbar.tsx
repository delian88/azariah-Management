
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, Icons, COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500
      ${scrolled 
        ? 'bg-white shadow-2xl py-2 border-b border-gray-100' 
        : 'bg-transparent py-6 border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <a href="#home" className="flex items-center">
              {/* 
                  Fix: Since the logo has a background, we wrap it in a container 
                  that handles visibility on both dark and light backgrounds.
                  When on the hero (not scrolled), we give it a slight white background 
                  to ensure the colored logo is visible without problematic inversion filters.
              */}
              <div className={`p-1.5 rounded-lg transition-all duration-300 ${!scrolled ? 'bg-white/90 backdrop-blur-sm shadow-xl' : 'bg-transparent'}`}>
                <img 
                  src={COMPANY_INFO.logoUrl} 
                  alt={COMPANY_INFO.name} 
                  className="h-12 w-auto transition-all duration-300 transform group-hover:scale-105"
                  style={{ objectFit: 'contain' }}
                  onError={(e) => {
                    // Fallback for if the URL fails
                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x200/00548B/ffffff?text=AMG+LOGO';
                  }}
                />
              </div>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-bold tracking-wide transition-colors group ${
                      scrolled 
                        ? (isActive ? 'text-amg-blue' : 'text-amg-grey hover:text-amg-blue')
                        : (isActive ? 'text-white' : 'text-gray-200 hover:text-white')
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-amg-green transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </a>
                );
              })}
              <a 
                href="#contact" 
                className={`ml-4 font-bold px-7 py-3 rounded-full transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 ${
                  scrolled 
                    ? 'bg-amg-blue text-white hover:bg-amg-green shadow-amg-blue/20' 
                    : 'bg-amg-green text-white hover:bg-white hover:text-amg-blue shadow-amg-green/30'
                }`}
              >
                Get a Quote
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                scrolled ? 'text-amg-blue' : 'text-white'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="px-6 pt-12 pb-6 space-y-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-5 rounded-2xl text-xl font-bold border-b border-gray-50 transition-all ${
                activeSection === item.href.substring(1)
                  ? 'text-amg-blue bg-amg-blue/5' 
                  : 'text-amg-grey hover:text-amg-blue hover:bg-gray-50'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-12 bg-amg-blue text-white font-bold px-4 py-5 rounded-2xl shadow-xl shadow-amg-blue/20 hover:bg-amg-green transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
