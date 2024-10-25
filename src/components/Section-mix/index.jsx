import React from "react";
import "./style.scss";
import img1 from "../images/cirurgia1.jpg";
import img2 from "../images/exame1.jpg";
import img4 from "../images/section1.jpeg";
import { Row, Col } from "react-bootstrap";
import { Link } from "gatsby";

const sections = [
  {
    id: 1,
    title: "Exames",
    image: img2,
    description: "Saiba mais sobre os exames disponíveis para o diagnóstico e acompanhamento das patologias oculares.",
    link: "/exames/",
  },
  {
    id: 2,
    title: "Doenças oculares",
    image: img4,
    description: "Confira artigos com informações sobre as principais doenças oculares.",
    link: "/doencas-oculares/",
  },
  {
    id: 3,
    title: "Tratamentos",
    image: img1,
    description: "Acesse para conhecer todos os tratamentos e cirurgias disponíveis.",
    link: "/tratamentos/",
  },
];

const SectionMix = () => (
  <div id="dicas" className="container-section">
    <div className="container d-block">
      <Row>
        {sections.map(({ id, title, image, description, link }) => (
          <Col key={id} xs={12} sm={4}>
            <Row>
              <h1 className="text-card  mt-3" style={{fontSize: "2.8rem"}}>{title}</h1>
            </Row>
            <div className="card m-2">
              <img
                alt={`imagem de ${title.toLowerCase()}`}
                src={image}
                className="img-section rounded img-thumbnail"
              />
              <div className="card-body">
                <p className="card-text">{description}</p>
              </div>
              <Link to={link} className="btn m-2 btn-primary">
                Saiba mais
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </div>
);

export default SectionMix;
