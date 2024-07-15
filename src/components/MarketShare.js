import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const MarketShare = () => {
  const data = {
    labels: ['Passenger Vehicles', 'Commercial Vehicles', 'Two-Wheelers'],
    datasets: [
      {
        data: [0.35, 1.14, 5.17],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Market Share in India (2022)</h2>
      <Pie data={data} />
    </div>
  );
};

export default MarketShare;
