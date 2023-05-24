import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './Signup_Login.css';

function Signup() {
  return (
    <Container className="py-4">
      <h2 className="mb-4 title">Sign Up</h2>
      <Form>
        <Form.Group controlId="signupUsername">
          <Form.Label className="mb-3" style={{ fontSize: '1.2rem' }}>
            Username
          </Form.Label>
          <Form.Control className="mb-3"
            type="text"
            placeholder="Enter username"
            style={{ fontSize: '1.2rem' }}
          />
        </Form.Group>

        <Form.Group controlId="signupEmail">
          <Form.Label className="mb-2" style={{ fontSize: '1.2rem' }}>
            Email address
          </Form.Label>
          <Form.Control className="mb-3"
            type="email"
            placeholder="Enter email"
            style={{ fontSize: '1.2rem' }}
          />
        </Form.Group>

        <Form.Group controlId="signupPassword">
          <Form.Label className="mb-2" style={{ fontSize: '1.2rem' }}>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ fontSize: '1.2rem' }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
