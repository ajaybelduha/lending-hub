import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import Layout from '../../components/Layout';
import MortgageFields from '../../components/mortgages/MortgageFields';
import RegisterForm from '../../components/RegisterForm';

const QuestionnaireModal = (props) => {
    const [step, setStep] = useState(1);
    const [selections, setSelections] = useState({});

    const setValue = async (key, value) => {
        console.log(key, value);
        let data = selections;
        data[key]= value;
        await setSelections(data);
        setStep(step + 1);
    }
    const submitAnswers = (key, value) => {
        console.log(selections);
        console.log(key, value);
        navigate('/mortgages/listing', {
            state: { selections },
          });
    }
    return(
        <Layout>
        <QuestionnaireModalContainer>
            <div className="container">
            {/* <div className="modal-background"></div> */}
                <div className="">
                    {step === 1 && <MortgageFields setValue={setValue} />}
                    {step === 2 && <RegisterForm submitText="Get Rates" setValue={submitAnswers} />}
                </div>
                <button className="modal-close is-large" aria-label="close"></button>
            </div>
        </QuestionnaireModalContainer>
        </Layout>
    )
}

const QuestionnaireModalContainer = styled.div`
    background-color: #FFFFFF;
    height: 110vh;
`

export default QuestionnaireModal;
