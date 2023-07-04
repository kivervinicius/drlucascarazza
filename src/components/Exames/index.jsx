import React,{useState} from 'react';
import "./style.scss"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from "../images/imgcon1.png";
import img1 from "./images/Refrator-oftalmológico-manual.jpg";
import img2 from "./images/Auto-Tonometro- Corneal.jpg";
import img3 from "./images/Huvitz-Slit-Lamp.png";
import img4 from "./images/lâmpada-fenda-sem-contato.jpg";
import img5 from "./images/oftalmoscopio-indireto-binocular.jpg";
import img6 from "./images/tonomertia-convencional.jpg";
import img7 from "./images/tonometro.jpg";
import img8 from "./images/placas-optometria-daltonismo.jpg";
import img9 from "./images/topografo.png";
import img10 from "./images/tomografia.jpg";
import img18 from "./images/Bioultra.jpg";
import img11 from "./images/Potencialdeacuidade.png";
import img12 from "./images/campimetria.jpg";
import img13 from "./images/curva-tensional-diaria.jpg";
import img14 from "./images/lupa-ocular.jpg";
import img15 from "./images/TomografiadeCoerencia.jpg";
import img16 from "./images/retiografo-portatil.jpg";
import img17 from "./images/Paquimetro.jpg";
import img19 from "./images/angifluor.jpeg";
import img20 from "./images/angi.jpeg";
import img21 from "./images/oct.jpeg";
import img22 from "./images/octretina.jpeg";
import img23 from "./images/estrabismo.jpeg";
import img24 from "./images/abarrometria.jpeg";
import img25 from "./images/test-lent.jpeg";







import { Accordion } from 'react-bootstrap';


const Exames = () => {
  
  const [activeId, setActiveId] = useState(2);

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }
  //consultas de rotina
  const consultas = [

    {
      id: 10,
      name: 'Refratometria (medida do grau dos óculos)',
      nikName: 'Nesse exame, são realizados as medidas do grau dos óculos de forma automática (computadorizada) e manual (refinamento das escolha das lentes pelo próprio paciente, com nossa ajuda). Os resultados são comparados para prescrição do grau final para o paciente.',
      url: "https://www.medicalexpo.com/pt/prod/topcon-europe-medical/product-77876-471210.html",
      img: img1,
      imge2: ""
    },

    {
      id: 11,
      name: 'Tonometria convencional  (medida da pressão dos olhos)',
      nikName: " A medida da pressão dos olhos é um exame fundamental para descobrir se o paciente tem glaucoma e para acompanhamento de pacientes com diagnóstico de glaucoma. Também é importante para acompanhamento de inflamações oculares, uso de medicamentos, pós operatórios (entre outras situações que podem alterar a pressão ocular). Sempre que possível, você terá sua pressão intra ocular aferida em suas visitas ao nosso consultório.",
      url: "https://www.keelerusa.com/products/tonometry/kat-tonometer-type-r.html",
      img: img6,
      imge2: img7,

    },

    {
      id: 12,
      name: 'Tonometria de sopro com tecnologia Corneal response technology',
      nikName: 'A tecnologia de medida da pressão por sopro é uma medida de não contato da pressão, ou seja, um jato de ar é jogado no olho e o aparelho mede a pressão analisando o comportamento desse jato de ar em contato com a córnea. É uma forma adicional de medir a pressão ocular que não precisa de colírios anestésicos nem corantes, por isso se torna mais confortável. Nosso tonometro de sopro ainda nos oferece uma medida adicional da pressão ocular, de acordo com a deformação da córnea nos fornecendo mais um parâmetro para nos auxiliar a entender a pressão intra ocular do paciente.',
      url: "https://www.medicalexpo.com/pt/prod/topcon-europe-medical/product-77876-471210.html",
      img: img2,
      imge2: ""
    },

    


    {
      id: 1,
      name: 'Biomicroscopia',
      nikName: 'Neste exame avaliamos com o biomicroscópio e lentes especiais a anatomia tanto da parte anterior quanto do fundo do olho.',
      url: "https://usophthalmic.com/products/hs-5000-5x",
      img: img3,
    },
    {
      id: 2,
      name: 'Mapeamento de retina',
      nikName: "Através desse exame, conseguimos avaliar os detalhes da retina do paciente para descobrir se existem doenças ou alterações retinianas bem como acompanhar o seu tratamento.",
      url: "https://www.eyetec.com.br/equipamento-oftalmoscopio-binocular-indireto",
      img: img4,
      imge2: img5
    },

    


    {
      id: 4,
      name: 'Exame ortóptico ou teste de estrabismo',
      nikName: 'Este é um teste utilizado para avaliar se o paciente possui algum grau de desvio ocular. É rotineiramente realizado em crianças, que podem ter seu desenvolvimento visual comprometido pelos estrabismos e também realizado em adultos com suspeitas de desvio ocular.',
      url: "https://eyewiki.aao.org/w/images/1/a/ae/AA0_2117.jpg",
      img: img23,
      imge2:"",
    },


    {
      id: 5,
      name: ' Teste de visão de cores',
      url: "",
      nikName: 'Este teste é útil para diagnosticar discromatopsias (daltonismo) bem como avaliar doenças no nervo óptico. Também utilizado em algumas avaliações pré operatórias.',
      img: img8,
      imge2: ""
    },
    {
      id: 6,
      name: 'Teste de estereopsia (avaliação da visão tridimensional)',
      nikName: "Esse teste avalia qual o grau de visão tridimensional do paciente.",
      img: 'https://i.ebayimg.com/images/g/yHcAAOSwYhda-ftT/s-l1600.jpg',
      imge2: ""
    },


  ]
  const cornea = [
    // 
    // /Córnea, Catarata, Ceratocone e Cirurgia Refrativa
    {
      id: 7,
      name: 'Topografia de córnea',
      nikName: 'A topografia de córnea é um exame que avalia a forma e curvatura da córnea do paciente. Ele é extremamente útil e amplamente utilizado para avaliar a córnea do paciente em casos de graus mais moderados a elevados, rastreio e acompanhamento de doenças da córnea (especialmente o ceratocone), pré operatório de cirurgias oculares (pterígio, catarata), acompanhamento do uso de lentes de contato, entre várias outras indicações.',
      img: img9,
      imge2: ""
    },

    {
      id: 9,
      name: ' Tomografia de córnea e Biometria Óptica (Pentacam AXL)',
      nikName: ' A tomografia é uma evolução da topografia. Enquanto a topografia analisa apenas uma foto da sua córnea, a tomografia faz diversas fotos em posições diferentes para fazer uma reconstrução tridimensional da sua córnea. Por isso, ele consegue nos dar informações mais precisas e detalhadas da córnea dos pacientes, sendo muito importante em quase todas as mesmas indicações de topografia de córnea descritas anteriormente. Importante salientar que não são exames excludentes e sim complementares. Por utilizarem tecnologias diferentes para aquisição das imagens, seus resultados são sempre analisados em conjunto para melhor tomada de decisão sobre um caso clínico do paciente.',
      img: img10,
      imge2: ""
    },

    {
      id: 8,
      name: ' Biometria Ultra Sônica',
      url: "https://www.apramed.com.br/v4/produtos_detalhes.php?id=249",
      nikName: 'A biometria é a medida do tamanho do globo ocular e as distâncias entre as estruturas intra oculares (córnea, cristalino e retina). Muito utilizado em conjunto com as medidas da curvatura ocular (topografia e tomografia) para o cálculo da lente intra ocular do paciente. Também utilizamos muito a biometria para pacientes com grau mais elevado, diferença de grau entre os olhos e em algumas avaliações pré operatórias.',
      img: img18,
      imge2: ""
    },

    {
      id: 14,
      name: 'Biometria Óptica (Pentacam AXL)',
      nikName: `
      Esse exame é uma evolução da biometria ultra sônica e utiliza um método mais moderno chamado de interferometria óptica para medir o tamanho do globo ocular (assim como a distância entre a córnea, cristalino e retina) de uma maneira mais precisa que o ultra som.
      `,
      img: "https://oculare.com.br/wp-content/uploads/2018/08/pentacam-axl.jpg",
    },


    {
      id: 13,
      name: ' Microscopia especular de córnea',
      nikName: "Esse exame avalia a camada mais posterior da córnea: o endotélio. Essa camada é fundamental, pois é nela que se encontra as células responsáveis por manter a córnea transparente. Esse exame é muito utilizado em pré e pós operatório de cirurgias oculares, acompanhamento de usuários de lentes de contato bem como pacientes que possuem doenças específicas que acometem essa camada de células (distrofias do endotélio corneano).",
      img: "https://nidek.com.br/wp-content/uploads/2020/09/CEM-530-2.png",
    },



    {
      id: 23,
      name: '  Potencial de acuidade visual (PAM)',
      nikName: 'Exame útil para tentar nos mostrar qual potencial de visão o paciente poderia alcançar após uma determinada cirurgia ocular.',
      img: img11,
      imge2: ''
    },

    {
      id: 21,
      name: 'Paquimetria',
      nikName: "Avalia a espessura da camada córnea que tem íntima relação com a pressão intra ocular.",
      img: img17,
      imge2: ""

    },

    

    {
      id: 15,
      name: 'Aberrometria',
      nikName: "Este exame é também conhecido como um super auto  refrator. O nosso aberrometro é capaz de avaliar de uma forma mais precisa o grau do paciente bem como as aberrações corneanas e intraoculares. É muito valioso para estudo das doenças corneanas bem como no pré operatório das cirurgias oculares. ",
      img:img24,
      imge: ""
    },

  ]
  var glaucoma = [



    // 1.3 Glaucoma:Todos os exames dessa seção são utilizados para avaliar suspeitos de glaucoma ou pacientes glaucomatosos. Eles são avaliados em conjunto e repetidos rotineiramente, conforme a necessidade individual de cada paciente.


    {
      id: 16,
      name: 'Campimetria computadorizada',
      nikName: "Sabidamente o glaucoma afeta o campo visual dos pacientes com essa doença. Esse exame permite avaliar o campo visual do paciente nos suspeitos e portadores de glaucoma. Também pode ser usado em outras doenças da retina, do nervo óptico e palpebrais.",
      img: img12,
      imge2: ""
    },
    {
      id: 15,
      name: 'Curva diária de pressão ocular',
      nikName: "Nossa pressão intra ocular pode sofrer variações ao longo do dia. Nesse exame, fazemos algumas medidas da pressão ocular ao longo do dia com intuito de avaliar melhor quais seriam essas variações.",
      img: img13,
      imge2: ""
    },
    {
      id: 17,
      name: 'Teste de Sobrecarga Hídrica',
      nikName: "Este teste tem como objetivo causar um estresse nas estruturas de drenagem do nosso olho (após ingestão de uma quantidade de água predeterminada). Logo após, algumas medidas de pressão são realizadas para avaliar o comportamento dessa pressão.",
      img: img13,
      imge2: ""
    },
    {
      id: 18,
      name: 'Gonioscopia',
      nikName: "Esse exame visa avaliar as estruturas de drenagem do olho localizadas em um local denominado ângulo camerular que só pode ser observado através da utilização de lentes com espelhos especiais.",
      img: img14,
      imge2: ""
    },
    {
      id: 19,
      name: "Tomografia de Coerência Óptica",
      nikName: "Esse exame tem como objetivo avaliar a camada de fibras nervosas e camadas de células ganglionares da retina, estruturas que são danificadas no glaucoma e que não são possíveis de serem avaliadas sem esse instrumento.",
      img: img15,
      imge2: ""
    },
    {
      id: 20,
      name: ' Retinografia',
      nikName: " A retinografia é uma foto da sua retina e do nervo óptico que utilizamos para documentar o estado atual das estruturas intra oculares e comparar futuramente.  ",
      img: img16,
      imge2: ""
    },

    {
      id: 21,
      name: 'Paquimetria',
      nikName: "Avalia a espessura da camada córnea que tem íntima relação com a pressão intra ocular.",
      img: img17,
      imge2: ""

    },


  ]

  const retina = [
    //  1.3 Retina:
    {
      id: 23,
      name: ' Retinografia',
      nikName: "Fotografia para documentação das alterações retinianas.",
      img: img16,
      imge2: ""
    },

    {
      id: 22,
      name: 'Angioflueresceinografia',
      nikName: "Exame que avalia a retina, seus vasos sanguíneos e possíveis lesões da retina e nervo óptico através da injeção de um contraste intra venoso. Após a infusão desse contraste, são tiradas diversas fotos da retina e acompanhamos qual comportamento desse contraste e das estruturas retinianas para nos auxiliar no diagnóstico e acompanhamento das patologias oculares.",
      img: img19,
      imge2: img20
    },
    {
      id: 24,
      name: '  Oct Retina',
      nikName: "O OCT de retina é um tomógrafo capaz de avaliar a retina tirando diversas fotografias da mesma e fazendo reconstruções que simulam cortes histológicos da mesma (analise de cada camada de células de retina) que nos ajudam a identificar precisamente qual parte da retina está danificada para podermos definir qual diagnóstico e qual melhor tratamento.",
      img: img21,
      imge2:img22

    },

  ]

  const lente = [
    {
      id: 3,
      name: 'Teste de lentes de contato gelatinosas, rígidas e esclarias ',
      nikName: `Este é um procedimento indispensável para o paciente que usa óculos e deseja passar a usar também lentes de contato. 
      No dia do seu teste, faremos avaliação da sua córnea para entender a interação dela com a lente de contato, lhe ensinaremos a manusear e cuidar de sua lente de contato e avaliaremos como ficam a visão e o seu conforto com a lente.
      Assim, você poderá obter uma adaptação segura e saudável da sua lente de contato.`,
      url: "",
      img: img25,   
      imge2: ''
      },
  ]

  return (
    <>
      <div className='container-exame  justify-content-center'>
        <Container className='d-block'>
        <Row>
         <h1 className='text-center'>Exames</h1>
        <p className='text-center' style={{color: "#fff"}}>
        Contamos com os mais modernos equipamentos oftalmológicos para diagnóstico e tratamento das patologias oculares.
        </p>
         </Row>
          <Row className='mt-3'> 
            <Col>
              <Accordion 
                key='1'  eventKey='1' 
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
              <Accordion  key="2"  eventKey="2" defaultActiveKey={activeId}
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
                      {cornea.map((item) => {
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
              <Accordion  key="2"  eventKey="2" defaultActiveKey={activeId}
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
                      {lente.map((item) => {
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
                      {glaucoma.map((item) => {
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
                      {retina.map((item) => {
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


