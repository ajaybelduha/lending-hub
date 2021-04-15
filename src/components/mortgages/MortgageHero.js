import React, { useState } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Image from 'gatsby-image'
import { BlackButton } from '../common/common'
// import HeroImage from '../../static/img/home-hero-image.png'

const MortgageHero = (props) => {
  const { title, subtitle, imageSrc, blockItems, onSelect, subtitle2 } = props
  return (
        <HeroContainer>
            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-two-thirds">
                                <h1 className="section-title">{title}</h1>
                                <h4 className="section-subtitle mt-4">{subtitle}</h4>
                                <h4 className="section-subtitle mt-6">{subtitle2}</h4>
                                <div className="blocks mt-6" onClick={onSelect}>
                                    {blockItems.map((item) => (
                                        <AniLink paintDrip hex="#000000" to={item.link} state={{ id: item.key, title: item.title }}>
                                            <Block data={item} />
                                        </AniLink>
                                    ))}
                                </div>
                            </div>
                            <div className="column is-one-thirds banner-image has-text-right">
                                {imageSrc.childImageSharp ? <Image fluid={imageSrc?.childImageSharp?.fluid} /> : <img height="25em" src={imageSrc} alt="home hero image" />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HeroContainer>
  )
}

const Block = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false)
  const toggleHover = () => {
    setIsHovered(() => !isHovered)
  }
  return (
        <div className="block">
            <div>
            <div className="flex">
                <figure className="image">
                    <img src={data.image} />
                </figure>
                <h3 className="title-2">{data.title}</h3>
            </div>
            <p className="description">{data.description}</p>
            </div>
            <div className="cta-container">
                <BlackButton onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover} className="getstarted-cta">
                    <div>Get Started&nbsp;&nbsp;</div>
                    <div className="icon">
                        {/* <img src="/img/left-arrow.svg" /> */}
                        {isHovered
                          ? (
                                <img width={'36px'} src="/img/icons/left-arrow-hover.svg" />
                            )
                          : (
                                <img className="image-arrow" src="/img/icons/left-arrow-white-small.svg" />
                            )}
                    </div>
                </BlackButton>
            </div>

        </div>
  )
}

const HeroContainer = styled.section`
margin-top: 3rem;
margin-bottom: 5rem;
  .blocks {
    display: flex;
    flex-wrap: wrap;
  }
  .banner-image {
    /* width: 500px; */
    margin-left: auto;
  }
  .block {
    padding: 1rem;
    justify-content: space-between;
    width: 374px;
    height: 230px;
    margin-right: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #dddddd;
    cursor: pointer;
    .flex {
        display: flex;
        align-items: center;
    }
    .cta-container {
        width: 180px;
        .getstarted-cta {
            padding: 1.2rem 0;
            height: 0
        }
    }
    .description {
        font-size: 0.8rem;
        padding: 1rem 0;
    }
    .image {
      margin-bottom: 10px;
      margin-right: 1rem;
      img {
        width: 26px;
        height: 26px;
      }
    }
    h3 {
      margin-bottom: 10px;
    }
    .icon {
      width: 36px;
    }
  }
  @media screen and (max-width: 786px) {
    .blocks {
      justify-content: flex-start;
    }
    .banner-image {
      width: 100%;
    }
    .block {
      width: 100%;
      height: 240px;
      .image {
        margin-bottom: 5px;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`

export default MortgageHero
