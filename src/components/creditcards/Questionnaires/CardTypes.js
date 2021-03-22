import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { BlockStack } from '../../common/common'
import { cardFor } from '../../../utils/constants'

const CardTypes = (props) => {
  return (
    <CardTypesContainer>
      <Fade bottom>
        <div className="card-purpose has-text-centered">
          <div className="section-title">My Card is for</div>
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
    </CardTypesContainer>
  )
}

const CardTypesContainer = styled.div`
  margin-top: 10%;
`

export default CardTypes
