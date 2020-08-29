import React from 'react';
import { Line } from 'react-chartjs-2'

import './Chart.css'

const Chart = ({ title, data }) => {
  return (
    <div className="chart">
      <h2>{ title }</h2>
      <Line data={data} />
    </div>
  );
}

export default Chart;
