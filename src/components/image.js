import { graphql, useStaticQuery } from "gatsby"
import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"
import "./image.css"
const Image = () => {
  const data = useStaticQuery(graphql`
  query ImageQuery {
    allFile(
      filter: {
        extension: {regex: "/(jpg)|(png)|(jpeg)/"}, 
        name: {nin: [ "background2"]}
      }
    ) {
      edges {
        node {
          publicURL
          base
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  `)
  return(
    <div className="image-container">
      <h1>View our destinations</h1>
      <div className="image-grid">
        {data.allFile.edges.map( (image,key)=>(
          <GatsbyImage 
            key={key}
            className="image-item"
            image={image.node.childImageSharp.gatsbyImageData}
            alt={image.node.base.split('.')[0]}
          />
        ))}
      </div>
    </div>
  )
}

export default Image
