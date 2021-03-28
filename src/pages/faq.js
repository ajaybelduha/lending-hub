import React from 'react';
import styled from 'styled-components'
import { graphql } from 'gatsby';
import Layout from '../components/Layout'
import Accordion from '../components/Accordion'

const Faq = ({ data, location }) => {
   console.log(data)
    const posts = data.allMarkdownRemark.edges
    const accordianData = [
        {
          title: 'Read More',
          paragraph: "Some description fo the paragraph",
        },
        {
            title: 'Read More',
            paragraph: "Some description fo the paragraph",
          },
      ]

    const createAccordianData = (items) => {
        const arrayData = posts.map(item => {
            const ques = item.node.frontmatter.title
            return {
                title: ques,
                paragraph: item.node.html
            }
        })
        return arrayData
    }

    return(
        <Layout>
            <div className="container">
                <FaqContainer>
                    <h1 className="section-title">Frequently asked questions</h1>
                    <div className="accordians">
                        {posts.length > 0 && <Accordion data={createAccordianData(posts)} />}
                    </div>
                </FaqContainer>
            </div>
        </Layout>
    )
}

const FaqContainer = styled.div`
    margin-top: 6rem;
    min-height: 700px;
    .accordians {
        margin-top: 3rem;
        .accordion-list__item {
            padding: 2rem 0;
        }
        .accordion-item__paragraph {
            line-height: 1.9;
            font-size: 1.1rem;
        }
    }
`

export const pageQuery = graphql`
query {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "faq" } } }
    ) {
      edges {
        node {
          html
          frontmatter {
            templateKey
            title
          }
        }
      }
    }
  }
`

export default Faq
