import React, { useState } from 'react';
import { ChevronDownIcon, GlobeIcon, MenuIcon, XIcon, MailIcon, SunIcon, MoonIcon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close mobile menu when clicking outside
  const closeMenu = () => setIsMenuOpen(false);
  
  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    closeMenu(); // Close mobile menu if open
  };
  
  return (
    <header className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-orange-100 dark:border-gray-800 transition-all">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/Logo_lovatoelectric.png" 
            alt="LOVATO Electric Logo" 
            className="h-8 sm:h-10 md:h-12 drop-shadow-md transition-transform duration-200 hover:scale-105 hover:drop-shadow-xl cursor-pointer" 
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <div className="flex items-center text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 cursor-pointer px-2 py-1 rounded transition-colors duration-200 hover:bg-orange-50 dark:hover:bg-gray-900 group">
            <GlobeIcon size={16} className="mr-1" />
            <span className="text-sm">English</span>
            <ChevronDownIcon size={14} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
          </div>
          <nav className="flex space-x-4 xl:space-x-6">
            <a href="#" className="relative text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-1 py-0.5 transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 focus:text-orange-600 group text-sm">
              Products
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:h-1 group-focus:w-full group-focus:h-1"></span>
            </a>
            <a href="#" className="relative text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-1 py-0.5 transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 focus:text-orange-600 group text-sm">
              Solutions
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:h-1 group-focus:w-full group-focus:h-1"></span>
            </a>
            <a href="#" className="relative text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-1 py-0.5 transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 focus:text-orange-600 group text-sm">
              Support
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:h-1 group-focus:w-full group-focus:h-1"></span>
            </a>
            <button 
              onClick={() => scrollToSection('about')}
              className="relative text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-1 py-0.5 transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 focus:text-orange-600 group text-sm bg-transparent border-none cursor-pointer"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:h-1 group-focus:w-full group-focus:h-1"></span>
            </button>
          </nav>
          <button className="flex items-center gap-2 bg-orange-600 text-white px-3 py-2 rounded-lg shadow hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400 dark:text-gray-900 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 text-sm">
            <MailIcon size={16} /> Contact Us
          </button>
          {/* Dark mode toggle */}
          <button
            className="ml-2 p-2 rounded-full border border-orange-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow hover:bg-orange-50 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <SunIcon size={18} className="text-orange-400 animate-spin-slow" /> : <MoonIcon size={18} className="text-gray-700 dark:text-gray-200" />}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gray-700 dark:text-gray-200 transition-transform duration-200 focus:outline-none p-2 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <XIcon size={24} className="transition-transform duration-200 rotate-90" /> : <MenuIcon size={24} className="transition-transform duration-200" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} 
          onClick={closeMenu} 
        />
        <div 
          className={`absolute top-0 right-0 w-80 max-w-[85vw] bg-white dark:bg-gray-950 shadow-2xl h-full px-6 py-8 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} 
          tabIndex={-1}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center text-gray-700 dark:text-gray-200">
              <GlobeIcon size={18} className="mr-2" />
              <span className="font-medium">English</span>
              <ChevronDownIcon size={16} className="ml-1 transition-transform duration-200" />
            </div>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
              aria-label="Close menu"
            >
              <XIcon size={20} className="text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col space-y-2 mb-8">
            <a 
              href="#" 
              className="text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-3 py-3 rounded-lg transition-all duration-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              onClick={closeMenu}
            >
              Products
            </a>
            <a 
              href="#" 
              className="text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-3 py-3 rounded-lg transition-all duration-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              onClick={closeMenu}
            >
              Solutions
            </a>
            <a 
              href="#" 
              className="text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-3 py-3 rounded-lg transition-all duration-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400"
              onClick={closeMenu}
            >
              Support
            </a>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-3 py-3 rounded-lg transition-all duration-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-transparent border-none cursor-pointer w-full text-left"
            >
              About
            </button>
          </nav>
          
          {/* Mobile Contact Button */}
          <button 
            className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white px-4 py-3 rounded-lg shadow hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400 dark:text-gray-900 transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 font-semibold"
            onClick={closeMenu}
          >
            <MailIcon size={18} /> Contact Us
          </button>
          
          {/* Dark mode toggle in mobile menu */}
          <button
            className="mt-6 w-full flex items-center justify-center gap-3 p-3 rounded-lg border border-orange-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow hover:bg-orange-50 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <SunIcon size={20} className="text-orange-400 animate-spin-slow" /> : <MoonIcon size={20} className="text-gray-700 dark:text-gray-200" />}
            <span className="font-medium">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};