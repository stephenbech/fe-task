import React, { useEffect, useState } from 'react';

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
);

const options = {
  scales: {
    x: {
      grid: {
        // display: true, // Display x-axis gridlines
        color: 'rgba(0, 0, 0, 1)', // Set gridline color to transparent
        borderColor: 'rgba(0, 0, 0, 1)', // Set border color to transparent
        tickLength: 1, // Set tick length to 0
        tickColor: 'black',
        drawTicks: true, // Hide ticks
        drawOnChartArea: false, // Don't draw gridlines on the chart area
        lineWidth: 0, // Set gridline width to 0
        zeroLineColor: 'rgba(0, 0, 0, 1)', // Set zero line color to transparent
      },
      ticks:{
        color:'black'
      }
     
    },
    y: {
      display: false, // Hide y-axis
    },
  },
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

function Chart({ chartData }) {
  
  
  const data = {
    labels: chartData.map((item) => (item.date ? formatDate(item.date) : '')),
    datasets: [
      {
        data: chartData.map((item) => item.amount),
        backgroundColor: 'transparent',
        borderColor: 'rgb(255, 193, 7)',
        tension: 0.3,
        pointStyle: '', // Set point style to circle
        pointRadius: 5, // Set point radius
        pointBorderColor: 'transparent', // Set point border color
        pointBackgroundColor: 'transparent', // Set point fill color
      },
    ],
  };

  return (
    <div className="gap-y-8 bg-white">
      <div className="mt-5 sm:h-[310px] sm:w-[700px] " >
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default Chart;
