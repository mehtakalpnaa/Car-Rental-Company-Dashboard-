import React from 'react';
import Chart from 'react-apexcharts';

const EarningChart = () => {
  const series = [
    {
      name: 'Last 6 months',
      data: [250, 130, 250, 150, 250, 240] 
    },
    {
      name: 'Same period last year',
      data: [120, 160, 140, 220, 150, 130]
    }
  ];

  const options = {
    chart: { 
      type: 'area', 
      toolbar: { show: false },
      zoom: { enabled: false } 
    },
    colors: ['#3B82F6', '#A3A3A3'],
    // Stroke: Solid for first, Dashed for second series
    stroke: { 
      curve: 'smooth', 
      width: [2, 2], 
      dashArray: [0, 5] 
    },
    fill: {
      type: 'gradient',
      gradient: { 
        shadeIntensity: 1, 
        opacityFrom: 0.3, 
        opacityTo: 0.1,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      categories: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: '#A3A3A3', fontSize: '12px' } }
    },
    yaxis: { 
      min: 0,
      max: 300,
      tickAmount: 3,
      labels: { formatter: (val) => `$${val}k`, style: { fontSize: '12px' } } 
    },
    grid: { 
      borderColor: '#F3F4F6',
      strokeDashArray: 4 
    },
    legend: { 
      show: true, 
      position: 'top', 
      horizontalAlign: 'right', 
      fontSize: '12px',
      markers: { radius: 12 }
    }
  };

  return (
    <div className="bg-card p-4 border-custom shadow-sm mt-3 rounded-custom">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <h6 className="fw-bold text-dark m-0">Earning Summary</h6>
        <div className="text-grey-03 fs-small">Mar 2022 - Oct 2022 ▾</div>
      </div>
      
      <Chart options={options} series={series} type="area" height={200} />
    </div>
  );
};

export default EarningChart;