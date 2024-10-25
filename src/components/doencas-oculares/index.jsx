import React, { useState } from 'react';
import img from "../images/imgcon1.png";
import { Accordion, Alert, Col, Container, Row } from 'react-bootstrap';
import { catarataLente, conjuntiva, cornea, refracao, lentes, oftalmoPediatria } from './data';

const InnerAccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado controlado para cada item interno

  return (
    <Accordion className="mb-3" activeKey={isOpen ? item.id : null}>
      <Accordion.Item eventKey={item.id}>
        <Accordion.Header onClick={() => setIsOpen(!isOpen)}>
          <Col sm={1}>
            <img className="d-flex m-auto" width="70" height="35" src={img} alt={item.name} />
          </Col>
          <Col>
            <h6 className="text-center">{item.name}</h6>
          </Col>
        </Accordion.Header>
        <Accordion.Body>
          <Row sm={12}>
            <p>{item.nikName}</p>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

const AccordionItem = ({ id, header, data }) => (
  <Accordion defaultActiveKey={id} className="mb-3">
    <Accordion.Item eventKey={id}>
      <Accordion.Header>
        <Col sm={1}>
          <img className="d-flex m-auto" width="70" height="35" src={img} alt={header} />
        </Col>
        <Col>
          <h6 className="text-center">{header}</h6>
        </Col>
      </Accordion.Header>
      <Accordion.Body>
        <Row>
          {data.map((item) => (
            <InnerAccordionItem key={item.id} item={item} />
          ))}
        </Row>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

const DoencasOculares = () => {
  const sections = [
    { id: 1, header: 'CATARATA', data: catarataLente },
    { id: 2, header: 'Conjuntivites Infecciosas', data: conjuntiva },
    { id: 3, header: 'Córnea', data: cornea },
    { id: 4, header: 'REFRAÇÃO E ÓCULOS', data: refracao },
    { id: 5, header: 'LENTES DE CONTATO', data: lentes },
    { id: 6, header: 'OFTALMO PEDIATRIA', data: oftalmoPediatria },
  ];

  return (
    <div className="container-cirurgia justify-content-center">
      <Container className="d-block">
        {sections.map(({ id, header, data }) => (
          <Row key={id} className="mt-3 mb-3">
            <Col xs={12}>
              <AccordionItem id={id} header={header} data={data} />
            </Col>
          </Row>
        ))}

        <Alert variant="danger" dismissible>
          <Alert.Heading>Página em construção!</Alert.Heading>
          <p>Serão divulgados novos artigos em breve...</p>
        </Alert>
      </Container>
    </div>
  );
};

export default DoencasOculares;
