import React, {useEffect} from 'react';
import styled from 'styled-components';
import { UnderlinedLink } from '../../components/common/common';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const FeaturedBlogs = () => {
    const arrowStyles = {
        position: 'absolute',
        zIndex: 2,
        top: 'calc(50% - 15px)',
        cursor: 'pointer',
    };
    return(
        <FeaturedBlogsContainer>
            <div className="container">
                <div className="header-with-link">
                    <h1 className="section-title">Trusted news and reviews, published daily</h1>
                    <UnderlinedLink>See all news</UnderlinedLink>
                </div>
                <div className="columns">
                    <div className="column is-two-third">
                    <Carousel 
                        showThumbs={false}
                        emulateTouch
                        height="443px"
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
                                    <img className="arrow-icon" src="/img/icons/right-arrow-white.svg" />
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
                                    <img className="arrow-icon" src="/img/icons/left-arrow-white.svg" />
                                </button>
                            )
                        }
                    >
                        <div className="carousel-main-image">
                            <img src="/img/coffee-gear.png" />
                            <div className="text-over-image">
                                <h4 className="type mb-2">Banking</h4>
                                <h4 className="heading mb-2">Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum</h4>
                                <h4 className="meta">7 Min Read | OCT 8th 2020</h4>
                            </div>
                        </div>
                        <div className="carousel-main-image">
                            <img src="/img/coffee-gear.png" />
                            <div className="text-over-image">
                                <h4 className="type mb-2 title-1">Banking</h4>
                                <h4 className="heading mb-2">Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum</h4>
                                <h4 className="meta">7 Min Read | OCT 8th 2020</h4>
                            </div>
                        </div>
                        <div className="carousel-main-image">
                            <img src="/img/coffee-gear.png" />
                            <div className="text-over-image">
                                <h4 className="type mb-2 title-1">Banking</h4>
                                <h4 className="heading mb-2">Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum</h4>
                                <h4 className="meta">7 Min Read | OCT 8th 2020</h4>
                            </div>
                        </div>
                    </Carousel>
                    </div>
                    <div className="column is-one-third">
                        <div className="blogs-list">
                            <div className="blog">
                                <div className="">
                                    <h4 className="type mb-2">Banking</h4>
                                    <h4 className="title-3 mb-2">Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum</h4>
                                    <h4 className="meta">7 Min Read | OCT 8th 2020</h4>
                                </div>
                                <div>
                                    <img className="arrow-icon" src="/img/icons/down-arrow.svg" />
                                </div>
                            </div>
                            <div className="blog">
                                <div className="">
                                    <h4 className="type mb-2">Banking</h4>
                                    <h4 className="title-3 mb-2">Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum</h4>
                                    <h4 className="meta">7 Min Read | OCT 8th 2020</h4>
                                </div>
                                <div>
                                    <img className="arrow-icon" src="/img/icons/down-arrow.svg" />
                                </div>
                            </div>
                            <div className="blog">
                                <div className="">
                                    <h4 className="type mb-2">Banking</h4>
                                    <h4 className="title-3 mb-2">Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum</h4>
                                    <h4 className="meta">7 Min Read | OCT 8th 2020</h4>
                                </div>
                                <div>
                                    <img className="arrow-icon" src="/img/icons/down-arrow.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FeaturedBlogsContainer>
    )
}

const FeaturedBlogsContainer = styled.section`
    .blogs-list {
        .blog {
            display:flex;
            align-items: center;
            .type {
                opacity: 0.39;
            }
            .arrow-icon {
                width: 36px;
                max-width: inherit;
            }
        }
    }
    .carousel {
        .arrow-icon {
            width: 36px;
            max-width: inherit;
        }
        button {
                background: none;
                border: 0;
            }
        .carousel-main-image {
            /* img {
                height: 443px;
            } */
            .text-over-image {
                position: absolute;
                bottom: 0;
                color: white;
                text-align: left;
                padding: 2rem;
                background: transparent linear-gradient(180deg, #FFFFFF00 0%, #000000CC 100%) 0% 0% no-repeat padding-box;
                .type {
                    font-size: 1.1rem;
                }
                .heading {
                    font-size: 1.8rem;
                    text-transform: none;
                }
            }
        }
    }
    @media screen and (max-width: 786px) {
        .carousel {
            .carousel-main-image {
            .text-over-image {
                padding: 1rem;
                .type, .meta {
                    font-size: 0.8rem;
                }
                .heading {
                    font-size: 1.2rem;
                    letter-spacing: 0;
                }
            }
        }
        }
    }
`

export default FeaturedBlogs;