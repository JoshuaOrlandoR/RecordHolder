import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../Signup/Signup_Login.css';

function Login() {
  return (
    <Container className="py-4">
      <h2 className="mb-4 title">Login</h2>
      <Form>
        <Form.Group controlId="loginUsername">
          <Form.Label className="mb-4" style={{ fontSize: '1.2rem' }}>
            Username
          </Form.Label>
          <Form.Control className="mb-3"
            type="text"
            placeholder="Enter username"
            style={{ fontSize: '1.2rem' }}
          />
        </Form.Group>

        <Form.Group controlId="loginPassword">
          <Form.Label className="mb-2" style={{ fontSize: '1.2rem' }}>
            Password
          </Form.Label>
          <Form.Control className="mb-3"
            type="password"
            placeholder="Password"
            style={{ fontSize: '1.2rem' }}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
