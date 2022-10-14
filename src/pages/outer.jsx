import React from "react"
import { graphql } from "gatsby"
import layout from "../components/Layout"

export default function home({ data }) {
  return (
    <layout>
      <h1>{data.allMarkdownRemark.totalCount} posts</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h1>{node.frontmatter.title}</h1>
          <h1>{node.frontmatter.data}</h1>
          <p>{node.excerpt}</p>
          <p>{node.timeToRead}</p>
        </div>

      ))}

    </layout>
  )
}

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
          excerpt
          timeToRead
        }
      }
      totalCount
    }
  }
`
