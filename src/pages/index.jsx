import * as React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import SobreOdr from "../components/SobreDr"
import Dicas from "../components/Dicas"
import Menu from "../components/Menu"
import Footer from "../components/Footer"
import BotaoFlutuante from "../components/Btn-flutuante"

import SobreAcl from "../components/Sobre-clinica"
import Banner from '../components/Banner'
import "./index.scss";
import SectionMix from "../components/Section-mix"

const IndexPage = ({ data }) => {
  const { site } = data
  return (
    <>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="keywords" content={site.siteMetadata.keywords} />
      </Helmet>
      <div className="container-pages">
        <Menu />
        <Banner />
        <BotaoFlutuante />
        <SobreOdr />
        <SobreAcl />
        <SectionMix />
        <Dicas />
        <Footer />
      </div>
    </>

  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`
