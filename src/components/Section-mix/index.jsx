import React from "react";
import "./style.scss";
import img1 from "../images/cirurgia1.jpg";
import img2 from "../images/exame1.jpg";
import img4 from "../images/dicas4.jpg";


import { Row, Col } from "react-bootstrap";
// import img3 from '../images/dicas3.png'
// import img4 from '../images/dicas4.jpg'

import { Link } from "gatsby";

const SectionMix = () => {
  return (
    <div id="dicas" className="container-section">
      <div className="container d-block">
        {/* <div className="card-container d-flex justify-content-center"> */}
        <Row>
          <Col xs={12} sm={4}>
            <Row>
        <div>
          <h1 className="text-card">Exames</h1>
        </div>

            </Row>
            <div className="card m-2">
              <img
              alt="imagem de óculos"
                src={img2}
                className="img-section rounded img-thumbnail"
              />
              <div className="card-body">
                <p className="card-text">
                Contamos com os mais modernos equipamentos oftalmológicos para diagnóstico e tratamento das patologias oculares.
                </p>
                
              </div>
              <Link to="/exames/"
                  className="btn m-2 btn-primary">
                  Saiba mais
                </Link>
            
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <Row>

          <div>
          <h1 className="text-card"> Doenças oculares </h1>
        </div>
            </Row>

         
            <div className="card m-2">
              <img
              alt="imagem de óculos"
                src={img4}
                className="img-section rounded img-thumbnail"
              />
              <div className="card-body">
                <p className="card-text">
                Contamos com os mais modernos equipamentos oftalmológicos para diagnóstico e tratamento das patologias oculares.
                </p>
                
              </div>
              <Link to="/doencas-oculares/"
                  className="btn m-2 btn-primary">
                  Saiba mais
                </Link>
            
            </div>
          </Col>
          <Col xs={12} sm={4}>
          <Row>

<div>
<h1 className="text-card"> Tratamentos</h1>
</div>
  </Row>

  <div className="card m-2">
              <img
              alt="imagem de óculos"
                src={img1}
                className="img-section rounded img-thumbnail"
              />
              <div className="card-body">
                <p className="card-text">
                Contamos com os mais modernos equipamentos oftalmológicos para diagnóstico e tratamento das patologias oculares.
                </p>
                
              </div>
              <Link to="/tratamentos/"
                  className="btn m-2 btn-primary">
                  Saiba mais
                </Link>
            
            </div>
          </Col>
         
        </Row>
      </div>
    </div>
  );
};

export default SectionMix;
