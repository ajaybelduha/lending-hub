import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import CardTypes from './CardTypes';
import CardSubCategory from './CardSubCategory';
import CreditScore from './CreditScore';
import AnnualIncome from './AnnualIncome';
import Expenditure from './Expenditure';
import RegisterForm from '../../RegisterForm';

const QuestionnaireModal = () => {
    const [step, setStep] = useState(1);
    return(
        <QuestionnaireModalContainer>
            <div class="modal is-active">
            {/* <div class="modal-background"></div> */}
                <div class="modal-content">
                    {step === 1 && <CardTypes onNext={() => setStep(step + 1)} />}
                    {step === 2 && <CardSubCategory onNext={() => setStep(step + 1)} />}
                    {step === 3 && <CreditScore onNext={() => setStep(step + 1)} />}
                    {step === 4 && <AnnualIncome onNext={() => setStep(step + 1)} />}
                    {step === 5 && <Expenditure onNext={() => setStep(step + 1)} />}
                    {step === 6 && <RegisterForm onNext={() => setStep(step + 1)} />}
                </div>
                <button class="modal-close is-large" aria-label="close"></button>
            </div>
        </QuestionnaireModalContainer>
    )
}

const QuestionnaireModalContainer = styled.div`
    /* background-color: #FFFFFF;
    height: 100vh; */
    .modal {
        background-color: #FFFFFF;
        transition: all .15s ease;
        justify-content: flex-start;
        .modal-content, .modal-card {
            margin: 0 auto;
            max-height: inherit;
            width: 80%;
        }
        .modal-close {
            background-color: rgba(10, 10, 10, 0.3);
        }
    }
    @media screen and (max-width: 786px) {
        .modal {
            .modal-content, .modal-card {
                width: 100%;
            }
        }
    }
    
`

export default QuestionnaireModal;
