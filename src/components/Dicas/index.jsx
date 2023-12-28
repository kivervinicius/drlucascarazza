import React from "react";
import "./style.scss";
import img1 from "../images/dicas1.png";
import img2 from "../images/dicas2.png";
import img3 from "../images/dicas3.jpg";
// import img4 from "../images/cirurgia1.jpg";


import { Row, Col } from "react-bootstrap";
// import img3 from '../images/dicas3.png'
// import img4 from '../images/dicas4.jpg'

import { Link } from "gatsby";

const Card = () => {
  return (
    <div id="dicas" className="container-dicas">
      <div className="container d-block">
        <div>
          <h1 className="text-card">DICAS</h1>
        </div>
        {/* <div className="card-container d-flex justify-content-center"> */}
        <Row>
          <Col xs={12} sm={4}>
            <div className="card m-2">
              <img
              alt="imagem de óculos"
                src={img1}
                className="img-dicas rounded img-thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">Dicas para te ajudar a escolher o seus óculos</h5>
                <p className="card-text">
                  A principal dica para escolher uma armação é escolher a que...
                </p>
                <Link to="/dica-oculos/"
                  className="btn btn-primary">
                  Saiba mais
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <div className="card m-2">
              <img
              alt="imagem de lente"
                className="img-dicas rounded img-thumbnail"
                src={img2}
              />
              <div className="card-body">
                <h5 className="card-title">Como escolher sua lente para cirurgia de catarata?</h5>
                <p className="card-text">
                A escolha da lente intraocular é uma oportunidade muito interessante para poder...
                </p>
                <Link to="/lentes/" className="btn btn-primary">
                  Saiba mais
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <div className="card m-2">
              <img
              alt="imagem de lente"
                className="img-dicas rounded img-thumbnail"
                src={img3}
              />
              <div className="card-body">
                <h5 className="card-title">Consultas oftalmológicas de rotina na infância</h5>
                <p className="card-text">
                A primeira consulta oftalmológica na infância é um marco importante no cuidado...
                </p>
                <Link to="/dica-pediatria/" className="btn btn-primary">
                  Saiba mais
                </Link>
              </div>
            </div>
          </Col>
          {/* <Col xs={12} sm={4}>
            <div className="card m-2">
              <img
              alt="imagem de lente"
                className="img-dicas rounded img-thumbnail"
                src={img4}
              />
              <div className="card-body">
                <h5 className="card-title">Catarata e Cirurgia de Catarata!</h5>
                <p className="card-text">
                A catarata é um processo de opacificação do cristalino... 
                </p>
                <Link to="/dica-catarata-cirurgia/" className="btn btn-primary">
                  Saiba mais
                </Link>
              </div>
            </div>
          </Col> */}
         
        </Row>
      </div>
    </div>
  );
};

export default Card;
