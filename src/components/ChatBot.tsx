import React, { useState, useRef, useEffect } from 'react';
import { MessageCircleIcon, XIcon, MinimizeIcon, SendIcon, BotIcon } from 'lucide-react';

const GEMINI_PROXY_URL = 'https://server-task-cyzf.onrender.com/api/gemini';
const GEMINI_STREAM_URL = 'https://server-task-cyzf.onrender.com/api/gemini/stream';

export const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Check if device is mobile and set initial state
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768; // md breakpoint
      setIsMobile(mobile);
      // Auto-open on desktop, stay closed on mobile
      if (!mobile) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);
    
    // Add a placeholder message for the bot response
    setMessages(prev => [...prev, { from: 'bot', text: '' }]);
    
    // Track if we received any text
    let hasReceivedText = false;
  
    try {
      const res = await fetch(GEMINI_STREAM_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }]
        })
      });
      
      if (!res.ok) {
        let errorMsg = `Failed to fetch Gemini response (status: ${res.status})`;
        if (res.status === 403 || res.status === 401) {
          errorMsg += ' - Invalid or unauthorized API key.';
        } else if (res.status === 429) {
          errorMsg += ' - Rate limit exceeded. Please try again later.';
        } else if (res.status >= 500) {
          errorMsg += ' - Server error. Please try again later.';
        }
        throw new Error(errorMsg);
      }
      
      const reader = res.body?.getReader();
      if (!reader) throw new Error('Failed to get response reader');
      
      let accumulatedText = '';
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = new TextDecoder().decode(value);
        const lines = chunk.split('\n');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
                const newText = data.candidates[0].content.parts[0].text;
                accumulatedText += newText;
                hasReceivedText = true;
                
                // Update the last message (bot's response) with accumulated text
                setMessages(prev => {
                  const newMessages = [...prev];
                  if (newMessages.length > 0 && newMessages[newMessages.length - 1].from === 'bot') {
                    newMessages[newMessages.length - 1].text = accumulatedText;
                  }
                  return newMessages;
                });
              }
            } catch (parseError) {
              console.warn('Failed to parse streaming data:', parseError);
            }
          }
        }
      }
      
      // If no text was received, remove the empty bot message and show error
      if (!hasReceivedText) {
        setMessages(prev => prev.slice(0, -1));
        throw new Error('No response received from the AI service.');
      }
      
    } catch (err) {
      console.error('Error calling Gemini API:', err);
      
      // Remove the empty bot message on error
      setMessages(prev => prev.slice(0, -1));
      
      // Set a user-friendly error message
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
      
      // Fallback to proxy endpoint if streaming fails
      if (!hasReceivedText) {
        try {
          const fallbackRes = await fetch(GEMINI_PROXY_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: input }] }]
            })
          });
          
          if (fallbackRes.ok) {
            const fallbackData = await fallbackRes.json();
            const botResponse = fallbackData.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not process your request.';
            setMessages(prev => [...prev, { from: 'bot', text: botResponse }]);
            setError(null);
          }
        } catch (fallbackErr) {
          console.error('Fallback request also failed:', fallbackErr);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  // If open, show the chat interface
  if (isOpen) {
    return (
      <div className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 transition-all duration-300 animate-slideIn ${
        isMobile 
          ? 'w-[calc(100vw-2rem)] max-w-sm h-[70vh] max-h-96' 
          : 'w-80 h-96'
      } bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col`}>
        
        {/* Minimized state */}
        {isMinimized ? (
          <div className="flex items-center justify-between p-3 sm:p-4 bg-orange-600 dark:bg-orange-500 text-white rounded-xl cursor-pointer hover:bg-orange-700 dark:hover:bg-orange-400 transition-all duration-200" onClick={() => setIsMinimized(false)}>
            <div className="flex items-center gap-2">
              <BotIcon size={18} className="sm:w-5 sm:h-5 animate-pulse" />
              <span className="font-medium text-xs sm:text-sm">Chat Assistant</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeChat();
              }}
              className="hover:bg-orange-800 dark:hover:bg-orange-300 p-1 rounded transition-colors duration-200"
              aria-label="Close ChatBot"
            >
              <XIcon size={14} className="sm:w-4 sm:h-4" />
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 bg-orange-600 dark:bg-orange-500 text-white rounded-t-xl">
              <div className="flex items-center gap-2">
                <BotIcon size={18} className="sm:w-5 sm:h-5 animate-pulse" />
                <span className="font-medium text-xs sm:text-sm">Chat Assistant</span>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={minimizeChat}
                  className="hover:bg-orange-700 dark:hover:bg-orange-400 p-1 rounded transition-colors duration-200"
                  aria-label="Minimize ChatBot"
                >
                  <MinimizeIcon size={14} className="sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={closeChat}
                  className="hover:bg-orange-700 dark:hover:bg-orange-400 p-1 rounded transition-colors duration-200"
                  aria-label="Close ChatBot"
                >
                  <XIcon size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-2 sm:py-3 space-y-2 sm:space-y-3 bg-gray-50 dark:bg-gray-800" style={{ minHeight: isMobile ? '200px' : '300px', maxHeight: isMobile ? '300px' : '400px' }}>
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] sm:max-w-[80%] px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm shadow-sm ${
                    msg.from === 'user' 
                      ? 'bg-orange-600 text-white dark:bg-orange-500 dark:text-gray-900 rounded-br-md' 
                      : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-bl-md'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] sm:max-w-[80%] px-3 sm:px-4 py-1.5 sm:py-2 rounded-2xl text-xs sm:text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-bl-md shadow-sm flex items-center space-x-2">
                    <span>Typing</span>
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-2 sm:p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-xl">
              <div className="flex gap-1.5 sm:gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  className="flex-1 px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-800 dark:text-white text-xs sm:text-sm transition-all duration-200"
                  placeholder={isMobile ? "Type message..." : "Type your message..."}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="bg-orange-600 dark:bg-orange-500 text-white p-1.5 sm:p-2 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                  aria-label="Send Message"
                >
                  <SendIcon size={14} className="sm:w-4 sm:h-4" />
                </button>
              </div>
              {error && (
                <div className="mt-1.5 sm:mt-2 text-red-500 text-xs bg-red-50 dark:bg-red-900/20 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg">
                  {error}
                </div>
              )}
            </form>
          </>
        )}
      </div>
    );
  }

  // Default state - closed, show robot icon
  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      <button
        onClick={toggleChat}
        className="group bg-orange-600 dark:bg-orange-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-orange-700 dark:hover:bg-orange-400 animate-pulse-glow"
        aria-label="Open ChatBot"
      >
        <BotIcon size={20} className="sm:w-6 sm:h-6 group-hover:animate-bounce transition-all duration-200" />
      </button>
    </div>
  );
};