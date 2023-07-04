
import React, { useState } from 'react';

import img from "../images/imgcon1.png";
import { Accordion } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';






const link1 =<p> A catarata é um processo de opacificação do cristalino, que é nossa lente natural que fica dentro dos olhos. Essa lente (cristalino) é normalmente clara e transparente. Com o aparecimento da catarata, ela se torna opaca e impede a passagem dos raios luminosos que formam a imagem no fundo do olho. A causa mais comum de catarata é o envelhecimento (quanto maior a idade, maior a probabilidade de aparecimento da catarata). Outras causas de catarata são: traumas (acidentes), doenças sistêmicas (como diabetes), uso de medicamentos (especialmente corticoides), catarata congênita (quando uma criança já nasce com catarata), entre outros.   <a href="/catarata-cirurgia"> saiba mais</a>  </p>
const link2 =<p>A escolha da lente intraocular é uma oportunidade muito interessante para poder diminuir a dependência dos óculos. É importante ressaltar que essa escolha deverá ser feita apenas uma vez na vida, haja visto que apenas em raríssimas ocasiões iremos trocar a lente intraocular. Ainda não existe uma lente intraocular ideal, aquela que tenha a mesma função da nossa lente natural jovem e que sirva para todos os olhos, por isso existem vários modelos de lentes que tentam oferecer a melhor qualidade de vida para o paciente.  <a href='/lentes'>saiba mais</a></p>
const link3 =<p> A principal dica para escolher uma armação é escolher a que
melhor combine com você. Não é incomum um paciente não se adaptar
aos óculos por não ter gostado da estética da armação escolhida. Por isso,
escolha sua armação com calma e procure levar alguém de confiança junto
com você, que conheça seu gosto e estilo para te ajudar a fazer a melhor
escolha. <a href='/dica-oculos'>saiba mais</a></p>

const catarataLente = [
  {
    id: 1,
    name: 'Catarata',
    nikName: link1 ,
},
  
  {
    id: 2,
    name: 'Como escolher sua lente',
    nikName: link2,
  },
]

const refracao =[{
  
    id: 7,
    name: 'Dicas para te ajudar a escolher o seus óculos',
    nikName: link3,
},
]



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
          <Row className="mt-3 mb-3">
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
        </Container>
      </div>

    </>
  )
};

export default DoencasOculares;