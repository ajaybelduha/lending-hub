import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const CardSubCategory = (props) => {
    return(
        <CardSubCategoryContainer>
             <Fade bottom>
                <div className="section-title">Find your perfect card in 60 seconds</div>
                <div className="heading-29">Please select your preferred reward type</div>
                <div className="blocks" onClick={props.onNext}>            
                    <div className="p-block bold">Cashback</div>
                    <div className="p-block bold">Gas</div>
                    <div className="p-block bold">Speciality</div>
                    <div className="p-block bold">Travel</div>
                    <div className="p-block bold">All of them</div>
                </div>
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
    .blocks {
        display: flex;
        min-height: 300px;
        justify-content: space-around;
        flex-wrap: wrap;
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