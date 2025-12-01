import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you for your message. We will contact you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-white scroll-mt-24 relative overflow-hidden">
       {/* Decor */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="reveal from-left">
            <h2 className="text-amg-green font-bold tracking-wide uppercase text-sm mb-2">Get In Touch</h2>
            <h3 className="text-3xl font-extrabold text-amg-blue sm:text-4xl font-heading mb-6">
              Contact Us Today
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Ready to take your business to the next level? Reach out to us to discuss how Azariah Management Group can support your goals.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 p-3 bg-amg-blue/5 rounded-lg group-hover:bg-amg-green/10 transition-colors">
                   <svg className="h-6 w-6 text-amg-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                </div>
                <div className="ml-5">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amg-blue transition-colors">Our Location</h4>
                  <p className="mt-1 text-gray-600 leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 p-3 bg-amg-blue/5 rounded-lg group-hover:bg-amg-green/10 transition-colors">
                  <svg className="h-6 w-6 text-amg-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amg-blue transition-colors">Phone</h4>
                  <p className="mt-1 text-gray-600">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 mt-1 p-3 bg-amg-blue/5 rounded-lg group-hover:bg-amg-green/10 transition-colors">
                   <svg className="h-6 w-6 text-amg-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                   </svg>
                </div>
                <div className="ml-5">
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-amg-blue transition-colors">Email</h4>
                  <p className="mt-1 text-gray-600">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal from-right delay-200 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 focus:bg-white shadow-sm focus:border-amg-blue focus:ring-amg-blue py-3 px-4 border transition-colors outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 focus:bg-white shadow-sm focus:border-amg-blue focus:ring-amg-blue py-3 px-4 border transition-colors outline-none"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 focus:bg-white shadow-sm focus:border-amg-blue focus:ring-amg-blue py-3 px-4 border transition-colors outline-none"
                  placeholder="Service Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 bg-gray-50 focus:bg-white shadow-sm focus:border-amg-blue focus:ring-amg-blue py-3 px-4 border transition-colors outline-none resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-lg text-sm font-bold uppercase tracking-wider text-white bg-amg-blue hover:bg-amg-green hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amg-blue transition-all transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;