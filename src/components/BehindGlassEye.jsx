import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getImagesByCategory } from '../assets/imageIndex';

const BehindGlassEye = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Get gallery images from local assets
  const galleryImageUrls = getImagesByCategory('gallery');

  const galleryImages = [
    {
      id: 1,
      url: galleryImageUrls[0],
      alt: "Professional valet team in Dubai",
      title: "Our Professional Team",
      description: "Experienced valets ready to serve"
    },
    {
      id: 2,
      url: galleryImageUrls[1],
      alt: "Dubai skyline and modern architecture",
      title: "Dubai Excellence",
      description: "Serving the heart of UAE"
    },
    {
      id: 3,
      url: galleryImageUrls[2],
      alt: "Luxury vehicles under professional care",
      title: "Luxury Car Care",
      description: "Premium service for premium vehicles"
    },
    {
      id: 4,
      url: galleryImageUrls[3],
      alt: "Event valet services",
      title: "Event Services",
      description: "Making your events memorable"
    },
    {
      id: 5,
      url: galleryImageUrls[4],
      alt: "Premium parking solutions",
      title: "Premium Solutions",
      description: "Tailored parking management"
    },
    {
      id: 6,
      url: galleryImageUrls[5],
      alt: "Professional service standards",
      title: "Service Excellence",
      description: "Maintaining highest standards"
    },
    {
      id: 7,
      url: galleryImageUrls[6],
      alt: "Modern valet technology",
      title: "Modern Technology",
      description: "Advanced parking solutions"
    },
    {
      id: 8,
      url: galleryImageUrls[7],
      alt: "Customer satisfaction focus",
      title: "Customer Focus",
      description: "Your satisfaction is our priority"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Customers", icon: "😊" },
    { number: "50,000+", label: "Cars Parked", icon: "🚗" },
    { number: "99.9%", label: "Satisfaction Rate", icon: "⭐" },
    { number: "24/7", label: "Service Available", icon: "🕐" }
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Behind the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                Glass Eye
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Some memories of ROYA VALET PARKING SERVICES LLC Services Behind The Glass Eye. 
              Discover the stories, moments, and experiences that define our commitment 
              to excellence in valet parking services across the UAE.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-lg text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-teal-600 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* <motion.button
              className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE MORE
            </motion.button> */}
          </motion.div>

          {/* Right Gallery */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleImageClick(image)}
                >
                  <motion.img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="absolute bottom-4 left-4 text-white">
                      <motion.h3
                        className="font-semibold mb-1"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {image.title}
                      </motion.h3>
                      <motion.p
                        className="text-sm text-gray-200"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {image.description}
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Zoom Icon */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
              
              {/* Close Button */}
              <motion.button
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center"
                onClick={closeModal}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BehindGlassEye;
