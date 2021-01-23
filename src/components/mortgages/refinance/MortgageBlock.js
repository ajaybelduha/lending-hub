import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BlackButton } from '../../../components/common/common'
import { can_mortgage_payment } from '../../../components/common/utils'
import Image from 'gatsby-image'

const MortgageBlock = ({
  currentRate,
  mortgageType,
  mortgages,
  filterData,
}) => {
  const item = mortgages.node.frontmatter
  const [showBlock, setShowBlock] = useState(true)
  const [applyNow, setApplyNow] = useState(false)
  const [isApplied, setIsApplied] = useState(false)

  const getRate = () => {
    const { totalMortgage, rateType, mortgageTerm, downPaymentPercent } = filterData
    const item = mortgages.node.frontmatter
    let rate
    const downPayment = Number(downPaymentPercent);
    console.log(downPayment)
    rate = item[`rates`][`_${mortgageTerm}`]
    return rate
  }

  const applyNowClick = () => {
    setApplyNow(true)
    setTimeout(() => {
      setIsApplied(true)
    }, 2000)
  }

  const getMonthlyAmount = () => {
    const { totalMortgage, rateType, mortgageTerm } = filterData
    const rate = getRate() / 100
    const monthly = can_mortgage_payment(totalMortgage, rate, 25, 12, 1)
    return monthly
  }

  useEffect(() => {
    const existingRate = Number(currentRate)
    const chosenRate = getRate()
    if (mortgageType === 'Renewal' && chosenRate > existingRate) {
      setShowBlock(false)
    }
  }, [filterData])

  return (
    <MortgageBlockContainer displayBlock={showBlock}>
      <div className="mortgage-details">
        <div className="provider">
          <div className="icon-text">
            <Image fixed={item.logo.childImageSharp.fixed} />
            <h3 className="name title-24-nb">{item.title}</h3>
          </div>
        </div>
        <div className="rate">{getRate()}%</div>

        <div className="monthly-payment">${getMonthlyAmount()}/mo</div>
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
      <hr />
    </MortgageBlockContainer>
  )
}

const MortgageBlockContainer = styled.div`
  display: ${(props) => (props.displayBlock ? 'block' : 'none')};
  hr {
    background-color: #1c1c1e;
    height: 1px;
  }
  .mortgage-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon-text {
      display: flex;
      align-items: center;
      .name {
        margin-left: 15px;
      }
    }
    .provider {
      width: 40%;
    }
    .rate {
      width: 20%;
      font-size: 2rem;
    }
    .monthly-payment {
      width: 20%;
      font-size: 1.5rem;
      padding: 0px 3%;
      .item {
        width: 150px;
        .value {
        }
      }
    }
    .action {
      width: 20%;
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
    .mortgage-details {
      flex-wrap: wrap;
      .provider {
        width: 100%;
      }
      .rate {
        width: 100%;
        text-align: center;
        font-size: 2.5rem;
      }
      .monthly-payment {
        width: 100%;
        margin-top: 1rem;
        text-align: center;
        .item {
          width: 200%;
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

export default MortgageBlock
