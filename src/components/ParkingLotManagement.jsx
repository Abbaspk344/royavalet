import React from 'react';
import ParkingLotImage from '../assets/Parking-Lot-Service.jpg';

const ParkingLotManagement = () => {
    window.scroll(0,0);
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Parking Lot Management</h1>
      <div className="flex justify-center">
        <img src={ParkingLotImage} alt="Parking Lot Management" className="rounded-lg shadow-lg h-96" />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Roya Valet Is Not Just About Best Valet Services</h2>
        <p className="text-lg text-gray-700 mt-4">
          Roya Valet is one of the best valet parking in UAE. We provide total valet parking and transportation solutions. Our management staff has vast experience in the valet industry. As a team, our staff can accommodate and customize all of your individualized parking and transportation needs.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Lot Management for paid self-parking lots - With the limited amount of parking in growing cities we understand the need to maximize the parking and maximize revenue. Roya Valet Parking Services can assist with providing a revenue sharing plan and management of the parking lot to ensure maximum revenue potential for our clients.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Parking Attendants - When space is limited in a corporate parking lot or shopping center it is important to save adequate space for employees and patrons. Our parking attendant is available for an hourly rate to manage your parking lot. We ensure parking is properly utilized for both employees and paying guests. Parking attendants are vital to organizations that are wanting to keep unauthorized vehicles from parking in their parking lot. This reduces the need for towing which has been a growing problem in major cities. The strategy is vital to keeping tenants and guests happy. We are experts in maintaining this often tenuous balancing act.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Remote Shuttles - Roya Valet Parking Services Valet is proud of our alliance with sister company Rare Transportation. If Roya Valet Parking Services do not meet your needs, then we are pleased to refer you to Rare Transportation. Rare Transportation provides remote shuttle options for parking deficiencies. Their services are ideal for universities and corporate office settings when you have off site parking and need to move employees, patrons or vendors from a remote or temporary lot to your front door which will ensure the safety of your employees and patrons that have off site parking.
        </p>
      </div>
    </div>
  );
};

export default ParkingLotManagement;
