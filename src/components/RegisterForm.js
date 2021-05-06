import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { useFormik } from 'formik'
import classNames from 'classnames'
import {
  InputField,
  Checkbox,
  BlackButton
} from '../components/common/common'
import { createPipelineContent, submitData } from '../service/Pipelinecrm'
import { validate, createDataForCRM } from '../components/common/utils'

const RegisterForm = (props) => {
  const [formValues, setFormValues] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const formData = createDataForCRM(props)
    setFormValues(formData)
  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      name: '',
      lastname: '',
      terms: ''
    },
    validate,
    onSubmit: (values, actions) => {
      const data = createPipelineContent(props, values, formValues)
      setIsLoading(true)
      // pipeline crm api changes and register form code made better
      submitData(data, (res) => {
        setIsLoading(false)
        if (res.status === 200) {
          const selections = props.selections
          const redirect = props.redirectTo
          navigate(redirect, {
            state: { selections }
          })
        } else {
          alert('Error occured. Please try again!')
        }
        formik.resetForm()
      })

      // const selections = props.selections
      // const redirect = props.redirectTo
      // navigate(redirect, {
      //   state: { selections }
      // })
    }
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
                        'is-danger': formik.errors.name
                      })}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                  </div>
                  {formik.touched.name && formik.errors.name
                    ? (
                    <p className="help is-danger">{formik.errors.name}</p>
                      )
                    : null}
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
                        'is-danger': formik.errors.lastname
                      })}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastname}
                    />
                  </div>
                  {formik.touched.lastname && formik.errors.lastname
                    ? (
                    <p className="help is-danger">{formik.errors.lastname}</p>
                      )
                    : null}
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
                        'is-danger': formik.errors.email
                      })}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                  {formik.touched.email && formik.errors.email
                    ? (
                    <p className="help is-danger">{formik.errors.email}</p>
                      )
                    : null}
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
                        'is-danger': formik.errors.phone
                      })}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                    />
                  </div>
                  {formik.touched.phone && formik.errors.phone
                    ? (
                    <p className="help is-danger">{formik.errors.phone}</p>
                      )
                    : null}
                </div>
              </div>
            </div>
            <div className="checkboxes mb-4">
              {/* <Checkbox>
                <input type="checkbox" id="html" />
                <label htmlFor="html">
                  Do you want to receive credit card news, advice and exclusive
                  offers?
                </label>
              </Checkbox> */}
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
              {formik.touched.terms && formik.errors.terms
                ? (
                <p className="help is-danger">{formik.errors.terms}</p>
                  )
                : null}
            </div>
            {/* <BlackButtonLink to="/creditcards/listing">Let's see Cards</BlackButtonLink> */}
            <BlackButton disabled={isLoading} type="submit">
              {!isLoading && <span>{props.submitText}</span>}
              {isLoading && <img className="loading-icon" src='/img/icons/loading.svg' />}
            </BlackButton>
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
