import React, { useState } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

const Subscribe = () => {

  const [ subscribe, setSubscribe ] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      console.log(response)
    })
    .catch(error => {
      console.log("Error while submitting data")
      console.log(error);
    })
  }

  const handleOnChange = ({target}) => {
    const value = target.value;
    setSubscribe(value)
  }

  const handleSubmit = () => {
    let data = {
      "source": "Lending Hub Website",
      "type": "Registration",
      "person": {
          "firstName": "Newsletter",
          "lastName": "Subscriber",
          "emails": [{"value": subscribe}],
          "tags": ["newsletter", "subscribe", 'lending-hub'],
      },
    }
    //submitData(data)
    setIsSubmitted(true)

  }

  return (
    <SubscribeContainer>
      <div className="container">
        <div className="subscribe-container">
          <div className="text">
            <h2 className="title-small mb-3">
              Stay up to speed on your financial journey
            </h2>
            <p className="title-1">
              Get rate alerts, relevant articles and breaking financial news
              sent right to your inbox.
            </p>
          </div>
          <div className="email-field">
            <div className="is-flex-desktop">
              <div className="field">
                <div className="control">
                  <input 
                    name="subscribe" 
                    className="input" 
                    type="text" 
                    placeholder="Email" 
                    value={subscribe}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <button onClick={handleSubmit} className="button is-black">Subscribe</button>
            </div>
          </div>
        </div>
        {isSubmitted && <Fade>
            <div className="apply-successful">
                <div>
                <svg class="tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="tick__circle" cx="26" cy="26" r="25" fill="none"/>
                <path class="tick__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                </div>
                <p>Thank you for the message. We will get back to you soon!</p>
            </div>  
            </Fade>}
      </div>
    </SubscribeContainer>
  )
}

const SubscribeContainer = styled.section`
  .subscribe-container {
    margin-top: 2rem;
    border: 1px solid #707070;
    border-radius: 0.5rem;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text {
      width: 65%
    }
    .email-field {
      width: 35%;
    }
    input {
      border-radius: 0;
      border-color: #707070;
      font-size: 1.1rem;
      padding: 1rem;
      height: 46px;
      max-width: 270px;
      width: 100%;
    }
    button {
      height: 46px;
      border-radius: 0;
      margin-left: 1rem;
      padding: 0 2rem;
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
    padding: 1rem;
    .subscribe-container {
      padding: 10px;
      flex-wrap: wrap;
      .input {
        max-width: inherit;
      }
      .text {
      width: 100%
    }
    .email-field {
      margin-top: 2rem;
      width: 100%;
    }
      button {
        width: 100%;
        margin-left: 0;
      }
    }
  }
`

export default Subscribe
