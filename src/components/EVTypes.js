import React from 'react';

const EVTypes = () => {
  const types = [
    { type: 'Battery Electric Vehicles (BEVs)', description: 'Powered solely by electricity from a battery. Examples: Hyundai Kona Electric, Tata Nexon EV.' },
    { type: 'Plug-in Hybrid Electric Vehicles (PHEVs)', description: 'Can run on both electric power and gasoline or diesel. Examples: Toyota Prius Prime, Honda Civic Hybrid.' },
    { type: 'Mild-Hybrid Electric Vehicles (MHEVs)', description: 'Use regenerative braking to recharge the battery, but can also run on gasoline or diesel. Examples: Maruti Suzuki Swift Hybrid, Hyundai Elite i20 Hybrid.' },
    { type: 'Two-Wheelers (E-Scooters and E-Bikes)', description: 'Designed for personal use, often with a smaller range and lower price point. Examples: Ather 450X, Okinawa Praise.' },
  ];

  return (
    <div>
      <h2>Types of Electric Vehicles in India</h2>
      <ul>
        {types.map((ev, index) => (
          <li key={index}>
            <strong>{ev.type}</strong>: {ev.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EVTypes;
