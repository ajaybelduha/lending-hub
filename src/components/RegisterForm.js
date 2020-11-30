import React, {useState} from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import Fade from 'react-reveal/Fade';
import classNames from 'classnames';
import { InputField, Checkbox, BlackButtonLink, BlackButton } from '../components/common/common';

const RegisterForm = (props) => {
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [nameError, setNameError] = useState(false);

    const [state, setState] = React.useState({
        name: "",
        email: "",
        phone: ""
      })

    const handleChange = (e) => {
        isNonEmptyFields();
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value
        });
    }

    const isNonEmptyFields = () => {
        if(state.name.length === 0) {
            setNameError(true);
        } else {
            setNameError(false);
        }
        if(state.email.length === 0) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        if(state.phone.length === 0) {
            setPhoneError(true);
        } else {
            setPhoneError(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit ", state);
        isNonEmptyFields();
       
            if (!nameError && !emailError && !phoneError) {
                navigate('/creditcards/listing');
            }
        
        
    }
    return (
        <RegisterFormContainer>
            <Fade bottom>
                <div className="section-title has-text-centered">Find your perfect card in 60 seconds</div>
                <div className="mb-6 has-text-centered">Get Instant Access</div>
                <div className="form-container">
                    <form>
                        <div className="field">
                            <div className="control">
                                {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                                <InputField 
                                    type="text" 
                                    name="name"
                                    value={state.name} 
                                    onChange={handleChange}
                                    className={classNames('input', {'is-danger': nameError })}
                                    placeholder="Full Name" />
                            </div>
                            {nameError && <p className="help is-danger">Please provide a valid name</p>}
                        </div>
                        <div className="columns">
                            <div className="column">
                                <div className="field">
                                    <div className="control">
                                        {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                                        <InputField 
                                            type="email" 
                                            name={'email'}
                                            value={state.email} 
                                            onChange={handleChange}
                                            className={classNames('input', {'is-danger': emailError })}
                                            placeholder="Email ID" />
                                    </div>
                                    {emailError && <p className="help is-danger">Please provide a valid email</p>}
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <div className="control">
                                        {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                                        <InputField 
                                            type="text" 
                                            name={'phone'}
                                            value={state.phone} 
                                            onChange={handleChange}
                                            className={classNames('input', {'is-danger': phoneError })}
                                            placeholder="Phone Number" />
                                    </div>
                                    {phoneError && <p className="help is-danger">Please provide a valid phone number</p>}
                                </div>
                            </div>
                        </div>
                        <div className="checkboxes mb-4">
                            <Checkbox>
                                <input type="checkbox" id="html" />
                                <label for="html">Do you want to receive credit card news, advice and exclusive offers?</label>
                            </Checkbox>
                            <Checkbox>
                                <input type="checkbox" id="html2" />
                                <label for="html2">I accept Terms of Use & Privacy Policy. By creating an account I understand and consent to communication via email and text message (std. messaging rates apply) by Lendinghub Inc. and its agents/affiliates.</label>
                            </Checkbox>
                        </div>
                        {/* <BlackButtonLink to="/creditcards/listing">Let's see Cards</BlackButtonLink> */}
                        <BlackButton onClick={handleSubmit}>Let's see Cards</BlackButton>
                    </form>
                </div>
            </Fade>

        </RegisterFormContainer>
    )
}

const RegisterFormContainer = styled.div`
    margin-top: 10%;
    .form-container {
        width: 500px;
        margin: auto;
        .checkboxes {
            label {
                font-size: 0.8rem;
            }
        }
        a {
            text-align: center;
        }
    }
`

export default RegisterForm;