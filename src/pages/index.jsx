import * as React from "react"
import SobreOdr from "../components/SobreDr"
import Dicas from "../components/Dicas"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import BotaoFlutuante from "../components/Btn-flutuante"

import SobreAcl from "../components/Sobre-clinica"
import Banner from '../components/Banner'
import "./index.scss";

const IndexPage = () => {
  return (
    <>
      <div className="container-pages">
        <Menu />
        <Banner />
        <BotaoFlutuante />
        <SobreOdr />
        <SobreAcl />
        <Dicas />
        <Footer />

      </div>
    </>

  )
}

export default IndexPage

export const Head = () => <title>DR.LUCAS CARAZZA | MEDICO OFTALMOLOGISTA </title>
