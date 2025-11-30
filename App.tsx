import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Studio from './components/Studio';
import Podcast from './components/Podcast';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Studio />
      <Podcast />
      <Contact />
      <Footer />
      {/* AI Chatbot for customer assistance */}
      <ChatWidget />
    </div>
  );
};

export default App;
