import React, { useState, useRef, useEffect } from 'react';

const GEMINI_PROXY_URL = 'https://server-task-cyzf.onrender.com/api/gemini';
const GEMINI_STREAM_URL = 'https://server-task-cyzf.onrender.com/api/gemini/stream';

export const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="fixed bottom-6 right-6 w-80 max-w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg flex flex-col z-50 animate-fadeIn" style={{ minHeight: '400px' }}>
      <div className="bg-orange-600 dark:bg-orange-500 text-white px-4 py-3 rounded-t-lg font-semibold flex items-center justify-between">
        <span>ChatBot</span>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-50 dark:bg-gray-800" style={{ maxHeight: '300px' }}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-3 py-2 rounded-lg text-sm ${msg.from === 'user' ? 'bg-orange-600 text-white dark:bg-orange-500 dark:text-gray-900' : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-3 py-2 rounded-lg text-sm bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-100 flex items-center space-x-1">
              <span>Gemini is typing</span>
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-1 h-1 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-1 h-1 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSend} className="p-2 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-b-lg flex">
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded-l border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-800 dark:text-white"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-orange-600 dark:bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-700 dark:hover:bg-orange-400 transition"
          disabled={loading}
        >
          Send
        </button>
      </form>
      {error && <div className="text-red-500 text-xs px-4 pb-2">{error}</div>}
    </div>
  );
};