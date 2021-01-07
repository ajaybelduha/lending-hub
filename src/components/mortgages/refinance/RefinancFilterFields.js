import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useFormik } from 'formik'
import classNames from 'classnames'
import { InputField } from '../../../components/common/common'
import { getTotalMortgageAndCmhc } from '../../../components/common/utils'

const TotalMortgageInputs = (props) => {
  const { filtersFromQuestions, setFilteredFromInput } = props
  const formik = useFormik({
    initialValues: {
      estimatedPropertyValue: filtersFromQuestions?.totalMortgage,
    },
    onSubmit: (values) => {},
  })

  const validateAndSetNumber = async (e) => {
    e.preventDefault()
    const { value, name } = e.target
    const regex = /^(0*[0-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/
    const isValidNumber = !value || regex.test(value.toString())
    if (isValidNumber) {
      formik.setFieldValue(name, value)
    }
  }

  useEffect(() => {
    setFilteredFromInput(formik.values.estimatedPropertyValue)
  }, [formik.values.estimatedPropertyValue])

  return (
    <TMIContainer>
      <div className="questions-container">
        <form onSubmit={formik.handleSubmit}>
          <div className="inline-input-fields">
            <div className="field">
              <label className="label">Equity Takeout</label>
              <div className="control has-icons-left">
                <InputField
                  id="estimated-value"
                  name="estimatedPropertyValue"
                  type="text"
                  placeholder="Amount"
                  className={classNames('input', {
                    'is-danger': formik.errors.estimatedPropertyValue,
                  })}
                  onChange={validateAndSetNumber}
                  onBlur={formik.handleBlur}
                  value={formik.values.estimatedPropertyValue}
                />
                <span className="icon is-small is-left">$</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </TMIContainer>
  )
}

const TMIContainer = styled.div`
  .questions-container {
    width: 664px;
    margin: auto;
  }
  .inline-input-fields {
    display: flex;
    .field {
      margin-right: 3rem;
    }
    /* justify-content: space-between; */
    .amount-table {
      border: 1px solid #1c1c1e;
      padding: 2rem;
    }
  }
  .downpayment-fields {
    display: flex;
  }
`

export default TotalMortgageInputs
