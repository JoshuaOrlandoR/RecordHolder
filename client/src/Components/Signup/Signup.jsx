import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import './Signup_Login.css';

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: "Signup successful!", variant: "success" });
        // here you can also handle redirection or any other action needed on success
      } else {
        setMessage({ text: data.message, variant: "danger" });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4 title">Sign Up</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="signupUsername">
          <Form.Label className="mb-3" style={{ fontSize: '1.2rem' }}>
            Username
          </Form.Label>
          <Form.Control className="mb-3"
            type="text"
            placeholder="Enter username"
            style={{ fontSize: '1.2rem' }}
            value={username}
            onChange={e => setUsername(e.target.value)}
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
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>

        {message && <Alert variant={message.variant}>{message.text}</Alert>}
        <Button variant="primary" type="submit" className="mt-3">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
