import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getImagesByCategory } from '../assets/imageIndex';

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get service images from local assets
  const serviceImages = getImagesByCategory('services');

  const services = [
    {
      id: 1,
      title: "VALET PARKING",
      description: "We provide a certified and professional driver for your vehicle safety and security.",
      icon: "🚗",
      image: serviceImages[0],
      category: "parking",
      details: "Our professional valets ensure your vehicle is parked safely and securely while you enjoy your time at your destination. We handle luxury cars, sports cars, and all vehicle types with the utmost care.",
      features: ["Professional certified valets", "Insurance coverage", "24/7 availability", "Luxury car expertise"],
      pricing: "Starting from AED 50/hour"
    },
    {
      id: 2,
      title: "PARKING MANAGEMENT",
      description: "Our professionals can create a comprehensive parking management program tailored to your needs.",
      icon: "🅿️",
      image: serviceImages[1],
      category: "management",
      details: "Complete parking management solutions for businesses, events, and residential complexes. We optimize space utilization and ensure smooth traffic flow.",
      features: ["Space optimization", "Traffic flow management", "Digital monitoring", "Custom solutions"],
      pricing: "Custom pricing based on requirements"
    },
    {
      id: 3,
      title: "BUGGY DRIVERS",
      description: "We offer professional buggy drivers to transport guests comfortably across large venues.",
      icon: "🚙",
      image: serviceImages[2],
      category: "transport",
      details: "Professional buggy drivers for golf courses, resorts, and large venues to transport guests comfortably and safely.",
      features: ["Experienced drivers", "Well-maintained vehicles", "Route optimization", "Guest comfort priority"],
      pricing: "Starting from AED 75/hour"
    },
    {
      id: 4,
      title: "PRIVATE EVENTS",
      description: "Specialized valet services for weddings, corporate events, and private parties.",
      icon: "🎉",
      image: serviceImages[3],
      category: "events",
      details: "Make your special events memorable with our premium valet services. We handle everything from intimate gatherings to large corporate functions.",
      features: ["Event planning support", "Flexible scheduling", "Premium service", "Guest satisfaction guarantee"],
      pricing: "Package deals available"
    },
    {
      id: 5,
      title: "CORPORATE SOLUTIONS",
      description: "Tailored parking solutions for corporate offices and business centers.",
      icon: "🏢",
      image: serviceImages[4],
      category: "corporate",
      details: "Professional parking management for corporate environments, ensuring smooth operations and employee satisfaction.",
      features: ["Employee parking management", "Visitor coordination", "Security protocols", "Monthly packages"],
      pricing: "Monthly contracts available"
    },
    {
      id: 6,
      title: "LUXURY CAR CARE",
      description: "Specialized handling and care for luxury and exotic vehicles.",
      icon: "💎",
      image: serviceImages[5],
      category: "luxury",
      details: "Expert care for high-end vehicles with specialized training and insurance coverage for luxury automobiles.",
      features: ["Luxury vehicle expertise", "Enhanced insurance", "White-glove service", "Detailed care protocols"],
      pricing: "Premium rates apply"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'parking', label: 'Parking' },
    { id: 'management', label: 'Management' },
    { id: 'events', label: 'Events' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'luxury', label: 'Luxury' },
    { id: 'transport', label: 'Transport' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const toggleExpanded = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-red-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Professional valet and parking management solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-full text-2xl">
                      {service.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-blue-600 font-semibold">{service.pricing}</span>
                      <motion.button
                        onClick={() => toggleExpanded(service.id)}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedService === service.id ? 'Show Less' : 'Learn More'}
                      </motion.button>
                    </div>

                    <AnimatePresence>
                      {expandedService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t pt-4"
                        >
                          <p className="text-gray-700 mb-4">{service.details}</p>
                          <div className="space-y-2">
                            <h4 className="font-semibold text-gray-900">Features:</h4>
                            <ul className="space-y-1">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="text-gray-600 flex items-center">
                                  <span className="text-green-500 mr-2">✓</span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Experience Premium Service?
            </h2>
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Contact us today for a customized quote tailored to your specific needs
            </p>
            <motion.button
              className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-colors shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
