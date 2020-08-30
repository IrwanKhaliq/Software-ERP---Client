import React from 'react';

import Chart from './Chart/Chart'

import './Business.scss'

const data1 = {
  labels: ['March', 'April', 'May', 'June', 'July', 'August'],
  datasets: [
    {
      label: 'Penjualan',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 40]
    },
    {
      label: 'Laba bersih',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(218, 27, 27, 0.64)',
      borderColor: 'rgba(218, 27, 27, 0.64)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(218, 27, 27, 0.64)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(218, 27, 27, 0.64)',
      pointHoverBorderColor: 'rgba(218, 27, 27, 0.64)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [70, 55, 65, 71, 76, 80]
    }
  ]
};

const data2 = {
  labels: ['September', 'Oktober', 'November', 'Desember', 'Januari', 'Februari'],
  datasets: [
    {
      label: 'AI Result Analysist',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 40]
    }
  ]
};

const Business = () => {
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center">
        <Chart title={'Analisis Penjualan'} data={data1} />
        { window.location.pathname === '/tiers/entrepreneur' &&
          <Chart title={'AI Analysist'} data={data2} />
        }
      </div>
    </>
  );
}

export default Business;
