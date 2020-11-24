import React from 'react';
import styled from 'styled-components';
import { BlackButtonLink, UnderlinedLink } from '../common/common'

const Featured = () => {
    return(
        <FeaturedContainer>
            <div className="container">
                <h2 className="section-title">Featured Credit Cards for October 2020</h2>
                <div className="columns">
                    <div className="column">
                        <div className="card-block has-text-centered">
                            <img src="/img/true-line-gold-mastercardcard.png" />
                            <p className="has-text-left mt-4">Get 4 points†† per $1 on eligible gas, groceries and restaurants purchases and up to 10,000 bonus points.</p>
                            <BlackButtonLink>More Details</BlackButtonLink>
                            <p>Featured</p>
                        </div>
                    </div>
                    <div className="column">
                    <div className="card-block has-text-centered">
                            <img src="/img/true-line-gold-mastercardcard.png" />
                            <p className="has-text-left mt-4">Get 4 points†† per $1 on eligible gas, groceries and restaurants purchases and up to 10,000 bonus points.</p>
                            <BlackButtonLink>More Details</BlackButtonLink>
                            <p>Featured</p>
                        </div>
                    </div>
                    <div className="column">
                    <div className="card-block has-text-centered">
                            <img src="/img/true-line-gold-mastercardcard.png" />
                            <p className="has-text-left mt-4">Get 4 points†† per $1 on eligible gas, groceries and restaurants purchases and up to 10,000 bonus points.</p>
                            <BlackButtonLink>More Details</BlackButtonLink>
                            <p>Featured</p>
                        </div>
                    </div>
                </div>
                <div className="view-all has-text-centered">
                    <UnderlinedLink>View all</UnderlinedLink>
                </div>
            </div>
        </FeaturedContainer>
    )
}

const FeaturedContainer = styled.section`
    .card-block {
        border: 1px solid #000000;
        padding: 1rem;
        min-height: 470px;
    }
`

export default Featured;