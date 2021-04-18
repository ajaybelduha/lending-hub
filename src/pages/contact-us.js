import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { navigate } from 'gatsby'
import Fade from 'react-reveal/Fade'
import { useFormik } from 'formik'
import axios from 'axios'
import Api from '../service/Api'
import classNames from 'classnames'
import {
  InputField,
  Checkbox,
  BlackButtonLink,
  BlackButton,
  TextArea
} from '../components/common/common'
import { PIPELINE_ID } from '../utils/constants'

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

  if (!values.message) {
    errors.message = 'Please provide a brief description here in 100 words minimum '
  } else if (values.message.length < 100) {
    errors.message = 'Please provide a brief description here in 100 words minimum'
  }

  return errors
}

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitData = (items) => {
    fetch('/.netlify/functions/hello', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      method: 'post',
      body: JSON.stringify(items)
    })
      .then(res => res.json())
      .then(response => {
        setIsSubmitted(true)
      })
      .catch(error => {
        console.log('Error while submitting data')
        console.log(error)
      })
  }

  useEffect(() => {

  }, [])

  const formik = useFormik({
    initialValues: {
      email: '',
      phone: '',
      name: '',
      lastname: '',
      message: ''
    },
    validate,
    onSubmit: (values, actions) => {
      const data = {
        person: {
          first_name: values.name,
          last_name: values.lastname,
          phone: values.phone,
          website: 'https://www.lendinghub.ca',
          email: values.email,
          type: 'Lead',
          summary: values.message,
          lead_status_id: PIPELINE_ID.lead_status_id,
          lead_source_id: PIPELINE_ID.lead_source_id,
          next_entry_name: 'From LendingHub Website',
          predefined_contacts_tag_ids: [PIPELINE_ID.contactus_tag]
        }
      }

      console.log('Data')
      console.log(data)

      // Submit data to followup boss and redirect
      // submitData(data)

      actions.resetForm()
      setIsSubmitted(true)
    }
  })

  return (
        <Layout>
            <ContactUsContainer>
            <div className="section-title has-text-centered">
         Get in touch with us
        </div>
        <div className="mb-6 has-text-centered">We will reach out to you as soon as possible</div>
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

            <div className="columns">
            <div className="column">
                <div className="field">
                  <div className="control">
                    <TextArea
                        id="message"
                        name="message"
                        type="text"
                      placeholder="Write your message here..."
                      className={classNames('input', {
                        'is-danger': formik.errors.message
                      })}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                    >

                        </TextArea>
                  </div>
                  {formik.touched.message && formik.errors.message
                    ? (
                    <p className="help is-danger">{formik.errors.message}</p>
                      )
                    : null}
                </div>
              </div>
            </div>
            {/* <BlackButtonLink to="/creditcards/listing">Let's see Cards</BlackButtonLink> */}
            <BlackButton type="submit">Submit</BlackButton>
          </form>
        </div>

            {isSubmitted && <Fade>
            <div className="apply-successful">
                <div>
                <svg className="tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="tick__circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="tick__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                </div>
                <p>Thank you for the message. We will get back to you soon!</p>
            </div>
            </Fade>}

            </ContactUsContainer>
        </Layout>
  )
}

const ContactUsContainer = styled.div`
    margin: 5%;
    height: 600px;
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
    .apply-successful {
        margin-top: 4rem;
        align-items: center;
        display: flex;
        justify-content:center;
        svg {
          margin-right: 20px;
        }
        p {
          font-size: 24px;
        }
      }
    @media screen and (max-width: 786px) {
        .form-container {
        width: 100%;
        }
    }
`

export default ContactUs
