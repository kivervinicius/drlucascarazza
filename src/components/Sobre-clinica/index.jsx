import React from "react"
import img1 from "../images/clinica.png"
import img2 from "../images/clinica2.png"
import img3 from "../images/clinica3.png"
import img4 from "../images/clinica4.png"
import { Row, Col,Stack } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import "react-image-lightbox/style.css";
import "./style.scss"


const SobreAcl = () => {
  return (
    <div id="clinica" class="container-clinica">
      <div className="container container-md d-flex justify-content-around">
        <Row>
          <Col xs={12} md={5} >
            <Row>
              <Col xs={6} md={12} lg={6}>
                <img alt="foto da clinica" src={img1} className="img-clinica img-thumbnail img-fluid"></img>
              </Col>
              <Col xs={6} md={12} lg={6}>
                <img alt="foto da clinica" src={img2} className="img-clinica img-thumbnail img-fluid"></img>
              </Col>
              <Col xs={6} md={12} lg={6}>
                <img alt="foto da clinica" src={img3} className="img-clinica img-thumbnail img-fluid"></img>
              </Col>
              <Col xs={6} md={12} lg={6}>
                <img alt="foto da clinica" src={img4} className="img-clinica img-thumbnail img-fluid"></img>
              </Col >
            </Row>
          </Col>

          <Col md={7}>
            <div className="text-center" >

              <h1 className="text-clinica text-center">Sobre a clínica</h1>
              <p className="text-clinica text-center" >
                Nosso consultório fica em um moderno espaço em uma das principais avenidas de Tangará da Serra, dentro da Clínica Instituto da Visão, em frente ao Fórum Municipal e possuímos os mais modernos equipamentos de diagnóstico e cirúrgicos. Além do consultório oftalmológico, contamos com salas de exames, sala de adaptação de lentes de contato e um centro cirúrgico moderno.
              </p>
              <Stack gap={2} className="col-md-5 mx-auto">
                 <Button  href="/sobre-a-clinica" variant="outline-primary">Saiba mais</Button>
              </Stack>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );

}
export default SobreAcl