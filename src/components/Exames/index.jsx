import React, { useState } from 'react';
import "./style.scss"
//import Galeria from '../Galeria/index'
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






import Galeria from "../../components/Galeria";


import { Accordion, Button, Stack } from 'react-bootstrap';


const Exames = () => {
  const [showLess, setShowLess] = useState(false);

  //consultas de rotina
  const consultas = [

    {
      id: 10,
      name: 'Refratometria medida do grau dos óculos ',
      nikName: 'É um exame que quantifica, de forma aproximada, o erro refracional (miopia; hipermetropia; astigmatismo) do paciente.',
      url: "https://www.medicalexpo.com/pt/prod/topcon-europe-medical/product-77876-471210.html",
      img: img1,
      imge2: ""
    },


    {
      id: 12,
      name: 'Tonometria de sopro com tecnologia Corneal response technology',
      nikName: 'Exame utilizado naturalmente em pacientes que não requerem uma medida precisa da sua pressão intra-ocular, e pela sua praticidade serve de triagem para exames mais sofisticados para o glaucoma.',
      url: "https://www.medicalexpo.com/pt/prod/topcon-europe-medical/product-77876-471210.html",
      img: img2,
      imge2: ""
    },

    {
      id: 11,
      name: 'Tonometria convencional  (medida da pressão dos olhos)',
      nikName: " Exame executado para a verificação da pressão intra-ocular. Após o uso de colírio anestésico, com o tonômetro acoplado à lâmpada de fenda, faz-se uma discreta compressão na córnea, aplainando a sua área central. Observa-se em um tamborzinho lateral o valor em mmHg.",
      url: "https://www.keelerusa.com/products/tonometry/kat-tonometer-type-r.html",
      img: img6,
      imge2: img7,

    },


    {
      id: 1,
      name: 'Biomicroscopia',
      nikName: 'Avaliação com biomicroscópio e lentes especiais da anatomia do segmento anterior e posterior do olho.',
      url: "https://usophthalmic.com/products/hs-5000-5x",
      img: img3,
    },
    {
      id: 2,
      name: 'Mapeamento de retina',
      nikName: "O exame de mapeamento de retina é feito para avaliar a retina e procurar por alguma alteração, sobretudo na sua periferiaO exame de mapeamento de retina é feito para avaliar a retina e procurar por alguma alteração, sobretudo na sua periferia.",
      url: "https://www.eyetec.com.br/equipamento-oftalmoscopio-binocular-indireto",
      img: img4,
      imge2: img5
    },

    {
      id: 5,
      name: ' Teste de visão de cores',
      url: "",
      nikName: 'O Teste de Visão de Cores, também conhecido como Teste de Daltonismo, é utilizado para identificação de Discromatopsias, popularmente conhecidas como Daltonismo',
      img: img8,
      imge2: ""
    },

    {
      id: 3,
      name: 'Teste de lentes de contato',
      nikName: "É a análise curvatura da córnea para iniciar o teste, mas somente colocando as lentes nos olhos para garantir a correta adaptação.",
      url: "",
      imge2: ""
    },

    // {
    //   id: 4,

    //   name: 'Teste de estrabismo (cover test)',
    //   url: ""
    // },

    // {
    //   id: 6,
    //   name: 'Teste de estereopsia (avaliação da visão tridimensional)',
    //   nikName:"É um exame que avalia a visão tridimensional ou de profundidade.",
    //   url: "https://descricao.com.br/produto/teste-de-daltonismo-ishihara/?utm_source=Google%20Shopping&utm_campaign=Google%20Shopping&utm_medium=cpc&utm_term=43366&gclid=Cj0KCQiAzfuNBhCGARIsAD1nu-_9Ve8Dlo9_KWVia1NOng89VeWXH79zOVr-EPnyOBSQTBPk2mPtfyYaAszpEALw_wcB"
    // },
    //   //Córnea, Catarata, Ceratocone e Cirurgia Refrativa
    //   {
    //     id: 7,
    //     name: 'Topografia de córnea',
    //     url: "http://houseofvision.com.br/equipamentos/ca800/"
    //   },

    //   {
    //     id: 8,
    //     name: ' Biometria Ultra Sônica',
    //     url: "https://www.apramed.com.br/v4/produtos_detalhes.php?id=249"
    //   },


    //   {
    //     id: 9,
    //     name: ' Tomografia de córnea e Biometria Óptica (Pentacam AXL)',
    //     url: "https://www.oculus.de/en/national-press/information/truevisions-trueplan-is-now-linked-to-pentacam-axl/"

    //   },


    //   {
    //     id: 23,
    //     name: '  Oct Retina',
    //     nikName
    //     url: " https://www.medicalexpo.com/pt/prod/tomey/product-77872-496896.html"
    //   },

    // ]
    // var consultas2 = [


    //   {
    //     id: 13,
    //     name: ' Microscopia especular de córnea',
    //     url: "https://www.nidek-intl.com/product/ophthaloptom/diagnostic/dia_cornea/cem-530.html"
    //   },

    //   {
    //     id: 14,
    //     name: 'Biometria Ultra Sônica',
    //     url: "http://houseofvision.com.br/equipamentos/ca800/"
    //   },
    //   {
    //     id: 15,
    //     name: 'Potencial de acuidade visual (PAM)',
    //     url: "https://visarerio.com.br/project/acuidade-potencial-macular/ "
    //   },

    //   // 1.3 Glaucoma

    //   {
    //     id: 16,
    //     name: 'Campimetria computadorizada',
    //     url: "https://www.kwipped.com/rentals/product/zeiss-hfa-750i-visual-field-perimeter-factory-authorized/18211"
    //   },
    //   {
    //     id: 15,
    //     name: 'Curva diária de pressão ocular',
    //     url: "    https://ccolhos.com.br/portfolio/curva-tensional-diaria/"
    //   },
    //   {
    //     id: 17,
    //     name: 'Teste de Sobrecarga Hídrica',
    //     url: "https://visarerio.com.br/project/acuidade-potencial-macular/ "
    //   },

    //   {
    //     id: 18,
    //     name: 'Gonioscopia',
    //     url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.glaucomapatients.org%2Fwp-content%2Fuploads%2F2018%2F03%2Fslide30-pic1.jpg&imgrefurl=https%3A%2F%2Fwww.glaucomapatients.org%2Fpt-br%2Fexame-ocular-pt-br%2Fcomo-e-feita-a-gonioscopia%2F&tbnid=y5viv87rUXe3uM&vet=12ahUKEwjk27zLp_D0AhWaq5UCHaYNDAEQMygKegUIARDBAQ..i&docid=qNQMUcQp7k6P4M&w=800&h=792&q=gonioscopia&ved=2ahUKEwjk27zLp_D0AhWaq5UCHaYNDAEQMygKegUIARDBAQ"
    //   },

    //   {
    //     id: 19,
    //     name: "Tomografia de Coerência Óptica",
    //     nikName: "(OCT) do nervo óptico e da camada de fibras nervosas",
    //     url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.glaucomapatients.org%2Fwp-content%2Fuploads%2F2018%2F03%2Fslide30-pic1.jpg&imgrefurl=https%3A%2F%2Fwww.glaucomapatients.org%2Fpt-br%2Fexame-ocular-pt-br%2Fcomo-e-feita-a-gonioscopia%2F&tbnid=y5viv87rUXe3uM&vet=12ahUKEwjk27zLp_D0AhWaq5UCHaYNDAEQMygKegUIARDBAQ..i&docid=qNQMUcQp7k6P4M&w=800&h=792&q=gonioscopia&ved=2ahUKEwjk27zLp_D0AhWaq5UCHaYNDAEQMygKegUIARDBAQ"
    //   },
    //   {
    //     id: 20,
    //     name: ' Retinografia',
    //     url: " https://phelcom.com/"
    //   },
    //   {
    //     id: 21,
    //     name: ' Paquimetria',
    //     url: "https://www.medicalexpo.com/pt/prod/tomey/product-77872-496896.html"
    //   },




    //   {
    //     //  1.3 Retina:
    //     id: 22,
    //     name: ' Angioflueresceinografia',
    //     url: " https://www.medicalexpo.com/pt/prod/tomey/product-77872-496896.html"
    //   },

  ]

  return (
    <>
      <div className='container-exame  justify-content-center'>
        <Container className='d-block'>

          <Galeria />
          <h1 className="text-tratamento text-center">CONSULTAS DE ROTINA</h1>
          <Row>
            <Col>
              <Row>
                {consultas.map((item) => {
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
            </Col>
          </Row>
          {/* {showLess && (
            <Row>
              <Col xs={12} md={12} >
                <Row >
                  {consultas2.map((item) => {
                    return (
                      <>
                        <Col key={item.id} xs={6} md={3} lg={2}>
                          <img
                            className="d-flex m-auto"
                            width="140"
                            height="90"
                            src={img}
                            alt={item.name}
                          />
                          <p className="text text-center">
                            {item.name}
                          </p>
                        </Col>

                      </>

                    )


                  })

                  }
                </Row>
              </Col>
            </Row>
          )} */}
          <Stack className='p-5 '>
            <Button variante="primary" onClick={() => setShowLess(!showLess)}>{showLess ? 'Ver menos' : 'Ver mais'}</Button>
          </Stack>
        </Container>
      </div>

    </>
  );
}


export default Exames;


