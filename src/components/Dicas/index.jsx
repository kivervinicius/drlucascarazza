import React from "react";
import "./style.scss";
import img1 from "../images/dicas1.png";
import img2 from "../images/dicas2.png";
import img3 from "../images/dicas3.jpg";
import { Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

const Card = () => {
  const cardData = [
    {
      id: 1,
      image: img1,
      alt: "imagem de óculos",
      title: "Dicas para te ajudar a escolher seus óculos",
      text: "A principal dica para escolher uma armação é escolher a que...",
      link: "/dica-oculos/",
    },
    {
      id: 2,
      image: img2,
      alt: "imagem de lente",
      title: "Como escolher sua lente para cirurgia de catarata?",
      text: "A escolha da lente intraocular é uma oportunidade muito interessante para poder...",
      link: "/lentes/",
    },
    {
      id: 3,
      image: img3,
      alt: "imagem de consulta oftalmológica",
      title: "Consultas oftalmológicas de rotina na infância",
      text: "A primeira consulta oftalmológica na infância é um marco importante no cuidado...",
      link: "/dica-pediatria/",
    },
  ];

  return (
    <div id="dicas" className="container-dicas">
      <div className="container d-block">
        <h1 className="text-card">DICAS</h1>
        <Row>
          {cardData.map((card) => (
            <Col key={card.id} xs={12} sm={4}>
              <div className="card m-2">
                <img
                  alt={card.alt}
                  src={card.image}
                  className="img-dicas rounded img-thumbnail"
                />
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <p className="card-text">{card.text}</p>
                  <Link to={card.link} className="btn btn-primary">
                    Saiba mais
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Card;
