import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MaximizeSavings = () => {
    const calculators = [
        {
            key: 'mortgage-payment',
            label: 'Mortgage Payment Calculator',
            image: '/img/icons/mortgage.svg',
            imageHover: '/img/icons/mortgage_hover.svg',
            link: '/calculator'
        },
        {
            key: 'affordability',
            label: 'Affordability Calculator',
            image: '/img/icons/loan.svg',
            imageHover: '/img/icons/loan_hover.svg',
            link: '/calculator'
        },
        {
            key: 'land-transfer-tax',
            label: 'Land Transfer Tax Calculator',
            image: '/img/icons/real-estate.svg',
            imageHover: '/img/icons/real-estate_hover.svg',
            link: '/calculator'
        },
        {
            key: 'cmhc-insurance',
            label: 'CMHC Insurance Calculator',
            image: '/img/icons/calculator.svg',
            imageHover: '/img/icons/calculator_hover.svg',
            link: '/calculator'
        }
    ]
    return (
        <MaximizeSavingsContainer>
            <div className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-multiline">
                            <div className="column is-two-third">
                                <h1 className="section-title">Maximize Your Savings</h1>
                                <h4 className="section-subtitle">Wondering how long it’ll take to pay off a balance? Want to see how much you can save with a balance transfer card? Find out with our calculators.</h4>
                                <div className="columns is-multiline mt-5">
                                    {calculators.map(item => {
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
                                <img height="25em" src="/img/maximize-savings.png" alt="maximize savings image" />
                                {/* <Image fixed={HeroImage} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MaximizeSavingsContainer>
    )
}

const Block = ({ data }) => {
    const [isHovered, setIsHovered] = useState(false);
    const toggleHover = () => {
        setIsHovered(() => !isHovered);
    }
    return (
        <Link to={data.link} state={{ id: data.key }}>
            <div className="block" onMouseEnter={toggleHover}
                onMouseLeave={toggleHover}>
                <figure className="icon">
                    {isHovered ? <img src={data.imageHover} /> : <img src={data.image} />}
                </figure>
                <div className="title-3">
                    {data.label}
                    {isHovered ? <img width={'36px'} src="/img/icons/left-arrow-hover.svg" /> : <img src="/img/left-arrow.svg" />}
                </div>
            </div>
        </Link>
    )
}

const MaximizeSavingsContainer = styled.section`
    .block {
        /* margin-right: 10px; */
        height: 100px;
        cursor: pointer;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #DDDDDD;
        .title-3 {
            img {
                    position: relative;
                    top: 5px;
                    margin-left: 1rem;
                }
        }
        :hover {
            background-color: #1C1C1E;
            transition: all 0.5s ease;
            .title-3 {
                color: #FFFFFF;
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
        .block {
            /* width: 150px;
            height: 150px; */
        }
    }
`

export default MaximizeSavings;