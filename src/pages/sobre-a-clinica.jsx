import React, { useState } from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import BotaoFlutuante from "../components/Btn-flutuante";
import img1 from "../components/images/clinica.png";
import img2 from "../components/images/clinica2.png";
import img3 from "../components/images/clinica3.png";
import img4 from "../components/images/clinica4.png";
import img6 from "../components/images/Oftalmologista-62.jpg";
import img7 from "../components/images/Oftalmologista-60.jpg";
import img8 from "../components/images/Oftalmologista-44.jpg";
import img9 from "../components/images/Oftalmologista-45.jpg";
import img10 from "../components/images/Oftalmologista-46.jpg";
import img11 from "../components/images/Oftalmologista-47.jpg";
import img12 from "../components/images/Oftalmologista-48.jpg";
import img13 from "../components/images/Oftalmologista-49.jpg";
import img14 from "../components/images/Oftalmologista-56.jpg";
import img15 from "../components/images/Oftalmologista-57.jpg";
import img16 from "../components/images/Oftalmologista-58.jpg";
import img17 from "../components/images/Oftalmologista-59.jpg";
import img18 from "../components/images/Oftalmologista-61.jpg";
import img19 from "../components/images/Oftalmologista-50.jpg";
import { Row, Col, Button, Stack } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "./index.scss";

const images = [
  img15,
  img16,
  img17,
  img18,
  img19,
  img6,
  img7,

  img1,
  img2,
  img3,
  img4,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];

const SobreAclinica = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <div className="d-block">
        <Menu />
        <div id="clinica" class="container-clinica-page p-5 mt-5">
          <Row>
            <Col md={7}>
              <div className="text-center" >

                <h1 className="text-clinica text-center">Sobre a clínica</h1>
                <p className="text-clinica text-center" >
                Nosso consultório fica em um moderno espaço na Avenida Tancredo Neves 1187 W , uma das principais avenidas de Tangará da Serra, dentro da Clínica Instituto da Visão, em frente ao Fórum Municipal. <br />
Em nossa clínica contamos com salas de consultas, salas de <a href="/exames/"> exames </a> , sala de adaptação de lentes de contato e um centro cirúrgico com  mais modernos equipamentos para seu tratamento. 

                </p>
              </div>
            </Col>
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
          </Row>
          <Row>

            <Col md={7}>
            <Col xs={12} md={12} lg={12}>
                  <img  src={img16} alt="foto da clinica" className="img-clinica-home img-thumbnail img-fluid"></img>
                </Col>
            </Col>
            <Col xs={12} md={5}>
              <Row>
                <Col xs={6} md={12} lg={6}>
                  <img alt="foto da clinica" src={img9} className="img-clinica img-thumbnail img-fluid"></img>
                </Col>
                <Col xs={6} md={12} lg={6}>
                  <img alt="foto da clinica" src={img8} className="img-clinica img-thumbnail img-fluid"></img>
                </Col>
                <Col xs={6} md={12} lg={6}>
                  <img alt="foto da clinica" src={img10} className="img-clinica img-thumbnail img-fluid"></img>
                </Col>
                <Col xs={6} md={12} lg={6}>
                  <img alt="foto da clinica" src={img19} className="img-clinica img-thumbnail img-fluid"></img>    
                </Col >
                <Stack gap={2} className="col-md-3 mx-auto pt-3">
                 <Button  onClick={() => setIsOpen(true)} variant="light">Ver todas as fotos</Button>
              </Stack>
              </Row>
            </Col>
          </Row>
        </div>
        {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={(photoIndex + 1) % images.length}
          prevSrc={

            (photoIndex + images.length - 1) % images.length

          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
        <BotaoFlutuante />
        <Footer />
      </div>
    </>
  );
};

export default SobreAclinica;
