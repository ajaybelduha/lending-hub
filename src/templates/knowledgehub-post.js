import React from 'react'
import { graphql } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from 'styled-components'
import Layout from '../components/Layout'

const KnowledgehubPostTemplate = ({ data, location }) => {
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
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
              className="body"
            />
            <hr />
            <footer></footer>
          </article>
        </div>
      </BlogPostContainer>
    </Layout>
  )
}

const BlogPostContainer = styled.div`
  margin-top: 6%;
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
    h5 {
      font-family: 'Poppins Bold';
      margin-bottom: 1rem;
    }
    li {
      margin: 2rem 0;
      line-height: 2rem;
    }
    strong {
      font-family: 'Poppins Bold';
      font-size: 1.2rem;
    }
  }
  @media screen and (max-width: 786px) {
    margin-top: 15%;
  }
`

export default KnowledgehubPostTemplate

export const pageQueryKH = graphql`
  query KnowledgePostBySlug(
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
