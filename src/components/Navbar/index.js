import React from 'react';
import logo from '../../assets/images/personalLogo.png';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Navigation = ({setLink}) => {
  return (
    <header id="navbar" className="fs-5">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#about-me">
            <img
              src={logo}
              alt="personal logo"
              width="70"
              height="58"
              className="d-inline-block align-text-top"
            />
          </Navbar.Brand>
          <Navbar.Brand>Danny Ramirez</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about-me" onClick={() => {setLink('About Me')}}>About Me</Nav.Link>
              <Nav.Link href="#portfolio" onClick={() => {setLink('Portfolio')}}>Portfolio</Nav.Link>
              <Nav.Link href="#contact" onClick={() => {setLink('Contact')}}>Contact Me</Nav.Link>
              <Nav.Link href="#Resume" onClick={() => {setLink('Resume')}}>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
