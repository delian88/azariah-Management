import React from 'react';
import { COMPANY_INFO, NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amg-blue text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
             <img 
                src={COMPANY_INFO.logoUrl} 
                alt={COMPANY_INFO.name} 
                className="h-16 w-auto mb-6 brightness-0 invert opacity-90"
              />
            <p className="text-gray-300 mb-4 max-w-sm">
              {COMPANY_INFO.tagline} We are dedicated to providing superior management and consulting services that drive success.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-amg-green">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-amg-green">Contact</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>{COMPANY_INFO.address}</p>
              <p>Email: <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a></p>
              <p>Phone: {COMPANY_INFO.phone}</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
