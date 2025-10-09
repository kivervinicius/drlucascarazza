import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Exame from "../components/Exames";
import Banner from "../components/Banner";
import BotaoFlutuante from "../components/Btn-flutuante";


const ExamePage = ({ data }) => {
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
            <Exame />
            <Footer />
        </>
    );
}
export default ExamePage;

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