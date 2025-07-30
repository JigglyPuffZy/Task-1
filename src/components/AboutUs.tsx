import React, { useState } from 'react';
import { 
  BuildingIcon, 
  UsersIcon, 
  GlobeIcon, 
  AwardIcon, 
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon
} from 'lucide-react';

export const AboutUs = () => {
  const [activeImage, setActiveImage] = useState(0);

  const stats = [
    { number: '100', label: 'Countries', icon: GlobeIcon },
    { number: '90', label: 'Importers', icon: UsersIcon },
    { number: '14', label: 'Foreign Subsidiaries', icon: BuildingIcon }
  ];

  const history = [
    { year: '1922', title: 'Company Foundation', description: 'LOVATO Electric was set up in Bergamo to manufacture air-break and oil-break switches.' },
    { year: '1948', title: 'Production Transition', description: 'Transitioned production from switches to bus-bar or terminal board contactors.' },
    { year: '1960', title: 'One-Piece Contactors', description: 'Started production of one-piece contactors that were to gradually replace the bus-bar or terminal board versions.' },
    { year: '1963', title: 'New Factory', description: 'New factory (now central headquarters) in Gorle (BERGAMO) covering 14,000 m².' },
    { year: '1975', title: 'Electronic Products', description: 'Added electronic product lines to the "historical" production of electromechanical components.' },
    { year: '1979', title: 'First Foreign Factory', description: 'Opened the first foreign LOVATO Electric factory.' },
    { year: '1989', title: 'Germany Expansion', description: 'Opened LOVATO Electric in Germany.' },
    { year: '1991', title: 'UK & Czech Republic', description: 'Opened LOVATO Electric in United Kingdom and Czech Republic.' },
    { year: '1992', title: 'ISO 9001 Certification', description: 'Achieved Quality System certification in compliance with ISO 9001 standards.' },
    { year: '1999', title: 'SM Series Launch', description: 'Launched the SM series, motor protection circuit breakers with thermal and magnetic trip releases.' },
    { year: '2000', title: 'Spain & Limit Switches', description: 'Opened LOVATO Electric in Spain. Purchased the limit switches division business from Reiter S.r.l. company.' },
    { year: '2001', title: 'USA & Laboratory Certification', description: 'Opened LOVATO Electric in USA. Achieved ACAE/LOVAG certification, per European EN 45001 standards, for our test laboratory.' },
    { year: '2002', title: 'ISO 14001 & R&D Facility', description: 'Obtained the Environment Management System certification according to ISO 14001 standard requirements and inaugurated of the new R&D facility (3,500 m²).' },
    { year: '2005', title: 'Poland Expansion', description: 'Opened LOVATO Electric in Poland.' },
    { year: '2006', title: 'Orange System Launch', description: 'Launched the Orange system of motor starting and power applications.' },
    { year: '2007', title: 'Canada Expansion', description: 'Opened LOVATO Electric in Canada.' },
    { year: '2009', title: 'GA Series Launch', description: 'Launched GA series 16A to 125A switch disconnectors.' },
    { year: '2010', title: 'DMG Series Launch', description: 'Launched DMG series, multimeters and power analyzers.' },
    { year: '2011', title: 'UAE Expansion', description: 'Opened LOVATO Electric in UAE.' },
    { year: '2012', title: 'Platinum Series & Turkey', description: 'Launched Platinum series of 22 Ømm pushbuttons and selectors. Opened LOVATO Electric in Turkey.' },
    { year: '2014', title: 'China, Romania & OHSAS 18001', description: 'Opened LOVATO Electric China and Romania. Achieved OHSAS 18001 (Occupational Health and Safety Assessment System).' },
    { year: '2015', title: 'France Expansion', description: 'Opened LOVATO Electric France.' },
    { year: '2019', title: 'Croatia Acquisition', description: 'Acquisition agreement with Koncar NSP signed in Zagreb (Croatia). LOVATO Koncar d.o.o. is the 14th subsidiary of LOVATO Electric.' },
    { year: '2020', title: 'Switzerland & Energy Management', description: 'Opened LOVATO Electric in Switzerland. Obtained the Energy Management System (EMS) certification to UNI CEI EN ISO 50001:2018.' }
  ];

  const galleryImages = [
    '/Logo_lovatoelectric.png',
    '/Logo_lovatoelectric.png',
    '/Logo_lovatoelectric.png',
    '/Logo_lovatoelectric.png',
    '/Logo_lovatoelectric.png',
    '/Logo_lovatoelectric.png'
  ];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div id="about" className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              About LOVATO Electric
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-200 mb-8">
              100 Years of Innovation in Electrical Engineering
            </p>
            <div className="flex items-center justify-center gap-2 text-orange-600 dark:text-orange-400">
              <PlayIcon size={24} />
              <span className="font-semibold">Watch Our Story</span>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                  Our Company
                </h2>
                <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
                  <p>
                    The company started from the dawn of electrical engineering to today's mix of electronics, 
                    automation and software. The wide range of products is designed, industrialized, tested and 
                    built by LOVATO Electric according to the highest quality standards.
                  </p>
                  <p>
                    A team of designers and researchers develops innovative and reliable products using the most 
                    modern software tools available on the market and an internal test laboratory (accredited in 
                    accordance with EN ISO/IEC 17025) carries out tests according to national and international standards.
                  </p>
                  <p>
                    For 100 years, LOVATO Electric has been designing and manufacturing low voltage electrical 
                    devices for industrial applications. Founded in 1922 in Bergamo (Italy), LOVATO Electric is 
                    a private company managed by the same family of entrepreneurs for 4 generations.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-800 dark:to-orange-900 p-8 rounded-2xl">
                  <div className="text-center">
                    <AwardIcon size={64} className="text-orange-600 dark:text-orange-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                      Quality & Innovation
                    </h3>
                    <p className="text-gray-600 dark:text-gray-200">
                      Four generations of family leadership, delivering excellence in electrical engineering 
                      with cutting-edge technology and unwavering commitment to quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon size={32} className="text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* US Operations */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8">
              US Operations
            </h2>
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-8 rounded-xl border border-blue-200 dark:border-blue-700">
              <BuildingIcon size={48} className="text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                Lovato Electric, Inc. (USA) is headquartered in Chesapeake, Virginia and supports the U.S. market 
                through authorized distributor partners. For general inquires, authorized distributors, or information 
                requests, please go to the Contact Us page, select Information Request, complete the required information 
                and submit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
              Our History
            </h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-orange-300 dark:bg-orange-600"></div>
              
              <div className="space-y-8">
                {history.map((item, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-orange-600 dark:bg-orange-400 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="flex items-center gap-3 mb-3">
                          <CalendarIcon size={20} className="text-orange-600 dark:text-orange-400" />
                          <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
              Gallery
            </h2>
            
            <div className="relative">
              {/* Main Image */}
              <div className="relative bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden aspect-video">
                <img
                  src={galleryImages[activeImage]}
                  alt={`Gallery image ${activeImage + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">LOVATO Electric</h3>
                    <p className="text-lg">Manufacturing Excellence</p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <ChevronLeftIcon size={24} className="text-gray-600 dark:text-gray-300" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
              >
                <ChevronRightIcon size={24} className="text-gray-600 dark:text-gray-300" />
              </button>

              {/* Thumbnails */}
              <div className="flex justify-center gap-4 mt-6">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      activeImage === index
                        ? 'border-orange-600 dark:border-orange-400'
                        : 'border-gray-300 dark:border-gray-600 hover:border-orange-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}; 