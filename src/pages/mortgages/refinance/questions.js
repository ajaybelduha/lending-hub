import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import Layout from '../../../components/Layout'
import RefinanceType from '../../../components/mortgages/refinance/Questionnaire/RefinanceType'
import PropertyType from '../../../components/mortgages/refinance/Questionnaire/PropertyType'
import RefinanceFields from '../../../components/mortgages/refinance/Questionnaire/RefinanceFields'
import RegisterForm from '../../../components/RegisterForm'
import StepProgressBar from '../../../components/ProgressSteps';
import { types } from '../../../utils/constants'

const QuestionnaireModal = (props) => {
  const [totalSteps, setTotalSteps] = useState(4)
  const [step, setStep] = useState(1)
  const [percent, setPercent] = useState(0);
  const [selections, setSelections] = useState({})

  useEffect(() => {
    const journey = props?.location?.state?.id === 2 ? 'refinance' : 'renewal'
    if (journey === 'refinance') {
      setStep(1)
    } else {
      setStep(2)
      setTotalSteps(3)
    }
  }, [])

  const setValue = async (key, value) => {
    let data = selections
    data[key] = value
    await setSelections(data)
    setStep(step + 1)
    setPercent(percent + 100/(totalSteps - 1))
  }

  const submitAnswers = (key, value) => {
    navigate('/mortgages/refinance/listing', {
      state: { selections },
    })
  }

  const getSelectedMortgageType = () => {
    const id = props?.location?.state?.id
    let mortgageType = 'Home Buying'
    if (id === 2) {
      mortgageType = 'Refinance'
    } else if (id === 3) {
      mortgageType = 'Renewal'
    } else {
      mortgageType = 'Home Buying'
    }
    return mortgageType
  }

  const journey = props?.location?.state?.id === 2 ? 'refinance' : 'renewal'

  return (
    <Layout>
      <QuestionnaireModalContainer>
        <div className="container">
          {/* <div className="modal-background"></div> */}
          <StepProgressBar percent={percent} totalSteps={totalSteps} />
          <div className="">
            {step === 1 && (
              <RefinanceType
                type={getSelectedMortgageType()}
                setValue={setValue}
              />
            )}
            {step === 2 && (
              <PropertyType
                type={getSelectedMortgageType()}
                setValue={setValue}
              />
            )}
            {step === 3 && (
              <RefinanceFields
                type={getSelectedMortgageType()}
                setValue={setValue}
              />
            )}
            {step === 4 && (
              <RegisterForm 
                redirectTo='/mortgages/refinance/listing'
                type={types.MORTGAGE}
                selections={selections}
                submitText="Get Rates" 
                setValue={submitAnswers} />
            )}
          </div>
          <button className="modal-close is-large" aria-label="close"></button>
        </div>
      </QuestionnaireModalContainer>
    </Layout>
  )
}

const QuestionnaireModalContainer = styled.div`
  margin-top: 5rem;
  background-color: #ffffff;
  min-height: 1000px;
  height: fit-content;
`

export default QuestionnaireModal
