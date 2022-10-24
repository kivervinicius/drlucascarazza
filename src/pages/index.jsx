import * as React from "react"
import SobreOdr from "../components/SobreDr"
import Dicas from "../components/Dicas"
import Menu from "../components/Menu"
import Footer from "../components/Footer"




import SobreAcl from "../components/Sobre-clinica"


const IndexPage = () => {
  return (
    <>
      <div className="conteiner-pages">
        <Menu />
        <SobreOdr />
        <SobreAcl />
        <Dicas />
        <Footer />

      </div>
    </>

  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
