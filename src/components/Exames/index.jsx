import React, { useState } from 'react';
import "./style.scss"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from "../images/imgcon1.png";
import { Accordion } from 'react-bootstrap';
import { examesConsultas, examesCornea, examesGlaucoma, examesRetina, examesLente } from '../allData';


const Exames = () => {

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
      <div className='container-exame  justify-content-center'>
        <Container className='d-block'>
          <Row>
            <h1 className='text-center'>Exames</h1>
            <p className='text-center' style={{ color: "#fff" }}>
              Contamos com os mais modernos equipamentos oftalmológicos para diagnóstico e tratamento das patologias oculares.
            </p>
          </Row>
          <Row className='mt-3'>
            <Col>
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
                      <h6 className='text-center'>CONSULTAS DE ROTINA</h6>
                    </Col>


                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {examesConsultas.map((item) => {
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
                                        {item.imge2 && (
                                          <Col sm={12} md={6}>
                                            <img
                                              className="d-flex m-auto"
                                              width="250"
                                              height="150"
                                              src={item.imge2}
                                              alt={item.name}

                                            />
                                          </Col>
                                        )}
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
          <Row className='mt-3'>
            <Col>
              <Accordion key="2" eventKey="2" defaultActiveKey={activeId}
                onClick={() => toggleActive(2)}
                className={activeId === 2 ? "active" : null} >
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
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
                      <h6 className='text-center'>CÓRNEA, CATARATA, CERATOCONE E  CIRURGIA REFRATIVA</h6>
                    </Col>


                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      {examesCornea.map((item) => {
                        return (
                          <>

                            <Accordion defaultActiveKey={['0']} >
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
                                        {item.imge2 && (
                                          <Col sm={12} md={6}>
                                            <img
                                              className="d-flex m-auto"
                                              width="250"
                                              height="150"
                                              src={item.imge2}
                                              alt={item.name}

                                            />
                                          </Col>
                                        )}
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
          <Row className='mt-3'>
            <Col>
              <Accordion key="2" eventKey="2" defaultActiveKey={activeId}
                onClick={() => toggleActive(2)}
                className={activeId === 2 ? "active" : null} >
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
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
                      <h6 className='text-center'>LENTE DE CONTATO</h6>
                    </Col>


                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      {examesLente.map((item) => {
                        return (
                          <>

                            <Accordion defaultActiveKey={['0']} >
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
                                        {item.imge2 && (
                                          <Col sm={12} md={6}>
                                            <img
                                              className="d-flex m-auto"
                                              width="250"
                                              height="150"
                                              src={item.imge2}
                                              alt={item.name}

                                            />
                                          </Col>
                                        )}
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
          <Row className='mt-3'>
            <Col>
              <Accordion defaultActiveKey={['3']} >
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
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
                      <h6 className='text-center'>GLAUCOMA</h6>
                    </Col>


                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      {examesGlaucoma.map((item) => {
                        return (
                          <>

                            <Accordion defaultActiveKey={['0']} >
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
                                        {item.imge2 && (
                                          <Col sm={12} md={6}>
                                            <img
                                              className="d-flex m-auto"
                                              width="250"
                                              height="150"
                                              src={item.imge2}
                                              alt={item.name}

                                            />
                                          </Col>
                                        )}
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
          <Row className='mt-3 mb-3'>
            <Col>
              <Accordion defaultActiveKey={['4']} >
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
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
                      <h6 className='text-center'>RETINA</h6>
                    </Col>


                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      {examesRetina.map((item) => {
                        return (
                          <>

                            <Accordion defaultActiveKey={['0']} >
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
                                        {item.imge2 && (
                                          <Col sm={12} md={6}>
                                            <img
                                              className="d-flex m-auto"
                                              width="250"
                                              height="150"
                                              src={item.imge2}
                                              alt={item.name}

                                            />
                                          </Col>
                                        )}
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
  );
}


export default Exames;


