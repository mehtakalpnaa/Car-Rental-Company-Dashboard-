import React, { useState } from 'react';
import { Form, Button, Row, Col, Table, InputGroup } from 'react-bootstrap';
import { Filter, CarFront } from 'react-bootstrap-icons';
import { carStatusData, carNumbers } from '../data/dashboardData';

// Images import
import ellipse0 from '../assets/images/Ellipse 7.jpg';
import ellipse1 from '../assets/images/Ellipse 7 (1).jpg';
import ellipse2 from '../assets/images/Ellipse 7 (2).jpg';

const driverImages = [ellipse0, ellipse1, ellipse2];

const CarAvailabilityManager = () => {
  const [formData, setFormData] = useState({ carNumber: '', date: '', time: '10 AM' });
  const [filteredData, setFilteredData] = useState(carStatusData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.carNumber) {
      setFilteredData(carStatusData);
    } else {
      const filtered = carStatusData.filter(item => item.carNo === formData.carNumber);
      setFilteredData(filtered);
    }
  };

  return (
    <>
      {/* Availability Form */}
      <div className="bg-card p-4 border-custom rounded-custom shadow-sm mb-4">
        <h6 className="fw-bold mb-3 text-dark">Car Availability</h6>
        <Form onSubmit={handleSubmit}>
          <Row className="g-3 align-items-center">
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text className="bg-transparent border-end-0">
                  <CarFront size={18} className="text-muted" />
                </InputGroup.Text>
                <Form.Select name="carNumber" value={formData.carNumber} onChange={handleChange} className="border-start-0">
                  <option value="">All Cars</option>
                  {carNumbers.map((carNo, index) => (
                    <option key={index} value={carNo}>{carNo}</option>
                  ))}
                </Form.Select>
              </InputGroup>
            </Col>
            <Col md={3}>
              <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} />
            </Col>
            <Col md={3}>
              <Form.Select name="time" value={formData.time} onChange={handleChange}>
                <option value="10 AM">10 AM</option>
                <option value="12 PM">12 PM</option>
                <option value="02 PM">02 PM</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Button type="submit" className="w-100 bg-primary border-0 rounded-custom">Check</Button>
            </Col>
          </Row>
        </Form>
      </div>

      {/* Live Car Status Table */}
      <div className="bg-card p-4 border-custom shadow-sm rounded-custom">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold m-0 text-dark">Live Car Status</h6>
          <div className="text-light-grey d-flex align-items-center fs-small">
            <Filter size={18} className="me-1" /> Filter
          </div>
        </div>
        
      
        <div 
          className="table-scroll-container" 
          style={{ 
            maxHeight: '300px', 
            overflowY: 'auto', 
            width: '100%' 
          }}
        >
          <Table hover responsive className="align-middle mb-0">
            <thead style={{ position: 'sticky', top: 0, backgroundColor: '#fff', zIndex: 1 }}>
              <tr className="text-grey-03 fs-small">
                <th>No.</th><th>Car no.</th><th>Driver</th><th>Status</th><th>Earning</th><th></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={index} className="fs-small text-dark">
                    <td>{item.no}</td>
                    <td><span className="bg-grey-04 px-2 py-1 rounded-sm">{item.carNo}</span></td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img 
                          src={driverImages[index % driverImages.length]} 
                          alt="driver" 
                          className="rounded-circle me-2" 
                          style={{ width: '30px', height: '30px', objectFit: 'cover' }} 
                        />
                        {item.driver}
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className={`me-2 rounded-circle ${item.status === 'Completed' ? 'bg-success' : item.status === 'Pending' ? 'bg-primary' : 'bg-danger'}`} style={{ width: '10px', height: '10px' }}></span>
                        {item.status}
                      </div>
                    </td>
                    <td>{item.earning}</td>
                    <td className="text-end">
                      <Button size="sm" className="bg-primary border-0 px-3">Details</Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan="6" className="text-center">No data found</td></tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default CarAvailabilityManager;