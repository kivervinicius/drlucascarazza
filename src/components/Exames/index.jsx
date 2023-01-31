import React, { useState } from 'react';
import "./style.scss"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from "../images/imgcon1.png"
import img1 from "../images/exame1.jpg"
import img2 from "../images/exame2.jpg"
import { Button, Stack } from 'react-bootstrap';


const Exames = () => {
  const [showLess, setShowLess] = useState(false);


  const consultas = [

    {
      id: 1,
      name: 'Biomicroscopia',
      nikName: '(avaliação com biomicroscópio e lentes especiais da anatomia do segmento anterior e posterior do olho)',
      url: "https://usophthalmic.com/products/hs-5000-5x"
    },
    {
      id: 2,
      name: 'Mapeamento de retina',
      url: "https://www.eyetec.com.br/equipamento-oftalmoscopio-binocular-indireto"
    },
    {
      id: 3,
      name: 'Teste de lentes de contato',
      url: ""
    },
    {
      id: 4,
      name: 'Teste de estrabismo (cover test)',
      url: ""
    },

    {
      id: 5,
      name: ' Teste de visão de cores',
      url: ""
    },

    {
      id: 6,
      name: 'Teste de estereopsia',
      nikName: '(avaliação da visão tridimensional)',
      url: "https://descricao.com.br/produto/teste-de-daltonismo-ishihara/?utm_source=Google%20Shopping&utm_campaign=Google%20Shopping&utm_medium=cpc&utm_term=43366&gclid=Cj0KCQiAzfuNBhCGARIsAD1nu-_9Ve8Dlo9_KWVia1NOng89VeWXH79zOVr-EPnyOBSQTBPk2mPtfyYaAszpEALw_wcB"
    },
    {
      id: 7,
      name: 'Topografia de córnea',
      url: "http://houseofvision.com.br/equipamentos/ca800/"
    },

    {
      id: 8,
      name: ' Biometria Ultra Sônica',
      url: "https://www.apramed.com.br/v4/produtos_detalhes.php?id=249"
    },


  {
    id: 9,
    name: ' Tomografia de córnea e Biometria Óptica (Pentacam AXL)',
    url: "https://www.oculus.de/en/national-press/information/truevisions-trueplan-is-now-linked-to-pentacam-axl/"
    
  },
  
  {
    id: 10,
    name: 'Refratometria medida do grau dos óculos',
    url: "https://www.medicalexpo.com/pt/prod/topcon-europe-medical/product-77876-471210.html"
  },
  {
    id: 11,
    name: 'Tonometria convencional  (medida da pressão dos olhos)',
    url: "https://www.keelerusa.com/products/tonometry/kat-tonometer-type-r.html"
  },

  {
    id: 23,
    name: '  Oct Retina',
    url: " https://www.medicalexpo.com/pt/prod/tomey/product-77872-496896.html"
  },
 
]
  var consultas2 = [


    {
      id: 13,
      name: ' Microscopia especular de córnea',
      url: "https://www.nidek-intl.com/product/ophthaloptom/diagnostic/dia_cornea/cem-530.html"
    },

    {
      id: 14,
      name: 'Biometria Ultra Sônica',
      url: "http://houseofvision.com.br/equipamentos/ca800/"
    },
    {
      id: 15,
      name: 'Potencial de acuidade visual (PAM)',
      url: "https://visarerio.com.br/project/acuidade-potencial-macular/ "
    },

    // 1.3 Glaucoma

    {
      id: 16,
      name: 'Campimetria computadorizada',
      url: "https://www.kwipped.com/rentals/product/zeiss-hfa-750i-visual-field-perimeter-factory-authorized/18211"
    },
    {
      id: 15,
      name: 'Curva diária de pressão ocular',
      url: "    https://ccolhos.com.br/portfolio/curva-tensional-diaria/"
    },
    {
      id: 17,
      name: 'Teste de Sobrecarga Hídrica',
      url: "https://visarerio.com.br/project/acuidade-potencial-macular/ "
    },

    {
      id: 18,
      name: 'Gonioscopia',
      url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.glaucomapatients.org%2Fwp-content%2Fuploads%2F2018%2F03%2Fslide30-pic1.jpg&imgrefurl=https%3A%2F%2Fwww.glaucomapatients.org%2Fpt-br%2Fexame-ocular-pt-br%2Fcomo-e-feita-a-gonioscopia%2F&tbnid=y5viv87rUXe3uM&vet=12ahUKEwjk27zLp_D0AhWaq5UCHaYNDAEQMygKegUIARDBAQ..i&docid=qNQMUcQp7k6P4M&w=800&h=792&q=gonioscopia&ved=2ahUKEwjk27zLp_D0AhWaq5UCHaYNDAEQMygKegUIARDBAQ"
    },

    {
      id: 19,
      name: "Tomografia de Coerência Óptica",
      nikName: "(OCT) do nervo óptico e da camada de fibras nervosas",
      url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.glaucomapatients.org%2Fwp-content%2Fuploads%2F2018%2F03%2Fslide30-pic1.jpg&imgrefurl=https%3A%2F%2Fwww.glaucomapatients.org%2Fpt-br%2Fexame-ocular-pt-br%2Fcomo-e-feita-a-gonioscopia%2F&tbnid=y5viv87rUXe3uM&vet=12ahUKEwjk27zLp_D0AhWaq5UCHaYNDAEQMygKegUIARDBAQ..i&docid=qNQMUcQp7k6P4M&w=800&h=792&q=gonioscopia&ved=2ahUKEwjk27zLp_D0AhWaq5UCHaYNDAEQMygKegUIARDBAQ"
    },
    {
      id: 20,
      name: ' Retinografia',
      url: " https://phelcom.com/"
    },
    {
      id: 21,
      name: ' Paquimetria',
      url: "https://www.medicalexpo.com/pt/prod/tomey/product-77872-496896.html"
    },
    
    
    {
      id: 12,
      name: 'Tonometria de sopro com tecnologia Corneal response technology',
      url: "https://www.medicalexpo.com/pt/prod/topcon-europe-medical/product-77876-471210.html"
    },
    
    {
      //  1.3 Retina:
      id: 22,
      name: ' Angioflueresceinografia',
      url: " https://www.medicalexpo.com/pt/prod/tomey/product-77872-496896.html"
    },
    
  ];
  return (
    <>
      <div className='container-exame  justify-content-center'>
        <Container className='d-block'>
          <h1 className="text-tratamento text-center">EXAMES</h1>
          <Row>
            <Col xs={12} md={12}>
             <Row>
            {consultas.map((item) => {
              return (
                <>
                  <Col key={item.id} xs={6} md={4} lg={2}>
                    <img
                      className="d-flex  justify-content-center"
                      width="140"
                      height="90"
                      src={img}
                      alt="lucas carazza logo"
                    />
                    <p className="text tex-center ">
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
          {showLess && (
            <Row>
            <Col xs={12} md={12} >
            <Row >
              {consultas2.map((item) => {
                return (
                  <>
                    <Col key={item.id} xs={6} md={3} lg={2}>
                      <img
                        className="d-flex img-exame justify-content-center"
                        width="140"
                        height="90"
                        src={img}
                        alt="lucas carazza logo"
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
          )}
          <Stack className='p-5 '>
            <Button variante="primary" onClick={() => setShowLess(!showLess)}>{showLess ? 'Ver menos' : 'Ver mais'}</Button>
          </Stack>
        </Container>
      </div>

    </>
  );
}


export default Exames;


