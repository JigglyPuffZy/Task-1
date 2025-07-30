import React from 'react';
import { PackageIcon, ZapIcon, ShieldIcon, AwardIcon } from 'lucide-react';

export const WhatItIs = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            What It Is
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The LOVATO Electric GL Series represents the pinnacle of electrical switching technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Overview */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                GL Series Switch Disconnectors & Changeover Switches
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
                A comprehensive line of high-performance electrical switching devices designed for industrial and commercial applications, capable of handling currents up to 1000A with unmatched reliability and safety.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <ZapIcon size={16} className="text-orange-600 dark:text-orange-400" />
                  <span className="text-gray-700 dark:text-gray-200">Up to 1000A</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldIcon size={16} className="text-orange-600 dark:text-orange-400" />
                  <span className="text-gray-700 dark:text-gray-200">UL98 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <PackageIcon size={16} className="text-orange-600 dark:text-orange-400" />
                  <span className="text-gray-700 dark:text-gray-200">Compact Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <AwardIcon size={16} className="text-orange-600 dark:text-orange-400" />
                  <span className="text-gray-700 dark:text-gray-200">Industry Leading</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Core Components</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Switch Disconnectors</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Manual switching devices that provide safe isolation and switching of electrical circuits
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Changeover Switches</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Automatic or manual switches for transferring power between multiple sources
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Technical Specifications
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Electrical Ratings</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Current Rating:</span>
                    <p className="text-gray-600 dark:text-gray-400">100-1000A</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Voltage Rating:</span>
                    <p className="text-gray-600 dark:text-gray-400">600V AC</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Frequency:</span>
                    <p className="text-gray-600 dark:text-gray-400">50/60Hz</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">Poles:</span>
                    <p className="text-gray-600 dark:text-gray-400">3-4 Poles</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Protection & Safety</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">IP66, IP69K, NEMA 4X protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">UL98 arc fault protection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Padlock provision for safety</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Visible contact status window</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">Installation & Mounting</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Any mounting position</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Panel or surface mounting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Cable range: 14-750 MCM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">Modular design for flexibility</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 