import React, { useState } from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import "./style.scss";

import img from "../images/imgcon1.png";
import img1 from "./images/catarata.webp";
import img11 from "./images/catarata3.jpeg";
import img2 from "./images/yaglaser.jpeg";
import img3 from "./images/crosslink.jpeg";
import img4 from "./images/refrator-laser.jpg";
import img10 from "./images/glaucoma.jpeg";
import img5 from "./images/slt.jpeg";
import img6 from "./images/prsmile2.jpeg";
import img7 from "./images/pterigio.jpeg";
import img8 from "./images/iridotnia.jpeg";

const catarataLink = `
  Nessa cirurgia, retiramos a lente intra ocular natural do olho (cristalino) que está doente 
  para implantar uma lente artificial em seu lugar. 
  Importante destacar que temos os melhores aparelhos disponíveis no mercado para realizar uma cirurgia 
  com os mesmos níveis de segurança alcançados nos melhores centros de oftalmologia do Brasil e do mundo. 
  Para maiores informações, clique abaixo:
  <br /><a class="btn btn-primary mt-2" href="/catarata-cirurgia" target="_blank" rel="noopener noreferrer">Catarata e cirurgia de catarata</a>
  <br /><br />
  Além disso, temos acesso a todas as lentes intra oculares registradas no Brasil, 
  desde as ofertadas pelos planos de saúde até as especiais. 
  Para saber mais sobre lentes intra oculares, clique abaixo:
  <br /><a class="btn btn-primary mt-2" href="/lentes" target="_blank" rel="noopener noreferrer">Como escolher a lente intraocular</a>
`;

const data = [
  {
    title: "CATARATA",
    items: [
      {
        id: 1,
        name: "Cirurgia da catarata com implante de lente intra ocular",
        description: catarataLink,
        images: [img1, img11],
        url: ""
      },
      {
        id: 2,
        name: "Yag Laser para capsulotomia",
        description:
          "Procedimento em que aplicamos um laser na parte posterior da lente intra ocular implantada, com objetivo de eliminar opacidades atrás da lente intra ocular causada pelo crescimento de células do próprio olho e que acabam por embaçar um pouco a visão meses ou anos após a cirurgia de catarata.",
        images: [img2],
        url: "https://houseofvision.com.br/equipamentos/yag-laserslt-deux/"
      },
    ]
  },
  {
    title: "PTERÍGIO",
    items: [
      {
        id: 3,
        name: "Cirurgia de Pterígio com auto transplante conjuntival e cola biológica (sem pontos)",
        description: `Cirurgia para retirar o pterígio (“carne crescida”) dos olhos, com técnica eficaz para evitar recidiva (auto transplante conjuntival) e mais confortável (uso de cola biológica, sem pontos).
          <br /><a class="btn btn-primary mt-2" href="/pterigio" target="_blank" rel="noopener noreferrer">Saiba mais sobre Pterígio</a>`,
        images: [img7],
      },
    ]
  },
  {
    title: "CIRURGIA REFRATIVA (CORREÇÃO DE GRAU)",
    items: [
      {
        id: 4,
        name: "PRK, LASIK e SMILE",
        description: `Cirurgias para eliminar o grau dos pacientes (miopia, astigmatismo e hipermetropia) e deixá-los mais independentes dos óculos.
          <br/><a class="btn btn-primary mt-2" href="/cirurgia-refrativa" target="_blank" rel="noopener noreferrer">Veja mais aqui</a>`,
        images: [img6, img4],
      },
    ]
  },
  {
    title: "CIRURGIA PARA CERATOCONE",
    items: [
      {
        id: 5,
        name: "Anel intra corneano para ceratocone (manual e laser de femtosegundo)",
        description: `Implante de anel intra corneano (anel de Ferrara) para melhorar a forma da córnea em pacientes com ceratocone.
          <br/><a class="btn btn-primary mt-2" href="/ceratocone" target="_blank" rel="noopener noreferrer">Saiba mais aqui</a>`,
        images: [img4],
      },
      {
        id: 6,
        name: "Cross Linking para ceratocone",
        description: `Cirurgia para estabilizar o ceratocone em pacientes com progressão documentada.
          <br/><a class="btn btn-primary mt-2" href="/ceratocone" target="_blank" rel="noopener noreferrer">Saiba mais aqui</a>`,
        images: [img3],
      },
    ]
  },
  {
    title: "CIRURGIAS PARA GLAUCOMA",
    items: [
      {
        id: 7,
        name: "Cirurgia de Glaucoma (Trabeculectomia - TREC)",
        description:
          "Criamos uma pequena abertura no olho (fístula) para reduzir a pressão intra ocular e evitar a progressão da doença.",
        images: [img10],
      },
      {
        id: 8,
        name: "Laser para Glaucoma (SLT - Trabeculoplastia seletiva)",
        description:
          "Aplicamos energia controlada na região do trabeculado para aumentar a drenagem do líquido ocular e reduzir a pressão intra ocular.",
        images: [img5],
        url: "/slt",
      },
      {
        id: 9,
        name: "Iridotomia a laser para Glaucoma",
        description:
          "Indicada para pacientes com ângulo estreito, com potencial para desenvolver glaucoma de ângulo fechado.",
        images: [img8],
      },
    ]
  },
];

const CirurgiasEtratamento = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleActive = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="container-cirurgia justify-content-center">
      <Container className='d-block'>
        {data.map((section, sectionIndex) => (
          <Row key={sectionIndex} className="mt-3 mb-3">
            <Col xs={12}>
              {/* <Accordion activeKey={activeId === sectionIndex ? "open" : null} alwaysOpen> */}
              <Accordion alwaysOpen defaultActiveKey={data.map((_, i) => String(i))} key={`ac-${sectionIndex}`}>
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
