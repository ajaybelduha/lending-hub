import React from 'react';
import styled from 'styled-components';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'
import { ButtonNoStyle } from '../../common/common'
import Fade from 'react-reveal/Fade';

const AnnualIncome = (props) => {
    return(
        <AnnualIncomeContainer>
            <Fade bottom>
                <div className="section-title">Find your perfect card in 60 seconds</div>
                <div className="title-24 mb-6">What is your annual income?</div>
                <div className="slider-container">
                <div className='value'>40</div>
                    <Slider
                        min={0}
                        max={100}
                        value={40}
                        orientation='horizontal'
                        //   onChange={this.handleChange}
                    />
                    <hr />
                    <div className="buttons-container">
                        <ButtonNoStyle>Clear</ButtonNoStyle>
                        <ButtonNoStyle onClick={props.onNext}>Apply</ButtonNoStyle>
                    </div>
                </div>
            </Fade>
        </AnnualIncomeContainer>
    )
}

const AnnualIncomeContainer = styled.div`
    margin-top: 10%;
    text-align: center;
    .slider-container {
        width: 435px;
        margin: auto;
    }
    .heading-29 {
        font-size: 29px;
    }
    .rangeslider .rangeslider__handle {
        box-shadow: none;
        background-color: #1C1C1E;
    }
    .rangeslider-horizontal .rangeslider__fill {
        background-color: #707070;
    }
    .rangeslider-horizontal .rangeslider__handle:after {
        display: none;
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
        .buttons-container {
            display: flex;
            justify-content: space-between;
        }
`

export default AnnualIncome;