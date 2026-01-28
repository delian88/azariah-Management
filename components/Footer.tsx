
import React from 'react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';
import Link from './Link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amg-blue text-white pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-amg-green/5 rounded-full blur-[80px] sm:blur-[120px] translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-24 mb-16 sm:mb-20">
          
          <div className="lg:col-span-5">
            {/* Professional container for logo with its own background */}
            <div className="inline-block bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl mb-6 sm:mb-8">
              <img 
                src={COMPANY_INFO.logoUrl} 
                alt={COMPANY_INFO.name} 
                className="h-10 sm:h-16 w-auto"
                style={{ objectFit: 'contain' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/400x200/ffffff/00548B?text=AMG+GROUP';
                }}
              />
            </div>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md">
              A Strategic Force-Multiplier for Global Leaders. We bridge the gap between high-level management consulting and professional creative execution.
            </p>
            <div className="flex space-x-4 sm:space-x-5">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map(platform => (
                <a 
                  key={platform} 
                  href="#" 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-amg-green hover:border-amg-green transition-all duration-300 group"
                  aria-label={platform}
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white transition-colors">
                    {platform === 'linkedin' ? (
                      <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    ) : (
                      <div className="w-full h-full bg-current rounded-sm opacity-50"></div>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-base sm:text-lg font-black mb-6 sm:mb-8 text-white uppercase tracking-widest font-heading border-l-4 border-amg-green pl-4">Navigation</h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 hover:text-amg-green transition-all flex items-center group text-sm sm:text-base">
                    <span className="w-0 group-hover:w-4 h-[1px] bg-amg-green mr-0 group-hover:mr-3 transition-all"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-base sm:text-lg font-black mb-6 sm:mb-8 text-white uppercase tracking-widest font-heading border-l-4 border-amg-green pl-4">Headquarters</h4>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-amg-green mt-1">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{COMPANY_INFO.address}</p>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="text-amg-green">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v10a2 2 0 002 2z" /></svg>
                </div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">{COMPANY_INFO.email}</a>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="text-amg-green">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <p className="text-gray-400 text-xs sm:text-sm font-bold tracking-wider">{COMPANY_INFO.phone}</p>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-12">
               <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em] mb-4">Newsletter</p>
               <div className="flex">
                  <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-l-lg px-4 py-2.5 sm:py-3 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-amg-green w-full" />
                  <button className="bg-amg-green text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-r-lg font-bold hover:bg-green-600 transition-colors uppercase text-[10px]">Join</button>
               </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 sm:pt-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] font-bold uppercase tracking-widest gap-6 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. <br className="md:hidden"/> Strategic Excellence Integrated.</p>
          <div className="flex space-x-6 sm:space-x-8">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
