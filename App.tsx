
import React, { useMemo, useState, useEffect } from 'react';
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
import LoadingScreen from './components/LoadingScreen';
import LeadMagnet from './components/LeadMagnet';
import { NavigationProvider, useNavigation } from './NavigationContext';

const AppContent: React.FC = () => {
  const { currentPath } = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRenderLoader, setShouldRenderLoader] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      // Keep the loader in DOM for the duration of the fade-out transition
      const timer = setTimeout(() => setShouldRenderLoader(false), 1100);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  const renderedContent = useMemo(() => {
    window.scrollTo(0, 0);

    // Normalize path to handle root-level variations
    const path = currentPath.split('?')[0].split('#')[0];
    
    // Explicitly check for sub-pages
    if (path === '/about') return <div className="pt-20"><About /><AiForceCommunity /></div>;
    if (path === '/services') return <div className="pt-20"><Services /><CSRHighlight /><NonprofitStrategy /><GovernmentConsulting /><InnovationStrategy /><CommunityImpact /></div>;
    if (path === '/studio') return <div className="pt-20"><Studio /><CreativeStorytelling /></div>;
    if (path === '/podcast') return <div className="pt-20"><Podcast /></div>;
    if (path === '/booking') return <div className="pt-20"><BookingSession /></div>;
    if (path === '/contact') return <div className="pt-20"><Contact /></div>;
    if (path === '/blueprint') return <div className="pt-20"><LeadMagnet /></div>;

    // Default to Home Content for all other paths (Fail-Safe)
    return (
      <>
        <Hero />
        <Partners />
        <About />
        <Services />
        <CSRHighlight />
        <NonprofitStrategy />
        <div id="blueprint">
           <LeadMagnet />
        </div>
        <GovernmentConsulting />
        <InnovationStrategy />
        <CommunityImpact />
        <CreativeStorytelling />
        <Studio />
        <Podcast />
        <AiForceCommunity />
        <FinalCTA />
        <BookingSession />
        <Contact />
      </>
    );
  }, [currentPath]);

  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-900">
      {/* Loading Screen Overlay */}
      {shouldRenderLoader && (
        <div className={`fixed inset-0 z-[100] transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <LoadingScreen 
            onFinished={() => setIsLoaded(true)} 
            isVisible={true} 
          />
        </div>
      )}

      {/* Main App Content */}
      <div className={`flex flex-col min-h-screen transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <Navbar />
        <main className="flex-grow">
          {renderedContent}
        </main>
        <Footer />
        <ChatWidget />
      </div>
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
