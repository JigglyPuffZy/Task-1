import React from 'react';
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-gray-800 dark:bg-gray-950 text-white dark:text-gray-300 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img src="/Logo_lovatoelectric.png" alt="LOVATO Electric Logo" className="h-10 mb-4" />
            <p className="text-gray-300 dark:text-gray-400 mb-4">
              LOVATO <span className="dark:text-white">Electric</span> specializes in electrical components for
              industrial automation and energy management.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-400 dark:hover:text-orange-500 transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-400 dark:hover:text-orange-500 transition">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-400 dark:hover:text-orange-500 transition">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-400 dark:hover:text-orange-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 dark:text-gray-400 hover:text-orange-400 dark:hover:text-orange-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPinIcon size={20} className="text-orange-400 dark:text-orange-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400">
                  LOVATO <span className="dark:text-white">Electric</span> Headquarters, 8 Industrial Way, Deptford, NJ
                  08096
                </span>
              </div>
              <div className="flex items-center">
                <PhoneIcon size={20} className="text-orange-400 dark:text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400">+1 (856) 751-3579</span>
              </div>
              <div className="flex items-center">
                <MailIcon size={20} className="text-orange-400 dark:text-orange-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300 dark:text-gray-400">info@lovatousa.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} LOVATO <span className="dark:text-white">Electric</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};