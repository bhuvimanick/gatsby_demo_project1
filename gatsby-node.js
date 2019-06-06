const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNode, createNodeField } = actions
  console.log("bhuvinide")
  console.log(JSON.stringify(node));
  // Transform the new node here and create a new node or
  // create a new node field.
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/products.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query  {
      allProductsJson {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog post pages.
    result.data.allProductsJson.edges.map(({node}) => {
   

      createPage({
        // Path for this page — required
        path: `products/${node.id}`,
        component: blogPostTemplate,
        context: {
          productId: node.id
        },
      })
      // createPage({
      //   // Path for this page — required
      //   path: `${edge.node.frontmatter.slug}`,
      //   component: blogPostTemplate,
      //   context: {
        
      //   },
      // })
    })
  })
}