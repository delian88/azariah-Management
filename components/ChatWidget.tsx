
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Icons, COMPANY_INFO, SERVICES } from '../constants';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Welcome to Azariah Management Group. I am your Strategic Assistant. How may I assist you with our consulting or studio services today?`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Fix: Follow guidelines for initializing GoogleGenAI with process.env.API_KEY
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const serviceDescriptions = SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n');
      const systemInstruction = `
        You are a highly professional, senior executive assistant for ${COMPANY_INFO.name} (AMG).
        
        Brand Identity: ${COMPANY_INFO.heroHeadline}.
        Tone: Corporate, Professional, Authoritative, yet Helpful and Approachable.
        
        Company Context:
        ${COMPANY_INFO.aboutText}
        
        Our Core Pillars & Services:
        ${serviceDescriptions}
        
        Contact Details:
        Office: ${COMPANY_INFO.address}
        Email: ${COMPANY_INFO.email}
        Phone: ${COMPANY_INFO.phone}
        
        Guidelines:
        1. Be concise and provide value-driven responses.
        2. If a user asks about booking, direct them to the "Booking" section or mention our Maryland studio.
        3. For complex inquiries, recommend an initial consultation.
        4. Refer to the user as a partner or leader.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: input,
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const modelMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response.text || "I apologize, but I'm unable to provide a response right now. Please reach out via our contact form.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, modelMessage]);

    } catch (error) {
      console.error("AMG Intel Error:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I am experiencing a momentary connection lapse. Please contact our headquarters directly at " + COMPANY_INFO.phone,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[90vw] sm:w-[400px] mb-4 overflow-hidden border border-gray-100 flex flex-col animate-fade-in-up origin-bottom-right">
          {/* Header */}
          <div className="bg-amg-blue p-5 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-amg-green rounded-lg">
                <Icons.Sparkles />
              </div>
              <div>
                <span className="font-bold block text-sm">AMG Strategic Intel</span>
                <span className="text-[10px] text-amg-green flex items-center">
                  <span className="w-1.5 h-1.5 bg-amg-green rounded-full mr-1 animate-pulse"></span>
                  Active Now
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
              <Icons.X />
            </button>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#F9FAFB] min-h-[350px] max-h-[450px]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-amg-blue text-white rounded-tr-none shadow-md' 
                    : 'bg-white text-gray-700 border border-gray-200 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm rounded-tl-none">
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 bg-amg-green rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-amg-green rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-amg-green rounded-full animate-bounce delay-200"></div>
                    </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about our strategy services..."
                className="w-full border-none bg-gray-50 rounded-xl pl-4 pr-12 py-3 text-sm focus:ring-2 focus:ring-amg-green/50 outline-none transition-all text-gray-800"
                disabled={isLoading}
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 text-amg-blue p-2 rounded-lg hover:text-amg-green disabled:opacity-30 transition-all transform hover:scale-110"
              >
                <Icons.Send />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-amg-blue text-white w-16 h-16 rounded-full shadow-2xl hover:bg-amg-green transition-all transform hover:scale-110 flex items-center justify-center border-4 border-white group"
      >
        {isOpen ? <Icons.X /> : (
          <div className="relative">
            <Icons.Message />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-amg-green border-2 border-white rounded-full"></span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
