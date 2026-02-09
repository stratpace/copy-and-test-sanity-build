
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { askStratpace, Message } from '../lib/gemini';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to Stratpace Intelligence. Request a market analysis or strategic outlook below.', type: 'general' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await askStratpace(input, messages);
    setMessages(prev => [...prev, response]);
    setIsLoading(false);
  };

  /**
   * Enhanced Markdown Parser
   * Converts basic Markdown (bold, links, lists) into React elements.
   */
  const renderFormattedText = (text: string) => {
    // Split into lines to handle block-level elements like lists
    const lines = text.split('\n');
    
    return lines.map((line, lineIdx) => {
      // Handle Unordered Lists (lines starting with * or -)
      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        const content = line.trim().substring(2);
        return (
          <li key={`line-${lineIdx}`} className="ml-4 mb-2 list-disc text-navy-800">
            {renderInlineElements(content)}
          </li>
        );
      }

      // Handle Section Headers (e.g. 1. **Section**)
      if (/^\d+\.\s+\*\*(.*?)\*\*/.test(line)) {
        return (
          <div key={`line-${lineIdx}`} className="mt-6 mb-3 first:mt-0">
            {renderInlineElements(line)}
          </div>
        );
      }

      // Regular Paragraph
      return line.trim() === '' ? (
        <div key={`line-${lineIdx}`} className="h-4" />
      ) : (
        <p key={`line-${lineIdx}`} className="mb-3 last:mb-0">
          {renderInlineElements(line)}
        </p>
      );
    });
  };

  /**
   * Helper to handle inline formatting like bold and links
   */
  const renderInlineElements = (text: string) => {
    // Regex to match [text](url) OR **bold**
    const parts = text.split(/(\[.*?\]\(.*?\))|(\*\*.*?\*\*)/g);

    return parts.map((part, i) => {
      if (!part) return null;

      // Handle Links [text](url)
      const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        const linkText = linkMatch[1];
        const url = linkMatch[2];
        const isInternal = url.startsWith('/');

        if (isInternal) {
          return (
            <Link 
              key={i} 
              to={url} 
              onClick={() => setIsOpen(false)}
              className="text-gold-600 font-bold underline hover:text-navy-900 transition-colors"
            >
              {linkText}
            </Link>
          );
        } else {
          return (
            <a 
              key={i} 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold-600 font-bold underline hover:text-navy-900 transition-colors"
            >
              {linkText}
            </a>
          );
        }
      }

      // Handle Bold **text**
      const boldMatch = part.match(/\*\*(.*?)\*\*/);
      if (boldMatch) {
        return <strong key={i} className="font-bold text-navy-900">{boldMatch[1]}</strong>;
      }

      return part;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[95vw] md:w-[520px] h-[700px] max-h-[85vh] bg-white rounded-lg shadow-2xl flex flex-col border border-border overflow-hidden mb-4 animate-fade-in-up">
          {/* Header */}
          <div className="bg-navy-900 text-white p-5 flex items-center justify-between border-b-2 border-gold-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-navy-900 text-2xl font-bold">analytics</span>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-wider uppercase">Stratpace Intelligence</h3>
                <p className="text-[10px] text-gray-400 font-medium tracking-widest">SENIOR ADVISORY ANALYST</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gold-600 transition-colors p-1">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FAFBFC] custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[92%] rounded-sm p-6 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-navy-900 text-white shadow-lg' 
                    : 'bg-white text-navy-900 border border-border shadow-md'
                }`}>
                  {msg.role === 'model' && (
                    <div className="flex items-center gap-1.5 text-gold-600 text-[10px] font-bold uppercase tracking-widest mb-4 border-b border-border pb-2">
                      <span className="material-symbols-outlined text-[14px]">
                        {msg.type === 'thinking' ? 'verified_user' : 'query_stats'}
                      </span> 
                      {msg.type === 'thinking' ? 'Strategic Intelligence Report' : 'Market Intelligence Outlook'}
                    </div>
                  )}
                  
                  <div className="prose prose-sm max-w-none prose-headings:text-navy-900 prose-headings:font-bold prose-strong:text-navy-900">
                    {renderFormattedText(msg.text)}
                  </div>

                  {msg.sources && msg.sources.length > 0 && (
                    <div className="mt-8 pt-4 border-t border-border">
                      <p className="text-[9px] font-bold text-muted-text uppercase tracking-widest mb-3">Intelligence Sources:</p>
                      <div className="flex flex-wrap gap-2">
                        {msg.sources.slice(0, 3).map((src, idx) => (
                          <a key={idx} href={src.uri} target="_blank" rel="noopener noreferrer" className="text-[10px] bg-muted px-2.5 py-1.5 rounded-sm text-navy-700 hover:text-gold-600 border border-transparent hover:border-gold-600 transition-all truncate max-w-[160px]">
                            {src.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-border p-5 rounded-sm shadow-md flex items-center gap-4">
                  <div className="relative w-5 h-5">
                    <div className="absolute inset-0 border-2 border-gold-600/20 rounded-full"></div>
                    <div className="absolute inset-0 border-2 border-gold-600 rounded-full border-t-transparent animate-spin"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-navy-900 uppercase tracking-widest">
                      Synthesizing Strategy
                    </span>
                    <span className="text-[9px] text-muted-text animate-pulse">
                      Analyzing global market vectors...
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-5 border-t border-border bg-white flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Request market intelligence..."
              className="flex-1 bg-muted border border-transparent rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gold-600 focus:bg-white transition-all"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-navy-900 text-white w-12 h-12 flex items-center justify-center rounded-sm hover:bg-navy-800 disabled:opacity-50 transition-all shadow-lg hover:-translate-y-0.5"
            >
              <span className="material-symbols-outlined">analytics</span>
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 transform ${
          isOpen ? 'bg-gold-600 rotate-180' : 'bg-navy-900 hover:scale-110 hover:shadow-gold-600/20 hover:shadow-2xl'
        }`}
      >
        <span className={`material-symbols-outlined text-2xl transition-colors duration-500 ${isOpen ? 'text-navy-900' : 'text-gold-600'}`}>
          {isOpen ? 'close' : 'psychology'}
        </span>
      </button>
    </div>
  );
};

export default ChatBot;
