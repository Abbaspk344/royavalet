import React from 'react';
import BikerImage from '../assets/Valet-Biker.jpg';

const DeliveryBikerServices = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Delivery Biker Services</h1>
      <div className="flex justify-center">
        <img src={BikerImage} alt="Delivery Biker Services" className="rounded-lg shadow-lg h-96" />
      </div>
      <div className="mt-8">
        <p className="text-lg text-gray-700">
          Swiss Valet Parking Services is going to introduce delivery bikers providing service to ease your headache of managing delivery. In this modern world, on time delivery has been the choice of your guest and you are committed to fulfill it. No matter how bad the traffic is, and weather burning the roads, everybody want their delivery on time. What festival? What birthday? Delivery Boy should stand at a doorstep to hand over a parcel to a delighted guest before he zips to the next address. We decided to create a plan and started paying for the hard work and dedication they put in their work. We pay our riders on the amount of work they do. Not only for the companies but also riders should be satisfied, this is our motto. We were sure about the idea and know it is going to be a win-win situation for both the companies.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Our concept covers:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Request and schedule deliveries at your guest’s convenience</li>
          <li>Choose now, or schedule a delivery for a later date</li>
          <li>Track deliveries in real-time from start to finish</li>
          <li>No surge pricing and no long-term commitment.</li>
          <li>Flat fee pay as you go</li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveryBikerServices;
