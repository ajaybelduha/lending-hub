
import React, { useState } from 'react'
import { BlackButton } from './common/common'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const GetStartedBlock = ({ data, ctaText, width }) => {
  const [isHovered, setIsHovered] = useState(false)
  const toggleHover = () => {
    setIsHovered(() => !isHovered)
  }
  return (
        <GetStartedBlockContainer width={width}>
            <AniLink paintDrip hex="#000000" to={data.link} state={{ id: data.key, title: data.title }}>
            <div className="block">
                <div>
                    <div className="flex">
                        <figure className="image">
                            <img src={data.image} />
                        </figure>
                        <h3 className="title-2">{data.title}</h3>
                    </div>
                    <p className="description">{data.description}</p>
                </div>
                <div className="cta-container">
                    <BlackButton onMouseEnter={toggleHover}
                        onMouseLeave={toggleHover} className="getstarted-cta">
                        <div>{ctaText}&nbsp;&nbsp;</div>
                        <div className="icon">
                            {/* <img src="/img/left-arrow.svg" /> */}
                            {isHovered
                              ? (
                                    <img width={'36px'} src="/img/icons/left-arrow-hover.svg" />
                                )
                              : (
                                    <img className="image-arrow" src="/img/icons/left-arrow-white-small.svg" />
                                )}
                        </div>
                    </BlackButton>
                </div>

            </div>
            </AniLink>
        </GetStartedBlockContainer>
  )
}

const GetStartedBlockContainer = styled.div`
  .block {
    padding: 1rem;
    justify-content: space-between;
    width: ${props => props.width ? props.width : '374px'};
    height: 280px;
    margin-right: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #dddddd;
    cursor: pointer;
    .flex {
        display: flex;
        align-items: center;
    }
    .cta-container {
        width: 180px;
        .getstarted-cta {
            padding: 1.2rem 0;
            height: 0
        }
    }
    .description {
        font-size: 0.8rem;
        padding: 1rem 0;
    }
    .image {
      margin-bottom: 10px;
      margin-right: 1rem;
      img {
        width: 26px;
        height: 26px;
      }
    }
    h3 {
      margin-bottom: 10px;
    }
    .icon {
      width: 36px;
    }
  }
  @media screen and (max-width: 786px) {
    .block {
      width: 100%;
      height: 240px;
      .image {
        margin-bottom: 5px;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`

export default GetStartedBlock
