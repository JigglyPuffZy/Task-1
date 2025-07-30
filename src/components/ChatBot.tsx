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
  const [isOpen, setIsOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
          errorMsg += ' - Rate limit exceeded.';
        } else if (res.status === 503) {
          errorMsg += ' - Service temporarily unavailable.';
        }
        throw new Error(errorMsg);
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const data = JSON.parse(line.slice(6));
                
                if (data.error) {
                  throw new Error(data.error);
                }
                
                if (data.text) {
                  hasReceivedText = true;
                  accumulatedText += data.text;
                  // Update the last message (bot's response) with accumulated text
                  setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = { 
                      from: 'bot', 
                      text: accumulatedText 
                    };
                    return newMessages;
                  });
                }
                
                if (data.done) {
                  // If no text was received, show a default message
                  if (!hasReceivedText) {
                    setMessages(prev => {
                      const newMessages = [...prev];
                      newMessages[newMessages.length - 1] = { 
                        from: 'bot', 
                        text: 'Sorry, I could not generate a response. Please try again.' 
                      };
                      return newMessages;
                    });
                  }
                  break;
                }
              } catch (parseError) {
                console.error('Error parsing SSE data:', parseError);
              }
            }
          }
        }
      }
      
    } catch (err: any) {
      console.error('Gemini API error:', err);
      let userErrorMsg = 'Sorry, there was an error contacting the AI.';
      if (err.message.includes('Failed to fetch')) {
        userErrorMsg = 'Network error: Unable to reach Gemini API. Please check your internet connection or try again later.';
      } else if (err.message.includes('Invalid or unauthorized API key')) {
        userErrorMsg = 'Configuration error: The Gemini API key is invalid or unauthorized.';
      } else if (err.message.includes('Rate limit exceeded')) {
        userErrorMsg = 'The Gemini API rate limit has been exceeded. Please try again later.';
      } else if (err.message.includes('Service temporarily unavailable') || err.message.includes('503')) {
        userErrorMsg = 'Gemini API is currently overloaded. Please try again in a few moments. The system will automatically retry with different models.';
      }
      setError(userErrorMsg);
      
      // Update the last message with the error
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = { from: 'bot', text: userErrorMsg };
        return newMessages;
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
      setIsOpen(true);
    } else if (isOpen) {
      setIsOpen(false);
      setIsMinimized(true);
    } else {
      setIsOpen(true);
    }
  };

  const minimizeChat = () => {
    setIsOpen(false);
    setIsMinimized(true);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  // Minimized state - just the robot icon
  if (isMinimized && !isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="group bg-orange-600 dark:bg-orange-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-orange-700 dark:hover:bg-orange-400 animate-pulse-glow"
          aria-label="Open ChatBot"
        >
          <BotIcon size={24} className="group-hover:animate-bounce transition-all duration-200" />
        </button>
      </div>
    );
  }

  // Full chat interface
  if (isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-md xl:max-w-lg">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl flex flex-col animate-scaleIn" style={{ minHeight: '400px', maxHeight: '600px' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 dark:from-orange-500 dark:to-orange-400 text-white px-4 py-3 rounded-t-xl font-semibold flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BotIcon size={20} className="animate-pulse" />
              <span>LOVATO Assistant</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={minimizeChat}
                className="p-1 hover:bg-orange-700 dark:hover:bg-orange-600 rounded transition-colors duration-200"
                aria-label="Minimize ChatBot"
              >
                <MinimizeIcon size={16} />
              </button>
              <button
                onClick={closeChat}
                className="p-1 hover:bg-orange-700 dark:hover:bg-orange-600 rounded transition-colors duration-200"
                aria-label="Close ChatBot"
              >
                <XIcon size={16} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50 dark:bg-gray-800" style={{ minHeight: '300px', maxHeight: '400px' }}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm shadow-sm ${
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
                <div className="max-w-[80%] px-4 py-2 rounded-2xl text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-bl-md shadow-sm flex items-center space-x-2">
                  <span>Typing</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-xl">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-800 dark:text-white text-sm transition-all duration-200"
                placeholder="Type your message..."
                value={input}
                onChange={e => setInput(e.target.value)}
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-orange-600 dark:bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-700 dark:hover:bg-orange-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                aria-label="Send Message"
              >
                <SendIcon size={16} />
              </button>
            </div>
            {error && (
              <div className="mt-2 text-red-500 text-xs bg-red-50 dark:bg-red-900/20 px-3 py-2 rounded-lg">
                {error}
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }

  // Default state - closed, show robot icon
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={toggleChat}
        className="group bg-orange-600 dark:bg-orange-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-orange-700 dark:hover:bg-orange-400 animate-pulse-glow"
        aria-label="Open ChatBot"
      >
        <BotIcon size={24} className="group-hover:animate-bounce transition-all duration-200" />
      </button>
    </div>
  );
};