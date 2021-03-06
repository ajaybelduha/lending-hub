import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { useFormik } from 'formik'
import axios from 'axios';
import Api from '../service/Api'
import classNames from 'classnames'
import {
  InputField,
  Checkbox,
  BlackButtonLink,
  BlackButton,
} from '../components/common/common'

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Please provide a valid first name'
  } else if (values.name.length < 3) {
    errors.name = 'Please provide a valid first name'
  }

  if (!values.lastname) {
    errors.lastname = 'Please provide a valid last name'
  } else if (values.lastname.length < 3) {
    errors.lastname = 'Please provide a valid last name'
  }

  if (!values.phone) {
    errors.phone = 'Please provide a valid 10 digit number'
  } else if (
    !/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/i.test(
      values.phone
    )
  ) {
    errors.phone = 'Please provide a valid 10 digit number'
  }

  if (!values.email) {
    errors.email = 'Please provide a valid email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.terms) {
    errors.terms = 'Please accept terms and conditions to proceed'
  } else if (values.terms[0] !== 'on') {
    errors.terms = 'Please accept terms and conditions to proceed'
  }

  return errors
}

const RegisterForm = (props) => {

  const [formValues, setFormValues] = useState({})

  useEffect(() => {
    let data = {};
    console.log(props)
    if (props.type === "Credit Card") {
      data = JSON.parse(JSON.stringify(props.selections));
      data.annualIncome = JSON.stringify(data.annualIncome)
      data.expenditure = JSON.stringify(data.expenditure)
    } else {
      data = JSON.parse(JSON.stringify(props.selections?.formValues));
    }
    // setFormValues(convertSelections(data))
    setFormValues(data)
  }, [])

  const submitData = (items) => {
    fetch('/.netlify/functions/hello', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(items)
    })
    .then(res => res.json())
    .then(response => {
      const selections = props.selections
      const redirect = props.redirectTo
      // navigate(redirect, {
      //   state: { selections },
      // });
    })
    .catch(error => {
      console.log("Error while submitting data")
      console.log(error);
    })
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      name: '',
      lastname: '',
      terms: '',
    },
    validate,
    onSubmit: (values, actions) => {

      let tagId = 4305274
      if (props.type === "Credit Card") {
        tagId = 4305274;
      } else if (props.type === 'mortgage') {
        tagId = 4305275;
      }

      let data = {
          "person": {
          "first_name": values.name,
          "last_name": values.lastname,
          "phone": values.phone,
          "website": "https://www.lendinghub.ca",
          "email": values.email,
          "type": "Lead",
          "lead_status_id": 1584673,
          "lead_source_id": 3368161,
          "next_entry_name": "From LendingHub Website",
          "predefined_contacts_tag_ids": [tagId], // Credit Card, Mortgage, Loans, Insurance => 4305274, 4305275, 4305276, 4305277
          "custom_fields": formValues
          }
        } 

      console.log("Data")
      console.log(data)

      // Submit data to followup boss and redirect
      // submitData(data)

      const selections = props.selections
      const redirect = props.redirectTo
      console.log("FORM SELECTIONS")
      console.log(props.selections)
      navigate(redirect, {
        state: { selections },
      });
      
    },
  })
  return (
    <RegisterFormContainer>
      <Fade bottom>
        <div className="section-title has-text-centered">
          Tell a little bit about yourself
        </div>
        <div className="mb-6 has-text-centered">Get Instant Access</div>
        <div className="form-container">
          <form 
            name="contact" 
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={formik.handleSubmit}
          >
            <input type="hidden" name="form-name" value="mortgage-information" />
            <div className="columns">
              <div className="column">
                <div className="field">
                  <div className="control">
                    {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                    <InputField
                      id="name"
                      name="name"
                      type="text"
                      placeholder="First Name"
                      className={classNames('input', {
                        'is-danger': formik.errors.name,
                      })}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                  </div>
                  {formik.touched.name && formik.errors.name ? (
                    <p className="help is-danger">{formik.errors.name}</p>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <div className="field">
                  <div className="control">
                    {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                    <InputField
                      id="lastname"
                      name="lastname"
                      type="text"
                      placeholder="Last Name"
                      className={classNames('input', {
                        'is-danger': formik.errors.lastname,
                      })}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastname}
                    />
                  </div>
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <p className="help is-danger">{formik.errors.lastname}</p>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column">
                <div className="field">
                  <div className="control">
                    <InputField
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      className={classNames('input', {
                        'is-danger': formik.errors.email,
                      })}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email ? (
                    <p className="help is-danger">{formik.errors.email}</p>
                  ) : null}
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <div className="control">
                    {/* <input className="input is-danger" type="email" placeholder="Email input" value="hello@" /> */}
                    <InputField
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="Phone"
                      className={classNames('input', {
                        'is-danger': formik.errors.phone,
                      })}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                    />
                  </div>
                  {formik.touched.phone && formik.errors.phone ? (
                    <p className="help is-danger">{formik.errors.phone}</p>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="checkboxes mb-4">
              <Checkbox>
                <input type="checkbox" id="html" />
                <label htmlFor="html">
                  Do you want to receive credit card news, advice and exclusive
                  offers?
                </label>
              </Checkbox>
              <Checkbox>
                {/* <input type="checkbox" id="html2" /> */}
                <input
                  id="html2"
                  name="terms"
                  type="checkbox"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                <label htmlFor="html2">
                  I accept Terms of Use & Privacy Policy. By creating an account
                  I understand and consent to communication via email and text
                  message (std. messaging rates apply) by Lendinghub Inc. and
                  its agents/affiliates.
                </label>
              </Checkbox>
              {formik.touched.terms && formik.errors.terms ? (
                <p className="help is-danger">{formik.errors.terms}</p>
              ) : null}
            </div>
            {/* <BlackButtonLink to="/creditcards/listing">Let's see Cards</BlackButtonLink> */}
            <BlackButton type="submit">{props.submitText}</BlackButton>
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
  @media screen and (max-width: 786px) {
    .form-container {
      width: 100%;
    }
  }
`

export default RegisterForm
