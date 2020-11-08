exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    {
      allContentfulProduct {
        nodes {
          commonName
          fullName
          price
          description {
            description
          }
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(
      "Error loading products",
      JSON.stringify(result.errors, null, 2)
    )
  }

  result.data.allContentfulProduct.nodes.forEach(product => {
    actions.createPage({
      path: `/${product.slug}/`,
      component: require.resolve("./templates/product-template.js"),
      context: {
        slug: product.slug,
      },
    })
  })
}
