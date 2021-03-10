import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { BlockStack } from '../common/common'

const HomeMortgageTypes = (props) => {
  const cardFor = [
    { label: 'First time Home Buyer', value: 'first-time' },
    { label: 'Subsequent Home Buyer', value: 'subsequent' }
  ]
  return (
    <HomeMortgageTypesContainer>
      <Fade bottom>
        <div className="card-purpose has-text-centered">
          <div className="section-title mb-6">You can consider me as</div>
          <BlockStack>
            {' '}
            {/*onClick={props.onNext}*/}
            {cardFor.map((item) => (
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
    </HomeMortgageTypesContainer>
  )
}

const HomeMortgageTypesContainer = styled.div`
  margin-top: 10%;
`

export default HomeMortgageTypes
