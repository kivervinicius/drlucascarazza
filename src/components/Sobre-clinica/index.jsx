import React from "react"
import img1 from "../images/clinica.png"
import img2 from "../images/clinica2.png"
import img3 from "../images/clinica3.png"
import img4 from "../images/clinica4.png"
import { Row, Col } from "react-bootstrap";

import "./style.scss"
const SobreAcl = () => {
  return (
    <div class="container-clinica">
      <div className="container container-md d-flex justify-content-around">
        <Row>
          <Col xs={12} md={5}>
            <Row>
              <Col xs={6} md={12} lg={6}>
                <img src={img1} className="img-clinica img-thumbnail img-fluid"></img>
              </Col>
              <Col xs={6} md={12} lg={6}>
                <img src={img2} className="img-clinica img-thumbnail img-fluid"></img>
              </Col>
              <Col xs={6} md={12} lg={6}>
                <img src={img3} className="img-clinica img-thumbnail img-fluid"></img>
              </Col>
              <Col xs={6} md={12} lg={6}>
                <img src={img4} className="img-clinica img-thumbnail img-fluid"></img>
              </Col>
            </Row>
          </Col>

          <Col md={7}>
            <div className="text-center" >
              <h1 className="text-clinica text-center">SOBRE A CLINICA</h1>
              <h4 className="text-clinica text-align-center">Missão</h4>
              <p class="text-justify-center text-dr">Oferecer tratamento Oftalmológico com que existe de mais moderno e atualizado na oftalmologia mundial</p>
              <h4 className="text-clinica text-align-center">Visão</h4>
              <p class="text-justify-center text-dr">Ser o seu oftalmologista de confiança assim como da sua familia,oferecendo o que existe de mais moderno para sua saúde visual. </p>
              <h4 className="text-clinica text-align-center">Valores</h4>
              <p class="text-justify-center text-dr">Cuidar do nosso paciente como gostaríamos que cuidasse dos nossos pais e filho;
                estarm sempre atualizado;
                <br />
                Transparência com o paciente;
                <br />
                ética
              </p>
            </div>
          </Col>
        </Row>
      </div>

    </div>
  );

}
export default SobreAcl