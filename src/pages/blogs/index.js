import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'

const BlogIndex = ({ data, navigate, location, n }) => {
  const posts = data.allMarkdownRemark.edges
  const [filteredPosts , setFilteredPosts] = useState(posts)

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

  const onFilterClick = (e) => {
    e.preventDefault();
    const name = e.target.name;
    let filteredData = posts;

    switch(name) {
      case 'mortgage':
        filteredData = posts.filter(item => item.node.frontmatter.tags.includes('mortgage'))
        setFilteredPosts(filteredData)
        break;
      case 'credit-card': {}
        filteredData = posts.filter(item => item.node.frontmatter.tags.includes('credit_card'))
        setFilteredPosts(filteredData)
        break;
      case 'loans':
        filteredData = posts.filter(item => item.node.frontmatter.tags.includes('loans'))
        setFilteredPosts(filteredData)
        break;  
      case 'insurance':
        filteredData = posts.filter(item => item.node.frontmatter.tags.includes('insurance'))
        setFilteredPosts(filteredData)
        break;
      case 'all':
        setFilteredPosts(posts)
        break;
      default:
      setFilteredPosts(posts)
    }
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
          <div className="section-title">Latest posts</div><br/>
          <div class="tabs">
            <ul>
              <li className="is-active"><a name="all" onClick={onFilterClick}>All</a></li>
              <li><a name="mortgage" onClick={onFilterClick}>Mortgage</a></li>
              <li><a name="credit-card" onClick={onFilterClick}>Credit Card</a></li>
              <li><a name="loans" onClick={onFilterClick}>Loans</a></li>
              <li><a name="insurance" onClick={onFilterClick}>Insurance</a></li>
            </ul>
          </div>
          <div className="list-items">
            {filteredPosts.map((post) => {
              const title = post.node.frontmatter.title || post.node.fields.slug

              return (
                <AniLink paintDrip hex="#000000"to={post.node.fields.slug} itemProp="url">
                  <div className="item" key={post.node.fields.slug}>
                    <article
                      className="post-list-item"
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <header>
                        <Img
                          fluid={
                            post.node.frontmatter.featuredimage.childImageSharp
                              .fluid
                          }
                        />
                        <h2 className="blog-title">
                          {/* <AniLink paintDrip hex="#000000"to={post.node.fields.slug} itemProp="url"> */}
                          <span className="title-2" itemProp="headline">
                            {title}
                          </span>
                          {/* </Link> */}
                        </h2>
                        <small className="publish-date">
                          {post.node.frontmatter.date}
                        </small>
                      </header>
                      <section className="description">
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.node.frontmatter.description ||
                              post.node.excerpt,
                          }}
                          itemProp="description"
                        />
                      </section>
                    </article>
                  </div>
                </AniLink>
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
    color: #ffffff;
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
      height: 500px;
      overflow: hidden;
      margin-right: 15px;
      margin-bottom: 25px;
      .blog-title {
        margin-top: 20px;
        height: 50px;
      }
      .publish-date {
        color: #5b7a81;
      }
      .description {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
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
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
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
