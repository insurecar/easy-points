import React from "react"
import bg from "../../images/BG.png"
import "./HowItWorks.scss"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import HowItWorksSlider from "../HowItWorksSlider/HowItWorksSlider"

const HowItWorks = () => {
  const data = useStaticQuery(graphql`
    query HowItWorks {
      imageSharp(fluid: { originalName: { eq: "BG.png" } }) {
        gatsbyImageData
      }
    }
  `)

  const image = getImage(data.imageSharp.gatsbyImageData)
  console.log(image)
  return (
    <div className="how-it-works">
      <GatsbyImage
        className="how-it-works__background"
        image={image}
        aria-hidden="true"
      />
      <div className="container">
        <div className="how-it-works__header">
          <p className="how-it-works__header-anchor">How it works</p>
          <h2 className="how-it-works__header-title">
            EasyPoints offers a loyalty system that rewards customers
          </h2>
          <p className="how-it-works__header-secondary-text">
            EasyPoints makes earning and spending points a complete breeze,
            allowing you to grow your ecommerce business.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
