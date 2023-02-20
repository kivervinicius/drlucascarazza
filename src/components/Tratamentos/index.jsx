
import React from 'react';
import "./style.scss"

import img from "../images/imgcon1.png"

import { Col, Container, Row } from 'react-bootstrap';



const consultas = [
  {
    id: 1,
    name: 'Cirurgia de catarata',
    url: " https://www.leica-microsystems.com/products/surgical-microscopes/p/leica-m620-f20/"
  },
  
  {
    id: 6,
    name: 'Cross Linking para ceratocone',
    url: ""
  },
  {
  id: 10,
  name: 'Iridotomia a laser para glaucoma',
  url: ""
  
},
  {
    id: 8,
    name: 'Cirurgia de Glaucoma (trabeculectomia- TREC)',
    url: ""
  },
  
  
  {
  id: 9,
  name: 'Cirurgia a laser para glaucoma (trabeculoplastia seletiva – SLT)',
  url: ""
  
  },
  {
    id: 2,
    name: ' Yag Laser para capsulotomia (limpeza de lente pós cirurgia de catarata)',
    url: "https://houseofvision.com.br/equipamentos/yag-laserslt-deux/"
  },
  {
    id: 3,
    name: ' Tratamento clinico do ceratocone com adaptação de lentes de contato gelatinosas, rígidas, multicurvas e esclerais. ',
    url: ""
  },
  {
    id: 4,
    name: 'Cirurgia de Anel intra corneano para ceratocone (manual e com laser de femtosegundo)',
    url: ""
  },

  {
    id: 5,
    name: 'cirurgia à laser realizada em Cuiabá, em parceria com hospital de olhos de Cuiaba.',
    url: ""
  },

  {
    id: 7,
    name: 'Cirurgia de Pterígio com auto transplante conjuntival e cola biológica (sem pontos)',
    url: ""
  },

{
  id: 11,
  name: ' Cirurgia a laser para correção de grau de miopia, astigmatismo e hipermetropia (PRK e LASIK)',
  url: ""
  
},
]


 const CirurgiasEtratamento = () => {
  
  return (
  <>
     <div className='container-cirurgia  justify-content-center'>
        <Container className='d-block'>
          <h1 className="text-tratamento text-center">TRATAMENTOS E CIRURGIAS</h1>
          <Row>
            <Col xs={12} md={12}>
             <Row>
            {consultas.map((item) => {
              return (
                <>
                  <Col
                   key={item.id} xs={6} md={4} lg={2}>
                    <img
                      className="d-flex m-auto"
                      width="140"
                      height="90"
                      src={img}
                      alt={item.name}
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
        </Container>
      </div>

    </>
)};

export default CirurgiasEtratamento;