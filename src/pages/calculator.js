import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout'
import styled from 'styled-components'

const Calculator = (props) => {

    const [calculatorHtml, setCalculatorHtml] = useState('');

    const appendScript = () => {
        const script = document.createElement("script");
        script.src = "https://www.ratehub.ca/assets/js/widget-loader.js";
        script.async = true;
        document.body.appendChild(script);
    }

    const setCalculatorType = (id) => {
        switch(id) {
            case 'mortgage-payment':
                setCalculatorHtml(`<div>
                <h2 class="title-24 mb-6"> Mortgage payment calculator</h2>
                <div class="widget" data-widget="calc-payment" data-lang="en"></div>
             </div>`)
                break;
            case 'affordability':
                setCalculatorHtml(`<div>
                <h2 class="title-24 mb-6">Mortgage Affordability Calculator</h2>
                <div class="widget" data-widget="calc-affordability" data-lang="en"></div>
                </div>`)
                break;
            case 'land-transfer-tax':
                setCalculatorHtml(`<div>
                <h2 class="title-24 mb-6">Land Transfer Tax Calculator</h2>
                <div class="widget" data-widget="calc-payment" data-ltt="only" data-lang="en"></div>
                </div>`)
                break;
            case 'cmhc-insurance':
                setCalculatorHtml(`<div>
                <h2 class="title-24 mb-6">CMHC insurance calculator</h2>
                <div class="widget" data-widget="calc-payment" data-cmhc="only" data-lang="en"></div>
                </div>`)
                break;
            default: 
                setCalculatorHtml('<h1>Please select a proper calculator first</h1>')
                break;
        }
    }

    useEffect(() => {
        const { id } = props.location.state;
        appendScript();
        setCalculatorType(id);
    }, []);

    return(
        <Layout>
            <CalculatorsContainer>
                <div className="container my-6">
                    <div className="content" dangerouslySetInnerHTML={{__html: calculatorHtml}}></div>
                </div>
            </CalculatorsContainer>
        </Layout>
    )
}

const CalculatorsContainer = styled.div`
    .ratehub-calc .rh-calc-tabs .rh-holder.selected a {
        color: #1C1C1E
    }
    .ratehub-calc .rh-calc-tabs .rh-holder a {
        color: #1C1C1E;
        background-color: #FFFFFF;
    }
    .ratehub-calc .rh-calc-tabs .rh-holder:hover a {
        color: #1C1C1E;
        background-color: #FFFFFF;
    }
    .ratehub-calc .go:hover, .ratehub-calc .go:focus, .ratehub-calc .get-details:hover, .ratehub-calc .get-details:focus {
        color: #1C1C1E;
        background-color: #FFFFFF;
        border: 1px solid #1C1C1E
    }
    .ratehub-calc .go, .ratehub-calc .get-details {
        background-color: #1C1C1E;
        color: #FFFFFF
    }
    #payment-calc .calc-tip-wrapper {
        display: none
    }
    #payment-calc .rh-calc-head .social {
        display: none;
    }
    .ratehub-calc input {
        background-color: #FFFFFF;
    }
    .ratehub-calc .ico-minus:before {
        color: #1C1C1E
    }
    .ratehub-calc .ico-plus:before {
        color: #1C1C1E
    }
    .ratehub-calc .ico-well:before {
        color: #1C1C1E
    }
    #payment-calc .rh-calc-main .alt input {
        color: #1C1C1E
    }
    #payment-calc .rh-calc-main .total, #payment-calc .rh-calc-main .total-mortgage-payment, #payment-calc .rh-calc-main .payment-freq {
        background-color: #1C1C1E;
        color: #FFFFFF;
    }
    .rh .select2-container .select2-choice {
        background: #FFFFFF;
    }
    #payment-calc .rh-calc-main .rate-selector {
        color: #1C1C1E
    }
    .ratehub-calc h4 {
        color: #FFFFFF
    }
    .ratehub-calc .rh-calc-main .total-mortgage-payment td a {
        color: #FFFFFF
    }
    #payment-calc .rh-calc-main .land-transfer-tax .rh-title {
        color: #1C1C1E
    }
    .ratehub-calc #calc_extension .section-title {
        color: #1C1C1E
    }
    .ratehub-calc #calc_extension .section-content h4 {
        color: #1C1C1E;
    }
    .ratehub-calc #calc_extension .section-content .ledger-items .highlight {
        background-color: #1C1C1E;
        color: #FFFFFF;
    }
    .ratehub-calc #calc_extension .rate-risk .ledger-items li:first-child+li {
        color: #1C1C1E;
    }
    .ratehub-calc #calc_extension .rate-risk table th:first-child {
        background-color: #1C1C1E;
        color: #FFFFFF;
    }
    .ratehub-calc #calc_extension .rate-risk thead th, .ratehub-calc #calc_extension .amortization thead th {
        background-color: #1C1C1E;
        color: #FFFFFF;
    }
    .ratehub-calc #calc_extension .rate-risk table tbody tr {
        background-color: #FFFFFF
    }
    .ratehub-calc #calc_extension .rate-risk table tbody tr:nth-child(even) {
        background-color: #FFFFFF
    }
    .ratehub-calc #calc_extension .rate-risk table tbody tr:nth-child(even) .payment {
        background-color: #FFFFFF
    }
    .ratehub-calc #calc_extension .amortization tbody tr th {
        background-color: #FFFFFF
    }
    .ratehub-calc #calc_extension .amortization tbody tr:nth-child(even) th {
        background-color: #FFFFFF;
    }
    .ratehub-calc #calc_extension .rate-risk th, .ratehub-calc #calc_extension .rate-risk td, .ratehub-calc #calc_extension .amortization th, .ratehub-calc #calc_extension .amortization td {
        background-color: #FFFFFF;
    }
    .ratehub-calc #calc_extension .amortization tbody .highlight td, .ratehub-calc #calc_extension .amortization tbody .highlight th {
        background-color: #1C1C1E !important;
        color: #FFFFFF;
    }


    /* AFFORDABILITY CALCULATORS */
    #affordability-calc .social-icons {
        display: none;
    }
    .rh-checkbox-container .checked {
        color: #1C1C1E;
    }
    #afford-input tbody .afford-submit a {
        background-color: #1C1C1E;
        color: #FFFFFF;
        border: 1px solid #1C1C1E
    }
    #afford-input tbody .afford-submit a:hover, #afford-input tbody .afford-submit a:focus {
        background-color: #FFFFFF;
        color: #1C1C1E;
    }
    #afford-output .col4 {
        color: #1C1C1E;
    }
    #afford-output .total, #afford-output .total-mortgage-payment {
        background-color: #1C1C1E;
        color: #FFFFFF;
    }
    #afford-output .total td, #afford-output .total-mortgage-payment td {
        color: #FFFFFF;
        strong {
            color: #FFFFFF;
        }
    }
    #afford-output .rate-selector {
        color: #1C1C1E;
    }
    #afford-output .land-transfer-tax .first td {
        color: #1C1C1E;
    }
    #afford-output .profile th {
        color: #1C1C1E;
    }


    /* LAND TRANSFER */
    #payment-calc .rh-calc-main .land-transfer-tax .col4 {
        color: #1C1C1E;
    }
`

export default Calculator;



