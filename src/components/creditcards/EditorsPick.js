import React from 'react';
import styled from 'styled-components';

const EditorsPick = () => {
    return(
        <EditorsPickContainer>
            <div className="container">
                <h1 className="section-title">Editor's pick</h1>
                <div className="ep-block">
                    <div className="image">
                        {/* <img src="/img/sample-image.jpg" /> */}
                    </div>
                    <div className="text">
                        <h4 className="title-1 grey-text mb-2">Banking</h4>
                        <h4 className="title-2 mb-2">Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum</h4>
                        <h4 className="meta mb-2">7 Min Read | OCT 8th 2020</h4>
                        <p className="title-1 grey-text">Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been 
                            the industry's standard dummy text ever since 
                            the 1500.
                        </p>
                        <h4 className="title-2">Continue reading</h4>
                    </div>
                </div>
                <div className="ep-other-blocks mt-4">
                    <div className="columns">
                        <div className="column">
                            <div className="block">
                                <img src="/img/coffee-gear.png" />
                                <h4 className="title-2 my-3">Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum</h4>
                                <h4 className="meta">7 Min Read | OCT 8th 2020</h4>
                            </div>
                        </div>
                        <div className="column">
                            <div className="block">
                                <img src="/img/coffee-gear.png" />
                                <h4 className="title-2 my-3">Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum</h4>
                                <h4 className="meta">7 Min Read | OCT 8th 2020</h4>
                            </div>
                        </div>
                        <div className="column">
                            <div className="block">
                                <img src="/img/coffee-gear.png" />
                                <h4 className="title-2 my-3">Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum</h4>
                                <h4 className="meta">7 Min Read | OCT 8th 2020</h4>
                            </div>
                        </div>
                        <div className="column">
                            <div className="block">
                                <img src="/img/coffee-gear.png" />
                                <h4 className="title-2 my-3">Lorem Ipsum is simply dummy of the printing and typesetting industry. Lorem Ipsum</h4>
                                <h4 className="meta">7 Min Read | OCT 8th 2020</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </EditorsPickContainer>
    )
}

const EditorsPickContainer = styled.section`
    .ep-block {
        display: flex;
        border: 1px solid;
        height: 376px;
    }
    .ep-other-blocks {
        .block {
            box-shadow: 0px 3px 6px #00000029;
            padding: 1rem;
        }
    }
    .image {
        background-image: url('/img/coffee-gear.png');
        width: 65%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
    }
    .text {
        width: 35%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        .heading {
            font-size: 1rem;
            text-transform: none;
        }
        .meta {
            font-size: 0.8rem;
        }
    }
    @media screen and (max-width: 786px) {
        .ep-block {
            display: none;
        }
    }
`

export default EditorsPick;