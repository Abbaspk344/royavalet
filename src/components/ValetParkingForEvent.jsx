import React from 'react';
import SwissValetEvent from '../assets/Swiss-Valet-Event.png';

const ValetParkingForEvent = () => {
  window.scroll(0,0);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Valet Parking for Special Events</h1>
      <div className="flex justify-center">
        <img src={SwissValetEvent} alt="Valet Parking for Special Events" className="rounded-lg shadow-lg h-[500px] w-[800px]" />
      </div>
      <div className="mt-8">
        <p className="text-lg text-gray-700">
          Are you going to host Special Events? We can provide you best valet parking service for any kind of events like:
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Valet parking for Private events
            <ul className="list-disc list-inside ml-4">
              <li>Birthday</li>
              <li>Marriage</li>
              <li>Anniversary</li>
              <li>Party</li>
              <li>Any type private events</li>
            </ul>
          </li>
          <li className="mt-2">Corporate
            <ul className="list-disc list-inside ml-4">
              <li>Success Party</li>
              <li>Exhibitions</li>
              <li>Concerts</li>
              <li>any other Corporate events.</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ValetParkingForEvent;
