import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from "../../components/Layout"
import SearchPosts from "../../components/searchPosts"

const BlogIndex = ({ data, navigate, location, n }) => {
  const posts = data.allMarkdownRemark.edges
  console.log(data)
  const localSearchBlog = data.localSearchBlog

  if (posts.length === 0) {
    return (
      <Layout>
        <div className="container">
          <p>
            No blog posts found. Add markdown posts to "content/blog" (or the
            directory you specified for the "gatsby-source-filesystem" plugin in
            gatsby-config.js).
          </p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <BlogIndexContainer>
      <div className="cover-container">
        <div>
          <h1 className="section-title">The bottom line.</h1>
          <h2 className="title-24-nb">Stay on top of all the latest news</h2>
        </div>
      </div>
      <div className="container">
        {/* <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
      /> */}
      <div className="list-items">
        {posts.map(post => {
          const title = post.node.frontmatter.title || post.node.fields.slug

          return (
            <Link to={post.node.fields.slug} itemProp="url">
            <div className="item" key={post.node.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <Img fluid={post.node.frontmatter.featuredimage.childImageSharp.fluid} />
                  <h2 className="blog-title">
                    {/* <Link to={post.node.fields.slug} itemProp="url"> */}
                      <span className="title-2" itemProp="headline">{title}</span>
                    {/* </Link> */}
                  </h2>
                  <small className="publish-date">{post.node.frontmatter.date}</small>
                </header>
                <section className="description">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.node.frontmatter.description || post.node.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </div>
            </Link>
          )
        })}
      </div>
      </div>
      </BlogIndexContainer>
    </Layout>
  )
}

const BlogIndexContainer = styled.div`
  .cover-container {
    color: #FFFFFF;
    text-align: center;
    background-image: url('/img/blog-cover.jpg');
    height: 600px;
    background-position: 50%;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
  }
  .list-items {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .item {
      width: 310px;
      padding: 10px;
      margin-right: 15px;
      margin-bottom: 25px;
      .blog-title {
        margin-top: 20px;
      }
      .publish-date {
        color: #5B7A81;
      }
      .description {
        margin-top: 10px;
      }
    }
  }
  @media screen and (max-width: 786px) {
    .list-items {
    .item {
      width: 100%;
    }
  }
  }
`

export default BlogIndex

export const pageQuery = graphql`
  query {
    localSearchBlog {
      index
      store
    }
    allMarkdownRemark(filter:{frontmatter: {templateKey: {eq: "blog-post"}}}) {
      edges {
        node {
          html
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            templateKey
            title
            date(formatString: "MMMM DD, YYYY")
            description
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 310, maxHeight: 200, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`