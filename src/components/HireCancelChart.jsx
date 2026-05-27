import React from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'react-bootstrap';
import { CircleFill } from 'react-bootstrap-icons';

const HireCancelChart = () => {
  const options = {
    chart: { type: 'donut', sparkline: { enabled: true } },
    colors: ['#3B82F6', '#22C55E', '#FB2C36'],
    labels: ['Total Hired', 'Total Canceled', 'Total Pending'],
    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: { width: 0 }, 
    plotOptions: { 
      pie: { 
        donut: { 
          size: '60%', 
          labels: { show: false }
        } 
      } 
    }
  };

  return (
 
    <Card className="border-0 shadow-sm p-4 bg-card rounded-custom h-100" style={{ minHeight: '350px' }}>
      <Card.Body className="p-0 d-flex flex-column h-100">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className="fw-bold text-dark fs-body">Hire vs Cancel</span>
          <span className="badge bg-light text-muted fs-small">Today</span>
        </div>

       
        <div
          className="d-flex justify-content-center align-items-center mx-auto my-3"
          style={{ width: '140px', height: '140px' }} 
        >
          <Chart options={options} series={[54, 20, 26]} type="donut" width="100%" height="100%" />
        </div>

       
        <div className="mt-auto">
          {[
            { label: "Total Hired", val: "54% ↑", color: "text-primary" },
            { label: "Total Canceled", val: "20% ↑", color: "text-success" },
            { label: "Total Pending", val: "26% ↓", color: "text-danger" }
          ].map((item, idx) => (
            <div key={idx} className="mb-2 d-flex justify-content-between align-items-center fs-small">
              <span className="text-light-grey">
                <CircleFill className={`${item.color} me-2`} style={{ fontSize: '0.6rem' }} />
                {item.label}
              </span>
              <span className="fw-bold text-dark">{item.val}</span>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default HireCancelChart;