import * as React from "react"
// import Card from "../components/Card"
import Layout from "../components/Layout"
import SobreOdr from "../components/SobreDr"
import Carousel from '../components/Carousel-exa'
import CarouselCons from '../components/Carousel-cons'
import Dicas from "../components/Card"

import SobreAcl from "../components/Sobre-clinica"


const IndexPage = () => {
    return (
      <>
  <Layout>
    <main>
     <SobreOdr />
     <Carousel />
     <SobreAcl />
     <CarouselCons />
     <Dicas />
    </main>
  </Layout>
      </>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
