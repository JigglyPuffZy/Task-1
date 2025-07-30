import React from 'react';
import { ZapIcon, SettingsIcon, ShieldIcon, PackageIcon, ClockIcon, WrenchIcon } from 'lucide-react';

export const WhatItDoes = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            What It Does
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Advanced electrical switching capabilities that power modern industrial applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Core Functionality */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Core Functionality
              </h3>
              
              <div className="space-y-6">
                {/* Instant Actuation */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <ZapIcon size={24} className="text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Instant Actuation</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        Provides immediate switching response for AC-23A loads with direct or door-interlocked operation, ensuring rapid circuit control when needed.
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Quick-make, quick-break operation</li>
                        <li>• Positive snap-action mechanism</li>
                        <li>• Over-center spring design</li>
                        <li>• Manual or motorized operation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Modular Design */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <SettingsIcon size={24} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Modular Design</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        Flexible 4-pole setup that adapts to various application requirements, allowing for maximum customization and scalability.
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Pre-assembled 3- and 4-pole versions</li>
                        <li>• Snap-on accessory compatibility</li>
                        <li>• Extension shaft options</li>
                        <li>• Customizable configurations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Safety & Protection */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <ShieldIcon size={24} className="text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Safety & Protection</h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        Comprehensive protection systems that ensure safe operation in harsh industrial environments with advanced arc management.
                      </p>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• IP66, IP69K, NEMA 4X protection</li>
                        <li>• Advanced arc chute design</li>
                        <li>• Magnetic blow-out system</li>
                        <li>• UL508A-compliant interlock override</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Application Examples */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Application Examples
              </h3>
              
              <div className="space-y-4">
                {/* Industrial Applications */}
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    <PackageIcon size={20} className="text-orange-600 dark:text-orange-400" />
                    Industrial Applications
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-200">
                    <div>
                      <strong>Manufacturing:</strong> Production line power distribution
                    </div>
                    <div>
                      <strong>Mining:</strong> Heavy equipment power switching
                    </div>
                    <div>
                      <strong>Oil & Gas:</strong> Pump and compressor control
                    </div>
                    <div>
                      <strong>Utilities:</strong> Power grid switching operations
                    </div>
                  </div>
                </div>

                {/* Commercial Applications */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                    <ClockIcon size={20} className="text-blue-600 dark:text-blue-400" />
                    Commercial Applications
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-200">
                    <div>
                      <strong>Data Centers:</strong> UPS and generator switching
                    </div>
                    <div>
                      <strong>Hospitals:</strong> Emergency power systems
                    </div>
                    <div>
                      <strong>Hotels:</strong> Backup power management
                    </div>
                    <div>
                      <strong>Office Buildings:</strong> Main power distribution
                    </div>
                  </div>
                </div>

                {/* Operational Benefits */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <WrenchIcon size={20} className="text-green-600 dark:text-green-400" />
                    Operational Benefits
                  </h4>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Reduced installation time with modular design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Lower maintenance costs with self-cleaning contacts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Enhanced safety with visible contact status</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Flexible mounting for space-constrained applications</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Performance Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">1000A</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Maximum Current Rating</div>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">IP69K</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Protection Rating</div>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">50%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Space Savings</div>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Continuous Operation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 