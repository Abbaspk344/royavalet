import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';

// Import all home page components
import Hero from './Hero';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import HowWeHelp from './HowWeHelp';
import BehindGlassEye from './BehindGlassEye';
import Testimonials from './Testimonials';

const Home = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Handle quote request
  const handleGetQuote = useCallback(() => {
    // Scroll to contact section or open quote modal
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to footer
      const footer = document.querySelector('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // Handle learn more
  const handleLearnMore = useCallback(() => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Handle service selection
  const handleServiceSelect = useCallback((service) => {
    setSelectedService(service);
    // Could open a modal or navigate to service detail page
    console.log('Selected service:', service);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <Hero
        onGetQuote={handleGetQuote}
        onLearnMore={handleLearnMore}
      />

      {/* Services Section */}
      <section id="services">
        <Services onServiceSelect={handleServiceSelect} />
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>

      {/* How We Help Section */}
      <section id="help">
        <HowWeHelp />
      </section>

      {/* Behind Glass Eye Section */}
      <section id="gallery">
        <BehindGlassEye />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>
    </motion.main>
  );
};

export default Home;
