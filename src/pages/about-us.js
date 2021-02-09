import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout'

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


const AboutUs = () => {
    return(
        <Layout>
            <AboutUsContainer>
                <Hero 
                    title="About Us"
                    subtitle="Lendinghub.ca has been empowering the vision of their clients since 1988. Your mortgage is important to you and to us. We aim to make every effort to be the best at what we do."
                    imageSrc="/img/aboutus.jpg"
                    blockItems={items} 
                />
                <div className="full-width-image">
                  <div className="text-content">
                    <h3 className="title-24">Our people</h3>
                    <h2 className="section-title">Meet our team of digital warriors, ready to harness the force for good.</h2>
                  </div>
                </div>
                <div className="people container mt-5">
                    <h2 className="section-title has-text-centered">Meet our team</h2>
                    <div className="team-blocks mt-5">
                      <TeamBlock />
                      <TeamBlock />
                      <TeamBlock />
                      <TeamBlock />
                  </div>
                </div>
            </AboutUsContainer>
        </Layout>
    )
}

const TeamBlock = () => {
  return (
    <div className="team-block has-text-centered">
      <img src="/img/team-member-1.jpg" />
      <p className="bold">William Joseph</p>
      <p className="bold">Developer</p>
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
                <div className="column is-half has-text-right">
                  {imageSrc && <img className="right-image" src={imageSrc} alt="home hero image" />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


const AboutUsContainer = styled.div`
margin-top: 3rem;
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
  .team-blocks {
    display: flex;
    justify-content: space-between;
    .team-block {
      img {
        width: 15rem
      }
    }
  }
  @media screen and (max-width: 786px) {
    .blocks {
      justify-content: flex-start;
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
  }
`

export default AboutUs;
