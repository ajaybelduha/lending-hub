import React from 'react';
import styled from 'styled-components';

const MaximizeSavings = () => {
    return(
        <MaximizeSavingsContainer>
            <div className="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column is-two-third">
                            <h1 class="section-title">Maximize Your Savings</h1>
                            <h4 class="section-subtitle">Wondering how long it’ll take to pay off a balance? Want to see how much you can save with a balance transfer card? Find out with our calculators.</h4>
                            <div class="columns mt-5">
                                <div class="column is-half">
                                    <div className="block">
                                        <figure class="icon">
                                            <img src="/img/mortgage.svg" />
                                        </figure>
                                        <div className="title-3">
                                            Mortgage Payment Calculator 
                                            <img class="arrow" src="/img/left-arrow.svg" />
                                        </div>
                                    </div>
                                </div>
                                <div class="column is-half">
                                <div className="block">
                                        <figure class="icon">
                                            <img src="/img/mortgage.svg" />
                                        </figure>
                                        <div className="title-3">
                                            Affordability Calculator 
                                            <img class="arrow" src="/img/left-arrow.svg" />
                                        </div>
                                    </div>
                                </div>
                                <div class="column is-half">
                                <div className="block">
                                        <figure class="icon">
                                            <img src="/img/mortgage.svg" />
                                        </figure>
                                        <div className="title-3">
                                            Land Transfer Tax Calculator 
                                            <img class="arrow" src="/img/left-arrow.svg" />
                                        </div>
                                    </div>
                                </div>
                                <div class="column is-half">
                                <div className="block">
                                        <figure class="icon">
                                            <img src="/img/mortgage.svg" />
                                        </figure>
                                        <div className="title-3">
                                            CMHC Insurance Calculator 
                                            <img class="arrow" src="/img/left-arrow.svg" />
                                        </div>
                                    </div>
                                </div>
                                <div class="column is-half">
                                <div className="block">
                                        <figure class="icon">
                                            <img src="/img/mortgage.svg" />
                                        </figure>
                                        <div className="title-3">
                                           Home Value Calculator 
                                            <img class="arrow" src="/img/left-arrow.svg" />
                                        </div>
                                    </div>
                                </div>
                                <div class="column is-half">
                                <div className="block">
                                        <figure class="icon">
                                            <img src="/img/mortgage.svg" />
                                        </figure>
                                        <div className="title-3">
                                           See all calculators
                                            <img class="arrow" src="/img/left-arrow.svg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-one-third has-text-right">
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

const MaximizeSavingsContainer = styled.section`
    .columns {
        flex-wrap: wrap;
    }
    .block {
        /* margin-right: 10px; */
        height: 100px;
        cursor: pointer;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #DDDDDD;
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
            width: 60%;
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