import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    // superLargeDesktop: {
    //     // the naming can be any, depends on you.
    //     breakpoint: { max: 4000, min: 3000 },
    //     items: 6
    // },
    // desktop: {
    //     breakpoint: { max: 3000, min: 1024 },
    //     items: 6
    // },
    // tablet: {
    //     breakpoint: { max: 1024, min: 464 },
    //     items: 2
    // },
    mobile: {
        breakpoint: { max: 786, min: 0 },
        items: 1
    }
};

const OurPartners = ({data}) => {
    console.log("PARTNERS DATA")
    console.log(data)
    const images = Object.values(data)
    console.log(images)
    return (
        <div className="mt-6 container">
            <h1 className="section-title">{data.heading}</h1>
            {/* <img src="/img/partners.png" /> */}
            <OurPartnersContainer>
            <Carousel
                className="partners-carousel" 
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={1000}
                infinite={true}
                arrows={false}
                // customTransition="all 5"
                // transitionDuration={1000}
            >
                {images.map((item, index) => {
                    if (index > 0) {
                        return(
                            <div>
                                <Image fluid={item?.childImageSharp.fluid} />
                            </div>
                        )
                    }
                })}
            </Carousel>
            <div className="flex-images-desktop">
                {images.map((item, index) => {
                        if (index > 0) {
                            return(
                                <div className="item">
                                    <Image fluid={item?.childImageSharp.fluid} />
                                </div>
                            )
                        }
                })}
            </div>
            </OurPartnersContainer>
        </div>
    )
}

const OurPartnersContainer = styled.div`
    .partners-carousel {
        display: none;
    }
    .flex-images-desktop {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            .item {
                padding: 1rem;
                width: 180px;
            }
        }
    @media screen and (max-width: 786px) {
        .partners-carousel {
            display: block;
            .react-multi-carousel-item {
                padding: 0 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                > div {
                    width: 100vw;
                    margin-right: 1rem;
                    margin:auto;
                }
            }
        }
        .flex-images-desktop {
            display: none;
        }
    }
`

export default OurPartners;