import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { BlackButton } from '../components/common/common'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { SecondaryTeamBlock } from '../pages/our-team'
import OurTeamForm from '../components/ourteam/OurTeamForm'
import facebook from '../img/social/facebook-icon.svg'
import instagram from '../img/social/instagram-icon.svg'
import twitter from '../img/social/twitter-icon.svg'
import youtube from '../img/social/twitter-icon.svg'
import linkedin from '../img/social/linkedin-icon.svg'
import mapIcon from '../img/social/maps-and-flags.svg'
import teamIcon from '../img/social/team.svg'

const TeamPost = ({ data }) => {
    const [openModal, setOpenModal] = useState(false);
    const { title, photo, location, aboutme, social, phone } = data.markdownRemark.frontmatter
    const members = data.allMarkdownRemark.edges;

    const setModal = () => {
        setOpenModal(!openModal)
    }
    return (
        <Layout>
            <MemberContainer>
                <div className="container">
                    {/* <h1>Hello from Team Post {JSON.stringify(member)}</h1> */}
                    <div className="member-hero">
                        <div className="image">
                            <Image fluid={photo?.childImageSharp.fluid} />
                        </div>
                        <div className="content">
                            <div class="title-container">
                                <div>
                                    <h2 className="section-title">{title}</h2>
                                    <div className="location">
                                        <img src={mapIcon} />
                                        <p>{location}</p>
                                    </div>
                                </div>
                                <BlackButton onClick={() => setModal()}><img src={teamIcon} />&nbsp;&nbsp;Join our team</BlackButton>
                            </div>
                            <div className="phone-number mt-4">
                                <h4>{phone}</h4>
                            </div>
                            <div className="social-links">
                                <a title="facebook" href={social.facebook}>
                                    <img
                                        src={facebook}
                                        alt="Facebook"
                                    />
                                </a>
                                <a title="twitter" href={social.twitter}>
                                    <img
                                        src={twitter}
                                        alt="Twitter"
                                    />
                                </a>
                                <a title="instagram" href={social.instagram}>
                                    <img
                                        src={instagram}
                                        alt="Instagram"
                                    />
                                </a>
                                <a title="youtube" href={social.youtube}>
                                    <img
                                        src={youtube}
                                        alt="Youtube"
                                    />
                                </a>
                                <a title="linkedin" href={social.linkedin}>
                                    <img
                                        src={linkedin}
                                        alt="Linkedin"
                                    />
                                </a>
                            </div>
                            <div className="description-container mt-6">
                                <h3 className="title-1">MORE ABOUT {title.toUpperCase()}</h3>
                                <p>{aboutme}</p>
                            </div>
                        </div>
                    </div><br/><br/>
                    <div className="more-members mt-6">
                        <div className="section-title">More Sales Representatives</div>
                        <div className="items">
                            {members.map(item => {
                                return (
                                    <SecondaryTeamBlock item={item} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <OurTeamForm open={openModal} setOpen={setModal} />
            </MemberContainer>
        </Layout>
    )
}

const MemberContainer = styled.div`
    margin-top: 6rem;
    .member-hero {
        display: flex;
        justify-content: flex-start;
        .image {
            width: 30%;
            margin-right: 3rem;
        }
        .content {
            width: 70%;
            .title-container {
                margin-bottom: 2rem;
                display: flex;
                justify-content: space-between;
                button {
                    width: 268px;
                }
                .location {
                    img {
                        margin-right: 0.5rem;
                    }
                    display: flex;
                    align-items: center;
                    font-size: 1rem;
                }
            }
            .social-links {
                a {
                    margin-right: 1rem;
                    img {
                        width: 23px;
                    }
                }
            }
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
    @media screen and (max-width: 786px) {
        .member-hero {
            flex-wrap: wrap;
            .image {
            width: 100%;
            margin-right: 0;
            margin-bottom: 2rem;
            }
            .content {
                width: 100%;
                .title-container {
                    flex-wrap: wrap;
                    justify-content: center;
                    button {
                        width: 100%;
                        display: none;
                    }
                }
                .phone-number, .social-links {
                    text-align: center;
                }
            }
        }
        .items {
            flex-wrap: wrap;
            .team-block {
                margin: 0px 0.5rem;
                width: 45%;
                height: inherit;
                margin-bottom: 3rem;
            }
        }
    }
`


export const pageQueryTeam = graphql`
  query TeamPostBySlug(
    $id: String!
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        templateKey
            title
            aboutme
            photo {
              childImageSharp {
                fluid(maxWidth: 438, maxHeight: 440, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
              }
            }
            aboutme
            phone
            email
            isceo
            location
            website
            social {
              instagram
              facebook
              linkedin
              twitter
              youtube
            }
      }
    }
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
            isceo
            designation
            photo {
                childImageSharp {
                fluid(maxWidth: 434, maxHeight: 434, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
                }
            }
            }
        }
        }
    }
    
}
`

export default TeamPost;