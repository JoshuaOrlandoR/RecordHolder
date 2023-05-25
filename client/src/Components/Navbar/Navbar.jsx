// components/Navbar/Navbar.jsx
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <Nav className=" navbar-container flex-column">
      <Nav.Link as={Link} to="/dashboard" className="my-5 title-link">RecordHolder</Nav.Link>
      <Nav.Link as={Link} to="/inventory-list" className="my-3 route-link">Inventory List</Nav.Link>
      <Nav.Link as={Link} to="/user-profile" className="my-3 route-link">User Profile</Nav.Link>
      <Nav.Link as={Link} to="/storefront" className="my-3 route-link">Simulated Storefront</Nav.Link>
      <Nav.Link as={Link} to="/logout" className="my-5 logout-link">Logout</Nav.Link>
      <p>More items can be added to the nav bar based on user needs!</p>
    </Nav>
  );
}

export default Navbar;
