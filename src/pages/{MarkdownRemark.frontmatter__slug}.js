import React from "react"
import { graphql } from "gatsby";

import BotaoFlutuante from "../components/Btn-flutuante"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Menu from "../components/Menu";
import Footer from "../components/Footer";


export default function Template({
  data,
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <div className="blog-post-container d-block">
        <Menu />
        <Container className='d-block'>
         <h1 className="text-center">{frontmatter.title}</h1>
     <br />
     <br />    
          <Row>
            <Col className="blog-post ">
              <div
                className="blog-post-content text-right"
                dangerouslySetInnerHTML={{ __html: html }}
              />

            </Col>
          </Row>
        </Container>
        <BotaoFlutuante />
        <Footer />
      </div>
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