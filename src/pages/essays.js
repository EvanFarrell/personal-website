import React from "react"
import Link from "gatsby-link"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EssaysPage = ({data}) => (
  <Layout>
    <SEO title="Essays - Evan Farrell" />
    <div class="container">
      <h1>Evan Farrell</h1>
      <p class="topol subtitle">
        I heard it's cool to call your blog posts 'essays'
      </p>
      {data.allMarkdownRemark.edges.map(({node}) => (
      <div key={node.id}>
        {/* <h3 className="title">{node.frontmatter.title}</h3> */}
        <Link to={node.fields.slug} style={{textDecoration: 'underline', color: 'inherit', cursor: 'pointer'}}><p className="topol">{node.frontmatter.title}</p></Link>
        {/* <p className="author">{node.frontmatter.author}</p>
        <p className="date">{node.frontmatter.date} {node.timeToRead}min read</p>
        <p className="excerpt">{node.excerpt}</p> */}
      </div>
    ))}
      <div class="links topol">
        <Link class="link" to="https://medium.com/@evan_farrell/about">
          old writing
        </Link>
        <Link class="final-link link" to="/">
          back to home
        </Link>
      </div>
    </div>
  </Layout>
)

export default EssaysPage

export const  query = graphql`query HomePageQuery{
  allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
    totalCount
    edges {
      node {
        fields{
          slug
        }
        frontmatter {
          title
          date
          author
        }
        excerpt
        timeToRead
      }
    }
  }
}`
