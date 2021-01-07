import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { BlockStack } from '../../../common/common'

const PropertyType = (props) => {
  const refinanceType = [
    { label: 'Owner Occupied', value: 'owner-occupied' },
    { label: 'Owner Occupied + Rental', value: 'owner-occupied-rental' },
    { label: 'Rental', value: 'rental' },
  ]
  return (
    <PropertyTypeContainer>
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
    </PropertyTypeContainer>
  )
}

const PropertyTypeContainer = styled.div`
  margin-top: 10%;
`

export default PropertyType
