import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import classNames from 'classnames';
import { InputField} from '../../components/common/common';
import { getTotalMortgageAndCmhc } from '../../components/common/utils'

const TotalMortgageInputs = (props) => {
    const [cmhcValue, setCmhcValue] = useState(0);
    const [totalMortgageValue, setTotalMortgageValue] = useState(0);
    const {filtersFromQuestions, setFilteredFromInput } = props;
    // const { purchasePrice, downPaymentNumeric, downPaymentPercent } = filtersFromQuestions
    const formik = useFormik({
        initialValues: {
            purchasePrice: filtersFromQuestions?.purchasePrice,
            downPaymentNumeric: filtersFromQuestions?.downPaymentNumeric,
            downPaymentPercent: filtersFromQuestions?.downPaymentPercent,
        },
        onSubmit: values => {
          values.cmhc = cmhcValue;
          values.totalMortgage = totalMortgageValue;
          // alert(JSON.stringify(values, null, 2));
          props.setValue('formValues', values);
        },
      });

    const validateAndSetNumber = async (e) => {
        e.preventDefault();
        const { value, name } = e.target;
        const regex = /^(0*[0-9][0-9]*(\.[0-9]*)?|0*\.[0-9]*[1-9][0-9]*)$/;
        const isValidNumber = !value || regex.test(value.toString());
        if(isValidNumber) {
            console.log("setValue of "+name+" to "+value)
            formik.setFieldValue(name, value);   
        }
    }

    const setPrincipalAndCmhc = (principal, dp) => {
        const response = getTotalMortgageAndCmhc(principal, dp);
        console.log(response)
        if(response) {
            setCmhcValue(response.cmhc);
            setTotalMortgageValue(response.principal)
            setFilteredFromInput(response)
        } else {
            setCmhcValue(0);
            setTotalMortgageValue(0)
        }
    }

    useEffect(() => {
        const { purchasePrice, downPaymentNumeric } = formik.values;
        if(purchasePrice) {
            const percentValue = (100*downPaymentNumeric)/purchasePrice;
            console.log("Percent Value: "+percentValue.toFixed(2))
            if (percentValue > 0 && percentValue < 100) {
                setPrincipalAndCmhc(purchasePrice, downPaymentNumeric);
            } else {
                setPrincipalAndCmhc(0, 0);
            }


            percentValue > 0.09 ? formik.setFieldValue('downPaymentPercent', percentValue.toFixed(2))
             : formik.setFieldValue('downPaymentPercent', '')
        }
    }, [formik.values.downPaymentNumeric])

    useEffect(() => {
        const { purchasePrice, downPaymentPercent } = formik.values;
        if(purchasePrice) {
            const numericValue = (downPaymentPercent*purchasePrice)/100;
            console.log("Numeric Value: "+Math.ceil(numericValue))
            formik.setFieldValue('downPaymentNumeric', numericValue);
        }
    }, [formik.values.downPaymentPercent])

    return(
        <TMIContainer>
                <div className="questions-container">
                   
                        <form onSubmit={formik.handleSubmit}>

                            <div className="inline-input-fields">



                                <div className="field">
                                    <label className="label">Purchase Price</label>
                                    <div className="control has-icons-left">
                                        <InputField
                                            id="purchase-price"
                                            name="purchasePrice"
                                            type="text"
                                            placeholder="Amount"
                                            className={classNames('input', { 'is-danger': formik.errors.purchasePrice })}
                                            onChange={validateAndSetNumber}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.purchasePrice}
                                        />
                                        <span className="icon is-small is-left">
                                            $
                                        </span>
                                    </div>
                            
                                </div>



                                <div className="downpayment-fields">
                                    <div className="field numeric">
                                        <label class="label">Downpayment</label>
                                        <div className="control has-icons-left">
                                            <InputField
                                                id="downpayment"
                                                name="downPaymentNumeric"
                                                type="text"
                                                placeholder="Amount"
                                                className={classNames('input', { 'is-danger': formik.errors.downPaymentNumeric })}
                                                onChange={validateAndSetNumber}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.downPaymentNumeric}
                                            />
                                            <span className="icon is-small is-left">
                                                $
                                            </span>
                                        </div>
            
                                    </div>





                                    <div className="field percent">
                                    <label class="label">(in %)</label>
                                        <div className="control has-icons-right">
                                            {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                                            <span className="icon is-small is-right">
                                                %
                                            </span>
                                            <InputField
                                                id="downpayment-percent"
                                                name="downPaymentPercent"
                                                type="text"
                                                placeholder=""
                                                className={classNames('input', { 'is-danger': formik.errors.downPaymentPercent })}
                                                onChange={validateAndSetNumber}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.downPaymentPercent}
                                            />
                                        </div>

                                    </div>
                                </div>






                            </div>






                            {/* <div className="amount-table my-6">
                                <div className="table-data">
                                    <div className="item">
                                        <div className="title-24-nb">Purchase Price</div>
                                        <div className="title-24">${formik.values.purchasePrice || 0}</div>
                                    </div>
                                    <div className="item">
                                        <div className="title-24-nb">Down payment</div>
                                        <div className="title-24">- ${formik.values.downPaymentNumeric || 0}</div>
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
                            </div> */}

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
            border: 1px solid #1C1C1E;
            padding: 2rem;
        }
    }
    .downpayment-fields {
        display: flex;
    }
`

export default TotalMortgageInputs;