import React from 'react';
import "./style.scss"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from "../images/imgcon1.png"


const Exames = () => {
  const consultas = [
    {
      id: 1,
      name: 'Refratometria (medida do grau dos óculos)',
      url: "https://www.medicalexpo.com/pt/prod/topcon-europe-medical/product-77876-471210.html"
    },
    {
      id: 2,
      name: 'Tonometria convencional  (medida da pressão dos olhos)',
      url: "https://www.keelerusa.com/products/tonometry/kat-tonometer-type-r.html"
    },
    {
      id: 3,
      name: 'Tonometria de sopro com tecnologia Corneal response technology',
      url: "https://www.medicalexpo.com/pt/prod/topcon-europe-medical/product-77876-471210.html"
    },
    {
      id: 4,
      name: 'Biomicroscopia (avaliação com biomicroscópio e lentes especiais da anatomia do segmento anterior e posterior do olho)',
      url: "https://usophthalmic.com/products/hs-5000-5x"
    },
    {
      id: 5,
      name: 'Mapeamento de retina',
      url: "https://www.eyetec.com.br/equipamento-oftalmoscopio-binocular-indireto"
    },
    {
      id: 6,
      name: 'Teste de lentes de contato',
      url: ""
    },
    {
      id: 7,
      name: 'Teste de estrabismo (cover test)',
      url: ""
    },

    {
      id: 8,
      name: ' Teste de visão de cores',
      url: ""
    },

    {
      id: 9,
      name: 'Teste de estereopsia (avaliação da visão tridimensional)',
      url: "https://descricao.com.br/produto/teste-de-daltonismo-ishihara/?utm_source=Google%20Shopping&utm_campaign=Google%20Shopping&utm_medium=cpc&utm_term=43366&gclid=Cj0KCQiAzfuNBhCGARIsAD1nu-_9Ve8Dlo9_KWVia1NOng89VeWXH79zOVr-EPnyOBSQTBPk2mPtfyYaAszpEALw_wcB"
    },


  ];
  return (
    <>
      <div className='conteiner-exame "d-flex justify-content-center'>
        <Container >
          <h1 className="text-tratamento text-center">Consultas de rotina</h1>
          <Row xs={12} md={12} lg={12}>
            ({consultas.map((item) => {
              return (
                <>
                  <Col key={item.id}>
                    <img
                      className="d-flex justify-content-center"
                      width="190"
                      height="100"
                      src={img}
                      alt="React Bootstrap logo"
                    />
                    <p className="text text-center col-11">
                      {item.name}
                    </p>
                  </Col>

                </>

              )


            })

            })

          </Row>
        </Container>
      </div>

    </>
  );
}


export default Exames;


