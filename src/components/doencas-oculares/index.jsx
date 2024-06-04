
import React, { useState } from 'react';

import img from "../images/imgcon1.png";
import { Accordion, Alert } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';

const link1 =<a href="/catarata-cirurgia">Catarata e Cirurgia de Catarata</a>  
const link2 =  <a href='/lentes'>Como escolher a lente intraocular para cirurgia de catarata mais adequada para o meu olho?</a>
const link3 = <a href='/dica-oculos'>Comos escolher seus óculos</a>
const link31 = <a href='/cirurgia-refrativa'>Cirúrgia refrativa</a>
const link4 = <a href='/ceratocone'>Ceratocone</a>
const link21 = <a href='/conjutivites-infecciosas'>Conjuntivites Infecciosas</a>
const link22 = <a href='/conjutivites-alergicas'>Conjuntivites Alérgicas</a>
const dicaPediatria = <a href='/dica-pediatria/'>Consultas oftalmológicas de rotina na infância</a>
const corOlhos = <a href='/dica-pediatria-cor-olhos//'>Como vai ser formada a cor do olho do meu bebê?</a>

const catarataLente = [
  {
    id: 1,
    name: 'Catarata',
    nikName: link1 ,
},
  
  {
    id: 2,
    name: 'Como escolher sua lente para cirurgia de catarata ',
    nikName: link2,
  }
]

const conjuntiva = [
  {
    id: 2.1,
    name: 'Conjuntivites Infecciosas',
    nikName: link21,
  },
  {
    id: 2.2,
    name: 'Conjuntivites Alérgicas',
    nikName: link22,
  },
]

const refracao =[{
  
    id: 7,
    name: 'Dicas para te ajudar a escolher o seus óculos',
    nikName: link3,
},{
  
    id: 7.1,
    name: 'Cirurgia refrativa',
    nikName: link31,
},
];

const cornea =[{
  
    id: 8,
    name: 'Ceratocone',
    nikName: link4,
},
];

const oftalmoPediatria =[{
  
    id: 9,
    name: 'Consultas oftalmológicas de rotina na infância',
    nikName: dicaPediatria,
},{
  
    id: 10,
    name: 'Cor dos olhos',
    nikName: corOlhos,
},
];



const DoencasOculares = () => {
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
                      <h6 className='text-center'>CATARATA</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {catarataLente.map((item) => {
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
                                      <p>{item.nikName}</p>
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
                      <h6 className='text-center'>Conjuntivites infecciosas</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {conjuntiva.map((item) => {
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
                                      <p>{item.nikName}</p>
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
          <Row className="mt-3 mb-3">
            <Col xs={12} md={12}>
              <Accordion
                key='3' eventKey='3'
                onClick={() => toggleActive(3)}
                className={activeId === 3 ? "active" : null}
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
                      <h6 className='text-center'>Córnea</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {cornea.map((item) => {
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
                                      <p>{item.nikName}</p>
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
          <Row className="mt-3 mb-3">
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
                      <h6 className='text-center'>REFRAÇÃO E ÓCULOS</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {refracao.map((item) => {
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
                                      <p>{item.nikName}</p>
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
          <Row className="mt-3 mb-3">
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
                      <h6 className='text-center'>OFTALMO PEDIATRIA</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {oftalmoPediatria.map((item) => {
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
                                      <p>{item.nikName}</p>
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
          <Alert variant="danger"  dismissible>
        <Alert.Heading> Página em construção!</Alert.Heading>
        <p>
        Serão divulgados novos artigos em breve...
        </p> 
        </Alert>
        </Container>
      </div>

    </>
  )
};

export default DoencasOculares;