import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { useScrollRestoration } from 'gatsby'

const InsuranceSteps = ({ stepItems }) => {
    const [ image, setImage ] = useState(stepItems[0].image)
    const [ selectedIndex, setSelectedIndex ] = useState(0)
    return(
      <div className="container">
        <HowItWorksContainer>
            <div>
                {stepItems.map((item, index) => {
                    return(
                        <StepItem 
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
            <div>
                <div className="steps-image">
                    <img src={image} alt="home hero image" />
                </div>
            </div>
        </HowItWorksContainer>
        </div>
    )
}

const StepItem = ({item, index, setImage, stepItems, selectedIndex, setSelectedIndex}) => {
    
    const setFadeOut = () => {
        setSelectedIndex(index)
        setImage(stepItems[index].image)
    }

    return(
        <div onClick={() => setFadeOut()} 
            className={classNames('step-item', {'fadeout': (selectedIndex === index)}, `step-${index}`)}>
            <div className="index">{index+1}</div>
            <div className="item">
                <h3 className="head">{item.title}</h3>
                <p className="desc">{item.subtitle}</p>
            </div>
        </div>
    )
}

const HowItWorksContainer = styled.div`
    display: flex;
    .step-item {
        opacity: 0.3;
        display: flex;
        align-items: flex-end;
        width: 70%;
        margin-top: 3rem;
        transition: all .25s linear;
        cursor: pointer;
        .index {
            font-family: "Poppins Bold";
            font-size: 4rem;
            margin-right: 1.5rem;
            width: 7rem;
        }
        .item {
            .head {
                font-family: "Poppins Bold";
                font-size: 1.5rem;
                margin-bottom: 1rem;
            }
        }
    }
    .steps-image {
        img {
            width: 550px;
        }
    }
    .fadeout {
        opacity: 1;
    }
    @media screen and (max-width: 786px) {
        margin-top: 3rem;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        .step-item {
            width: 100%;
            margin-bottom: 3rem;
            align-items: start;
        }
    }
`

export default InsuranceSteps;
