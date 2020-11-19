import React from 'react';
import styled from 'styled-components'
// import Image from 'gatsby-image'
// import HeroImage from '../../static/img/home-hero-image.png'

const Hero = () => {
    return(
        <HeroContainer class="hero is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column is-half">
                            <h1 class="section-title">Guiding you through life's financial journey</h1>
                            <h4 class="section-subtitle">Compare rates, crunch numbers and get expert guidance for life's pivotal financial moments.</h4>
                            <div class="blocks mt-5">
                                <div class="block">
                                    <figure class="image">
                                        <img src="/img/mortgage.svg" />
                                    </figure>
                                    <h3 class="title-2">Mortgages</h3>
                                    <div class="icon">
                                        <img src="/img/left-arrow.svg" />
                                    </div>    
                                </div>
                                <div class="block">
                                    <figure class="image">
                                        <img src="/img/mortgage.svg" />
                                    </figure>
                                    <h3 class="title-2">Mortgages</h3>
                                    <div class="icon">
                                        <img src="/img/left-arrow.svg" />
                                    </div>    
                                </div>
                                <div class="block">
                                    <figure class="image">
                                        <img src="/img/mortgage.svg" />
                                    </figure>
                                    <h3 class="title-2">Mortgages</h3>
                                    <div class="icon">
                                        <img src="/img/left-arrow.svg" />
                                    </div>    
                                </div>
                                <div class="block">
                                    <figure class="image">
                                        <img src="/img/mortgage.svg" />
                                    </figure>
                                    <h3 class="title-2">Mortgages</h3>
                                    <div class="icon">
                                        <img src="/img/left-arrow.svg" />
                                    </div>    
                                </div>
                                <div class="block">
                                    <figure class="image">
                                        <img src="/img/mortgage.svg" />
                                    </figure>
                                    <h3 class="title-2">Mortgages</h3>
                                    <div class="icon">
                                        <img src="/img/left-arrow.svg" />
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <div class="column is-half has-text-right">
                            <img height="25em" src="/img/home-hero-image.png" alt="home hero image" />
                            {/* <Image fixed={HeroImage} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </HeroContainer>
    )
}

const HeroContainer = styled.section`
    .blocks {
        display: flex;
        flex-wrap: wrap;
    }
    .block {
        width: 174px;
        height: 174px;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 1px solid #DDDDDD;
        .image {
            margin-bottom: 10px;
        }
        img {
            width: 50px;
             height: 50px;
        }
        h3 {
            margin-bottom: 10px;
        }
        .icon {
            width: 19px;
        }
    }
    @media screen and (max-width: 786px) {
        .block {
            width: 150px;
            height: 150px;
        }
    }
`

export default Hero;