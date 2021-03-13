import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'


const data = graphql`
    query {
        markdownRemark(frontmatter: { templateKey: { eq: "mortgageWatch" } }) {
            frontmatter {
                templateKey
                title
                fixed_1_year
                fixed_2_year
                fixed_3_year
                fixed_4_year
                fixed_5_year
                open_1_year
                variabl
                benchmark
            }
        }
    }
`

const MortgageWatch = () => {
    const response = useStaticQuery(data);
    const items = response.markdownRemark.frontmatter;
    console.log(response)
    return (
        <div className="container mt-6">
            <MortgageWatchContainer>
                <h1 className="section-title has-text-centered">Mortgage Rate Watch</h1>
                <div className="watch-blocks">
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_1_year.substr(0, items.fixed_1_year.length - 1)}
                            <span className="dynamic-number-1"></span>%
                        </div>
                        <h2 className="watch-heading">FIXED 1-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_2_year.substr(0, items.fixed_2_year.length - 1)}
                            <span className="dynamic-number-2"></span>%
                        </div>
                        <h2 className="watch-heading">FIXED 2-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_3_year.substr(0, items.fixed_3_year.length - 1)}
                            <span className="dynamic-number-3"></span>%
                        </div>
                        <h2 className="watch-heading">FIXED 3-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_4_year.substr(0, items.fixed_4_year.length - 1)}
                            <span className="dynamic-number-4"></span>%
                        </div>
                        <h2 className="watch-heading">FIXED 4-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_4_year.substr(0, items.fixed_4_year.length - 1)}
                            <span className="dynamic-number-5"></span>%
                        </div>
                        <h2 className="watch-heading">FIXED 5-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.open_1_year.substr(0, items.open_1_year.length - 1)}
                            <span className="dynamic-number-6"></span>%
                        </div>
                        <h2 className="watch-heading">OPEN 1-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.variabl.substr(0, items.variabl.length - 1)}
                            <span className="dynamic-number-7"></span>%
                        </div>
                        <h2 className="watch-heading">VARIABLE</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.benchmark.substr(0, items.benchmark.length - 1)}
                            <span className="dynamic-number-2"></span>%
                        </div>
                        <h2 className="watch-heading">BENCHMARK</h2>
                    </div>
                </div>
            </MortgageWatchContainer>
        </div>
    )

}

const MortgageWatchContainer = styled.div`
    .watch-blocks {
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        .watch-heading {
            text-align: center;
        }
        .watch-number {
            font-size: 5rem;
            width: 200px;
            .dynamic-number-1::after {
                content: counter(count);
                animation: counter-1 19s linear infinite alternate;
                counter-reset: count 0;
            }
            .dynamic-number-2::after {
                content: counter(count);
                animation: counter-2 30s linear infinite alternate;
                counter-reset: count 0;
            }
            .dynamic-number-3::after {
                content: counter(count);
                animation: counter-3 28s linear infinite alternate;
                counter-reset: count 0;
            }
            .dynamic-number-4::after {
                content: counter(count);
                animation: counter-4 15s linear infinite alternate;
                counter-reset: count 0;
            }
            .dynamic-number-5::after {
                content: counter(count);
                animation: counter-5 45s linear infinite alternate;
                counter-reset: count 0;
            }
            .dynamic-number-6::after {
                content: counter(count);
                animation: counter-6 35s linear infinite alternate;
                counter-reset: count 0;
            }
            .dynamic-number-7::after {
                content: counter(count);
                animation: counter-7 25s linear infinite alternate;
                counter-reset: count 0;
            }
        }
        .watch-block {
            padding: 2rem 4rem;
        }
    }
    .separator {
        height: 10rem;
        width: 1px;
        position: relative;
        background-color: #ddd;
        top: 2rem;
    }
    @media screen and (max-width: 786px) {
        .separator {
            display: none;
        }
        .watch-blocks {
            margin-top: 0rem;
        .watch-heading {
            text-align: center;
        }
        .watch-number {
            font-size: 3rem;
            width: inherit;
        }
        .watch-block {
            padding: 1rem 0rem;
            justify-content: space-around;
            width: 121px;
            margin: auto;
            text-align: center;
        }
    }
    }

    @keyframes counter-1 {
        0% {
            counter-increment: count 4;
        }
        10% {
            counter-increment: count 7;
        }
        20% {
            counter-increment: count 3;
        }
        30% {
            counter-increment: count 9;
        }
        40% {
            counter-increment: count 5;
        }
        50% {
            counter-increment: count 1;
        }
        60% {
            counter-increment: count 6;
        }
        70% {
            counter-increment: count 2;
        }
        80% {
            counter-increment: count 8;
        }
        100% {
            counter-increment: count 9;
        }
    }

    @keyframes counter-2 {
        0% {
            counter-increment: count 3;
        }
        10% {
            counter-increment: count 2;
        }
        20% {
            counter-increment: count 7;
        }
        30% {
            counter-increment: count 9;
        }
        40% {
            counter-increment: count 1;
        }
        50% {
            counter-increment: count 5;
        }
        60% {
            counter-increment: count 8;
        }
        70% {
            counter-increment: count 4;
        }
        80% {
            counter-increment: count 0;
        }
        100% {
            counter-increment: count 1;
        }
    }

    @keyframes counter-3 {
        0% {
            counter-increment: count 2;
        }
        10% {
            counter-increment: count 9;
        }
        20% {
            counter-increment: count 1;
        }
        30% {
            counter-increment: count 8;
        }
        40% {
            counter-increment: count 3;
        }
        50% {
            counter-increment: count 6;
        }
        60% {
            counter-increment: count 4;
        }
        70% {
            counter-increment: count 5;
        }
        80% {
            counter-increment: count 6;
        }
        100% {
            counter-increment: count 0;
        }
    }

    @keyframes counter-4 {
        0% {
            counter-increment: count 2;
        }
        10% {
            counter-increment: count 6;
        }
        20% {
            counter-increment: count 4;
        }
        30% {
            counter-increment: count 9;
        }
        40% {
            counter-increment: count 1;
        }
        50% {
            counter-increment: count 8;
        }
        60% {
            counter-increment: count 6;
        }
        70% {
            counter-increment: count 2;
        }
        80% {
            counter-increment: count 1;
        }
        100% {
            counter-increment: count 0;
        }
    }

    @keyframes counter-5 {
        0% {
            counter-increment: count 2;
        }
        10% {
            counter-increment: count 1;
        }
        20% {
            counter-increment: count 8;
        }
        30% {
            counter-increment: count 4;
        }
        40% {
            counter-increment: count 2;
        }
        50% {
            counter-increment: count 5;
        }
        60% {
            counter-increment: count 9;
        }
        70% {
            counter-increment: count 1;
        }
        80% {
            counter-increment: count 0;
        }
        100% {
            counter-increment: count 4;
        }
    }

    @keyframes counter-6 {
        0% {
            counter-increment: count 2;
        }
        10% {
            counter-increment: count 8;
        }
        20% {
            counter-increment: count 3;
        }
        30% {
            counter-increment: count 7;
        }
        40% {
            counter-increment: count 1;
        }
        50% {
            counter-increment: count 0;
        }
        60% {
            counter-increment: count 5;
        }
        70% {
            counter-increment: count 1;
        }
        80% {
            counter-increment: count 8;
        }
        100% {
            counter-increment: count 5;
        }
    }

    @keyframes counter-7 {
        0% {
            counter-increment: count 3;
        }
        10% {
            counter-increment: count 7;
        }
        20% {
            counter-increment: count 0;
        }
        30% {
            counter-increment: count 6;
        }
        40% {
            counter-increment: count 1;
        }
        50% {
            counter-increment: count 8;
        }
        60% {
            counter-increment: count 3;
        }
        70% {
            counter-increment: count 8;
        }
        80% {
            counter-increment: count 1;
        }
        100% {
            counter-increment: count 0;
        }
    }
`

export default MortgageWatch;