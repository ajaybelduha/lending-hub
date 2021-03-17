import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { BlockStack } from '../common/common'

const SubsequentBuyerTypes = (props) => {
  const propertyFor = [
    { label: 'Own an investment property', value: 'own-investment-property' },
    { label: 'Own an occupied property', value: 'own-occupied-property' }
  ]
  return (
    <SubsequentBuyerTypesContainer>
      <Fade bottom>
        <div className="card-purpose has-text-centered">
          <div className="section-title mb-6">Type of property owned by you</div>
          <BlockStack>
            {' '}
            {/*onClick={props.onNext}*/}
            {propertyFor.map((item) => (
              <div
                key={item.value}
                value={item.value}
                className="p-block bold"
                onClick={() => props.setValue('subsequentBuyerType', item.value)}
              >
                {' '}
                {item.label}
              </div>
            ))}
          </BlockStack>
        </div>
      </Fade>
    </SubsequentBuyerTypesContainer>
  )
}

const SubsequentBuyerTypesContainer = styled.div`
  margin-top: 10%;
`

export default SubsequentBuyerTypes
