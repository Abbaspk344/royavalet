import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import finallogo from '../assets/finallogo.png';
import { showToastSuccess, showToastInfo, showToastError } from '../utils/sweetAlert';
import { apiRequest, API_ENDPOINTS } from '../config/apiConfig';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      const data = await apiRequest(API_ENDPOINTS.EMAIL_SUBSCRIBE, {
        method: 'POST',
        body: JSON.stringify({
          email,
          source: 'website-footer'
        }),
      });

      if (data.success) {
        setIsSubscribed(true);
        setEmail('');
        showToastSuccess(
          'Successfully Subscribed!',
          data.message || 'Thank you for subscribing to our newsletter!'
        );
        setTimeout(() => {
          setIsSubscribed(false);
        }, 5000);
      } else {
        if (data.message && data.message.includes('already subscribed')) {
          showToastInfo(
            'Already Subscribed!',
            'This email is already subscribed to our newsletter.'
          );
        } else {
          showToastError(
            'Subscription Failed',
            data.message || 'Failed to subscribe. Please try again.'
          );
        }
      }
    } catch (error) {
      console.error('Email subscription error:', error);
      showToastError(
        'Connection Error',
        'Failed to subscribe. Please check your internet connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNavigation = (e, item) => {
    e.preventDefault();

    if (item.type === 'section') {
      if (location.pathname === '/') {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.location.href = `/${item.href}`;
      }
    }
  };

  const footerLinks = {
    useful: [
      { name: 'Gallery', href: '/gallery', type: 'route' },
      { name: 'About us', href: '/about', type: 'route' },
      { name: 'Contact us', href: '/contact', type: 'route' },
      { name: 'Admin', href: '/admin/login', type: 'route' }
    ]
  };

  const contactMethods = [
    {
      type: 'Email Support',
      status: 'Available 24/7',
      action: () => window.open('mailto:info@royaletparking.co', '_blank'),
      icon: <FaEnvelope />,
      color: 'text-red-500 hover:text-red-400'
    },
    {
      type: 'Call Support',
      status: 'Mon-Sun 8AM-10PM',
      action: () => window.open('tel:+971526581431', '_blank'),
      icon: <FaPhone />,
      color: 'text-blue-500 hover:text-blue-400'
    },
    {
      type: 'WhatsApp Us',
      status: 'Instant Response',
      action: () => window.open('https://wa.me/923449088483', '_blank'),
      icon: <FaWhatsapp />,
      color: 'hover:text-green-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={finallogo} alt="Royavalet Logo" className="h-12" />
              <span className="font-bold text-2xl ml-2">RoyaValet</span>
            </motion.div>
            <motion.p 
              className="text-teal-100 mb-6 leading-relaxed"
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Enjoy Royavalet parking UAE for a stress-free evening with our reliable and 
              efficient valet parking in Dubai, Sharjah and all over the UAE.
            </motion.p>
            
          
            {/* Contact Icons */}
            <div className="flex space-x-4">
              {contactMethods.map((method, index) => (
                <motion.button
                  key={method.type}
                  onClick={method.action}
                  className={`text-2xl transition-colors ${method.color}`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                  aria-label={method.type}
                >
                  {method.icon}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Useful Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-teal-200">Useful Links</h3>
            <ul className="space-y-3">
              {footerLinks.useful.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.href}
                    className="text-teal-100 hover:text-white transition-colors flex items-center group"
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-center"
                    >
                      <motion.span
                        className="w-0 group-hover:w-2 h-0.5 bg-teal-300 mr-0 group-hover:mr-2 transition-all duration-300"
                      />
                      {link.name}
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-teal-200">Support</h3>
            <ul className="space-y-2">
                {contactMethods.map((method, index) => (
                  <motion.li
                    key={method.type}
                    className="flex justify-between items-center text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  >
                    <motion.button
                      onClick={method.action}
                      className="text-teal-100 hover:text-white transition-colors text-left"
                      whileHover={{ scale: 1.05, x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {method.type}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
          </motion.div>

          {/* Subscribe */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-teal-200">Subscribe Now</h3>
            <motion.p 
              className="text-teal-100 mb-4"
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Don't miss our future updates! Get Subscribed Today!
            </motion.p>
            
            <motion.form
              onSubmit={handleSubscribe}
              className="flex mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <input 
                type="email" 
                placeholder="Your email here..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                required
              />
              <motion.button
                type="submit"
                className={`px-4 py-3 rounded-r-lg transition-colors ${
                  isSubmitting || isSubscribed
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-teal-800 hover:bg-teal-900'
                }`}
                whileHover={!isSubmitting && !isSubscribed ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting && !isSubscribed ? { scale: 0.95 } : {}}
                disabled={isSubmitting || isSubscribed}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : isSubscribed ? (
                  '✓'
                ) : (
                  '✉️'
                )}
              </motion.button>
            </motion.form>
            <div className="mt-4 text-center text-teal-200 text-xs">
              {contactMethods.map((method) => (
                <p key={method.type}>{method.status}</p>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          className="border-t border-teal-500/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="text-teal-100 text-sm mb-4 md:mb-0"
            whileHover={{ scale: 1.02 }}
          >
            © 2025 Royavalet Parking Services UAE. All Rights Reserved.
          </motion.div>
          <div className="flex space-x-6 text-sm">
            <motion.a
              href="#privacy"
              className="text-teal-100 hover:text-white transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#terms"
              className="text-teal-100 hover:text-white transition-colors"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Terms & Conditions
            </motion.a>
           
          </div>
        </motion.div>
      </div>

    </footer>
  );
};

export default Footer;
