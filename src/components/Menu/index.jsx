
import React,{useEffect} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logotipo03.jpeg"



import './style.scss'

const Menu = () => {

  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 && document.documentElement.scrollTop < 2700) {
        document.getElementById("icon").style.display = "block";
    } else {
        document.getElementById("icon").style.display = "none";
    }
}


useEffect(() => {
if (typeof window !== 'undefined') {
window.onscroll = () => { scrollFunction() };
}


}, []);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light"  className="fixed-top">
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
              <Nav.Link href="./#"> SOBRE MIM</Nav.Link>
              <Nav.Link href="./exames">  EXAMES </Nav.Link>
              <Nav.Link href="./#">DOENÇAS OCULARES</Nav.Link>
              <Nav.Link href="./tratamento">TRATAMENTOS E CIRURGIAS</Nav.Link>
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