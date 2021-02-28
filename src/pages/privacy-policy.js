import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { BlackButtonLink } from '../components/common/common'
import Layout from '../components/Layout'

const PrivacyPolicy = ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <PrivacyPolicyContainer>
        <div className="container">
          <article
            className="careers"
          >
            <header className="headings">
              <h1 className="section-title" itemProp="headline">
                {post.frontmatter.title}
              </h1>
            </header>
            <section
              dangerouslySetInnerHTML={{ __html: post.html }}
              itemProp="articleBody"
              className="body"
            />
            <hr />
          </article>
        </div>
      </PrivacyPolicyContainer>
    </Layout>
  )
}

const PrivacyPolicyContainer = styled.div`
  margin-top: 6%;
  .headings {
    margin-bottom: 50px;
  }
  .body {
    margin-top: 50px;
    p {
      line-height: 1.75;
      margin: 1.5em auto;
      font-size: 1.1rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    li {
      margin: 2rem 0;
      line-height: 2rem;
    }
    strong {
      font-family: 'Poppins Bold';
      font-size: 1.2rem;
    }
  }
  .contact-link {
        width: 200px;
        margin: auto;
    }
  @media screen and (max-width: 786px) {
    margin-top: 15%;
  }
`

export default PrivacyPolicy

export const pageQuery = graphql`
query {
    markdownRemark(frontmatter: { templateKey: { eq: "privacy-policy" } }) {
    			html
          frontmatter {
            templateKey
            title
          }
    }
  }
`
