import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { BlockStack } from '../../common/common';

const CardSubCategory = (props) => {
    return(
        <CardSubCategoryContainer>
             <Fade bottom>
                <div className="section-title">Find your perfect card in 60 seconds</div>
                <div className="title-24 mb-6">Please select your preferred reward type</div>
                <BlockStack onClick={props.onNext}>            
                    <div className="p-block bold">Cashback</div>
                    <div className="p-block bold">Gas</div>
                    <div className="p-block bold">Speciality</div>
                    <div className="p-block bold">Travel</div>
                    <div className="p-block bold">All of them</div>
                </BlockStack>
             </Fade>
        </CardSubCategoryContainer>
    )
}

const CardSubCategoryContainer = styled.div`
    text-align: center;
    margin-top: 10%;
    .heading-29 {
        font-size: 29px;
    }
`

export default CardSubCategory;