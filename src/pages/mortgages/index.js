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
                fixed(width: 100, height: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image2{
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image3 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image4 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image5 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image6 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image7 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image8 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image9 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image10 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image11 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image12 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image13 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image14 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image15 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
            image16 {
              childImageSharp {
                fixed(width: 150) {
                  ...GatsbyImageSharpFixed
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
