import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        description: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📞',
      label: 'Phone',
      value: '+971 52 658 1431',
      href: 'tel:+971526581431'
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'info@royaletparking.co',
      href: 'mailto:info@royaletparking.co'
    },
    {
      icon: '✉️',
      label: 'Sales',
      value: 'sales@royaletparking.co',
      href: 'mailto:sales@royaletparking.co'
    },
    {
      icon: '📍',
      label: 'Address',
      value: 'Office 104 montana tower al karama Dubai UAE',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Get in touch with us for premium valet parking services
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                <div className="w-16 h-1 bg-teal-600 mb-4"></div>
                <p className="text-gray-600">
                  We'll get in touch with you to schedule the appointment.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h3>
                  <p className="text-gray-600">Your message has been sent successfully.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <div>
                    <textarea
                      name="description"
                      placeholder="Description"
                      rows="4"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gray-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Location & Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {/* Map Section */}
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Location</h3>
                <p className="text-green-100 mb-6">Feel Free to Contact us today!</p>
                
                {/* Contact Information */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    >
                      <span className="text-2xl">{info.icon}</span>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="text-green-100 hover:text-white transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-green-100">{info.value}</span>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <motion.div
                  className="mt-8 bg-white/10 rounded-lg p-4 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-green-100 text-sm">Interactive Map Coming Soon</p>
                </motion.div>
              </div>

              {/* Quick Contact Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.button
                  onClick={() => window.open('tel:+971526581431', '_blank')}
                  className="bg-blue-500 text-white p-4 rounded-xl text-center hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-2xl mb-2">📞</div>
                  <div className="text-sm font-semibold">Call Now</div>
                </motion.button>

                <motion.button
                  onClick={() => window.open('mailto:info@royaletparking.co', '_blank')}
                  className="bg-red-500 text-white p-4 rounded-xl text-center hover:bg-red-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-2xl mb-2">✉️</div>
                  <div className="text-sm font-semibold">Email Us</div>
                </motion.button>

                <motion.button
                  onClick={() => window.open('https://wa.me/923449088483', '_blank')}
                  className="bg-green-500 text-white p-4 rounded-xl text-center hover:bg-green-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-2xl mb-2">💬</div>
                  <div className="text-sm font-semibold">WhatsApp</div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
