
import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';
import { GoogleGenAI, Modality } from "@google/genai";

interface LoadingScreenProps {
  onEnter: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onEnter }) => {
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initial reveal delay
    const timer = setTimeout(() => setIsReady(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const playWelcomeSound = async () => {
    if (isPlaying) return;
    setIsPlaying(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: 'Say in a professional, warm, and executive female voice: Welcome to Azariah Management Group. Strategy, Innovation, and Impact, integrated for your success.' }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' }, // Professional executive tone
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const bytes = decodeBase64(base64Audio);
        const audioBuffer = await decodeAudioData(bytes, audioContext, 24000, 1);
        
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioContext.destination);
        source.start();
        
        // Notify parent to transition while audio starts
        onEnter();
      } else {
        onEnter(); // Fallback if audio fails
      }
    } catch (err) {
      console.error("Welcome sound error:", err);
      onEnter(); // Fallback
    }
  };

  // Helper functions for raw PCM decoding
  function decodeBase64(base64: string) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  }

  async function decodeAudioData(data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute w-[500px] h-[500px] bg-amg-blue/5 rounded-full blur-[120px] animate-pulse-slow"></div>
      
      <div className={`flex flex-col items-center transition-all duration-1000 transform ${isReady ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
        {/* Animated Logo Container */}
        <div className="relative mb-12">
          {/* Breathing Glow Effect */}
          <div className="absolute -inset-8 bg-amg-green/20 rounded-full blur-3xl animate-pulse-slow"></div>
          
          <div className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 animate-fade-in-down">
            <img 
              src={COMPANY_INFO.logoUrl} 
              alt={COMPANY_INFO.name} 
              className="h-24 sm:h-32 w-auto object-contain"
            />
          </div>
        </div>

        {/* Loading Text / CTA */}
        <div className="text-center">
          <h2 className="text-amg-blue font-black uppercase tracking-[0.5em] text-xs mb-8 animate-pulse">
            Establishing Strategic Connection
          </h2>
          
          <button 
            onClick={playWelcomeSound}
            disabled={isPlaying}
            className={`group relative overflow-hidden px-12 py-4 rounded-full bg-amg-blue text-white font-black uppercase tracking-widest text-xs shadow-2xl transition-all hover:bg-amg-green hover:-translate-y-1 active:scale-95 ${isPlaying ? 'opacity-50 cursor-wait' : ''}`}
          >
            <span className="relative z-10 flex items-center gap-3">
              {isPlaying ? 'Initializing...' : 'Enter Experience'}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
          </button>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-12 text-center opacity-30">
        <p className="text-[10px] font-black uppercase tracking-[0.8em] text-amg-blue">
          Azariah Management Group
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
