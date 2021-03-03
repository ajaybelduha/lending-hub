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
                        <div className="watch-number">{items.fixed_1_year}%</div>
                        <h2 className="watch-heading">FIXED 1-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_2_year}%</div>
                        <h2 className="watch-heading">FIXED 2-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_3_year}%</div>
                        <h2 className="watch-heading">FIXED 3-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_4_year}%</div>
                        <h2 className="watch-heading">FIXED 4-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_5_year}%</div>
                        <h2 className="watch-heading">FIXED 5-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.open_1_year}%</div>
                        <h2 className="watch-heading">OPEN 1-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.variabl}%</div>
                        <h2 className="watch-heading">VARIABLE</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.benchmark}%</div>
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
`

export default MortgageWatch;