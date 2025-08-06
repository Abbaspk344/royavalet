import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import { getImagesByCategory } from '../assets/imageIndex';

const Services = ({ onServiceSelect }) => {
  const [expandedService, setExpandedService] = useState(null);

  // Get service images from local assets
  const serviceImages = getImagesByCategory('services');

  const services = [
    {
      id: 1,
      title: "VALET PARKING",
      description: "We provide a certified and professional driver for your vehicle safety and security.",
      icon: "🚗",
      image: serviceImages[0],
      details: "Our professional valets ensure your vehicle is parked safely and securely while you enjoy your time at your destination. We handle luxury cars, sports cars, and all vehicle types with the utmost care.",
      features: ["Professional certified valets", "Insurance coverage", "24/7 availability", "Luxury car expertise"]
    },
    {
      id: 2,
      title: "PARKING MANAGEMENT",
      description: "Our professionals can create a comprehensive parking management program tailored to your needs.",
      icon: "🅿️",
      image: serviceImages[1],
      details: "Complete parking management solutions for businesses, events, and residential complexes. We optimize space utilization and ensure smooth traffic flow.",
      features: ["Space optimization", "Traffic flow management", "Digital monitoring", "Custom solutions"]
    },
    {
      id: 3,
      title: "BUGGY DRIVERS",
      description: "We offer professional buggy drivers to transport guests comfortably across large venues.",
      icon: "🚙",
      image: serviceImages[2],
      details: "Professional buggy drivers for golf courses, resorts, and large venues to transport guests comfortably and safely.",
      features: ["Experienced drivers", "Well-maintained vehicles", "Route optimization", "Guest comfort priority"]
    },
    {
      id: 4,
      title: "PRIVATE EVENTS",
      description: "Specialized valet services for weddings, corporate events, and private parties.",
      icon: "🎉",
      image: serviceImages[3],
      details: "Make your special events memorable with our premium valet services. We handle everything from intimate gatherings to large corporate functions.",
      features: ["Event planning support", "Flexible scheduling", "Premium service", "Guest satisfaction guarantee"]
    },
    {
      id: 5,
      title: "TRAFFIC CONTROL MARSHALLS",
      description: "Professional traffic control marshalls to ensure smooth traffic flow at your events.",
      icon: "🚦",
      image: serviceImages[4],
      details: "Certified traffic control marshalls ensure safe and efficient traffic management for events, construction sites, and special occasions.",
      features: ["Certified professionals", "Safety equipment provided", "Emergency protocols", "Coordination with authorities"]
    }
  ];

  const handleServiceToggle = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
    if (onServiceSelect) {
      onServiceSelect(services.find(s => s.id === serviceId));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            OUR SERVICES
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive valet and parking solutions tailored to meet your specific needs
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group"
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-lg overflow-hidden h-full cursor-pointer"
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => handleServiceToggle(service.id)}
              >
                {/* Service Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                    <motion.div
                      className="text-2xl sm:text-4xl bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-4 sm:p-6">
                  <motion.h3
                    className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 group-hover:text-teal-600 transition-colors"
                    layoutId={`title-${service.id}`}
                  >
                    {service.title}
                  </motion.h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <motion.button
                    className="flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors text-sm sm:text-base"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {expandedService === service.id ? 'Show Less' : 'Learn More'}
                    <motion.svg
                      className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200"
                      >
                        <motion.p
                          className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          {service.details}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Key Features:</h4>
                          <ul className="space-y-1 sm:space-y-2">
                            {service.features.map((feature, index) => (
                              <motion.li
                                key={index}
                                className="flex items-start text-xs sm:text-sm text-gray-600"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                              >
                                <span className="text-teal-500 mr-2 mt-0.5 flex-shrink-0">✓</span>
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-16 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-xl w-full sm:w-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get Custom Quote for Your Needs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

Services.propTypes = {
  onServiceSelect: PropTypes.func
};

Services.defaultProps = {
  onServiceSelect: null
};

export default Services;
