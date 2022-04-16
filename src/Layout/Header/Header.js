import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../logo-white.png";
import './Header.css';

const Header = () => {
  return (
    <header className='header-area'>
      <Navbar expand='md' bg="dark" variant="dark">
        <Container fluid>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt="" />
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto me-auto'>
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/aboutme'>About Me</NavLink>
              <NavLink className='nav-link' to='/blog'>Blog</NavLink>
              <NavLink className='nav-link' to='/checkout'>Checkout</NavLink>
            </Nav>
          </Navbar.Collapse>
          <Button className='btn btn-gr-red'>Sign In</Button>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
