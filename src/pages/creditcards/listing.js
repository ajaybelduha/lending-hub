import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import ListingFilter from '../../components/creditcards/ListingFilter'
import CardBlock from '../../components/creditcards/CardBlock'
import { graphql } from 'gatsby'

const CCListing = (response) => {
  const { state } = response.location
  const questionFilters = state?.selections
  const { creditCards } = response.data
  const cardsData = creditCards.edges
  const [cardsListing, setCardsListing] = useState()
  const [cardsFiltered, setCardsFiltered] = useState()
  const [filters, setFilters] = useState(questionFilters)

  useEffect(() => {
    setCardsFiltered(cardsData)
    setCardsListing(cardsData)
  }, [])

  useEffect(() => {
    const filteredCards = cardsData.filter(item => {
      const {
        creditScore,
        creditScoreTwo,
        cardCategory,
        network,
        feeOptions,
        rewardType
      } = item.node.frontmatter

      let requiredCreditScore
      if (filters.creditScore === 'Excellent') { // Show Good also when excellent
        requiredCreditScore = (filters.creditScore === creditScore) || creditScore === 'Good' // || filters.creditScore === creditScoreTwo || creditScoreTwo === 'Good'
      } else {
        requiredCreditScore = filters.creditScore === creditScore // || filters.creditScore === creditScoreTwo
      }

      const requiredFeeOptions = filters.annualFees.toLowerCase() === feeOptions.toLowerCase() || filters.annualFees.toLowerCase() === 'either'
      const requiredCardFor = filters.cardFor.toLowerCase() === cardCategory.toLowerCase()
      const requiredNetwork = filters.network === network || filters.network === 'All'
      const requiredRewardType = filters.rewardType === rewardType || filters.rewardType === 'all'

      if (requiredFeeOptions && requiredCreditScore && requiredCardFor && requiredNetwork && requiredRewardType) {
        return true
      } else {
        return false
      }
    })
    setCardsFiltered(filteredCards)
  }, [filters])

  const setFilteredData = (items) => {
    setFilters(items)
  }
  return (
    <CCListingContainer>
      <Layout>
        <div className="container">
          <h1 className="section-title">Recommended cards for you</h1>
          <h4 className="section-subtitle">
            Based on your answers, we’ve provided the top matches for you to
            compare below. Review and select the one that best matches your
            needs.
          </h4>
          <ListingFilter
            data={cardsListing}
            filtersFromQuestions={questionFilters}
            setFiltered={setFilteredData}
          />
          <div className="cards-container">
            {cardsFiltered?.length > 0
              ? cardsFiltered.map((item) => (
              <CardBlock cardData={item} />
              ))
              : <div className="no-cards-error">
              <h1 className="title-24">No cards match the above query. Please try again.</h1>
            </div>}
          </div>
        </div>
      </Layout>
    </CCListingContainer>
  )
}

const CCListingContainer = styled.div`
  margin-top: 5rem;
  .filters-container {
    margin-top: 50px;
    display: flex;
  }
  .cards-container {
    margin-top: 2rem;
  }
  .no-cards-error {
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const pageQuery = graphql`
query CreditCardListing {
  creditCards: allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "credit-card-post" } } }
  ) {
    edges {
      node {
        frontmatter {
          title
          cardImage {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          creditScore
          creditScoreTwo
          fee
          feeOptions
          network
          cardCategory
          userCategory
          purchaseInterest
          balanceTranferFees
          balanceTransferInterest
          rewardType
          href
        }
      }
    }
  }
}
`

export default CCListing
