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

const OurTeam = ({data}) => {
    const [openModal, setOpenModal] = useState(false);
    const members = data.allMarkdownRemark.edges;
    console.log('our team -> ',data)
    const hero = data.homepage.edges[0].node.frontmatter;

    const setModal = () => {
      setOpenModal(!openModal)
  }
    return(
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
        <div className="people container my-6">
          <h2 className="section-title mb-4">{hero.section2.heading}</h2>
          <p className="section-subtitle mb-4">{hero.section2.subheading}</p>
          <div className="teams-blocks mt-5">
            <TeamBlock photo={hero.section2.photo1} name={hero.section2.name1} designation={hero.section2.designation1} />
            {/* <TeamBlock slug={'/markdown/team/ron-sally-1/'} photo={response.section3.photo2} name={response.section3.name2} designation={response.section3.designation2} /> */}
          </div>

        </div>
          {/* <div className="container">
            <div className="our-leadership">
              <h2 className="section-title">Our Leadership</h2>
              <div className="teams-blocks">
                {members.map(item => {
                  return(
                    <TeamBlock item={item} />
                  )
                })}
              </div>
            </div>
            <div className="team-members">
              <div className="flex-container">
                <h2 className="section-title">Our Team</h2>
                <BlackButton onClick={() => setModal()}><img src={teamIcon} />&nbsp;&nbsp;Join our team</BlackButton>
              </div>
              <div className="items">
                {members.map(item => {
                  return(
                    <SecondaryTeamBlock item={item} />
                  )
                })}
              </div>
            </div>
          </div> */}
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
                  <h1 className="section-title">{title}</h1>
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
      <div className="team-desc mt-4">
        <h3 className="title-small">{name}</h3>
        <p className="">{designation}</p>
      </div>
    </div>
  )
}

// export const SecondaryTeamBlock = ({item}) => {
//   const slug = item.node.fields.slug
//   const member = item.node.frontmatter;
//   return (
//     <>
//     {!member?.isceo && 
//       <div className="team-block has-text-centered">
//         <AniLink paintDrip hex="#000000" to={slug} itemProp="url">
//           <Image fluid={member.photo?.childImageSharp?.fluid} />
//           <div className="team-desc mt-4">
//             <h3 className="title-24">{member.title}</h3>
//             <p className="">{member.designation}</p>
//           </div>
//         </AniLink>
//       </div>
//     }
//     </>
//   )
// }

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
            photo1 {
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
   .teams-blocks {
    display: flex;
    justify-content: flex-start;
    .team-block {
      width: 50%;
      margin: auto;
      transition-duration: .3s;
      transition-property: transform;
      transition-timing-function: ease-out;
      :hover {
        transform: translateY(-8px);
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

      .teams-blocks {
        flex-wrap: wrap;
        .team-block {
          width: 100%;
          margin-right: 0;
          img {
            width: 100%;
            height: inherit;
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