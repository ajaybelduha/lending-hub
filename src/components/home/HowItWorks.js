import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import classNames from 'classnames'
import { useScrollRestoration } from 'gatsby'

const HowItWorks = ({ stepItems, title, subtitle }) => {
  const [image, setImage] = useState(stepItems[0].image)
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
      <div className="container">
        <h1 className="section-title mb-3 mt-3">{title}</h1>
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
                            setImage={setImage}
                            stepItems={stepItems}
                            selectedIndex={selectedIndex}
                            setSelectedIndex={setSelectedIndex}
                        />
                  )
                })}
            </div>
                <div className="steps-image">
                    {/* <img src={image} alt="home hero image" /> */}
                    <Image fluid={image?.childImageSharp.fluid} />
                </div>
        </HowItWorksContainer>
        </div>
  )
}

const StepItem = ({ item, index, setImage, stepItems, selectedIndex, setSelectedIndex }) => {
  const setFadeOut = () => {
    setSelectedIndex(index)
    setImage(stepItems[index].image)
  }

  return (
        <div onClick={() => setFadeOut()}
            className={classNames('step-item', { fadeout: (selectedIndex === index) }, `step-${index}`)}>
            <div className="index">{index + 1}</div>
            <div className="item">
                <h3 className="head">{item.title}</h3>
                <p className="desc">{item.subtitle}</p>
            </div>
        </div>
  )
}

const HowItWorksContainer = styled.div`
    margin: 5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .steps-text {
        background-color: #EAEAEA;
        width: 50%;
        border-radius: 1rem;
    }
    .step-item {
        display: flex;
        padding: 1.2rem 4rem;
        align-items: center;
        transition: all .25s linear;
        cursor: pointer;
        .index {
            font-family: "Poppins Bold";
            font-size: 5rem;
            width: 8rem;
            line-height: 1.2;
        }
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
        max-height: 400px;
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
        margin-top: 2rem;
        }
        .step-item {
            width: 100%;
            align-items: center;
            padding: 1rem 1rem;
            min-height: 6rem;
            .item {
                .head {
                font-size: 1rem;
                margin-bottom: 0;
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
                font-size: 3rem;
            }
            
        }
        .steps-image {
            width: 100%;
            height: initial;
        }
    }
`

export default HowItWorks
