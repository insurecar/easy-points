import React from 'react';
import './HowItWorks.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import HowItWorksSlider from '../HowItWorksSlider/HowItWorksSlider';
import HowItWorksGraph from '../HowItWorksGraph/HowItWorksGraph';
import { Player, BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";
import video from '../../video/trailer_hd.mp4'

const HowItWorks = () => {
  const data = useStaticQuery(graphql`
    query HowItWorks {
      imageSharp(fluid: { originalName: { eq: "BG.png" } }) {
        gatsbyImageData
      }
    }
  `);

  const image = getImage(data.imageSharp.gatsbyImageData);
  return (
    <div className="how-it-works" >
      <GatsbyImage
        className="how-it-works__background"
        image={image}
        aria-hidden="true"
        alt="background"
      />

      <div className="container">
        <div className = "how-it-works__video" >
        <Player
            playsInline
            poster="/assets/poster.png"
            src={video}
          >
            <BigPlayButton position="center" className="home__video-play-button" />
          </Player>
        </div>
      
        <div className="how-it-works__header" >
          <p className="how-it-works__header-anchor" id="how-it-work">How it works</p>
          <h2 className="how-it-works__header-title">
            EasyPoints offers a loyalty system that rewards customers
          </h2>
          <p className="how-it-works__header-secondary-text">
            EasyPoints makes earning and spending points a complete breeze,
            allowing you to grow your ecommerce business.
          </p>
        </div>
        <HowItWorksSlider />
        <HowItWorksGraph />
      </div>
    </div>
  );
};

export default HowItWorks;
