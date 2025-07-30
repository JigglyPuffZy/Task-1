import React, { useState } from 'react';
import { MailIcon, CheckIcon, CalculatorIcon, PhoneIcon, BuildingIcon, FileTextIcon } from 'lucide-react';

export const QuoteRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    currentRating: '',
    quantity: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - in real app, this would send to backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '', email: '', company: '', phone: '', projectType: '', currentRating: '', quantity: '', message: ''
      });
    }, 3000);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Request a Quote
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get pricing and availability for your project. Our team will respond within 24 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quote Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MailIcon size={24} className="text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  Get Your Quote
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Fill out the form below and we'll get back to you quickly
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white transition-all duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white transition-all duration-200"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white transition-all duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white transition-all duration-200"
                  >
                    <option value="">Select project type</option>
                    <option value="industrial">Industrial</option>
                    <option value="commercial">Commercial</option>
                    <option value="data-center">Data Center</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="utility">Utility</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Current Rating
                    </label>
                    <select
                      name="currentRating"
                      value={formData.currentRating}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white transition-all duration-200"
                    >
                      <option value="">Select rating</option>
                      <option value="100A">100A</option>
                      <option value="200A">200A</option>
                      <option value="400A">400A</option>
                      <option value="630A">630A</option>
                      <option value="800A">800A</option>
                      <option value="1000A">1000A</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Quantity
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white transition-all duration-200"
                      placeholder="1"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-gray-700 dark:text-white transition-all duration-200"
                    placeholder="Tell us about your specific requirements, timeline, or any other details..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400 dark:text-gray-900 transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitted ? (
                    <>
                      <CheckIcon size={20} />
                      Quote Requested!
                    </>
                  ) : (
                    <>
                      <CalculatorIcon size={20} />
                      Request Quote
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>

            {/* Benefits & Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 p-8 rounded-xl border border-orange-200 dark:border-orange-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Why Choose LOVATO Electric?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-600 dark:bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckIcon size={16} className="text-white dark:text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Fast Response</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-200">Get pricing within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-600 dark:bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckIcon size={16} className="text-white dark:text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Expert Support</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-200">Technical assistance from our engineers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-600 dark:bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckIcon size={16} className="text-white dark:text-gray-900" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">Competitive Pricing</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-200">Best value for industrial quality</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                  Need Immediate Assistance?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <PhoneIcon size={20} className="text-orange-600 dark:text-orange-400" />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">Call Us</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MailIcon size={20} className="text-orange-600 dark:text-orange-400" />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">Email Us</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">sales@lovatoelectric.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BuildingIcon size={20} className="text-orange-600 dark:text-orange-400" />
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-white">Visit Us</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Find your nearest distributor</p>
                    </div>
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