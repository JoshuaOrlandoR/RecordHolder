import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Login from '../../Components/Login/Login';
import Signup from '../../Components/Signup/Signup';
import './Start.css';

function Start() {
  return (
    <Container className=" start-container vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col xs={12} sm={10} md={8} lg={6} className="pr-3">
          <Signup />
        </Col>
        <Col xs={12} sm={10} md={8} lg={6} className="pl-3" >
          <Login />
        </Col>
      </Row>
    </Container>
  );
}

export default Start;
