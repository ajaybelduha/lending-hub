import React from "react";
import "react-step-progress-bar/styles.css";
import styled from 'styled-components';
import { ProgressBar, Step } from "react-step-progress-bar";
 
const StepProgressBar = ({percent, totalSteps}) => {

    const showSteps = () => {
        let rows = []
        for (var i = 0; i < totalSteps; i++) {
            rows.push(<Step>
                {({ accomplished, index }) => (
                    <div
                    className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                    {index + 1}
                    </div>
                )}
                </Step>);
        }
        return rows
    }

    return (
        <ProgressBarContainer>
            <ProgressBar percent={percent}>
             {showSteps()}
        </ProgressBar>
      </ProgressBarContainer>
    );
  }

const ProgressBarContainer = styled.div`
    .RSPBprogressBar {
        width: 600px;
        margin: 3rem auto;
    }
    .RSPBprogression {
        background: #000000
    }
    @media screen and (max-width: 786px) {
        .RSPBprogressBar {
            width: 80%;
            margin: 0rem auto 2rem auto;
        }
    }
`


export default StepProgressBar