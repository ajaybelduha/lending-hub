import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import classNames from 'classnames'
import { useScrollRestoration } from 'gatsby'

const HowItWorks = ({ stepItems, title, subtitle }) => {
  const [image, setImage] = useState(stepItems[0].image)
  return (
      <div className="container">
        <h1 className="section-title mb-3 mt-6">{title}</h1>
        <h4 className="section-subtitle">
                                    {subtitle}
                                </h4>
        <HowItWorksContainer>
            <div className="steps-text">
                {stepItems.map((item, index) => {
                  return (
                        <StepItem
                            key={index}
                            item={item}
                            index={index}
                            stepItems={stepItems}
                        />
                  )
                })}
            </div>
                <div className="steps-image">
                    <img src={'/img/insurance_howitworks.svg'} alt="home hero image" />
                    {/* <Image fluid={image?.childImageSharp.fluid} /> */}
                </div>
        </HowItWorksContainer>
        </div>
  )
}

const StepItem = ({ item, index, setImage, stepItems, selectedIndex, setSelectedIndex }) => {
  return (
        <div className={`step-item step-${index}`}>
            <div className="item">
                <h3 className="head">{item.title}</h3>
                <p className="desc">{item.subtitle}</p>
            </div>
        </div>
  )
}

const HowItWorksContainer = styled.div`
    margin: 3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .steps-text {
        background-color: #EAEAEA;
        width: 50%;
        border-radius: 1rem;
    }
    .step-item {
        padding: 2rem 2rem;
        transition: all .25s linear;
        .item {
            .head {
                font-family: "Poppins SemiBold";
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
        }
    }
    .steps-image {
        width: 550px;
        img {
            width: 550px;
        }
    }
    .fadeout {
        opacity: 1;
        background-color: #1c1c1e;
        color: #FFFFFF;
        border-radius: 1rem;
    }
    @media screen and (max-width: 786px) {
        margin-top: 3rem;
        margin-bottom: 0;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        .steps-text {
        width: 100%;
        margin-top: 5rem;
        }
        .step-item {
            width: 100%;
            align-items: center;
            padding: 1rem 1rem;
            min-height: 6rem;
            .item {
                .head {
                font-size: 1rem;
                }
                .desc {
                    font-size: 0.8rem;
                }
            
            }
            .index {
                margin-left: 1rem;
                line-height: 1rem;
                margin-right: 2rem;
                width: initial;
            }
            
        }
        .steps-image {
            width: 100%;
            height: 300px;
        }
    }
`

export default HowItWorks
