import * as React from "react"
// import Card from "../components/Card"
import Layout from "../components/Layout"
import SobreOdr from "../components/SobreDr"
import Dicas from "../components/Card"

import SobreAcl from "../components/Sobre-clinica"


const IndexPage = () => {
    return (
      <>
  <Layout>
    <main>
     <SobreOdr />
     <SobreAcl />
     <Dicas />
    </main>
  </Layout>
      </>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
