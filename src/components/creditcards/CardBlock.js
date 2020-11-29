import React from 'react';
import styled from 'styled-components';
import { BlackButtonLink } from '../../components/common/common'
import Accordion from '../../components/Accordion'

const paragraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta, suscipit facere nisi sed earum repellendus fuga debitis, nam molestiae minima voluptates possimus.'

const data = [
    {
        title: 'Read More',
        paragraph
    }
]

const CardBlock = () => {
    return(
        <CardBlockContainer>
           <hr />
           <h2 className="title-24">MBNA True Line® Mastercard®</h2>
           <p>This offer not available for resident of quebec</p>
           <div className="card-details">
                <div className="image">
                    <img src="/img/true-line-gold-mastercardcard.png" />
                </div>
                <div className="details">
                    <div className="columns is-multiline">
                        <div className="column">
                            <div className="item">
                                <div className="key">Annual Fee</div>
                                <div className="value bold">$0</div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="item">
                                <div className="key">Rewards rate</div>
                                <div className="value bold">N/A</div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="item">
                                <div className="key">Welcome bonus</div>
                                <div className="value bold">+$100</div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="item">
                                <div className="key">Cash Advance</div>
                                <div className="value bold">22.99%</div>
                            </div>
                        </div>
                        <div className="column">
                        <div className="item">
                                <div className="key">Interest rate</div>
                                <div className="value bold">12.9%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="action">
                    <BlackButtonLink>Apply Now</BlackButtonLink>
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