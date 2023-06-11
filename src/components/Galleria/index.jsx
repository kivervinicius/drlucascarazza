import React, { useState } from "react";


import img1 from "./images/Dr3.jpg";
import img2 from "./images/Dr12.jpg";
import img4 from "./images/Dr13.jpg";
import img3 from "./images/Dr18.jpg";
import img6 from "./images/Dr19.jpg";
import img7 from "./images/Dr20.jpg";
import img8 from "./images/Dr28.jpg";
import img9 from "./images/D1.jpg";
import img10 from "./images/D2.jpg";
import img11 from "./images/D3.jpg";
import img12 from "./images/D4.jpg";
import { Row, Col, Button, Stack } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
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
];

const Galeria = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <div className="d-block">
    
         <div id="clinica" class="container-clinica-page mt-5">
          <Row>
            <Col  md={7} className="text-center">
              <div className="text-center" >

                <h1 className="text-clinica text-center">Nosso consultório</h1>
                <p className="text-clinica text-center" >
                Fica em um moderno espaço em uma das principais avenidas de Tangará da Serra, em frente ao Fórum Municipal e possuímos os mais modernos equipamentos de diagnóstico e cirúrgicos. 
                </p>
              </div>
            </Col>
            <Col xs={12} md={5} >
              <Row>
                <Col xs={6} md={12} lg={6}>
                  <img alt="foto da clinica" src={img6} className="img-clinica img-thumbnail img-fluid"></img>
                </Col>
                <Col xs={6} md={12} lg={6}>
                  <img alt="foto da clinica" src={img7} className="img-clinica img-thumbnail img-fluid"></img>
                </Col >
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={7}>
            <Col xs={12} md={12} lg={12}>
                  <img  src={img1} alt="foto da clinica" className="img-clinica-home img-thumbnail img-fluid"></img>
                </Col>
            </Col>
            <Col xs={12} md={5}>
              <Row>
                <Col xs={6} md={12} lg={6}>
                  <img alt="foto da clinica" src={img4} className="img-clinica img-thumbnail img-fluid"></img>
                </Col>
                <Col xs={6} md={12} lg={6}>
                  <img alt="foto da clinica" src={img8} className="img-clinica img-thumbnail img-fluid"></img>
                </Col>
                <Col xs={6} md={12} lg={6}>
                  <img alt="foto da clinica" src={img3} className="img-clinica img-thumbnail img-fluid"></img>
                </Col>
                <Col xs={6} md={12} lg={6}>
                  <img alt="foto da clinica" src={img9} className="img-clinica img-thumbnail img-fluid"></img>    
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
      </div>
    </>
  );
};

export default Galeria;
 
