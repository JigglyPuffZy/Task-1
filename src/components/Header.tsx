import React, { useState } from 'react';
import { ChevronDownIcon, GlobeIcon, MenuIcon, XIcon, MailIcon, SunIcon, MoonIcon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  };

  return (
    <header className="bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-orange-100 dark:border-gray-800 transition-all">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-2 sm:py-3 flex justify-between items-center max-w-full">
        <div className="flex items-center min-w-0">
          <img 
            src="/Logo_lovatoelectric.png" 
            alt="LOVATO Electric Logo" 
            className="h-6 xs:h-7 sm:h-8 md:h-10 lg:h-12 max-w-full drop-shadow-md transition-transform duration-200 hover:scale-105 hover:drop-shadow-xl cursor-pointer" 
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <div className="flex items-center text-gray-700 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-400 cursor-pointer px-2 py-1 rounded transition-colors duration-200 hover:bg-orange-50 dark:hover:bg-gray-900 group">
            <GlobeIcon size={14} className="mr-1" />
            <span className="text-xs xl:text-sm">English</span>
            <ChevronDownIcon size={12} className="ml-1 group-hover:rotate-180 transition-transform" />
          </div>
          <nav className="flex space-x-3 xl:space-x-4">
            {['Products', 'Solutions', 'Support'].map((label) => (
              <a key={label} href="#" className="relative text-gray-700 dark:text-gray-200 font-semibold text-xs xl:text-sm px-1 py-0.5 group">
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:h-1"></span>
              </a>
            ))}
            <button 
              onClick={() => scrollToSection('about')}
              className="relative text-gray-700 dark:text-gray-200 font-semibold text-xs xl:text-sm px-1 py-0.5 group"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 group-hover:w-full group-hover:h-1"></span>
            </button>
          </nav>
          <button className="flex items-center gap-2 bg-orange-600 text-white px-3 py-2 rounded-lg shadow hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400 dark:text-gray-900 transition duration-200">
            <MailIcon size={14} /> <span>Contact</span>
          </button>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full border border-orange-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow hover:bg-orange-50 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <SunIcon size={16} className="text-orange-400 animate-spin-slow" /> : <MoonIcon size={16} className="text-gray-700 dark:text-gray-200" />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gray-700 dark:text-gray-200 p-2 hover:bg-orange-50 dark:hover:bg-gray-800 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          {isMenuOpen ? <XIcon size={20} className="rotate-90 transition" /> : <MenuIcon size={20} />}
        </button>
      </div>

      {/* Mobile Navigation Panel */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-500 ${isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeMenu}
        />

        {/* Menu Content */}
        <div className={`absolute right-0 top-0 h-screen w-full max-w-sm bg-white dark:bg-gray-950 shadow-2xl transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-orange-100 dark:border-gray-800 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
            <div className="flex items-center gap-3">
              <img src="/Logo_lovatoelectric.png" alt="LOVATO Electric" className="h-8" />
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Menu</div>
            </div>
            <button onClick={closeMenu} className="p-2 rounded-full hover:bg-orange-200 dark:hover:bg-gray-700">
              <XIcon size={20} />
            </button>
          </div>

          {/* Language */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-900 rounded-lg px-4 py-3">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                <GlobeIcon size={18} className="text-orange-500" />
                <span>English</span>
              </div>
              <ChevronDownIcon size={16} className="text-gray-500 dark:text-gray-400" />
            </div>
          </div>

          {/* Nav Links */}
          <nav className="p-6 space-y-3">
            {['Products', 'Solutions', 'Support'].map((item) => (
              <a 
                key={item}
                href="#"
                className="block text-lg font-semibold text-gray-700 dark:text-gray-200 p-4 rounded-xl hover:bg-orange-50 dark:hover:bg-gray-900 transition-all"
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
            <button 
              onClick={() => scrollToSection('about')}
              className="w-full text-left text-lg font-semibold text-gray-700 dark:text-gray-200 p-4 rounded-xl hover:bg-orange-50 dark:hover:bg-gray-900"
            >
              About
            </button>
          </nav>

          {/* Actions */}
          <div className="p-6 space-y-4 border-t border-gray-200 dark:border-gray-800">
            <button 
              className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white py-3 rounded-xl shadow hover:shadow-lg hover:bg-orange-700 transition"
              onClick={closeMenu}
            >
              <MailIcon size={20} /> Contact Us
            </button>

            <button
              onClick={toggleDarkMode}
              className="w-full flex items-center justify-center gap-2 p-3 rounded-xl border dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
            >
              {darkMode ? (
                <>
                  <SunIcon size={20} className="text-orange-400" />
                  Light Mode
                </>
              ) : (
                <>
                  <MoonIcon size={20} className="text-gray-600" />
                  Dark Mode
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
