import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../assets/logo.png';

const NavBar = () => (
  <Navbar fluid='true' collapseOnSelect expand='lg'>
    <LinkContainer to='/'>
      <Navbar.Brand>
        <img
          src={logo}
          style={{ width: '175px' }}
          className='App-logo'
          alt='logo'
        />
      </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
    <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav className='ml-auto'>
        <LinkContainer to='/about'>
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/membership'>
          <Nav.Link>Membership</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/calendar'>
          <Nav.Link>Calendar</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/contactus'>
          <Nav.Link>Contact Us</Nav.Link>
        </LinkContainer>
        <Nav.Link href='https://uhcode.red/'>
          CodeRED
          </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
