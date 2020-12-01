import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { BlockStack } from '../../common/common';

const CardSubCategory = (props) => {
    const subCategory = [
        {label: 'Cashback', value: 'cashback'},
        {label: 'Gas', value: 'gas'},
        {label: 'Speciality', value: 'speciality'},
        {label: 'Travel', value: 'travel'},
        {label: 'All of them', value: 'all'}
    ]
    return(
        <CardSubCategoryContainer>
             <Fade bottom>
                <div className="section-title">Find your perfect card in 60 seconds</div>
                <div className="title-24 mb-6">Please select your preferred reward type</div>
                <BlockStack>            
                    {subCategory.map(item => (
                        <div 
                            key={item.value} 
                            value={item.value} 
                            className="p-block bold" 
                            onClick={() => props.setValue('rewardType', item.value)}
                            >{item.label}
                        </div>
                    ))}
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