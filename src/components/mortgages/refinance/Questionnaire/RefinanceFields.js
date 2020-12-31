import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { useFormik } from 'formik';
import classNames from 'classnames';
import { InputField, BlackButton, RadioButton } from '../../../common/common';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const validate = values => {
    const errors = {};
    if (!values.estimatedPropertyValue) {
        errors.estimatedPropertyValue = 'Provide a valid value';
    } else if (values.estimatedPropertyValue.length < 3) {
        errors.estimatedPropertyValue = 'Provide a valid value';
    }

    if (!values.currentMortgageBalance) {
        errors.currentMortgageBalance = 'Provide a valid value';
      } 

    if (!values.currentLender) {
        errors.currentLender = 'Please enter the name of your current lender';
      } 
    
      if (!values.currentRate) {
        errors.currentRate = 'Please enter the current rate your have'; 
      }

    return errors;
};

const RefinanceFields = (props) => {
    const [maxLoanAmount, setMaxLoanAmount] = useState(0);
    const [equityAvailable, setEquityAvailable] = useState(0);
    const [equityNeeded, setEquityNeeded] = useState(0);
    const formik = useFormik({
        initialValues: {
            mortgageType: props?.type,
            estimatedPropertyValue: '',
            currentLender: '',
            currentMortgageBalance: '',
            currentRate: '',
            rateType: 'fixed',
            mortgageTerm: 5
        },
        validate,
        onSubmit: values => {
            values.maxLoanAmount = maxLoanAmount;
            values.totalMortgage = equityNeeded;
            // alert(JSON.stringify(values, null, 2));
            console.log(values)
            props.setValue('formValues', values);
        },
    });

    const validateAndSetNumber = async (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        const regex = /^(0*[0-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
        const isValidNumber = !value || regex.test(value.toString());
        if (isValidNumber) {
            formik.setFieldValue(name, value);
        }
    }

    const setEquityValue = (val) => {
        setEquityNeeded(val);
    }

    useEffect(() => {
        const { estimatedPropertyValue, currentMortgageBalance } = formik.values;
        if(estimatedPropertyValue > 100) {
            setMaxLoanAmount(0.8*estimatedPropertyValue)
            setEquityAvailable(maxLoanAmount - currentMortgageBalance)
        } else {
            setMaxLoanAmount(0)
            setEquityAvailable(0)
        }
    }, [formik.values.estimatedPropertyValue, formik.values.currentMortgageBalance])

    return (
        <RefinanceFieldsContainer>
            <Fade bottom>
                {/* <h1 onClick={() => props.setValue('cardFor', 'yoyo')}>hello from Mortgage Field</h1> */}
                <div className="container">
                    <div className="questions-container">
                        <div className="section-title mb-6">Tell us about your {formik.values.mortgageType.toLowerCase() || ''} requirements</div>

                        <form onSubmit={formik.handleSubmit}>

                            <div className="inline-input-fields">

                                <div className="field">
                                    <label class="label">Mortgage Type</label>
                                    <div className="control">
                                        {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                                        <InputField
                                            id="mortgage-type"
                                            name="mortgageType"
                                            type="text"
                                            disabled
                                            placeholder="Mortgage Type"
                                            className='input'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.mortgageType}
                                        />
                                    </div>
                                </div>



                                <div className="field">
                                    <label className="label">Estimated property value</label>
                                    <div className="control has-icons-left">
                                        {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                                        <InputField
                                            id="estimated-property-value"
                                            name="estimatedPropertyValue"
                                            type="text"
                                            placeholder="Amount"
                                            className={classNames('input', { 'is-danger': formik.errors.estimatedPropertyValue })}
                                            onChange={validateAndSetNumber}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.estimatedPropertyValue}
                                        />
                                        <span className="icon is-small is-left">
                                            $
                                        </span>
                                    </div>
                                    {formik.touched.estimatedPropertyValue && formik.errors.estimatedPropertyValue ? <p className="help is-danger">{formik.errors.estimatedPropertyValue}</p> : null}
                                </div>



                                <div className="field numeric">
                                    <label class="label">Current Mortgage Balance</label>
                                    <div className="control has-icons-left">
                                        {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                                        <InputField
                                            id="current-mortgage-balance"
                                            name="currentMortgageBalance"
                                            type="text"
                                            placeholder="Amount"
                                            className={classNames('input', { 'is-danger': formik.errors.currentMortgageBalance })}
                                            onChange={validateAndSetNumber}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.currentMortgageBalance}
                                        />
                                        <span className="icon is-small is-left">
                                            $
                                        </span>
                                    </div>
                                    {formik.touched.currentMortgageBalance && formik.errors.currentMortgageBalance ? <p className="help is-danger">{formik.errors.currentMortgageBalance}</p> : null}
                                </div>







                            </div>






                            <div className="amount-table mb-6">
                                <h3 className="title-24 mb-6">Determining your available equity:</h3>
                                <div className="table-data">
                                    <div className="item">
                                        <div className="title-24-nb">Estimated value of property</div>
                                        <div className="title-24">${formik.values.estimatedPropertyValue || 0}</div>
                                    </div>
                                    <div className="item">
                                        <div className="title-24-nb">Max. loan to value (MTV) ratio</div>
                                        <div className="title-24">x 80%</div>
                                    </div>
                                    <hr/>
                                    <div className="item">
                                        <div className="title-24-nb">Maximum Loan Amount</div>
                                        <div className="title-24">+ ${maxLoanAmount}</div>
                                    </div>
                                    <div className="item">
                                        <div className="title-24-nb">Current Mortgage Balance</div>
                                        <div className="title-24">- ${formik.values.currentMortgageBalance}</div>
                                    </div>
                                    <div className="item total">
                                        <div className="title-24-nb">Equity available in house</div>
                                        <div className="title-small">${equityAvailable}</div>
                                    </div>
                                </div>
                            </div>

                            
                            
                            {equityAvailable > 0 && <Fade bottom>
                                <div className="equity-choose">
                                <h2 className="mb-4 bold">How much equity would you like to take out ?</h2>
                                
                                    <Slider
                                        marks={{
                                            0: `$ 0`,
                                            [equityAvailable]: `$ ${equityAvailable}`
                                        }}
                                        min={0}
                                        max={equityAvailable}
                                        value={equityNeeded}
                                        orientation='horizontal'
                                        onChange={(val) => setEquityValue(val)}
                                    />
                                    <div className='value mt-4 title-24 has-text-centered'>${equityNeeded}</div>
                            </div>




                            <div className="field mt-6">
                                    <label class="label">Who is your current lender?</label>
                                    <div className="control">
                                        <InputField
                                            id="current-lender"
                                            name="currentLender"
                                            type="text"
                                            placeholder="Enter name of the current lender"
                                            className={classNames('input', { 'is-danger': formik.errors.currentLender })}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.currentLender}
                                        />
                                    </div>
                                    {formik.touched.currentLender && formik.errors.currentLender ? <p className="help is-danger">{formik.errors.currentLender}</p> : null}
                                </div>


                                <div className="field mt-6">
                                    <label class="label">What is your current rate?</label>
                                    <div className="control">
                                        <InputField
                                            id="current-rate"
                                            name="currentRate"
                                            type="text"
                                            placeholder="Enter your current rate"
                                            className={classNames('input', { 'is-danger': formik.errors.currentRate })}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.currentRate}
                                        />
                                    </div>
                                    {formik.touched.currentRate && formik.errors.currentRate ? <p className="help is-danger">{formik.errors.currentRate}</p> : null}
                                </div>



                            <div className="field mt-6">
                                <label class="label">What rate type would you like?</label>
                                <div class="control mt-4">
                                        <RadioButton className="radio">Fixed
                                            <input 
                                                type="radio" 
                                                id="rate-type-fixed"
                                                name="rateType"
                                                className={classNames({'is-danger': formik.errors.rateType })}
                                                value='fixed'
                                                checked={formik.values.rateType === "fixed"}
                                                onChange={() => formik.setFieldValue("rateType", "fixed")}
                                            />
                                            <span class="checkmark"></span>
                                        </RadioButton>
                                        <RadioButton className="radio">Variable
                                            <input 
                                                type="radio" 
                                                id="rate-type-variable"
                                                name="rateType"
                                                className={classNames({'is-danger': formik.errors.rateType })}
                                                value='variable'
                                                checked={formik.values.rateType === "variable"}
                                                onChange={() => formik.setFieldValue("rateType", "variable")}
                                            />
                                            <span class="checkmark"></span>
                                        </RadioButton>
                                    </div>
                                {formik.touched.rateType && formik.errors.rateType ? <p className="help is-danger">{formik.errors.rateType}</p> : null}
                            </div>


                            <br/>
                            <div style={{ clear: 'both' }} className="field mt-6">
                                    <label class="label">What mortgage term are you looking for?</label>
                                    <div class="control mt-4">
                                        <RadioButton className="radio">1 yr
                                            <input
                                                type="radio"
                                                id="mortgage-term-1"
                                                name="mortgageTerm"
                                                className={classNames({ 'is-danger': formik.errors.mortgageTerm })}
                                                checked={formik.values.mortgageTerm === 1}
                                                onChange={() => formik.setFieldValue("mortgageTerm", 1)}
                                                value={1}
                                            />
                                            <span class="checkmark"></span>
                                        </RadioButton>
                                        <RadioButton className="radio">2 yrs
                                            <input
                                                type="radio"
                                                id="mortgage-term-2"
                                                name="mortgageTerm"
                                                className={classNames({ 'is-danger': formik.errors.mortgageTerm })}
                                                checked={formik.values.mortgageTerm === 2}
                                                onChange={() => formik.setFieldValue("mortgageTerm", 2)}
                                                value={2}
                                            />
                                            <span class="checkmark"></span>
                                        </RadioButton>
                                        <RadioButton className="radio">3 yrs
                                            <input
                                                type="radio"
                                                id="mortgage-term-3"
                                                name="mortgageTerm"
                                                className={classNames({ 'is-danger': formik.errors.mortgageTerm })}
                                                checked={formik.values.mortgageTerm === 3}
                                                onChange={() => formik.setFieldValue("mortgageTerm", 3)}
                                                value={3}
                                            />
                                            <span class="checkmark"></span>
                                        </RadioButton>
                                        <RadioButton className="radio">4 yrs
                                            <input
                                                type="radio"
                                                id="mortgage-term-4"
                                                name="mortgageTerm"
                                                className={classNames({ 'is-danger': formik.errors.mortgageTerm })}
                                                checked={formik.values.mortgageTerm === 4}
                                                onChange={() => formik.setFieldValue("mortgageTerm", 4)}
                                                value={4}
                                            />
                                            <span class="checkmark"></span>
                                        </RadioButton>
                                        <RadioButton className="radio">5 yrs
                                            <input
                                                type="radio"
                                                id="mortgage-term-5"
                                                name="mortgageTerm"
                                                className={classNames({ 'is-danger': formik.errors.mortgageTerm })}
                                                checked={formik.values.mortgageTerm === 5}
                                                onChange={() => formik.setFieldValue("mortgageTerm", 5)}
                                                value={5}
                                            />
                                            <span class="checkmark"></span>
                                        </RadioButton>
                                    </div>
                                    {formik.touched.mortgageTerm && formik.errors.mortgageTerm ? <p className="help is-danger">{formik.errors.mortgageTerm}</p> : null}
                                </div>
                            </Fade>}
                            

                            <BlackButton type="submit" className="mt-6">Continue</BlackButton>

                        </form>

                    </div>
                </div>
            </Fade>
        </RefinanceFieldsContainer>
    )
}

const RefinanceFieldsContainer = styled.div`
    .questions-container {
        width: 664px;
        margin: auto;
    }
    .inline-input-fields {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .amount-table {
            border: 1px solid #1C1C1E;
            padding: 2rem;
        }
    }

    .equity-choose {
        width: 80%;
        .rc-slider-rail {
            background-color: #707070;
            height: 10px;
            border-radius: 6px;
        }
        .rc-slider-handle {
            width: 26px;
            height: 26px;
            margin-top: -8px;
            background-color: #1C1C1E;
            outline: 0;
            border: solid 2px #1C1C1E;
        }
        .rc-slider-track {
            height: 10px;
            background-color: #1C1C1E;
        }

        .rc-slider-mark-text {
            font-size: 1rem;
            display: block;
            width: 100px;
            margin-top: 10px;
        }
        .rc-slider-dot {
            bottom: -10px;
            margin-left: -10px;
            width: 20px;
            height: 20px;
        }
    }
   
    .amount-table {
        border: 1px solid #1C1C1E;
        padding: 2rem;
        margin-top: 2rem;
        .table-data {
        .item {
            padding: 0.4rem 0;
            display: flex;
            justify-content: space-between;
            &.total {
                background-color: #1C1C1E;
                color: #FFFFFF;
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
            width:100%;
            input {
                width: 100%
            }
        }
        .equity-choose {
            width: 100%; 
        }
        .amount-table {
            padding: 1rem;
            .table-data {
                .item {
                    div:first-child {
                        width: 60%;
                    }
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

export default RefinanceFields;