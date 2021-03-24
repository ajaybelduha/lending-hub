import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout'
import Image from 'gatsby-image'
import classNames from 'classnames'
import AniLink from 'gatsby-plugin-transition-link'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import YouTube from 'react-youtube';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 786, min: 0 },
    items: 1
  }
};

// const videoIds = ['83xUvyr1Jxk',
//   'roUtNCkl0OU', 'VHZI2TnedlA', 'vT7fX45FNTI',
//   'ylzq1yuU1Tg', '3ALy53_HfCw', '9O0NYLmSrjI',
//   '83xUvyr1Jxk', 'roUtNCkl0OU', 'VHZI2TnedlA', 'vT7fX45FNTI',
//   'ylzq1yuU1Tg', '3ALy53_HfCw', '9O0NYLmSrjI']

const opts = {
  height: '100%',
  width: '100%',
  playerVars: {
    autoplay: 0,
  },
};

const items = [
  {
    image: '/img/icons/best_rates.png',
    title: 'Best Rates',
  },
  {
    image: '/img/icons/money.png',
    title: 'Save Money',
  },
  {
    image: '/img/icons/innovation.png',
    title: 'Innovation',
  },
  {
    image: '/img/icons/customized_solutions.png',
    title: 'Customized Solutions',
  },
  {
    image: '/img/icons/customer_service.png',
    title: 'Customer Service',
  },
  {
    image: '/img/icons/time.png',
    title: 'Save Time',
  },
]


const AboutUs = ({data}) => {
  const response = data.aboutus.frontmatter;
  const videoIds = Object.values(response.section4)

  const [showModal, setShowModal] = useState(false)
  const [videoId, setVideoId] = useState(videoIds[0])

  const showVideo = (item) => {
    setVideoId(item)
    setShowModal(true)
  }
  return (
    <Layout>
      <AboutUsContainer>
      <Hero
        title={response.section1.heading}
        subtitle={response.section1.subheading1}
        subtitle2={response.section1.subheading2}
        imageSrc={response.section1.image}
        blockItems={items}
      />
        <div className="full-width-image">
          <div className="text-content">
            <h3 className="title-24">{response.section2.heading}</h3>
            <h2 className="title-huge">{response.section2.subheading}</h2>
          </div>
        </div>
        <div className="people container my-6">
          <h2 className="section-title mb-6">{response.section3.heading}</h2>
          <p className="section-subtitle mb-4">{response.section3.subheading}</p>
          <div className="teams-blocks mt-5">
            <TeamBlock slug={'/markdown/team/ron-sally/'} photo={response.section3.photo1} name={response.section3.name1} designation={response.section3.designation1} />
            <TeamBlock slug={'/markdown/team/ron-sally-1/'} photo={response.section3.photo2} name={response.section3.name2} designation={response.section3.designation2} />
          </div>


        </div>
        <div className="videos-carousel-container container">
          <Carousel
            className="videos-carousel"
            responsive={responsive}
            autoPlay={false}
            autoPlaySpeed={2000}
            infinite={false}
            arrows={true}
          >


            {videoIds.map(item => {
              return (
                <div className="amazingcarousel-item-container" style={{ position: 'relative', margin: '0px 2px' }}>
                  <button onClick={() => showVideo(item)}>
                    <div className="amazingcarousel-image" style={{ overflow: 'hidden' }}>
                      <a href={`https://www.youtube.com/embed/${item}?t=33s`} data-thumbnail={`https://img.youtube.com/vi/${item}/1.jpg`} className="wondercarousellightbox wondercarousellightbox-3" data-group="wondercarousellightbox-3">
                        <div className="amazingcarousel-image-fix-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}><img src={`https://img.youtube.com/vi/${item}/0.jpg`} alt data-description style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: 'none', marginTop: '-7.156px', marginLeft: 0, visibility: 'visible' }} /></div>
                      </a>
                      <div className="amazingcarousel-play-video" style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', cursor: 'pointer', backgroundImage: 'url("https://remaxmillennium.ca/wp-content/plugins/FreemakeSliderPlugin/engine/playvideo-64-64-0.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }} />
                      <div className="amazingcarousel-hover-effect" style={{ display: 'none', position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', cursor: 'pointer', backgroundImage: 'url("https://remaxmillennium.ca/wp-content/plugins/FreemakeSliderPlugin/engine/hoveroverlay-64-64-8.png")', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }} />
                      <div style={{ display: 'none', position: 'absolute', bottom: 6, right: 6, font: '12px Arial,Tahoma,Helvetica,sans-serif', color: '#666', padding: '2px 4px', WebkitBorderRadius: 2, MozBorderRadius: 2, borderRadius: 2, backgroundColor: '#fff', opacity: '0.9', filter: 'alpha(opacity=90)', cursor: 'pointer' }}><a href="http://natribu.org/" style={{ textDecoration: 'none', font: '12px Arial,Tahoma,Helvetica,sans-serif', color: '#333' }} target="_blank">WordPress Carousel Free Version</a></div>
                    </div>
                  </button>
                </div>
              )
            })}

          </Carousel>
        </div>
        <Modal showModal={showModal} 
          setShowModal={setShowModal} 
          videoId={videoId}
        />
      </AboutUsContainer>
    </Layout>
  )
}

const TeamBlock = ({photo, name, designation, slug}) => {
  return (
    <div className="team-block has-text-centered">
      <AniLink paintDrip hex="#000000" to={slug} itemProp="url">
      <Image fluid={photo?.childImageSharp?.fluid} />
      <div className="team-desc">
        <h3 className="title-small">{name}</h3>
        <p className="">{designation}</p>
      </div>
      </AniLink>
    </div>
  )
}

const Block = ({ data }) => {
  return (
    <div
      className="block"
    >
      <figure className="image">
        <img src={data.image} />
      </figure>
      <h3 className="title-2">{data.title}</h3>
    </div>
  )
}

const Hero = (props) => {
  const { title, subtitle, imageSrc, blockItems } = props
  return (
    <div>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <h1 className="section-title">{title}</h1>
                <h4 className="section-subtitle">{subtitle}</h4>
                <div className="blocks mt-6">
                  {blockItems.map((item) => (
                    <Block data={item} />
                  ))}
                </div>
              </div>
              <div className="column banner-image is-half has-text-right">
              <Image fluid={imageSrc?.childImageSharp?.fluid} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Modal = ({showModal, setShowModal, videoId}) => {
  const responsiveData = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 786, min: 0 },
      items: 1
    }
  };

  const stopVideo = () => {
    controlVideo('stopVideo');
    setShowModal(false);
  }

  const controlVideo = (vidcontrol) => {
    var div = document.getElementById("thevideo");
    var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    iframe.postMessage('{"event":"command","func":"' + vidcontrol + '","args":""}', '*');
}
  return (
    <div className={classNames('modal', {'is-active': showModal})}>
      <div className="modal-background"></div>
      <div className="modal-content">
          <div id="thevideo">
            <YouTube id="video-lib" videoId={videoId} opts={opts} />
          </div>
      </div>
      <button onClick={() => stopVideo()} className="modal-close is-large" aria-label="close"></button>
    </div>
  )
}

export const AboutUsQuery = graphql`
query {
  aboutus: markdownRemark(frontmatter: { templateKey: { eq: "aboutus" } }) {
         frontmatter {
           templateKey
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
             backgroundImage {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
             }
           }
           section3 {
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
             name2
             designation2
             photo2 {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
             }
           }
           section4 {
             video1
             video2
             video3
             video4
             video5
             video6
             video7
             video8
             video9
             video10
             video11
             video12
             video13
             video14
           }
         }
   }
 }
`

const AboutUsContainer = styled.div`
margin-top: 3rem;
 .banner-image {
   width: 500px;
   margin-left: auto;
 }
  .blocks {
    display: flex;
    flex-wrap: wrap;
  }
  .right-image {
    width: 80%;
  }
  .full-width-image {
   
    /* The image used */
    background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url("/img/team.jpg") no-repeat;

    /* Set a specific height */
    height: 800px; 

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .text-content {
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 800px;
      width: 50%;
      padding-left: 5%;
    }
    .title-huge {
      font-size: 3rem;
      font-family: 'Poppins Bold'
    }
  }
  .block {
    text-align: center;
    padding: 1rem;
    width: 174px;
    height: 174px;
    margin-right: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #dddddd;
    .image {
      margin-bottom: 10px;
      img {
        width: 50px;
        height: 50px;
      }
    }
    h3 {
      margin-bottom: 10px;
    }
    .icon {
      width: 36px;
    }
  }
  .teams-blocks {
    display: flex;
    justify-content: flex-start;
    .team-block {
      width: 45%;
      margin-top: 2rem;
      margin-right: 3rem;
      transition-duration: .3s;
      transition-property: transform;
      transition-timing-function: ease-out;
      :hover {
        transform: translateY(-8px);
      }
    }
   }
  .videos-carousel {
    justify-content: flex-start;
  }
  #video-lib {
      height: 500px;
    }
  @media screen and (max-width: 786px) {
    .blocks {
      justify-content: flex-start;
    }
    .right-image {
    width: 100%;
  }
  .banner-image {
   width: 100%;
 }
  .teams-blocks {
        flex-wrap: wrap;
        .team-block {
          margin-right: 0;
          width: 100%;
        }
      }
    .block {
      width: 150px;
      height: 150px;
      .image {
        margin-bottom: 5px;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
    .full-width-image {
      height: 400px;
      .text-content {
        width: 100%;
        height: fit-content;
      }
      .title-huge {
        font-size: 1.5rem;
      }
    }
    .team-blocks {
    flex-wrap: wrap;
    justify-content: center;
    .team-block {
      margin-top: 2rem;
      margin-right: 0rem;
      img {
        width: 100%;
      }
    }
  }
  }
`

export default AboutUs;
