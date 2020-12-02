import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Dropdown from '../../components/Dropdown';
import CardBlock from '../../components/creditcards/CardBlock';
import { graphql } from 'gatsby';

const CCListing = (response) => {
    console.log("Credit Cards Listings")
    console.log(response);
    const {creditCards} = response.data;
    return (
        <CCListingContainer>
            <Layout>
                <div className="container">
                    <h1 className="section-title">Recommended cards for you</h1>
                    <h4 className="section-subtitle">Based on your answers, we’ve provided the top matches for you to compare below. Review and select the one that best matches your needs.</h4>
                    <div className="filters-container">
                        <Dropdown default="Travel" />
                        <Dropdown default="No Annul Fee" />
                        <Dropdown default="Welcome Bonus" />
                        <Dropdown default="Low to High" />
                    </div>
                    <div className="cards-container">
                        {creditCards.edges.map(item => (
                            <CardBlock cardData={item}  />
                        ))}
                    </div>
                </div>
            </Layout>
        </CCListingContainer>
    )
}

const CCListingContainer = styled.div`
    .filters-container {
        margin-top: 50px;
        display: flex;
    }
    .cards-container {
        margin-top: 2rem;
    }
`

export const pageQuery = graphql`
query CreditCardListing {
    creditCards:allMarkdownRemark(filter: {frontmatter:{ templateKey: { eq: "credit-card-post" } }}) {
      edges {
        node {
          frontmatter {
            title
            cardImage {
              childImageSharp {
                fixed(width: 299, height: 189) {
                    ...GatsbyImageSharpFixed
                }
              }
            }
            fee
            purchaseInterest
            cashAdvanceInterest
            href
            summaryDescription
          }
        }
      }
    }
  }
`

export default CCListing;