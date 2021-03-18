import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const MaximizeSavings = ({data}) => {
  const calculators = [
    {
      key: 'mortgage-payment',
      label: 'Mortgage Payment Calculator',
      image: '/img/icons/mortgage.svg',
      imageHover: '/img/icons/mortgage_hover.svg',
      link: '/calculator',
    },
    {
      key: 'affordability',
      label: 'Affordability Calculator',
      image: '/img/icons/loan.svg',
      imageHover: '/img/icons/loan_hover.svg',
      link: '/calculator',
    },
    {
      key: 'land-transfer-tax',
      label: 'Land Transfer Tax Calculator',
      image: '/img/icons/real-estate.svg',
      imageHover: '/img/icons/real-estate_hover.svg',
      link: '/calculator',
    },
    {
      key: 'cmhc-insurance',
      label: 'CMHC Insurance Calculator',
      image: '/img/icons/calculator.svg',
      imageHover: '/img/icons/calculator_hover.svg',
      link: '/calculator',
    },
  ]
  return (
    <MaximizeSavingsContainer>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-two-third">
                <h1 className="section-title">{data.heading}</h1>
                <h4 className="section-subtitle">
                  {data.subheading1}
                </h4>
                <div className="columns is-multiline mt-5">
                  {calculators.map((item) => {
                    return (
                      <div className="column is-half">
                        <Block data={item} />
                      </div>
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
              <div className="column is-one-third has-text-right">
                {/* <img
                  height="25em"
                  src="/img/maximize-savings.png"
                  alt="maximize savings image"
                /> */}
                 <Image fluid={data.image?.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaximizeSavingsContainer>
  )
}

const Block = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false)
  const toggleHover = () => {
    setIsHovered(() => !isHovered)
  }
  return (
    <AniLink paintDrip hex="#000000" to={data.link} state={{ id: data.key }}>
      <div
        className="block"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <figure className="icon">
          {isHovered ? <img src={data.imageHover} /> : <img src={data.image} />}
        </figure>
        <div className="title-3">
          {data.label}
          {isHovered ? (
            <img width={'36px'} src="/img/icons/left-arrow-hover.svg" />
          ) : (
            <img src="/img/left-arrow.svg" />
          )}
        </div>
      </div>
    </AniLink>
  )
}

const MaximizeSavingsContainer = styled.section`
  margin: 5rem 0;
  .block {
    /* margin-right: 10px; */
    height: 100px;
    cursor: pointer;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #dddddd;
    .title-3 {
      img {
        position: relative;
        top: 5px;
        margin-left: 1rem;
      }
    }
    :hover {
      background-color: #1c1c1e;
      transition: all 0.5s ease;
      .title-3 {
        color: #ffffff;
      }
    }
    .icon {
      margin-right: 10px;
      width: initial;
    }
    .arrow {
      left: 10px;
      position: relative;
      top: 3px;
    }
    div {
      width: 53%;
    }
    h3 {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 786px) {
    margin: 3rem 0;
    .block {
      padding: 0;
    }
  }
`

export default MaximizeSavings
