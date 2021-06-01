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
      <Seo title="Home" />
      <Header />
      <p>JP</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </div>
  )
}

export default IndexPage
