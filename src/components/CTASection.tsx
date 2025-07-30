import React from 'react';
export const CTASection = () => {
  return <section className="bg-orange-600 text-white dark:bg-gray-900 dark:text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white dark:text-white">
          Compact. Powerful. Built for modern panels.
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white dark:text-white">
          Discover how LOVATO Electric's GL Series can enhance your switching
          applications with industry-leading features and reliability.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-orange-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            Contact Sales
          </button>
          <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-orange-700 transition dark:border-white dark:text-white dark:hover:bg-orange-800">
            Download Brochure
          </button>
        </div>
      </div>
    </section>;
};