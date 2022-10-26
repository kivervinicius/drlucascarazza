
import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logotipo03.jpeg"


import './style.scss'

const Menu = () => {

  return (
    <>
      <Navbar bg="light" expand="lg" className="fixed-top">
        <Container fluid className="container-menu justify-content-between">
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="100"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="./tratamentos">TRATAMENTOS</Nav.Link>
              <Nav.Link href="./exames">EXAMES</Nav.Link>
              <Nav.Link href="#">CIRURGIAS</Nav.Link>
              <Nav.Link href="#">DICAS</Nav.Link>
              <Nav.Link href="#">CONTATOS</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
    </>
  );
}

export default Menu;