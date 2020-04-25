import React from 'react';
import {
    Navbar, Nav, NavItem, NavDropdown,
    MenuItem, Glyphicon, Tooltip, OverlayTrigger,
  } from 'react-bootstrap';
  import { LinkContainer } from 'react-router-bootstrap';
import Routes from './Routes.jsx';
function NavBar() {
  return (
    <Navbar>
        <Navbar.Header>
             <Navbar.Brand>Product Inventory</Navbar.Brand>
        </Navbar.Header>
    <Nav>
        <LinkContainer exact to="/"><NavItem>Home</NavItem></LinkContainer>
        <LinkContainer to="/products"><NavItem>Product List</NavItem></LinkContainer>
        <LinkContainer to="/FilterProduct"><NavItem>Filter</NavItem></LinkContainer>
    </Nav>
</Navbar>
  );
}
function Footer() {
    return (
      <small>
        <p className="text-center">
          Full Stack Mern Development
        </p>
      </small>
    );
  }
export default function Page() {
  return (
    <div>
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
}