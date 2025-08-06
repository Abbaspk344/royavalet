import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getImagesByCategory } from '../assets/imageIndex';
import PropTypes from 'prop-types';

const Hero = ({ onGetQuote, onLearnMore }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Get hero images from local assets
  const heroImageUrls = getImagesByCategory('hero');

  // Hero images with local assets
  const heroImages = [
    {
      url: heroImageUrls[0],
      alt: 'Professional valet parking service in Dubai',
      title: 'Premium Valet Service'
    },
    {
      url: heroImageUrls[1],
      alt: 'Luxury car valet parking',
      title: 'Luxury Car Care'
    },
    {
      url: heroImageUrls[2],
      alt: 'Dubai skyline and modern parking',
      title: 'Dubai Excellence'
    },
    {
      url: heroImageUrls[3],
      alt: 'Royal valet premium services',
      title: 'Royal Treatment'
    }
  ];

  useEffect(() => {
    // Preload images
    const preloadImages = async () => {
      const imagePromises = heroImages.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = image.url;
        });
      });

      try {
        await Promise.all(imagePromises);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoaded(true); // Still show content even if images fail
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [heroImages.length, isLoaded]);



  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isLoaded) {
    return (
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <motion.div
          className="text-white text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400 mx-auto mb-4"></div>
          <p className="text-lg">Loading...</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center py-8 md:py-16" id="hero">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.h1
              className=" sm:text-3xl md:text-5xl  font-bold text-gray-800 mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              The Quickest Route To
              <br />
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Stress-Free Parking,
              </motion.span>
              <br />
              Right At Your Fingertips.
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              Professional valet parking services across Dubai and UAE.
              Experience luxury, convenience, and peace of mind.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div
            className="flex-1 w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="relative rounded-2xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                >
                  <img
                    src={heroImages[currentImageIndex].url}
                    alt={heroImages[currentImageIndex].alt}
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Image Title */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 md:p-4">
                      <h3 className="text-base md:text-lg font-semibold text-gray-800">
                        {heroImages[currentImageIndex].title}
                      </h3>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Only on desktop */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        onClick={scrollToNextSection}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to services section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

Hero.propTypes = {
  onGetQuote: PropTypes.func,
  onLearnMore: PropTypes.func
};

Hero.defaultProps = {
  onGetQuote: () => {},
  onLearnMore: () => {}
};

export default Hero;
