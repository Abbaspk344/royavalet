import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getImagesByCategory } from '../assets/imageIndex';
import PropTypes from 'prop-types';

const Hero = ({ onGetQuote, onLearnMore }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(true);
  const [progress, setProgress] = useState(0);

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
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Resolve even on error to not block the UI
          img.src = image.url;
        });
      });

      await Promise.all(imagePromises);
      setIsLoaded(true);
    };

    preloadImages();
  }, [heroImages]);

  useEffect(() => {
    if (!isLoaded) return;

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / 80); // 8000ms / 100ms = 80 steps
      });
    }, 100);

    // Image change interval
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
      setProgress(0); // Reset progress when image changes
    }, 8000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(imageInterval);
    };
  }, [heroImages.length, isLoaded]);

  // Manual navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
    setProgress(0); // Reset progress on manual navigation
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
    setProgress(0); // Reset progress on manual navigation
  };



  // const scrollToNextSection = () => {
  //   const nextSection = document.querySelector('#services');
  //   if (nextSection) {
  //     nextSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

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
    <section className="min-h-screen flex items-center py-4 md:py-16" id="hero">
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
              className="text-2xl md:text-5xl  font-bold text-gray-800 mb-4 md:mb-6 leading-tight"
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

          {/* Right Images - Next Level Animation */}
          <motion.div
            className="flex-1 w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative perspective-1000">
              {/* Floating Particles Background */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-teal-400/30 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.random() * 20 - 10, 0],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Main Image Container with 3D Effects */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  initial={{
                    opacity: 0,
                    rotateY: -90,
                    rotateX: 20,
                    scale: 0.8,
                    z: -200
                  }}
                  animate={{
                    opacity: 1,
                    rotateY: 0,
                    rotateX: 0,
                    scale: 1,
                    z: 0
                  }}
                  exit={{
                    opacity: 0,
                    rotateY: 90,
                    rotateX: -20,
                    scale: 1.2,
                    z: 200
                  }}
                  transition={{
                    duration: 1.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{
                    rotateY: 5,
                    rotateX: 5,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Glowing Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `linear-gradient(45deg,
                        rgba(20, 184, 166, 0.5),
                        rgba(59, 130, 246, 0.5),
                        rgba(168, 85, 247, 0.5),
                        rgba(236, 72, 153, 0.5))`,
                      backgroundSize: "400% 400%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Image with Advanced Effects */}
                  <motion.div
                    className="relative m-1 rounded-xl overflow-hidden"
                    initial={{ filter: "blur(10px) brightness(0.5)" }}
                    animate={{ filter: "blur(0px) brightness(1)" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                  <motion.img
                      src={heroImages[currentImageIndex].url}
                      alt={heroImages[currentImageIndex].alt}
                      className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover"
                      loading="eager"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />

                    {/* Dynamic Gradient Overlay */}
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg,
                          rgba(20, 184, 166, 0.1) 0%,
                          transparent 50%,
                          rgba(59, 130, 246, 0.1) 100%)`,
                      }}
                      animate={{
                        background: [
                          "linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)",
                          "linear-gradient(225deg, rgba(168, 85, 247, 0.1) 0%, transparent 50%, rgba(236, 72, 153, 0.1) 100%)",
                          "linear-gradient(315deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%, rgba(20, 184, 166, 0.1) 100%)",
                          "linear-gradient(45deg, rgba(236, 72, 153, 0.1) 0%, transparent 50%, rgba(168, 85, 247, 0.1) 100%)",
                          "linear-gradient(135deg, rgba(20, 184, 166, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.1) 100%)"
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Animated Light Rays */}
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: `conic-gradient(from 0deg at 50% 50%,
                          transparent 0deg,
                          rgba(255, 255, 255, 0.3) 45deg,
                          transparent 90deg,
                          rgba(255, 255, 255, 0.3) 135deg,
                          transparent 180deg)`
                      }}
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </motion.div>

                  {/* Enhanced Image Title with Glassmorphism */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4"
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                  >
                    <motion.div
                      className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 shadow-2xl"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.15)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      <motion.h3
                        className="text-base md:text-lg font-bold text-white drop-shadow-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                      >
                        {heroImages[currentImageIndex].title}
                      </motion.h3>

                      {/* Animated Underline */}
                      <motion.div
                        className="h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mt-2"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Corner Accent Elements */}
                  {[0, 1, 2, 3].map((corner) => (
                    <motion.div
                      key={corner}
                      className={`absolute w-6 h-6 border-2 border-white/50 ${
                        corner === 0 ? 'top-2 left-2 border-r-0 border-b-0' :
                        corner === 1 ? 'top-2 right-2 border-l-0 border-b-0' :
                        corner === 2 ? 'bottom-2 left-2 border-r-0 border-t-0' :
                        'bottom-2 right-2 border-l-0 border-t-0'
                      }`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 1.5 + corner * 0.1,
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <motion.button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.4)" }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Image Navigation Dots */}
              <motion.div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                {heroImages.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-teal-500 scale-125'
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    animate={index === currentImageIndex ? {
                      boxShadow: [
                        "0 0 0 0 rgba(20, 184, 166, 0.7)",
                        "0 0 0 10px rgba(20, 184, 166, 0)",
                        "0 0 0 0 rgba(20, 184, 166, 0)"
                      ]
                    } : {}}
                    transition={{
                      boxShadow: { duration: 1.5, repeat: Infinity }
                    }}
                  />
                ))}
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                className="absolute -bottom-16 left-0 right-0 h-1 bg-white/20 rounded-full overflow-hidden"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Only on desktop */}
      {/* <motion.div
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
      </motion.div> */}
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
