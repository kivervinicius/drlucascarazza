import React from "react"
import { graphql } from "gatsby"

const Page = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            data
            title
          }
        }
      }
      totalCount
    }
  }
`

export default Page
