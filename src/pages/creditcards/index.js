import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { graphql } from 'gatsby'
import HowItWorks from '../../components/home/HowItWorks'
import Hero from '../../components/Hero'
// import FeaturedCards from '../../components/creditcards/FeaturedCards'
import FeaturedKnowledgeHub from '../../components/creditcards/FeaturedKnowledgeHub'
import EditorsPick from '../../components/creditcards/EditorsPick'

const CreditCardHome = ({data}) => {
  const response = data.homepage.edges[0].node.frontmatter
  const items = [
    {
      key: 1,
      image: '/img/icons/surface1.svg',
      imageHover: '/img/icons/surface1_hover.svg',
      title: 'Get Started',
      link: '/creditcards/questions',
    }
  ]
  const stepItems = [
    {
      image: response.section2.point1Image,
      title: response.section2.point1,
      subtitle: response.section2.point1description
    },
    {
      image: response.section2.point2Image,
      title: response.section2.point2,
      subtitle: response.section2.point2description
    },
    {
      image: response.section2.point3Image,
      title: response.section2.point3,
      subtitle: response.section2.point3description
    },
    {
      image: response.section2.point4Image,
      title: response.section2.point4,
      subtitle: response.section2.point4description
    }
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
      <HowItWorks title={'How it works'} subtitle={''} stepItems={stepItems} />
      {/* <FeaturedCards /> */}
      <FeaturedKnowledgeHub />
      <EditorsPick type="credit-card"/>
    </Layout>
  )
}

export const pageQuery = graphql`
query HomePageCreditCard {
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
            point4
            point4description
            point4Image {
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

export default CreditCardHome
