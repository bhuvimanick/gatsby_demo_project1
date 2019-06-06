import React from 'react'
import { graphql } from 'gatsby';

export const query= graphql`
query ($productId: String!) {
    allProductsJson(filter: {id: {eq: $productId}}) {
        edges{
          node {
            
            name
          }
        }
      }
  }

`
const Products = (props) => {
    const product = props.data.allProductsJson.edges[0].node;
    console.log(product)
    return (
       <div>
           hi product {product.name}
       </div> 
    )
}
export default Products;