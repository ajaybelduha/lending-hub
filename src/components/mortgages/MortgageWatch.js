import React, { useState, useEffect } from 'react'
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

function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.querySelector(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// animateValue("value", 100, 25, 5000);

const MortgageWatch = () => {
    const response = useStaticQuery(data);
    const items = response.markdownRemark.frontmatter;
    console.log(response)

    const [theposition, setPosition] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    // useEffect(() => {
    //     if (theposition > 0.22) {
    //         animateValue(".watch-number", 0, 25, 5000);
    //     }
    // }, [theposition])

    const listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height
      
        setPosition(scrolled)
      }

      //console.log(theposition)

    return (
        <div className="container mt-6">
            <MortgageWatchContainer>
                <h1 className="section-title has-text-centered">Mortgage Rate Watch</h1>
                <div className="watch-blocks">
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_1_year}
                            <span className="dynamic-number-1"></span>%
                        </div>
                        <h2 className="watch-heading">FIXED 1-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_2_year}
                            <span className="dynamic-number-2"></span>%
                        </div>
                        <h2 className="watch-heading">FIXED 2-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_3_year}
                            <span className="dynamic-number-3"></span>%
                        </div>
                        <h2 className="watch-heading">FIXED 3-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_4_year}
                            <span className="dynamic-number-4"></span>%
                        </div>
                        <h2 className="watch-heading">FIXED 4-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.fixed_4_year}
                            <span className="dynamic-number-5"></span>%
                        </div>
                        <h2 className="watch-heading">FIXED 5-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.open_1_year}
                            <span className="dynamic-number-6"></span>%
                        </div>
                        <h2 className="watch-heading">OPEN 1-YEAR</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.variabl}
                            <span className="dynamic-number-7"></span>%
                        </div>
                        <h2 className="watch-heading">VARIABLE</h2>
                    </div>
                    <div className="separator"></div>
                    <div className="watch-block">
                        <div className="watch-number">{items.benchmark}
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
    margin: 5rem 0;
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
    @media screen and (max-width: 786px) {
        margin: 3rem 0;
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
            width: 100%;
        }
        .watch-block {
            padding: 1rem 0rem;
            justify-content: space-around;
            width: 50%;
            margin: auto;
            text-align: center;
        }
    }
    }
`

export default MortgageWatch;