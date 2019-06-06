import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"



// console.log("hai");
// console.log(data);
const productsPage = () => {

  let data1 = useStaticQuery(graphql`

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
  
`)
  // let data5=  (data1.allProductsJson.edges);
  // let data6=(data5[0].node.products);
  console.log("hai");

  return (
    <div>
      hi
      <ul>
      {data1.allProductsJson.edges.map(({ node }, index) => (
        <li key=  {node.id}>
     <Link to={`products/${node.id}`}>{node.id}
      {node.name} 
      </Link> 
        </li>
      ))}
</ul>

    </div>
  )

}
export default productsPage