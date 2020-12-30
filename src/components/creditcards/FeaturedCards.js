import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image';
import { BlackButtonLink, UnderlinedLink } from '../common/common'

const featuredCards = graphql`
query IndexPageTemplate {
    creditCards:allMarkdownRemark(filter: {frontmatter:{ templateKey: { eq: "credit-card-post" } featured: {eq: true} }}, limit: 3) {
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

const Featured = () => {
    const data = useStaticQuery(featuredCards)
    const cards = data.creditCards.edges;
    // temp1[0].node.frontmatter.title
    return(
        <FeaturedContainer>
            <div className="container">
                <h2 className="section-title mb-4">Featured Credit Cards for October 2020</h2>
                <div className="columns">
                    {cards.map(item => {
                        const card = item.node.frontmatter;
                        console.log("inside card")
                        console.log(card)
                        return(
                            <div className="column">
                                <div className="card-block has-text-centered">
                                    {/* <img src="/img/true-line-gold-mastercardcard.png" /> */}
                                    <Image fluid={card.cardImage.childImageSharp.fluid} />
                                    <p className="has-text-left mt-4">{card.summaryDescription}</p>
                                    <BlackButtonLink>More Details</BlackButtonLink>
                                    {/* <h4>Featured</h4> */}
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
        height: 400px;
        p {
          height: 73px;
          overflow: hidden;
        }
    }
    @media screen and (max-width: 786px) {
      .card-block {
        height: fit-content
      }
    }
`


export default Featured;