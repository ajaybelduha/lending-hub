import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
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
                                <Image fixed={item?.childImageSharp.fixed} />
                            </div>
                        )
                    }
                })}
            </Carousel>
            </OurPartnersContainer>
        </div>
    )
}

const OurPartnersContainer = styled.div`
    .partners-carousel {
        .react-multi-carousel-item {
            padding: 2rem;
            display: flex;
            align-items: center;
            > div {
                margin-right: 1rem;
                margin:auto;
            }
        }
    }
`

export default OurPartners;