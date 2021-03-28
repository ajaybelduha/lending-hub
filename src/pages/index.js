import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import HowItWorks from '../components/home/HowItWorks'
import MaximizeSavings from '../components/MaximizeSavings'
import FeaturedBlogs from '../components/home/FeaturedBlogs'

const HomePage = ({data}) => {
  const response = data.homepage.edges[0].node.frontmatter
  const items = [
    {
      image: '/img/icons/mortgage-copy.svg',
      imageHover: '/img/icons/home-3_hover.svg',
      title: 'Mortgages',
      link: '/mortgages',
    },
    {
      image: '/img/icons/surface1.svg',
      imageHover: '/img/icons/surface1_hover.svg',
      title: 'Credit Cards',
      link: '/creditcards',
    },
    {
      image: '/img/icons/insurance.svg',
      imageHover: '/img/icons/insurance_hover.svg',
      title: 'Insurance',
      link: '/insurance',
    },
  ]
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

  return (
    <Layout>
      <Hero
        title={response.section1.heading}
        subtitle={response.section1.subheading1}
        subtitle2={response.section1.subheading2}
        imageSrc={response.section1.image}
        blockItems={items}
      />
      <HowItWorks stepItems={stepItems} />
      <MaximizeSavings data={response.section3} />
      <FeaturedBlogs />
    </Layout>
  )
}

export const pageQuery = graphql`
query HomePageMain {
  homepage: allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "homepage-main" } } }
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

export default HomePage
