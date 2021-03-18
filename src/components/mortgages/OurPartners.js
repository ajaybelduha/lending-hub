import React from 'react'
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

const OurPartners = () => {
    return (
        <div className="mt-6 container">
            <h1 className="section-title">Our partners</h1>
            {/* <img src="/img/partners.png" /> */}
            <OurPartnersContainer>
            <Carousel
                className="partners-carousel" 
                responsive={responsive}
                autoPlay
                autoPlaySpeed={1000}
                infinite={true}
                arrows={false}
                // customTransition="all 5"
                // transitionDuration={1000}
            >
                <div><img src="/img/partners/partners-1.png" /></div>
                <div><img src="/img/partners/partners-2.png" /></div>
                <div><img src="/img/partners/partners-3.png" /></div>
                <div><img src="/img/partners/partners-4.png" /></div>
                <div><img src="/img/partners/partners-5.png" /></div>
                <div><img src="/img/partners/partners-6.png" /></div>
                <div><img src="/img/partners/partners-7.png" /></div>
                <div><img src="/img/partners/partners-8.png" /></div>
                <div><img src="/img/partners/partners-9.png" /></div>
                <div><img src="/img/partners/partners-10.png" /></div>
                <div><img src="/img/partners/partners-11.png" /></div>
                <div><img src="/img/partners/partners-12.png" /></div>
                <div><img src="/img/partners/partners-13.png" /></div>
                <div><img src="/img/partners/partners-14.png" /></div>
                <div><img src="/img/partners/partners-15.png" /></div>
                <div><img src="/img/partners/partners-16.png" /></div>
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
            div {
                margin-right: 1rem;
            }
        }
    }
`

export default OurPartners;