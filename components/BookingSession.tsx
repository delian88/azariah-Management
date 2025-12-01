import React, { useState } from 'react';
import { Icons, COMPANY_INFO } from '../constants';

const BookingSession: React.FC = () => {
  const [bookingType, setBookingType] = useState('consulting');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setEmail('');
      setDate('');
      alert('Booking request received! We will confirm shortly.');
    }, 3000);
  };

  return (
    <section id="booking" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-24">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-amg-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amg-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal from-bottom">
          <h2 className="text-amg-green font-bold tracking-wide uppercase text-sm mb-3">Schedule With Us</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-amg-blue font-heading mb-6">
            Book a Session
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Reserve time for a consultation, studio recording, or podcast guest appearance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden reveal from-scale">
          <div className="md:grid md:grid-cols-3">
            {/* Sidebar / Type Selection */}
            <div className="bg-amg-blue text-white p-8 md:col-span-1">
              <h4 className="text-xl font-bold mb-6 font-heading">Select Service</h4>
              <div className="space-y-4">
                <button
                  onClick={() => setBookingType('consulting')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center space-x-3 ${
                    bookingType === 'consulting' 
                      ? 'bg-amg-green text-white shadow-lg transform translate-x-2' 
                      : 'hover:bg-white/10 text-gray-300'
                  }`}
                >
                  <Icons.Briefcase />
                  <span className="font-semibold">Consulting</span>
                </button>
                <button
                  onClick={() => setBookingType('studio')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center space-x-3 ${
                    bookingType === 'studio' 
                      ? 'bg-amg-green text-white shadow-lg transform translate-x-2' 
                      : 'hover:bg-white/10 text-gray-300'
                  }`}
                >
                  <Icons.Video />
                  <span className="font-semibold">Studio Time</span>
                </button>
                <button
                  onClick={() => setBookingType('podcast')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center space-x-3 ${
                    bookingType === 'podcast' 
                      ? 'bg-amg-green text-white shadow-lg transform translate-x-2' 
                      : 'hover:bg-white/10 text-gray-300'
                  }`}
                >
                  <Icons.Mic />
                  <span className="font-semibold">Podcast</span>
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <h5 className="font-bold mb-2 text-amg-green">Need Help?</h5>
                <p className="text-sm text-gray-300 mb-4">
                  Not sure which service you need? Contact our support team.
                </p>
                <p className="text-sm font-semibold">{COMPANY_INFO.phone}</p>
              </div>
            </div>

            {/* Form Area */}
            <div className="p-8 md:col-span-2">
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {bookingType === 'consulting' && 'Strategy Consultation'}
                  {bookingType === 'studio' && 'Studio Reservation'}
                  {bookingType === 'podcast' && 'Podcast Guest Slot'}
                </h4>
                <p className="text-gray-500 text-sm">
                  {bookingType === 'consulting' && 'One-hour initial strategy session with our senior consultants.'}
                  {bookingType === 'studio' && 'Book our state-of-the-art studio facilities for your production.'}
                  {bookingType === 'podcast' && 'Reserve a slot to record or appear on The Azariah Perspective.'}
                </p>
              </div>

              {submitted ? (
                <div className="h-64 flex flex-col items-center justify-center text-center animate-fade-in-up">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-2">Request Submitted!</h5>
                  <p className="text-gray-600">We'll be in touch shortly to confirm your {bookingType} session.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:ring-2 focus:ring-amg-green focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:ring-2 focus:ring-amg-green focus:border-transparent outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-lg border-gray-300 border px-4 py-2 focus:ring-2 focus:ring-amg-green focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-amg-green text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all transform hover:-translate-y-1"
                    >
                      Request Appointment
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    * Confirmation is subject to availability.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSession;