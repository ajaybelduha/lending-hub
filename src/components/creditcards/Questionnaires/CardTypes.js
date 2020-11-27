import React from 'react';
import styled from 'styled-components';

const CardTypes = () => {
    return (
        <CardTypesContainer>
            <div className="card-purpose has-text-centered">
                <div className="section-title">My Card is for</div>
                <div className="columns is-multiline">
                    <div className="column">
                        <div className="p-block bold">Build Credit Score</div>
                    </div>
                    <div className="column"><div className="p-block bold">Low Balance Transfer</div></div>
                    <div className="column"><div className="p-block bold">Low Interest</div></div>
                    <div className="column"><div className="p-block bold">Prepaid Cards</div></div>
                    <div className="column"><div className="p-block bold">Rewards</div></div>
                    <div className="column"><div className="p-block bold">Any</div></div>
                </div>
            </div>
        </CardTypesContainer>
    )
}

const CardTypesContainer = styled.div`
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