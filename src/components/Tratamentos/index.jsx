import React, { useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import "./style.scss";

import img from "../images/imgcon1.png";
import { tratamentosData } from '../allData';

const CirurgiasEtratamento = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleActive = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="container-cirurgia justify-content-center">
      <Container className='d-block'>
        {tratamentosData.map((section, sectionIndex) => (
          <Row key={sectionIndex} className="mt-3 mb-3">
            <Col xs={12}>
              {/* <Accordion activeKey={activeId === sectionIndex ? "open" : null} alwaysOpen> */}
              <Accordion alwaysOpen defaultActiveKey={tratamentosData.map((_, i) => String(i))} key={`ac-${sectionIndex}`}>
                <Accordion.Item eventKey={String(sectionIndex)}>
                  <Accordion.Header onClick={() => toggleActive(sectionIndex)}>
                    <Col sm={1}>
                      <img
                        className="d-flex m-auto"
                        width="70"
                        height="35"
                        src={img}
                        alt="ícone"
                      />
                    </Col>
                    <Col>
                      <h6 className="text-center">{section.title}</h6>
                    </Col>
                  </Accordion.Header>

                  <Accordion.Body>
                    {section.items.map((item) => (
                      <Accordion alwaysOpen defaultActiveKey={section.items.map(item => String(item.id))} className="mb-3" key={`ac-it${item.id}`}>
                        <Accordion.Item eventKey={String(item.id)}>
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
                              <h6 className="text-center">{item.name}</h6>
                            </Col>
                          </Accordion.Header>

                          <Accordion.Body>
                            <Row>
                              <Col sm={12} md={6}>
                                <Row>
                                  {item.images.map((src, i) => (
                                    <Col key={i} sm={12} md={6}>
                                      <img
                                        className="d-flex m-auto"
                                        width="250"
                                        height="150"
                                        src={src}
                                        alt={item.name}
                                      />
                                    </Col>
                                  ))}
                                </Row>
                              </Col>
                              <Col sm={12}>
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: item.description,
                                  }}
                                />
                                {item.url && (
                                  <p>
                                    <a className="btn btn-primary mt-2" href={item.url} target="_blank" rel="noopener noreferrer">Saiba mais</a>
                                  </p>
                                )}
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default CirurgiasEtratamento;
