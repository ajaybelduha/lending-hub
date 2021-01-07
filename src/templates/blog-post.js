import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../components/Layout'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout>
      <BlogPostContainer>
        <div className="container">
          <article
            className="blog-post"
            itemScope
            itemType="http://schema.org/Article"
          >
            <header className="headings">
              <h1 className="section-title" itemProp="headline">
                {post.frontmatter.title}
              </h1>
              <p>{post.frontmatter.date}</p>
            </header>
            <Img
              fluid={post.frontmatter?.featuredimage?.childImageSharp?.fluid}
            />
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
              className="body"
            />
            <hr />
            <footer></footer>
          </article>
          <nav className="blog-post-nav">
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </BlogPostContainer>
    </Layout>
  )
}

const BlogPostContainer = styled.div`
  margin-top: 50px;
  .headings {
    margin-bottom: 50px;
  }
  .body {
    margin-top: 50px;
    p {
      line-height: 1.75;
      margin: 1.5em auto;
      font-size: 1.1rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 786px) {
    margin-top: 20px
  }
`

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        templateKey
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredpost
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 600, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
