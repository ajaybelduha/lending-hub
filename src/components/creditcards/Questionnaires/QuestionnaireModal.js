import React from 'react';
import styled from 'styled-components';
import CardTypes from './CardTypes';
import CardSubCategory from './CardSubCategory';
import CreditScore from './CreditScore';
import AnnualIncome from './AnnualIncome';
import Expenditure from './Expenditure';
import RegisterForm from '../../RegisterForm';

const QuestionnaireModal = () => {
    return(
        <QuestionnaireModalContainer>
            <div class="modal is-active">
            {/* <div class="modal-background"></div> */}
                <div class="modal-content">
                    {/* <CardTypes /> */}
                    {/* <CardSubCategory /> */}
                    {/* <CreditScore /> */}
                    {/* <AnnualIncome /> */}
                    {/* <Expenditure /> */}
                    <RegisterForm />
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
        .modal-content, .modal-card {
            margin: 0 auto;
            max-height: calc(100vh - 40px);
            width: 70%;
        }
        .modal-close {
            background-color: rgba(10, 10, 10, 0.3);
        }
    }
    
`

export default QuestionnaireModal;
