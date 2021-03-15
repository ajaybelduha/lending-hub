import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from 'gatsby-image'

const EditorsPick = ({type}) => {
  const response = useStaticQuery(blogs)
  let blogData = response.allMarkdownRemark.edges
  if (type === "mortgage") {
    blogData = blogData.filter(item => item.node.frontmatter.category === "mortgage")
  } else if(type === 'credit-card') {
    blogData = blogData.filter(item => item.node.frontmatter.category === "credit-card")
  } else {
    blogData = blogData.filter(item => item.node.frontmatter.category === "insurance")
  }
  return (
    <EditorsPickContainer>
      <div className="container">
        <h1 className="section-title mb-4">Editor's pick</h1>
        <AniLink paintDrip hex="#000000"to={blogData[0].node.fields.slug} itemProp="url">
          <div className="ep-block">
            <div className="image">
              <Img
                  fluid={
                    blogData[0].node.frontmatter.featuredimage.childImageSharp.fluid
                  }
                />
            </div>
            <div className="text">
              <h4 className="title-1 grey-text type mb-2">{blogData[0].node.frontmatter.category}</h4>
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
        </AniLink>
        <div className="ep-other-blocks mt-4">
          <div className="columns">
            {blogData.map((item, index) => {
              if (index < 4) {
                return (
                  <div className="column">
                    <AniLink paintDrip hex="#000000"to={item.node.fields.slug} itemProp="url">
                    <div className="block">
                      <Img
                        fluid={
                          item.node.frontmatter.featuredimage.childImageSharp.fluid
                        }
                      />
                      <h4 className="type grey-text mt-2">{item.node.frontmatter.category}</h4>
                      <h4 className="title-2 my-3">
                        {item.node.frontmatter.title || item.node.fields.slug}
                      </h4>
                      <h4 className="meta">{item.node.frontmatter.date}</h4>
                    </div>
                    </AniLink>
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
            category
          }
        }
      }
    }
  }
  `

const EditorsPickContainer = styled.section`
  margin: 5rem 0;
  .ep-block {
    display: flex;
    border: 1px solid;
    height: 376px;
    .type {
      text-transform: capitalize;
    }
  }
  .ep-other-blocks {
    .block {
      box-shadow: 0px 3px 6px #00000029;
      padding: 1rem;
      min-height: 350px;
      .type {
        text-transform: capitalize;
      }
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
    .grey-text {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
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
