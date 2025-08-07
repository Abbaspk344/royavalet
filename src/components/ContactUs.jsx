import { useState } from 'react';
import { motion } from 'framer-motion';
import { getImagesByCategory } from '../assets/imageIndex';
import {
  showSuccessAlert,
  showValidationAlert,
  showDuplicateSubmissionAlert,
  showConnectionErrorAlert,
  showErrorAlert
} from '../utils/sweetAlert';
import { apiRequest, API_ENDPOINTS } from '../config/apiConfig';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get contact image from local assets
  const contactImages = getImagesByCategory('contactUs');

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

    try {
      // Use centralized API request function
      const data = await apiRequest(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          description: ''
        });

        // Show success SweetAlert
        showSuccessAlert(
          'Message Sent Successfully!',
          data.message || 'Thank you for contacting us. We will get back to you soon!'
        );

        // Hide success state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        // Handle validation errors or other issues
        console.error('Contact submission failed:', data.message);

        // Check if it's a duplicate submission error
        if (data.message && data.message.includes('24 hours')) {
          showDuplicateSubmissionAlert();
        } else if (data.errors && Array.isArray(data.errors)) {
          // Handle validation errors
          showValidationAlert(data.errors);
        } else {
          // General error
          showErrorAlert(
            'Submission Failed',
            data.message || 'Failed to submit contact form. Please try again.'
          );
        }
      }
    } catch (error) {
      console.error('Contact submission error:', error);

      // Show network/connection error
      showConnectionErrorAlert();
    } finally {
      setIsSubmitting(false);
    }
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
        className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={contactImages[0]}
            alt="Contact Royal Valet"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-purple-600/80 to-indigo-700/80"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
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

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Contact <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Royal Valet</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Get in touch with Dubai's premier valet parking service
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-6 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            >
              <span className="text-2xl">📞</span>
              <span>+971 52 658 1431</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            >
              <span className="text-2xl">📧</span>
              <span>info@royaletparking.co</span>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
            >
              <span className="text-2xl">📍</span>
              <span>Dubai, UAE</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">

            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 h-full flex flex-col"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mb-4"></div>
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
                <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>

                  <div className="flex-1">
                    <textarea
                      name="description"
                      placeholder="Description"
                      rows="6"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full h-full min-h-[120px] px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
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
              className="h-full"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {/* Map Section */}
              <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 text-white h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Location</h3>
                  <p className="text-blue-100">Feel Free to Contact us today!</p>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 mb-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-lg">{info.icon}</span>
                      </div>
                      {info.href !== '#' ? (
                        <a
                          href={info.href}
                          className="text-blue-100 hover:text-white transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-blue-100 text-sm">{info.value}</span>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Interactive Map */}
                <motion.div
                  className="flex-1 bg-white/10 rounded-lg overflow-hidden relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5234567890123!2d55.2276!3d25.1124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b8b8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sAl%20Barsha%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1234567890123&maptype=roadmap&zoom=16"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '280px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-lg"
                    title="Royal Valet Location - Al Barsha, Dubai"
                  ></iframe>

                  {/* Location Marker Pin */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      className="relative"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
                    >
                      {/* Location Pin */}
                      <motion.div
                        className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg relative"
                        animate={{
                          scale: [1, 1.2, 1],
                          boxShadow: [
                            "0 0 0 0 rgba(239, 68, 68, 0.7)",
                            "0 0 0 20px rgba(239, 68, 68, 0)",
                            "0 0 0 0 rgba(239, 68, 68, 0)"
                          ]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {/* Pin Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </motion.div>

                      {/* Pin Shadow */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-black/30 rounded-full blur-sm"></div>

                      {/* Tooltip */}
                      <motion.div
                        className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.5, duration: 0.3 }}
                      >
                        Royal Valet Location
                        {/* Tooltip Arrow */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <motion.button
                    onClick={() => window.open('tel:+971526581431', '_blank')}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-lg text-center hover:bg-white/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-lg mb-1">📞</div>
                    <div className="text-xs font-medium">Call</div>
                  </motion.button>

                  <motion.button
                    onClick={() => window.open('mailto:info@royaletparking.co', '_blank')}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-lg text-center hover:bg-white/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-lg mb-1">✉️</div>
                    <div className="text-xs font-medium">Email</div>
                  </motion.button>

                  <motion.button
                    onClick={() => window.open('https://maps.google.com/?q=Office+104+montparnasse+tower+al+barsha+Dubai+UAE', '_blank')}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-3 rounded-lg text-center hover:bg-white/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-lg mb-1">🗺️</div>
                    <div className="text-xs font-medium">Directions</div>
                  </motion.button>
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
