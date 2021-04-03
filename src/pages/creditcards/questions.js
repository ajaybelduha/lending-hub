import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import Layout from '../../components/Layout'
import { types } from '../../utils/constants'
import { BackButton } from '../../components/common/common'
import CardTypes from '../../components/creditcards/Questionnaires/CardTypes'
import CardSubCategory from '../../components/creditcards/Questionnaires/CardSubCategory'
import CreditScore from '../../components/creditcards/Questionnaires/CreditScore'
import AnnualIncome from '../../components/creditcards/Questionnaires/AnnualIncome'
import Expenditure from '../../components/creditcards/Questionnaires/Expenditure'
import RegisterForm from '../../components/RegisterForm'
import StepProgressBar from '../../components/ProgressSteps';
import AnnualFees from '../../components/creditcards/Questionnaires/AnnualFees'

const QuestionnaireModal = (props) => {
  const percentStep = 34
  const [totalSteps, setTotalSteps] = useState(4)
  const [step, setStep] = useState(1)
  const [percent, setPercent] = useState(0);
  const [selections, setSelections] = useState({})

  const setValue = async (key, value) => {
    const data = selections
    data[key] = value
    // if (value !== 'rewards') { // When rewards are also showin in the questions
    //   setStep(step + 1)
    //   setPercent(percent + percentStep)
    // }
    setStep(step + 1)
    setPercent(percent + percentStep)
    await setSelections(data)
  }
  const submitAnswers = (key, value) => {
    navigate('/creditcards/listing', {
      state: { selections },
    })
  }

  const onBackButtonClick = () => {
    if (step > 1) {
      setStep(step - 1)
      setPercent(percent - percentStep)
    } else {
      navigate('/creditcards')
    }
  }

  return (
    <Layout>
      <QuestionnaireModalContainer>
      <BackButton setStep={onBackButtonClick} />
        <div className="container">
        <div className="section-title has-text-centered">
          Find your perfect card in 60 seconds
        </div><br/><br/>
          <StepProgressBar percent={percent} totalSteps={totalSteps} />
          <div className="">
            {step === 1 && <CardTypes setValue={setValue} />}
            {step === 2 && <CreditScore setValue={setValue} />}
            {step === 3 && <AnnualFees setValue={setValue} />}
            {step === 4 && (
              <RegisterForm
                redirectTo='/creditcards/listing'
                type={types.CREDITCARD}
                selections={selections}
                submitText="Let's see Cards"
                setValue={submitAnswers}
              />
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
