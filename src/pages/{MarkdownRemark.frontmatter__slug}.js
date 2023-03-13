import React from "react"
import { graphql } from "gatsby";
import BannerExame from "../components/Banner-exame";
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
        <BannerExame />
          <h1 className="text-center">{frontmatter.title}</h1>
              <div
                className="blog-post-content m-5 col-8 "
                dangerouslySetInnerHTML={{ __html: html }}
              />
        
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