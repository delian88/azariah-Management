import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, Icons, COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Scroll spy logic
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
      className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent
      ${scrolled 
        ? 'bg-amg-blue/95 backdrop-blur-md shadow-xl py-2 border-white/10' 
        : 'bg-gradient-to-b from-black/50 to-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <a href="#home" className="flex items-center space-x-2">
              <img 
                src={COMPANY_INFO.logoUrl} 
                alt={COMPANY_INFO.name} 
                className={`h-14 w-auto transition-all duration-300 ${scrolled ? 'brightness-100' : 'brightness-0 invert'}`}
              />
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
                    className={`relative px-3 py-2 text-sm font-semibold tracking-wide transition-colors group ${
                      isActive ? 'text-white' : 'text-gray-200 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-amg-green transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </a>
                );
              })}
              <a href="#contact" className="ml-4 bg-amg-green text-white font-bold px-6 py-2.5 rounded-full hover:bg-white hover:text-amg-green transition-all shadow-lg transform hover:-translate-y-0.5">
                Get a Quote
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amg-green focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-amg-blue transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '64px' }}
      >
        <div className="px-4 pt-8 pb-3 space-y-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 rounded-md text-lg font-medium border-b border-white/10 ${
                activeSection === item.href.substring(1)
                  ? 'text-amg-green bg-white/10' 
                  : 'text-gray-200 hover:text-amg-green hover:bg-white/5'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-8 bg-amg-green text-white font-bold px-4 py-3 rounded-md hover:bg-white hover:text-amg-green transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
