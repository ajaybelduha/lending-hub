import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import OurTeamForm from '../components/ourteam/OurTeamForm'
import AniLink from 'gatsby-plugin-transition-link'
import teamIcon from '../img/social/team.svg'
import { BlackButton } from '../components/common/common'

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

const OurTeam = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const members = data.allMarkdownRemark.edges;
  console.log('our team -> ', data)
  const hero = data.homepage.edges[0].node.frontmatter;

  const setModal = () => {
    setOpenModal(!openModal)
  }
  return (
    <Layout>
      <HeroContainer>
        <Hero
          title={hero.section1.heading}
          subtitle={hero.section1.subheading1}
          subtitle2={hero.section1.subheading2}
          imageSrc={hero.section1.image}
          blockItems={items}
          setOpen={setModal}
        />
        <div className="people container mt-6">
          <div className="teams-blocks">
            <TeamBlock photo={hero.section2.photoMember} name={hero.section2.name1} designation={hero.section2.designation1} />
            {/* <TeamBlock slug={'/markdown/team/ron-sally-1/'} photo={response.section3.photo2} name={response.section3.name2} designation={response.section3.designation2} /> */}
          </div>
          <div className="content-text">
            <h2 className="large-font mb-4">{hero.section2.heading}</h2>
            <p className="section-subtitle mb-4">{hero.section2.subheading}</p>
          </div>
        </div>
        <div className="grey-box"></div>
        <div className="section-3 container mt-6">
          <div className="columns">
            <div className="column is-half">
              <h2 className="large-font mb-6">We’re changing the way Canadians shop for financial products.</h2>
              <div className="black-box"></div>
              <img className="img-cover" src="/img/team-section-3-banner.png" />
            </div>
            <div className="column features-container is-half">
              <div className="features-block">
                <div className="icon-title">
                  <img src="/img/icons/protest.svg" />
                  <h3 className="section-title">Real Impact</h3>
                </div>
                <p className="">We’re changing the way Canadians shop for financial products. With every mortgage, credit card, or insurance policy compared, we help you save money.</p>
              </div>
              <div className="features-block">
                <div className="icon-title">
                  <img src="/img/icons/support.svg" />
                  <h3 className="section-title">Hands-on learning</h3>
                </div>
                <p className="">We’re growing rapidly, and with that comes exposure and the opportunity to learn new skills and contribute in meaningful ways.</p>
              </div>
              <div className="features-block">
                <div className="icon-title">
                  <img src="/img/icons/growth.svg" />
                  <h3 className="section-title">Rapid growth</h3>
                </div>
                <p className="">We want to see you thrive. We reward performance with fast-tracked growth, development opportunities, and advancement.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact container mb-6 has-text-centered">
          <h2 className="large-font">Don't see your dream job?</h2>
          <p>No problem. Send us your resume and we’ll reach out if we see a good fit.</p>
          <a href="mailto:careers@lendinghub.ca"><h3 className="title-24-nb mt-4">careers@lendinghub.ca</h3></a>
        </div>
        <OurTeamForm open={openModal} setOpen={setModal} />
      </HeroContainer>
    </Layout>
  )
}

const Hero = (props) => {
  const { title, subtitle, imageSrc, blockItems, onSelect, subtitle2 } = props
  return (
    <div className="hero">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h1 className="large-font">{title}</h1>
              <h4 className="section-subtitle mt-4">{subtitle}</h4>
              {/* <h4 className="section-subtitle mt-6">{subtitle2}</h4> */}
              <BlackButton onClick={() => props.setOpen()} className="join-team"><img src={teamIcon} />&nbsp;&nbsp;Join our team</BlackButton>
            </div>
            <div className="column is-half banner-image has-text-right">
              <Image fluid={imageSrc?.childImageSharp?.fluid} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TeamBlock = ({ photo, name, designation }) => {
  return (
    <div className="team-block has-text-centered">
      <Image fluid={photo?.childImageSharp?.fluid} />
    </div>
  )
}

export const ourTeamQuery = graphql`
query {
  allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "team" } } }
  ) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          designation
          isceo
          photo {
            childImageSharp {
              fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  homepage: allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "ourteam" } } }
  ) {
    edges {
      node {
        html
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
            heading
            subheading
            name1
            designation1
            photoMember {
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

const HeroContainer = styled.div`
    margin-top: 3%;
    .banner-image {
      width: 500px;
      margin-left: auto;
    }
    .people {
      display: flex;
      .content-text {
        width: 200%;
        height: 517px;
        background-color: #1c1c1e;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 3rem 0 18rem;
        h2 {
          color: #FFFFFF;
        }
      }
      .teams-blocks {
        position: relative;
    width: 100%;
    .team-block {
      width: 509px;
      position: absolute;
      top: -3rem;
      margin-right: auto;
      transition-duration: .3s;
      transition-property: transform;
      transition-timing-function: ease-out;
      :hover {
        transform: translateY(-8px);
      }
    }
   }
    }
    .grey-box {
      background-color: #D2D2D2;
      width: 163px;
    height: 60px;
    margin: -1rem auto 0 auto;
    position: relative;
    right: 7rem;
    }

    .section-3 {
      .black-box {
        background-color: #1c1c1e;
        width: 219px;
        height: 219px;
      }
      .img-cover {
        position: relative;
        bottom: 7rem;
        left: 2rem;
      }
      .features-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        position: relative;
        bottom: 7rem;
        .features-block {
          padding: 0 0 0 3rem;
        }
        .icon-title {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          img {
            margin-right: 2rem;
          }
        }
      }
    }
   
   .team-members {
     margin-top: 8rem;
     .flex-container {
       display: flex;
       justify-content: space-between;
       button {
         width: 286px;
       }
     }
     .items {
       margin-top: 3rem;
       display: flex;
       justify-content: flex-start;
       flex-wrap: wrap;
       .team-block {
         width: 263px;
         height: 264px;
         margin: 0 2rem;
         margin-bottom: 8rem;
         transition-duration: .3s;
        transition-property: transform;
        transition-timing-function: ease-out;
        :hover {
          transform: translateY(-8px);
        }
       }
     }
   }
   .hero {
      .join-team {
        margin-top: 3rem;
        width: 264px;
      }
   }
   @media screen and (max-width: 786px) {
    margin-top: 4rem;
    .banner-image {
      width: 100%;
    }
    .hero {
      .join-team {
        margin-top: 3rem;
        width: 100%;
      }
    }
.people {
  display: flex;
    flex-direction: column-reverse;
  .content-text {
        width: 100%;
        height: initial;
        padding: 1.5rem;
      }
  .teams-blocks {
    width: 100%;
        flex-wrap: wrap;
        .team-block {
          width: 100%;
          position: static;
          margin-right: 0;
          img {
            width: 100%;
            height: inherit;
          }
        }
      }
}
      
.grey-box {
      display: none;
    }
    .section-3 {
      .black-box {
        display: none;
      }
      .img-cover {
        position: static;
      }
      .features-container {
        position: static;
        .features-block {
          padding: 0;
          margin-bottom: 2rem;
          .icon-title {
            img {
              width: 3rem;
              margin-right: 1rem;
            }
            h3 {
              font-size: 1.5rem;
            }
          }
        }
      }
    }
    .team-members {
     margin-top: 5rem;
     .flex-container {
       display: block;
       button {
         display: none;
       }
     }
     .items {
      flex-wrap: wrap;
    justify-content: center;
       .team-block {
         width: 100%;
         margin: auto;
         height: inherit;
         margin-bottom: 3rem;
       }
     }
   }
   }
`

export default OurTeam