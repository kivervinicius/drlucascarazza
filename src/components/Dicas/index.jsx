import React from "react";
import "./style.scss";
import img1 from "../images/dicas1.png";
import img2 from "../images/dicas2.png";
import img3 from "../images/folder-lente13.jpg";

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
                <h5 className="card-title">Como escolher a lente?</h5>
                <p className="card-text">
                  A catarata é uma doença em que a lente natural do nosso olho
                  per...
                </p>
                <Link to="/dica-lentes/" className="btn btn-primary">
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
                <h5 className="card-title">Colocar após Tratamento fotossensíveis!</h5>
                <p className="card-text">
                Uma outra alternativa que tem caído... 
                </p>
                <Link to="/dica-folder-lente/" className="btn btn-primary">
                  Saiba mais
                </Link>
              </div>
            </div>
          </Col>
         
        </Row>
      </div>
    </div>
  );
};

export default Card;
