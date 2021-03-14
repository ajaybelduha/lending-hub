import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { BlackButton } from '../../components/common/common'
import Accordion from '../../components/Accordion'
import Image from 'gatsby-image'

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
    setApplyNow(true)
    setTimeout(() => {
      setIsApplied(true)
    }, 2000)
  }

  return (
    <CardBlockContainer>
      <hr />
      <h2 className="title-24">{title}</h2>
      <p>This offer not available for resident of quebec</p>
      <div className="card-details">
        <div className="image">
          {/* <img src="/img/true-line-gold-mastercardcard.png" /> */}
          <Image fluid={cardImage?.childImageSharp.fluid} />
        </div>
        <div className="details">
          <div className="features">
            {/* <div className="column"> */}
            <div className="item">
              <div className="key">Annual Fee</div>
              <div className="value bold">${fee}</div>
            </div>
            {/* </div> */}
            {/* <div className="column"> */}
            <div className="item">
              <div className="key">Interest Rate</div>
              <div className="value bold">{purchaseInterest}%</div>
            </div>
            {/* </div> */}
            {/* <div className="column"> */}
            <div className="item">
              <div className="key">Balance Transfer</div>
              <div className="value bold">{balanceTranferFees}%</div>
            </div>
            {/* </div>
                        <div className="column"> */}
            <div className="item">
              <div className="key">Cash Advance</div>
              <div className="value bold">{cashAdvanceInterest}%</div>
            </div>
            {/* </div> */}
            {/* <div className="column"> */}
            <div className="item">
              <div className="key">Credit Score Type</div>
              <div className="value bold">{creditScore}</div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="action">
          {!isApplied && <BlackButton onClick={applyNowClick}>
              {!applyNow && <span>Apply now</span>}
              {applyNow && <img className="loading-icon" src='/img/icons/loading.svg' />}
            </BlackButton>}
            {isApplied && <div className="apply-successful">
              <div>
                <svg class="tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                  <circle class="tick__circle" cx="26" cy="26" r="25" fill="none"/>
                  <path class="tick__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
              </div>
              <p>Thank you for applying. We will get back to you soon!</p>
            </div>}
        </div>
      </div>
      <div className="more-details">
        <Accordion data={data} />
      </div>
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
      width: 23%;
    }
    .details {
      width: 60%;
      padding: 0px 3%;
      .features {
        display: flex;
        flex-wrap: wrap;
      }
      .item {
        width: 150px;
        margin: 0 10px 10px 0;
        .value {
        }
      }
    }
    .action {
      width: 17%;
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
