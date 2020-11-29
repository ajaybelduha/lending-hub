import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import { InputField, Checkbox, BlackButtonLink } from '../components/common/common';

const RegisterForm = () => {
    return (
        <RegisterFormContainer>
            <Fade bottom>
                <div className="section-title has-text-centered">Find your perfect card in 60 seconds</div>
                <div className="mb-6 has-text-centered">Get Instant Access</div>
                <div className="form-container">
                    <form>
                        <div class="field">
                            <div class="control">
                                {/* <input class="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                                <InputField type="text" className="input" placeholder="Full Name" />
                            </div>
                            <p class="help is-danger">This email is invalid</p>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <div class="field">
                                    <div class="control">
                                        {/* <input class="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                                        <InputField type="text" className="input" placeholder="Full Name" />
                                    </div>
                                    <p class="help is-danger">This email is invalid</p>
                                </div>
                            </div>
                            <div className="column">
                                <div class="field">
                                    <div class="control">
                                        {/* <input class="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                                        <InputField type="text" className="input" placeholder="Full Name" />
                                    </div>
                                    <p class="help is-danger">This email is invalid</p>
                                </div>
                            </div>
                        </div>
                        <div className="checkboxes">
                            <Checkbox>
                                <input type="checkbox" id="html" />
                                <label for="html">Do you want to receive credit card news, advice and exclusive offers?</label>
                            </Checkbox>
                            <Checkbox>
                                <input type="checkbox" id="html2" />
                                <label for="html2">I accept Terms of Use & Privacy Policy. By creating an account I understand and consent to communication via email and text message (std. messaging rates apply) by Lendinghub Inc. and its agents/affiliates.</label>
                            </Checkbox>
                        </div>
                        <BlackButtonLink to="/creditcards/listing">Let's see Cards</BlackButtonLink>
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