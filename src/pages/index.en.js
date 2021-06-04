import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/UI/Button/Button"
import Menu from "../components/UI/Menu/Menu"
import Accordion from "../components/UI/Accordion/Accordion"
import Header from "../components/Header/Header"
import Home from "../components/Home/Home"
import HowItWorks from "../components/HowItWorks/HowItWorks"
import HowItWorksSlider from "../components/HowItWorksSlider/HowItWorksSlider"

const IndexPage = () => {
  return <HowItWorksSlider />
}

export default IndexPage
