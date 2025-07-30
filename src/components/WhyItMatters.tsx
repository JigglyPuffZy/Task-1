import React from 'react';
import { TrendingUpIcon, ShieldIcon, DollarSignIcon, GlobeIcon, UsersIcon, AwardIcon } from 'lucide-react';

export const WhyItMatters = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Why It Matters
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The GL Series isn't just another electrical component—it's a strategic investment in reliability, safety, and operational excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Value Proposition */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Strategic Value
              </h3>
              
              <div className="space-y-6">
                {/* Reliability & Uptime */}
                <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUpIcon size={24} className="text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Reliability & Uptime</h4>
                      <p className="text-gray-700 dark:text-gray-200 mb-3">
                        Unplanned downtime costs industrial facilities an average of $260,000 per hour. The GL Series ensures continuous operation with 99.9% reliability.
                      </p>
                      <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                        <li>• 99.9% operational reliability</li>
                        <li>• 24/7 continuous operation capability</li>
                        <li>• Self-cleaning contacts reduce maintenance</li>
                        <li>• Advanced arc management prevents failures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Safety & Compliance */}
                <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900 dark:to-red-800 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <ShieldIcon size={24} className="text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Safety & Compliance</h4>
                      <p className="text-gray-700 dark:text-gray-200 mb-3">
                        Electrical accidents cost businesses millions annually. The GL Series meets or exceeds all safety standards with comprehensive protection.
                      </p>
                      <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                        <li>• UL98, UL508A compliance</li>
                        <li>• IP66, IP69K, NEMA 4X protection</li>
                        <li>• Visible contact status for safe operation</li>
                        <li>• Padlock provision prevents unauthorized access</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Cost Efficiency */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <DollarSignIcon size={24} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Cost Efficiency</h4>
                      <p className="text-gray-700 dark:text-gray-200 mb-3">
                        The compact design and modular architecture deliver significant cost savings across installation, maintenance, and operation.
                      </p>
                      <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                        <li>• 50% space savings vs. traditional switches</li>
                        <li>• 30% reduction in installation time</li>
                        <li>• 40% lower maintenance costs</li>
                        <li>• Modular design reduces inventory needs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact & Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Impact & Benefits
              </h3>
              
              <div className="space-y-6">
                {/* For Industrial Applications */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <GlobeIcon size={20} className="text-orange-600 dark:text-orange-400" />
                    For Industrial Applications
                  </h4>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Prevents costly production line shutdowns</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Ensures worker safety in harsh environments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Reduces equipment damage from power issues</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Simplifies compliance with safety regulations</span>
                    </div>
                  </div>
                </div>

                {/* For Electrical Engineers */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <UsersIcon size={20} className="text-blue-600 dark:text-blue-400" />
                    For Electrical Engineers
                  </h4>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Accelerates project completion timelines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Reduces design complexity and material costs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Provides flexible mounting solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Ensures reliable system performance</span>
                    </div>
                  </div>
                </div>

                {/* For Modern Infrastructure */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                    <AwardIcon size={20} className="text-green-600 dark:text-green-400" />
                    For Modern Infrastructure
                  </h4>
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Supports smart grid and automation systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Enables scalable power distribution</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Facilitates renewable energy integration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Future-proofs electrical infrastructure</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI & Business Impact */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Return on Investment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 p-8 rounded-lg">
              <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">$260K</div>
              <div className="text-sm text-gray-700 dark:text-gray-200 mb-4">Average hourly downtime cost</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                GL Series prevents costly outages with 99.9% reliability
              </p>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-8 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">40%</div>
              <div className="text-sm text-gray-700 dark:text-gray-200 mb-4">Reduction in maintenance costs</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Self-cleaning contacts and modular design reduce upkeep
              </p>
            </div>
            <div className="text-center bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-8 rounded-lg">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">50%</div>
              <div className="text-sm text-gray-700 dark:text-gray-200 mb-4">Space savings achieved</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Compact design maximizes panel space utilization
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Ready to transform your electrical infrastructure?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400 dark:text-gray-900 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
              Calculate Your ROI
            </button>
            <button className="border border-orange-600 text-orange-600 dark:border-orange-400 dark:text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 dark:hover:bg-gray-900 transition shadow focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 