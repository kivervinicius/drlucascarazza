
import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logotipo03.jpeg"

import './style.scss'

const Menu = () => {
    return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" className="menu fixed-top">
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
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"

            >
              <Nav.Link href="../"> INICIO</Nav.Link>
              <Nav.Link href="../#sobre-mim"> SOBRE MIM</Nav.Link>
              <Nav.Link href="../sobre-a-clinica/"  > SOBRE A CLINICA </Nav.Link>
              <Nav.Link href="../exames/" >  EXAMES </Nav.Link>
              <Nav.Link href="/catarata-cirurgia/">DOENÇAS OCULARES</Nav.Link>
              <Nav.Link href="../tratamentos">TRATAMENTOS E CIRURGIAS</Nav.Link>
              <Nav.Link href="../#dicas">DICAS</Nav.Link>
              <Nav.Link href="#footer">CONTATO</Nav.Link>
              {/* Sobre mim / Exames / Doenças oculares/ Cirurgias e tratamentos (mesmo tópico)/Dicas/ Contato  */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default Menu; 