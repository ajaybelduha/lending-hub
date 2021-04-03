import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { BlockStack } from '../../common/common'
import { cardFor, subCategory } from '../../../utils/constants'

const CardTypes = ({ setValue }) => {
  const [selectedCard, setSelectedCard] = useState(null)
  return (
    <div>
      <CardFor setSelectedCard={setSelectedCard} setValue = {setValue} />
      {/* {selectedCard && <CardSubCategory setValue = {setValue} />} */}
    </div>
  )
}

const CardFor = ({ setValue, setSelectedCard }) => {
  const onCardClick = (item) => {
    setSelectedCard('rewards')
    setValue('cardFor', item.value)
  }
  return (
    <CardTypesContainer>
      <Fade bottom>
        <div className="card-purpose has-text-centered">
          <div className="title-24 mb-6">My card is for</div>
          <BlockStack>
            {cardFor.map((item) => (
              <div
                key={item.value}
                value={item.value}
                className="p-block bold"
                onClick={() => onCardClick(item)}
              >
                {item.label}
              </div>
            ))}
          </BlockStack>
        </div>
      </Fade>
    </CardTypesContainer>
  )
}

const CardSubCategory = ({ setValue }) => {
  return (
    <CardSubCategoryContainer>
      <Fade bottom>
        <div className="title-24 mb-6">
          Please select your preferred reward type
        </div>
        <BlockStack>
          {subCategory.map((item) => (
            <div
              key={item.value}
              value={item.value}
              className="p-block bold"
              onClick={() => setValue('rewardType', item.value)}
            >
              {item.label}
            </div>
          ))}
        </BlockStack>
      </Fade>
    </CardSubCategoryContainer>
  )
}

const CardSubCategoryContainer = styled.div`
  text-align: center;
  .heading-29 {
    font-size: 29px;
  }
`

const CardTypesContainer = styled.div`
`

export default CardTypes
