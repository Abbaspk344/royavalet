import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import finallogo from "../assets/finallogo.png";
const Header = ({ onGetQuote }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const navigationItems = [
    {
      // href: '/services',
      label: 'Services',
      type: 'route',
      children: [
        { href: '/services/valet-parking-for-event', label: 'Valet Parking for Events' },
        { href: '/services/valet-parking-services-in-uae', label: 'Valet Parking Services in UAE' },
        { href: '/services/transportation-solutions', label: 'Transportation Solutions' },
        { href: '/services/parking-lot-management', label: 'Parking Lot Management' },
        { href: '/services/delivery-biker-services', label: 'Delivery Biker Services' },
      ],
    },
    { href: '/gallery', label: 'Gallery', type: 'route' },
    { href: '/about', label: 'About Us', type: 'route' },
    { href: '/contact', label: 'Contact Us', type: 'route' },
  ];

  const contactInfo = [
    { type: 'phone', value: '+971 52 658 1431', icon: '📞' },
    { type: 'phone', value: '+971 50 829 9151', icon: '📞' },
    { type: 'email', value: 'sales@royaletparking.co', icon: '✉️' },
    { type: 'email', value: 'info@royaletparking.co', icon: '✉️' }
  ];

  const handleNavigation = (e, item) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

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

  return (
    <>
      {/* Top Header - Hidden on mobile for better space usage */}
      <motion.header
        className="bg-teal-600 text-white py-2 md:py-3 hidden lg:block"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs md:text-sm">
            <motion.div
              className="flex space-x-4 md:space-x-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {contactInfo.slice(0, 2).map((contact, index) => (
                <motion.a
                  key={index}
                  href={`tel:${contact.value}`}
                  className="flex items-center space-x-1 hover:text-teal-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  aria-label={`Call ${contact.value}`}
                >
                  <span className="text-sm">{contact.icon}</span>
                  <span className="hidden sm:inline">{contact.value}</span>
                </motion.a>
              ))}
            </motion.div>
            <motion.div
              className="flex space-x-4 md:space-x-6"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {contactInfo.slice(2).map((contact, index) => (
                <motion.a
                  key={index}
                  href={`mailto:${contact.value}`}
                  className="flex items-center space-x-1 hover:text-teal-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  aria-label={`Email ${contact.value}`}
                >
                  <span className="text-sm">{contact.icon}</span>
                  <span className="hidden sm:inline">{contact.value}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Navigation */}
      <motion.nav
        className="bg-white shadow-lg py-3 md:py-4 sticky top-0 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link to="/" className="cursor-pointer ">
               <img src={finallogo} alt="" className=' md:w-30 md:h-20 h-10 w-30 md:object-fill animate-pulse object-center' />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setIsServicesMenuOpen(true)}
                  onMouseLeave={() => item.children && setIsServicesMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={item.href}
                    className={`text-gray-700 hover:text-teal-600 font-medium transition-colors relative text-sm xl:text-base ${
                      location.pathname === item.href ? 'text-teal-600' : ''
                    }`}
                  >
                    <motion.div whileHover={{ y: -2 }}>
                      {item.label}
                      <motion.div
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-600"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </Link>
                  {item.children && isServicesMenuOpen && (
                    <motion.div
                      className="absolute left-0 w-48 bg-white rounded-md shadow-lg z-10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-100"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Button and Mobile Menu */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <motion.button
                onClick={onGetQuote}
                className="bg-teal-600 text-white px-3 md:px-6 py-2 md:py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors shadow-lg text-sm md:text-base"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                aria-label="Get free quote"
              >
                <span className="hidden sm:inline">GET FREE QUOTE</span>
                <span className="sm:hidden">QUOTE</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden p-2 text-gray-700 hover:text-teal-600"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
              >
                <motion.div
                  animate={isMobileMenuOpen ? "open" : "closed"}
                  className="w-6 h-6 flex flex-col justify-center items-center"
                >
                  <motion.span
                    className="w-6 h-0.5 bg-current block"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: 45, y: 6 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-current block mt-1"
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-6 h-0.5 bg-current block mt-1"
                    variants={{
                      closed: { rotate: 0, y: 0 },
                      open: { rotate: -45, y: -6 }
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden bg-white border-t border-gray-200 shadow-lg"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-6">
                {/* Mobile Contact Info */}
                <div className="mb-6 pb-6 border-b border-gray-200 hidden">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3">Contact Us</h3>
                  <div className="grid grid-cols-1 gap-3 text-sm">
                    {contactInfo.map((contact, index) => (
                      <motion.a
                        key={index}
                        href={contact.type === 'phone' ? `tel:${contact.value}` : `mailto:${contact.value}`}
                        className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 py-2 px-3 rounded-lg hover:bg-teal-50 transition-colors"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-lg">{contact.icon}</span>
                        <span className="font-medium">{contact.value}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Mobile Navigation */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-gray-800 mb-3">Navigation</h3>
                  {navigationItems.map((item, index) => (
                    item.type === 'section' ? (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleNavigation(e, item)}
                        className="block text-gray-700 hover:text-teal-600 font-medium py-3 px-3 rounded-lg hover:bg-teal-50 transition-colors text-lg"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {item.label}
                      </motion.a>
                    ) : (
                      <motion.div
                        key={item.label}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                      >
                        {item.children ? (
                          <div>
                            <div
                              onClick={() => setIsServicesMenuOpen(!isServicesMenuOpen)}
                              className={`block text-gray-700 hover:text-teal-600 font-medium py-3 px-3 rounded-lg hover:bg-teal-50 transition-colors text-lg cursor-pointer ${
                                isServicesMenuOpen ? 'text-teal-600 bg-teal-50' : ''
                              }`}
                            >
                              <motion.div whileTap={{ scale: 0.98 }}>
                                {item.label}
                              </motion.div>
                            </div>
                            <AnimatePresence>
                              {isServicesMenuOpen && (
                                <motion.div
                                  className="ml-4"
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                >
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      to={child.href}
                                      onClick={() => setIsMobileMenuOpen(false)}
                                      className="block text-gray-700 hover:text-teal-600 font-medium py-2 px-3 rounded-lg hover:bg-teal-50 transition-colors text-base"
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link
                            to={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block text-gray-700 hover:text-teal-600 font-medium py-3 px-3 rounded-lg hover:bg-teal-50 transition-colors text-lg ${
                              location.pathname === item.href ? 'text-teal-600 bg-teal-50' : ''
                            }`}
                          >
                            <motion.div whileTap={{ scale: 0.98 }}>
                              {item.label}
                            </motion.div>
                          </Link>
                        )}
                      </motion.div>
                    )
                  ))}
                </div>

                {/* WhatsApp Button for Mobile */}
                <motion.div
                  className="mt-6 pt-6 border-t border-gray-200"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                  <motion.button
                    onClick={() => window.open('https://wa.me/923449088483', '_blank')}
                    className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>💬</span>
                    <span>WhatsApp Us</span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

Header.propTypes = {
  onGetQuote: PropTypes.func
};

Header.defaultProps = {
  onGetQuote: () => {}
};

export default Header;
