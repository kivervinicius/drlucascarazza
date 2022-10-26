import React from "react";
import "./style.scss";
import img1 from "../images/dicas1.png";
import img2 from "../images/dicas2.png";
import { Row, Col } from "react-bootstrap";
// import img3 from '../images/dicas3.png'
// import img4 from '../images/dicas4.jpg'

import { Link } from "gatsby";

const Card = () => {
  return (
    <div className="container-dicas">
      <div className="container d-block">
        <div>
          <h1 className="text-card">DICAS</h1>
        </div>
        {/* <div className="card-container d-flex justify-content-center"> */}
        <Row>
          <Col xs={6} sm={4}>
            <div className="card m-2">
              <img
                src={img1}
                className="img-dicas rounded img-thumbnail"
              />
              <div className="card-body">
                <h5 className="card-title">Como escolher seus óculos?</h5>
                <p className="card-text">
                  A principal dica para escolher uma armação é escolher a que...
                </p>
                <Link to="/dica-oculos" className="btn btn-primary">
                  Saiba mais
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={6} sm={4}>
            <div className="card m-2">
              <img
                className="img-dicas rounded img-thumbnail"
                src={img2}
              />
              <div className="card-body">
                <h5 className="card-title">Como escolher a lente intraocular?</h5>
                <p className="card-text">
                  A catarata é uma doença em que a lente natural do nosso olho
                  per...
                </p>
                <Link to="/dica-lentes" className="btn btn-primary">
                  Saiba mais
                </Link>
              </div>
            </div>
          </Col>
          {/* <div className="card m-2">
            <img className="img-dicas rounded img-thumbnail" src={img3} alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='/dicas' className="btn btn-primary">Saiba mais</Link>
            </div>
          </div>
          <div className="card m-2">
            <img className="img-dicas rounded img-thumbnail" src={img4} alt="" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='/dicas/Blog/post-1' className="btn btn-primary">Saiba mais</Link>
            </div>
          </div> */}
        </Row>
      </div>
    </div>
  );
};

export default Card;
