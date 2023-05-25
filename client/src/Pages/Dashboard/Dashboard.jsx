// components/Dashboard/Dashboard.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../Components/Navbar/Navbar';
import InventorySummary from '../../Components/InventorySummary/InventorySummary';
import LatestUpdates from '../../Components/LatestUpdates/LatestUpdates';
import InventoryChart from '../../Components/InventoryChart/InventoryChart';
import Alerts from '../../Components/Alerts/Alerts';
import Calendar from '../../Components/Calendar/Calendar';
import './Dashboard.css';

function Dashboard() {
  return (
    <Container fluid className='dashboard-container vh-100'>
      <Row>
        <Col md={2} >
          <Navbar />
        </Col>
        <Col md={10}>
          <Row>
            <Col md={6}>
              <InventorySummary />
            </Col>
            <Col md={6}>
              <LatestUpdates />
            </Col>
          </Row>
          <Row>
            <Col>
              <InventoryChart />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Alerts />
            </Col>
            <Col md={6}>
              <Calendar />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
