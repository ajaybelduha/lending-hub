import React, { useState } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Image from 'gatsby-image'
import { BlackButton } from '../common/common'
import GetStartedBlock from '../GetStartedBlock'
// import HeroImage from '../../static/img/home-hero-image.png'

const MortgageHero = (props) => {
  const { title, subtitle, imageSrc, blockItems, onSelect, subtitle2 } = props
  return (
        <HeroContainer>
            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-half">
                                <h1 className="section-title">{title}</h1>
                                <h4 className="section-subtitle mt-4">{subtitle}</h4>
                                {/* <h4 className="section-subtitle mt-6">{subtitle2}</h4> */}
                                <div className="blocks mt-6" onClick={onSelect}>
                                    {blockItems.map((item) => (
                                        // <AniLink paintDrip hex="#000000" to={item.link} state={{ id: item.key, title: item.title }}>
                                           <GetStartedBlock data={item} ctaText="Get Started" width='300px' />
                                        // </AniLink>
                                    ))}
                                </div>
                            </div>
                            <div className="column is-half banner-image has-text-right">
                                {imageSrc.childImageSharp ? <Image fluid={imageSrc?.childImageSharp?.fluid} /> : <img height="25em" src={imageSrc} alt="home hero image" />}
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
margin-bottom: 2rem;
  .blocks {
    display: flex;
    flex-wrap: wrap;
  }
  .banner-image {
    /* width: 80%;
    margin-left: auto; */
  }
  @media screen and (max-width: 786px) {
    .blocks {
      justify-content: flex-start;
    }
    .banner-image {
      width: 100%;
    }
  }
`

export default MortgageHero
