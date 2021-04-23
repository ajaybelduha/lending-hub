import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import GetStartedBlock from './GetStartedBlock';

const MaximizeSavings = ({data}) => {
  const calculators = [
    {
      key: 'mortgage-payment',
      title: 'Mortgage Payment Calculator',
      description: 'Enter your details below to estimate your monthly mortgage payment with taxes, fees.',
      image: '/img/icons/mortgage.svg',
      imageHover: '/img/icons/mortgage_hover.svg',
      link: '/calculator'
    },
    {
      key: 'affordability',
      title: 'Affordability Calculator',
      description: `We'll help you figure out what home price you may be able to afford`,
      image: '/img/icons/loan.svg',
      imageHover: '/img/icons/loan_hover.svg',
      link: '/calculator'
    },
    {
      key: 'land-transfer-tax',
      title: 'Land Transfer Tax Calculator',
      description: 'Our calculator will help to figure out estimate land transfer taxes based on your province and city. First-time home buyers may be eligible for rebates',
      image: '/img/icons/real-estate.svg',
      imageHover: '/img/icons/real-estate_hover.svg',
      link: '/calculator'
    },
    {
      key: 'cmhc-insurance',
      title: 'CMHC Insurance Calculator',
      description: 'The CMHC Mortgage Loan Insurance premium is calculated as a percentage of the loan and is based on the size of your down payment',
      image: '/img/icons/calculator.svg',
      imageHover: '/img/icons/calculator_hover.svg',
      link: '/calculator'
    },
  ]
  return (
    <MaximizeSavingsContainer>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-half">
                <h1 className="section-title">{data.heading}</h1>
                <h4 className="section-subtitle">
                  {data.subheading1}
                </h4>
                <div className="blocks mt-5">
                  {calculators.map((item) => {
                    return (
                      <GetStartedBlock key={item.key} data={item} ctaText="Click here" width='300px' />
                    )
                  })}

                  {/* <div className="column is-half">
                                        <div className="block">
                                            <div className="title-3">
                                                See all calculators
                                            </div>
                                        </div>
                                    </div> */}
                </div>
              </div>
              <div className="column is-half has-text-right">
                {/* <img
                  height="25em"
                  src="/img/maximize-savings.png"
                  alt="maximize savings image"
                /> */}
                <div className="banner-image">
                  <Image fluid={data.image?.childImageSharp.fluid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaximizeSavingsContainer>
  )
}

const MaximizeSavingsContainer = styled.section`
  margin: 5rem 0;
  .blocks {
    display: flex;
    flex-wrap: wrap;
  }
  .banner-image {
    width: 95%;
    margin-left: auto;
  }
  @media screen and (max-width: 786px) {
    margin: 3rem 0;
    .blocks {
      justify-content: flex-start;
    }
    .banner-image {
    width: 100%;
  }
  }
`

export default MaximizeSavings
