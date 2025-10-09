import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Tratamento from "../components/Tratamentos";
import BotaoFlutuante from "../components/Btn-flutuante";

const ConsultaPage = ({ data }) => {
    const { site } = data
    return (
        <>
            <Helmet>
                <title>{site.siteMetadata.title}</title>
                <meta name="description" content={site.siteMetadata.description} />
                <meta name="keywords" content={site.siteMetadata.keywords} />
            </Helmet>
            <Menu />
            <BotaoFlutuante />
            <Banner />
            <Tratamento />
            <Footer />
        </>
    );
}
export default ConsultaPage;

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