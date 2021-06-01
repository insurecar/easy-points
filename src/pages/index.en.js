import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Button from "../components/UI/Button/Button"
import Menu from "../components/UI/Menu/Menu"
import Accordion from "../components/UI/Accordion/Accordion"
import Header from "../components/Header/Header"

const IndexPage = () => {
  return (
    <div>
      {/* <Seo title="Home" /> */}
      <Header />
    </div>
  )
}

export default IndexPage
