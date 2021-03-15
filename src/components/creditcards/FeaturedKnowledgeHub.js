import React from 'react'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {graphql, useStaticQuery} from 'gatsby'

const data = graphql`
query {
  allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "knowledgehub-post" }, category: {eq: "credit-card"} } }
  ) {
    edges {
      node {
        html
        excerpt(pruneLength: 160)
        fields {
          slug
        }
        frontmatter {
          templateKey
          title
          date(formatString: "MMMM DD, YYYY")
          description
          featuredpost
          tags
          category
        }
      }
    }
  }
}
`

const FeaturedKnowledgeHub = () => {

  const response = useStaticQuery(data);
  const knowledgeHubData = response?.allMarkdownRemark?.edges
  return (
    <FeaturedKnowledgeHubContainer>
      <div className="container">
        <h2 className="section-title mb-6">Knowledge hub</h2>
        <div className="columns is-multiline">
          {knowledgeHubData.map(item => (
            <div className="column">
              <AniLink paintDrip hex="#000000" to={item.node.fields.slug}>
                <div className="kh-block">
                  <h3 className="bold is-size-4 mb-4">{item.node.frontmatter.title}</h3>
                  <div className="description">
                    <p
                      dangerouslySetInnerHTML={{
                        __html:
                          item.node.html ||
                          item.node.frontmatter.description,
                      }}
                      itemProp="description"
                    />
                  </div>
                  <p className="bold">Continue reading...</p>
                </div>
              </AniLink>
            </div>
          ))}
        </div>
      </div>
    </FeaturedKnowledgeHubContainer>
  )
}

const FeaturedKnowledgeHubContainer = styled.section`
  margin: 5rem 0;
  .kh-block {
    padding: 1rem;
    transition: all .25s linear;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    min-width: 360px;
    border-left: 4px solid #151515;
    box-shadow: 0px 4px 12px #00000029;
    :hover {
      box-shadow: -1px 10px 29px 0px rgba(0,0,0,0.8);
    }
    .description {
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    h5 {
      font-family: 'Poppins Bold';
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
  }
  @media screen and (max-width: 786px) {
    .kh-block {
      min-width: 100%;
      width: 100%;
    }
  }
`

export default FeaturedKnowledgeHub
