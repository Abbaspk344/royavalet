import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getImagesByCategory } from '../assets/imageIndex';

const NewServices = () => {
  const serviceImages = getImagesByCategory('services');

  const services = [
    {
      title: 'Valet Parking for Events',
      image: serviceImages[0],
      link: '/services/valet-parking-for-event',
    },
    {
      title: 'Valet Parking Services in UAE',
      image: serviceImages[1],
      link: '/services/valet-parking-services-in-uae',
    },
    {
      title: 'Transportation Solutions',
      image: serviceImages[2],
      link: '/services/transportation-solutions',
    },
    {
      title: 'Parking Lot Management',
      image: serviceImages[3],
      link: '/services/parking-lot-management',
    },
    {
      title: 'Delivery Biker Services',
      image: serviceImages[4],
      link: '/services/delivery-biker-services',
    },
  ];

  return (
    <div className="py-12 bg-gray-100 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={service.link}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewServices;
