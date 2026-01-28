
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, Icons, COMPANY_INFO } from '../constants';
import Link from './Link';
import { useNavigation } from '../NavigationContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentPath } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500
      ${(scrolled || currentPath !== '/')
        ? 'bg-white shadow-2xl py-2 sm:py-3 border-b border-gray-100' 
        : 'bg-transparent py-4 sm:py-6 border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex-shrink-0 flex items-center group cursor-pointer">
            <Link href="/" className="flex items-center">
              <div className={`p-1 sm:p-1.5 rounded-lg transition-all duration-500 overflow-hidden ${(!scrolled && currentPath === '/') ? 'bg-white shadow-2xl scale-110 translate-y-1' : 'bg-transparent'}`}>
                <img 
                  src={COMPANY_INFO.logoUrl} 
                  alt={COMPANY_INFO.name} 
                  className="h-10 sm:h-12 w-auto transition-all duration-300 transform group-hover:scale-105"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPath === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-bold tracking-wide transition-colors group ${
                      (scrolled || currentPath !== '/')
                        ? (isActive ? 'text-amg-blue' : 'text-amg-grey hover:text-amg-blue')
                        : (isActive ? 'text-white' : 'text-gray-200 hover:text-white')
                    }`}
                  >
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-amg-green transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                );
              })}
              <Link 
                href="/blueprint" 
                className={`ml-4 font-black px-7 py-3 rounded-full transition-all shadow-lg transform hover:-translate-y-1 active:scale-95 ${
                  (scrolled || currentPath !== '/')
                    ? 'bg-amg-green text-white hover:bg-amg-blue' 
                    : 'bg-amg-green text-white hover:bg-white hover:text-amg-blue'
                }`}
              >
                Blueprint
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${
                (scrolled || currentPath !== '/') ? 'text-amg-blue' : 'text-white'
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
        className={`lg:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-500 ease-in-out h-screen ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: scrolled || currentPath !== '/' ? '60px' : '72px' }}
      >
        <div className="px-6 pt-10 pb-20 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-4 rounded-xl text-lg font-bold border-b border-gray-50 transition-all ${
                currentPath === item.href ? 'text-amg-blue bg-amg-blue/5' : 'text-amg-grey'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/blueprint"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-10 bg-amg-blue text-white font-bold px-4 py-5 rounded-xl shadow-xl shadow-amg-blue/20"
          >
            Blueprint Landing Page
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
