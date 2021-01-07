import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

const EditorsPick = () => {
  const response = useStaticQuery(blogs)
  const blogData = response.allMarkdownRemark.edges
  return (
    <EditorsPickContainer>
      <div className="container">
        <h1 className="section-title mb-4">Editor's pick</h1>
        <Link to={blogData[0].node.fields.slug} itemProp="url">
          <div className="ep-block">
            <div className="image">
              <Img
                  fluid={
                    blogData[0].node.frontmatter.featuredimage.childImageSharp.fluid
                  }
                />
            </div>
            <div className="text">
              <h4 className="title-1 grey-text mb-2">Banking</h4>
              <h4 className="title-2 mb-2">
                {blogData[0].node.frontmatter.title}
              </h4>
              <h4 className="meta mb-2">{blogData[0].node.frontmatter.date}</h4>
              <p className="title-1 grey-text">
                {blogData[0].node.frontmatter.description}
              </p>
              <h4 className="title-2">Continue reading</h4>
            </div>
          </div>
        </Link>
        <div className="ep-other-blocks mt-4">
          <div className="columns">
            {blogData.map((item, index) => {
              if (index < 4) {
                return (
                  <div className="column">
                    <Link to={item.node.fields.slug} itemProp="url">
                    <div className="block">
                      <Img
                        fluid={
                          item.node.frontmatter.featuredimage.childImageSharp.fluid
                        }
                      />
                      <h4 className="title-2 my-3">
                        {item.node.frontmatter.title || item.node.fields.slug}
                      </h4>
                      <h4 className="meta">{item.node.frontmatter.date}</h4>
                    </div>
                    </Link>
                  </div>
                )
              } else {
                return null
              }
            })}
          </div>
        </div>
      </div>
    </EditorsPickContainer>
  )
}

const blogs = graphql`
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

const EditorsPickContainer = styled.section`
  margin-top: 50px;
  .ep-block {
    display: flex;
    border: 1px solid;
    height: 376px;
  }
  .ep-other-blocks {
    .block {
      box-shadow: 0px 3px 6px #00000029;
      padding: 1rem;
      min-height: 315px;
    }
  }
  .image {
    width: 65%;
    .gatsby-image-wrapper {
      height: 100%;
    }
    /* background-image: url('/img/coffee-gear.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%; */
  }
  .text {
    width: 35%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .heading {
      font-size: 1rem;
      text-transform: none;
    }
    .meta {
      font-size: 0.8rem;
    }
  }
  @media screen and (max-width: 786px) {
    .ep-block {
      display: none;
    }
  }
`

export default EditorsPick
