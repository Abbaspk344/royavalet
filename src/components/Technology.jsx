import { motion } from 'framer-motion';

const Technology = () => {
  const techFeatures = [
    {
      icon: "📱",
      title: "Mobile App Integration",
      description: "Real-time tracking and notifications through our mobile application"
    },
    {
      icon: "🔒",
      title: "Advanced Security",
      description: "State-of-the-art security systems and GPS tracking for your vehicle"
    },
    {
      icon: "⚡",
      title: "Quick Response",
      description: "Lightning-fast service with average response time under 3 minutes"
    },
    {
      icon: "🌐",
      title: "Digital Management",
      description: "Cloud-based management system for seamless operations"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="technology" className="py-20 bg-white">
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
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Royavalet Parking UAE
              <br />
              - Equipped with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-800">
                Modern Technology
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              We leverage cutting-edge technology to provide seamless, secure, and efficient 
              valet parking services that exceed your expectations.
            </motion.p>

            {/* Technology Features */}
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {techFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-3xl bg-gradient-to-br from-teal-100 to-teal-200 rounded-full w-16 h-16 flex items-center justify-center flex-shrink-0"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      background: "linear-gradient(135deg, #14b8a6, #0d9488)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Animated Circles */}
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-green-200 via-green-300 to-green-400 rounded-full flex items-center justify-center relative overflow-hidden"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <motion.div
                  className="w-64 h-64 bg-gradient-to-br from-green-300 via-green-400 to-green-500 rounded-full flex items-center justify-center relative shadow-2xl"
                  animate={{ 
                    rotate: -360,
                    scale: [1, 0.95, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  {/* Car Image */}
                  <motion.div
                    className="relative z-10"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                      alt="Modern luxury car with technology" 
                      className="w-48 h-32 object-cover rounded-lg shadow-xl"
                    />
                  </motion.div>

                  {/* Floating Tech Icons */}
                  <motion.div
                    className="absolute top-4 right-4 text-2xl bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    📱
                  </motion.div>

                  <motion.div
                    className="absolute bottom-4 left-4 text-2xl bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                    animate={{ 
                      y: [0, 15, 0],
                      rotate: [0, -180, -360]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    🔒
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 text-2xl bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                    animate={{ 
                      x: [0, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    ⚡
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 text-2xl bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
                    animate={{ 
                      x: [0, 10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3.5, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 2
                    }}
                  >
                    🌐
                  </motion.div>
                </motion.div>

                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-teal-400/30"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>

              {/* Background Decorative Elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-teal-400 rounded-full opacity-60"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 0.3, 0.6]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-12 h-12 bg-green-400 rounded-full opacity-40"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.2, 0.4]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
