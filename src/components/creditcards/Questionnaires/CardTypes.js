import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const CardTypes = (props) => {
    return (
        <CardTypesContainer>
            <Fade bottom>
                <div className="card-purpose has-text-centered">
                    <div className="section-title">My Card is for</div>
                    <div onClick={props.onNext} className="blocks">            
                        <div className="p-block bold">Build Credit Score</div>
                        <div className="p-block bold">Low Balance Transfer</div>
                        <div className="p-block bold">Low Interest</div>
                        <div className="p-block bold">Prepaid Cards</div>
                        <div className="p-block bold">Rewards</div>
                        <div className="p-block bold">Any</div>
                    </div>
                </div>
            </Fade>
        </CardTypesContainer>
    )
}

const CardTypesContainer = styled.div`
    margin-top: 10%;
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

export default CardTypes;