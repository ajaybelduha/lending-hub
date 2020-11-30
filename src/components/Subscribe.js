import React from 'react';
import styled from 'styled-components';

const Subscribe = () => {
    return (
        <SubscribeContainer>
            <div className="container">
                <div className="subscribe-container columns">
                    <div className="column">
                        <h2 className="title-small mb-3">Stay up to speed on your financial journey</h2>
                        <p className="title-1">Get rate alerts, relevant articles and breaking financial news sent right to your inbox.</p>
                    </div>
                    <div className="column">
                        <div className="is-flex-desktop">
                        <div className="field">
                            <div className="control">
                                <input className="input" type="text" placeholder="Email" />
                            </div>
                        </div>
                        <button className="button is-black">Subscribe</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </SubscribeContainer>
    )
}

const SubscribeContainer = styled.section`
    .subscribe-container {
        margin-top: 2rem;
        border: 1px solid #707070;
        border-radius: .5rem;
        padding: 1.5rem;
        input {
            border-radius: 0;
            border-color: #707070;
            font-size: 1.1rem;
            padding: 1rem;
            height: 66px;
            width: 346px;
        }
        button {
            height: 66px;
            border-radius: 0;
            margin-left: 1rem;
            padding: 0 2rem;
        }
    }
    @media screen and (max-width: 786px) {
        .subscribe-container {
            button {
                width: 100%;
                margin-left: 0
            }
        }
    }
`

export default Subscribe;