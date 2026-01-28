
import React, { useMemo, useState, useEffect } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
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
import { decode, decodeAudioData } from './utils/audio';

const AppContent: React.FC = () => {
  const { currentPath } = useNavigation();
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldRenderLoader, setShouldRenderLoader] = useState(true);

  const playWelcomeSound = async () => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: 'Welcome to Azariah Management Group. We are your strategic force multiplier.' }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' }, // Professional and pleasant
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const audioBuffer = await decodeAudioData(decode(base64Audio), audioCtx, 24000, 1);
        const source = audioCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioCtx.destination);
        source.start();
      }
    } catch (err) {
      console.warn("Welcome sound skipped or failed:", err);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      // Trigger welcome sound shortly after reveal
      const audioTimer = setTimeout(playWelcomeSound, 600);
      const loaderTimer = setTimeout(() => setShouldRenderLoader(false), 1100);
      
      return () => {
        clearTimeout(audioTimer);
        clearTimeout(loaderTimer);
      };
    }
  }, [isLoaded]);

  const renderedContent = useMemo(() => {
    try {
      window.scrollTo(0, 0);
      
      // Extract normalized path for routing
      const path = currentPath.split('?')[0].split('#')[0];
      
      const routes: Record<string, React.ReactNode> = {
        '/about': <div className="pt-20"><About /><AiForceCommunity /></div>,
        '/services': <div className="pt-20"><Services /><CSRHighlight /><NonprofitStrategy /><GovernmentConsulting /><InnovationStrategy /><CommunityImpact /></div>,
        '/studio': <div className="pt-20"><Studio /><CreativeStorytelling /></div>,
        '/podcast': <div className="pt-20"><Podcast /></div>,
        '/booking': <div className="pt-20"><BookingSession /></div>,
        '/contact': <div className="pt-20"><Contact /></div>,
        '/blueprint': <div className="pt-20"><LeadMagnet /></div>,
      };

      // Exact route match
      if (routes[path]) return routes[path];

      // Default Home Content (for any other paths or index.html)
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
    } catch (err) {
      console.error("Critical rendering error:", err);
      return <div className="py-40 text-center"><h1 className="text-2xl font-bold">An unexpected error occurred.</h1><button onClick={() => window.location.href = '/'} className="mt-4 text-amg-blue underline">Refresh Home</button></div>;
    }
  }, [currentPath]);

  return (
    <div className="relative min-h-screen bg-white font-sans text-gray-900">
      {shouldRenderLoader && (
        <div className={`fixed inset-0 z-[100] transition-opacity duration-1000 ease-in-out ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <LoadingScreen 
            onFinished={() => setIsLoaded(true)} 
            isVisible={true} 
          />
        </div>
      )}

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
