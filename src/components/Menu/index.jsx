
import React,{useEffect, useState} from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../images/logotipo03.jpeg"
import  scrolTo   from '../../utils/redirectSection';


import './style.scss'

const Menu = () => {
const[pathNameUrl, setPathNameUrl] = useState("");
// console.log(pathNameUrl,"aqui");

useEffect(() => {

  scrolTo();

 const pathName  = document.location.pathname;
setPathNameUrl(pathName);
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
              <Nav.Link href="./" > INICIO</Nav.Link>
              <Nav.Link href="#sobre-mim" className={pathNameUrl === "/exames/" ?  "desative" : ""}> SOBRE MIM</Nav.Link>
              <Nav.Link href="./exames">  EXAMES </Nav.Link>
              <Nav.Link href="./#">DOENÇAS OCULARES</Nav.Link>
              <Nav.Link href="./tratamento">TRATAMENTOS E CIRURGIAS</Nav.Link>
              <Nav.Link href="#dicas" className={pathNameUrl === "/exames/" ?  "desative" : ""} >DICAS</Nav.Link>
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