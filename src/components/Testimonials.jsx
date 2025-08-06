import { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { getImagesByCategory } from '../assets/imageIndex';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [displayRating, setDisplayRating] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Get testimonial images from local assets
  const testimonialImages = getImagesByCategory('testimonials');

  const testimonials = [
    {
      id: 1,
      name: "Magda Witless",
      location: "Dubai, UAE",
      rating: 5,
      avatar: testimonialImages[0],
      text: "I just moved to Dubai, my family organized an event in Jumeirah. I needed to find a valet parking service and I found Royavalet quickly for I contacted several companies and the best parking service. After comparing prices and services, I chose Royavalet. They offered the most competitive prices and the best service compared to other providers. I highly recommend them for outstanding services.",
      service: "Event Valet Service"
    },
    {
      id: 2,
      name: "Ahmed Al-Rashid",
      location: "Abu Dhabi, UAE",
      rating: 5,
      avatar: testimonialImages[1],
      text: "Exceptional service! The valets were professional, courteous, and handled my luxury car with utmost care. The convenience of having reliable valet parking for our corporate events has been invaluable. Royavalet has become our go-to service provider.",
      service: "Corporate Events"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      location: "Sharjah, UAE",
      rating: 5,
      avatar: testimonialImages[2],
      text: "Outstanding experience from start to finish. The booking process was seamless, the valets arrived on time, and the service exceeded our expectations. Our wedding guests were impressed with the professional service. Thank you Royavalet!",
      service: "Wedding Valet Service"
    },
    {
      id: 4,
      name: "Mohammed Hassan",
      location: "Dubai, UAE",
      rating: 5,
      avatar: testimonialImages[0], // Reusing first image for variety
      text: "I've been using Royavalet for my business events for over a year now. Their consistency, reliability, and attention to detail is remarkable. The team is always professional and the service is worth every dirham. Highly recommended!",
      service: "Business Events"
    }
  ];

  // Count-up animation for rating
  useEffect(() => {
    if (!hasAnimated) {
      const controls = animate(0, 4.9, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => {
          setDisplayRating(value);
        },
        onComplete: () => {
          setHasAnimated(true);
        }
      });

      return () => controls.stop();
    }
  }, [hasAnimated]);

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <motion.span
        key={index}
        className={`text-2xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
        whileHover={{ scale: 1.2 }}
      >
        ★
      </motion.span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-4 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {displayRating.toFixed(1)}
            </motion.span>

            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Out of 5 - What Our Clients Say
            </motion.h2>
          </motion.div>
          </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 shadow-xl"
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                {/* Avatar and Info */}
                <motion.div
                  className="flex-shrink-0 text-center md:text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <motion.img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full mx-auto md:mx-0 mb-4 object-cover shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <h4 className="font-bold text-xl text-gray-800 mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600 mb-2">
                    {testimonials[currentTestimonial].location}
                  </p>
                  <div className="flex justify-center md:justify-start mb-2">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                  <motion.span
                    className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                  >
                    {testimonials[currentTestimonial].service}
                  </motion.span>
                </motion.div>

                {/* Testimonial Content */}
                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <motion.div
                    className="text-4xl text-teal-600 mb-4"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    "
                  </motion.div>
                  <motion.p
                    className="text-gray-700 leading-relaxed text-lg mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    {testimonials[currentTestimonial].text}
                  </motion.p>
                  <motion.div
                    className="text-4xl text-teal-600 text-right"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                  >
                    "
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <motion.div
            className="flex justify-center mt-8 space-x-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-teal-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => handleTestimonialChange(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8">
            <motion.button
              className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow"
              onClick={() => handleTestimonialChange(
                currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1
              )}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              className="bg-white shadow-lg rounded-full p-3 hover:shadow-xl transition-shadow"
              onClick={() => handleTestimonialChange(
                currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1
              )}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
