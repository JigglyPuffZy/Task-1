import { BoltIcon, SettingsIcon, ShieldIcon, PackageIcon } from 'lucide-react';
export const FeaturesSection = () => {
  return <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 max-w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-12 text-gray-800 dark:text-white">
          Fast, Flexible Switching
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {/* Feature Card 1 */}
          <div className="group bg-gray-50 dark:bg-gray-900 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 dark:hover:border-orange-600">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <BoltIcon size={20} className="sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400 group-hover:animate-pulse" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">Instant Actuation</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Instant actuation for AC-23A loads with direct or door-interlocked
              operation
            </p>
          </div>
          {/* Feature Card 2 */}
          <div className="group bg-gray-50 dark:bg-gray-900 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 dark:hover:border-orange-600">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <SettingsIcon size={20} className="sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400 group-hover:rotate-180 transition-transform duration-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">Modular Design</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Modular 4-pole setup for maximum flexibility in your applications
            </p>
          </div>
          {/* Feature Card 3 */}
          <div className="group bg-gray-50 dark:bg-gray-900 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 dark:hover:border-orange-600">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <PackageIcon size={20} className="sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400 group-hover:animate-bounce" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
              Compact & Customizable
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Smallest UL98 models (100–800A) with pre-assembled 3- and 4-pole
              versions
            </p>
          </div>
          {/* Feature Card 4 */}
          <div className="group bg-gray-50 dark:bg-gray-900 p-4 sm:p-5 md:p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 dark:hover:border-orange-600 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <ShieldIcon size={20} className="sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400 group-hover:animate-pulse" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">Safety & Protection</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              IP66, IP69K, NEMA 4X protection with padlock fittings and
              UL508A-compliant interlock override
            </p>
          </div>
          {/* Feature Card 5 */}
          <div className="group bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 dark:hover:border-orange-600">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <SettingsIcon size={24} className="text-orange-600 dark:text-orange-400 group-hover:rotate-90 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">Versatile Mounting</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Any mounting position with visible contact status window for easy
              monitoring
            </p>
          </div>
          {/* Feature Card 6 */}
          <div className="group bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 dark:hover:border-orange-600">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <PackageIcon size={24} className="text-orange-600 dark:text-orange-400 group-hover:animate-bounce" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">Accessories</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Snap-on parts, extension shafts, covers, and screw-mount terminals
              available
            </p>
          </div>
        </div>
      </div>
    </section>;
};