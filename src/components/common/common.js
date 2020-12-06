import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

export const BlackButtonLink = styled(props => <Link {...props} />)`
    background-color: #151515;
    color: #FFFFFF;
    width: 100%;
    display: block;
    padding: 0.75rem;
    margin: 1rem 0;
    text-align: center;
    border: 1px solid #1C1C1E;
    :hover {
      background-color: #FFFFFF;
      color: #1C1C1E;
      border: 1px solid #1C1C1E;
    }
`;

export const BlackButton = styled.button`
    background-color: #1C1C1E;
    color: #FFFFFF;
    width: 100%;
    padding: 0.9rem 1rem;
    font-size: 1rem;
    border: 0;
    font-family: "Poppins Regular";
    cursor: pointer;
    :hover {
      background-color: #FFFFFF;
      color: #1C1C1E;
      border: 1px solid #1C1C1E;
    }
`

export const UnderlinedLink = styled(props => <Link {...props} />)`
  text-decoration: underline;
  color: #323131;
`;

export const ButtonNoStyle = styled.button`
  background-color: transparent;
  color: #1C1C1E;
  border: 0;
  cursor: pointer;
`

export const InputField = styled.input`
    height: 53px;
    border-radius: 0;
    border: ${props => props.isDanger ? `1px solid #f14668` : `1px solid #707070`};
`

export const Checkbox = styled.div`
  display: block;
  margin-bottom: 15px;

  input {
    padding: 0;
    height: initial;
    width: initial;
    margin-bottom: 0;
    display: none;
    cursor: pointer;
  }

  label {
    position: relative;
    cursor: pointer;
  }

  label:before {
    content:'';
    -webkit-appearance: none;
    background-color: transparent;
    border: 1px solid #707070;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 8px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 1rem;
  }

  input:checked + label:after {
    content: '';
    display: block;
    position: absolute;
    top: 4px;
    left: 4px;
    width: 10px;
    background-color: #1C1C1E;
    border-radius: 50%;
    height: 10px;
  }
`


export const BlockStack = styled.div`
    display: flex;
    min-height: 300px;
    justify-content: center;
    flex-wrap: wrap;
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

export const SliderContainer = styled.div`
  width: 435px;
  margin: auto;
  .rc-slider-rail {
    background-color: #707070;
    height: 10px;
    border-radius: 6px;
  }
  .rc-slider-handle {
    width: 26px;
    height: 26px;
    margin-top: -8px;
    background-color: #1C1C1E;
    outline: 0;
    border: solid 2px #1C1C1E;
}
.rc-slider-track {
    height: 10px;
    background-color: #1C1C1E;
}

`