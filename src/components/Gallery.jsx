import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getImagesByCategory } from '../assets/imageIndex';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  window.scroll(0,0);
  // Get gallery images from local assets
  const galleryImageUrls = getImagesByCategory('gallery');

  const galleryImages = [
    {
      id: 1,
      url: galleryImageUrls[0],
      alt: "Professional valet team in Dubai",
      title: "Our Professional Team",
      description: "Experienced valets ready to serve",
      category: "team"
    },
    {
      id: 2,
      url: galleryImageUrls[1],
      alt: "Dubai skyline and modern architecture",
      title: "Dubai Excellence",
      description: "Serving the heart of UAE",
      category: "location"
    },
    {
      id: 3,
      url: galleryImageUrls[2],
      alt: "Luxury vehicles under professional care",
      title: "Luxury Car Care",
      description: "Premium service for premium vehicles",
      category: "vehicles"
    },
    {
      id: 4,
      url: galleryImageUrls[3],
      alt: "Event valet services",
      title: "Event Services",
      description: "Making your events memorable",
      category: "events"
    },
    {
      id: 5,
      url: galleryImageUrls[4],
      alt: "Premium parking solutions",
      title: "Premium Solutions",
      description: "Tailored parking management",
      category: "services"
    },
    {
      id: 6,
      url: galleryImageUrls[5],
      alt: "Professional service standards",
      title: "Service Excellence",
      description: "Maintaining the highest standards",
      category: "services"
    },
    {
      id: 7,
      url: galleryImageUrls[6] || galleryImageUrls[0],
      alt: "Corporate event valet",
      title: "Corporate Events",
      description: "Professional service for business functions",
      category: "events"
    },
    {
      id: 8,
      url: galleryImageUrls[7] || galleryImageUrls[1],
      alt: "Luxury vehicle handling",
      title: "Luxury Fleet",
      description: "Expert care for premium automobiles",
      category: "vehicles"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Images' },
    { id: 'team', label: 'Our Team' },
    { id: 'vehicles', label: 'Vehicles' },
    { id: 'events', label: 'Events' },
    { id: 'services', label: 'Services' },
    { id: 'location', label: 'Locations' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
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
              Our <span className="text-red-500">Gallery</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto">
              Discover the excellence behind our valet services through our collection of professional moments
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
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
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category.id
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

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                        <p className="text-sm text-gray-200">{image.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
