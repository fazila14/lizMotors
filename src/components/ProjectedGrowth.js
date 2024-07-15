import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const ProjectedGrowth = () => {
  const data = {
    labels: ['2022', '2025', '2030'],
    datasets: [
      {
        label: 'Projected Number of EVs Sold',
        data: [40000, 150000, 500000],
        backgroundColor: '#36A2EB',
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Projected EV Growth in India</h2>
      <Bar data={data} />
    </div>
  );
};

export default ProjectedGrowth;
