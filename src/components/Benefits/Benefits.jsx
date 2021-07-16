import React from 'react';
import './Benefits.scss';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import Button from '../UI/Button/Button';

const Benefits = () => {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
        query Benefits {
          allImageSharp(
            filter: {
              fluid: { originalName: { regex: "/.*(benefitsImg1|benefitsImg2|benefitsImg3|benefitsBackground).*/" } }
            }
          ) {
            nodes {
              gatsbyImageData
            }
          }
        }
      `);

  const content = [
    {
      title: 'Reward more than just purchases',
      text: 'With EasyPoints, you can reward customers for a number of actions outside of the cart, from liking your social media page to creating an account with your shop. Don’t just create loyal customers - create a loyal community!',
      img: nodes[3].gatsbyImageData,
    },
    {
      title: 'Point redemption without the redirect',
      text: ' Loyalty is meant to reward, not frustrate. Most online loyalty programs utilize this clunky and disjointed setup, which diminishes the value of your program. Instead, EasyPoints focuses on the simplicity of point redemption directly from checkout. Save your customers the hassle and make it as simple as can be. ',
      img: nodes[1].gatsbyImageData,
    },
    {
      title: 'Don’t make it forgettable',
      text: 'With EasyPoints, you can reward customers for a number of actions outside of the cart, from liking your social media page to creating an account with your shop. Don’t just create loyal customers — create a loyal community!',
      img: nodes[2].gatsbyImageData,
    },
  ];

  return (
    <div className="benefits" id = "benefits">
      <div className="container">
        <div className="benefits__header">
          <p className="benefits__header-anchor" data-aos="fade-up"  data-aos-delay="150">Benefits</p>
          <h2 className="benefits__header-title" data-aos="fade-up" data-aos-delay="200">
            Loyalty is essential for growth, but oftentimes hard to maintain
          </h2>
          <p className="benefits__header-text" data-aos="fade-up" data-aos-delay="250">
            Creating an effective, engaging loyalty program is our goal at EasyPoints, and with over 10 different features, you’ll be sure to build the perfect program for both you and your customers.
          </p>
        </div>
        <div className="benefits__main">
          {content.map((elem) => (

            <div className="benefits__main-block" key={elem.title + elem.text} >
              {/* <div className="benefits__main-block-image" data-aos="zoom-out"  data-aos-delay={200}> */}
              <div className="benefits__main-block-image" data-aos="fade-up" data-aos-delay="250">

                <GatsbyImage image={getImage(elem.img)} alt="graph" className = "benefits__main-block-image-picture" />
              </div>
              {/* <div className="benefits__main-block-text" data-aos="zoom-out"  data-aos-delay={400}> */}
              <div className="benefits__main-block-text" data-aos="fade-up" data-aos-delay="250">
                <h3 className="benefits__main-block-text-title">{elem.title}</h3>
                <p className="benefits__main-block-text-paragraph">{elem.text}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
      <div className="benefits__footer">
        <GatsbyImage
          image={getImage(nodes[0].gatsbyImageData)}
          aria-hidden="true"
          className="benefits__footer-background"
          alt = 'background__footer'
        />
        <div className="container">
          <div className="benefits__footer-header">
            <h2 className="benefits__footer-header-title">
              Create a compelling rewards experience and help your business grow
            </h2>
            <p className="benefits__footer-header-text">
              Creating a loyalty program with EasyPoints is a simple but effective way to boost your customer retention strategy.
            </p>
            <Button type="secondary" text="Shopify App Store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
