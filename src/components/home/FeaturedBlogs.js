import React, { useEffect } from 'react'
import styled from 'styled-components'
import { UnderlinedLink } from '../../components/common/common'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from 'gatsby-image'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const FeaturedBlogs = () => {
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    cursor: 'pointer',
  }
  const response = useStaticQuery(blogs)
  const blogData = response.allMarkdownRemark.edges
  console.log(blogData)
  return (
    <FeaturedBlogsContainer>
      <div className="container">
        <div className="header-with-link">
          <h1 className="section-title mb-3">
            Trusted news and reviews, published daily
          </h1>
          <UnderlinedLink to="/blogs">See all news</UnderlinedLink>
        </div>
        <div className="columns">
          <div className="column is-two-third">
            <Carousel
              showThumbs={false}
              emulateTouch
              height="443px"
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, left: 15 }}
                  >
                    <img
                      className="arrow-icon"
                      src="/img/icons/right-arrow-white.svg"
                    />
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    style={{ ...arrowStyles, right: 15 }}
                  >
                    <img
                      className="arrow-icon"
                      src="/img/icons/left-arrow-white.svg"
                    />
                  </button>
                )
              }
            >
              {blogData.map((item) => (
                <div className="carousel-main-image">
                  <Img
                    fluid={
                      item.node.frontmatter.featuredimage.childImageSharp.fluid
                    }
                  />
                  <AniLink paintDrip hex="#000000"to={item.node.fields.slug} itemProp="url">
                    <div className="text-over-image">
                      <h4 className="type mb-2">{item.node.frontmatter.category}</h4>
                      <h4 className="heading mb-2">
                        {item.node.frontmatter.title || item.node.fields.slug}
                      </h4>
                      <h4 className="meta">{item.node.frontmatter.date}</h4>
                    </div>
                  </AniLink>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="column is-one-third">
            <div className="blogs-list">
              {blogData.map((item, index) => {
                if (index < 3) {
                  return (
                    <>
                      <div className="blog">
                        <div className="blog-content">
                          <AniLink paintDrip hex="#000000"to={item.node.fields.slug} itemProp="url">
                            <h4 className="type mb-2">{item.node.frontmatter.category}</h4>
                            <h4 className="title-3 mb-2">
                              {item.node.frontmatter.title ||
                                item.node.fields.slug}
                            </h4>
                            <h4 className="meta">
                              {item.node.frontmatter.date}
                            </h4>
                          </AniLink>
                        </div>
                        <div>
                          <img
                            className="arrow-icon"
                            src="/img/icons/down-arrow.svg"
                          />
                        </div>
                      </div>
                      <hr />
                    </>
                  )
                } else {
                  return null
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </FeaturedBlogsContainer>
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
            category
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

const FeaturedBlogsContainer = styled.section`
  .blogs-list {
    .blog {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      .type {
        opacity: 0.39;
        text-transform: capitalize;
      }
      .blog-content {
        width: 60%;
      }
      .arrow-icon {
        width: 36px;
        max-width: inherit;
      }
    }
  }
  .carousel {
    .arrow-icon {
      width: 36px;
      max-width: inherit;
    }
    button {
      background: none;
      border: 0;
    }
    .carousel-main-image {
      /* img {
                height: 443px;
            } */
      .text-over-image {
        position: absolute;
        bottom: 0;
        width: 100%;
        color: white;
        text-align: left;
        padding: 2rem;
        background: transparent
          linear-gradient(180deg, #ffffff00 0%, #000000cc 100%) 0% 0% no-repeat
          padding-box;
        .type {
          font-size: 1.1rem;
          text-transform: capitalize;
        }
        .heading {
          font-size: 1.8rem;
          text-transform: none;
        }
      }
    }
  }
  @media screen and (max-width: 786px) {
    .carousel {
      .carousel-main-image {
        .text-over-image {
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
          padding: 1rem;
          background: transparent linear-gradient(180deg,#ffffff00 0%,#000000cc 0%) 0% 0% no-repeat padding-box;
          .type {
            display: none
          }
          .meta {
            font-size: 0.8rem;
          }
          .heading {
            font-size: 1.2rem;
            letter-spacing: 0;
          }
        }
      }
    }
  }
`

export default FeaturedBlogs
