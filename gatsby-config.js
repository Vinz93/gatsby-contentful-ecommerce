/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require('dotenv').config();

console.log({
  token: process.env.CONTENTFUL_ACCESS_TOKEN
})

module.exports = {
  /* Your site config here */
  plugins: [{
   resolve: 'gatsby-source-contentful',
   options: {
     spaceId: 'u7a44gonzwk8',
     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
     host: `preview.contentful.com`,
   } 
  }],
}
