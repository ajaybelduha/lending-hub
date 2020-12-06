import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout'

const Calculator = (props) => {

    const [calculatorHtml, setCalculatorHtml] = useState('');

    const appendScript = () => {
        const script = document.createElement("script");
        script.src = "https://www.ratehub.ca/assets/js/widget-loader.js";
        script.async = true;
        document.body.appendChild(script);
    }

    const setCalculatorType = (id) => {
        // console.log(props);
        // const { id } = props.location.state;
        console.log(id);
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
        console.log(props);
        const { id } = props.location.state;
        appendScript();
        setCalculatorType(id);
    }, []);

    return(
        <Layout>
            <div className="container my-6">
                <div className="content" dangerouslySetInnerHTML={{__html: calculatorHtml}}></div>
            </div>
        </Layout>
    )
}

export default Calculator;



