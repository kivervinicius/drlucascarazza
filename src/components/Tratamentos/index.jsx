
import React, { useState } from 'react';
import "./style.scss"

import img from "../images/imgcon1.png"
import img1 from "./images/catarata.png"
import img2 from "./images/yag-laser.jpg"

import { Accordion } from 'react-bootstrap';
import Galeria from "../Galleria";
import { Col, Container, Row } from 'react-bootstrap';



const consultas = [
  {
    id: 1,
    img: img1,
    name: 'Cirurgia de catarata',
    url: " https://www.leica-microsystems.com/products/surgical-microscopes/p/leica-m620-f20/"
  },

]

const implante = [
  {
    id: 2,
    img: img2,
    name: ' Yag Laser para capsulotomia (limpeza de lente pós cirurgia de catarata)',
    url: "https://houseofvision.com.br/equipamentos/yag-laserslt-deux/"
  },
  {
    id: 3,
    name: ' Tratamento clinico do ceratocone com adaptação de lentes  de contato gelatinosas, rígidas, multicurvas e esclerais. ',
    url: ""
  },

  {
    id: 4,
    name: 'Cirurgia de Anel intra corneano para ceratocone (manual e com laser de femtosegundo)',
    url: ""
  },


]

const cirurgiaLaser = [
  {
    id: 6,
    name: 'Cross Linking para ceratocone',
    url: ""
  },
  {
    id: 10,
    name: 'Iridotomia a laser para glaucoma',
    url: ""

  },
  {
    id: 8,
    name: 'Cirurgia de Glaucoma (trabeculectomia- TREC)',
    url: ""
  },


  {
    id: 9,
    name: 'Cirurgia a laser para glaucoma (trabeculoplastia seletiva – SLT)',
    url: ""

  },

  {
    id: 5,
    name: 'cirurgia à laser realizada em Cuiabá, em parceria com hospital de olhos de Cuiaba.',
    url: ""
  },

  {
    id: 7,
    name: 'Cirurgia de Pterígio com auto transplante conjuntival e cola biológica (sem pontos)',
    url: ""
  },

  {
    id: 11,
    name: ' Cirurgia a laser para correção de grau de miopia, astigmatismo e hipermetropia (PRK e LASIK)',
    url: ""

  },
]


const CirurgiasEtratamento = () => {
  const [activeId, setActiveId] = useState(2);

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  return (
    <>
      <div className='container-cirurgia  justify-content-center'>
        <Container className='d-block'>
          <Galeria />
          <Row className="mt-3">
            <Col xs={12} md={12}>
              <Accordion
                key='1' eventKey='1'
                onClick={() => toggleActive(1)}
                className={activeId === 1 ? "active" : null}
              >
                <Accordion.Item >
                  <Accordion.Header
                  >
                    <Col sm={1}>
                      <img
                        className="d-flex m-auto"
                        width="70"
                        height="35"
                        src={img}
                        alt='logotipo'
                      />
                    </Col>
                    <Col>
                      <h6 className='text-center'>EM PACERIA COM DRA. SILVANE BIGOLIN/INSTITUTO DA VISÃO</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {consultas.map((item) => {
                        return (
                          <>

                            <Accordion key={item.id} >
                              <Accordion.Item eventKey={item.id}>
                                <Accordion.Header>
                                  <Col sm={1}>
                                    <img
                                      className="d-flex m-auto"
                                      width="70"
                                      height="35"
                                      src={img}
                                      alt={item.name}
                                    />
                                  </Col>
                                  <Col>
                                    <h6 className='text-center'>{item.name}</h6>
                                  </Col>


                                </Accordion.Header>
                                <Accordion.Body>
                                  <Row sm={12}>
                                    <Col sm={6}>
                                      <Row sm={6}>
                                        <Col sm={12} md={6}>
                                          <img
                                            className="d-flex m-auto"
                                            width="250"
                                            height="150"
                                            src={item.img}
                                            alt={item.name}
                                          />
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Row sm={12}>
                                      <p>{item.nikName}</p>
                                    </Row>
                                  </Row>

                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                            <p className="text tex-center ">

                            </p>


                          </>

                        )


                      })

                      }
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} md={12}>
              <Accordion
                key='2' eventKey='2'
                onClick={() => toggleActive(1)} defaultActiveKey={['2']}
                className={activeId === 1 ? "active" : null}
              >
                <Accordion.Item >
                  <Accordion.Header
                  >
                    <Col sm={1}>
                      <img
                        className="d-flex m-auto"
                        width="70"
                        height="35"
                        src={img}
                        alt='logotipo'
                      />
                    </Col>
                    <Col>
                      <h6 className='text-center'>IMPLANTE DE TODAS AS LENTES INTRA OCULARES DISPONÍVEIS NO MERCCADO OFTAMOLÓGICO   <br /> PARA EXCELÊNCIA EM RESULTADO EM RESULTADO DE CIRURGIA DE CATARATA</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {implante.map((item) => {
                        return (
                          <>

                            <Accordion key={item.id} >
                              <Accordion.Item eventKey={item.id}>
                                <Accordion.Header>
                                  <Col sm={1}>
                                    <img
                                      className="d-flex m-auto"
                                      width="70"
                                      height="35"
                                      src={img}
                                      alt={item.name}
                                    />
                                  </Col>
                                  <Col>
                                    <h6 className='text-center'>{item.name}</h6>
                                  </Col>


                                </Accordion.Header>
                                <Accordion.Body>
                                  <Row sm={12}>
                                    <Col sm={6}>
                                      <Row sm={6}>
                                        <Col sm={12} md={6}>
                                          <img
                                            className="d-flex m-auto"
                                            width="250"
                                            height="150"
                                            src={item.img}
                                            alt={item.name}
                                          />
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Row sm={12}>
                                      <p>{item.nikName}</p>
                                    </Row>
                                  </Row>

                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>

                            <p className="text tex-center ">

                            </p>

                          </>

                        )


                      })

                      }
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <Row className="mt-3 mb-3" >
            <Col xs={12} md={12}>
              <Accordion
                key='3' eventKey='3' defaultActiveKey={['3']}
                onClick={() => toggleActive(2)}
                className={activeId === 2 ? "active" : null}
              >
                <Accordion.Item >
                  <Accordion.Header
                  >
                    <Col sm={1}>
                      <img
                        className="d-flex m-auto"
                        width="70"
                        height="35"
                        src={img}
                        alt='logotipo'
                      />
                    </Col>
                    <Col>
                      <h6 className='text-center'>CIRURGIAS À LASER REALIZADA EM  CUIABÁ, EM PARCERIA COM HOSPITAL DE OLHOS DE CUIBÁ</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {cirurgiaLaser.map((item) => {
                        return (
                          <>

                            <Accordion key={item.id} >
                              <Accordion.Item eventKey={item.id}>
                                <Accordion.Header>
                                  <Col sm={1}>
                                    <img
                                      className="d-flex m-auto"
                                      width="70"
                                      height="35"
                                      src={img}
                                      alt={item.name}
                                    />
                                  </Col>
                                  <Col>
                                    <h6 className='text-center'>{item.name}</h6>
                                  </Col>


                                </Accordion.Header>
                                <Accordion.Body>
                                  <Row sm={12}>
                                    <Col sm={6}>
                                      <Row sm={6}>
                                        <Col sm={12} md={6}>
                                          <img
                                            className="d-flex m-auto"
                                            width="250"
                                            height="150"
                                            src={item.img}
                                            alt={item.name}
                                          />
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Row sm={12}>
                                      <p>{item.nikName}</p>
                                    </Row>
                                  </Row>

                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>


                            <p className="text tex-center ">

                            </p>
                          </>

                        )


                      })

                      }
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
};

export default CirurgiasEtratamento;