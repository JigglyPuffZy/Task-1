import React, { useState } from 'react';
import { FileTextIcon, DownloadIcon } from 'lucide-react';

export const TechnicalSpecs = () => {
  const [activeTab, setActiveTab] = useState('electrical');

  const specs = {
    electrical: [
      { label: 'Current Rating', value: '100-1000A', unit: '' },
      { label: 'Voltage Rating', value: '600V', unit: 'AC' },
      { label: 'Frequency', value: '50/60', unit: 'Hz' },
      { label: 'Poles', value: '3-4', unit: '' },
      { label: 'Breaking Capacity', value: '1000A', unit: 'AC-23A' },
      { label: 'Making Capacity', value: '1000A', unit: 'AC-23A' }
    ],
    mechanical: [
      { label: 'Operating Temperature', value: '-25°C to +70°C', unit: '' },
      { label: 'Storage Temperature', value: '-40°C to +85°C', unit: '' },
      { label: 'Relative Humidity', value: '95%', unit: 'at 40°C' },
      { label: 'Altitude', value: '2000m', unit: 'max' },
      { label: 'Vibration', value: '10-55Hz', unit: '0.35mm amplitude' },
      { label: 'Shock', value: '30g', unit: '11ms duration' }
    ],
    protection: [
      { label: 'Ingress Protection', value: 'IP66, IP69K', unit: '' },
      { label: 'NEMA Rating', value: '4X', unit: '' },
      { label: 'Arc Fault Protection', value: 'UL98', unit: 'certified' },
      { label: 'Dielectric Strength', value: '2500V', unit: 'AC 1min' },
      { label: 'Insulation Resistance', value: '100MΩ', unit: 'at 500V DC' },
      { label: 'Contact Resistance', value: '≤100μΩ', unit: '' }
    ],
    dimensions: [
      { label: 'Width (3-pole)', value: '108mm', unit: '' },
      { label: 'Width (4-pole)', value: '144mm', unit: '' },
      { label: 'Height', value: '180mm', unit: '' },
      { label: 'Depth', value: '85mm', unit: '' },
      { label: 'Weight (3-pole)', value: '2.1kg', unit: '' },
      { label: 'Weight (4-pole)', value: '2.8kg', unit: '' }
    ]
  };

  const tabs = [
    { id: 'electrical', label: 'Electrical', icon: '⚡' },
    { id: 'mechanical', label: 'Mechanical', icon: '🔧' },
    { id: 'protection', label: 'Protection', icon: '🛡️' },
    { id: 'dimensions', label: 'Dimensions', icon: '📏' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive specifications for the GL Series switch disconnectors
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex flex-wrap bg-gray-50 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-200 hover:bg-white dark:hover:bg-gray-600 ${
                    activeTab === tab.id
                      ? 'bg-white dark:bg-gray-600 text-orange-600 dark:text-orange-400 border-b-2 border-orange-600 dark:border-orange-400'
                      : 'text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specs[activeTab as keyof typeof specs].map((spec, index) => (
                  <div
                    key={index}
                    className="group bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-orange-300 dark:hover:border-orange-600 transition-all duration-200 hover:shadow-md"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors">
                        {spec.label}
                      </span>
                      <div className="text-right">
                        <span className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                          {spec.value}
                        </span>
                        {spec.unit && (
                          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                            {spec.unit}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="mt-8 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 p-8 rounded-xl border border-orange-200 dark:border-orange-700">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Need the complete specification sheet?
                </h3>
                <p className="text-gray-600 dark:text-gray-200">
                  Download our detailed technical documentation and installation guides.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/pdf%201.pdf"
                  download="pdf 1.pdf"
                  className="flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400 dark:text-gray-900 transition-all duration-200 hover:scale-105 shadow-lg font-semibold"
                >
                  <DownloadIcon size={18} />
                  Download Resume
                </a>
                <a
                  href="/pdf%201.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-orange-600 text-orange-600 dark:border-orange-400 dark:text-orange-400 px-6 py-3 rounded-lg hover:bg-orange-600 hover:text-white dark:hover:bg-orange-400 dark:hover:text-gray-900 transition-all duration-200 hover:scale-105 font-semibold"
                >
                  <FileTextIcon size={18} />
                  View Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
