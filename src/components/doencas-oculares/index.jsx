import React from 'react';
import img from "../images/imgcon1.png";
import { Accordion, Alert, Col, Container, Row } from 'react-bootstrap';
import { catarataLente, conjuntiva, cornea, refracao, lentes, oftalmoPediatria, olhoSeco, glaucoma } from './data';

const InnerAccordion = ({ data }) => {
  return (
    data?.map((single) => (
      <div className="border rounded p-3 mb-3 d-flex align-items-center">
        <Col sm={1}>
          <img className="d-flex m-auto" width="70" height="35" src={img} alt={single.name} />
        </Col>
        <Col>
          <h6 className="text-center m-0">{single.nikName}</h6>
        </Col>
      </div>
    ))
  );

};

// Accordion principal
const AccordionItem = ({ id, header, data }) => (
  <Accordion defaultActiveKey={id.toString()} className="mb-3" alwaysOpen>
    <Accordion.Item eventKey={id.toString()}>
      <Accordion.Header>
        <Col sm={1}>
          <img className="d-flex m-auto" width="70" height="35" src={img} alt={header} />
        </Col>
        <Col>
          <h6 className="text-center">{header}</h6>
        </Col>
      </Accordion.Header>
      <Accordion.Body>
        {console.log(id, header, data)}
        <InnerAccordion data={data} />
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
);

const DoencasOculares = () => {
  const sections = [
    { id: 1, header: 'CATARATA', data: catarataLente },
    { id: 2, header: 'Conjuntivites Infecciosas', data: conjuntiva },
    { id: 3, header: 'Córnea', data: cornea },
    { id: 8, header: 'GLAUCOMA', data: glaucoma },
    { id: 5, header: 'LENTES DE CONTATO', data: lentes },
    { id: 6, header: 'OFTALMO PEDIATRIA', data: oftalmoPediatria },
    { id: 7, header: 'OLHO SECO', data: olhoSeco },
    { id: 4, header: 'REFRAÇÃO E ÓCULOS', data: refracao },
  ];

  return (
    <div className="container-cirurgia justify-content-center">
      <Container className="d-block">
        {sections.map(({ id, header, data }) => {
          const sortedData = [...data].sort((a, b) =>
            a.name.localeCompare(b.name)
          );

          return (
            <Row key={id} className="mt-3 mb-3">
              <Col xs={12}>
                <AccordionItem id={id} header={header} data={sortedData} />
              </Col>
            </Row>
          )
        })}

        <Alert variant="danger" dismissible>
          <Alert.Heading>Página em construção!</Alert.Heading>
          <p>Serão divulgados novos artigos em breve...</p>
        </Alert>
      </Container>
    </div>
  );
};

export default DoencasOculares;
