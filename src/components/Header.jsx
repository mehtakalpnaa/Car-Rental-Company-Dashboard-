
import React from "react";
import { Row, Col, Form, InputGroup } from "react-bootstrap";
import { Bell, Search } from "react-bootstrap-icons";

const Header = ({ toggleSidebar }) => {
  return (
    <Row className="mobile-header d-none d-md-flex align-items-center py-3 px-3">

      <Col className="d-flex flex-column">
        <div className="d-md-none mb-1">
          <button className="btn btn-light shadow-sm" onClick={toggleSidebar}>
            <i className="bi bi-list"></i>
          </button>
        </div>

        <div>
          <h5 className="mb-0 fw-semibold">Todays Statistics</h5>
          <small className="text-muted">
            Wed, May 27, 2026, 12:51 PM
          </small>
        </div>
      </Col>

    </Row>
  );
};

export default Header;

