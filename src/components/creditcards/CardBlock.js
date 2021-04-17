import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { BlackButton } from '../../components/common/common'
import Accordion from '../../components/Accordion'
import Image from 'gatsby-image'
import { navigate } from 'gatsby-link'

const CardBlock = ({ cardData }) => {
  const {
    title,
    cardImage,
    fee,
    purchaseInterest,
    creditScore,
    balanceTranferFees,
    cashAdvanceInterest,
    href,
    summaryDescription,
    exter
  } = cardData.node.frontmatter
  const data = [
    {
      title: 'Read More',
      paragraph: summaryDescription,
    },
  ]

  const [applyNow, setApplyNow] = useState(false)
  const [isApplied, setIsApplied] = useState(false)

  const applyNowClick = () => {
    navigate(href)
  }

  return (
    <CardBlockContainer>
      <hr />
      <h2 className="title-2">{title}</h2>
      {/* <p>{JSON.stringify(cardData)}</p> */}
      <div className="card-details">
        <div className="image">
          {/* <img src="/img/true-line-gold-mastercardcard.png" /> */}
          {cardImage?.childImageSharp ? <Image fluid={cardImage?.childImageSharp.fluid} /> : <img src="/img/true-line-gold-mastercardcard.png" />}
        </div>
        <div className="details">
          <div className="features">
            <div className="item">
              <div className="key">Annual Fee</div>
              <div className="value bold">${fee}</div>
            </div>
            <div className="item">
              <div className="key">Interest Rate</div>
              <div className="value bold">{purchaseInterest}%</div>
            </div>
            <div className="item">
              <div className="key">Balance Transfer Rate</div>
              <div className="value bold">{balanceTranferFees}%</div>
            </div>
            <div className="item">
              <div className="key">Credit Score Type</div>
              <div className="value bold">{creditScore}</div>
            </div>
          </div>
        </div>
        <div className="action">
          {<BlackButton onClick={applyNowClick}>
              Apply Now
            </BlackButton>}
        </div>
      </div>
      {data[0].paragraph && <div className="more-details">
        <Accordion data={data} />
      </div>}
    </CardBlockContainer>
  )
}

const CardBlockContainer = styled.div`
  hr {
    background-color: #1c1c1e;
    height: 1px;
  }
  .card-details {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 2rem 0;
    .image {
      width: 15%;
    }
    .details {
      width: 70%;
      padding: 0px 3%;
      .features {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      .item {
        width: 150px;
        margin: 0 10px 10px 0;
        .value {
        }
      }
    }
    .action {
      width: 15%;
      .apply-successful {
        align-items: center;
        display: flex;
        svg {
          margin-right: 20px;
        }
        p {
          font-size: 12px;
        }
      }
    }
  }
  @media screen and (max-width: 786px) {
    .card-details {
      .image {
        width: 100%;
      }
      .details {
        width: 100%;
        .features {
          margin: 1rem 0;
        }
        .item {
          width: 140px;
          justify-content: space-between;
        }
      }
      .action {
        width: 100%;
        .apply-successful {
          width: 70%;
          margin: auto;
        }
      }
    }
  }
`

export default CardBlock
