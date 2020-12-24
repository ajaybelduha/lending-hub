import React from 'react';
import styled from 'styled-components';
import {useStaticQuery, graphql} from 'gatsby'
import Image from 'gatsby-image';
import { BlackButtonLink, UnderlinedLink } from '../common/common'

const featuredMortgages = graphql`
query FeaturedMortgageItems {
    mortgages:allMarkdownRemark(filter: {frontmatter:{ mortgage: { eq: "mortgage" } }}, limit: 3) {
      edges {
        node {
          frontmatter {
            title
            templateKey
            logo {
              childImageSharp {
                fixed(width: 52, height: 52) {
                    ...GatsbyImageSharpFixed
                }
              }
            }
            amortization
            isFeatured
            fixed {
              _1
              _2
              _3
              _5
            }
            variable {
              _3
              _5
            }
          }
        }
      }
    }
  }
`

const FeaturedMortgages = () => {
    const data = useStaticQuery(featuredMortgages)
    const mortgageItems = data.mortgages.edges;
    console.log("featured")
    console.log(mortgageItems)
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
                                    <div className="card-head">
                                      <Image fixed={card.logo.childImageSharp.fixed} />
                                      <h2 className="title-24-nb">{card.title}</h2>
                                    </div>
                                    <p className="has-text-left title-small mt-4">Get an amazing rate of {card.fixed._5}% for 5 year fixed with this mortgage</p>
                                    <BlackButtonLink>More Details</BlackButtonLink>
                                    <p>Featured</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="view-all has-text-centered">
                    <UnderlinedLink to="/mortgages/listing">View all</UnderlinedLink>
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
          height: 150px;
          overflow: hidden;
        }
        .card-head {
          display: flex;
          align-items: center;
          h2 {
            margin-left: 20px
          }
        }
    }
`


export default FeaturedMortgages;