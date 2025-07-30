import React from 'react';
import { BoltIcon, SettingsIcon, ShieldIcon, PackageIcon } from 'lucide-react';
export const FeaturesSection = () => {
  return <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Fast, Flexible Switching
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
              <BoltIcon size={24} className="text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Instant Actuation</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Instant actuation for AC-23A loads with direct or door-interlocked
              operation
            </p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
              <SettingsIcon size={24} className="text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Modular Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Modular 4-pole setup for maximum flexibility in your applications
            </p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
              <PackageIcon size={24} className="text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Compact & Customizable
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Smallest UL98 models (100–800A) with pre-assembled 3- and 4-pole
              versions
            </p>
          </div>
          {/* Feature Card 4 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
              <ShieldIcon size={24} className="text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Safety & Protection</h3>
            <p className="text-gray-600 dark:text-gray-300">
              IP66, IP69K, NEMA 4X protection with padlock fittings and
              UL508A-compliant interlock override
            </p>
          </div>
          {/* Feature Card 5 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
              <SettingsIcon size={24} className="text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Versatile Mounting</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Any mounting position with visible contact status window for easy
              monitoring
            </p>
          </div>
          {/* Feature Card 6 */}
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:shadow-md transition">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4">
              <PackageIcon size={24} className="text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Accessories</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Snap-on parts, extension shafts, covers, and screw-mount terminals
              available
            </p>
          </div>
        </div>
      </div>
    </section>;
};