import React from 'react';
import { motion } from 'framer-motion';
import { img25 } from '../assets/imageIndex';

const WhyChooseUs = () => {
    window.scroll(0,0);
  const features = [
    {
      icon: '👔',
      title: 'PROFESSIONALISM',
      description: 'Our highly trained and courteous city valet attendants are committed to providing an outstanding experience.'
    },
    {
      icon: '🚗',
      title: 'VALET SOLUTIONS',
      description: 'We offer customized valet solutions for any event, from private gatherings to high-profile functions.'
    },
    {
      icon: '🛡️',
      title: 'SAFETY AND SECURITY',
      description: 'Our expertly trained attendants ensure the safety of your guests\' vehicles.'
    },
    {
      icon: '⭐',
      title: '8 YEARS IN SERVICE',
      description: 'Backed by 8 years of experience, we provide professional city valet parking services.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-1 bg-red-500"></div>
                <span className="text-red-500 font-semibold text-sm tracking-wider uppercase">
                  TRUSTED
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                WHY CHOOSE US
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed">
                Hire a valet who sets a new standard of excellence through 
                our exceptional <span className="text-red-500 font-semibold">valet services</span> and guaranteed satisfaction.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-2xl group-hover:bg-red-500 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-blue-200 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={img25}
                alt="Professional valet service"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-10 blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
