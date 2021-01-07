import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../../../components/Layout'
import Dropdown from '../../../components/Dropdown'
import ListingFilter from '../../../components/mortgages/refinance/ListingFilter'
import { graphql, useStaticQuery } from 'gatsby'
import MortgageBlock from '../../../components/mortgages/MortgageBlock'

const RefinanceListings = (response) => {
  const { state } = response.location
  const questionFilters = state?.selections?.formValues
  const [mortgageListing, setMortgageListing] = useState()
  const [mortgageFiltered, setMortgageFiltered] = useState()
  const [filters, setFilters] = useState(questionFilters)

  useEffect(() => {
    const { mortgages } = response.data
    const mortgagesData = mortgages.edges

    setMortgageFiltered(mortgagesData)
    setMortgageListing(mortgagesData)
  }, [])

  const setFilteredData = (items) => {
    setFilters(items)
  }

  return (
    <Layout>
      <div className="container my-6">
        <MortgageStyledContainer>
          <h1 className="section-title">Recommended mortgages for you</h1>
          <h4 className="section-subtitle">
            Based on your answers, we’ve provided the top matches for you to
            compare below. Review and select the one that best matches your
            needs.
          </h4>
          <h4 className="title-24 mt-6">Your mortgage search</h4>
          <ListingFilter
            data={mortgageListing}
            filtersFromQuestions={questionFilters}
            setFiltered={setFilteredData}
          />
          <hr />
          <div className="mortgages-container">
            {mortgageFiltered &&
              mortgageFiltered.map((item) => (
                <MortgageBlock
                  currentRate={questionFilters.currentRate}
                  mortgageType={questionFilters.mortgageType}
                  mortgages={item}
                  filterData={filters}
                />
              ))}
          </div>

          {/* <div className="content" dangerouslySetInnerHTML={{__html: mortgageListingHtml}}></div> */}
        </MortgageStyledContainer>
      </div>
    </Layout>
  )
}

const MortgageStyledContainer = styled.div`
  .filters-container {
    margin-top: 20px;
    display: flex;
  }

  .rh-all-rates-table {
    max-width: 100%;
    .rh-sortable-table .banner {
      display: flex;
      align-items: center;
      background-color: #ffffff;
      box-shadow: none;
      .banner-left,
      .banner-right {
        display: none;
      }
      .banner-col {
        padding: 0 4em;
        &.col-rate {
          width: 20%;
        }
        &.col-pay {
          width: 20%;
        }
        &.col-provider {
          width: 60%;
        }
      }
    }
    .rh-tabs {
      ul.nav.nav-tabs li a {
      }
    }
    .tab-content {
      a.rh-toggle-bar {
        background-color: #1c1c1e;
        color: #ffffff;
        cursor: pointer;
        border: 1px solid #1c1c1e;
        :hover {
          background-color: #ffffff;
          color: #1c1c1e;
        }
      }
      a.rh-toggle-bar + .toggle-content {
        background-color: #ffffff;
        border: 1px solid #1c1c1e;
        box-shadow: none;
      }
    }
    .col-action {
      display: none;
    }
    .featured-label {
      display: none;
    }
    .col-rate {
      width: 20%;
      vertical-align: middle;
    }
    .col-pay {
      width: 20%;
      vertical-align: middle;
    }
    .col-provider {
      width: 60%;
      vertical-align: middle;
      .provider-logo img {
        width: 100px;
      }
      .provider-name {
        font-size: 1.2rem;
      }
    }
    a {
      color: #1c1c1e;
      :hover {
        text-decoration: none;
        cursor: default;
      }
    }
    table {
      tbody {
        tr {
          border: 1px solid #1c1c1e;
        }
        td {
          color: #1c1c1e;
        }
      }
    }
    .popover {
      display: none !important;
    }
    .rh-stub {
      margin-top: 2rem;
      a.stub {
        color: #1c1c1e;
      }
      canvas {
        display: none;
      }
    }
  }

  @media screen and (max-width: 786px) {
    .filters-container {
      margin-top: 20px;
      display: flex;
    }
  }
`

export const mortgageQuery = graphql`
  query RefinanceTemplate {
    mortgages: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "refinance-mortgages" } } }
    ) {
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
              _5
            }
          }
        }
      }
    }
  }
`

export default RefinanceListings
