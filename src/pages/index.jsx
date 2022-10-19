import * as React from "react"
import Layout from "../components/Layout"
import SobreOdr from "../components/SobreDr"
import Dicas from "../components/Dicas"

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
