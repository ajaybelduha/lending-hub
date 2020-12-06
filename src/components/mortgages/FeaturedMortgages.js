import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image';
import { BlackButtonLink, UnderlinedLink } from '../common/common'

const featuredMortgages = graphql`
query FeaturedMortgageItems {
    mortgages:allMarkdownRemark(filter: {frontmatter:{ templateKey: { eq: "credit-card-post" } featured: {eq: true} }}, limit: 3) {
      edges {
        node {
          frontmatter {
            title
            cardImage {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            href
            featured
            summaryDescription
          }
        }
      }
    }
  }
`

const FeaturedMortgages = () => {
    const data = useStaticQuery(featuredMortgages)
    const mortgageItems = data.mortgages.edges;
    // temp1[0].node.frontmatter.title
    return(
        <FeaturedContainer>
            <div className="container">
                <h2 className="section-title">Featured Mortgages for October 2020</h2>
                <div className="columns">
                    {mortgageItems.map(item => {
                        const card = item.node.frontmatter;
                        return(
                            <div className="column">
                                <div className="card-block has-text-centered">
                                    {/* <img src="/img/true-line-gold-mastercardcard.png" /> */}
                                    {/* <Image fluid={card.cardImage.childImageSharp.fluid} /> */}
                                    <div className="card-head">
                                      <img width={20} src="/img/true-line-gold-mastercardcard.png" />
                                      <h2 className="title-24">CanWise Financial</h2>
                                    </div>
                                    <p className="has-text-left mt-4">{card.summaryDescription}</p>
                                    <BlackButtonLink>More Details</BlackButtonLink>
                                    <p>Featured</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="view-all has-text-centered">
                    <UnderlinedLink to="/creditcards/listing">View all</UnderlinedLink>
                </div>
            </div>
        </FeaturedContainer>
    )
}

const FeaturedContainer = styled.section`
    .card-block {
        border: 1px solid #000000;
        padding: 1rem 2rem;
        height: 270px;
        p {
          height: 73px;
          overflow: hidden;
        }
        .card-head {
          display: flex;
          img {
            margin-right: 20px
          }
        }
    }
`


export default FeaturedMortgages;