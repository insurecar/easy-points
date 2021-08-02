import React, { useEffect } from "react"
import "./Home.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import Button from "../UI/Button/Button"
import "video-react/dist/video-react.css"
import { useI18next } from "gatsby-plugin-react-i18next"

// import AOS from 'aos';
// import "aos/dist/aos.css";

const Home = () => {
  const { language } = useI18next()

  // const {
  //   allImageSharp: { nodes },
  // } = useStaticQuery(graphql`
  //       query HomeBrand {
  //         allImageSharp(
  //           filter: {
  //             fluid: { originalName: { regex: "/.*(brand7|brand2|brand3|brand4|brand5|brand6).*/" } }
  //           }
  //         ) {
  //           nodes {
  //             gatsbyImageData
  //           }
  //         }
  //       }
  //     `);

  const {
    allMarkdownRemark: {
      edges: [
        {
          node: { frontmatter },
        },
      ],
    },
  } = useStaticQuery(graphql`
    query Home {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/how-it-work.md$/" }
          frontmatter: { en: {} }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              jp {
                title_before
            title_after
            mark_text
            subtitle
            button
            home_brands {
              icon
            }
              }
              en {
                title_before
            title_after
            mark_text
            subtitle
            button
            home_brands {
              icon
            }
              }
            }
          }
        }
      }
    }
  `)

  console.log(frontmatter[language]);

  return (
    <div className="home">
      <div className="container">
        <div className="home__header" data-aos="fade-up">
          <h1 className="home__header-title-h1">
            Give your customers even{" "}
            <span className="home__header-title-h1-mark">
              more reasons <br />{" "}
            </span>
            to come back
          </h1>
          <h2 className="home__header-title-secondary-text">
            With EasyPoints, encouraging your existing customers to spend more
            and more often has never been easier. Reward. Retain. Grow.
          </h2>

          <div data-aos="slide-up">
            <Button
              text="Shopify App Store"
              type="primaryViolet"
              className="home__button"
            />
          </div>
        </div>
        <div className="home__brand">
          <ul className="home__brand--list" data-aos="fade-up">
            {/* {nodes.reverse().map((brand) => (
              <li className="home__brand--list-item" key={brand.gatsbyImageData.images.fallback.src}>
                <GatsbyImage image={getImage(brand.gatsbyImageData)} alt="brand" />
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
