import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { BlockStack } from '../../../common/common'

const RefinanceType = (props) => {
  const refinanceType = [
    { label: 'Debt Consolidation', value: 'debt-consolidation' },
    { label: 'Equity Take-out', value: 'equity-takeout' },
    { label: 'HELOC', value: 'heloc' },
    { label: 'Not Sure', value: 'not-sure' },
  ]
  return (
    <RefinanceTypeContainer>
      <Fade bottom>
        <div className="card-purpose has-text-centered">
          <div className="section-title">
            What type of refinance you are looking for?
          </div>
          <BlockStack>
            {' '}
            {/*onClick={props.onNext}*/}
            {refinanceType.map((item) => (
              <div
                key={item.value}
                value={item.value}
                className="p-block bold"
                onClick={() => props.setValue('cardFor', item.value)}
              >
                {' '}
                {item.label}
              </div>
            ))}
          </BlockStack>
        </div>
      </Fade>
    </RefinanceTypeContainer>
  )
}

const RefinanceTypeContainer = styled.div`
  margin-top: 10%;
`

export default RefinanceType
