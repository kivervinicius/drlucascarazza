import React from "react"
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Banner from "../components/Banner";
import BotaoFlutuante from "../components/Btn-flutuante"
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Template({
  data,
}) {

  const { markdownRemark, site } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Helmet>
        <title>{frontmatter.title} | {site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <meta name="keywords" content={site.siteMetadata.keywords} />
      </Helmet>
      <Menu />
      <Banner />
      <h1 className="text-center title">{frontmatter.title}</h1>
      <div
        className="blog-post-content container row-12"
      >
        <div className="col-12" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <BotaoFlutuante />
      <Footer />

    </>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`
// date(formatString: "MMMM DD, YYYY")