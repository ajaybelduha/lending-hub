import React, {useState} from 'react';
import { graphql } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styled from 'styled-components';
import InsuranceHero from '../components/insurance/InsuranceHero'
import Layout from '../components/Layout'
import EditorsPick from '../components/creditcards/EditorsPick'
import InsuranceForm from '../components/insurance/InsuranceForm'
import InsuranceSteps from '../components/insurance/InsuranceSteps'
import OurPartners from '../components/mortgages/OurPartners'
import { useStaticQuery } from 'gatsby';
import { ButtonNoStyle } from '../components/common/common';

const items = [
    {
        image: '/img/icons/mortgage-copy.svg',
        imageHover: '/img/icons/home-3_hover.svg',
        title: 'Home Insurance',
        link: '/mortgages',
      },
      {
        image: '/img/icons/loan.svg',
        imageHover: '/img/icons/loan_hover.svg',
        title: 'Auto Insurance',
        link: '/mortgages',
      }
  ]

const stepItems = [
    {
        image: '/img/step1.png',
        title: 'Answer a few basic questions',
        subtitle: "Just answer a few basic questions to let us know what exactly you need and we will provide you the rest",
      },
      {
        image: '/img/step2.png',
        title: 'Choose your coverage options',
        subtitle: "Select how much coverage you need for your vehicle and home. Here you can truly customize your insurance according to your needs.",
      },
      {
        image: '/img/step3.png',
        title: 'Pay Online',
        subtitle: "Pay exactly for what you buy with just few clicks online - no hidden fees. And access your insurance documents immediately.",
      }
]


const Insurance = () => {
    const [openModal, setOpenModal] = useState(false);

    const setModal = () => {
        setOpenModal(!openModal)
    }
    return(
        <Layout>
            <InsuranceContainer>
                <InsuranceHero 
                    title="Let's help you find the right Insurance coverage"
                    subtitle="Find news and advice on homeowners, renters, auto, health and life insurance."
                    imageSrc="/img/insurance.png"
                    blockItems={items} 
                    setOpen={setModal}
                />
                <div className="container my-6">
                    <h1 className="section-title mb-3">Steps to buy insurance</h1>
                                <h4 className="section-subtitle">
                                    Follow these 3 simple steps to buy insurance with us with just few clicks
                                </h4>
                        <div className="section-2">
                                <InsuranceSteps stepItems={stepItems} />
                        </div>
                        <OurPartners />
                </div><br/>
                <div className="container">
                    <h1 className="section-title mb-3">See how you can save $$ when you switch to Lending Hub</h1>
                                {/* <h4 className="section-subtitle">
                                    Follow these 3 simple steps to buy insurance with us with just few clicks
                                </h4> */}
                    <ul className="save-items">
                        <li className="save-item">
                            <h3 className="title-24-nb">Bundle up</h3>
                            <p>Combine your card and home insurance to save</p>
                        </li>
                        <li className="save-item">
                            <h3 className="title-24-nb">Multi Vehicle</h3>
                            <p>Combine multiple vehicles in your house hold to save</p>
                        </li>
                        <li className="save-item">
                            <h3 className="title-24-nb">Multi home</h3>
                            <p>Combine insurance on all your properties to save more</p>
                        </li>
                        <li className="save-item">
                            <h3 className="title-24-nb">Alumini and Professional Preferred Rates</h3>
                            <p>Preferred rates for the alumini, professionals, alumini and affinity group members </p>
                        </li>
                        <li className="save-item">
                            <h3 className="title-24-nb">Winter Tire Discount</h3>
                            <p>Drive with 4 winter tires from December to March</p>
                        </li>
                        <li className="save-item">
                            <h3 className="title-24-nb">Home Security Savings</h3>
                            <p>Get additional savings for a connected water alarm system</p>
                        </li>
                        <li className="save-item">
                            <h3 className="title-24-nb">Newly build home savings</h3>
                            <p>If your home is newly built, you can get even more savings for insurance.</p>
                        </li>
                        <li className="save-item">
                            <h3 className="title-24-nb">Ontario Retiree Savings</h3>
                            <p>Ontario Retirees will save more on their insurnace</p>
                        </li>
                    </ul>
                </div>
                <EditorsPick type="insurance"/>
                <InsuranceForm open={openModal} setOpen={setModal} />
            </InsuranceContainer>
        </Layout>
    )
}

const InsuranceContainer = styled.div`
margin-top: 3rem;
    .section-2 {
        display: flex;
    }
    .save-items {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
    }
    .save-item {
        list-style: initial;
        margin: 0.5rem 0;
        width: 50%;
    }
    .link-to-form {
        display: flex;
        align-items: center;
        background-color: black;
        color: white;
        margin-right: 2rem;
        padding: 0.5rem 2rem;
        img {
            margin-right: 1rem;
        }
    }
    .partners {
        margin: 10rem 0;
    }
    .ins-blocks {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 786px) {
        .section-2 {
            flex-wrap: wrap;
        }
        .link-to-form {
            margin-bottom: 1rem;
            width: 100%;
            justify-content: center;
            padding: 15px 0px;
        }
        .partners {
            margin: 0rem 0;
        }
        .ins-blocks {
            button {
                width: 100%;
            }
        } 
        .save-items {
            margin-left: 20px;
        }
        .save-item {
            width: 100%;
        }
    }
`


export const pageQuery = graphql`
query HomePageInsurance {
  homepage: allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "homepage-creditcard" } } }
  ) {
    edges {
      node {
        frontmatter {
          title
          section1 {
            heading
            subheading1
            subheading2
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
}
`

export default Insurance;
