
import React,{useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logotipo03.jpeg"
import  scrolTo   from '../../utils/redirectSection';


import './style.scss'

const Menu = () => {

useEffect(() => {

  scrolTo();

}, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light"  className="menu fixed-top">
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
              <Nav.Link href="#banner"> INICIO</Nav.Link>
              <Nav.Link href="#sobre-mim"> SOBRE MIM</Nav.Link>
              <Nav.Link href="./exames" disabled>  EXAMES </Nav.Link>
              <Nav.Link href="./#" disabled>DOENÇAS OCULARES</Nav.Link>
              <Nav.Link href="./tratamento" disabled>TRATAMENTOS E CIRURGIAS</Nav.Link>
              <Nav.Link href="#dicas">DICAS</Nav.Link>
              <Nav.Link href="#footer">CONTATOS</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
   
    </>
  );
}

export default Menu; 