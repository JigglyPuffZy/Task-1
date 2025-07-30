import React, { useState } from 'react';
import { ChevronDownIcon, GlobeIcon, MenuIcon, XIcon, MailIcon, SunIcon, MoonIcon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="bg-white/80 dark:bg-gray-950/80 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-orange-100 dark:border-gray-800 transition-all">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/Logo_lovatoelectric.png" alt="LOVATO Electric Logo" className="h-10 md:h-12 drop-shadow-md transition-transform duration-200 hover:scale-105 hover:drop-shadow-xl cursor-pointer" />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 cursor-pointer px-2 py-1 rounded transition-colors duration-200 hover:bg-orange-50 dark:hover:bg-gray-900 group">
            <GlobeIcon size={18} className="mr-1" />
            <span>English</span>
            <ChevronDownIcon size={16} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="relative text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-1 py-0.5 transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 focus:text-orange-600 group">
              Products
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:h-1 group-focus:w-full group-focus:h-1"></span>
            </a>
            <a href="#" className="relative text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-1 py-0.5 transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 focus:text-orange-600 group">
              Solutions
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:h-1 group-focus:w-full group-focus:h-1"></span>
            </a>
            <a href="#" className="relative text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-1 py-0.5 transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 focus:text-orange-600 group">
              Support
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:h-1 group-focus:w-full group-focus:h-1"></span>
            </a>
            <a href="#" className="relative text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-1 py-0.5 transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 focus:text-orange-600 group">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:h-1 group-focus:w-full group-focus:h-1"></span>
            </a>
          </nav>
          <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded shadow hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400 dark:text-gray-900 transition transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
            <MailIcon size={18} /> Contact Us
          </button>
          {/* Dark mode toggle */}
          <button
            className="ml-4 p-2 rounded-full border border-orange-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow hover:bg-orange-50 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <SunIcon size={20} className="text-orange-400 animate-spin-slow" /> : <MoonIcon size={20} className="text-gray-700 dark:text-gray-200" />}
          </button>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 dark:text-gray-200 transition-transform duration-200 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="sr-only">Toggle menu</span>
          {isMenuOpen ? <XIcon size={28} className="transition-transform duration-200 rotate-90" /> : <MenuIcon size={28} className="transition-transform duration-200" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}>
        <div className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute top-0 right-0 w-64 bg-white dark:bg-gray-950 shadow-2xl h-full px-6 py-8 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} tabIndex={-1}>
          <div className="flex items-center text-gray-700 dark:text-gray-200 mb-6">
            <GlobeIcon size={18} className="mr-1" />
            <span>English</span>
            <ChevronDownIcon size={16} className="ml-1 transition-transform duration-200" />
          </div>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-1 py-1 rounded transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 focus:text-orange-600 hover:bg-orange-50 dark:hover:bg-gray-900">Products</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-1 py-1 rounded transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 focus:text-orange-600 hover:bg-orange-50 dark:hover:bg-gray-900">Solutions</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-1 py-1 rounded transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 focus:text-orange-600 hover:bg-orange-50 dark:hover:bg-gray-900">Support</a>
            <a href="#" className="text-gray-700 dark:text-gray-200 font-semibold tracking-wide px-1 py-1 rounded transition-colors duration-200 hover:text-orange-600 dark:hover:text-orange-400 focus:text-orange-600 hover:bg-orange-50 dark:hover:bg-gray-900">About</a>
          </nav>
          <button className="mt-8 w-full flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded shadow hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400 dark:text-gray-900 transition transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
            <MailIcon size={18} /> Contact Us
          </button>
          {/* Dark mode toggle in mobile menu */}
          <button
            className="mt-6 w-full flex items-center justify-center gap-2 p-2 rounded-full border border-orange-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow hover:bg-orange-50 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={toggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <SunIcon size={20} className="text-orange-400 animate-spin-slow" /> : <MoonIcon size={20} className="text-gray-700 dark:text-gray-200" />}
            <span className="ml-2">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};