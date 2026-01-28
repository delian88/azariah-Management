
import React, { useMemo } from 'react';
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
import FinalCTA from './components/FinalCTA';
import BookingSession from './components/BookingSession';
import AiForceCommunity from './components/AiForceCommunity';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import LeadMagnet from './components/LeadMagnet';
import { NavigationProvider, useNavigation } from './NavigationContext';

const AppContent: React.FC = () => {
  const { currentPath } = useNavigation();

  const renderedContent = useMemo(() => {
    // Return to the top on page change
    window.scrollTo(0, 0);

    switch (currentPath) {
      case '/':
        return (
          <>
            <Hero />
            <Partners />
            <About />
            <Services />
            <FinalCTA />
          </>
        );
      case '/about':
        return <div className="pt-20"><About /><AiForceCommunity /></div>;
      case '/services':
        return (
          <div className="pt-20">
            <Services />
            <CSRHighlight />
            <NonprofitStrategy />
            <GovernmentConsulting />
            <InnovationStrategy />
            <CommunityImpact />
          </div>
        );
      case '/studio':
        return <div className="pt-20"><Studio /><CreativeStorytelling /></div>;
      case '/podcast':
        return <div className="pt-20"><Podcast /></div>;
      case '/booking':
        return <div className="pt-20"><BookingSession /></div>;
      case '/contact':
        return <div className="pt-20"><Contact /></div>;
      case '/blueprint':
        return <div className="pt-20"><LeadMagnet /></div>;
      default:
        return (
          <div className="py-40 text-center">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <a href="/" className="text-amg-blue mt-4 inline-block hover:underline">Return Home</a>
          </div>
        );
    }
  }, [currentPath]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      <Navbar />
      <main className="flex-grow">
        {renderedContent}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
};

export default App;
