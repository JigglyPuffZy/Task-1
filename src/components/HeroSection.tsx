import React, { useState, useEffect } from 'react';
import { Modal } from './Modal';
import image1 from '../image 1.jpg';
import { MailIcon, DownloadIcon, ShieldIcon, ZapIcon, SettingsIcon } from 'lucide-react';

export const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900 py-12 sm:py-16 md:py-24 overflow-hidden transition-colors duration-300">
      {/* Background shapes */}
      <div className="absolute -top-16 -left-16 w-40 h-40 sm:w-64 sm:h-64 bg-orange-100 dark:bg-orange-900 rounded-full opacity-30 blur-2xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-80 sm:h-80 bg-orange-200 dark:bg-orange-950 rounded-full opacity-20 blur-3xl animate-pulse" aria-hidden="true" />

      {/* Decorative SVGs */}
      <svg className="absolute top-10 right-1/3 w-16 h-16 sm:w-32 sm:h-32 opacity-20 animate-spin-slow" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="48" stroke="#fb923c" strokeWidth="4" strokeDasharray="10 10" />
      </svg>
      <svg className="absolute bottom-10 left-1/4 w-12 h-12 sm:w-24 sm:h-24 opacity-10 animate-bounce-slow" viewBox="0 0 100 100" fill="none">
        <rect x="10" y="10" width="80" height="80" rx="40" fill="#fb923c" />
      </svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Text content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 dark:text-white mb-4 leading-snug">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent animate-gradient-x">GL Series Switch Disconnectors</span>
              <br className="hidden sm:block" />
              <span>& Changeover Switches</span>
              <span className="block h-2 mt-2 w-24 mx-auto md:mx-0 bg-orange-400 dark:bg-orange-600 rounded-full animate-underline" />
            </h1>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              {[
                { icon: <ShieldIcon size={16} />, text: 'UL98 Certified' },
                { icon: <ZapIcon size={16} />, text: 'Up to 1000A' },
                { icon: <SettingsIcon size={16} />, text: 'Compact Design' },
              ].map(({ icon, text }, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 px-3 py-2 rounded-full hover:bg-orange-200 dark:hover:bg-orange-800/50 transition duration-200 hover:scale-105 cursor-pointer group"
                >
                  <span className="text-orange-600 dark:text-orange-400 group-hover:rotate-12 transition-transform duration-200">
                    {icon}
                  </span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{text}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <button
                className="group flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400 dark:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transform hover:-translate-y-1 hover:scale-105"
                onClick={() => setIsModalOpen(true)}
              >
                <MailIcon size={20} className="group-hover:animate-bounce transition-all duration-200" />
                Contact Sales
              </button>
              <button
                className="group flex items-center justify-center gap-2 border-2 border-orange-600 text-orange-600 dark:border-orange-400 dark:text-orange-400 px-6 py-3 rounded-lg hover:bg-orange-600 hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transform hover:-translate-y-1 hover:scale-105"
                onClick={() => setToast(true)}
              >
                <DownloadIcon size={20} className="group-hover:animate-bounce transition-all duration-200" />
                Download Brochure
              </button>
            </div>
          </div>

          {/* Image content */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-4 border-orange-300 dark:border-orange-900 opacity-60 animate-glow" />
                <div className="absolute w-full h-full rounded-full border-2 border-orange-400 dark:border-orange-300 opacity-40 animate-ping delay-1000" />
                <div className="absolute w-full h-full rounded-full border border-orange-500 dark:border-orange-200 opacity-30 animate-pulse delay-2000" />
              </div>
              <div className="relative bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 w-full aspect-square transition-all duration-500 hover:scale-110 hover:rotate-2">
                <img src={image1} alt="Switch Disconnectors and Changeover Switches" className="object-contain w-full h-full" />
              </div>
              {/* Floating dots */}
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-orange-400 rounded-full animate-bounce opacity-60 delay-500" />
              <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-orange-300 rounded-full animate-bounce opacity-60 delay-1500" />
              <div className="absolute top-1/2 -right-6 w-1 h-1 bg-orange-500 rounded-full animate-pulse opacity-60 delay-2500" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} ariaLabel="Contact Sales Form">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Contact Sales</h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setIsModalOpen(false);
            setToast(true);
          }}
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 mb-1">Name</label>
            <input id="name" name="name" type="text" required className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-950 dark:text-white" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-1">Email</label>
            <input id="email" name="email" type="email" required className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-950 dark:text-white" />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 mb-1">Message</label>
            <textarea id="message" name="message" rows={3} required className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-950 dark:text-white" />
          </div>
          <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400 dark:text-gray-900 transition font-semibold">Send</button>
        </form>
      </Modal>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-orange-600 dark:bg-orange-500 text-white dark:text-gray-900 px-6 py-3 rounded shadow-lg z-50 animate-fadeIn">
          Brochure coming soon!
        </div>
      )}
    </section>
  );
};
