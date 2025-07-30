import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { WhatItIs } from './components/WhatItIs';
import { WhatItDoes } from './components/WhatItDoes';
import { WhyItMatters } from './components/WhyItMatters';
import { TechnicalSpecs } from './components/TechnicalSpecs';
import { QuoteRequest } from './components/QuoteRequest';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { AboutUs } from './components/AboutUs';

export function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Try to use system preference or localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((d) => !d);

  return (
    <div className={`flex flex-col min-h-screen w-full bg-white dark:bg-gray-950 transition-colors duration-300`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <WhatItIs />
        <WhatItDoes />
        <WhyItMatters />
        <TechnicalSpecs />
        <AboutUs />
        <QuoteRequest />
        <CTASection />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;