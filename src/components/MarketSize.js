import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const MarketSize = () => {
  const data = {
    labels: ['2022', '2025', '2030'],
    datasets: [
      {
        label: 'Passenger Vehicles (in crore)',
        data: [1500, 1800, 2700],
        borderColor: '#FF6384',
        fill: false,
      },
      {
        label: 'Commercial Vehicles (in crore)',
        data: [800, 920, 1100],
        borderColor: '#36A2EB',
        fill: false,
      },
      {
        label: 'Two-Wheelers (in crore)',
        data: [5000, 6500, 8450],
        borderColor: '#FFCE56',
        fill: false,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Market Size in India</h2>
      <Line data={data} />
    </div>
  );
};

export default MarketSize;
