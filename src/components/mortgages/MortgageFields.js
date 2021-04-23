import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { useFormik } from 'formik'
import classNames from 'classnames'
import {
  InputField,
  RadioButton,
  BlackButton
} from '../../components/common/common'
import { propertyFor } from '../../utils/constants'
import { getTotalMortgageAndCmhc } from '../../components/common/utils'

const validate = (values) => {
  const errors = {}
  const percent = Number(values?.downPaymentPercent)
  const dpNumeric = Number(values?.downPaymentNumeric)
  const purchaseAmount = Number(values?.purchasePrice)
  if (!values.purchasePrice) {
    errors.purchasePrice = 'Please provide a valid price'
  } else if (values.purchasePrice.length < 3) {
    errors.purchasePrice = 'Please provide a valid price'
  }

  if (!values.downPaymentNumeric) {
    errors.downPaymentNumeric = 'Please provide a valid downpayment'
  }

  if (purchaseAmount <= 500000 && percent < 5) {
    errors.downPaymentPercent = 'A minimum down payment of 5% is required'
  } else if (purchaseAmount > 500000) {
    const val1 = 25000
    const remainder = purchaseAmount - 500000
    const val2 = remainder / 10
    const val3 = (percent * purchaseAmount) / 100
    if (val3 < val1 + val2) {
      errors.downPaymentPercent =
        'Must be 5% of first $500,000 plus 10% of remainder'
    }
  }

  if (!values.closingDate) {
    errors.closingDate = 'Please provide a valid closing date'
  }

  return errors
}

const MortgageFields = (props) => {
  const [cmhcValue, setCmhcValue] = useState(0)
  const [totalMortgageValue, setTotalMortgageValue] = useState(0)
  const formik = useFormik({
    initialValues: {
      mortgageType: props?.type,
      purchasePrice: '',
      downPaymentNumeric: '',
      downPaymentPercent: '',
      closingDate: '',
      isFirstTimeBuyer: 'yes',
      rateType: 'fixed',
      mortgageTerm: 2
    },
    validate,
    onSubmit: (values) => {
      values.cmhc = cmhcValue
      values.totalMortgage = totalMortgageValue
      // alert(JSON.stringify(values, null, 2));
      props.setValue('formValues', values)
    }
  })

  useEffect(() => {
    if (props.selections?.subsequentBuyerType === propertyFor[0].value) { // Own Investment Property then fix percent to 20
      formik.setFieldValue('downPaymentPercent', 20)
    } else if (props.selections?.homeMortgageType === 'first-time') {
      formik.setFieldValue('downPaymentPercent', 5)
    }
  }, [])

  const validateAndSetNumber = async (e) => {
    e.preventDefault()
    const { value, name } = e.target
    const regex = /^(0*[0-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/
    const isValidNumber = !value || regex.test(value.toString())
    if (isValidNumber) {
      formik.setFieldValue(name, value)
    }
  }

  const setPrincipalAndCmhc = (principal, dp) => {
    const response = getTotalMortgageAndCmhc(principal, dp)
    if (response) {
      setCmhcValue(response.cmhc)
      setTotalMortgageValue(response.principal)
    } else {
      setCmhcValue(0)
      setTotalMortgageValue(0)
    }
  }

  useEffect(() => {
    if (props.selections?.subsequentBuyerType === propertyFor[0].value || props.selections?.homeMortgageType === 'first-time') {
      const { purchasePrice, downPaymentPercent } = formik.values
      if (purchasePrice) {
        const numericValue = (downPaymentPercent * purchasePrice) / 100
        formik.setFieldValue('downPaymentNumeric', numericValue)
      }
    }
  }, [formik.values.purchasePrice])

  useEffect(() => {
    const { purchasePrice, downPaymentNumeric } = formik.values
    if (purchasePrice) {
      const percentValue = (100 * downPaymentNumeric) / purchasePrice
      if (percentValue > 0 && percentValue < 100) {
        setPrincipalAndCmhc(purchasePrice, downPaymentNumeric)
      } else {
        setPrincipalAndCmhc(0, 0)
      }

      percentValue > 0.09
        ? formik.setFieldValue('downPaymentPercent', percentValue)
        : formik.setFieldValue('downPaymentPercent', '')
    }
  }, [formik.values.downPaymentNumeric])

  useEffect(() => {
    const { purchasePrice, downPaymentPercent } = formik.values
    if (purchasePrice) {
      const numericValue = (downPaymentPercent * purchasePrice) / 100
      formik.setFieldValue('downPaymentNumeric', numericValue)
    }
  }, [formik.values.downPaymentPercent])

  return (
    <MortgageFieldsContainer>
      <Fade bottom>
        {/* <h1 onClick={() => props.setValue('cardFor', 'yoyo')}>hello from Mortgage Field</h1> */}
        <div className="">
          <div className="section-title mb-6 has-text-centered">
            Tell us about your property
          </div>
          <div className="questions-container">
            <form onSubmit={formik.handleSubmit}>
              <div className="inline-input-fields">
                <div className="field">
                  <label className="label">Mortgage Type</label>
                  <div className="control">
                    {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                    <InputField
                      id="mortgage-type"
                      name="mortgageType"
                      type="text"
                      disabled
                      placeholder="Mortgage Type"
                      className={classNames('input', {
                        'is-danger': formik.errors.mortgageType
                      })}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mortgageType}
                    />
                  </div>
                  {formik.touched.mortgageType && formik.errors.mortgageType
                    ? (
                    <p className="help is-danger">
                      {formik.errors.mortgageType}
                    </p>
                      )
                    : null}
                </div>

                <div className="field">
                  <label className="label">Purchase Price</label>
                  <div className="control has-icons-left">
                    {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                    <InputField
                      id="purchase-price"
                      name="purchasePrice"
                      type="text"
                      placeholder="Amount"
                      className={classNames('input', {
                        'is-danger': formik.errors.purchasePrice
                      })}
                      onChange={validateAndSetNumber}
                      onBlur={formik.handleBlur}
                      value={formik.values.purchasePrice}
                    />
                    <span className="icon is-small is-left">$</span>
                  </div>
                  {formik.touched.purchasePrice &&
                  formik.errors.purchasePrice
                    ? (
                    <p className="help is-danger">
                      {formik.errors.purchasePrice}
                    </p>
                      )
                    : null}
                </div>
              </div>

              <div className="downpayment-fields">
                <div className="field numeric">
                  <label className="label">Downpayment</label>
                  <div className="control has-icons-left">
                    {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                    <InputField
                      id="downpayment"
                      name="downPaymentNumeric"
                      type="text"
                      placeholder="Amount"
                      className={classNames('input', {
                        'is-danger': formik.errors.downPaymentNumeric
                      })}
                      onChange={validateAndSetNumber}
                      onBlur={formik.handleBlur}
                      value={formik.values.downPaymentNumeric}
                    />
                    <span className="icon is-small is-left">$</span>
                  </div>
                  {formik.touched.downPaymentNumeric &&
                  formik.errors.downPaymentNumeric
                    ? (
                    <p className="help is-danger">
                      {formik.errors.downPaymentNumeric}
                    </p>
                      )
                    : null}
                </div>

                <div className="field percent">
                  <label className="label">(in %)</label>
                  <div className="control has-icons-right">
                    <span className="icon is-small is-right">%</span>
                    <InputField
                      id="downpayment-percent"
                      name="downPaymentPercent"
                      type="text"
                      placeholder=""
                      className={classNames('input', {
                        'is-danger': formik.errors.downPaymentPercent
                      })}
                      onChange={validateAndSetNumber}
                      onBlur={formik.handleBlur}
                      value={formik.values.downPaymentPercent}
                      disabled={props.selections.subsequentBuyerType === propertyFor[0].value || props.selections?.homeMortgageType === 'first-time'}
                    />
                  </div>
                  {formik.touched.downPaymentPercent &&
                  formik.errors.downPaymentPercent
                    ? (
                    <p className="help is-danger">
                      {formik.errors.downPaymentPercent}
                    </p>
                      )
                    : null}
                </div>
              </div>

              <div className="amount-table my-6">
                <h3 className="title-24 mb-4">Your mortgage amount table</h3>
                <div className="table-data">
                  <div className="item">
                    <div className="title-24-nb">Purchase Price</div>
                    <div className="title-24">
                      ${formik.values.purchasePrice || 0}
                    </div>
                  </div>
                  <div className="item">
                    <div className="title-24-nb">Down payment</div>
                    <div className="title-24">
                      - ${formik.values.downPaymentNumeric || 0}
                    </div>
                  </div>
                  <div className="item">
                    <div className="title-24-nb">CMHC Insurance</div>
                    <div className="title-24">+ ${cmhcValue}</div>
                  </div>
                  <div className="item total">
                    <div className="title-24-nb">Total Mortgage Required</div>
                    <div className="title-small">${totalMortgageValue}</div>
                  </div>
                </div>
              </div>

              {totalMortgageValue > 0 && (
                <Fade bottom>
                  <div className="inline-input-fields">
                    <div className="field">
                      <label className="label">Tentative closing date</label>
                      <div className="control">
                        {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                        <InputField
                          id="closing-date"
                          name="closingDate"
                          type="date"
                          placeholder=""
                          className={classNames('input', {
                            'is-danger': formik.errors.closingDate
                          })}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.closingDate}
                        />
                      </div>
                      {formik.touched.closingDate &&
                      formik.errors.closingDate
                        ? (
                        <p className="help is-danger">
                          {formik.errors.closingDate}
                        </p>
                          )
                        : null}
                    </div>

                    <div className="field">
                      <label className="label">
                        Are you a first time home buyer?
                      </label>
                      <div className="control mt-4">
                        <RadioButton className="radio">
                          Yes
                          <input
                            type="radio"
                            id="firsttime-buyer-yes"
                            name="isFirstTimeBuyer"
                            className={classNames({
                              'is-danger': formik.errors.isFirstTimeBuyer
                            })}
                            value="yes"
                            checked={formik.values.isFirstTimeBuyer === 'yes'}
                            onChange={() =>
                              formik.setFieldValue('isFirstTimeBuyer', 'yes')
                            }
                          />
                          <span className="checkmark"></span>
                        </RadioButton>
                        <RadioButton className="radio">
                          No
                          <input
                            type="radio"
                            id="firsttime-buyer-no"
                            name="isFirstTimeBuyer"
                            className={classNames({
                              'is-danger': formik.errors.isFirstTimeBuyer
                            })}
                            value="no"
                            checked={formik.values.isFirstTimeBuyer === 'no'}
                            onChange={() =>
                              formik.setFieldValue('isFirstTimeBuyer', 'no')
                            }
                          />
                          <span className="checkmark"></span>
                        </RadioButton>
                      </div>
                      {formik.touched.isFirstTimeBuyer &&
                      formik.errors.isFirstTimeBuyer
                        ? (
                        <p className="help is-danger">
                          {formik.errors.isFirstTimeBuyer}
                        </p>
                          )
                        : null}
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">What rate type would you like?</label>
                    <div className="control mt-4">
                      <RadioButton className="radio">
                        Fixed
                        <input
                          type="radio"
                          id="rate-type-fixed"
                          name="rateType"
                          className={classNames({
                            'is-danger': formik.errors.rateType
                          })}
                          value="fixed"
                          checked={formik.values.rateType === 'fixed'}
                          onChange={() =>
                            formik.setFieldValue('rateType', 'fixed')
                          }
                        />
                        <span className="checkmark"></span>
                      </RadioButton>
                      <RadioButton className="radio">
                        Variable
                        <input
                          type="radio"
                          id="rate-type-variable"
                          name="rateType"
                          className={classNames({
                            'is-danger': formik.errors.rateType
                          })}
                          value="variable"
                          checked={formik.values.rateType === 'variable'}
                          onChange={() =>
                            formik.setFieldValue('rateType', 'variable')
                          }
                        />
                        <span className="checkmark"></span>
                      </RadioButton>
                    </div>
                    {formik.touched.rateType && formik.errors.rateType
                      ? (
                      <p className="help is-danger">{formik.errors.rateType}</p>
                        )
                      : null}
                  </div>

                  <div style={{ clear: 'both' }} className="field">
                    <label className="label">
                      What mortgage term are you looking for?
                    </label>
                    <div className="control mt-4">
                      <RadioButton className="radio">
                        1 yr
                        <input
                          type="radio"
                          id="mortgage-term-1"
                          name="mortgageTerm"
                          className={classNames({
                            'is-danger': formik.errors.mortgageTerm
                          })}
                          checked={formik.values.mortgageTerm === 1}
                          onChange={() =>
                            formik.setFieldValue('mortgageTerm', 1)
                          }
                          value={1}
                        />
                        <span className="checkmark"></span>
                      </RadioButton>
                      <RadioButton className="radio">
                        2 yrs
                        <input
                          type="radio"
                          id="mortgage-term-2"
                          name="mortgageTerm"
                          className={classNames({
                            'is-danger': formik.errors.mortgageTerm
                          })}
                          checked={formik.values.mortgageTerm === 2}
                          onChange={() =>
                            formik.setFieldValue('mortgageTerm', 2)
                          }
                          value={2}
                        />
                        <span className="checkmark"></span>
                      </RadioButton>
                      <RadioButton className="radio">
                        3 yrs
                        <input
                          type="radio"
                          id="mortgage-term-3"
                          name="mortgageTerm"
                          className={classNames({
                            'is-danger': formik.errors.mortgageTerm
                          })}
                          checked={formik.values.mortgageTerm === 3}
                          onChange={() =>
                            formik.setFieldValue('mortgageTerm', 3)
                          }
                          value={3}
                        />
                        <span className="checkmark"></span>
                      </RadioButton>
                      <RadioButton className="radio">
                        4 yrs
                        <input
                          type="radio"
                          id="mortgage-term-4"
                          name="mortgageTerm"
                          className={classNames({
                            'is-danger': formik.errors.mortgageTerm
                          })}
                          checked={formik.values.mortgageTerm === 4}
                          onChange={() =>
                            formik.setFieldValue('mortgageTerm', 4)
                          }
                          value={4}
                        />
                        <span className="checkmark"></span>
                      </RadioButton>
                      <RadioButton className="radio">
                        5 yrs
                        <input
                          type="radio"
                          id="mortgage-term-5"
                          name="mortgageTerm"
                          className={classNames({
                            'is-danger': formik.errors.mortgageTerm
                          })}
                          checked={formik.values.mortgageTerm === 5}
                          onChange={() =>
                            formik.setFieldValue('mortgageTerm', 5)
                          }
                          value={5}
                        />
                        <span className="checkmark"></span>
                      </RadioButton>
                    </div>
                    {formik.touched.mortgageTerm &&
                    formik.errors.mortgageTerm
                      ? (
                      <p className="help is-danger">
                        {formik.errors.mortgageTerm}
                      </p>
                        )
                      : null}
                  </div>
                </Fade>
              )}

              <BlackButton type="submit" className="mt-3">
                Continue
              </BlackButton>
              {!formik.isValid
                ? (
                <p className="help is-danger">
                  *Please fill all the important fields to proceed
                </p>
                  )
                : null}
            </form>
          </div>
        </div>
      </Fade>
    </MortgageFieldsContainer>
  )
}

const MortgageFieldsContainer = styled.div`
  .questions-container {
    width: 664px;
    margin: auto;
  }
  .inline-input-fields {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 1rem;
    .amount-table {
      border: 1px solid #1c1c1e;
      padding: 2rem;
    }
    input {
      width: 300px;
    }
  }
  .field {
    /* margin-bottom: 2rem; */
    .control {
      height: 53px;
    }
  }
  .downpayment-fields {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    input {
      width: 300px;
    }
  }
  .amount-table {
    border: 1px solid #1c1c1e;
    padding: 2rem;
    .table-data {
      .item {
        padding: 0.4rem 0;
        display: flex;
        justify-content: space-between;
        &.total {
          background-color: #1c1c1e;
          color: #ffffff;
          position: relative;
          right: 2rem;
          padding: 1rem;
          top: 2rem;
          width: 664px;
        }
      }
    }
  }
  @media screen and (max-width: 786px) {
    .questions-container {
      width: 100%;
    }
    .field {
      width: 100%;
      input {
        width: 100%;
      }
    }
    .amount-table {
      padding: 1rem;
      .table-data {
        .item {
          &.total {
            width: 111%;
            right: 1rem;
            top: 1rem;
          }
        }
      }
    }
  }
`

export default MortgageFields
