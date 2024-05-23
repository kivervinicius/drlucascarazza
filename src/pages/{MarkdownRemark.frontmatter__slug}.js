import React from "react"
import { graphql } from "gatsby";
import Banner from "../components/Banner";
import BotaoFlutuante from "../components/Btn-flutuante"
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Template({
  data,
}) {

  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
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