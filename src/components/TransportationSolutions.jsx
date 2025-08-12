import React from 'react';
import TransportationImage from '../assets/Transportation.png';

const TransportationSolutions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Transportation Solutions</h1>
      <div className="flex justify-center">
        <img src={TransportationImage} alt="Transportation Solutions" className="rounded-lg shadow-lg h-96" />
      </div>
      <div className="mt-8">
        <p className="text-lg text-gray-700">
          Welcome to Roya Valet Parking Services LLC. We are the Best Valet Parking Company located in the UAE. Our professional valet parking services begins with a RTA certified, highly trained professional valet service attendant that takes appropriate care and safety considerations for valet operations that makes us the one of the best valet parking company in Dubai.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Managing and selling of transportation and logistics services is extremely complex and a significant factor in determining your profitability. We manage effectively sell-side to buy-side contracts, freight consolidation, carrier selection, shipment visibility and freight audit.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Whether you need a quick fix for a transportation issue or an end-to-end solution, our transportation management suite can help. We provide the depth of standard capabilities that you need as well as an incredibly broad array of advanced capabilities.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          We carefully developed our services using the right elements and specifications to ensure the highest quality standards and excellent Client experience. Roya Valet Parking Services can address all these areas end-to-end or with its modular architecture can be quickly implemented in the select areas where you need the greatest help now as a result we are the best valet parking company in Dubai.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          We have transportation mode specific capabilities to meet unique transportation management system requirements such as ocean contract management and air bookings.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Roya Valet parking Services offers supply chain solutions for:
        </p>
        <h2 className="text-2xl font-bold mt-8">Contract Management:</h2>
        <p className="text-lg text-gray-700 mt-4">
          Contract Management is the foundation of the transportation management process. We have developed rich contract management functionality that can handle agreements for any mode of transportation with significant flexibility and ease of contract creation and maintenance.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Load optimization and capacity management
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Load Planning & Optimization combine shipments for efficiency and cost savings with the ability to automatically rate shipments, assign carriers, optimize and create loads using the system’s aggregation and routing algorithms.
        </p>
        <h2 className="text-2xl font-bold mt-8">Freight bill audit across ocean, air and LTL/TL contract:</h2>
        <p className="text-lg text-gray-700 mt-4">
          Freight Audit dramatically reduces manual work and automatically identifies discrepancies that can result in over-billing and drawn out payment processes. As part of a plan-to-pay transportation process it can help identify how carriers align with contracted rates and expected costs.
        </p>
      </div>
    </div>
  );
};

export default TransportationSolutions;
