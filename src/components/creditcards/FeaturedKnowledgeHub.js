    import React from 'react';
    import styled from 'styled-components';

    const FeaturedKnowledgeHub = () => {
        return(
            <FeaturedKnowledgeHubContainer>
                <div className="container">
                    <h2 className="section-title">Knowledge hub</h2>
                    <div className="columns is-multiline">
                        <div className="column">
                            <div className="kh-block">
                                <h3 className="bold is-size-4">Credit Card Basics</h3>
                                <p>Credit cards are widely used and accepted as a method of payment for goods and services in Canada...</p>
                                <p className="bold">Continue reading</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="kh-block">
                                <h3 className="bold is-size-4">Credit Card Basics</h3>
                                <p>Credit cards are widely used and accepted as a method of payment for goods and services in Canada...</p>
                                <p className="bold">Continue reading</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="kh-block">
                                <h3 className="bold is-size-4">Credit Card Basics</h3>
                                <p>Credit cards are widely used and accepted as a method of payment for goods and services in Canada...</p>
                                <p className="bold">Continue reading</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="kh-block">
                                <h3 className="bold is-size-4">Credit Card Basics</h3>
                                <p>Credit cards are widely used and accepted as a method of payment for goods and services in Canada...</p>
                                <p className="bold">Continue reading</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="kh-block">
                                <h3 className="bold is-size-4">Credit Card Basics</h3>
                                <p>Credit cards are widely used and accepted as a method of payment for goods and services in Canada...</p>
                                <p className="bold">Continue reading</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="kh-block">
                                <h3 className="bold is-size-4">Credit Card Basics</h3>
                                <p>Credit cards are widely used and accepted as a method of payment for goods and services in Canada...</p>
                                <p className="bold">Continue reading</p>
                            </div>
                        </div>
                    </div>
                </div>
            </FeaturedKnowledgeHubContainer>
        )
    }

    const FeaturedKnowledgeHubContainer = styled.section`
        .kh-block {
            padding: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 194px;
            min-width: 360px;
            border-left: 4px solid #151515;
            box-shadow: 0px 4px 12px #00000029;
        }
    `

    export default FeaturedKnowledgeHub;