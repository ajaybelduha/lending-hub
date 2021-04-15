import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { ButtonNoStyle, BlackButton, FeatureBox } from '../common/common'
// import Image from 'gatsby-image'
// import HeroImage from '../../static/img/home-hero-image.png'

const InsuranceHero = (props) => {
  const { title, subtitle, imageSrc, blockItems } = props
  return (
    <HeroContainer>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h1 className="section-title mb-3">{title}</h1>
                <h4 className="section-subtitle">{subtitle}</h4>
                <div className="blocks mt-5">
                  <div className="cta">
                    <BlackButton onClick={props.setOpen}>
                        <img className="image" src="/img/icons/insurance_getstarted.svg" />
                        <div className="cta-text">Get Started</div>
                        <img className="image-arrow" src="/img/icons/left-arrow-white-small.svg" />
                      </BlackButton>
                  </div>
                  <div className="features">
                    <FeatureBox title="Save upto 85%" subtitle="Lowest Premiums" image="/img/icons/insurance_feature_1.svg" />
                    <FeatureBox title="30+ Insurers" subtitle="To choose from" image="/img/icons/insurance_feature_2.svg" />
                    <FeatureBox title="10 Lakh+" subtitle="Bundled Insurance" image="/img/icons/insurance_feature_3.svg" />
                  </div>
                </div>
              </div>
              <div className="column is-half has-text-right">
                <Image fluid={imageSrc?.childImageSharp?.fluid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroContainer>
  )
}

const HeroContainer = styled.section`
  margin-top: 3rem;
  .blocks {
    .cta {
      width: 16rem;
      .cta-text {
        font-size: 1rem;
        margin-right: 1rem;
      }
      .image {
        width: 3rem;
        margin-right: 1rem;
      }
      .image-arrow {
        width: 1.2rem;
      }
    }
    .features {
      margin-top: 3rem;
      display: flex;
    justify-content: space-between;
    align-items: center;

    }
  }
  @media screen and (max-width: 786px) {
    .blocks {
      .features {
        flex-wrap: wrap;
      }
    }
  }
`

export default InsuranceHero
