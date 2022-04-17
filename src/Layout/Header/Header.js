import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import logo from "../../logo-white.png";
import auth from "../../utils/firebase.init";
import './Header.css';

const Header = () => {
  const [user] = useAuthState(auth);

  const handelSignOut  = () => {
    signOut(auth);
  }

  return (
    <header className='header-area'>
      <Navbar expand='lg' bg="dark" variant="dark">
        <Container fluid>
          <Link className='navbar-brand' to='/'>
            <img src={logo} alt="" />
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto me-auto'>
              <NavLink className='nav-link' to='/'>Home</NavLink>
              <NavLink className='nav-link' to='/about'>About Me</NavLink>
              <NavLink className='nav-link' to='/blog'>Blog</NavLink>
              <NavLink className='nav-link' to='/checkout'>Checkout</NavLink>
            </Nav>
          </Navbar.Collapse>          
          {
            user ?
            <button onClick={handelSignOut} className='btn btn-gr-red'>Sign Out</button>
            :
            <Nav.Link as={Link} to='login' className='btn btn-gr-red'>Sign In</Nav.Link>
          }
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
