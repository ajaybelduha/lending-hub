import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Hero from '../../components/Hero'
import FeaturedMortgages from '../../components/mortgages/FeaturedMortgages'
import MortgageWatch from '../../components/mortgages/MortgageWatch'
import MaximizeSavings from '../../components/MaximizeSavings'
import FeaturedKnowledgeHub from '../../components/mortgages/FeaturedKnowledgeHub'
import EditorsPick from '../../components/creditcards/EditorsPick'
import OurPartners from '../../components/mortgages/OurPartners'

const MortgagesHome = ({data}) => {
  const response = data.homepage.edges[0].node.frontmatter
  console.log("MORTGAGE RESPONSE")
  console.log(response)
  const items = [
    {
      key: 1,
      image: '/img/icons/home.svg',
      imageHover: '/img/icons/home_hover.svg',
      title: 'Home Buying',
      link: '/mortgages/questions',
    },
    {
      key: 2,
      image: '/img/icons/mortgage.svg',
      imageHover: '/img/icons/mortgage_hover.svg',
      title: 'Refinancing Mortgage',
      link: '/mortgages/refinance/questions',
    },
    {
      key: 3,
      image: '/img/icons/renewable.svg',
      imageHover: '/img/icons/renewable_hover.svg',
      title: 'Renewal Mortgage',
      link: '/mortgages/refinance/questions',
    },
  ]
  return (
    <Layout>
      <Hero
        title={response.section1.heading}
        subtitle={response.section1.subheading1}
        subtitle2={response.section1.subheading2}
        imageSrc={response.section1.image}
        blockItems={items}
      />
      <FeaturedMortgages />
      <MortgageWatch />
      <OurPartners data={response.partners} />
      <MaximizeSavings data={response.section3} />
      <FeaturedKnowledgeHub />
      <EditorsPick type="mortgage" />
    </Layout>
  )
}

export const pageQuery = graphql`
query HomePageMortgage {
  homepage: allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "homepage-mortgage" } } }
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
          section3 {
            heading
            subheading1
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

export default MortgagesHome
