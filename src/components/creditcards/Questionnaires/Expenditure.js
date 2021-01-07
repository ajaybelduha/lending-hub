import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { ButtonNoStyle, SliderContainer } from '../../common/common'
import Fade from 'react-reveal/Fade'

const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

const Expenditure = (props) => {
  const [expenditure, setExpenditure] = useState([0, 80000])
  const handleChange = (values) => {
    setExpenditure(values)
  }
  return (
    <ExpenditureContainer>
      <Fade bottom>
        <div className="section-title">
          Find your perfect card in 60 seconds
        </div>
        <div className="title-24 mb-6">
          On average, about how much do you spend on your
          <br /> credit card in a typical month?
        </div>
        <SliderContainer>
          <div className="title-24 mb-6">
            ${expenditure[0]} - ${expenditure[1]}
          </div>
          <Range
            min={0}
            max={80000}
            step={1}
            onChange={handleChange}
            defaultValue={expenditure}
            tipFormatter={(value) => <span className="tooltip">${value}</span>}
          />
          <hr />
          <div className="buttons-container">
            <ButtonNoStyle>Clear</ButtonNoStyle>
            <ButtonNoStyle
              onClick={() => props.setValue('expenditure', expenditure)}
            >
              Apply
            </ButtonNoStyle>
          </div>
        </SliderContainer>
      </Fade>
    </ExpenditureContainer>
  )
}

const ExpenditureContainer = styled.div`
  margin-top: 10%;
  text-align: center;
  .heading-29 {
    font-size: 29px;
  }
  .buttons-container {
    display: flex;
    justify-content: space-between;
  }
`

export default Expenditure
