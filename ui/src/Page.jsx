import React from 'react';
import {
  Navbar, Nav, NavItem, Grid,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Routes from './Routes.jsx';
import Help from './Help.jsx';

function NavBar() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>Product Inventory</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/"><NavItem>Home</NavItem></LinkContainer>
        <LinkContainer to="/products"><NavItem>Product List</NavItem></LinkContainer>
        <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer>
      </Nav>
      <Nav pullRight>
        <Help />
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
      <Grid fluid>
        <Routes />
      </Grid>
      <Footer />
    </div>
  );
}
