import { motion } from 'framer-motion';
import { getImagesByCategory } from '../assets/imageIndex';

const AboutUs = () => {
  // Get about us images from local assets
  const aboutUsImages = getImagesByCategory('aboutUs');
  const testimonialImages = getImagesByCategory('testimonials');
  const stats = [
    { number: '500+', label: 'Happy Clients', icon: '😊' },
    { number: '10+', label: 'Years Experience', icon: '📅' },
    { number: '24/7', label: 'Service Available', icon: '🕐' },
    { number: '100%', label: 'Customer Satisfaction', icon: '⭐' }
  ];

  const commitments = [
    {
      icon: '🅿️',
      title: 'Elevated Service',
      description: 'We strive to exceed expectations by providing valet parking UAE services that go beyond the ordinary. Our commitment to excellence is evident in every interaction, making this as real experience at the highest of any event.'
    },
    {
      icon: '🅿️',
      title: 'Uncompromising Professionalism',
      description: 'We select and train our valet attendants to embody the highest standards of professionalism. From appearance to communication, our team represents the epitome of courtesy and efficiency, enhancing the overall atmosphere of any occasion.'
    },
    {
      icon: '🅿️',
      title: 'Innovation at the Forefront',
      description: 'Embracing technological advancements, we aim to be pioneers in the valet parking UAE industry. By constantly integrating cutting-edge solutions, we enhance the efficiency of our operations and offer ahead of conventional that sets us apart.'
    },
    {
      icon: '🅿️',
      title: 'Tailored Solutions',
      description: 'Recognizing the unique requirements of each event, we provide customized real car fit to the specific needs and preferences of our clients.'
    },
    {
      icon: '🅿️',
      title: 'Safety and Security',
      description: 'We prioritize the safety and security of both guests and their vehicles. Our valet attendants are trained to handle vehicles with care.'
    },
    {
      icon: '🅿️',
      title: 'Positive Impact',
      description: 'Beyond providing exceptional valet parking services, we aim to have a positive impact on the communities we serve.'
    }
  ];

  const team = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'Founder & CEO',
      image: testimonialImages[0],
      description: 'Visionary leader with 15+ years in hospitality and automotive services.'
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Manager',
      image: testimonialImages[1],
      description: 'Expert in operational excellence and customer service management.'
    },
    {
      name: 'Mohammed Hassan',
      position: 'Head of Security',
      image: testimonialImages[2],
      description: 'Security specialist ensuring the highest safety standards for all vehicles.'
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
            About Royavalet
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Premium valet parking services in Dubai, UAE - Where luxury meets convenience
          </motion.p>
        </div>
      </motion.section>

      {/* We Deliver Measurable Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={aboutUsImages[0]}
                  alt="Professional valet team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <p className="text-teal-600 font-semibold mb-4">Aiming to Be the Best</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">We Deliver Measurable Results</h2>
              <div className="w-16 h-1 bg-teal-600 mb-6"></div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                HG Valet Parking UAE is a premier valet parking provider in the United
                Arab Emirates renowned for delivering exceptional customer service
                and seamless parking experiences. Committed to exceeding
                expectations, the company employs highly trained and experienced
                valet attendants, carefully selected for their professionalism, courtesy,
                and meticulous attention to detail.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                At HG Valet Parking UAE, your UAE
                parking experience is elevated with a touch of class. We provide a
                one-stop solution for valet parking, allowing you to focus on what
                matters most. Experience the HG Valet Parking UAE difference—
                where valet parking is made easy, and your trusted valet parking
                partner awaits.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mission</h2>
            <p className="text-green-200 font-semibold mb-6">Where Convenience Meets Concierge.</p>
            <p className="text-lg leading-relaxed">
              At HG Valet Parking UAE Company, our mission is to redefine the parking experience by delivering
              unparalleled convenience, professionalism, and innovation. We are committed to transforming the way
              guests arrive at events, ensuring a seamless and sophisticated entry that reflects the excellence of our
              service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4 text-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The dedicated professionals behind Royavalet's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-teal-600/20 to-transparent"></div>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Premium Service?</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust Royavalet with their valuable vehicles
            </p>
            <motion.button
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
