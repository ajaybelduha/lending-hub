import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { ButtonNoStyle, SliderContainer } from '../../common/common'
import Fade from 'react-reveal/Fade'

const CreditScore = (props) => {
  const [score, setScore] = useState(300)
  const [rating, setRating] = useState('Good')

  useEffect(() => {
    if (score <= 629) {
      setRating('Bad')
    } else if (score > 629 && score <= 689) {
      setRating('Fair')
    } else if (score > 690 && score <= 719) {
      setRating('Good')
    } else if (score > 720 && score <= 850) {
      setRating('Excellent')
    }
  }, score)

  const setScoreValue = (val) => {
    setScore(val)
  }
  return (
    <CreditScoreContainer>
      <Fade bottom>
        <div className="section-title">
          Find your perfect card in 60 seconds
        </div>
        <div className="title-24 mb-6">Do you know your credit score?</div>
        <SliderContainer>
          <div className="value title-24">{score}</div>
          <Slider
            min={300}
            max={850}
            value={score}
            orientation="horizontal"
            onChange={(val) => setScoreValue(val)}
          />
          {/* <Range
                        min={300}
                        max={850}
                        step={1}
                    /> */}
          <div className="credit-text mt-6">{rating}</div>
          <hr />
          <div className="buttons-container">
            <ButtonNoStyle>Clear</ButtonNoStyle>
            <ButtonNoStyle onClick={() => props.setValue('creditScore', score)}>
              Apply
            </ButtonNoStyle>
          </div>
        </SliderContainer>
      </Fade>
    </CreditScoreContainer>
  )
}

const CreditScoreContainer = styled.div`
  text-align: center;
  margin-top: 10%;
  .heading-29 {
    font-size: 29px;
  }
  .buttons-container {
    display: flex;
    justify-content: space-between;
  }
`

export default CreditScore
