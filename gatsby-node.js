const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const knowledgehubPost = path.resolve(`./src/templates/knowledgehub-post.js`)
  const teamsPost = path.resolve(`./src/templates/team-post.js`)
  


  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  const resultKknowledgeHub = await graphql(
    `{
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      limit: 1000
      filter: { frontmatter: { templateKey: { eq: "knowledgehub-post" } } }
    ) {
      nodes {
        id
        fields {
          slug
        }
      }
    }
  }
    `
  )

  const resultTeam = await graphql(
    `{
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "team" } } }
    ) {
      nodes {
        id
        fields {
          slug
        }
      }
    }
  }
    `
  )

  if (result.errors || resultKknowledgeHub.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes
  const postsKnowledgeHub = resultKknowledgeHub.data.allMarkdownRemark.nodes
  const postsTeam = resultTeam.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }


  // Create knowledgehub posts pages
  if (postsKnowledgeHub.length > 0) {
    postsKnowledgeHub.forEach((post, index) => {
      const previousPostId = index === 0 ? null : postsKnowledgeHub[index - 1].id
      const nextPostId = index === postsKnowledgeHub.length - 1 ? null : postsKnowledgeHub[index + 1].id

      createPage({
        path: post.fields.slug,
        component: knowledgehubPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }


 // Create Team pages
 if (postsTeam.length > 0) {
  postsTeam.forEach((post, index) => {
    const previousPostId = index === 0 ? null : postsTeam[index - 1].id
    const nextPostId = index === postsTeam.length - 1 ? null : postsTeam[index + 1].id

    createPage({
      path: post.fields.slug,
      component: teamsPost,
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
      },
    })
  })
}
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }
    type Author {
      name: String
      summary: String
    }
    type Social {
      twitter: String
    }
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }
    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }
    type Fields {
      slug: String
    }
  `)
}
