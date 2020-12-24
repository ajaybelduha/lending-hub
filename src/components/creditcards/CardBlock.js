import React from 'react';
import styled from 'styled-components';
import { BlackButtonLink } from '../../components/common/common'
import Accordion from '../../components/Accordion'
import Image from 'gatsby-image';

const CardBlock = ({cardData}) => {
    const { title, 
        cardImage, 
        fee, 
        purchaseInterest, 
        creditScore,
        balanceTranferFees,
        cashAdvanceInterest, 
        href, 
        summaryDescription
    } = cardData.node.frontmatter;
    const data = [
        {
            title: 'Read More',
            paragraph: summaryDescription
        }
    ]
    return(
        <CardBlockContainer>
           <hr />
           <h2 className="title-24">{title}</h2>
           <p>This offer not available for resident of quebec</p>
           <div className="card-details">
                <div className="image">
                    {/* <img src="/img/true-line-gold-mastercardcard.png" /> */}
                    <Image fluid={cardImage.childImageSharp.fluid} />
                </div>
                <div className="details">
                    <div className="columns is-multiline">
                        <div className="column">
                            <div className="item">
                                <div className="key">Annual Fee</div>
    <div className="value bold">${fee}</div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="item">
                                <div className="key">Interest Rate</div>
    <div className="value bold">{purchaseInterest}%</div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="item">
                                <div className="key">Balance Transfer</div>
    <div className="value bold">{balanceTranferFees}%</div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="item">
                                <div className="key">Cash Advance</div>
    <div className="value bold">{cashAdvanceInterest}%</div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="item">
                                <div className="key">Credit Score Type</div>
    <div className="value bold">{creditScore}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="action">
                    <BlackButtonLink to={href}>Apply Now</BlackButtonLink>
                </div>
           </div>
            <div className="more-details">
                <Accordion data={data} />
            </div>
        </CardBlockContainer>
    )
}

const CardBlockContainer = styled.div`
    hr {
        background-color: #1C1C1E;
        height: 1px;
    }
    .card-details {
        display: flex;
        justify-content: space-between;
        margin: 2rem 0;
        .image {
            width: 23%;
        }
        .details {
            width: 60%;
            padding: 0px 3%;
            .item {
                width: 150px;
                .value {

                }
            }
        }
        .action {
            width: 17%;
        }
    }
`

export default CardBlock;