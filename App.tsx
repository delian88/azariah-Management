
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Partners from './components/Partners';
import Services from './components/Services';
import CSRHighlight from './components/CSRHighlight';
import NonprofitStrategy from './components/NonprofitStrategy';
import GovernmentConsulting from './components/GovernmentConsulting';
import InnovationStrategy from './components/InnovationStrategy';
import CommunityImpact from './components/CommunityImpact';
import CreativeStorytelling from './components/CreativeStorytelling';
import Studio from './components/Studio';
import Podcast from './components/Podcast';
import BookingSession from './components/BookingSession';
import AiForceCommunity from './components/AiForceCommunity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <CSRHighlight />
      <NonprofitStrategy />
      <GovernmentConsulting />
      <InnovationStrategy />
      <CommunityImpact />
      <CreativeStorytelling />
      <Services />
      <Studio />
      <Podcast />
      <AiForceCommunity />
      <BookingSession />
      <Contact />
      <Footer />
      {/* AI Chatbot for customer assistance */}
      <ChatWidget />
    </div>
  );
};

export default App;
