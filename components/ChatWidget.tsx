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
      text: `Hello! I'm the ${COMPANY_INFO.name} AI Assistant. How can I help you today?`,
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
      // Initialize Gemini
      // NOTE: process.env.API_KEY is assumed to be available
      const apiKey = process.env.API_KEY || ''; 
      
      if (!apiKey) {
          throw new Error("API Key not found");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      // Construct system context with company info
      const serviceDescriptions = SERVICES.map(s => `- ${s.title}: ${s.description}`).join('\n');
      const systemInstruction = `
        You are a helpful, professional AI assistant for ${COMPANY_INFO.name}.
        
        Company Context:
        ${COMPANY_INFO.aboutText}
        
        Services Offered:
        ${serviceDescriptions}
        
        Contact Info:
        Address: ${COMPANY_INFO.address}
        Email: ${COMPANY_INFO.email}
        Phone: ${COMPANY_INFO.phone}
        
        Tone: Professional, Corporate, Helpful, Concise.
        Goal: Answer visitor questions about the company's services, location, and expertise.
        If you don't know an answer, kindly suggest they contact the company directly via the form or phone.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: input, // In a real app, maintain history context here
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const modelMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: response.text || "I apologize, I couldn't generate a response at this time. Please try again or contact us directly.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, modelMessage]);

    } catch (error) {
      console.error("Gemini API Error:", error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I'm currently experiencing technical difficulties. Please contact our office directly at " + COMPANY_INFO.phone,
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
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 sm:w-96 mb-4 overflow-hidden border border-gray-200 flex flex-col animate-fade-in-up" style={{ height: '500px' }}>
          {/* Header */}
          <div className="bg-amg-blue p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-2">
              <Icons.Sparkles />
              <span className="font-semibold">AMG Smart Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">
              <Icons.X />
            </button>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === 'user' 
                    ? 'bg-amg-blue text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-gray-200 shadow-sm rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about our services..."
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amg-blue"
                disabled={isLoading}
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading}
                className="bg-amg-gold text-amg-blue p-2 rounded-md hover:bg-yellow-500 disabled:opacity-50 transition-colors"
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
        className="bg-amg-blue text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all transform hover:scale-110 flex items-center justify-center"
      >
        {isOpen ? <Icons.X /> : <Icons.Message />}
      </button>
    </div>
  );
};

export default ChatWidget;