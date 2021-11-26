import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Calculator = (props) => {
  const [calculatorHtml, setCalculatorHtml] = useState('')

  const appendScript = () => {
    const script = document.createElement('script')
    script.src = 'https://www.ratehub.ca/assets/js/widget-loader.js'
    script.async = true
    document.body.appendChild(script)
  }

  const setCalculatorType = (id) => {
    if(id !== '' && id !== null && id !== undefined){
      switch (id) {
        case 'mortgage-payment':
          setCalculatorHtml(`<div>
                  <h2 class="title-24 mb-6"> Mortgage payment calculator</h2>
                  <div class="widget" data-widget="calc-payment" data-lang="en"></div>
               </div>`)
          break
        case 'affordability':
          setCalculatorHtml(`<div>
                  <h2 class="title-24 mb-6">Mortgage Affordability Calculator</h2>
                  <div class="widget" data-widget="calc-affordability" data-lang="en"></div>
                  </div>`)
          break
        case 'land-transfer-tax':
          setCalculatorHtml(`<div>
                  <h2 class="title-24 mb-6">Land Transfer Tax Calculator</h2>
                  <div class="widget" data-widget="calc-payment" data-ltt="only" data-lang="en"></div>
                  </div>`)
          break
        case 'cmhc-insurance':
          setCalculatorHtml(`<div>
                  <h2 class="title-24 mb-6">CMHC insurance calculator</h2>
                  <div class="widget" data-widget="calc-payment" data-cmhc="only" data-lang="en"></div>
                  </div>`)
          break
        default:
          setCalculatorHtml('<h1>Please select a proper calculator first.</h1>')
          break
      }
    }else{
      setCalculatorHtml('<h1>Please select a calculator type first.</h1>')
    }
  }

  useEffect(() => {
    const state = props.location.state
    appendScript()
    let id = ''
    if(state && state !== undefined && state !== null){
      id = state.id
    }
    setCalculatorType(id)
  }, [])

  return (
    <Layout>
      <CalculatorsContainer>
        <div className="container my-6">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: calculatorHtml }}
          ></div>
        </div>
      </CalculatorsContainer>
    </Layout>
  )
}

const CalculatorsContainer = styled.div`
  .ratehub-calc .rh-calc-tabs .rh-holder.selected a {
    color: #1c1c1e;
  }
  .ratehub-calc .rh-calc-tabs .rh-holder a {
    color: #1c1c1e;
    background-color: #ffffff;
  }
  .ratehub-calc .rh-calc-tabs .rh-holder:hover a {
    color: #1c1c1e;
    background-color: #ffffff;
  }
  .ratehub-calc .go:hover,
  .ratehub-calc .go:focus,
  .ratehub-calc .get-details:hover,
  .ratehub-calc .get-details:focus {
    color: #1c1c1e;
    background-color: #ffffff;
    border: 1px solid #1c1c1e;
  }
  .ratehub-calc .go,
  .ratehub-calc .get-details {
    background-color: #1c1c1e;
    color: #ffffff;
  }
  #payment-calc .calc-tip-wrapper {
    display: none;
  }
  #payment-calc .rh-calc-head .social {
    display: none;
  }
  .ratehub-calc input {
    background-color: #ffffff;
  }
  .ratehub-calc .ico-minus:before {
    color: #1c1c1e;
  }
  .ratehub-calc .ico-plus:before {
    color: #1c1c1e;
  }
  .ratehub-calc .ico-well:before {
    color: #1c1c1e;
  }
  #payment-calc .rh-calc-main .alt input {
    color: #1c1c1e;
  }
  #payment-calc .rh-calc-main .total,
  #payment-calc .rh-calc-main .total-mortgage-payment,
  #payment-calc .rh-calc-main .payment-freq {
    background-color: #1c1c1e;
    color: #ffffff;
  }
  .rh .select2-container .select2-choice {
    background: #ffffff;
  }
  #payment-calc .rh-calc-main .rate-selector {
    color: #1c1c1e;
  }
  .ratehub-calc h4 {
    color: #ffffff;
  }
  .ratehub-calc .rh-calc-main .total-mortgage-payment td a {
    color: #ffffff;
  }
  #payment-calc .rh-calc-main .land-transfer-tax .rh-title {
    color: #1c1c1e;
  }
  .ratehub-calc #calc_extension .section-title {
    color: #1c1c1e;
  }
  .ratehub-calc #calc_extension .section-content h4 {
    color: #1c1c1e;
  }
  .ratehub-calc #calc_extension .section-content .ledger-items .highlight {
    background-color: #1c1c1e;
    color: #ffffff;
  }
  .ratehub-calc #calc_extension .rate-risk .ledger-items li:first-child + li {
    color: #1c1c1e;
  }
  .ratehub-calc #calc_extension .rate-risk table th:first-child {
    background-color: #1c1c1e;
    color: #ffffff;
  }
  .ratehub-calc #calc_extension .rate-risk thead th,
  .ratehub-calc #calc_extension .amortization thead th {
    background-color: #1c1c1e;
    color: #ffffff;
  }
  .ratehub-calc #calc_extension .rate-risk table tbody tr {
    background-color: #ffffff;
  }
  .ratehub-calc #calc_extension .rate-risk table tbody tr:nth-child(even) {
    background-color: #ffffff;
  }
  .ratehub-calc
    #calc_extension
    .rate-risk
    table
    tbody
    tr:nth-child(even)
    .payment {
    background-color: #ffffff;
  }
  .ratehub-calc #calc_extension .amortization tbody tr th {
    background-color: #ffffff;
  }
  .ratehub-calc #calc_extension .amortization tbody tr:nth-child(even) th {
    background-color: #ffffff;
  }
  .ratehub-calc #calc_extension .rate-risk th,
  .ratehub-calc #calc_extension .rate-risk td,
  .ratehub-calc #calc_extension .amortization th,
  .ratehub-calc #calc_extension .amortization td {
    background-color: #ffffff;
  }
  .ratehub-calc #calc_extension .amortization tbody .highlight td,
  .ratehub-calc #calc_extension .amortization tbody .highlight th {
    background-color: #1c1c1e !important;
    color: #ffffff;
  }

  /* AFFORDABILITY CALCULATORS */
  #affordability-calc .social-icons {
    display: none;
  }
  .rh-checkbox-container .checked {
    color: #1c1c1e;
  }
  #afford-input tbody .afford-submit a {
    background-color: #1c1c1e;
    color: #ffffff;
    border: 1px solid #1c1c1e;
  }
  #afford-input tbody .afford-submit a:hover,
  #afford-input tbody .afford-submit a:focus {
    background-color: #ffffff;
    color: #1c1c1e;
  }
  #afford-output .col4 {
    color: #1c1c1e;
  }
  #afford-output .total,
  #afford-output .total-mortgage-payment {
    background-color: #1c1c1e;
    color: #ffffff;
  }
  #afford-output .total td,
  #afford-output .total-mortgage-payment td {
    color: #ffffff;
    strong {
      color: #ffffff;
    }
  }
  #afford-output .rate-selector {
    color: #1c1c1e;
  }
  #afford-output .land-transfer-tax .first td {
    color: #1c1c1e;
  }
  #afford-output .profile th {
    color: #1c1c1e;
  }

  /* LAND TRANSFER */
  #payment-calc .rh-calc-main .land-transfer-tax .col4 {
    color: #1c1c1e;
  }
`

export default Calculator
