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


const Insurance = ({data}) => {
    const response = data.insurance.edges[0].node.frontmatter
    console.log("INSURANCE")
    console.log(response)
    const [openModal, setOpenModal] = useState(false);
    const [insuranceType, setInsuranceType] = useState('Home Buying')

    const stepItems = [
        {
            image: response.section2.point1Image,
            title: response.section2.point1,
            subtitle: response.section2.point1description,
          },
          {
            image: response.section2.point2Image,
            title: response.section2.point2,
            subtitle: response.section2.point2description,
          },
          {
            image: response.section2.point3Image,
            title: response.section2.point3,
            subtitle: response.section2.point3description,
          },
    ]

    const setModal = (type) => {
        setInsuranceType(type)
        setOpenModal(!openModal)
    }
    return(
        <Layout>
            <InsuranceContainer>
                <InsuranceHero 
                    title={response.section1.heading}
                    subtitle={response.section1.subheading1}
                    imageSrc={response.section1.image}
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
                        <OurPartners data={response.partners} />
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
                <InsuranceForm insuranceType={insuranceType} open={openModal} setOpen={setModal} />
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
    insurance: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "insurance" } } }
    ) {
      edges {
        node {
          frontmatter {
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
            section2 {
            point1
            point1Image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
            point1description
            point2
            point2description
            point2Image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
            point3
            point3description
            point3Image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
              }
            }
        }
        partners{
          heading
          image1 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image2{
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image3 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image4 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image5 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image6 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image7 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image8 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image9 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image10 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image11 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image12 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image13 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image14 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image15 {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          } 
          image16 {
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
