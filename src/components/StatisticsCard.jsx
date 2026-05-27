import React from 'react';
import { Card } from "react-bootstrap";
import { ArrowUpShort, ArrowDownShort } from "react-bootstrap-icons";

const StatsCard = ({ title, amount, percent, prevAmount, isNegative, lastWeekValue }) => {
  return (
  
    <Card className="border-0 shadow-sm rounded-custom mb-3 h-100">
      <Card.Body className="p-3 p-lg-4 d-flex flex-column justify-content-between">
        
        {/* Header Section */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="text-grey-custom fw-bold text-truncate" style={{ fontSize: '0.85rem' }}>{title}</span>
          <span className="badge bg-light text-muted" style={{ fontSize: '0.7rem' }}>Today</span>
        </div>
        
        {/* Amount & Percent Section */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="fw-bolder mb-0 text-dark text-truncate" style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)' }}>
            $ {amount}
          </h5>
          <div className={`${isNegative ? 'text-danger' : 'text-success'} d-flex align-items-center fw-bold`} style={{ fontSize: '0.9rem' }}>
            {isNegative ? <ArrowDownShort size={20} /> : <ArrowUpShort size={20} />} 
            {percent}%
          </div>
        </div>
        
      
        <p className="text-muted mb-3" style={{ fontSize: '0.8rem' }}>
          Compared to ${prevAmount} yesterday
        </p>
        
        {/* Footer Section */}
        <div className="d-flex justify-content-between border-top pt-2 mt-auto text-grey-02" style={{ fontSize: '0.8rem' }}>
          <span className="text-truncate me-2">Last week {title}</span>
          <span className="fw-bold text-grey-02 text-truncate">${lastWeekValue}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StatsCard;