import React from "react"
import { graphql, Link } from "gatsby"

export const query = graphql`
  {
    products: allContentfulProduct {
      nodes {
        commonName
        fullName
        price
        slug
        galleryImage {
          file {
            url
          }
        }
        description {
          description
        }
      }
    }
  }
`

export default function Home({ data }) {
  return (
    <div>
      <h2>Zona 501</h2>
      <div>
        <ul>
          {data.products.nodes.map(product => {
            return (
              <li>
                <Link to={`/${product.slug}`}>
                  <h1>{product.commonName}</h1>
                </Link>
                <p>Price: {product.price}$</p>
                <img src={`${product.galleryImage.file.url}?w=100`} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
