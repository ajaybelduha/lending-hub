import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { BlockStack } from '../../common/common'
import { annualFeesData } from '../../../utils/constants'

const AnnualFees = (props) => {
  return (
    <AnnualFeesContainer>
      <Fade bottom>
        <div className="title-24 mb-6">
          Annual Fees
        </div>
        <BlockStack>
          {annualFeesData.map((item) => (
            <div
              key={item.value}
              value={item.value}
              className="p-block bold"
              onClick={() => props.setValue('annualFees', item.value)}
            >
              {item.label}
            </div>
          ))}
        </BlockStack>
      </Fade>
    </AnnualFeesContainer>
  )
}

const AnnualFeesContainer = styled.div`
  text-align: center;
  .heading-29 {
    font-size: 29px;
  }
`

export default AnnualFees
