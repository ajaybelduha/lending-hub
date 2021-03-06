import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { useScrollRestoration } from 'gatsby'

const HowItWorks = ({ stepItems }) => {
    const [ image, setImage ] = useState(stepItems[0].image)
    return(
      <div className="container">
        <HowItWorksContainer>
            <div>
                {stepItems.map((item, index) => {
                    return(
                        <StepItem item={item} index={index} setImage={setImage} stepItems={stepItems}/>
                    )
                })}
            </div>
            <div>
                <div className="steps-image">
                    <img height="25em" src={image} alt="home hero image" />
                </div>
            </div>
        </HowItWorksContainer>
        </div>
    )
}

const StepItem = ({item, index, setImage, stepItems}) => {
    const [ fade, setFade ] = useState(true)
    useEffect(() => {
        if (index === 0) {
            setFade(false)
        }
    }, [])
    
    const setMouseIn = () => {
        setFade(false);
        setImage(stepItems[index].image)
    }
    const setMouseOut = () => {
        setFade(true)
        // document.getElementsByClassName('step-item')[0].classList.remove('fade')
    }
    return(
        <div onMouseOver={() => setMouseIn()} onMouseOut={() => setMouseOut()} 
            className={classNames('step-item', {'fade': fade}, `step-${index}`)}>
            <div className="index">{index+1}</div>
            <div className="item">
                <h3 className="head">{item.title}</h3>
                <p className="desc">{item.subtitle}</p>
            </div>
        </div>
    )
}

const HowItWorksContainer = styled.div`
    margin-top: 6rem;
    display: flex;
    .step-item {
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
            width: 20rem;
            height: 20rem;
        }
    }
    .fade {
        opacity: 0.3;
    }
    @media screen and (max-width: 786px) {
        margin-top: 3rem;
        .step-item {
            width: 100%;
            margin-bottom: 3rem;
            align-items: start;
        }
    }
`

export default HowItWorks;
