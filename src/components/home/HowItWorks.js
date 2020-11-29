import React from 'react';
import styled from 'styled-components';

const HowItWorks = () => {
    return(
        <HowItWorksContainer>
            <div className="container has-text-centered">
                <h1 class="section-title">How it works</h1>
                <div className="columns">
                    <div className="column mx-4">
                        <img src="/img/icons/conversation.svg" />
                        <h3 className="title-3">Answer a few questions</h3>
                        <h4 className="section-subtitle">Tell us about the type of rates you're looking for & the home you want to buy.</h4>
                    </div>
                    <div className="column mx-4">
                        <img src="/img/icons/test-results.svg" />
                        <h3 className="title-3">Get customized results</h3>
                        <h4 className="section-subtitle">Compare current rate quotes from dozens of lenders, all in one place.</h4>
                    </div>
                    <div className="column mx-4">
                        <img src="/img/icons/transfer.svg" />
                        <h3 className="title-3">Contact when you're ready</h3>
                        <h4 className="section-subtitle">See a quote you like? Contact the lender to learn more and lock in your rate.</h4>
                    </div>
                </div>
            </div>
        </HowItWorksContainer>
    )
}

const HowItWorksContainer = styled.section`
    img {
        margin-bottom: 1rem;
    }
    h3 {
        margin-bottom: 1rem;
    }
    h4 {
        color: #636366;
    }
`

export default HowItWorks;