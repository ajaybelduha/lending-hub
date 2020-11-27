import React from 'react';
import styled from 'styled-components';

const CardSubCategory = () => {
    return(
        <CardSubCategoryContainer>
            <div className="section-title">Find your perfect card in 60 seconds</div>
            <div className="heading-29">Please select your preferred reward type</div>
            <div className="columns">
                    <div className="column">
                        <div className="p-block bold">Cashback</div>
                    </div>
                    <div className="column"><div className="p-block bold">Gas</div></div>
                    <div className="column"><div className="p-block bold">Speciality</div></div>
                    <div className="column"><div className="p-block bold">Travel</div></div>
                    <div className="column"><div className="p-block bold">All of them</div></div>
                </div>
        </CardSubCategoryContainer>
    )
}

const CardSubCategoryContainer = styled.div`
    text-align: center;
    .heading-29 {
        font-size: 29px;
    }
    .p-block {
            background: #fff;
            cursor: pointer;
            border-radius: 2px;
            display: inline-block;
            height: 136px;
            margin: 1rem;
            position: relative;
            width: 136px;
            display: flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            transition: all 0.3s cubic-bezier(.25,.8,.25,1);
            border-radius: 8px;
            :hover {
                box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            }
        }
`

export default CardSubCategory;