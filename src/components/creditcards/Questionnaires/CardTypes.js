import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { BlockStack } from '../../common/common';
 
const CardTypes = (props) => {
    return (
        <CardTypesContainer>
            <Fade bottom>
                <div className="card-purpose has-text-centered">
                    <div className="section-title">My Card is for</div>
                    <BlockStack onClick={props.onNext}>            
                        <div className="p-block bold">Build Credit Score</div>
                        <div className="p-block bold">Low Balance Transfer</div>
                        <div className="p-block bold">Low Interest</div>
                        <div className="p-block bold">Prepaid Cards</div>
                        <div className="p-block bold">Rewards</div>
                        <div className="p-block bold">Any</div>
                    </BlockStack>
                </div>
            </Fade>
        </CardTypesContainer>
    )
}

const CardTypesContainer = styled.div`
    margin-top: 10%;
`

export default CardTypes;