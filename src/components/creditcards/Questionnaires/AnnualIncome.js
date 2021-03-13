import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { SliderContainer, BlackButton, BlackButtonInverse } from '../../common/common'
import Fade from 'react-reveal/Fade'

const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

const AnnualIncome = (props) => {
  const [annualIncome, setAnnualIncome] = useState([0, 80000])
  const handleChange = (values) => {
    setAnnualIncome(values)
  }
  return (
    <AnnualIncomeContainer>
      <Fade bottom>
        <div className="section-title">
          Find your perfect card in 60 seconds
        </div>
        <div className="title-24 mb-6">What is your annual income?</div>
        <SliderContainer className="slider-container">
          <div className="title-24 mb-6">
            ${annualIncome[0]} - ${annualIncome[1]}
          </div>
          <Range
            min={0}
            max={80000}
            step={1}
            onChange={handleChange}
            defaultValue={annualIncome}
            tipFormatter={(value) => <span className="tooltip">${value}</span>}
          />
          <hr />
          <div className="buttons-container">
            <div className="button-cancel">
             <BlackButtonInverse>Clear</BlackButtonInverse>
            </div>
            <div className="button-apply">
              <BlackButton onClick={() => props.setValue('annualIncome', annualIncome)}>
                Apply
              </BlackButton>
            </div>
          </div>
        </SliderContainer>
      </Fade>
    </AnnualIncomeContainer>
  )
}

const AnnualIncomeContainer = styled.div`
  margin-top: 10%;
  text-align: center;
`

export default AnnualIncome
