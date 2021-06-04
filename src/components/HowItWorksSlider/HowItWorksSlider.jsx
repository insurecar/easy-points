import React from "react"
import "./HowItWorksSlider.scss"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"

const HowItWorksSlider = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
    query HowItWorksSlider {
      allImageSharp(
        filter: {
          fluid: { originalName: { regex: "/.*(arrow|heart|money).*/" } }
        }
      ) {
        nodes {
          gatsbyImageData
        }
      }
    }
  `)

  const content = [
    {
      img: nodes[0].gatsbyImageData,
      title: "Attract customers",
      text:
        "When your customers purchase a product from your site, they’ll be able to earn points for their order.",
    },
    {
      img: nodes[1].gatsbyImageData,
      title: "Earn",
      text: "Earn refferals, points and purchases. ",
    },
    {
      img: nodes[2].gatsbyImageData,
      title: "Spend",
      text:
        "Each point is worth a specified amount and can be used directly as a discount during checkout.",
    },
  ]

  return (
    <div className="how-it-works__slider">
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            580: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {content.map(slide => (
            <SwiperSlide>
              <div className="slide">
                <div className="slide__image">
                  <GatsbyImage image={getImage(slide.img)} />
                </div>
                <h4 className="slide__title">{slide.title}</h4>
                <p className="slide__text">{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default HowItWorksSlider
