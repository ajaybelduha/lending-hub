import React from 'react'
import styled from 'styled-components'
import { BlackButtonLink } from '../../components/common/common'
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
  return (
    <CardBlockContainer>
      <hr />
      <h2 className="title-24">{title}</h2>
      <p>This offer not available for resident of quebec</p>
      <div className="card-details">
        <div className="image">
          {/* <img src="/img/true-line-gold-mastercardcard.png" /> */}
          <Image fluid={cardImage.childImageSharp.fluid} />
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
          <BlackButtonLink to={href}>Apply Now</BlackButtonLink>
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
          width: 150px;
        }
      }
      .action {
        width: 100%;
      }
    }
  }
`

export default CardBlock
