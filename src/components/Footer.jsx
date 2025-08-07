import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { showToastSuccess, showToastInfo, showToastError } from '../utils/sweetAlert';

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
      const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_BASE_URL}/api/email/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'website-footer'
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubscribed(true);
        setEmail('');

        // Show success toast
        showToastSuccess(
          'Successfully Subscribed!',
          data.message || 'Thank you for subscribing to our newsletter!'
        );

        // Hide success state after 5 seconds
        setTimeout(() => {
          setIsSubscribed(false);
        }, 5000);
      } else {
        // Handle validation errors or other issues
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

      // Show network/connection error
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
      // If we're on the home page, scroll to section
      if (location.pathname === '/') {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If we're on another page, navigate to home with hash
        window.location.href = `/${item.href}`;
      }
    }
    // For routes, React Router will handle navigation automatically
  };

  const footerLinks = {
    useful: [
      { name: 'Services', href: '#services', type: 'section' },
      { name: 'Gallery', href: '#gallery', type: 'section' },
      { name: 'About us', href: '/about', type: 'route' },
      { name: 'Contact us', href: '/contact', type: 'route' },
      { name: 'Admin', href: '/admin/login', type: 'route' }

    ],
    company: [
      { name: 'Brand Identity', href: '#brand', type: 'section' },
      { name: 'Newsroom', href: '#news', type: 'section' },
      { name: 'Careers', href: '#careers', type: 'section' },
      { name: 'Investor Relations', href: '#investors', type: 'section' }
    ]
  };

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: '📷', 
      href: '#',
      color: 'hover:text-pink-400'
    },
    { 
      name: 'Facebook', 
      icon: '📘', 
      href: '#',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'LinkedIn', 
      icon: '💼', 
      href: '#',
      color: 'hover:text-blue-600'
    },
    { 
      name: 'TikTok', 
      icon: '🎵', 
      href: '#',
      color: 'hover:text-purple-400'
    }
  ];

  const contactMethods = [
    {
      type: 'Email Support',
      status: 'Available 24/7',
      action: () => window.open('mailto:info@royaletparking.co', '_blank')
    },
    {
      type: 'Call Support',
      status: 'Mon-Sun 8AM-10PM',
      action: () => window.open('tel:+971526581431', '_blank')
    },
    {
      type: 'WhatsApp Us',
      status: 'Instant Response',
      action: () => window.open('https://wa.me/923449088483', '_blank')
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
              <div className="text-3xl font-bold">🅿️ ROYAVALET</div>
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
            
            <motion.button
              className="bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold mb-6 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              DOWNLOAD PROFILE
            </motion.button>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={`text-2xl transition-colors ${social.color}`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
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
                  {link.type === 'section' ? (
                    <motion.a
                      href={link.href}
                      onClick={(e) => handleNavigation(e, link)}
                      className="text-teal-100 hover:text-white transition-colors flex items-center group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span
                        className="w-0 group-hover:w-2 h-0.5 bg-teal-300 mr-0 group-hover:mr-2 transition-all duration-300"
                      />
                      {link.name}
                    </motion.a>
                  ) : (
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
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6 text-teal-200">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  {link.type === 'section' ? (
                    <motion.a
                      href={link.href}
                      onClick={(e) => handleNavigation(e, link)}
                      className="text-teal-100 hover:text-white transition-colors flex items-center group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.span
                        className="w-0 group-hover:w-2 h-0.5 bg-teal-300 mr-0 group-hover:mr-2 transition-all duration-300"
                      />
                      {link.name}
                    </motion.a>
                  ) : (
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
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Subscribe & Support */}
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


            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-teal-200">Support</h4>
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
                    <motion.span
                      className="text-teal-300 text-xs"
                      whileHover={{ scale: 1.05 }}
                    >
                      {method.status}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
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

      {/* WhatsApp Float Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          onClick={() => window.open('https://wa.me/923449088483', '_blank')}
          className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              "0 10px 25px rgba(0,0,0,0.2)",
              "0 20px 40px rgba(0,0,0,0.3)",
              "0 10px 25px rgba(0,0,0,0.2)"
            ]
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          aria-label="Contact us on WhatsApp"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;
