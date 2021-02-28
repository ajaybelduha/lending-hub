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
    return(
        <div className="container mt-6">
            <MortgageWatchContainer>
                <h1 className="section-title">Mortgage Rate Watch</h1>
                <div className="watch-blocks">
                    <div className="watch-block">
                    <div className="watch-number">{items.fixed_1_year}%</div>
                        <h2 className="watch-heading">FIXED 1-YEAR</h2>
                    </div>
                    <div className="watch-block">
                    <div className="watch-number">{items.fixed_1_year}%</div>
                    <h2 className="watch-heading">FIXED 1-YEAR</h2>
                    </div>
                    <div className="watch-block">
                    <div className="watch-number">{items.fixed_1_year}%</div>
                    <h2 className="watch-heading">FIXED 1-YEAR</h2>
                    </div>
                    <div className="watch-block">
                    <div className="watch-number">{items.fixed_1_year}%</div>
                    <h2 className="watch-heading">FIXED 1-YEAR</h2>
                    </div>
                    <div className="watch-block">
                    <div className="watch-number">{items.fixed_1_year}%</div>
                    <h2 className="watch-heading">FIXED 1-YEAR</h2>
                    </div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_1_year}%</div>
                        <h2 className="watch-heading">FIXED 1-YEAR</h2>
                    </div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_1_year}%</div>
                        <h2 className="watch-heading">FIXED 1-YEAR</h2>
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
        .watch-number {
            font-size: 5rem;
        }
        .watch-block {
            padding: 2rem 4rem;
            border-right: 1px solid #999;
        }
    }
`

export default MortgageWatch;