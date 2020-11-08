import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug }) {
      price
      commonName
      contentful_id
      fullName
      description {
        description
      }
      richDescription {
        json
      }
    }
  }
`
const ProductTemplate = ({ data: { contentfulProduct } }) => (
  <div>
    <h1>{contentfulProduct.commonName}</h1>
    <p>{contentfulProduct.fullName}</p>
    <p>
      <strong>Price: {contentfulProduct.price}</strong>
    </p>
    <p>{contentfulProduct.description.description}</p>
    <div>
      {documentToReactComponents(contentfulProduct.richDescription.json, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
            <img
              src={`${node.data.target.fields.file["en-US"].url}?w=300`}
              alt={node.data.target.fields.title["en-US"]}
            />
          ),
        },
      })}
    </div>
    <Link to={"/"}>back</Link>
  </div>
)

export default ProductTemplate
