import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components'
import Layout from '../../components/Layout';
import { BlackButtonLink, ButtonNoStyle }  from '../../components/common/common'

const FirstTimeHomeBuyer = () => {
    return(
        <Layout>
        <div className="container">
            <FTHBContainer>
                <div className="image-right">
                    <div className="text">
                        <h1 className="section-title mb-4">First Time Home Buyer</h1>
                        <p className="para">Buying a home can be challenging for 
                        a first-timer. After all, there are so many steps, tasks, 
                        and requirements, and you may be anxious about making an 
                        expensive mistake. But first-time homebuyers actually enjoy 
                        some special incentives created to encourage new entrants into 
                        the real estate market. To demystify the process so you get the 
                        most out of your purchase, here is a rundown of what you need 
                        to consider before you buy and what you can expect from the 
                        buying process itself, plus tips to make life easier after you buy your first home.</p>
                    </div>
                    <div className="image">
                        <img src="/img/home-buyer-1.png" alt="home buyer" />
                    </div>
                </div>
                <div className="image-left mt-6">
                    <div className="image">
                        {/* <img src="/img/home-buyer-1.png" alt="home buyer" /> */}
                        <iframe id="iframe-video" width="560" height="315" src="https://www.youtube.com/embed/mLVdmunQfvo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="text">
                        <h1 className="section-title mb-4">The First-Time Home Buyer Incentive</h1>
                        <p className="para mb-4">A new program helps to make homeownership more affordable.</p>
                        <p className="para">The First-Time Home Buyer Incentive helps qualified first-time homebuyers reduce their monthly mortgage payments without adding to their financial burdens.</p>
                    </div>
                </div>
                <div className="section-3 mt-6">
                    <h2 className="title-section-3">The First-Time Home Buyer Incentive is a shared-equity mortgage with the Government of Canada. It offers:</h2>
                    <ul>
                        <li><p>5% or 10% for a first-time buyer’s purchase of a newly constructed home</p></li>
                        <li><p>5% for a first-time buyer’s purchase of a resale (existing) home</p></li>
                        <li><p>5% for a first-time buyer’s purchase of a new or resale mobile/manufactured home</p></li>
                    </ul>
                    <p>The Incentive’s shared-equity mortgage is one where the government has a shared investment in the home. As a result, the government shares in both the upside and downside of the property value.
                        &nbsp;<Link style={{color: 'red'}} to="https://www.placetocallhome.ca/fthbi/mortgage-professional-toolkit">Read More</Link>
                    </p>
                </div>
                <div className="section-4 mt-6">
                    <h2 className="section-title mb-4">Eligibility criteria for First Time Home Buyer</h2>
                    <p>These are a few criteria to determine your eligibility for the First-Time Home Buyer Incentive:</p>
                    <div className="flex-container">
                        <div className="content">
                            <ul className="">
                                <li><p>Your total annual qualifying income doesn’t exceed $120,000</p></li>
                                <li><p>Your total borrowing is no more than 4 times your qualifying income</p></li>
                                <li><p>You or your partner are a first-time homebuyer</p></li>
                                <li><p>You are a Canadian citizen, permanent resident or non-permanent resident authorized to work in Canada</p></li>
                                <li><p>You meet the minimum down payment requirements with traditional funds (savings, withdrawal/collapse of a Registered Retirement Savings Plan (RRSP), or a non-repayable financial gift from a relative/immediate family member)</p></li>
                            </ul>
                            <div className="button-container">
                                <BlackButtonLink to="https://www.placetocallhome.ca/fthbi/first-time-homebuyer-incentive ">Get Started</BlackButtonLink>
                            </div>
                        </div>
                        <div className="image">
                            <img src="/img/first-time-home-buyer.jpg" alt="first time home buyer" />
                        </div>
                    </div>
                </div>
            </FTHBContainer>
        </div>
        </Layout>
    )
}

const FTHBContainer = styled.div`
    margin-top: 4rem;
    .image-right {
        display: flex;
        .text {
            width: 60%;
            padding: 0 10% 0 0;
            .para {
                line-height: 1.8
            }
        }
        .image {
            width: 40%;
        }
    }
    .image-left {
        display: fle1x;
        .text {
            width: 50%;
            .para {
                line-height: 1.8
            }
        }
        .image {
            width: 50%;
            margin-right: 8%;
        }
    }
    .section-3 {
        .title-section-3 {
            font-size: 1.5rem;
            margin-bottom: 2rem;
        }
        ul {
            list-style: initial;
            margin-left: 1em;
            li {
                margin-bottom: 1rem;
                font-size: 1.2rem;
            }
        }
    }
    .section-4 {
        .flex-container {
            margin-top: 4rem;
            display: flex;
            align-items: flex-start;
            .content {
                width: 45%;
                margin-right: 5%;
            }
            .image {
                width: 50%;
            }
        }
        ul {
            list-style: initial;
            margin-left: 1em;
            li {
                margin-bottom: 1rem;
                font-size: 1.1rem;
                font-family: 'Poppins SemiBold'
            }
        }
        .button-container {
            margin-top: 3rem;
            width: 10rem;
        }
    }
    @media screen and (max-width: 786px) {
        .image-right {
            flex-wrap: wrap;
            flex-direction: column-reverse;
            .text {
                width: 100%;
            }
            .image {
                margin-bottom: 2rem;
                width: 100%;
            }
        }
        .image-left {
            flex-wrap: wrap;
            #iframe-video {
                width: 100%;
            }
            .text {
                width: 100%;
            }
            .image {
                width: 100%;
            }
        }
        .section-4 {
            .flex-container {
            flex-wrap: wrap;
            flex-direction: column-reverse;
            .content {
                width: 100%;
                margin-right: initial;
            }
            .image {
                width: 100%;
            }
        }
        }
    }
`

export default FirstTimeHomeBuyer;