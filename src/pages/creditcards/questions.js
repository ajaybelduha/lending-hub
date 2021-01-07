import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import Layout from '../../components/Layout'
import CardTypes from '../../components/creditcards/Questionnaires/CardTypes'
import CardSubCategory from '../../components/creditcards/Questionnaires/CardSubCategory'
import CreditScore from '../../components/creditcards/Questionnaires/CreditScore'
import AnnualIncome from '../../components/creditcards/Questionnaires/AnnualIncome'
import Expenditure from '../../components/creditcards/Questionnaires/Expenditure'
import RegisterForm from '../../components/RegisterForm'

const QuestionnaireModal = (props) => {
  const [step, setStep] = useState(1)
  const [selections, setSelections] = useState({})

  useEffect(() => {
    const { location } = props
    if (location?.state?.id !== 1) {
      setStep(3)
    }
  }, [])

  const setValue = async (key, value) => {
    let data = selections
    data[key] = value
    await setSelections(data)
    if (key === 'cardFor' && value === 'rewards') {
      setStep(step + 1)
    } else if (key === 'cardFor' && value !== 'rewards') {
      setStep(step + 2)
    } else {
      setStep(step + 1)
    }
  }
  const submitAnswers = (key, value) => {
    navigate('/creditcards/listing')
  }
  return (
    <Layout>
      <QuestionnaireModalContainer>
        <div className="container">
          {/* <div className="modal-background"></div> */}
          <div className="">
            {step === 1 && <CardTypes setValue={setValue} />}
            {step === 2 && <CardSubCategory setValue={setValue} />}
            {step === 3 && <CreditScore setValue={setValue} />}
            {step === 4 && <AnnualIncome setValue={setValue} />}
            {step === 5 && <Expenditure setValue={setValue} />}
            {step === 6 && (
              <RegisterForm
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
  background-color: #ffffff;
  min-height: 1000px;
  height: fit-content;
`

export default QuestionnaireModal
