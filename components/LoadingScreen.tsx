
import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';
import { GoogleGenAI, Modality } from "@google/genai";

interface LoadingScreenProps {
  onFinished: () => void;
  isVisible: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinished, isVisible }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Phase 1: Show the logo
    const showTimer = setTimeout(() => setIsReady(true), 100);
    
    // Phase 2: Play sound and transition after logo animation
    const finishTimer = setTimeout(() => {
      playWelcomeSound();
      onFinished();
    }, 2800);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(finishTimer);
    };
  }, []);

  const playWelcomeSound = async () => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: 'Say in a professional, warm, and executive female voice: Welcome to Azariah Management Group. Strategy, Innovation, and Impact, integrated for your success.' }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
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
      }
    } catch (err) {
      console.warn("Audio autoplay blocked or failed:", err);
    }
  };

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

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute w-[500px] h-[500px] bg-amg-blue/5 rounded-full blur-[120px] animate-pulse-slow"></div>
      
      <div className="flex flex-col items-center">
        <div className="relative mb-8">
          <div className="absolute -inset-8 bg-amg-green/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="relative bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 animate-fade-in-down">
            <img 
              src={COMPANY_INFO.logoUrl} 
              alt={COMPANY_INFO.name} 
              className="h-20 sm:h-28 w-auto object-contain"
            />
          </div>
        </div>

        <div className="text-center overflow-hidden">
          <h2 className="text-amg-blue font-black uppercase tracking-[0.5em] text-[10px] sm:text-xs animate-pulse">
            Initializing Strategic Connection
          </h2>
          <div className="mt-4 w-48 h-0.5 bg-gray-100 rounded-full mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-amg-green animate-[loading_2.5s_ease-in-out_forwards]"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
