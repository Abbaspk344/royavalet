import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HowWeHelp = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const helpItems = [
    {
      id: 1,
      title: "Professional & Courteous Valets",
      icon: "👨‍💼",
      content: "Our team consists of highly trained, certified professionals who treat every vehicle with the utmost care and respect. Each valet undergoes rigorous background checks and extensive training in customer service, vehicle handling, and safety protocols. We pride ourselves on maintaining the highest standards of professionalism and courtesy in every interaction.",
      features: [
        "Certified and insured professionals",
        "Comprehensive background checks",
        "Ongoing training and development",
        "Customer service excellence"
      ]
    },
    {
      id: 2,
      title: "Convenience & Flexibility",
      icon: "🕐",
      content: "We understand that your schedule is important. That's why we offer flexible scheduling options, 24/7 availability, and can adapt to your specific needs. Whether it's a last-minute event, recurring service, or special requirements, we're here to accommodate your lifestyle and preferences.",
      features: [
        "24/7 service availability",
        "Flexible scheduling options",
        "Last-minute bookings accepted",
        "Customizable service packages"
      ]
    },
    {
      id: 3,
      title: "Safety & Security",
      icon: "🛡️",
      content: "Your vehicle's safety and security are our top priorities. We employ advanced security measures including GPS tracking, comprehensive insurance coverage, secure parking facilities, and real-time monitoring. Every vehicle is treated as if it were our own, ensuring complete peace of mind.",
      features: [
        "GPS tracking and monitoring",
        "Comprehensive insurance coverage",
        "Secure parking facilities",
        "Real-time security updates"
      ]
    }
  ];

  const handleItemToggle = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              HOW ROYAVALET CAN HELP
            </motion.h2>
            
            <motion.p 
              className="text-xl mb-8 leading-relaxed text-teal-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              From bustling airports to elegant weddings, Royavalet Parking UAE is 
              here to take the wheel when it comes to parking. We're more than just 
              valets; we're your stress-free solution to navigating the often chaotic 
              world of parking.
            </motion.p>

            <motion.div
              className="grid gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center space-x-4 text-teal-100">
                <div className="w-2 h-2 bg-teal-300 rounded-full"></div>
                <span>Serving Dubai, Abu Dhabi, and across the UAE</span>
              </div>
              <div className="flex items-center space-x-4 text-teal-100">
                <div className="w-2 h-2 bg-teal-300 rounded-full"></div>
                <span>Over 10,000 satisfied customers</span>
              </div>
              <div className="flex items-center space-x-4 text-teal-100">
                <div className="w-2 h-2 bg-teal-300 rounded-full"></div>
                <span>99.9% customer satisfaction rate</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Expandable Items */}
          <motion.div 
            className="lg:w-1/2 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {helpItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="border border-teal-500/30 rounded-lg overflow-hidden backdrop-blur-sm bg-white/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <motion.button
                  className="flex justify-between items-center w-full text-left p-6 hover:bg-white/10 transition-colors"
                  onClick={() => handleItemToggle(item.id)}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="text-3xl bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>
                    <span className="text-xl font-semibold">{item.title}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedItem === item.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl font-light"
                  >
                    +
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="border-t border-teal-500/30"
                    >
                      <motion.div
                        className="p-6 bg-white/5"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        <p className="text-teal-100 mb-4 leading-relaxed">
                          {item.content}
                        </p>
                        
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.3 }}
                        >
                          <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                          <div className="grid gap-2">
                            {item.features.map((feature, featureIndex) => (
                              <motion.div
                                key={featureIndex}
                                className="flex items-center space-x-3"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + featureIndex * 0.1, duration: 0.3 }}
                              >
                                <motion.div
                                  className="w-2 h-2 bg-teal-300 rounded-full flex-shrink-0"
                                  whileHover={{ scale: 1.5 }}
                                  transition={{ type: "spring", stiffness: 300 }}
                                />
                                <span className="text-teal-100 text-sm">{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

       
      </div>
    </section>
  );
};

export default HowWeHelp;
