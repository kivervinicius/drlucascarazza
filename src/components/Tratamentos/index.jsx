
import React, { useState } from 'react';
import "./style.scss"

import img from "../images/imgcon1.png"
import img1 from "./images/catarata.webp"
import img11 from "./images/catarata3.jpeg"

import img2 from "./images/yaglaser.jpeg"
import img3 from "./images/crosslink.jpeg"
import img4 from "./images/refrator-laser.jpg"
import img10 from "./images/glaucoma.jpeg"
import img5 from "./images/slt.jpeg"
import img6 from "./images/prsmile2.jpeg"
import img7 from "./images/pterigio.jpeg"
import img8 from "./images/iridotnia.jpeg"
import img9 from "./images/iridotnia.jpeg"








import { Accordion } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';






const link = <p>Nessa cirurgia, retiramos a lente intra ocular natural do olho (cristalino) que está doente para implantar uma lente artificial em seu lugar. Importante destacar que temos os melhores aparelhos disponíveis no mercado para realizar uma cirurgia com os mesmos níveis de segurança alcançados nos melhores centros de oftalmologia do Brasil e do mundo. para maiores informações sobre a cirurgia de catarata para maiores informações sobre a cirurgia de catarata clique no link abaixo<br />  <a href="/catarata-cirurgia">Catarata e cirurgia de catarata </a> <br /> Além disso, temos acesso a todas as lentes intra oculares que estão registradas no Brasil, desde as lentes ofertadas pelos planos de saúde até as especiais, com objetivo de proporcionar os melhores resultados visuais para cada paciente, respeitando sua individualidade. para saber mais sobre lentes intra oculares, clique no link abaixo <br /><a href="/lentes">como escolher a lente intraocular</a> </p>
const consultas = [
  {
    id: 1,
    name: 'Cirugia da catarata com implante de lente intra ocular',
    nikName: link,
    // ``,  
    imge: img1,
    imge2: img11,
    url: " https://www.leica-microsystems.com/products/surgical-microscopes/p/leica-m620-f20/"
  },

  {
    id: 2,
    name: ' Yag Laser para capsulotomia (limpeza de lente pós cirurgia de catarata)',
    nikName: "Procedimento em que aplicamos um laser na parte posterior da lente intra ocular implantada, com objetivo de eliminar opacidades atrás da lente intra ocular causada pelo crescimento de células do próprio olho e que acabam por embaçar um pouco a visão alguns meses ou anos após a cirurgia de catarata.",
    imge: img2,
    imge2: "",
    url: "https://houseofvision.com.br/equipamentos/yag-laserslt-deux/"
  },
]

const pTerigio = [{

  id: 7,
  name: 'Cirurgia de Pterígio com auto transplante conjuntival e cola biológica (sem pontos)',
  nikName: 'Cirurgia para retirar o pterígio (“carne crescida”) dos olhos, realizada com a técnica considerada mais eficaz para evitar a recidiva da visão (auto transplante conjuntival) e a de realização mais rápida e confortável para o paciente (com uso de cola biológica e sem pontos).   Em alguns pacientes especiais, ainda podemos utilizar a mitomicina (medicamento que diminui a chance de recidiva em paciente com aumento do risco). Não utilizado em todos os pacientes pelo seu maior potencial de toxicidade.',
  url: "",
  imge: img7


},


]

const prkLasik = [
  {
    id: 11,
    name: ' PRK, LASIK e SMILE',
    nikName: "Cirurgias utilizadas com objetivo de eliminar o grau dos pacientes (miopia, astigmatismo e hipermetropia) e deixa-los mais indepentende dos óculos.",
    url: "",
    imge: img6,
    imge2: img4

  },


]

const ceratocone = [{

  id: 4,
  name: 'Cirurgia de Anel intra corneano para ceratocone (manual e com laser de femtosegundo)',
  nikName: `Cirurgia de implante de anel intra corneano também conhecido como anel de ferrara 
    com intuito de melhorar a forma da córnea em pacientes com ceratocone. 
    Essa cirurgia pode ser realizada com técnica manual ou com laser, 
    sendo esta última realizada por mim em Cuiabá. <br/>
    <a href="/ceratocone">Saiba mais sobre ceratocone e seus tratamentos clicando aqui</a>.`,
  url: "",
  imge: img4



},
{
  id: 6,
  name: 'Cross Linking para ceratocone',
  nikName: `Cirurgia com objetivo de tentar estabilizar o ceratocone em 
  pacientes que documentamos que a doença está progredindo.
  <br/>
  <a href="/ceratocone">Saiba mais sobre ceratocone e seus tratamentos clicando aqui</a>.`,
  url: "",
  imge: img3
},

]

const implante = [

  {
    id: 8,
    name: 'Cirurgia de Glaucoma (trabeculectomia- TREC)',
    nikName: "Cirurgia em que criamos uma pequena abertura no olho denominada fístula com intuito de diminuir a pressão intra ocular e impedir a evolução da doença.",
    url: "",
    imge: img10
  },

  {
    id: 9,
    name: 'Cirurgia a laser para glaucoma (trabeculoplastia seletiva – SLT)',
    nikName: "Cirurgia a laser com objetivo onde aplicamos uma energia predeterminada em uma região dos olhos conhecida como trabeculado (região responsável pela drenagem do líquido de dentro do olho), com intuito de aumentar a eficiência do seu trabalho e diminuir a pressão intra ocular.",
    url: "",
    imge: img5

  },


  {
    id: 10,
    name: 'Iridotomia a laser para glaucoma',
    nikName: "Cirurgia realizada naqueles pacientes em que identificamos possuir um chamado ângulo estreito, ou seja, pacientes com potencial para desenvolver um glaucoma de ângulo estreito.",
    url: "",
    imge: img8,
    img2: img9

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
                                            src={item.imge}
                                            alt={item.name}
                                          />
                                        </Col>
                                        {item.imge2 &&
                                          <Col sm={12} md={6}>
                                            <img
                                              className="d-flex m-auto"
                                              width="250"
                                              height="150"
                                              src={item.imge2}
                                              alt={item.imge2}
                                            />
                                          </Col>
                                        }
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
                      <h6 className='text-center'>PTERÍGIO</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {pTerigio.map((item) => {
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
                                            src={item.imge}
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
                      <h6 className='text-center'>CIRURGIA REFRATIVA(CIRURGIA A LASER PARA CORREÇÃO DE GRAU)</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {prkLasik.map((item) => {
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
                                            src={item.imge}
                                            alt={item.name}
                                          />
                                        </Col>
                                        <Col sm={12} md={6}>
                                          <img
                                            className="d-flex m-auto"
                                            width="250"
                                            height="150"
                                            src={item.imge2}
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
                      <h6 className='text-center'>CIRURGIA PARA CERATOCONE</h6>
                    </Col>
                  </Accordion.Header>
                  <Accordion.Body >
                    <Row>
                      {ceratocone.map((item) => {
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
                                            src={item.imge}
                                            alt={item.name}
                                          />
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Row sm={12}>
                                      <p dangerouslySetInnerHTML={{ __html: item.nikName }} />
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
                      <h6 className='text-center'>CIRURGIAS PARA GLAUCOMA</h6>
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
                                            src={item.imge}
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